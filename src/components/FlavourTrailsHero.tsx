import { useState, useRef } from 'react';
import mapData from '@svg-maps/india';
import { statesArchiveData } from '../data/archiveData';
import type { MapLocation, StateArchive } from '../types/archive';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';

interface FlavourTrailsHeroProps {
  onSelectState: (stateId: string, dishId?: string) => void;
  onExploreFoodMapClick?: () => void;
}

interface HighlightCard {
  stateId: string;
  dishId?: string;
  territory: string;
  dishName: string;
  tagline: string;
  imageUrl: string;
  // Pin coordinate percentage on the map container
  pinX: number; // percentage
  pinY: number; // percentage
  // Card placement area
  cardClass: string;
  curvePath: string; // SVG bezier curve
}

export const FlavourTrailsHero = ({
  onSelectState,
  onExploreFoodMapClick
}: FlavourTrailsHeroProps) => {
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Signature pinned territory cards from the user's design:
  const pinnedCards: HighlightCard[] = [
    {
      stateId: 'rj',
      dishId: 'rj-ker',
      territory: 'RAJASTHAN',
      dishName: 'Ker Ki Sabzi',
      tagline: "A taste of the desert's resilience.",
      imageUrl: '/images/rj/ker_ki_sabzi.jpg',
      pinX: 25,
      pinY: 37,
      cardClass: 'card-rajasthan',
      curvePath: 'M 180 180 C 140 230, 160 270, 155 260'
    },
    {
      stateId: 'as',
      dishId: 'as-masor-tenga',
      territory: 'ASSAM',
      dishName: 'Masor Tenga',
      tagline: 'Flavours from the land of rivers.',
      imageUrl: '/images/as/masor_tenga.jpg',
      pinX: 84,
      pinY: 38,
      cardClass: 'card-assam',
      curvePath: 'M 480 180 C 490 220, 500 240, 515 260'
    },
    {
      stateId: 'ka',
      dishId: 'ka-ragi-ambli',
      territory: 'KARNATAKA',
      dishName: 'Ragi Ambli',
      tagline: 'Nourishment rooted in the soil.',
      imageUrl: '/images/ka/ragi_ambli.jpg',
      pinX: 32,
      pinY: 69,
      cardClass: 'card-karnataka',
      curvePath: 'M 210 520 C 190 500, 180 490, 196 480'
    },
    {
      stateId: 'tn',
      dishId: 'tn-manathakkali-keerai-poriyal',
      territory: 'TAMIL NADU',
      dishName: 'Manathakkali Keerai Poriyal',
      tagline: 'A celebration of balance and tradition.',
      imageUrl: '/images/tn/manathakkali_keerai_poriyal.jpg',
      pinX: 43,
      pinY: 82,
      cardClass: 'card-tamilnadu',
      curvePath: 'M 440 590 C 350 600, 310 590, 264 570'
    }
  ];

  const handleMouseEnter = (id: string, e: React.MouseEvent) => {
    setHoveredStateId(id);
    updateTooltip(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    updateTooltip(e);
  };

  const updateTooltip = (e: React.MouseEvent) => {
    if (!mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left + 15;
    let y = e.clientY - rect.top - 15;

    if (x + 290 > rect.width) x = e.clientX - rect.left - 300;
    if (y + 190 > rect.height) y = rect.height - 200;
    if (y < 10) y = 10;
    setTooltipPos({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredStateId(null);
    setTooltipPos(null);
  };

  const hoveredData: StateArchive | undefined = hoveredStateId
    ? statesArchiveData[hoveredStateId]
    : undefined;

  return (
    <section className="flavour-trails-hero">
      {/* Background with dark roasted spices and vintage sepia etchings */}
      <div className="hero-dark-backdrop"></div>

      {/* Decorative Vintage Architectural Etching Overlays */}
      <div className="vintage-etching-layer">
        <div className="etching-item etching-haveli"></div>
        <div className="etching-item etching-temple"></div>
        <div className="etching-item etching-bridge"></div>
        <div className="etching-item etching-boat"></div>
      </div>

      <div className="hero-content-canvas">
        {/* Left Editorial Text Column */}
        <div className="hero-left-editorial">
          <div className="hero-pill-eyebrow">
            <span className="diamond-bullet">◆</span>
            <span>INDIA ON A PLATTER</span>
            <span className="diamond-bullet">◆</span>
          </div>

          <h1 className="hero-grand-title">
            EVERY DISH<br />
            HAS A STORY.
          </h1>

          <div className="vintage-ornament-divider">
            <span className="divider-line"></span>
            <span className="divider-diamond">◆</span>
            <span className="divider-line"></span>
          </div>

          <p className="hero-editorial-subtext">
            Explore the forgotten flavours, family memories and food traditions of India.
          </p>

          <button
            className="explore-food-map-btn"
            onClick={onExploreFoodMapClick}
            aria-label="Explore the Food Map"
          >
            <span>Explore the Food Map</span>
            <ArrowRight size={17} className="btn-arrow" />
          </button>
        </div>

        {/* Center / Right Map & Pinned Polaroid Cards Stage */}
        <div className="hero-map-stage" ref={mapContainerRef}>
          {/* Connecting Dashed Curves Overlay */}
          <svg className="connecting-lines-svg" viewBox="0 0 650 680" preserveAspectRatio="none">
            <defs>
              <filter id="pin-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#F5B041" floodOpacity="0.8" />
              </filter>
            </defs>
            {/* Dashed bezier connecting lines from cards to pins */}
            <path d="M 120 120 C 130 180, 150 220, 165 245" className="curved-dash-line" />
            <path d="M 520 130 C 530 180, 520 220, 510 250" className="curved-dash-line" />
            <path d="M 240 450 C 220 460, 210 470, 196 480" className="curved-dash-line" />
            <path d="M 450 540 C 370 560, 310 565, 264 570" className="curved-dash-line" />
          </svg>

          {/* The Golden Parchment India Map */}
          <div className="map-svg-wrap">
            <svg
              viewBox={mapData.viewBox || "0 0 612 696"}
              className="vintage-india-svg"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Interactive Map of India"
            >
              <defs>
                <filter id="vintage-map-shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.65" />
                </filter>
                <filter id="hover-gold-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#E59837" floodOpacity="0.8" />
                </filter>
              </defs>

              {mapData.locations.map((loc: MapLocation) => {
                const isHovered = hoveredStateId === loc.id;
                const isPinned = pinnedCards.some((c) => c.stateId === loc.id);

                return (
                  <path
                    key={loc.id}
                    id={`hero-state-${loc.id}`}
                    d={loc.path}
                    className={`hero-state-path ${isHovered ? 'hovered' : ''} ${isPinned ? 'is-pinned' : ''}`}
                    onMouseEnter={(e) => handleMouseEnter(loc.id, e)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => onSelectState(loc.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Explore culinary archive of ${loc.name}`}
                  />
                );
              })}
            </svg>

            {/* Glowing Map Location Pins on the 4 Signature States */}
            {pinnedCards.map((card) => (
              <div
                key={card.stateId}
                className={`hero-map-pin pin-${card.stateId} ${hoveredStateId === card.stateId ? 'pulse-fast' : ''}`}
                style={{ left: `${card.pinX}%`, top: `${card.pinY}%` }}
                onClick={() => onSelectState(card.stateId, card.dishId)}
                title={`Explore ${card.territory} (${card.dishName})`}
              >
                <div className="pin-beacon-ripple"></div>
                <div className="pin-marker-core">
                  <MapPin size={15} className="pin-icon" />
                </div>
              </div>
            ))}
          </div>

          {/* Four Deckle-Edged Polaroid Cards Placed Around the Map */}
          {pinnedCards.map((card) => (
            <div
              key={card.stateId}
              className={`deckle-polaroid-card ${card.cardClass} ${hoveredStateId === card.stateId ? 'highlighted' : ''}`}
              onClick={() => onSelectState(card.stateId, card.dishId)}
              onMouseEnter={() => setHoveredStateId(card.stateId)}
              onMouseLeave={() => setHoveredStateId(null)}
              role="button"
              tabIndex={0}
            >
              <div className="deckle-paper-frame">
                <div className="deckle-img-holder">
                  <img src={card.imageUrl} alt={card.dishName} className="deckle-photo" />
                </div>
                <div className="deckle-caption">
                  <span className="deckle-territory-tag">{card.territory}</span>
                  <h4 className="deckle-dish-name">{card.dishName}</h4>
                  <p className="deckle-tagline">"{card.tagline}"</p>
                </div>
              </div>
            </div>
          ))}

          {/* Dynamic Floating Tooltip for ALL other states on hover */}
          {hoveredData && tooltipPos && !pinnedCards.some((c) => c.stateId === hoveredData.id) && (
            <div
              className="hero-dynamic-tooltip"
              style={{
                transform: `translate(${tooltipPos.x}px, ${tooltipPos.y}px)`
              }}
            >
              <div className="tooltip-top-badge">
                <Sparkles size={11} />
                <span>{hoveredData.region} Region</span>
              </div>
              <h4 className="tooltip-title">{hoveredData.name}</h4>
              <p className="tooltip-dish-label">REPRESENTATIVE FLAVOUR</p>
              <p className="tooltip-dish">{hoveredData.representativeDish.name}</p>
              <p className="tooltip-tagline">"{hoveredData.representativeDish.tagline}"</p>
              <span className="tooltip-cta">Click to explore story →</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Mouse Scroll Prompter */}
      <div className="hero-scroll-prompter" onClick={onExploreFoodMapClick}>
        <div className="mouse-scroll-indicator">
          <div className="mouse-wheel"></div>
        </div>
        <p className="prompter-text">
          <span>HOVER OVER A REGION.</span>
          <span>DISCOVER ITS STORY.</span>
        </p>
      </div>
    </section>
  );
};
