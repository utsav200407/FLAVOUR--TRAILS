import React, { useState, useRef } from 'react';
import mapData from '@svg-maps/india';
import { statesArchiveData } from '../data/archiveData';
import type { Region, StateArchive, MapLocation } from '../types/archive';
import { Compass, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface IndiaMapProps {
  onSelectState: (stateId: string) => void;
  selectedRegion?: Region | 'All';
  activeStateId?: string | null;
}

interface TooltipPosition {
  x: number;
  y: number;
}

export const IndiaMap: React.FC<IndiaMapProps> = ({
  onSelectState,
  selectedRegion = 'All',
  activeStateId = null
}) => {
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<TooltipPosition | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const hoveredData: StateArchive | undefined = hoveredStateId
    ? statesArchiveData[hoveredStateId]
    : undefined;

  const handleMouseEnter = (id: string, e: React.MouseEvent) => {
    setHoveredStateId(id);
    updateTooltipPosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    updateTooltipPosition(e);
  };

  const updateTooltipPosition = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Position relative to map container:
    let x = e.clientX - rect.left + 20;
    let y = e.clientY - rect.top - 20;

    // Boundary checks so tooltip does not overflow:
    const tooltipWidth = 320;
    const tooltipHeight = 240;

    if (x + tooltipWidth > rect.width) {
      x = e.clientX - rect.left - tooltipWidth - 20;
    }
    if (y + tooltipHeight > rect.height) {
      y = rect.height - tooltipHeight - 10;
    }
    if (y < 10) y = 10;

    setTooltipPos({ x, y });
  };

  const handleMouseLeave = () => {
    setHoveredStateId(null);
    setTooltipPos(null);
  };

  // Region color mapping for subtle geographical cartography tones:
  const getRegionClass = (stateId: string): string => {
    const data = statesArchiveData[stateId];
    if (!data) return 'region-default';
    
    // Check if region filter is active:
    if (selectedRegion !== 'All' && data.region !== selectedRegion) {
      return 'state-dimmed';
    }

    if (activeStateId === stateId) {
      return 'state-active';
    }

    switch (data.region) {
      case 'North': return 'region-north';
      case 'South': return 'region-south';
      case 'East': return 'region-east';
      case 'West': return 'region-west';
      case 'Central': return 'region-central';
      case 'North-East': return 'region-northeast';
      case 'Islands': return 'region-islands';
      default: return 'region-default';
    }
  };

  return (
    <div className="india-map-wrapper" ref={containerRef}>
      <div className="map-cartouche">
        <div className="cartouche-badge">
          <Compass className="icon-gold" size={16} />
          <span>CARTOGRAPHIC HERITAGE</span>
        </div>
        <h3 className="cartouche-title">Interactive Archive of Bharat</h3>
        <p className="cartouche-desc">
          Hover over any territory to preview its lost culinary gems. Click to open the detailed state archive.
        </p>
      </div>

      <div className="svg-map-container">
        <svg
          viewBox={mapData.viewBox || "0 0 612 696"}
          className="india-svg-map"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Interactive Map of India"
        >
          <defs>
            <filter id="map-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#9C3D1E" floodOpacity="0.4" />
            </filter>
            <filter id="hover-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#C35A27" floodOpacity="0.6" />
            </filter>
          </defs>

          {mapData.locations.map((loc: MapLocation) => {
            const isHovered = hoveredStateId === loc.id;
            const regionClass = getRegionClass(loc.id);

            return (
              <path
                key={loc.id}
                id={`state-${loc.id}`}
                d={loc.path}
                className={`state-path ${regionClass} ${isHovered ? 'state-hovered' : ''}`}
                onMouseEnter={(e) => handleMouseEnter(loc.id, e)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => onSelectState(loc.id)}
                filter={isHovered ? 'url(#hover-shadow)' : undefined}
                tabIndex={0}
                role="button"
                aria-label={`Explore culinary archive of ${loc.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectState(loc.id);
                  }
                }}
              />
            );
          })}
        </svg>

        {/* Floating Tooltip Preview */}
        {hoveredData && tooltipPos && (
          <div
            className="map-floating-tooltip"
            style={{
              transform: `translate(${tooltipPos.x}px, ${tooltipPos.y}px)`
            }}
          >
            <div className="tooltip-header">
              <span className="tooltip-region-badge">{hoveredData.region}</span>
              <span className="tooltip-status-badge">
                <Sparkles size={11} />
                {hoveredData.representativeDish.preservationStatus}
              </span>
            </div>

            <div className="tooltip-state-names">
              <h4 className="tooltip-state-title">{hoveredData.name}</h4>
              <span className="tooltip-state-native">{hoveredData.nativeName}</span>
            </div>

            <div className="tooltip-dish-preview">
              <div className="tooltip-dish-img-wrap">
                <img
                  src={hoveredData.representativeDish.imageUrl}
                  alt={hoveredData.representativeDish.name}
                  className="tooltip-dish-img"
                />
              </div>
              <div className="tooltip-dish-meta">
                <span className="tooltip-dish-label">REPRESENTATIVE FORGOTTEN FLAVOUR</span>
                <p className="tooltip-dish-name">{hoveredData.representativeDish.name}</p>
                <p className="tooltip-dish-tagline">{hoveredData.representativeDish.tagline}</p>
              </div>
            </div>

            <div className="tooltip-footer">
              <span className="tooltip-prompt">
                Explore Full State Archive
                <ArrowRight size={14} className="arrow-icon" />
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Docked Mobile Card Preview for Touch Screens */}
      {hoveredData && (
        <div className="mobile-docked-preview">
          <div className="mobile-preview-card" onClick={() => onSelectState(hoveredData.id)}>
            <div className="mobile-preview-thumb">
              <img src={hoveredData.representativeDish.imageUrl} alt={hoveredData.representativeDish.name} />
            </div>
            <div className="mobile-preview-info">
              <div className="mobile-pill-row">
                <span className="mobile-pill">{hoveredData.region}</span>
                <span className="mobile-pill gold">{hoveredData.representativeDish.preservationStatus}</span>
              </div>
              <h4>{hoveredData.name}</h4>
              <p className="mobile-dish-title"><strong>Dish:</strong> {hoveredData.representativeDish.name}</p>
              <p className="mobile-dish-desc">{hoveredData.representativeDish.tagline}</p>
              <div className="mobile-cta">Tap to View Recipes & Stories →</div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Territory Selector for Accessibility */}
      <div className="map-quick-selector">
        <label htmlFor="state-quick-select" className="quick-select-label">
          <MapPin size={14} /> Quick Region Jump:
        </label>
        <select
          id="state-quick-select"
          className="quick-select-dropdown"
          value={hoveredStateId || ''}
          onChange={(e) => {
            if (e.target.value) {
              onSelectState(e.target.value);
            }
          }}
        >
          <option value="">Select an Indian State or Territory...</option>
          {mapData.locations
            .slice()
            .sort((a: MapLocation, b: MapLocation) => a.name.localeCompare(b.name))
            .map((loc: MapLocation) => {
              const data = statesArchiveData[loc.id];
              return (
                <option key={loc.id} value={loc.id}>
                  {loc.name} {data ? `(${data.region} • ${data.representativeDish.name})` : ''}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};
