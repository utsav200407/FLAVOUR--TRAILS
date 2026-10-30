export type Region = 
  | 'North' 
  | 'South' 
  | 'East' 
  | 'West' 
  | 'Central' 
  | 'North-East' 
  | 'Islands';

export type DietaryType = 
  | 'Vegetarian' 
  | 'Non-Vegetarian' 
  | 'Vegan' 
  | 'Millet-based' 
  | 'Tribal Foraged';

export type PreservationStatus = 
  | 'Critically Endangered' 
  | 'Living Ritual' 
  | 'Endangered Oral Tradition' 
  | 'Revived Heirloom'
  | 'Traditional Dish';

export interface Ingredient {
  item: string;
  amount?: string;
  note?: string;
  indigenousName?: string;
}

export interface RecipeStepDetail {
  stepNum: number;
  title: string;
  instruction: string;
  imageUrl?: string;
}

export interface IngredientSection {
  title: string;
  items: Ingredient[];
}

export interface ServingSuggestion {
  text: string;
  imageUrl?: string;
}

export interface Dish {
  id: string;
  name: string;
  nativeName: string;
  tagline: string;
  description: string;
  preservationStatus: PreservationStatus;
  microOrigin: string;
  culturalSignificance: string;
  ingredients: Ingredient[];
  preparationSteps: string[];
  vessel: string;
  cookingFat: string;
  season: string;
  flavorProfile: string[];
  dietary: DietaryType;
  imageUrl: string;
  secondaryImageUrl?: string;
  phonetic?: string;
  approxPrepTime?: string;
  englishSubtitle?: string;
  culturalQuote?: string;
  servesCount?: string;
  ingredientSections?: IngredientSection[];
  stepDetails?: RecipeStepDetail[];
  servingSuggestion?: ServingSuggestion;
}

export interface StateArchive {
  id: string; // 2-letter id matching @svg-maps/india (e.g., 'rj', 'kl', 'wb')
  name: string;
  nativeName: string;
  capital: string;
  region: Region;
  culinaryPhilosophy: string;
  historicalEra: string;
  heirloomVessels: string[];
  signatureSpices: string[];
  stapleGrains: string[];
  representativeDish: Dish;
  dishes: Dish[];
  neighborIds?: string[];
}

export interface MapLocation {
  id: string;
  name: string;
  path: string;
}

export interface MapData {
  label: string;
  viewBox: string;
  locations: MapLocation[];
}
