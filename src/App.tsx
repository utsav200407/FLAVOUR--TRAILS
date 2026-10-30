import { useState, useEffect, useMemo } from 'react';
import { FlavourTrailsHero } from './components/FlavourTrailsHero';
import { StateDetail } from './components/StateDetail';
import { AboutUs } from './components/AboutUs';
import { AllRecipes } from './components/AllRecipes';
import { FoodStories } from './components/FoodStories';
import { Navbar } from './components/Navbar';
import { CuratorModal } from './components/CuratorModal';
import { SearchResults } from './components/SearchResults';
import { statesArchiveData } from './data/archiveData';
import type { Dish, StateArchive } from './types/archive';
import { Compass, Sparkles, BookOpen, GraduationCap, UtensilsCrossed, ScrollText } from 'lucide-react';
import './App.css';

export function App() {
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  const [selectedDishId, setSelectedDishId] = useState<string | null>(null);
  const [isAboutView, setIsAboutView] = useState<boolean>(false);
  const [isRecipesView, setIsRecipesView] = useState<boolean>(false);
  const [isStoriesView, setIsStoriesView] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isCuratorModalOpen, setIsCuratorModalOpen] = useState<boolean>(false);

  // Sync state with URL hash for browser back/forward navigation & deep linking:
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === '#about' || hash === '#/about' || hash.startsWith('#about')) {
        setIsAboutView(true);
        setIsRecipesView(false);
        setIsStoriesView(false);
        setSelectedStateId(null);
        setSelectedDishId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (hash === '#recipes' || hash === '#/recipes' || hash.startsWith('#recipes')) {
        setIsRecipesView(true);
        setIsAboutView(false);
        setIsStoriesView(false);
        setSelectedStateId(null);
        setSelectedDishId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (hash === '#stories' || hash === '#/stories' || hash.startsWith('#stories')) {
        setIsStoriesView(true);
        setIsRecipesView(false);
        setIsAboutView(false);
        setSelectedStateId(null);
        setSelectedDishId(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      setIsAboutView(false);
      setIsRecipesView(false);
      setIsStoriesView(false);
      const stateMatch = hash.match(/state=([a-z]{2})/i) || hash.match(/#\/?([a-z]{2})(?:$|&|\?)/i);
      const dishMatch = hash.match(/dish=([a-z0-9-]+)/i);

      if (stateMatch && statesArchiveData[stateMatch[1].toLowerCase()]) {
        setSelectedStateId(stateMatch[1].toLowerCase());
        if (dishMatch) {
          setSelectedDishId(dishMatch[1]);
        } else {
          setSelectedDishId(null);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (!hash || hash === '#') {
        setSelectedStateId(null);
        setSelectedDishId(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectState = (stateId: string, dishId?: string) => {
    setIsAboutView(false);
    setIsRecipesView(false);
    setIsStoriesView(false);
    setSelectedStateId(stateId);
    if (dishId) {
      setSelectedDishId(dishId);
      window.location.hash = `state=${stateId}&dish=${dishId}`;
    } else {
      setSelectedDishId(null);
      window.location.hash = `state=${stateId}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setIsAboutView(false);
    setIsRecipesView(false);
    setIsStoriesView(false);
    setSelectedStateId(null);
    setSelectedDishId(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (target: 'home' | 'stories' | 'recipes' | 'about') => {
    if (target === 'home') {
      handleBackToHome();
    } else if (target === 'about') {
      setIsAboutView(true);
      setIsRecipesView(false);
      setIsStoriesView(false);
      setSelectedStateId(null);
      setSelectedDishId(null);
      window.location.hash = 'about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'recipes') {
      setIsRecipesView(true);
      setIsAboutView(false);
      setIsStoriesView(false);
      setSelectedStateId(null);
      setSelectedDishId(null);
      window.location.hash = 'recipes';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'stories') {
      setIsStoriesView(true);
      setIsAboutView(false);
      setIsRecipesView(false);
      setSelectedStateId(null);
      setSelectedDishId(null);
      window.location.hash = 'stories';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Compute search results across all states & dishes:
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const query = searchTerm.toLowerCase().trim();
    const results: { dish: Dish; state: StateArchive }[] = [];

    Object.values(statesArchiveData).forEach((state) => {
      state.dishes.forEach((dish) => {
        const matchesDish =
          dish.name.toLowerCase().includes(query) ||
          dish.nativeName.toLowerCase().includes(query) ||
          dish.tagline.toLowerCase().includes(query) ||
          dish.description.toLowerCase().includes(query) ||
          dish.microOrigin.toLowerCase().includes(query) ||
          dish.ingredients.some((ing) => ing.item.toLowerCase().includes(query)) ||
          dish.flavorProfile.some((flv) => flv.toLowerCase().includes(query));

        const matchesState =
          state.name.toLowerCase().includes(query) ||
          state.nativeName.toLowerCase().includes(query) ||
          state.region.toLowerCase().includes(query);

        if (matchesDish || matchesState) {
          results.push({ dish, state });
        }
      });
    });

    return results;
  }, [searchTerm]);

  const currentState = selectedStateId ? statesArchiveData[selectedStateId] : null;

  return (
    <div className="flavour-trails-app">
      {/* Top Universal Navbar */}
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onOpenCuratorModal={() => setIsCuratorModalOpen(true)}
        totalStatesCount={Object.keys(statesArchiveData).length}
        onNavClick={handleNavClick}
        activeNavTab={
          isStoriesView
            ? 'stories'
            : isRecipesView
            ? 'recipes'
            : isAboutView
            ? 'about'
            : 'home'
        }
      />

      {/* Main Content Area */}
      <main className="flavour-trails-main">
        {isStoriesView ? (
          /* Dedicated Food Stories & Living Oral Memories */
          <FoodStories
            onBackToHome={handleBackToHome}
            onSelectState={handleSelectState}
          />
        ) : isRecipesView ? (
          /* Dedicated Heirloom Recipes Compendium */
          <AllRecipes
            onBackToHome={handleBackToHome}
            onSelectState={handleSelectState}
          />
        ) : isAboutView ? (
          /* Dedicated About Us Academic Project Section */
          <AboutUs
            onBackToHome={handleBackToHome}
            onSelectState={handleSelectState}
          />
        ) : currentState ? (
          /* Dedicated State Detail View */
          <StateDetail
            stateData={currentState}
            onBack={handleBackToHome}
            onSelectOtherState={handleSelectState}
            initialDishId={selectedDishId}
          />
        ) : (
          /* Homepage View */
          <>
            {/* Search Results Display (if active) */}
            {searchTerm.trim() ? (
              <SearchResults
                searchTerm={searchTerm}
                results={searchResults}
                onSelectState={handleSelectState}
                onClearSearch={() => setSearchTerm('')}
              />
            ) : null}

            {/* The Signature "Flavour Trails" Hero Section (matching the user's design) */}
            <FlavourTrailsHero
              onSelectState={handleSelectState}
            />
          </>
        )}
      </main>

      {/* Curator's Mission Manifesto Modal */}
      <CuratorModal
        isOpen={isCuratorModalOpen}
        onClose={() => setIsCuratorModalOpen(false)}
      />

      {/* Archival Footer */}
      <footer className="flavour-trails-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-brand-lockup">
              <Compass size={22} className="icon-gold" />
              <h3>FLAVOUR TRAILS</h3>
            </div>
            <p className="footer-mission-statement">
              An academic and cultural culinary archive developed as part of Gastronomic Studies coursework under the guidance of Dr. Manjusha C. B., dedicated to mapping endangered oral recipes, indigenous botanicals, and ancestral cookware traditions across India.
            </p>
          </div>

          <div className="footer-regions-list">
            <h4>Documented Cultural Terroirs</h4>
            <div className="footer-region-chips">
              <span>North Himalayan</span>
              <span>South Coromandel &amp; Malabar</span>
              <span>East Delta &amp; Riverine</span>
              <span>West Thar &amp; Konkan</span>
              <span>Central Dandakaranya</span>
              <span>North-Eastern Highlands</span>
              <span>Andaman &amp; Lakshadweep</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Flavour Trails — Forgotten Flavours of India. Developed for Gastronomic Studies coursework.</p>
          <div className="footer-bottom-links">
            <button onClick={() => handleNavClick('stories')} className="footer-link">
              <ScrollText size={14} />
              <span>Oral Food Stories</span>
            </button>
            <button onClick={() => handleNavClick('recipes')} className="footer-link">
              <UtensilsCrossed size={14} />
              <span>All Recipes</span>
            </button>
            <button onClick={() => handleNavClick('about')} className="footer-link">
              <GraduationCap size={14} />
              <span>About the Project</span>
            </button>
            <button onClick={() => setIsCuratorModalOpen(true)} className="footer-link">
              <BookOpen size={13} />
              <span>Preservation Manifesto</span>
            </button>
            <span className="footer-badge">
              <Sparkles size={12} /> Living Heritage
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
