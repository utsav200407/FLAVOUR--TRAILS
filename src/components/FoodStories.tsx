import { useState, useMemo } from 'react';
import { foodStoriesCollection, type FoodStory } from '../data/foodStoriesData';
import { 
  BookOpen, 
  MapPin, 
  Quote, 
  Search, 
  Sparkles, 
  ChevronRight, 
  UtensilsCrossed, 
  ScrollText,
  User,
  Heart
} from 'lucide-react';
import './FoodStories.css';

interface FoodStoriesProps {
  onBackToHome: () => void;
  onSelectState: (stateId: string, dishId?: string) => void;
}

export const FoodStories = ({ onBackToHome, onSelectState }: FoodStoriesProps) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeStoryModal, setActiveStoryModal] = useState<FoodStory | null>(null);

  const filteredStories = useMemo(() => {
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
      {/* Top Banner */}
      <div className="stories-hero-banner">
        <div className="stories-hero-inner">
          <div className="stories-breadcrumb">
            <button onClick={onBackToHome} className="stories-breadcrumb-btn">
              Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="stories-breadcrumb-current">Stories from the Hearth</span>
          </div>

          <div className="stories-hero-badge">
            <ScrollText size={16} className="icon-gold" />
            <span>ORAL TRADITIONS &amp; LIVING MEMORIES</span>
          </div>

          <h1 className="stories-hero-title">Stories from the Hearth</h1>
          <p className="stories-hero-subtitle">
            Beyond measurements and ingredients lie the lived memories of grandmothers, desert shepherds, temple botis, and forest foragers. These are the oral histories, childhood recollections, and ancestral lore that give our food its beating heart.
          </p>

          <div className="stories-stats-bar">
            <span className="story-stat-chip">
              <Heart size={14} className="icon-terracotta" />
              <strong>{foodStoriesCollection.length}</strong> Curated Oral Memories
            </span>
            <span className="story-stat-chip">
              <Sparkles size={14} className="icon-gold" />
              Living Cultural Heritage
            </span>
          </div>
        </div>
      </div>

      <div className="stories-content-wrapper">
        {/* Filter and Search Bar */}
        <div className="stories-toolbar">
          <div className="stories-search-box">
            <Search size={18} className="stories-search-icon" />
            <input
              type="text"
              placeholder="Search stories by dish, elder, location, or memory..."
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

        {/* Stories Grid */}
        <div className="stories-grid">
          {filteredStories.map((story) => (
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
                    onClick={() => setActiveStoryModal(story)}
                    className="btn-read-full-story"
                  >
                    <BookOpen size={15} />
                    <span>Read Full Story</span>
                  </button>

                  <button
                    onClick={() => onSelectState(story.stateId, story.dishId)}
                    className="btn-view-dish-recipe"
                    title={`View ${story.dishName} recipe and dossier`}
                  >
                    <span>View Recipe Dossier</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Read Full Story Modal */}
        {activeStoryModal && (
          <div 
            className="story-modal-backdrop"
            onClick={() => setActiveStoryModal(null)}
            role="dialog"
            aria-modal="true"
          >
            <div 
              className="story-modal-card" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="story-modal-close-btn"
                onClick={() => setActiveStoryModal(null)}
                aria-label="Close story"
              >
                ✕
              </button>

              <div className="story-modal-hero">
                <img 
                  src={activeStoryModal.imageUrl} 
                  alt={activeStoryModal.title} 
                  className="story-modal-hero-img"
                />
                <div className="story-modal-hero-overlay">
                  <div className="modal-hero-badges">
                    <span className="modal-badge-state">{activeStoryModal.stateName} · {activeStoryModal.region} India</span>
                    <span className="modal-badge-theme">{activeStoryModal.themeTag}</span>
                  </div>
                  <h2 className="story-modal-title">{activeStoryModal.title}</h2>
                  <p className="story-modal-sub">{activeStoryModal.subtitle}</p>
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
                      <h4 className="narrator-box-name">{activeStoryModal.narrator.name}</h4>
                      <p className="narrator-box-role">{activeStoryModal.narrator.roleOrTitle}</p>
                      <span className="narrator-box-location">
                        <MapPin size={13} className="inline-icon" /> {activeStoryModal.narrator.location}
                      </span>
                    </div>
                  </div>
                  <div className="narrator-box-right">
                    <span className="dish-target-label">Featured Heirloom Dish:</span>
                    <span className="dish-target-name">{activeStoryModal.dishName} ({activeStoryModal.nativeName})</span>
                  </div>
                </div>

                {/* Primary Story Text */}
                <div className="modal-narrative-prose">
                  <div className="prose-pullquote">
                    <Quote size={28} className="quote-accent" />
                    <p>{activeStoryModal.pullQuote}</p>
                  </div>

                  {activeStoryModal.storyParagraphs.map((para, i) => (
                    <p key={i} className="story-paragraph">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Sensory Flashback Chips */}
                <div className="modal-sensory-block">
                  <h4 className="sensory-block-title">
                    <Sparkles size={16} className="icon-gold" />
                    <span>Sensory Memories of this Dish</span>
                  </h4>
                  <div className="sensory-cards-grid">
                    {activeStoryModal.sensoryMemories.map((sm, idx) => (
                      <div key={idx} className="sensory-card">
                        <span className="sensory-label">{sm.label}</span>
                        <p className="sensory-desc">{sm.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Historical & Cultural Context Callout */}
                <div className="modal-history-callout">
                  <div className="history-callout-header">
                    <ScrollText size={18} className="icon-gold" />
                    <h4>Historical &amp; Cultural Context</h4>
                  </div>
                  <p>{activeStoryModal.historicalContext}</p>
                </div>
              </div>

              {/* Modal Footer with Recipe Jump */}
              <div className="story-modal-footer">
                <button
                  onClick={() => {
                    const sid = activeStoryModal.stateId;
                    const did = activeStoryModal.dishId;
                    setActiveStoryModal(null);
                    onSelectState(sid, did);
                  }}
                  className="modal-open-recipe-btn"
                >
                  <UtensilsCrossed size={16} />
                  <span>Open Full {activeStoryModal.dishName} Recipe Dossier</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
