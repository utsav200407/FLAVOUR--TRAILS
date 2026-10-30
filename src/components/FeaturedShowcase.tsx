import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface FeaturedShowcaseProps {
  onSelectState: (stateId: string) => void;
}

export const FeaturedShowcase: React.FC<FeaturedShowcaseProps> = ({ onSelectState }) => {
  const highlights = [
    {
      stateId: 'hp',
      territory: 'Himachal Pradesh',
      title: 'Himachali Siddu & Walnut Mash',
      region: 'North Highlands',
      tagline: 'Ancient wild sourdough pockets stuffed with mountain poppy & walnut paste, drenched in pure bilona cow ghee.',
      imageUrl: '/images/himalayan_heirloom_dish.jpg',
      badge: 'Living Ritual'
    },
    {
      stateId: 'rj',
      territory: 'Rajasthan',
      title: 'Shahi Govind Gatta & Ker Sangri',
      region: 'West Desert',
      tagline: 'Mawa-stuffed gram flour dumplings & sun-dried wild desert shrub berries surviving five centuries of Rajput caravans.',
      imageUrl: '/images/desert_heirloom_dish.jpg',
      badge: 'Endangered Tradition'
    },
    {
      stateId: 'kl',
      territory: 'Kerala',
      title: 'Oottupura Temple Avial & Ada',
      region: 'South Coast',
      tagline: 'Nine indigenous roots slow-simmered in soapstone kalchatti with raw coconut paste and unrefined virgin coconut oil.',
      imageUrl: '/images/coastal_heirloom_dish.jpg',
      badge: 'Temple Sanctum'
    },
    {
      stateId: 'jh',
      territory: 'Jharkhand',
      title: 'Sal Forest Rugra Stew',
      region: 'East Woodlands',
      tagline: 'Rare wild subterranean puffball mushrooms foraged only in damp sal forests during early monsoon thunderstorms.',
      imageUrl: '/images/tribal_forest_dish.jpg',
      badge: 'Critically Rare'
    }
  ];

  return (
    <section className="featured-showcase-section">
      <div className="showcase-header">
        <div className="showcase-subtitle-row">
          <Flame size={14} className="icon-terracotta" />
          <span>CURATOR'S SPOTLIGHT</span>
        </div>
        <h2 className="showcase-title">Signature Endangered Culinary Archetypes</h2>
        <p className="showcase-desc">
          Four distinct climatic zones of Bharat, each preserving an irreplaceable relationship with wild ecosystems, heirloom cookware, and oral recipe secrets.
        </p>
      </div>

      <div className="showcase-cards-grid">
        {highlights.map((item) => (
          <div
            key={item.stateId}
            className="showcase-card"
            onClick={() => onSelectState(item.stateId)}
            role="button"
            tabIndex={0}
            aria-label={`Explore ${item.title} from ${item.territory}`}
          >
            <div className="showcase-card-img-wrap">
              <img src={item.imageUrl} alt={item.title} className="showcase-card-img" />
              <span className="showcase-badge">{item.badge}</span>
              <span className="showcase-territory-pill">{item.territory}</span>
            </div>

            <div className="showcase-card-body">
              <span className="showcase-region-tag">{item.region}</span>
              <h3 className="showcase-card-title">{item.title}</h3>
              <p className="showcase-card-tagline">{item.tagline}</p>
              <div className="showcase-card-link">
                <span>Enter {item.territory} Archive</span>
                <ArrowRight size={15} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
