import { useState, useRef, useEffect } from 'react';
import type { StateArchive, Dish } from '../types/archive';
import { 
  ArrowLeft, 
  MapPin, 
  Utensils, 
  Sparkles, 
  Clock, 
  BookOpen, 
  Share2, 
  Check, 
  Leaf, 
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Printer,
  X,
  Soup,
  Flame,
  ChefHat
} from 'lucide-react';
import { getIngredientThumbnail } from '../utils/ingredientImages';
import './StateDetail.css';

interface StateDetailProps {
  stateData: StateArchive;
  onBack: () => void;
  onSelectOtherState?: (stateId: string) => void;
  initialDishId?: string | null;
}

export const StateDetail: React.FC<StateDetailProps> = ({
  stateData,
  onBack,
  initialDishId
}) => {
  // Select active dish (defaults to initialDishId or representativeDish or first dish)
  const [activeDishId, setActiveDishId] = useState<string>(() => {
    if (initialDishId && stateData.dishes.some(d => d.id === initialDishId)) {
      return initialDishId;
    }
    return stateData.representativeDish?.id || stateData.dishes[0]?.id || '';
  });

  // Track active navigation sub-tab ('overview' | 'ingredients' | 'significance' | 'recipe' | 'explore')
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'ingredients' | 'significance' | 'recipe' | 'explore'>('overview');

  // Expandable ingredients state
  const [showAllIngredients, setShowAllIngredients] = useState<boolean>(false);

  // Modals for the 3 explore cards
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState<boolean>(false);
  const [isVesselsModalOpen, setIsVesselsModalOpen] = useState<boolean>(false);
  const [isContextModalOpen, setIsContextModalOpen] = useState<boolean>(false);

  // Copied share state
  const [copiedRecipe, setCopiedRecipe] = useState<boolean>(false);

  // Section references for smooth scrolling
  const overviewRef = useRef<HTMLDivElement>(null);
  const ingredientsRef = useRef<HTMLDivElement>(null);
  const significanceRef = useRef<HTMLDivElement>(null);
  const methodRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);

  // Current active dish object:
  const activeDish: Dish = stateData.dishes.find(d => d.id === activeDishId) || stateData.representativeDish || stateData.dishes[0];

  // Reset ingredient toggle when active dish changes
  useEffect(() => {
    setShowAllIngredients(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeDishId]);

  const handleShare = (dish: Dish) => {
    const text = `Explore ${dish.name} (${dish.nativeName}), an heirloom forgotten dish from ${stateData.name} on the Forgotten Flavours India Archive!`;
    if (navigator.share) {
      navigator.share({ title: dish.name, text, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
      setCopiedRecipe(true);
      setTimeout(() => setCopiedRecipe(false), 2500);
    }
  };

  const handleTabClick = (tab: 'overview' | 'ingredients' | 'significance' | 'recipe' | 'explore') => {
    setActiveSubTab(tab);
    if (tab === 'recipe') {
      methodRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (tab === 'overview') {
      overviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (tab === 'ingredients') {
      ingredientsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (tab === 'significance') {
      significanceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (tab === 'explore') {
      exploreRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Derive hashtags from dish lore & seasonal details
  const tags: string[] = [
    ...(activeDish.flavorProfile || []),
    activeDish.season ? activeDish.season.replace(/\(.*?\)/g, '').trim() : '',
    stateData.name,
    'HeirloomRecipe'
  ].filter(Boolean).slice(0, 5);

  // Ingredients split for initial items vs remainder
  const initialCount = 8;
  const visibleIngredients = showAllIngredients 
    ? activeDish.ingredients 
    : activeDish.ingredients.slice(0, initialCount);
  const remainingIngredientsCount = Math.max(0, activeDish.ingredients.length - initialCount);

  // Hero image resolution with fallback
  const heroImageSrc = activeDish.imageUrl || '/images/culinary_hero_banner.jpg';

  // Subtitle origin display
  const microOriginSubtitle = activeDish.microOrigin 
    ? activeDish.microOrigin.toUpperCase() 
    : `${stateData.name.toUpperCase()} HERITAGE COMMUNITIES`;

  return (
    <div className="dish-editorial-page">
      {/* 1. Top Breadcrumb & Navigation Bar */}
      <div className="dish-editorial-topbar">
        <div className="topbar-container">
          <button className="pill-back-btn" onClick={onBack} aria-label="Return to National Food Map">
            <ArrowLeft size={15} />
            <span>Return to National Food Map</span>
          </button>

          <nav className="editorial-breadcrumbs" aria-label="Breadcrumb">
            <button onClick={onBack} className="crumb-item crumb-link">Bharat Archive</button>
            <span className="crumb-divider">/</span>
            <span className="crumb-item">{stateData.region} India</span>
            <span className="crumb-divider">/</span>
            <span className="crumb-item active">{stateData.name}</span>
          </nav>
        </div>
      </div>

      <div className="dish-editorial-container">
        {/* Visual Heirloom Dishes Selector Carousel / Grid */}
        {stateData.dishes.length > 1 && (
          <section className="state-dishes-showcase-bar" aria-label="Archived Dishes Selector">
            <div className="showcase-bar-header">
              <div className="showcase-header-left">
                <span className="showcase-eyebrow">HEIRLOOM CULINARY DOSSIERS OF {stateData.name.toUpperCase()}</span>
                <h3 className="showcase-title">Choose a Dish to Explore</h3>
              </div>
              <span className="showcase-count-tag">{stateData.dishes.length} Archived Dishes</span>
            </div>

            <div className="dishes-showcase-grid">
              {stateData.dishes.map((dish, index) => {
                const isActive = dish.id === activeDish.id;
                return (
                  <button
                    key={dish.id}
                    className={`dish-showcase-card ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveDishId(dish.id)}
                    aria-pressed={isActive}
                  >
                    <div className="dish-card-thumb-wrap">
                      <img 
                        src={dish.imageUrl || '/images/culinary_hero_banner.jpg'} 
                        alt={dish.name}
                        className="dish-card-thumb-img"
                        loading="lazy"
                      />
                      <span className="dish-index-pill">{index + 1}</span>
                    </div>

                    <div className="dish-card-details">
                      <div className="dish-card-top-row">
                        <span className="dish-diet-pill">{dish.dietary}</span>
                        {isActive && <span className="now-viewing-badge">Now Viewing</span>}
                      </div>
                      <h4 className="dish-card-name">{dish.name}</h4>
                      <div className="dish-card-native-text">{dish.nativeName}</div>
                      {dish.englishSubtitle && (
                        <div className="dish-card-subtitle">{dish.englishSubtitle}</div>
                      )}
                    </div>

                    <div className="dish-card-active-indicator" />
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* 2. Hero Section: Split 2-Column Banner */}
        <section className="dish-hero-section" ref={overviewRef}>
          <div className="dish-hero-grid">
            {/* Left: Typography & Story Lore */}
            <div className="dish-hero-meta">
              <span className="dish-micro-origin">{microOriginSubtitle}</span>

              <h1 className="dish-hero-title">{activeDish.name}</h1>
              {activeDish.englishSubtitle && (
                <div className="dish-hero-english-sub">{activeDish.englishSubtitle}</div>
              )}
              <div className="dish-hero-native">{activeDish.nativeName}</div>

              <div className="dish-title-divider" />

              <p className="dish-hero-tagline">{activeDish.tagline}</p>

              {/* 3 Pill Badges */}
              <div className="dish-hero-badges">
                <div className="hero-pill-badge">
                  <Soup size={15} className="pill-icon gold" />
                  <span>{activeDish.dietary}</span>
                </div>

                <div className="hero-pill-badge">
                  <MapPin size={15} className="pill-icon gold" />
                  <span>{stateData.name}</span>
                </div>

                <div className="hero-pill-badge">
                  <Leaf size={15} className="pill-icon gold" />
                  <span>{activeDish.preservationStatus || 'Traditional Dish'}</span>
                </div>
              </div>
            </div>

            {/* Right: Signature Dish Culinary Photography with Ambient Dark Vignette */}
            <div className="dish-hero-visual-wrapper">
              <div className="dish-plate-container">
                <img
                  src={heroImageSrc}
                  alt={`${activeDish.name} — ${activeDish.nativeName}`}
                  className="dish-plate-img"
                  loading="eager"
                />
                <div className="dish-plate-glow" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Sticky Sub-Navigation Bar */}
        <nav className="dish-subnav-bar" aria-label="Dish Sections">
          <div className="subnav-links-inner">
            <button
              className={`subnav-btn ${activeSubTab === 'overview' ? 'active' : ''}`}
              onClick={() => handleTabClick('overview')}
            >
              Overview
            </button>
            <button
              className={`subnav-btn ${activeSubTab === 'ingredients' ? 'active' : ''}`}
              onClick={() => handleTabClick('ingredients')}
            >
              Ingredients
            </button>
            <button
              className={`subnav-btn ${activeSubTab === 'significance' ? 'active' : ''}`}
              onClick={() => handleTabClick('significance')}
            >
              Cultural Significance
            </button>
            <button
              className={`subnav-btn ${activeSubTab === 'recipe' ? 'active' : ''}`}
              onClick={() => handleTabClick('recipe')}
            >
              Method
            </button>
            <button
              className={`subnav-btn ${activeSubTab === 'explore' ? 'active' : ''}`}
              onClick={() => handleTabClick('explore')}
            >
              Explore More
            </button>
          </div>
        </nav>

        {/* 4. Upper 2-Column Content Layout: Cultural Significance (Left) & Ingredients (Right) */}
        <div className="dish-editorial-main-grid">
          {/* Left Column: Cultural Significance & Oral Lore Card */}
          <div className="editorial-col-left">
            <div className="editorial-card-wrapper cultural-card" ref={significanceRef}>
              <div className="editorial-section-heading">
                <div className="heading-icon-circle gold-bordered">
                  <Sparkles size={18} className="gold-accent-icon" />
                </div>
                <h2>Cultural Significance &amp; Oral Lore</h2>
              </div>

              <div className="cultural-significance-body with-left-line">
                <p>{activeDish.culturalSignificance}</p>
              </div>

              {/* Italicized Quote Box with Left Gold Border */}
              <div className="state-culinary-quote-box">
                <p>{activeDish.culturalQuote || `"${stateData.culinaryPhilosophy}"`}</p>
              </div>

              {/* Hashtag pills */}
              <div className="cultural-tags-row">
                {tags.map((tag, idx) => (
                  <span key={idx} className="cultural-hash-tag">
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Ingredients Card */}
          <div className="editorial-col-right" ref={ingredientsRef}>
            <div className="key-ingredients-card">
              <div className="ingredients-card-header">
                <div className="heading-title-group">
                  <div className="heading-icon-circle gold-bordered">
                    <ShoppingBag size={18} className="gold-accent-icon" />
                  </div>
                  <h2>Ingredients</h2>
                </div>
                <span className="serves-pill-badge">{activeDish.servesCount || 'Serves 4'}</span>
              </div>

              {/* If ingredient sections exist (e.g. Dhoka + Dalna) */}
              {activeDish.ingredientSections ? (
                <div className="ingredient-sections-container">
                  {activeDish.ingredientSections.map((sec, sIdx) => (
                    <div key={sIdx} className="ingredient-section-group">
                      <h4 className="ingredient-section-title">{sec.title}</h4>
                      <div className="ingredients-list">
                        {sec.items.map((ing, idx) => {
                          const thumb = getIngredientThumbnail(ing.item);
                          return (
                            <div key={idx} className="ingredient-row-item">
                              <div className="ing-thumb-wrapper">
                                {thumb.type === 'image' && thumb.src ? (
                                  <img src={thumb.src} alt={ing.item} className="ing-thumb-img" loading="lazy" />
                                ) : (
                                  <div className="ing-thumb-fallback" style={{ background: thumb.bg }}>
                                    <span>{thumb.icon}</span>
                                  </div>
                                )}
                              </div>
                              <div className="ing-name-text">
                                <span className="ing-primary-name">{ing.item}</span>
                                {ing.note && <span className="ing-note-text">({ing.note})</span>}
                              </div>
                              <div className="ing-quantity-text">
                                <span>{ing.amount || 'to taste'}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Standard single ingredient list */
                <div className="ingredients-list">
                  {visibleIngredients.map((ing, idx) => {
                    const thumb = getIngredientThumbnail(ing.item);
                    return (
                      <div key={idx} className="ingredient-row-item">
                        <div className="ing-thumb-wrapper">
                          {thumb.type === 'image' && thumb.src ? (
                            <img src={thumb.src} alt={ing.item} className="ing-thumb-img" loading="lazy" />
                          ) : (
                            <div className="ing-thumb-fallback" style={{ background: thumb.bg }}>
                              <span>{thumb.icon}</span>
                            </div>
                          )}
                        </div>

                        <div className="ing-name-text">
                          <span className="ing-primary-name">{ing.item}</span>
                          {ing.note && <span className="ing-note-text">({ing.note})</span>}
                          {ing.indigenousName && (
                            <span className="ing-indigenous-tag">({ing.indigenousName})</span>
                          )}
                        </div>

                        <div className="ing-quantity-text">
                          <span>{ing.amount || 'to taste'}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Expand / Collapse Button (if not using sections and has more items) */}
              {!activeDish.ingredientSections && remainingIngredientsCount > 0 && (
                <button
                  className="expand-ingredients-btn"
                  onClick={() => setShowAllIngredients(!showAllIngredients)}
                  aria-expanded={showAllIngredients}
                >
                  <span className="expand-plus-circle">
                    {showAllIngredients ? '−' : '+'}
                  </span>
                  <span>
                    {showAllIngredients
                      ? 'Show fewer ingredients'
                      : `+ ${remainingIngredientsCount} more ingredients`}
                  </span>
                  {showAllIngredients ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 5. Lower 2-Column Content Layout: Method (Left) & Serving Suggestion (Right) */}
        <div className="dish-method-serving-grid" ref={methodRef}>
          {/* Left: Step-by-Step Method Card */}
          <div className="editorial-card-wrapper method-card">
            <div className="editorial-section-heading">
              <div className="heading-icon-circle gold-bordered">
                <ChefHat size={18} className="gold-accent-icon" />
              </div>
              <h2>Method</h2>
            </div>

            <div className="method-steps-container">
              {activeDish.stepDetails ? (
                /* Rich steps with photos and numbered titles */
                activeDish.stepDetails.map((step) => (
                  <div key={step.stepNum} className="method-step-item">
                    <div className="method-step-counter">{step.stepNum}</div>
                    {step.imageUrl && (
                      <div className="method-step-thumb-wrap">
                        <img src={step.imageUrl} alt={step.title} className="method-step-photo" loading="lazy" />
                      </div>
                    )}
                    <div className="method-step-content">
                      <h4 className="method-step-headline">{step.title}</h4>
                      <p className="method-step-desc">{step.instruction}</p>
                    </div>
                  </div>
                ))
              ) : (
                /* Fallback to preparationSteps string array */
                activeDish.preparationSteps.map((stepStr, idx) => (
                  <div key={idx} className="method-step-item">
                    <div className="method-step-counter">{idx + 1}</div>
                    <div className="method-step-content">
                      <p className="method-step-desc">{stepStr}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right: Serving Suggestion Card */}
          <div className="editorial-card-wrapper serving-card">
            <div className="editorial-section-heading">
              <div className="heading-icon-circle gold-bordered">
                <Soup size={18} className="gold-accent-icon" />
              </div>
              <h2>Serving Suggestion</h2>
            </div>

            {activeDish.servingSuggestion?.imageUrl && (
              <div className="serving-suggestion-visual-wrap">
                <img
                  src={activeDish.servingSuggestion.imageUrl}
                  alt={`Serving suggestion for ${activeDish.name}`}
                  className="serving-suggestion-photo"
                  loading="lazy"
                />
              </div>
            )}

            <div className="serving-suggestion-body">
              <p>
                {activeDish.servingSuggestion?.text || 
                  `Serve piping hot with freshly steamed Gobindobhog or aged basmati rice, letting the aromatic, traditional flavours soak through every grain.`}
              </p>
            </div>
          </div>
        </div>

        {/* 6. Bottom Section: Explore Related Sections */}
        <section className="explore-related-section" ref={exploreRef}>
          <div className="explore-section-heading">
            <div className="heading-icon-circle">
              <BookOpen size={18} className="gold-accent-icon" />
            </div>
            <h2>Explore Related Sections</h2>
          </div>

          <div className="explore-cards-grid">
            {/* Card 1: View Detailed Recipe Dossier */}
            <div 
              className="explore-action-card"
              onClick={() => setIsRecipeModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setIsRecipeModalOpen(true); }}
            >
              <div className="explore-card-thumb">
                <img
                  src={activeDish.secondaryImageUrl || '/images/wb/thumb_recipe.jpg'}
                  alt="Detailed Cooking Recipe"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/culinary_hero_banner.jpg';
                  }}
                />
              </div>
              <div className="explore-card-info">
                <h3>View Printable Dossier</h3>
                <p>Archival card, timing, vessels &amp; printing</p>
              </div>
              <div className="explore-card-arrow">
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Card 2: Heirloom Vessels */}
            <div 
              className="explore-action-card"
              onClick={() => setIsVesselsModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setIsVesselsModalOpen(true); }}
            >
              <div className="explore-card-thumb">
                <img
                  src="/images/wb/thumb_vessels.jpg"
                  alt="Heirloom Vessels"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/tribal_forest_dish.jpg';
                  }}
                />
              </div>
              <div className="explore-card-info">
                <h3>Heirloom Vessels</h3>
                <p>Traditional cookware used for this dish</p>
              </div>
              <div className="explore-card-arrow">
                <ArrowRight size={16} />
              </div>
            </div>

            {/* Card 3: Regional Context */}
            <div 
              className="explore-action-card"
              onClick={() => setIsContextModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setIsContextModalOpen(true); }}
            >
              <div className="explore-card-thumb">
                <img
                  src="/images/wb/thumb_region.jpg"
                  alt={`Regional Context of ${stateData.name}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/coastal_heirloom_dish.jpg';
                  }}
                />
              </div>
              <div className="explore-card-info">
                <h3>Regional Context</h3>
                <p>Food, people and landscapes of {stateData.name}</p>
              </div>
              <div className="explore-card-arrow">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Back Button */}
        <div className="state-bottom-nav">
          <button className="pill-back-btn large" onClick={onBack}>
            <ArrowLeft size={18} />
            <span>Return to National Map Archive</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          MODALS & DRAWERS FOR THE 3 INTERACTIVE EXPLORE ACTIONS
          ========================================================================= */}

      {/* Modal 1: Step-by-Step Detailed Recipe Dossier */}
      {isRecipeModalOpen && (
        <div className="editorial-modal-backdrop" onClick={() => setIsRecipeModalOpen(false)}>
          <div className="editorial-modal-card recipe-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-icon-btn"
              onClick={() => setIsRecipeModalOpen(false)}
              aria-label="Close Recipe"
            >
              <X size={20} />
            </button>

            <div className="modal-header-area">
              <span className="modal-tag">Archival Culinary Method</span>
              <h2 className="modal-recipe-title">{activeDish.name}</h2>
              {activeDish.englishSubtitle && (
                <div className="modal-english-sub">{activeDish.englishSubtitle}</div>
              )}
              <div className="modal-native-subtitle">{activeDish.nativeName}</div>
              <p className="modal-tagline-text">{activeDish.tagline}</p>

              <div className="modal-quick-meta-row">
                <div className="meta-item">
                  <Clock size={14} className="gold" />
                  <span>Prep: {activeDish.approxPrepTime || '35 mins'}</span>
                </div>
                <div className="meta-item">
                  <Flame size={14} className="gold" />
                  <span>Vessel: {activeDish.vessel}</span>
                </div>
                <div className="meta-item">
                  <Utensils size={14} className="gold" />
                  <span>Medium: {activeDish.cookingFat}</span>
                </div>
              </div>
            </div>

            <div className="modal-recipe-content-scroll">
              <div className="recipe-steps-section">
                <h3>Step-by-Step Preparation Technique</h3>
                <ol className="modal-steps-ordered-list">
                  {activeDish.preparationSteps.map((step, idx) => (
                    <li key={idx} className="modal-step-row">
                      <div className="step-counter-badge">{idx + 1}</div>
                      <div className="step-instruction-text">{step}</div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="recipe-chef-notes-box">
                <h4>Heirloom Cooking Wisdom</h4>
                <p>
                  Passed through oral observation, traditional home cooks determine readiness by aroma and gentle flame control rather than precise timers. Maintain steady, low-medium embers to allow the delicate flavors to infuse evenly.
                </p>
              </div>
            </div>

            <div className="modal-action-footer">
              <button className="print-archival-btn" onClick={() => window.print()}>
                <Printer size={15} />
                <span>Print Archival Recipe</span>
              </button>
              <button className="share-archival-btn" onClick={() => handleShare(activeDish)}>
                {copiedRecipe ? (
                  <>
                    <Check size={16} /> Link Copied to Clipboard
                  </>
                ) : (
                  <>
                    <Share2 size={16} /> Share Heirloom Recipe
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Heirloom Vessels & Cookware */}
      {isVesselsModalOpen && (
        <div className="editorial-modal-backdrop" onClick={() => setIsVesselsModalOpen(false)}>
          <div className="editorial-modal-card vessels-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-icon-btn"
              onClick={() => setIsVesselsModalOpen(false)}
              aria-label="Close Vessels"
            >
              <X size={20} />
            </button>

            <div className="modal-header-area">
              <span className="modal-tag">Traditional Culinary Implements</span>
              <h2 className="modal-recipe-title">Heirloom Vessels of {stateData.name}</h2>
              <p className="modal-tagline-text">
                Ancient metallurgy, earthenware, and botanical wrappers that define the cooking alchemy of this region.
              </p>
            </div>

            <div className="vessels-modal-body">
              <div className="vessel-spotlight-box">
                <h4>Primary Vessel for {activeDish.name}</h4>
                <div className="vessel-name-highlight">
                  <Flame size={16} className="gold" />
                  <strong>{activeDish.vessel}</strong>
                </div>
                <p className="vessel-lore-text">
                  The choice of heavy-bottomed pans or cast iron provides slow, gentle heat conductivity that allows delicate fish and vegetable cakes to cook evenly without scorching.
                </p>
              </div>

              <div className="state-vessels-list-section">
                <h4>Traditional Regional Cookware</h4>
                <div className="vessels-tags-cloud">
                  {stateData.heirloomVessels.map((vessel, i) => (
                    <div key={i} className="vessel-cloud-pill">
                      <Utensils size={14} className="gold" />
                      <span>{vessel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3: Regional Context & Terroir */}
      {isContextModalOpen && (
        <div className="editorial-modal-backdrop" onClick={() => setIsContextModalOpen(false)}>
          <div className="editorial-modal-card context-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-icon-btn"
              onClick={() => setIsContextModalOpen(false)}
              aria-label="Close Regional Context"
            >
              <X size={20} />
            </button>

            <div className="modal-header-area">
              <span className="modal-tag">Culinary Geography &amp; Terroir</span>
              <h2 className="modal-recipe-title">{stateData.name} Culinary Heritage</h2>
              <div className="modal-native-subtitle">{stateData.nativeName}</div>
              <p className="modal-tagline-text">
                {stateData.historicalEra} · Capital: {stateData.capital}
              </p>
            </div>

            <div className="context-modal-body">
              <div className="context-block">
                <h4>Culinary Philosophy</h4>
                <p className="context-philosophy-quote">"{stateData.culinaryPhilosophy}"</p>
              </div>

              <div className="context-block">
                <h4>Signature Terroir Spices &amp; Botanicals</h4>
                <div className="context-chips-row">
                  {stateData.signatureSpices.map((spice, idx) => (
                    <span key={idx} className="context-spice-chip">
                      <Sparkles size={12} className="gold" />
                      {spice}
                    </span>
                  ))}
                </div>
              </div>

              <div className="context-block">
                <h4>Indigenous Staple Grains &amp; Crops</h4>
                <div className="context-chips-row">
                  {stateData.stapleGrains.map((grain, idx) => (
                    <span key={idx} className="context-grain-chip">
                      <Leaf size={12} className="green" />
                      {grain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StateDetail;
