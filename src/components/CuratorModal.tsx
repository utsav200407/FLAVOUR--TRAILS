import React from 'react';
import { BookOpen, Sparkles, Heart } from 'lucide-react';

interface CuratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CuratorModal: React.FC<CuratorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="curator-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="curator-hero-banner">
          <img src="/images/culinary_hero_banner.jpg" alt="Culinary Heritage" />
          <div className="curator-hero-overlay">
            <span className="curator-kicker">CURATOR'S MISSION MANIFESTO</span>
            <h2>Why We Must Preserve India's Forgotten Flavours</h2>
          </div>
        </div>

        <div className="curator-modal-body">
          <p className="lead-paragraph">
            Across the subcontinent, centuries of localized culinary wisdom are quietly slipping into oblivion. As diets homogenize around a handful of mass-market commercial recipes, thousands of hyper-seasonal dishes—once celebrated for their medicinal balance and terroir—are vanishing from everyday memories.
          </p>

          <div className="manifesto-pillars">
            <div className="pillar-item">
              <div className="pillar-icon-wrap">
                <Sparkles className="icon-gold" size={20} />
              </div>
              <div>
                <h4>Terroir Over Trends</h4>
                <p>We document dishes born from specific micro-climates: from the wild sub-alpine morels of Kashmir's pine forests to the subterranean monsoon puffballs of Jharkhand's Sal woods.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-wrap">
                <BookOpen className="icon-terracotta" size={20} />
              </div>
              <div>
                <h4>Preserving Oral Culinary Lore</h4>
                <p>Most of India's richest culinary treasures were never inscribed in cookbooks; they survived as oral heritage passed down through generations of home hearths.</p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-wrap">
                <Heart className="icon-sage" size={20} />
              </div>
              <div>
                <h4>Vessel & Fire Harmony</h4>
                <p>We honor the ancestral cookware—carved soapstone kalchattis, heavy bronze urulis, black cast-iron kadhais, and buried terracotta matlas—that impart irreplaceable mineral chemistry to traditional dishes.</p>
              </div>
            </div>
          </div>

          <div className="curator-signature">
            <p className="signature-quote">
              "To lose a recipe is to lose a chapter of our cultural memory."
            </p>
            <span className="curator-title">— The Forgotten Flavours Archivists of Bharat</span>
          </div>

          <div className="curator-modal-actions">
            <button className="curator-close-cta" onClick={onClose}>
              Begin Exploring the Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
