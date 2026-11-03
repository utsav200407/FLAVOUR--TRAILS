import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  oralAudioStories, 
  foodStoriesCollection, 
  type OralAudioStory, 
  type FoodStory 
} from '../data/foodStoriesData';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Mic, 
  Headphones, 
  Sparkles, 
  BookOpen, 
  MapPin, 
  Quote, 
  Search, 
  ChevronRight, 
  ScrollText, 
  User, 
  Compass, 
  FileText,
  UtensilsCrossed
} from 'lucide-react';
import './FoodStories.css';

interface FoodStoriesProps {
  onBackToHome: () => void;
  onSelectState: (stateId: string, dishId?: string) => void;
}

export const FoodStories: React.FC<FoodStoriesProps> = ({ onBackToHome, onSelectState }) => {
  // Archive view modes: 'all' | 'audio' | 'written'
  const [activeStoryType, setActiveStoryType] = useState<'all' | 'audio' | 'written'>('audio');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Active story modals
  const [activeAudioModal, setActiveAudioModal] = useState<OralAudioStory | null>(null);
  const [activeWrittenModal, setActiveWrittenModal] = useState<FoodStory | null>(null);

  // Audio Player State
  const [playingStoryId, setPlayingStoryId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Find currently active audio story object
  const currentAudioStory = useMemo(() => {
    return oralAudioStories.find(s => s.id === playingStoryId) || null;
  }, [playingStoryId]);

  // Handle Play/Pause
  const handleTogglePlay = (story: OralAudioStory) => {
    if (playingStoryId === story.id) {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play().catch(console.error);
        } else {
          audioRef.current.pause();
        }
      }
    } else {
      setPlayingStoryId(story.id);
      setCurrentTime(0);
      if (audioRef.current) {
        audioRef.current.src = story.audioUrl;
        audioRef.current.playbackRate = playbackRate;
        audioRef.current.play().catch(console.error);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (audioRef.current) {
      audioRef.current.currentTime = targetTime;
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleRateChange = () => {
    const rates = [1, 1.25, 1.5];
    const nextRate = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  // Sync native audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onEnded = () => {
      setPlayingStoryId(null);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  // Filtered audio stories
  const filteredAudioStories = useMemo(() => {
    return oralAudioStories.filter((story) => {
      const matchesRegion = selectedRegion === 'All' || story.region === selectedRegion || story.region === 'Pan-India';
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        story.title.toLowerCase().includes(q) ||
        story.dishName.toLowerCase().includes(q) ||
        story.speaker.name.toLowerCase().includes(q) ||
        story.speaker.location.toLowerCase().includes(q) ||
        story.themeTag.toLowerCase().includes(q) ||
        story.fullTranscript.toLowerCase().includes(q)
      );
      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  // Filtered written stories
  const filteredWrittenStories = useMemo(() => {
    return foodStoriesCollection.filter((story) => {
      const matchesRegion = selectedRegion === 'All' || story.region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        story.title.toLowerCase().includes(q) ||
        story.dishName.toLowerCase().includes(q) ||
        story.nativeName.toLowerCase().includes(q) ||
        story.stateName.toLowerCase().includes(q) ||
        story.narrator.name.toLowerCase().includes(q) ||
        story.narrator.location.toLowerCase().includes(q) ||
        story.themeTag.toLowerCase().includes(q) ||
        story.storyParagraphs.some(p => p.toLowerCase().includes(q))
      );
      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, searchQuery]);

  const regions = ['All', 'North', 'South', 'East', 'West', 'North-East'];

  return (
    <div className="food-stories-page">
      {/* Hidden Global Audio Element */}
      <audio ref={audioRef} preload="metadata" />

      {/* Top Hero Banner */}
      <div className="stories-hero-banner">
        <div className="stories-hero-inner">
          <div className="stories-breadcrumb">
            <button onClick={onBackToHome} className="stories-breadcrumb-btn">
              Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="stories-breadcrumb-current">Oral Food Stories</span>
          </div>

          <div className="stories-hero-badge">
            <Mic size={15} className="icon-gold" />
            <span>ORAL CULINARY ARCHIVE · PEOPLE'S LIVING VOICES</span>
          </div>

          <h1 className="stories-hero-title">Oral Food Stories</h1>
          <p className="stories-hero-subtitle">
            Preserving India’s culinary heritage through the living voices of its people. Listen to personal memories, family kitchen rituals, nostalgic homecoming dishes, and generational traditions recorded directly in the voices of those who hold them dear.
          </p>

          <div className="stories-stats-bar">
            <span className="story-stat-chip highlight-audio">
              <Headphones size={15} className="icon-terracotta" />
              <strong>{oralAudioStories.length}</strong> Authentic Recorded Voice Stories
            </span>
            <span className="story-stat-chip">
              <ScrollText size={15} className="icon-gold" />
              <strong>{foodStoriesCollection.length}</strong> Elder Memory Chronicles
            </span>
            <span className="story-stat-chip">
              <Sparkles size={14} className="icon-gold" />
              Living Oral History Project
            </span>
          </div>
        </div>
      </div>

      <div className="stories-content-wrapper">
        {/* Story Format Tabs */}
        <div className="story-format-selector">
          <button
            className={`format-tab-btn ${activeStoryType === 'audio' ? 'active' : ''}`}
            onClick={() => setActiveStoryType('audio')}
          >
            <Mic size={17} />
            <span>Recorded Voice Stories</span>
            <span className="format-count-pill">{oralAudioStories.length}</span>
          </button>
          <button
            className={`format-tab-btn ${activeStoryType === 'written' ? 'active' : ''}`}
            onClick={() => setActiveStoryType('written')}
          >
            <ScrollText size={17} />
            <span>Elder Field Chronicles</span>
            <span className="format-count-pill">{foodStoriesCollection.length}</span>
          </button>
          <button
            className={`format-tab-btn ${activeStoryType === 'all' ? 'active' : ''}`}
            onClick={() => setActiveStoryType('all')}
          >
            <Compass size={17} />
            <span>All Oral Traditions</span>
            <span className="format-count-pill">{oralAudioStories.length + foodStoriesCollection.length}</span>
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="stories-toolbar">
          <div className="stories-search-box">
            <Search size={18} className="stories-search-icon" />
            <input
              type="text"
              placeholder="Search by dish, storyteller, memory, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="stories-search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="stories-search-clear">
                ✕
              </button>
            )}
          </div>

          <div className="stories-region-chips">
            {regions.map((reg) => (
              <button
                key={reg}
                className={`region-chip ${selectedRegion === reg ? 'active' : ''}`}
                onClick={() => setSelectedRegion(reg)}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* ===================================================================
            SECTION 1: RECORDED VOICE STORIES (AUDIO SHOWCASE)
            =================================================================== */}
        {(activeStoryType === 'audio' || activeStoryType === 'all') && (
          <section className="oral-audio-section">
            <div className="section-title-lockup">
              <div className="section-title-badge">
                <Headphones size={15} />
                <span>HEAR IN THEIR OWN VOICES</span>
              </div>
              <h2 className="oral-section-heading">Recorded Food Memories</h2>
              <p className="oral-section-sub">
                Click play on any recording to hear authentic memories of street corners, family kitchens, and nostalgic homecoming feasts.
              </p>
            </div>

            <div className="oral-audio-grid">
              {filteredAudioStories.map((story) => {
                const isCurrentPlaying = playingStoryId === story.id && audioRef.current && !audioRef.current.paused;

                return (
                  <article key={story.id} className={`oral-audio-card ${playingStoryId === story.id ? 'is-active-player' : ''}`}>
                    <div className="oral-card-media">
                      <img 
                        src={story.imageUrl} 
                        alt={story.dishName} 
                        className="oral-card-image"
                        loading="lazy" 
                      />
                      <div className="oral-card-media-overlay"></div>

                      <div className="oral-badge-row">
                        <span className="oral-pill-badge live-voice">
                          <Mic size={12} />
                          <span>VOICE RECORDING</span>
                        </span>
                        <span className="oral-pill-badge duration-badge">
                          {story.durationFormatted}
                        </span>
                      </div>

                      {/* Large Center Play Trigger */}
                      <button 
                        className={`oral-media-play-btn ${isCurrentPlaying ? 'playing' : ''}`}
                        onClick={() => handleTogglePlay(story)}
                        aria-label={isCurrentPlaying ? 'Pause story' : 'Play story'}
                      >
                        {isCurrentPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                      </button>

                      {/* Animated Waveform Indicator */}
                      {isCurrentPlaying && (
                        <div className="audio-live-waveform">
                          <span className="wave-bar bar-1"></span>
                          <span className="wave-bar bar-2"></span>
                          <span className="wave-bar bar-3"></span>
                          <span className="wave-bar bar-4"></span>
                          <span className="wave-bar bar-5"></span>
                        </div>
                      )}
                    </div>

                    <div className="oral-card-body">
                      <div className="oral-dish-tagline">
                        <span className="oral-dish-name">{story.dishName}</span>
                        {story.nativeName && <span className="oral-dish-native">{story.nativeName}</span>}
                      </div>

                      <h3 className="oral-card-title">{story.title}</h3>

                      {/* Storyteller Byline */}
                      <div className="oral-speaker-row">
                        <div className="oral-speaker-avatar">
                          <User size={15} className="icon-gold" />
                        </div>
                        <div className="oral-speaker-meta">
                          <span className="oral-speaker-name">{story.speaker.roleOrIdentity}</span>
                          <span className="oral-speaker-sub">
                            {story.speaker.location} · {story.speaker.language}
                          </span>
                        </div>
                      </div>

                      {/* Pull Quote */}
                      <div className="oral-quote-container">
                        <Quote size={18} className="quote-accent" />
                        <p className="oral-quote-text">“{story.pullQuote}”</p>
                      </div>

                      {/* Embedded Mini Player Control */}
                      <div className="oral-mini-player">
                        <button
                          className={`mini-play-toggle ${isCurrentPlaying ? 'active' : ''}`}
                          onClick={() => handleTogglePlay(story)}
                        >
                          {isCurrentPlaying ? <Pause size={14} /> : <Play size={14} />}
                          <span>{isCurrentPlaying ? 'Pause Voice' : 'Listen Now'}</span>
                        </button>
                        <span className="mini-player-time">
                          {playingStoryId === story.id ? formatTime(currentTime) : '0:00'} / {story.durationFormatted}
                        </span>
                      </div>

                      {/* Action Triggers */}
                      <div className="oral-card-footer">
                        <button 
                          className="btn-read-transcript"
                          onClick={() => setActiveAudioModal(story)}
                        >
                          <FileText size={14} />
                          <span>View Full Transcript</span>
                        </button>

                        {story.relatedStateId && (
                          <button
                            className="btn-link-dish"
                            onClick={() => onSelectState(story.relatedStateId!, story.relatedDishId)}
                            title="Explore regional recipe archive"
                          >
                            <span>Explore Recipe</span>
                            <ChevronRight size={13} />
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* ===================================================================
            SECTION 2: ELDER FIELD MEMORIES (WRITTEN MONOLOGUES)
            =================================================================== */}
        {(activeStoryType === 'written' || activeStoryType === 'all') && (
          <section className="written-stories-section">
            <div className="section-title-lockup">
              <div className="section-title-badge">
                <ScrollText size={15} />
                <span>ANCESTRAL HEARTH CHRONICLES</span>
              </div>
              <h2 className="oral-section-heading">Elder Memory Chronicles</h2>
              <p className="oral-section-sub">
                Field documentation of ancestral culinary memories from village elders, temple cooks, and forest foragers across India.
              </p>
            </div>

            <div className="stories-grid">
              {filteredWrittenStories.map((story) => (
                <article key={story.id} className="story-card">
                  <div className="story-card-image-wrap">
                    <img
                      src={story.imageUrl}
                      alt={story.title}
                      className="story-card-img"
                      loading="lazy"
                    />
                    <div className="story-img-gradient"></div>

                    <div className="story-card-top-badges">
                      <span className="story-state-badge">
                        {story.stateName} · {story.region}
                      </span>
                      <span className="story-theme-badge">{story.themeTag}</span>
                    </div>

                    <div className="story-dish-ribbon">
                      <span className="ribbon-dish-name">{story.dishName}</span>
                      {story.nativeName && (
                        <span className="ribbon-native-name">({story.nativeName})</span>
                      )}
                    </div>
                  </div>

                  <div className="story-card-content">
                    <span className="story-era-tag">{story.eraTag}</span>
                    <h3 className="story-title">{story.title}</h3>
                    <p className="story-subtitle">{story.subtitle}</p>

                    {/* Narrator Byline */}
                    <div className="narrator-byline">
                      <div className="narrator-avatar">
                        <User size={16} className="icon-gold" />
                      </div>
                      <div className="narrator-meta">
                        <span className="narrator-name">{story.narrator.name}</span>
                        <span className="narrator-role-location">
                          {story.narrator.roleOrTitle} · {story.narrator.location}
                        </span>
                      </div>
                    </div>

                    {/* Pull Quote */}
                    <div className="story-pull-quote">
                      <Quote size={20} className="quote-mark-icon" />
                      <p>“{story.pullQuote}”</p>
                    </div>

                    {/* Story Action Buttons */}
                    <div className="story-card-actions">
                      <button
                        onClick={() => setActiveWrittenModal(story)}
                        className="btn-read-full-story"
                      >
                        <BookOpen size={15} />
                        <span>Read Chronicle</span>
                      </button>

                      <button
                        onClick={() => onSelectState(story.stateId, story.dishId)}
                        className="btn-view-dish-recipe"
                        title={`View ${story.dishName} recipe and dossier`}
                      >
                        <span>View Recipe</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ===================================================================
          FLOATING STICKY AUDIO PLAYER (ACTIVE WHEN AN AUDIO IS PLAYING)
          =================================================================== */}
      {currentAudioStory && (
        <aside className="sticky-audio-bar" aria-label="Audio Story Player">
          <div className="sticky-player-inner">
            <div className="sticky-track-info">
              <img 
                src={currentAudioStory.imageUrl} 
                alt={currentAudioStory.dishName} 
                className="sticky-track-thumb" 
              />
              <div className="sticky-track-meta">
                <span className="sticky-track-dish">{currentAudioStory.dishName}</span>
                <span className="sticky-track-speaker">Voice: {currentAudioStory.speaker.roleOrIdentity} · {currentAudioStory.speaker.location}</span>
              </div>
            </div>

            <div className="sticky-controls-center">
              <div className="sticky-buttons-row">
                <button 
                  className="sticky-play-pause-btn"
                  onClick={() => handleTogglePlay(currentAudioStory)}
                  aria-label={audioRef.current && !audioRef.current.paused ? 'Pause' : 'Play'}
                >
                  {audioRef.current && !audioRef.current.paused ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
                </button>

                <div className="sticky-time-slider">
                  <span className="slider-time-label">{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min={0}
                    max={duration || currentAudioStory.durationSeconds}
                    step={0.5}
                    value={currentTime}
                    onChange={handleSeek}
                    className="audio-scrub-slider"
                  />
                  <span className="slider-time-label">{formatTime(duration || currentAudioStory.durationSeconds)}</span>
                </div>
              </div>
            </div>

            <div className="sticky-extra-tools">
              <button 
                className="btn-playback-rate"
                onClick={handleRateChange}
                title="Playback speed"
              >
                {playbackRate}x
              </button>

              <button 
                className="btn-volume-toggle"
                onClick={handleToggleMute}
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
              </button>

              <button 
                className="btn-modal-transcript-link"
                onClick={() => setActiveAudioModal(currentAudioStory)}
                title="Open transcript"
              >
                <FileText size={16} />
                <span>Transcript</span>
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* ===================================================================
          AUDIO STORY TRANSCRIPT & CONTEXT MODAL
          =================================================================== */}
      {activeAudioModal && (
        <div 
          className="story-modal-backdrop"
          onClick={() => setActiveAudioModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="story-modal-card audio-story-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="story-modal-close-btn"
              onClick={() => setActiveAudioModal(null)}
              aria-label="Close story"
            >
              ✕
            </button>

            <div className="story-modal-hero">
              <img 
                src={activeAudioModal.imageUrl} 
                alt={activeAudioModal.dishName} 
                className="story-modal-hero-img"
              />
              <div className="story-modal-hero-overlay">
                <div className="modal-hero-badges">
                  <span className="modal-badge-voice">
                    <Mic size={13} /> RECORDED VOICE
                  </span>
                  <span className="modal-badge-theme">{activeAudioModal.themeTag}</span>
                  <span className="modal-badge-state">{activeAudioModal.durationFormatted}</span>
                </div>
                <h2 className="story-modal-title">{activeAudioModal.title}</h2>
                <p className="story-modal-sub">{activeAudioModal.subtitle}</p>
              </div>
            </div>

            <div className="story-modal-body">
              {/* Speaker Card */}
              <div className="modal-narrator-box">
                <div className="narrator-box-left">
                  <div className="narrator-icon-wrap mic-icon-gold">
                    <Mic size={22} className="icon-gold" />
                  </div>
                  <div>
                    <h4 className="narrator-box-name">{activeAudioModal.speaker.roleOrIdentity}</h4>
                    <p className="narrator-box-role">Recorded Oral Contributor</p>
                    <span className="narrator-box-location">
                      <MapPin size={13} className="inline-icon" /> {activeAudioModal.speaker.location} · Language: {activeAudioModal.speaker.language}
                    </span>
                  </div>
                </div>

                <div className="narrator-box-right">
                  <button 
                    className="modal-audio-listen-btn"
                    onClick={() => handleTogglePlay(activeAudioModal)}
                  >
                    {playingStoryId === activeAudioModal.id && audioRef.current && !audioRef.current.paused ? (
                      <>
                        <Pause size={16} />
                        <span>Pause Audio</span>
                      </>
                    ) : (
                      <>
                        <Play size={16} />
                        <span>Play Voice Recording ({activeAudioModal.durationFormatted})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Word-For-Word Spoken Transcript */}
              <div className="spoken-transcript-block">
                <div className="block-header-label">
                  <FileText size={16} className="icon-gold" />
                  <span>SPOKEN TRANSCRIPT (WORD-FOR-WORD)</span>
                </div>
                <div className="spoken-transcript-text">
                  {activeAudioModal.fullTranscript.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Cultural Context & Story Behind the Dish */}
              <div className="modal-narrative-prose">
                <div className="block-header-label">
                  <BookOpen size={16} className="icon-gold" />
                  <span>CULTURAL CONTEXT &amp; CULINARY HERITAGE</span>
                </div>
                {activeAudioModal.culturalStory.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Sensory Memory Profile */}
              <div className="modal-sensory-section">
                <h4 className="sensory-section-heading">Sensory Memory Blueprint</h4>
                <div className="sensory-cards-row">
                  {activeAudioModal.sensoryMemories.map((sm, i) => (
                    <div key={i} className="sensory-memory-card">
                      <span className="sensory-label">{sm.label}</span>
                      <p className="sensory-desc">{sm.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer Call to Action */}
              <div className="modal-footer-cta">
                <button
                  onClick={() => {
                    setActiveAudioModal(null);
                    if (activeAudioModal.relatedStateId) {
                      onSelectState(activeAudioModal.relatedStateId, activeAudioModal.relatedDishId);
                    }
                  }}
                  className="btn-modal-explore-state"
                >
                  <UtensilsCrossed size={16} />
                  <span>Open Full Recipe Dossier</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          ELDER FIELD CHRONICLE MODAL
          =================================================================== */}
      {activeWrittenModal && (
        <div 
          className="story-modal-backdrop"
          onClick={() => setActiveWrittenModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="story-modal-card" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="story-modal-close-btn"
              onClick={() => setActiveWrittenModal(null)}
              aria-label="Close story"
            >
              ✕
            </button>

            <div className="story-modal-hero">
              <img 
                src={activeWrittenModal.imageUrl} 
                alt={activeWrittenModal.title} 
                className="story-modal-hero-img"
              />
              <div className="story-modal-hero-overlay">
                <div className="modal-hero-badges">
                  <span className="modal-badge-state">{activeWrittenModal.stateName} · {activeWrittenModal.region} India</span>
                  <span className="modal-badge-theme">{activeWrittenModal.themeTag}</span>
                </div>
                <h2 className="story-modal-title">{activeWrittenModal.title}</h2>
                <p className="story-modal-sub">{activeWrittenModal.subtitle}</p>
              </div>
            </div>

            <div className="story-modal-body">
              {/* Narrator Profile Box */}
              <div className="modal-narrator-box">
                <div className="narrator-box-left">
                  <div className="narrator-icon-wrap">
                    <User size={24} className="icon-gold" />
                  </div>
                  <div>
                    <h4 className="narrator-box-name">{activeWrittenModal.narrator.name}</h4>
                    <p className="narrator-box-role">{activeWrittenModal.narrator.roleOrTitle}</p>
                    <span className="narrator-box-location">
                      <MapPin size={13} className="inline-icon" /> {activeWrittenModal.narrator.location}
                    </span>
                  </div>
                </div>
                <div className="narrator-box-right">
                  <span className="dish-target-label">Featured Heirloom Dish:</span>
                  <span className="dish-target-name">{activeWrittenModal.dishName} ({activeWrittenModal.nativeName})</span>
                </div>
              </div>

              {/* Primary Story Text */}
              <div className="modal-narrative-prose">
                <div className="prose-pullquote">
                  <Quote size={28} className="modal-quote-icon" />
                  <p>“{activeWrittenModal.pullQuote}”</p>
                </div>

                {activeWrittenModal.storyParagraphs.map((para, i) => (
                  <p key={i} className="prose-paragraph">{para}</p>
                ))}
              </div>

              {/* Sensory Memory Profile */}
              <div className="modal-sensory-section">
                <h4 className="sensory-section-heading">Sensory Memory Blueprint</h4>
                <div className="sensory-cards-row">
                  {activeWrittenModal.sensoryMemories.map((sm, i) => (
                    <div key={i} className="sensory-memory-card">
                      <span className="sensory-label">{sm.label}</span>
                      <p className="sensory-desc">{sm.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historical Context Box */}
              <div className="modal-historical-box">
                <div className="historical-box-header">
                  <Compass size={18} className="icon-gold" />
                  <h4>Historical &amp; Cultural Roots</h4>
                </div>
                <p>{activeWrittenModal.historicalContext}</p>
              </div>

              {/* Modal Footer Call to Action */}
              <div className="modal-footer-cta">
                <button
                  onClick={() => {
                    setActiveWrittenModal(null);
                    onSelectState(activeWrittenModal.stateId, activeWrittenModal.dishId);
                  }}
                  className="btn-modal-explore-state"
                >
                  <UtensilsCrossed size={16} />
                  <span>Open Full Recipe Dossier</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
