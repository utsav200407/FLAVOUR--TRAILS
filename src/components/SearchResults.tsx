import type { Dish, StateArchive } from '../types/archive';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

interface SearchResultItem {
  dish: Dish;
  state: StateArchive;
}

interface SearchResultsProps {
  searchTerm: string;
  results: SearchResultItem[];
  onSelectState: (stateId: string, dishId?: string) => void;
  onClearSearch: () => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  searchTerm,
  results,
  onSelectState,
  onClearSearch
}) => {
  if (!searchTerm.trim()) return null;

  return (
    <section className="search-results-section">
      <div className="search-results-header">
        <div>
          <h3>Archival Search Results for "{searchTerm}"</h3>
          <p className="search-count">
            Found {results.length} heirloom {results.length === 1 ? 'record' : 'records'} matching your inquiry
          </p>
        </div>
        <button className="clear-search-link" onClick={onClearSearch}>
          Clear Search & Return to Full Map
        </button>
      </div>

      {results.length === 0 ? (
        <div className="no-results-box">
          <p>No forgotten flavours found matching "{searchTerm}". Try searching for terms like <em>"Gucchi"</em>, <em>"Morel"</em>, <em>"Siddu"</em>, <em>"Avial"</em>, <em>"Mustard"</em>, or <em>"Curd"</em>.</p>
        </div>
      ) : (
        <div className="search-cards-grid">
          {results.map(({ dish, state }) => (
            <div
              key={`${state.id}-${dish.id}`}
              className="search-dish-card"
              onClick={() => onSelectState(state.id, dish.id)}
            >
              <div className="search-card-img-wrap">
                <img src={dish.imageUrl} alt={dish.name} />
                <span className="search-card-region">{state.region}</span>
              </div>
              <div className="search-card-body">
                <div className="search-card-location">
                  <MapPin size={12} />
                  <span>{state.name} ({dish.microOrigin})</span>
                </div>
                <h4>{dish.name}</h4>
                <div className="search-native">{dish.nativeName}</div>
                <p className="search-desc">{dish.tagline}</p>

                <div className="search-status-row">
                  <span className="search-status">
                    <Sparkles size={11} /> {dish.preservationStatus}
                  </span>
                  <span className="search-cta">
                    Explore State Archive <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
