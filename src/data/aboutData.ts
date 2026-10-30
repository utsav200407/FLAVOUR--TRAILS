export interface TeamMember {
  id: string;
  name: string;
  role: string;
  intro: string;
  contributions: string[];
  photoUrl?: string; // Set to image path (e.g. '/images/team/member1.jpg') when actual photograph is available
}

export type ReferenceCategory = 
  | 'books'
  | 'academic'
  | 'official'
  | 'digital';

export interface CulinaryReference {
  id: string;
  category: ReferenceCategory;
  categoryLabel: string;
  authorOrOrg: string;
  title: string;
  publisherOrWebsite: string;
  year?: string;
  url?: string;
  regionOrTopic: string;
  connectedStateId?: string;
}

export const projectMissionVision = {
  title: 'The Story Behind Flavour Trails',
  subtitle: 'Gastronomic Studies Academic Project',
  mentor: {
    name: 'Dr. Manjusha C. B.',
    title: 'Faculty Mentor & Academic Advisor',
    department: 'Gastronomic Studies',
    note: 'This project was undertaken as part of our Gastronomic Studies coursework under the guidance of Dr. Manjusha C. B. Her academic guidance provided the framework for exploring food beyond recipes, encouraging us to appreciate its cultural, historical, and social significance.'
  },
  narrativeParagraphs: [
    'Flavour Trails — Forgotten Flavours of India is an academic project developed as part of our Gastronomic Studies coursework under the guidance of Dr. Manjusha C. B.',
    'India’s culinary heritage is a reflection of its diverse cultures, traditions, geography, and history. Every region has its own distinctive ingredients, cooking techniques, traditional recipes, and food stories passed down through generations. However, many regional dishes and culinary traditions remain relatively unexplored and are gradually disappearing from mainstream food culture.',
    'Through Flavour Trails, we aim to explore and celebrate India’s rich gastronomic diversity by documenting traditional dishes, regional ingredients, local cooking practices, and the cultural stories behind them.',
    'Our website takes visitors on a journey through India’s culinary landscape, allowing them to explore regional food cultures and discover the stories behind forgotten and lesser-known flavours.',
    'More than a collection of recipes, Flavour Trails is an attempt to understand food as an expression of identity, heritage, community, and tradition.'
  ],
  mission: 'To discover, document, and celebrate India’s diverse culinary traditions while raising awareness about regional dishes and food practices that deserve greater recognition.',
  vision: 'To create a digital space where India’s culinary heritage can be explored, appreciated, and passed on to future generations.',
  researchNoteTitle: 'Preserving Food, Preserving Stories',
  researchNoteText: 'Food traditions are living expressions of culture. The stories behind traditional dishes may differ across communities, families, and generations. Our research seeks to represent these traditions respectfully while recognising that no single account can capture every regional variation. We encourage visitors to explore the references provided, learn from local culinary traditions, and appreciate the people who continue to preserve India’s gastronomic heritage.',
  closingHeadline: 'Every Flavour Has a Story.',
  closingText: 'From forgotten family recipes to distinctive regional ingredients, India’s culinary heritage holds countless stories waiting to be discovered. Join us as we travel through the flavours, traditions, and memories that make Indian food extraordinary.',
  tagline: 'Discover the flavours. Preserve the stories.'
};

