# 🌿 FLAVOUR TRAILS — Forgotten Flavours of India

> **An Academic & Cultural Exploration of Endangered Indian Culinary Heritage**  
> *Developed as part of Gastronomic Studies coursework under the guidance of **Dr. Manjusha C. B.***

🌐 **Live Website:** [https://flavour-trails.vercel.app/#](https://flavour-trails.vercel.app/#)

---

## 📖 Table of Contents
1. [Overview & Academic Vision](#-overview--academic-vision)
2. [Live Application & Deep Linking](#-live-application--deep-linking)
3. [Key Features](#-key-features)
4. [Component Architecture & Directory Structure](#-component-architecture--directory-structure)
5. [Core Components Deep Dive](#-core-components-deep-dive)
6. [Data Schema & State Archives](#-data-schema--state-archives)
7. [Tech Stack](#-tech-stack)
8. [Getting Started & Local Setup](#-getting-started--local-setup)
9. [The Team](#-the-team)
10. [Academic Guidance & References](#-academic-guidance--references)

---

## 🏛 Overview & Academic Vision

India’s gastronomic heritage is an intricate tapestry of climate, geography, trade routes, religious rituals, and oral family traditions passed down through generations. However, rapid urbanisation and culinary homogenisation have caused numerous micro-regional dishes, heirloom wild botanicals, ancient fermentation sciences, and traditional cookware practices to gradually disappear from mainstream memory.

**FLAVOUR TRAILS — Forgotten Flavours of India** is an interactive digital archive conceived and developed as part of our **Gastronomic Studies coursework** under the faculty mentorship of **Dr. Manjusha C. B.**

### Our Mission
> *To discover, document, and celebrate India’s diverse culinary traditions while raising awareness about regional dishes and food practices that deserve greater recognition.*

### Our Vision
> *To create a digital space where India’s culinary heritage can be explored, appreciated, and preserved for future generations.*

---

## 🌐 Live Application & Deep Linking

Access the deployed application at:  
👉 **[https://flavour-trails.vercel.app/#](https://flavour-trails.vercel.app/#)**

The application supports native **hash-based routing and deep-linking**:

| Route / Hash | Destination | Description |
| :--- | :--- | :--- |
| `/#` | **Home (Culinary Map)** | Interactive SVG India map with pinned deckle-paper dish cards and state hover tooltips |
| `/#stories` or `/#oral-stories` | **Oral Food Stories** | Authentic voice recordings in people's own voices + living elder memory chronicles |
| `/#recipes` | **All Recipes** | Filterable compendium of authentic heirloom recipes across all states |
| `/#about` | **About Us** | Project purpose, faculty guidance tribute, team profiles, and research references |
| `/#state={id}` | **State Detail Archive** | Comprehensive culinary dossier for a specific state (e.g. `state=rj`, `state=kl`) |
| `/#state={id}&dish={dishId}` | **State Dish Dossier** | Directly anchors and opens a specific heirloom dish (e.g. `state=rj&dish=rj-ker`) |

---

## ✨ Key Features

- 🎙️ **Oral Food Stories (Recorded in People's Own Voices)**: A living audio archive dedicated to capturing personal experiences, family kitchen rituals, and emotional food connections directly in people's spoken voices rather than just written texts. Features custom in-browser audio players with scrubbers, animated waveforms, playback speed toggles, and word-for-word spoken transcripts (strictly anonymous, community-attributed without individual names).
  - *The Midnight Highway & Mom's Hot Lauki Paratha* (1:09) — Traveling 3 hours from Delhi to Mathura past midnight just for fresh mother's parathas.
  - *The 90-Minute Local Train Quest: The Spiciest Misal Challenge* (0:37) — College friends embarking on a local train journey across Maharashtra hunting fiery misal.
  - *The 7th Birthday Revelation: Chole Bhature* (0:19) — Childhood birthday celebration falling in love with classic North Indian chickpeas and puffed bhatura.
  - *Hostel Days & Mom's Crispy Ghee Dosa* (2:20) — Personal reflection on mom's fermented batter as an emotional cure and comfort food.
  - *The Dum Fragrance That Stole The House: Father’s Sunday Biryani* (0:52) — Paternal cooking rituals, teamwork, and waiting for the dough seal to break.
  - *Beyond The Famous Restaurants: Why Mom’s Biryani Still Reigns Supreme* (1:19) — Hyderabad food lore on why no restaurant can beat home-cooked maternal biryani.
  - *The Street-Corner Burst: Childhood Holidays & Pani Puri* (0:40) — The explosion of street-side flavours and the thrill of homecoming holidays.
  - *Sacred Cow-Dung Embers & Sattu: The Timeless Resilience of Litti Chokha* (1:05) — Rural Magadhan resilience and the earthen nourishment of ember-roasted litti.
- 🗺️ **Interactive Vector Map of India**: Dynamic SVG map (`@svg-maps/india`) allowing exploratory browsing across all 28 states and union territories with real-time hover cards displaying culinary philosophies, staple grains, and representative dishes.
- 📜 **Parchment & Leather Manuscript Design**: Aesthetic inspired by classical Indian manuscripts, natural terracotta, antique brass, and deckle-edged polaroid photography.
- 🥘 **Comprehensive State Archives**: Detailed dossiers for Indian states covering:
  - Historical era & cultural context
  - Core gastronomic philosophy
  - Heirloom cookware and traditional vessels (e.g., soapstone *kalchatti*, bronze *uruli*, iron *kavili*, bell-metal *kahi bati*)
  - Signature spices, wild aromatics, and staple heirloom grains
  - Complete step-by-step recipes with precise ingredient ratios and serving rituals
- 👵 **Elder Memory Chronicles**: In-depth field narratives featuring first-person memories from regional elders, temple *botis*, and foragers detailing sensory nostalgia (aroma, texture, flavor shock) and historical anecdotes.
- 🔍 **Universal Real-Time Search**: Cross-database search filtering instantaneously across dishes, native vernacular names, states, spices, and ingredients.
- 📚 **Annotated Academic Bibliography**: Filterable repository of peer-reviewed books, historical literature (such as K.T. Achaya's historical companions), and culinary papers.

---

## 🏗 Component Architecture & Directory Structure

```
gastro/
├── public/
│   ├── images/
│   │   ├── team/                     # Team member profile photographs
│   │   │   ├── khushi.jpg
│   │   │   ├── vivinya.jpg
│   │   │   ├── rithvik.jpg
│   │   │   ├── pratyush.jpg
│   │   │   ├── likhit.jpg
│   │   │   └── utsav.jpg
│   │   ├── [state-code]/             # State dish photos (e.g., /images/rj/ker_ki_sabzi.jpg)
│   │   └── ...
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AboutUs.tsx               # Academic about page, faculty mentor tribute, team & references
│   │   ├── AboutUs.css
│   │   ├── AllRecipes.tsx            # Comprehensive filterable recipe compendium
│   │   ├── AllRecipes.css
│   │   ├── CuratorModal.tsx          # Preservation manifesto & culinary ethics modal
│   │   ├── CuratorModal.css
│   │   ├── FlavourTrailsHero.tsx     # Hero section with interactive SVG map & pinned cards
│   │   ├── FoodStories.tsx           # Living memories & oral narratives archive
│   │   ├── FoodStories.css
│   │   ├── Navbar.tsx                # Universal top header with search & tab controls
│   │   ├── SearchResults.tsx         # Real-time search dropdown/overlay
│   │   ├── StateDetail.tsx           # Deep-dive state monograph with dish accordions
│   │   └── StateDetail.css
│   ├── data/
│   │   ├── aboutData.ts              # Team member bios, academic manifesto & bibliography
│   │   ├── archiveData.ts            # Core database containing detailed dossiers for Indian states
│   │   └── foodStoriesData.ts        # 8 curated oral memories, sensory profiles & historical origins
│   ├── types/
│   │   └── archive.ts                # TypeScript interfaces for dishes, states, ingredients, and stories
│   ├── App.tsx                       # Root orchestrator & hash-based router
│   ├── App.css                       # Global design system & theme variables
│   ├── main.tsx                      # Vite React entry point
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🧩 Core Components Deep Dive

### 1. `App.tsx` (Root Orchestrator)
- Manages global state: `selectedStateId`, `selectedDishId`, `isAboutView`, `isRecipesView`, `isStoriesView`, and `searchTerm`.
- Synchronizes window hash changes (`window.addEventListener('hashchange')`) for backward/forward browser navigation and direct URLs.
- Provides universal searching across all dishes, native translations, and regional keywords.

### 2. `FlavourTrailsHero.tsx` (Interactive Culinary Map)
- Renders an interactive vector map of India using `@svg-maps/india`.
- Features 4 pinned deckle-edged polaroid cards representing authentic regional dishes:
  - **Rajasthan**: *Ker Ki Sabzi* (Wild desert berry curry)
  - **Assam**: *Masor Tenga* (Tangy river fish broth with Kaji Nemu)
  - **Karnataka**: *Ragi Ambli* (Deccan finger-millet gruel)
  - **Tamil Nadu**: *Manathakkali Keerai Poriyal* (Heirloom black nightshade greens)
- Hovering over any territory reveals a dynamic parchment tooltip summarizing the state's signature flavours.

### 3. `FoodStories.tsx` (Living Memories Archive)
- Captures 8 personal oral histories from elders, foragers, and home cooks across India.
- Features regional chips (`North`, `South`, `East`, `West`, `North-East`) and keyword search.
- Interactive modal with:
  - Long-form oral monologues
  - Sensory memory cards (*Aroma*, *Texture*, *Flavor Shock*)
  - Historical context & colonial/trade roots
  - Direct call-to-action to open the dish's full recipe archive

### 4. `AllRecipes.tsx` (Heirloom Recipe Compendium)
- Catalogues traditional recipes across every documented state.
- Features search, regional sorting, preparation times, difficulty meters, and dietary tags.
- Detailed recipe cards with serving suggestions and cultural backgrounds.

### 5. `StateDetail.tsx` (State Culinary Monograph)
- Displays comprehensive regional metadata: historical era, culinary philosophy, heirloom cookware, signature spices, and staple grains.
- Dynamic dish selector displaying preparation steps, categorized ingredient breakdowns, cookware recommendations, and serving etiquette.

### 6. `AboutUs.tsx` (Academic Mission & Team)
- **Academic Project Narrative**: Detailed documentation of the project's purpose under Gastronomic Studies.
- **Faculty Mentor Tribute**: Under the guidance of Dr. Manjusha C. B.
- **Meet the Team**: Responsive grid of cards highlighting individual roles, personal bios, and technical/field contributions.
- **Research References**: Filterable bibliography categorised into Books, Academic Research, Official Archives, and Digital Sources.

### 7. `Navbar.tsx` & `SearchResults.tsx`
- Clean sticky top bar with responsive brand lockup, four direct section buttons (**Home**, **Stories**, **Recipes**, **About**), and instant search.

---

## 🛠 Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/)
- **Mapping Engine**: [@svg-maps/india](https://github.com/VictorVeloso/svg-maps)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS3 Custom Properties with custom vintage Indian typography:
  - *Playfair Display* & *Cinzel Decorative* (Titles & headings)
  - *Lora* (Editorial body prose & oral monologues)
  - *Plus Jakarta Sans* (Functional UI labels & tags)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 💻 Getting Started & Local Setup

### Prerequisites
- Node.js (version 18.0.0 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/flavour-trails.git
   cd flavour-trails
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 👥 The Team

Behind every food story is a dedicated student team driven by curiosity, field inquiry, and a shared appreciation for India’s culinary heritage:

| Member | Role | Key Contributions |
| :--- | :--- | :--- |
| **Khushi** | Project Research & Content Development | Comprehensive research synthesis across Northern & Eastern state cuisines; harmonization of heirloom recipe dossiers and academic citation integrity. |
| **Vivinya** | Regional Cuisine Research | Field investigation of Southern & Western terroirs, indigenous grains, wild botanicals, and agricultural crop cycles. |
| **Rithvik** | Food Stories & Cultural Documentation | Oral history collection, temple feast documentation (including Kangri Dham), and cultural folklore curation. |
| **Pratyush** | Gastronomic Studies & Editorial Review | Editorial review of regional narratives, cultural glossaries, and pedagogical alignment with Gastronomic Studies coursework. |
| **Likhit** | Archival Curation & Field Documentation | Documentation of heirloom cookware (soapstone *kalchattis*, brass *urulis*, iron *tawas*) and traditional fermentation techniques. |
| **Utsav** | Website Design & Development | Interactive SVG India map architecture, full-stack frontend development, parchment visual design system, and deep linking. |

---

## 🎓 Academic Guidance & References

### Faculty Guidance
This project was undertaken as part of the **Gastronomic Studies coursework** under the academic mentorship of:

> **Dr. Manjusha C. B.**  
> *Her academic guidance provided the framework for exploring food beyond recipes, encouraging us to appreciate its cultural, historical, and social significance.*

### Primary References Consulted
- **Achaya, K. T.** (1994). *Indian Food: A Historical Companion*. Oxford University Press.
- **Achaya, K. T.** (1998). *A Historical Dictionary of Indian Food*. Oxford University Press.
- **Sen, Colleen Taylor** (2004). *Food Culture in India*. Greenwood Publishing Group.
- **Pant, Pushpesh** (2010). *India: The Cookbook*. Phaidon Press.
- **National Commission on Agriculture & ICAR** — Bulletins on indigenous crops, millets, and wild edible botanicals.

---

## 📜 License & Academic Disclaimer

This project is developed for educational and academic research purposes as part of Gastronomic Studies coursework. All documented recipes, cultural histories, and photographs are collected for cultural preservation and awareness.

© 2026 **Flavour Trails Team** — Forgotten Flavours of India.
