import { useState, useMemo } from 'react';
import { statesArchiveData } from '../data/archiveData';
import type { Dish, StateArchive, Region, DietaryType } from '../types/archive';
import { 
  UtensilsCrossed, 
  Search, 
  Clock, 
  Users, 
  Sparkles, 
  Flame, 
  ExternalLink, 
  Filter, 
  X, 
  ChefHat,
  ChevronRight
} from 'lucide-react';
import './AllRecipes.css';

interface AllRecipesProps {
  onBackToHome: () => void;
  onSelectState: (stateId: string, dishId?: string) => void;
}

export const AllRecipes = ({ onBackToHome, onSelectState }: AllRecipesProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const [selectedDietary, setSelectedDietary] = useState<DietaryType | 'All'>('All');
  const [selectedQuickDish, setSelectedQuickDish] = useState<{ dish: Dish; state: StateArchive } | null>(null);

  // Compile all unique recipes from all states in the archive
  const allRecipesList = useMemo(() => {
    const list: { dish: Dish; state: StateArchive }[] = [];
    const seenDishIds = new Set<string>();

    Object.values(statesArchiveData).forEach((state) => {
      if (state.dishes && state.dishes.length > 0) {
        state.dishes.forEach((dish) => {
          if (!seenDishIds.has(dish.id)) {
            seenDishIds.add(dish.id);
            list.push({ dish, state });
          }
        });
      } else if (state.representativeDish && !seenDishIds.has(state.representativeDish.id)) {
        seenDishIds.add(state.representativeDish.id);
        list.push({ dish: state.representativeDish, state });
      }
    });

    return list;
  }, []);

  // Filter recipes based on search, region, and dietary preferences
  const filteredRecipes = useMemo(() => {
    return allRecipesList.filter(({ dish, state }) => {
      // Region filter
      if (selectedRegion !== 'All' && state.region !== selectedRegion) {
        return false;
      }

      // Dietary filter
      if (selectedDietary !== 'All' && dish.dietary !== selectedDietary) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = dish.name.toLowerCase().includes(q);
        const matchesNative = dish.nativeName?.toLowerCase().includes(q);
        const matchesSubtitle = dish.englishSubtitle?.toLowerCase().includes(q);
        const matchesTagline = dish.tagline.toLowerCase().includes(q);
        const matchesState = state.name.toLowerCase().includes(q);
        const matchesIngredient = dish.ingredients.some((ing) => ing.item.toLowerCase().includes(q));
        const matchesVessel = dish.vessel.toLowerCase().includes(q);

        if (!matchesName && !matchesNative && !matchesSubtitle && !matchesTagline && !matchesState && !matchesIngredient && !matchesVessel) {
          return false;
        }
      }

      return true;
    });
  }, [allRecipesList, selectedRegion, selectedDietary, searchQuery]);

  const regions: (Region | 'All')[] = ['All', 'North', 'South', 'East', 'West', 'Central', 'North-East', 'Islands'];
  const dietaryOptions: (DietaryType | 'All')[] = ['All', 'Vegetarian', 'Non-Vegetarian', 'Vegan', 'Millet-based', 'Tribal Foraged'];

  return (
    <div className="all-recipes-page">
      {/* Top Banner & Breadcrumb */}
      <div className="recipes-hero-banner">
        <div className="recipes-hero-inner">
          <div className="recipes-breadcrumb">
            <button onClick={onBackToHome} className="recipes-breadcrumb-btn">
              Home
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="recipes-breadcrumb-current">Heirloom Recipes Compendium</span>
          </div>

          <div className="recipes-hero-badge">
            <UtensilsCrossed size={16} className="icon-gold" />
            <span>INDIAN GASTRONOMIC ARCHIVE</span>
          </div>

          <h1 className="recipes-hero-title">Heirloom Recipes of India</h1>
          <p className="recipes-hero-subtitle">
            Explore authentic recipes, precise ingredient proportions, and traditional cooking techniques from across 100+ documented dishes spanning every state and union territory.
          </p>

          <div className="recipes-stats-pills">
            <span className="stat-pill">
              <ChefHat size={14} className="icon-gold" />
              <strong>{allRecipesList.length}</strong> Documented Recipes
            </span>
            <span className="stat-pill">
              <Sparkles size={14} className="icon-gold" />
              <strong>{Object.keys(statesArchiveData).length}</strong> States &amp; Terroirs
            </span>
          </div>
        </div>
      </div>

      <div className="recipes-content-wrapper">
        {/* Search & Filter Toolbar */}
        <div className="recipes-filter-panel">
          <div className="recipes-search-wrap">
            <Search size={18} className="recipes-search-icon" />
            <input
              type="text"
              placeholder="Search recipes by name, ingredient, state, cooking vessel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="recipes-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="recipes-search-clear"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="recipes-filter-groups">
            {/* Region Filter */}
            <div className="filter-group">
              <div className="filter-group-label">
                <Filter size={13} />
                <span>Region:</span>
              </div>
              <div className="filter-chips-scroll">
                {regions.map((reg) => (
                  <button
                    key={reg}
                    className={`filter-chip ${selectedRegion === reg ? 'active' : ''}`}
                    onClick={() => setSelectedRegion(reg)}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary Filter */}
            <div className="filter-group">
              <div className="filter-group-label">
                <Flame size={13} />
                <span>Dietary:</span>
              </div>
              <div className="filter-chips-scroll">
                {dietaryOptions.map((diet) => (
                  <button
                    key={diet}
                    className={`filter-chip ${selectedDietary === diet ? 'active' : ''}`}
                    onClick={() => setSelectedDietary(diet)}
                  >
                    {diet}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="results-counter-bar">
            <span>
              Showing <strong>{filteredRecipes.length}</strong> of <strong>{allRecipesList.length}</strong> heirloom recipes
            </span>
            {(selectedRegion !== 'All' || selectedDietary !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedRegion('All');
                  setSelectedDietary('All');
                  setSearchQuery('');
                }}
                className="btn-clear-all-filters"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="recipes-grid">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map(({ dish, state }) => (
              <article key={dish.id} className="recipe-card">
                <div className="recipe-card-media">
                  <img
                    src={dish.imageUrl || '/images/culinary_hero_banner.jpg'}
                    alt={dish.name}
                    className="recipe-dish-img"
                    loading="lazy"
                  />
                  <div className="recipe-media-gradient"></div>

                  <span className="recipe-state-badge">
                    {state.name} · {state.region}
                  </span>

                  <span className={`recipe-diet-badge diet-${dish.dietary.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                    {dish.dietary}
                  </span>
                </div>

                <div className="recipe-card-content">
                  <div className="recipe-header">
                    <h3 className="recipe-title">{dish.name}</h3>
                    {dish.nativeName && (
                      <span className="recipe-native-script">{dish.nativeName}</span>
                    )}
                    {dish.englishSubtitle && (
                      <span className="recipe-english-sub">{dish.englishSubtitle}</span>
                    )}
                  </div>

                  <p className="recipe-tagline">{dish.tagline}</p>

                  <div className="recipe-meta-strip">
                    {dish.approxPrepTime && (
                      <div className="meta-strip-item" title="Preparation Time">
                        <Clock size={13} className="icon-gold" />
                        <span>{dish.approxPrepTime.split(';')[0]}</span>
                      </div>
                    )}
                    {dish.servesCount && (
                      <div className="meta-strip-item" title="Serves / Yield">
                        <Users size={13} className="icon-gold" />
                        <span>{dish.servesCount.replace('Yield:', '').split(';')[0].trim()}</span>
                      </div>
                    )}
                  </div>

                  {/* Ingredients Preview */}
                  <div className="recipe-ingredients-preview">
                    <span className="preview-label">Key Ingredients:</span>
                    <div className="ingredient-tag-row">
                      {dish.ingredients.slice(0, 4).map((ing, i) => (
                        <span key={i} className="ingredient-tag">
                          {ing.item.split(',')[0]}
                        </span>
                      ))}
                      {dish.ingredients.length > 4 && (
                        <span className="ingredient-tag more-tag">
                          +{dish.ingredients.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="recipe-card-actions">
                    <button
                      onClick={() => setSelectedQuickDish({ dish, state })}
                      className="btn-quick-recipe"
                      title="Read quick step-by-step instructions"
                    >
                      <UtensilsCrossed size={14} />
                      <span>Quick Recipe</span>
                    </button>

                    <button
                      onClick={() => onSelectState(state.id, dish.id)}
                      className="btn-full-dossier"
                      title="View complete historical dossier and regional context"
                    >
                      <span>Full Dossier</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="no-recipes-found">
              <UtensilsCrossed size={48} className="icon-muted" />
              <h3>No recipes found</h3>
              <p>Try searching for a different ingredient, dish name, or resetting your region filters.</p>
              <button
                onClick={() => {
                  setSelectedRegion('All');
                  setSelectedDietary('All');
                  setSearchQuery('');
                }}
                className="btn-reset-filters"
              >
                Show All {allRecipesList.length} Recipes
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Recipe Modal */}
      {selectedQuickDish && (
        <div 
          className="recipe-modal-backdrop" 
          onClick={() => setSelectedQuickDish(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="recipe-modal-card" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="recipe-modal-close" 
              onClick={() => setSelectedQuickDish(null)}
              aria-label="Close recipe modal"
            >
              <X size={20} />
            </button>

            <div className="recipe-modal-header">
              <div className="modal-state-badge">
                {selectedQuickDish.state.name} · {selectedQuickDish.state.region} India
              </div>
              <h2 className="modal-dish-name">{selectedQuickDish.dish.name}</h2>
              {selectedQuickDish.dish.nativeName && (
                <span className="modal-native-name">{selectedQuickDish.dish.nativeName}</span>
              )}
              {selectedQuickDish.dish.englishSubtitle && (
                <span className="modal-english-sub">{selectedQuickDish.dish.englishSubtitle}</span>
              )}
            </div>

            <div className="recipe-modal-body">
              <div className="modal-specs-grid">
                {selectedQuickDish.dish.servesCount && (
                  <div className="spec-item">
                    <span className="spec-label">Yield / Servings</span>
                    <span className="spec-val">{selectedQuickDish.dish.servesCount}</span>
                  </div>
                )}
                {selectedQuickDish.dish.approxPrepTime && (
                  <div className="spec-item">
                    <span className="spec-label">Cooking &amp; Prep Time</span>
                    <span className="spec-val">{selectedQuickDish.dish.approxPrepTime}</span>
                  </div>
                )}
                {selectedQuickDish.dish.vessel && (
                  <div className="spec-item">
                    <span className="spec-label">Heirloom Cookware</span>
                    <span className="spec-val">{selectedQuickDish.dish.vessel}</span>
                  </div>
                )}
                {selectedQuickDish.dish.cookingFat && (
                  <div className="spec-item">
                    <span className="spec-label">Traditional Cooking Fat</span>
                    <span className="spec-val">{selectedQuickDish.dish.cookingFat}</span>
                  </div>
                )}
              </div>

              {/* Ingredients List */}
              <div className="modal-section">
                <h4 className="modal-section-title">Ingredients &amp; Measurements</h4>
                {selectedQuickDish.dish.ingredientSections && selectedQuickDish.dish.ingredientSections.length > 0 ? (
                  <div className="modal-ingredient-sections">
                    {selectedQuickDish.dish.ingredientSections.map((sec, idx) => (
                      <div key={idx} className="ingredient-section-block">
                        <h5 className="section-block-title">{sec.title}</h5>
                        <ul className="modal-ingredients-list">
                          {sec.items.map((ing, i) => (
                            <li key={i}>
                              <span className="ing-name">{ing.item}</span>
                              {ing.amount && <span className="ing-amount">{ing.amount}</span>}
                              {ing.note && <span className="ing-note">({ing.note})</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="modal-ingredients-list">
                    {selectedQuickDish.dish.ingredients.map((ing, i) => (
                      <li key={i}>
                        <span className="ing-name">{ing.item}</span>
                        {ing.amount && <span className="ing-amount">{ing.amount}</span>}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Method of Preparation */}
              <div className="modal-section">
                <h4 className="modal-section-title">Preparation Method</h4>
                <ol className="modal-steps-list">
                  {selectedQuickDish.dish.preparationSteps.map((step, idx) => (
                    <li key={idx}>
                      <span className="step-number">{idx + 1}</span>
                      <p className="step-text">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Serving Suggestion */}
              {selectedQuickDish.dish.servingSuggestion && (
                <div className="modal-section modal-serving-section">
                  <h4 className="modal-section-title">Method of Serving</h4>
                  <p className="serving-note-text">
                    {typeof selectedQuickDish.dish.servingSuggestion === 'string' 
                      ? selectedQuickDish.dish.servingSuggestion 
                      : selectedQuickDish.dish.servingSuggestion.text}
                  </p>
                </div>
              )}
            </div>

            <div className="recipe-modal-footer">
              <button
                onClick={() => {
                  const s = selectedQuickDish.state.id;
                  const d = selectedQuickDish.dish.id;
                  setSelectedQuickDish(null);
                  onSelectState(s, d);
                }}
                className="modal-action-btn"
              >
                <span>Open Full Regional State Dossier</span>
                <ExternalLink size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