/**
 * Team Members Array
 * Configured with student researchers and authentic photographs.
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'member-khushi',
    name: 'Khushi',
    role: 'Project Research and Content Development',
    intro: 'Focuses on secondary research, culinary documentation, and cross-referencing authentic regional recipes and techniques.',
    contributions: [
      'Comprehensive research synthesis across Northern and Eastern state cuisines',
      'Harmonization of heirloom recipe dossiers, ingredient ratios, and historical contexts',
      'Liaison for academic source citation and research transparency'
    ],
    photoUrl: '/images/team/khushi.jpg'
  },
  {
    id: 'member-vivinya',
    name: 'Vivinya',
    role: 'Regional Cuisine Research',
    intro: 'Dedicated to investigating indigenous terroirs, micro-regional foodways, and traditional agricultural crop cycles.',
    contributions: [
      'Field analysis of Southern and Western culinary heritage and indigenous ingredients',
      'Comparative documentation of heirloom grains, wild botanicals, and seasonal produce',
      'Cross-referencing historical recipe adaptations with oral cooking traditions'
    ],
    photoUrl: '/images/team/vivinya.jpg'
  },
  {
    id: 'member-rithvik',
    name: 'Rithvik',
    role: 'Food Stories and Cultural Documentation',
    intro: 'Explores oral histories, folklore, ritual associations, and community memory woven into India\'s traditional foodways.',
    contributions: [
      'Documentation of ceremonial feast rituals including Kangri Dham and community foodways',
      'Oral history curation for endangered festival dishes and tribal cooking lore',
      'Analysis of socio-cultural significance behind community cooking practices'
    ],
    photoUrl: '/images/team/rithvik.jpg'
  },
  {
    id: 'member-pratyush',
    name: 'Pratyush',
    role: 'Gastronomic Studies & Editorial Review',
    intro: 'Focuses on culinary literature synthesis, cultural narratives, and editorial refinement of state archives.',
    contributions: [
      'Editorial review of regional culinary narratives and cultural glossaries',
      'Synthesis of academic literature and historical references across state chapters',
      'Content consistency and pedagogical alignment with Gastronomic Studies coursework'
    ],
    photoUrl: '/images/team/pratyush.jpg'
  },
  {
    id: 'member-likhit',
    name: 'Likhit',
    role: 'Archival Curation & Field Documentation',
    intro: 'Specializes in mapping traditional cooking vessels, fire techniques, and regional preservation methodologies.',
    contributions: [
      'Documentation of heirloom cookware including soapstone kalchattis, brass urulis, and iron tawas',
      'Archival collation of forgotten culinary techniques and natural fermentation science',
      'Preservation assessment of endangered oral recipes and village cooking practices'
    ],
    photoUrl: '/images/team/likhit.jpg'
  },
  {
    id: 'member-utsav',
    name: 'Utsav',
    role: 'Website Design and Development',
    intro: 'Leads the digital architecture, interactive mapping engine, and visual identity for Flavour Trails.',
    contributions: [
      'Interactive SVG India culinary map architecture and regional filtering systems',
      'Editorial interface design echoing Indian manuscript warmth and antique parchment textures',
      'Full-stack frontend development, performance optimization, and deep linking'
    ],
    photoUrl: '/images/team/utsav.jpg'
  }
];

/**
 * References & Sources
 * Populated strictly with sources consulted during project development.
 * Easily editable to add additional sources used for specific states and dishes.
 */
