import { useState, useMemo } from 'react';
import { 
  projectMissionVision, 
  teamMembers, 
  projectReferences, 
  type ReferenceCategory 
} from '../data/aboutData';
import { 
  Compass, 
  GraduationCap, 
  Target, 
  Eye, 
  Users, 
  BookOpen, 
  ExternalLink, 
  Search, 
  MapPin, 
  Sparkles, 
  Award,
  ArrowRight
} from 'lucide-react';
import './AboutUs.css';

interface AboutUsProps {
  onBackToHome: () => void;
  onSelectState?: (stateId: string) => void;
}

export const AboutUs = ({ onBackToHome, onSelectState }: AboutUsProps) => {
  const [activeRefCategory, setActiveRefCategory] = useState<ReferenceCategory | 'all'>('all');
  const [refSearchQuery, setRefSearchQuery] = useState('');

  // Filtered references
  const filteredReferences = useMemo(() => {
    return projectReferences.filter((ref) => {
      const matchesCategory = activeRefCategory === 'all' || ref.category === activeRefCategory;
      const q = refSearchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        ref.title.toLowerCase().includes(q) ||
        ref.authorOrOrg.toLowerCase().includes(q) ||
        ref.publisherOrWebsite.toLowerCase().includes(q) ||
        ref.regionOrTopic.toLowerCase().includes(q)
      );
      return matchesCategory && matchesSearch;
    });
  }, [activeRefCategory, refSearchQuery]);

  const categories: { id: ReferenceCategory | 'all'; label: string; count: number }[] = [
    { id: 'all', label: 'All References', count: projectReferences.length },
    { id: 'books', label: 'A. Books & Literature', count: projectReferences.filter(r => r.category === 'books').length },
    { id: 'academic', label: 'B. Academic Research', count: projectReferences.filter(r => r.category === 'academic').length },
    { id: 'official', label: 'C. Official & Institutional', count: projectReferences.filter(r => r.category === 'official').length },
    { id: 'digital', label: 'D. Digital Sources', count: projectReferences.filter(r => r.category === 'digital').length }
  ];

  return (
    <div className="about-us-page">
      {/* Top Breadcrumb & Action Banner */}
      <div className="about-hero-header">
        <div className="about-hero-inner">
          <div className="about-breadcrumb">
            <button onClick={onBackToHome} className="about-breadcrumb-btn">
              Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="about-breadcrumb-current">About Us</span>
          </div>

          <div className="about-hero-badge">
            <GraduationCap size={16} className="icon-gold" />
            <span>GASTRONOMIC STUDIES ACADEMIC PROJECT</span>
          </div>

          <h1 className="about-hero-title">FLAVOUR TRAILS</h1>
          <p className="about-hero-subtitle">
            Forgotten Flavours of India — An Academic & Cultural Exploration of Endangered Culinary Heritage
          </p>
        </div>
      </div>

      <div className="about-content-wrapper">
        {/* ===================================================================
            SECTION 1: ABOUT THE PROJECT
            =================================================================== */}
        <section className="about-section about-project-section" id="project-story">
          <div className="section-header-lockup">
            <span className="section-eyebrow">Academic Initiative</span>
            <h2 className="section-heading">{projectMissionVision.title}</h2>
            <div className="section-ornament-line">
              <span className="ornament-diamond">◆</span>
            </div>
          </div>

          <div className="project-narrative-card">
            <div className="narrative-body">
              {projectMissionVision.narrativeParagraphs.map((paragraph, index) => (
                <p key={index} className={index === 0 ? 'lead-text' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Mission & Vision Twin Cards */}
            <div className="mission-vision-grid">
              <div className="mission-card">
                <div className="card-icon-pill">
                  <Target size={22} className="icon-gold" />
                </div>
                <h3>Our Mission</h3>
                <p>{projectMissionVision.mission}</p>
              </div>

              <div className="vision-card">
                <div className="card-icon-pill">
                  <Eye size={22} className="icon-terracotta" />
                </div>
                <h3>Our Vision</h3>
                <p>{projectMissionVision.vision}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: MEET THE TEAM
            =================================================================== */}
        <section className="about-section about-team-section" id="team">
          <div className="section-header-lockup">
            <span className="section-eyebrow">The Contributors</span>
            <h2 className="section-heading">The People Behind the Flavours</h2>
            <div className="section-ornament-line">
              <span className="ornament-diamond">◆</span>
            </div>
          </div>

          <div className="team-intro-text">
            <p>
              Behind every food story is a team driven by curiosity, creativity, and a shared appreciation for India’s culinary heritage.
            </p>
            <p>
              As students working on this Gastronomic Studies project, we collaborated to research regional cuisines, explore traditional dishes, understand their cultural significance, and present our findings through an interactive digital platform.
            </p>
            <p>
              Each team member contributed to bringing Flavour Trails to life through research, content development, cultural exploration, and website design.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="team-member-card">
                <div className="member-photo-frame">
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="member-real-photo"
                    />
                  ) : (
                    <div className="member-placeholder-avatar" aria-label={`Placeholder for ${member.name}`}>
                      <div className="avatar-monogram">
                        <Users size={32} className="icon-muted" />
                      </div>
                      <span className="avatar-placeholder-label">{member.name}</span>
                      <span className="avatar-placeholder-sub">Photo to be added</span>
                    </div>
                  )}
                  <span className="member-badge-chip">Student Researcher</span>
                </div>

                <div className="member-details">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.intro}</p>

                  <div className="member-contributions">
                    <span className="contributions-title">Key Contributions:</span>
                    <ul className="contributions-list">
                      {member.contributions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: ACADEMIC GUIDANCE
            =================================================================== */}
        <section className="about-section about-guidance-section" id="academic-guidance">
          <div className="guidance-ornate-card">
            <div className="guidance-accent-icon">
              <Award size={36} className="icon-gold" />
            </div>
            <span className="guidance-eyebrow">Academic Guidance</span>
            <h2 className="guidance-mentor-name">{projectMissionVision.mentor.name}</h2>
            <span className="guidance-mentor-title">{projectMissionVision.mentor.title} — {projectMissionVision.mentor.department}</span>
            <div className="guidance-divider"></div>
            <p className="guidance-quote">
              “{projectMissionVision.mentor.note}”
            </p>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: RESEARCH AND REFERENCES
            =================================================================== */}
        <section className="about-section about-references-section" id="sources-and-stories">
          <div className="section-header-lockup">
            <span className="section-eyebrow">Academic Rigour & Transparency</span>
            <h2 className="section-heading">Our Sources, Our Stories</h2>
            <div className="section-ornament-line">
              <span className="ornament-diamond">◆</span>
            </div>
          </div>

          <div className="references-intro-text">
            <p>
              The information presented on Flavour Trails has been compiled through research into regional Indian cuisines, traditional recipes, food histories, culinary practices, and cultural traditions.
            </p>
            <p>
              We recognise the importance of acknowledging the sources that inform our work. This section provides references to the books, research articles, official publications, and other credible resources consulted during the development of our website.
            </p>
          </div>

          {/* Reference Search & Filter Controls */}
          <div className="references-toolbar">
            <div className="category-filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-pill ${activeRefCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveRefCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="pill-count">{cat.count}</span>
                </button>
              ))}
            </div>

            <div className="ref-search-box">
              <Search size={16} className="ref-search-icon" />
              <input
                type="text"
                placeholder="Filter references by keyword, author, or state..."
                value={refSearchQuery}
                onChange={(e) => setRefSearchQuery(e.target.value)}
                className="ref-search-input"
              />
              {refSearchQuery && (
                <button
                  onClick={() => setRefSearchQuery('')}
                  className="ref-search-clear"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Reference List Cards */}
          <div className="references-list-grid">
            {filteredReferences.length > 0 ? (
              filteredReferences.map((ref) => (
                <article key={ref.id} className="reference-item-card">
                  <div className="ref-card-header">
                    <span className={`ref-category-tag tag-${ref.category}`}>
                      {ref.categoryLabel}
                    </span>
                    {ref.year && <span className="ref-year-badge">{ref.year}</span>}
                  </div>

                  <h4 className="ref-title">
                    {ref.url ? (
                      <a 
                        href={ref.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ref-title-link"
                      >
                        {ref.title}
                        <ExternalLink size={14} className="inline-ext-icon" />
                      </a>
                    ) : (
                      ref.title
                    )}
                  </h4>

                  <div className="ref-meta">
                    <span className="ref-author"><strong>Author / Organisation:</strong> {ref.authorOrOrg}</span>
                    <span className="ref-publisher"><strong>Publisher / Platform:</strong> {ref.publisherOrWebsite}</span>
                    <span className="ref-region">
                      <MapPin size={13} className="inline-pin-icon" />
                      <strong>Topic / Region:</strong> {ref.regionOrTopic}
                    </span>
                  </div>

                  <div className="ref-card-footer">
                    {ref.connectedStateId && onSelectState && (
                      <button
                        onClick={() => onSelectState(ref.connectedStateId!)}
                        className="ref-explore-state-btn"
                      >
                        View {ref.connectedStateId.toUpperCase()} Food Page
                        <ArrowRight size={13} />
                      </button>
                    )}

                    {ref.url && (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ref-direct-link"
                      >
                        Source Link
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </article>
              ))
            ) : (
              <div className="no-ref-results">
                <BookOpen size={36} className="icon-muted" />
                <p>No sources found matching “{refSearchQuery}”.</p>
                <button onClick={() => { setActiveRefCategory('all'); setRefSearchQuery(''); }} className="btn-reset-filter">
                  Show All References
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: A NOTE ON OUR RESEARCH
            =================================================================== */}
        <section className="about-section about-note-section">
          <div className="research-note-box">
            <div className="note-icon-frame">
              <Sparkles size={26} className="icon-gold" />
            </div>
            <div className="note-text-content">
              <h3>{projectMissionVision.researchNoteTitle}</h3>
              <p>{projectMissionVision.researchNoteText}</p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: CLOSING SECTION
            =================================================================== */}
        <section className="about-section about-closing-section">
          <div className="closing-callout-card">
            <div className="closing-leaf-art">
              <svg viewBox="0 0 40 20" width="48" height="24">
                <path d="M 2 10 Q 12 0, 20 10 Q 28 20, 38 10 Q 28 4, 20 10 Q 12 16, 2 10 Z" fill="#C89650" opacity="0.9" />
                <circle cx="20" cy="10" r="2.5" fill="#E8B062" />
              </svg>
            </div>

            <h2 className="closing-headline">{projectMissionVision.closingHeadline}</h2>
            <p className="closing-subtext">{projectMissionVision.closingText}</p>

            <div className="closing-brand-tag">
              <span className="closing-brand-name">FLAVOUR TRAILS — Forgotten Flavours of India</span>
              <span className="closing-motto">{projectMissionVision.tagline}</span>
            </div>

            <div className="closing-actions">
              <button onClick={onBackToHome} className="btn-explore-map">
                <Compass size={18} />
                <span>Explore the Interactive Food Map</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

