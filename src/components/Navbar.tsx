import { useState } from 'react';
import { Search } from 'lucide-react';

interface NavbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onOpenCuratorModal: () => void;
  totalStatesCount?: number;
  onNavClick?: (target: 'home' | 'stories' | 'recipes' | 'about') => void;
  activeNavTab?: 'home' | 'stories' | 'recipes' | 'about';
}

export const Navbar = ({
  searchTerm,
  onSearchChange,
  onOpenCuratorModal,
  onNavClick,
  activeNavTab
}: NavbarProps) => {
  const [internalTab, setInternalTab] = useState<'home' | 'stories' | 'recipes' | 'about'>('home');
  const activeTab = activeNavTab || internalTab;

  const handleTabClick = (tab: 'home' | 'stories' | 'recipes' | 'about') => {
    setInternalTab(tab);
    if (onNavClick) {
      onNavClick(tab);
    } else if (tab === 'about') {
      onOpenCuratorModal();
    }
  };

  return (
    <header className="flavour-trails-nav">
      <div className="nav-container">
        {/* Left Brand Lockup */}
        <div className="nav-brand-lockup" onClick={() => handleTabClick('home')}>
          <div className="nav-logo-art">
            <svg viewBox="0 0 40 20" className="nav-leaf-ornament" width="28" height="14">
              <path d="M 2 10 Q 12 0, 20 10 Q 28 20, 38 10 Q 28 4, 20 10 Q 12 16, 2 10 Z" fill="#C89650" opacity="0.9" />
              <circle cx="20" cy="10" r="2" fill="#E8B062" />
            </svg>
            <h1 className="nav-brand-title">FLAVOUR TRAILS</h1>
            <span className="nav-brand-subtitle">Forgotten Flavours of India</span>
          </div>
          <span className="nav-brand-pipe">|</span>
        </div>

        {/* Center Navigation Links */}
        <nav className="nav-links-center" aria-label="Main Navigation">
          <button
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleTabClick('home')}
          >
            Home
          </button>
          <button
            className={`nav-link ${activeTab === 'stories' ? 'active' : ''}`}
            onClick={() => handleTabClick('stories')}
          >
            Oral Food Stories
          </button>
          <button
            className={`nav-link ${activeTab === 'recipes' ? 'active' : ''}`}
            onClick={() => handleTabClick('recipes')}
          >
            Recipes
          </button>
          <button
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleTabClick('about')}
          >
            About
          </button>
        </nav>

        {/* Right Search Bar */}
        <div className="nav-search-wrap">
          <Search size={15} className="nav-search-icon" />
          <input
            type="text"
            className="nav-search-input"
            placeholder="Search dishes, states or stories..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search dishes, states or stories"
          />
          {searchTerm && (
            <button
              className="nav-search-clear"
              onClick={() => onSearchChange('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