export const projectReferences: CulinaryReference[] = [
  // A. Books & Culinary Literature
  {
    id: 'ref-book-1',
    category: 'books',
    categoryLabel: 'Books & Culinary Literature',
    authorOrOrg: 'K. T. Achaya',
    title: 'Indian Food: A Historical Companion',
    publisherOrWebsite: 'Oxford University Press',
    year: '1994',
    regionOrTopic: 'Pan-Indian Food History & Agrarian Evolution'
  },
  {
    id: 'ref-book-2',
    category: 'books',
    categoryLabel: 'Books & Culinary Literature',
    authorOrOrg: 'K. T. Achaya',
    title: 'A Historical Dictionary of Indian Food',
    publisherOrWebsite: 'Oxford University Press',
    year: '1998',
    regionOrTopic: 'Classical Indian Ingredients, Sanskrit Etymology & Cookware'
  },

  // B. Academic Research
  {
    id: 'ref-acad-1',
    category: 'academic',
    categoryLabel: 'Academic Research',
    authorOrOrg: 'Parthasarathi et al.',
    title: 'Vegetarian ethnic foods of South India: review on the influence of traditional knowledge',
    publisherOrWebsite: 'Journal of Ethnic Foods (SpringerOpen)',
    year: '2022',
    url: 'https://link.springer.com/article/10.1186/s42779-022-00156-1',
    regionOrTopic: 'South India — Ethnic Food Systems & Traditional Knowledge',
    connectedStateId: 'tn'
  },
  {
    id: 'ref-acad-2',
    category: 'academic',
    categoryLabel: 'Academic Research',
    authorOrOrg: 'Uttarakhand Open University',
    title: 'Regional Cuisines of India – II (BHM-602AT Course SLM)',
    publisherOrWebsite: 'School of Tourism, Hospitality & Hotel Management',
    year: '2020',
    url: 'https://www.uou.ac.in/sites/default/files/slm/BHM-602AT.pdf',
    regionOrTopic: 'North & Western Indian Regional Gastronomy Curriculum',
    connectedStateId: 'ut'
  },

  // C. Official & Institutional Sources
  {
    id: 'ref-off-1',
    category: 'official',
    categoryLabel: 'Official & Institutional Sources',
    authorOrOrg: 'INTACH (Young INTACH)',
    title: 'Traditional Food of Andhra Pradesh',
    publisherOrWebsite: 'Indian National Trust for Art and Cultural Heritage',
    year: '2018',
    url: 'https://youngintach.org/files/food8.pdf',
    regionOrTopic: 'Andhra Pradesh — Rayalaseema & Coastal Heritage',
    connectedStateId: 'ap'
  },
  {
    id: 'ref-off-2',
    category: 'official',
    categoryLabel: 'Official & Institutional Sources',
    authorOrOrg: 'Himachal Pradesh Tourism Development Corporation (HPTDC)',
    title: 'Cuisines of Himachal Pradesh (Siddu, Chha Gosht & Pahari Grains)',
    publisherOrWebsite: 'Government of Himachal Pradesh',
    year: '2024',
    url: 'https://hptdc.hp.gov.in/index.php/cuisines',
    regionOrTopic: 'Himachal Pradesh — Mountain Grains & Fermented Breads',
    connectedStateId: 'hp'
  },
  {
    id: 'ref-off-3',
    category: 'official',
    categoryLabel: 'Official & Institutional Sources',
    authorOrOrg: 'Apna Kangra Administration, Govt. of Himachal Pradesh',
    title: 'Dham: The Traditional Festive Mid-Day Feast',
    publisherOrWebsite: 'Government of Himachal Pradesh',
    year: '2023',
    url: 'https://apnakangra.hp.gov.in/local_cuisines/dham/',
    regionOrTopic: 'Himachal Pradesh — Kangri Dham & Rajma Madra Service',
    connectedStateId: 'hp'
  },
  {
    id: 'ref-off-4',
    category: 'official',
    categoryLabel: 'Official & Institutional Sources',
    authorOrOrg: 'District Kangra Administration, Govt. of Himachal Pradesh',
    title: 'Kangri Dham: Ceremonial Feasts and Hereditary Boti Cooks',
    publisherOrWebsite: 'National Informatics Centre (NIC)',
    year: '2024',
    url: 'https://hpkangra.nic.in/kangri-dham/',
    regionOrTopic: 'Himachal Pradesh — Botis & Leaf-Plate Ritual Dining',
    connectedStateId: 'hp'
  },
  {
    id: 'ref-off-5',
    category: 'official',
    categoryLabel: 'Official & Institutional Sources',
    authorOrOrg: 'Government of Punjab',
    title: 'Culture and Cuisine: Langar, Sarson da Saag & Dairy Traditions',
    publisherOrWebsite: 'Official Portal of Government of Punjab',
    year: '2024',
    url: 'https://punjab.gov.in/culture',
    regionOrTopic: 'Punjab — Agrarian Food Culture & Shared Dining',
    connectedStateId: 'pb'
  },
  {
    id: 'ref-off-6',
    category: 'official',
    categoryLabel: 'Official & Institutional Sources',
    authorOrOrg: 'Haryana Tourism',
    title: 'About Us: Culinary Heritage of Haryana (Bajra, Kachri & Dairy)',
    publisherOrWebsite: 'Haryana Tourism Corporation Ltd.',
    year: '2024',
    url: 'https://haryanatourism.gov.in/about-us/',
    regionOrTopic: 'Haryana — Millet Dishes, Kachri & Rural Hearth Cookery',
    connectedStateId: 'hr'
  },
  {
    id: 'ref-off-7',
    category: 'official',
    categoryLabel: 'Official & Institutional Sources',
    authorOrOrg: 'Incredible India, Ministry of Tourism, Govt. of India',
    title: 'Food and Cuisine — Dehradun & Uttarakhand Hill Country',
    publisherOrWebsite: 'Ministry of Tourism, Government of India',
    year: '2024',
    url: 'https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/dehradun/food-and-cuisine.html',
    regionOrTopic: 'Uttarakhand — Kafuli, Phaanu & Gahat Pulses',
    connectedStateId: 'ut'
  },
  {
    id: 'ref-off-8',
    category: 'official',
    categoryLabel: 'Official & Institutional Sources',
    authorOrOrg: 'Uttar Pradesh Eco-Tourism Development Board',
    title: 'Flavors of Uttar Pradesh: Awadhi Slow Cooking & Rustic Grains',
    publisherOrWebsite: 'Government of Uttar Pradesh',
    year: '2024',
    url: 'https://upecoboard.up.gov.in/',
    regionOrTopic: 'Uttar Pradesh — Awadhi Dum Cooking & Nimona Traditions',
    connectedStateId: 'up'
  },
  {
    id: 'ref-off-9',
    category: 'official',
    categoryLabel: 'Official & Institutional Sources',
    authorOrOrg: 'Incredible India, Ministry of Tourism, Govt. of India',
    title: '10 Local Foods You Must Eat — Dharamshala & Mid-Himalayan Valleys',
    publisherOrWebsite: 'Ministry of Tourism, Government of India',
    year: '2024',
    url: 'https://www.incredibleindia.gov.in/en/himachal-pradesh/dharamshala/10-local-foods-you-must-eat',
    regionOrTopic: 'Himachal Pradesh — Siddu & High Altitude Terroirs',
    connectedStateId: 'hp'
  },

  // D. Digital Sources
  {
    id: 'ref-dig-1',
    category: 'digital',
    categoryLabel: 'Digital Sources',
    authorOrOrg: 'The New Indian Express',
    title: 'Flavours From a Forgotten Past',
    publisherOrWebsite: 'The New Indian Express Lifestyle & Food Heritage',
    year: '2016',
    url: 'https://www.newindianexpress.com/lifestyle/food/2016/Apr/09/flavours-from-a-forgotten-past-922293.html',
    regionOrTopic: 'South India — Reviving Neglected Regional Recipes'
  },
  {
    id: 'ref-dig-2',
    category: 'digital',
    categoryLabel: 'Digital Sources',
    authorOrOrg: 'Gulf News Food Desk',
    title: 'Pazhamkanji or Panta Bhaat: Ancestral Fermented Rice Porridges',
    publisherOrWebsite: 'Gulf News Food Heritage',
    year: '2021',
    url: 'https://gulfnews.com/food/pazhamkanji-or-panta-bhaat-take-your-pick-1.1611405275060',
    regionOrTopic: 'Kerala & Eastern India — Fermented Rice Starches & Cooling Gut Health',
    connectedStateId: 'kl'
  },
  {
    id: 'ref-dig-3',
    category: 'digital',
    categoryLabel: 'Digital Sources',
    authorOrOrg: 'Outlook India Heritage Desk',
    title: 'Lost Sankranti Recipes: Traditional Festive Foods of Rural India at Risk',
    publisherOrWebsite: 'Outlook India Brand Studio',
    year: '2022',
    url: 'https://www.outlookindia.com/brand-studio/lost-recipes-of-sankranti-indias-rural-festive-foods-at-risk',
    regionOrTopic: 'Pan-India — Endangered Harvest & Winter Solstice Foods'
  },
  {
    id: 'ref-dig-4',
    category: 'digital',
    categoryLabel: 'Digital Sources',
    authorOrOrg: 'Homegrown India',
    title: 'From Fogla To Shevla: 10 Traditional Foods That Are Slowly Disappearing from Indian Plates',
    publisherOrWebsite: 'Homegrown Cultural Journalism',
    year: '2021',
    url: 'https://homegrown.co.in/amp/story/homegrown-explore/from-fogla-to-shevla-10-traditional-foods-that-are-disappearing-from-indian-plates',
    regionOrTopic: 'Indigenous Wild Botanicals & Vanishing Seasonal Foraging'
  },
  {
    id: 'ref-dig-5',
    category: 'digital',
    categoryLabel: 'Digital Sources',
    authorOrOrg: 'Uttarakhand Mandal of America (UMA)',
    title: 'Food of Uttarakhand: Traditional Garhwali & Kumaoni Cuisines',
    publisherOrWebsite: 'UMA Cultural Heritage Archive',
    year: '2023',
    url: 'https://www.umaus.org/explore-uttarakhand/about-uttarakhand/food-of-uttarakhand',
    regionOrTopic: 'Uttarakhand — Aloo ke Gutke, Kafuli, Bhang ki Chutney',
    connectedStateId: 'ut'
  }
];

