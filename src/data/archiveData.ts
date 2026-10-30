import type { StateArchive } from '../types/archive';

export const statesArchiveData: Record<string, StateArchive> = {
  jk: {
    id: 'jk',
    name: 'Jammu and Kashmir',
    nativeName: 'جموں و کشمیر / जम्मू और कश्मीर',
    capital: 'Srinagar / Jammu',
    region: 'North',
    historicalEra: 'Silk Route & Mughal Himalayan Era',
    culinaryPhilosophy: 'Saffron-infused broths, slow woodfire cooking in copper degchis, sun-dried highland vegetables, and wild forest morels perfumed with fennel and dried ginger.',
    heirloomVessels: ['Kashmiri Degchi (Tinned Copper)', 'Samovar', 'Earthen Mitti Handi'],
    signatureSpices: ['Pampore Shahi Zaffran', 'Pran (Wild Shallots)', 'Ver Masala Cakes', 'Sonth (Dried Ginger)', 'Fennel Powder'],
    stapleGrains: ['Mushqbudji Aromatic Rice', 'Kashmir Buckwheat', 'Himalayan Barley'],
    representativeDish: {
      id: 'jk-gucchi',
      name: 'Gucchi Yakhni Pulao',
      nativeName: 'گچی یخنی پلاؤ',
      tagline: 'Wild Himalayan Morel Pulao in Saffron Curd Broth',
      description: 'Foraged high-altitude black morels simmered in a velvety curd and wild Kashmiri spice infusion with aged fragrant mushqbudji rice.',
      preservationStatus: 'Critically Endangered',
      microOrigin: 'Anantnag & Doda Pine Ridges',
      culturalSignificance: 'Foraged exclusively at 7,000+ feet in coniferous forests following spring snowmelt, this regal dish was served to visiting royal caravans and during the autumn equinox.',
      ingredients: [
        { item: 'Wild Himalayan Gucchi (Black Morels)', amount: '60g dried', indigenousName: 'Kashmiri Gucchi' },
        { item: 'Aromatic Mushqbudji or Aged Basmati Rice', amount: '250g' },
        { item: 'Freshly hung cultured curd', amount: '200g' },
        { item: 'Pure Pampore Saffron steeped in warm milk', amount: '1g' },
        { item: 'Fennel powder & dry ginger powder', amount: '2 tsp each' },
        { item: 'Green & black cardamom with cloves', amount: 'to taste' },
        { item: 'Cold-pressed mustard oil or churned ghee', amount: '3 tbsp' }
      ],
      preparationSteps: [
        'Soak dried wild morels in lukewarm water for 35 minutes, thoroughly rinsing away mountain loam while retaining the earthy broth.',
        'Whisk curd with fennel powder, dry ginger, and steeped saffron until silk-smooth.',
        'Sear whole spices in mustard oil until aromatic; add morels and gently braise until caramelized.',
        'Layer with pre-soaked aromatic rice, pour in reserved strained morel liquor and spiced yogurt broth.',
        'Seal the copper vessel with wheat dough for dum cooking over slow charcoal embers for 22 minutes.'
      ],
      vessel: 'Tinned Copper Degchi with Dough Dum Seal',
      cookingFat: 'Clarified Bilona Ghee / Cold-Pressed Mustard Oil',
      season: 'Spring / Autumn Equinox',
      flavorProfile: ['Earthy Umami', 'Floral Saffron', 'Warming Fennel', 'Smoky Char'],
      dietary: 'Vegetarian',
      imageUrl: '/images/himalayan_heirloom_dish.jpg',
      phonetic: 'GOO-chee YAKH-nee POO-lao',
      approxPrepTime: '1 hr 10 min'
    },
    dishes: [
      {
        id: 'jk-gucchi',
        name: 'Gucchi Yakhni Pulao',
        nativeName: 'گچی یخنی پلاؤ',
        tagline: 'Wild Himalayan Morel Pulao in Saffron Curd Broth',
        description: 'Foraged high-altitude black morels simmered in a velvety curd and wild Kashmiri spice infusion with aged fragrant mushqbudji rice.',
        preservationStatus: 'Critically Endangered',
        microOrigin: 'Anantnag & Doda Pine Ridges',
        culturalSignificance: 'Foraged exclusively at 7,000+ feet in coniferous forests following spring snowmelt, this regal dish was served to visiting royal caravans and during the autumn equinox.',
        ingredients: [
          { item: 'Wild Himalayan Gucchi', amount: '60g dried' },
          { item: 'Mushqbudji Aromatic Rice', amount: '250g' },
          { item: 'Cultured Curd', amount: '200g' },
          { item: 'Pampore Saffron', amount: '1 pinch' },
          { item: 'Fennel & Dry Ginger Powder', amount: '2 tsp' }
        ],
        preparationSteps: [
          'Wash and hydrate sun-dried morels, capturing their deeply concentrated mushroom nectar.',
          'Whisk yogurt with dried mountain herbs, dry ginger, and fennel until emulsified.',
          'Slowly braise morels with cardamom and cloves in cold-pressed oil.',
          'Assemble parboiled rice with morels and saffron curd broth in a copper pot.',
          'Dum cook on low charcoal heat for 25 minutes.'
        ],
        vessel: 'Degchi',
        cookingFat: 'Mustard Oil / Ghee',
        season: 'Spring',
        flavorProfile: ['Earthy', 'Aromatic', 'Gentle Spice'],
        dietary: 'Vegetarian',
        imageUrl: '/images/himalayan_heirloom_dish.jpg'
      },
      {
        id: 'jk-roth',
        name: 'Traditional Kashmiri Roath',
        nativeName: 'روٹھ',
        tagline: 'Ceremonial Cardamom Spiced Hearth Bread',
        description: 'Dense, aromatic flatbread baked on iron tawa and finished with charred poppy seeds, dry coconut, and pure cow ghee.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Kashmir Valley Pandit Kitchens',
        culturalSignificance: 'Prepared during sacred harvest observances like Pann, honoring divine feminine sustenance and ancestral prosperity.',
        ingredients: [
          { item: 'Whole wheat stone-ground flour', amount: '300g' },
          { item: 'Desi Khandsari sugar or jaggery syrup', amount: '150g' },
          { item: 'Crushed green cardamom pods', amount: '1 tbsp' },
          { item: 'Fennel seeds & white poppy seeds', amount: '2 tbsp' },
          { item: 'Pure desi ghee', amount: '100g' }
        ],
        preparationSteps: [
          'Rub warm melted ghee vigorously into wheat flour until the texture resembles fine breadcrumbs.',
          'Knead using warm cardamom-scented sugar reduction into a firm dough.',
          'Form 1-inch thick disks, embossing geometric solar designs with a carved wooden stamp.',
          'Stud with white poppy seeds and coconut slivers, then slow-griddle on heavy cast iron.'
        ],
        vessel: 'Heavy Cast Iron Tawa',
        cookingFat: 'Pure Desi Ghee',
        season: 'Autumn / Pann Festival',
        flavorProfile: ['Sweet Cardamom', 'Nutty Poppy Seed', 'Rich Ghee'],
        dietary: 'Vegetarian',
        imageUrl: '/images/culinary_hero_banner.jpg'
      }
    ]
  },
  hp: {
    id: 'hp',
    name: 'Himachal Pradesh',
    nativeName: 'हिमाचल प्रदेश',
    capital: 'Shimla / Dharamshala',
    region: 'North',
    historicalEra: 'Pahari Dhaam & Himalayan Valley Heritage',
    culinaryPhilosophy: 'Slow woodfire cooking in deep valleys, reliance on wild walnuts, sour pomegranate seeds (Anardana), indigenous fermented doughs, and yogurt reductions tempered in brass.',
    heirloomVessels: ['Charoti (Heavy Brass Pot)', 'Earthen Steamer', 'Kansa Thali'],
    signatureSpices: ['Darhal (Wild Mountain Oregano)', 'Dry Anardana', 'Chamba Chukh Chilies', 'Timur Peppercorn'],
    stapleGrains: ['Red Rice of Rohru', 'Buckwheat (Kuttu)', 'Wheat Flours'],
    representativeDish: {
      id: 'hp-siddu',
      name: 'Siddu',
      nativeName: 'सिड्डू',
      englishSubtitle: 'Fermented Steamed Wheat Bread',
      tagline: 'Gently fermented steamed wheat bread stuffed with walnuts, poppy seeds & drenched in desi ghee.',
      description: 'Siddu is a well-known Himachali steamed bread, especially associated with the mid-hill regions. A soft, gently fermented wheat dough is filled, sealed, and steamed rather than baked. Fillings vary: crushed walnuts, poppy-seed mixtures, or peas may be used, depending on household preference and availability. Ghee is a familiar accompaniment and helps bring out the bread\'s mild, wheaty flavour.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Mid-Hill Valleys, Kullu, Mandi & Shimla',
      culturalSignificance: 'A cornerstone of Pahari winter sustenance for over four centuries. Steamed over rolling mountain waters and brushed generously with cow ghee, it provides warmth during severe Himalayan winters.',
      servesCount: 'Yield: 6 medium siddu; serves 3–4',
      approxPrepTime: 'Active 35 min; proofing 1.5–2 hrs; steaming 18–25 min',
      ingredientSections: [
        {
          title: 'Fermented Wheat Dough',
          items: [
            { item: 'Whole-wheat flour', amount: '2 cups (260 g)' },
            { item: 'Instant yeast (or traditional leavening)', amount: '1/2 tsp' },
            { item: 'Lukewarm water', amount: '3/4 - 1 cup', note: 'added gradually' },
            { item: 'Salt', amount: '1/2 tsp' }
          ]
        },
        {
          title: 'Nutty Spiced Filling',
          items: [
            { item: 'Finely crushed walnuts or cooked green peas', amount: '1/2 cup' },
            { item: 'Poppy seeds, lightly toasted', amount: '1 tbsp', note: 'optional' },
            { item: 'Small green chilli, finely chopped', amount: '1', note: 'optional' },
            { item: 'Fresh coriander leaves, chopped', amount: '1 tbsp' },
            { item: 'Water or oil to bind the filling', amount: '1-2 tbsp', note: 'as needed' }
          ]
        },
        {
          title: 'Serving Accompaniment',
          items: [
            { item: 'Pure desi ghee', amount: 'for serving / dipping' }
          ]
        }
      ],
      ingredients: [
        { item: 'Whole-wheat flour', amount: '2 cups (260 g)' },
        { item: 'Instant yeast or traditional leavening', amount: '1/2 tsp' },
        { item: 'Lukewarm water', amount: '3/4 - 1 cup' },
        { item: 'Salt', amount: '1/2 tsp' },
        { item: 'Finely crushed walnuts or cooked green peas', amount: '1/2 cup' },
        { item: 'Poppy seeds, lightly toasted', amount: '1 tbsp' },
        { item: 'Green chilli, finely chopped', amount: '1' },
        { item: 'Chopped coriander leaves', amount: '1 tbsp' },
        { item: 'Water or oil to bind filling', amount: '1-2 tbsp' },
        { item: 'Pure desi ghee for serving', amount: 'generous bowls' }
      ],
      preparationSteps: [
        'Mix the flour, yeast, and salt in a large bowl. Add lukewarm water gradually and knead until the dough is soft, elastic, and only slightly tacky. Avoid making it stiff; a dry dough can split when shaped.',
        'Cover the bowl and leave the dough in a warm place until visibly puffy, usually 60–120 minutes depending on room temperature.',
        'Prepare the filling by combining walnuts or peas with poppy seeds, coriander, chilli, and a pinch of salt. Add only enough water or oil to make the mixture hold together.',
        'Divide the dough into six equal pieces. Flatten each piece into a thick disc, place filling in the centre, bring the edges together, and pinch firmly to seal into oval or round parcels.',
        'Place parcels on a lightly greased steamer plate or on a clean cloth set over a steaming rack. Steam over briskly boiling water for 18–25 minutes until the dough feels firm and dry to the touch.',
        'Rest for 2 minutes before serving. Split or tear open and brush generously with pure ghee. Serve with dal, walnut chutney, or a simple seasonal curry.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Knead the Dough',
          instruction: 'Mix the flour, yeast, and salt in a large bowl. Add lukewarm water gradually and knead until the dough is soft, elastic, and only slightly tacky.'
        },
        {
          stepNum: 2,
          title: 'Proofing',
          instruction: 'Cover the bowl and leave the dough in a warm place until visibly puffy, usually 60–120 minutes depending on room temperature.'
        },
        {
          stepNum: 3,
          title: 'Prepare the Filling',
          instruction: 'Combine walnuts or peas with poppy seeds, coriander, chilli, and a pinch of salt. Add only enough water or oil to make the mixture hold together.'
        },
        {
          stepNum: 4,
          title: 'Shape and Seal',
          instruction: 'Divide the dough into six equal pieces. Flatten each piece into a thick disc, place filling in the centre, bring the edges together, and pinch firmly to seal.'
        },
        {
          stepNum: 5,
          title: 'Steaming',
          instruction: 'Place parcels on a lightly greased steamer plate or on a clean cloth set over a steaming rack. Steam over briskly boiling water for 18–25 minutes until fully set.'
        },
        {
          stepNum: 6,
          title: 'Rest & Drench in Ghee',
          instruction: 'Rest for 2 minutes before serving. Split open and brush generously with pure ghee. Serve with dal, walnut chutney, or seasonal curry.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot, when the bread is softest. Ghee is traditional in many home-style presentations; dal or a sharp chutney balances the mild dough. For a full meal, add a bowl of lentils and a cooked green vegetable.',
        imageUrl: '/images/hp/siddu.jpg'
      },
      vessel: 'Charoti Steamer Plate with Muslin Cloth',
      cookingFat: 'Pure Desi Ghee',
      season: 'Deep Winter & Festive Gatherings',
      flavorProfile: ['Wheaty & Soft', 'Nutty Walnut', 'Poppy Seed Crunch', 'Rich Desi Ghee'],
      dietary: 'Vegetarian',
      imageUrl: '/images/hp/siddu.jpg',
      phonetic: 'SID-dhoo'
    },
    dishes: [
      {
        id: 'hp-siddu',
        name: 'Siddu',
        nativeName: 'सिड्डू',
        englishSubtitle: 'Fermented Steamed Wheat Bread',
        tagline: 'Gently fermented steamed wheat bread stuffed with walnuts, poppy seeds & drenched in desi ghee.',
        description: 'Siddu is a well-known Himachali steamed bread, especially associated with the mid-hill regions. A soft, gently fermented wheat dough is filled, sealed, and steamed rather than baked. Fillings vary: crushed walnuts, poppy-seed mixtures, or peas may be used, depending on household preference and availability. Ghee is a familiar accompaniment and helps bring out the bread\'s mild, wheaty flavour.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Mid-Hill Valleys, Kullu, Mandi & Shimla',
        culturalSignificance: 'A cornerstone of Pahari winter sustenance for over four centuries. Steamed over rolling mountain waters and brushed generously with cow ghee, it provides warmth during severe Himalayan winters.',
        servesCount: 'Yield: 6 medium siddu; serves 3–4',
        approxPrepTime: 'Active 35 min; proofing 1.5–2 hrs; steaming 18–25 min',
        ingredientSections: [
          {
            title: 'Fermented Wheat Dough',
            items: [
              { item: 'Whole-wheat flour', amount: '2 cups (260 g)' },
              { item: 'Instant yeast (or traditional leavening)', amount: '1/2 tsp' },
              { item: 'Lukewarm water', amount: '3/4 - 1 cup', note: 'added gradually' },
              { item: 'Salt', amount: '1/2 tsp' }
            ]
          },
          {
            title: 'Nutty Spiced Filling',
            items: [
              { item: 'Finely crushed walnuts or cooked green peas', amount: '1/2 cup' },
              { item: 'Poppy seeds, lightly toasted', amount: '1 tbsp', note: 'optional' },
              { item: 'Small green chilli, finely chopped', amount: '1', note: 'optional' },
              { item: 'Fresh coriander leaves, chopped', amount: '1 tbsp' },
              { item: 'Water or oil to bind the filling', amount: '1-2 tbsp', note: 'as needed' }
            ]
          },
          {
            title: 'Serving Accompaniment',
            items: [
              { item: 'Pure desi ghee', amount: 'for serving / dipping' }
            ]
          }
        ],
        ingredients: [
          { item: 'Whole-wheat flour', amount: '2 cups (260 g)' },
          { item: 'Instant yeast or traditional leavening', amount: '1/2 tsp' },
          { item: 'Lukewarm water', amount: '3/4 - 1 cup' },
          { item: 'Salt', amount: '1/2 tsp' },
          { item: 'Finely crushed walnuts or cooked green peas', amount: '1/2 cup' },
          { item: 'Poppy seeds, lightly toasted', amount: '1 tbsp' },
          { item: 'Green chilli, finely chopped', amount: '1' },
          { item: 'Chopped coriander leaves', amount: '1 tbsp' },
          { item: 'Water or oil to bind filling', amount: '1-2 tbsp' },
          { item: 'Pure desi ghee for serving', amount: 'generous bowls' }
        ],
        preparationSteps: [
          'Mix the flour, yeast, and salt in a large bowl. Add lukewarm water gradually and knead until the dough is soft, elastic, and only slightly tacky.',
          'Cover the bowl and leave the dough in a warm place until visibly puffy, usually 60–120 minutes depending on room temperature.',
          'Prepare the filling by combining walnuts or peas with poppy seeds, coriander, chilli, and a pinch of salt. Add only enough water or oil to make the mixture hold together.',
          'Divide the dough into six equal pieces. Flatten each piece into a thick disc, place filling in the centre, bring the edges together, and pinch firmly to seal into oval or round parcels.',
          'Place parcels on a lightly greased steamer plate or on a clean cloth set over a steaming rack. Steam over briskly boiling water for 18–25 minutes until the dough feels firm and dry to the touch.',
          'Rest for 2 minutes before serving. Split or tear open and brush generously with pure ghee. Serve with dal, walnut chutney, or a simple seasonal curry.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Knead the Dough',
            instruction: 'Mix the flour, yeast, and salt in a large bowl. Add lukewarm water gradually and knead until the dough is soft, elastic, and only slightly tacky.'
          },
          {
            stepNum: 2,
            title: 'Proofing',
            instruction: 'Cover the bowl and leave the dough in a warm place until visibly puffy, usually 60–120 minutes depending on room temperature.'
          },
          {
            stepNum: 3,
            title: 'Prepare the Filling',
            instruction: 'Combine walnuts or peas with poppy seeds, coriander, chilli, and a pinch of salt. Add only enough water or oil to make the mixture hold together.'
          },
          {
            stepNum: 4,
            title: 'Shape and Seal',
            instruction: 'Divide the dough into six equal pieces. Flatten each piece into a thick disc, place filling in the centre, bring the edges together, and pinch firmly to seal.'
          },
          {
            stepNum: 5,
            title: 'Steaming',
            instruction: 'Place parcels on a lightly greased steamer plate or on a clean cloth set over a steaming rack. Steam over briskly boiling water for 18–25 minutes until fully set.'
          },
          {
            stepNum: 6,
            title: 'Rest & Drench in Ghee',
            instruction: 'Rest for 2 minutes before serving. Split open and brush generously with pure ghee. Serve with dal, walnut chutney, or seasonal curry.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot, when the bread is softest. Ghee is traditional in many home-style presentations; dal or a sharp chutney balances the mild dough.',
          imageUrl: '/images/hp/siddu.jpg'
        },
        vessel: 'Charoti Steamer Plate with Muslin Cloth',
        cookingFat: 'Pure Desi Ghee',
        season: 'Deep Winter & Festive Gatherings',
        flavorProfile: ['Wheaty & Soft', 'Nutty Walnut', 'Poppy Seed Crunch', 'Rich Desi Ghee'],
        dietary: 'Vegetarian',
        imageUrl: '/images/hp/siddu.jpg'
      },
      {
        id: 'hp-kangri-dham',
        name: 'Kangri Dham',
        nativeName: 'कांगड़ी धाम (मदरा)',
        englishSubtitle: 'A Festive Meal with Madra',
        tagline: 'Ceremonial slow-simmered rajma in velvety spiced yogurt gravy served with aromatic mountain rice.',
        description: 'Dham is not a single curry but a ceremonial meal. In Kangra, it is associated with weddings, religious occasions, and community celebrations. Menus and order of service vary across Himachal; this home-cooking interpretation centres on rajma madra with rice. The key technique is a slow, gentle yogurt-based gravy that coats the beans without splitting.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Kangra Valley Ceremonial Banquets',
        culturalSignificance: 'Dham is a sacred feast cooked exclusively by hereditary Brahmin cooks known as Botis and served on leaves (pattals). Rajma Madra is the celebrated centerpiece of the entire Kangri banquet.',
        servesCount: 'Yield: 4 servings of a home-style madra component with rice',
        approxPrepTime: 'Soaking 6–8 hrs; cooking 60–90 min',
        ingredientSections: [
          {
            title: 'Beans & Cultured Dairy',
            items: [
              { item: 'Dried rajma (kidney beans)', amount: '1 cup', note: 'soaked overnight' },
              { item: 'Plain full-fat yogurt', amount: '2 cups', note: 'whisked smooth' },
              { item: 'Hot water or bean-cooking liquid', amount: '1/2 - 1 cup' }
            ]
          },
          {
            title: 'Whole Spices & Pure Fat',
            items: [
              { item: 'Pure desi ghee', amount: '2 tbsp' },
              { item: 'Cinnamon stick', amount: '1 small stick' },
              { item: 'Green cardamom pods', amount: '3 pods' },
              { item: 'Cloves', amount: '3 cloves' },
              { item: 'Cumin seeds', amount: '1/2 tsp' }
            ]
          },
          {
            title: 'Ground Spices & Rice',
            items: [
              { item: 'Turmeric powder', amount: '1/2 tsp' },
              { item: 'Coriander powder', amount: '1 tsp' },
              { item: 'Red chilli powder', amount: '1/4 tsp', note: 'or to taste' },
              { item: 'Salt', amount: 'to taste' },
              { item: 'Rice', amount: '2 cups', note: 'rinsed, plus water for cooking' }
            ]
          }
        ],
        ingredients: [
          { item: 'Dried rajma (kidney beans)', amount: '1 cup, soaked overnight' },
          { item: 'Plain full-fat yogurt', amount: '2 cups, whisked smooth' },
          { item: 'Pure desi ghee', amount: '2 tbsp' },
          { item: 'Cinnamon stick', amount: '1 small stick' },
          { item: 'Green cardamom pods', amount: '3 pods' },
          { item: 'Cloves', amount: '3 cloves' },
          { item: 'Cumin seeds', amount: '1/2 tsp' },
          { item: 'Turmeric powder', amount: '1/2 tsp' },
          { item: 'Coriander powder', amount: '1 tsp' },
          { item: 'Red chilli powder', amount: '1/4 tsp' },
          { item: 'Salt', amount: 'to taste' },
          { item: 'Hot water or bean-cooking liquid', amount: '1/2 - 1 cup' },
          { item: 'Rice', amount: '2 cups, rinsed' }
        ],
        preparationSteps: [
          'Drain the soaked rajma and rinse. Pressure-cook with fresh water until tender but not disintegrating. Reserve some cooking liquid. Beans must be fully cooked before being added to the yogurt gravy.',
          'Whisk the yogurt until smooth. If it is very cold, let it stand briefly at room temperature. Keep the heat low when adding yogurt; sudden high heat increases the risk of curdling.',
          'Warm ghee in a heavy-bottomed pot. Add cinnamon, cardamom, cloves, and cumin. Let them sizzle gently until fragrant, taking care not to burn the spices.',
          'Lower the heat. Add turmeric, coriander powder, and chilli powder with a spoonful of water to prevent scorching.',
          'Whisk in the yogurt gradually, stirring continuously on low heat until it begins to simmer gently without separating.',
          'Add the cooked rajma, reserved cooking liquid as needed, and salt. Simmer gently for 20–30 minutes, stirring from the bottom so the yogurt does not catch.',
          'Taste and adjust salt and consistency. The finished madra should cling to the beans and taste rounded rather than sharply sour. If too thick, add hot water a little at a time.',
          'Cook rice separately until fluffy. Serve rice with madra and, if desired, add a tangy khatta or another pulse preparation to evoke the wider dham meal.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Cook the Rajma',
            instruction: 'Drain soaked rajma, rinse, and pressure-cook with fresh water until tender but not disintegrating. Reserve cooking liquid.'
          },
          {
            stepNum: 2,
            title: 'Whisk the Yogurt',
            instruction: 'Whisk yogurt until silky smooth. Allow it to sit at room temperature so it does not curdle upon meeting heat.'
          },
          {
            stepNum: 3,
            title: 'Temper Whole Aromatics',
            instruction: 'Warm ghee in a heavy pot. Add cinnamon, cardamom, cloves, and cumin. Let them sizzle gently until fragrant.'
          },
          {
            stepNum: 4,
            title: 'Bloom Ground Spices',
            instruction: 'Lower the heat and add turmeric, coriander powder, and red chilli with a splash of water to avoid scorching.'
          },
          {
            stepNum: 5,
            title: 'Slow Yogurt Reduction',
            instruction: 'Gradually whisk in the yogurt on low heat, stirring continuously until the sauce comes to a gentle simmer.'
          },
          {
            stepNum: 6,
            title: 'Simmer Madra with Beans',
            instruction: 'Add cooked rajma and cooking liquid. Simmer for 20–30 minutes until the madra clings lovingly to the beans.'
          },
          {
            stepNum: 7,
            title: 'Serve with Rice',
            instruction: 'Cook rice until fluffy and serve steaming hot with the rich rajma madra and a dollop of ghee.'
          }
        ],
        servingSuggestion: {
          text: 'For a home meal, serve rice first and ladle the madra beside it. A complete ceremonial dham is more elaborate and pairs with a simple lentil dish, sweet-and-sour khatta, and sweet rice.',
          imageUrl: '/images/hp/kangri_dham.jpg'
        },
        vessel: 'Heavy Brass Charoti / Handi',
        cookingFat: 'Pure Desi Ghee',
        season: 'Celebratory Occasions & Festivals',
        flavorProfile: ['Velvety Yogurt', 'Aromatic Whole Spices', 'Tender Rajma', 'Nutty Ghee'],
        dietary: 'Vegetarian',
        imageUrl: '/images/hp/kangri_dham.jpg'
      },
      {
        id: 'hp-chha-gosht',
        name: 'Chha Gosht',
        nativeName: 'छा गोश्त',
        englishSubtitle: 'Yogurt-Braised Mutton',
        tagline: 'Tender mountain mutton braised slowly in a velvety spiced yogurt gravy with whole Himalayan aromatics.',
        description: 'Chha gosht is associated with Himachali meat cooking and uses yogurt or buttermilk to create a tangy, tenderising braise. This version aims for a smooth gravy and controlled heat. Traditional recipes can differ in the balance of dairy, whole spices, and aromatics; the technique matters more than rigidly standardising every household\'s masala.',
        preservationStatus: 'Traditional Dish',
        microOrigin: 'Chamba & Kangra Hills',
        culturalSignificance: 'A historic festive preparation reflecting the Himalayan tradition of slow-braising mountain meats in cultured dairy over charcoal hearths, yielding an ultra-tender texture and a mild, aromatic broth.',
        servesCount: 'Yield: 4 servings',
        approxPrepTime: 'Marination 1–4 hrs; cooking 75–110 min',
        ingredientSections: [
          {
            title: 'Meat & Marinade',
            items: [
              { item: 'Mutton, bone-in pieces', amount: '700 g' },
              { item: 'Plain yogurt, whisked', amount: '1 1/2 cups', note: 'divided' },
              { item: 'Ginger-garlic paste', amount: '1 tbsp' },
              { item: 'Coriander powder', amount: '1 tsp' },
              { item: 'Turmeric powder', amount: '1/2 tsp' },
              { item: 'Cumin powder', amount: '1/2 tsp' },
              { item: 'Black pepper', amount: '1/2 tsp' },
              { item: 'Salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Pot Aromatics & Whole Spices',
            items: [
              { item: 'Mustard oil or ghee', amount: '2 tbsp' },
              { item: 'Medium onion, finely sliced', amount: '1', note: 'optional' },
              { item: 'Green cardamom pods', amount: '2 pods' },
              { item: 'Cinnamon stick', amount: '1 small stick' },
              { item: 'Cloves', amount: '3 cloves' },
              { item: 'Hot water', amount: '1/2 - 1 cup' }
            ]
          },
          {
            title: 'Garnish',
            items: [
              { item: 'Fresh coriander leaves, chopped', amount: '2 tbsp' }
            ]
          }
        ],
        ingredients: [
          { item: 'Mutton, bone-in pieces', amount: '700 g' },
          { item: 'Plain yogurt, whisked', amount: '1 1/2 cups' },
          { item: 'Mustard oil or ghee', amount: '2 tbsp' },
          { item: 'Medium onion, finely sliced', amount: '1, optional' },
          { item: 'Ginger-garlic paste', amount: '1 tbsp' },
          { item: 'Coriander powder', amount: '1 tsp' },
          { item: 'Turmeric powder', amount: '1/2 tsp' },
          { item: 'Cumin powder', amount: '1/2 tsp' },
          { item: 'Green cardamom pods', amount: '2 pods' },
          { item: 'Cinnamon stick', amount: '1 small stick' },
          { item: 'Cloves', amount: '3 cloves' },
          { item: 'Black pepper', amount: '1/2 tsp' },
          { item: 'Salt', amount: 'to taste' },
          { item: 'Hot water', amount: '1/2 - 1 cup' },
          { item: 'Chopped coriander for garnish', amount: 'for garnish' }
        ],
        preparationSteps: [
          'Pat the mutton dry. Combine with half the yogurt, ginger-garlic paste, turmeric, coriander powder, cumin, black pepper, and salt. Marinate for 1–4 hours in the refrigerator.',
          'Heat mustard oil or ghee in a heavy-bottomed pot or handi. Add cinnamon stick, green cardamom pods, and cloves. Let them sizzle gently until fragrant.',
          'Add the finely sliced onions (if using) and sauté over medium heat until golden brown and translucent.',
          'Add the marinated mutton pieces and sear on medium-high heat for 8–10 minutes, stirring frequently until the meat is lightly browned on all sides.',
          'Lower the heat to low. Whisk the remaining yogurt until completely smooth, and gradually stir it into the pot in small additions, stirring continuously to prevent curdling.',
          'Pour in 1/2 to 1 cup of hot water. Cover tightly with a lid and simmer gently on low heat for 60–80 minutes until the mutton is tender and the sauce forms a rich, glossy braise.',
          'Check seasoning, garnish with freshly chopped coriander leaves, and serve hot.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Marinate the Mutton',
            instruction: 'Pat mutton dry. Marinate with half the yogurt, ginger-garlic paste, turmeric, coriander, cumin, black pepper, and salt for 1–4 hours.'
          },
          {
            stepNum: 2,
            title: 'Temper Whole Spices',
            instruction: 'Warm mustard oil or ghee in a heavy handi. Sizzle cinnamon stick, cardamom, and cloves until aromatic.'
          },
          {
            stepNum: 3,
            title: 'Sauté Onions',
            instruction: 'Add sliced onions and sauté slowly until golden brown and aromatic.'
          },
          {
            stepNum: 4,
            title: 'Sear Mutton',
            instruction: 'Add marinated mutton and sear over medium-high flame for 8–10 minutes until deeply browned.'
          },
          {
            stepNum: 5,
            title: 'Yogurt Emulsion',
            instruction: 'Reduce heat to low and whisk in remaining yogurt in a steady stream, stirring continuously to keep the gravy glossy and smooth.'
          },
          {
            stepNum: 6,
            title: 'Slow Braise',
            instruction: 'Add hot water, cover tightly, and simmer on gentle heat for 60–80 minutes until the meat is meltingly tender.'
          },
          {
            stepNum: 7,
            title: 'Garnish and Serve',
            instruction: 'Garnish with freshly chopped coriander and serve hot with steamed rice or Pahari flatbreads.'
          }
        ],
        servingSuggestion: {
          text: 'Serve piping hot alongside steamed basmati rice or hot Himachali flatbreads, accompanied by a fresh onion and cucumber kachumber or wild mint chutney.',
          imageUrl: '/images/hp/chha_gosht.jpg'
        },
        vessel: 'Heavy Brass Degchi / Handi',
        cookingFat: 'Mustard Oil / Desi Ghee',
        season: 'Winter & Festive Evenings',
        flavorProfile: ['Velvety Yogurt Tang', 'Tender Mutton Umami', 'Warming Cardamom & Clove', 'Subtle Black Pepper Heat'],
        dietary: 'Non-Vegetarian',
        imageUrl: '/images/hp/chha_gosht.jpg'
      },
      {
        id: 'hp-babru',
        name: 'Babru',
        nativeName: 'बबरू',
        englishSubtitle: 'Stuffed Fried Bread',
        tagline: 'Himachali kachori-style crisp fried whole-wheat bread filled with seasoned black gram.',
        description: 'Babru is a Himachali stuffed bread often compared with kachori because of its crisp outside and savoury filling. A black-gram filling gives body and a deep earthy flavour. It is best fried at a controlled temperature so the dough cooks through before the surface darkens.',
        preservationStatus: 'Traditional Dish',
        microOrigin: 'Shimla, Kangra & Mandi Foothills',
        culturalSignificance: 'A beloved festival and breakfast bread in Himachal Pradesh, representing the mountain technique of encasing protein-dense soaked urad dal inside stone-ground wheat discs.',
        servesCount: 'Yield: 8 small breads',
        approxPrepTime: 'Dough resting 45–60 min; cooking 35 min',
        ingredientSections: [
          {
            title: 'Wheat Dough',
            items: [
              { item: 'Whole-wheat flour', amount: '2 cups' },
              { item: 'Water', amount: '3/4 cup', note: 'approximately' },
              { item: 'Salt', amount: '1/2 tsp' },
              { item: 'Oil for dough', amount: '1 tsp' }
            ]
          },
          {
            title: 'Black-Gram Filling',
            items: [
              { item: 'Urad dal', amount: '3/4 cup', note: 'soaked 4–6 hours' },
              { item: 'Small green chilli', amount: '1', note: 'chopped' },
              { item: 'Cumin seeds', amount: '1/2 tsp', note: 'crushed' },
              { item: 'Grated ginger', amount: '1/2 tsp' },
              { item: 'Asafoetida (hing)', amount: 'pinch', note: 'optional' },
              { item: 'Salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Frying',
            items: [
              { item: 'Oil', amount: 'for deep-frying' }
            ]
          }
        ],
        ingredients: [
          { item: 'Whole-wheat flour', amount: '2 cups' },
          { item: 'Urad dal, soaked', amount: '3/4 cup' },
          { item: 'Green chilli, ginger & crushed cumin', amount: 'to taste' },
          { item: 'Asafoetida (hing)', amount: 'pinch' },
          { item: 'Oil for deep-frying', amount: 'as needed' },
          { item: 'Salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Mix flour, salt, and a teaspoon of oil. Add water gradually and knead to a firm, smooth dough. Cover and rest for 45–60 minutes.',
          'Drain soaked urad dal thoroughly. Grind to a coarse paste with minimal water; the filling should be thick and not pourable.',
          'Mix the dal paste with chilli, cumin, ginger, asafoetida, and salt. If very wet, cook it in a dry pan for a few minutes, stirring until excess moisture evaporates. Cool completely.',
          'Divide dough into eight balls. Flatten one ball, place a spoonful of filling in the centre, gather the edges, and seal. Press gently into a thick disc without exposing the filling.',
          'Heat oil over medium heat. Test with a tiny dough piece: it should rise steadily and bubble without immediately turning dark.',
          'Slide in one or two breads at a time. Fry, turning once or twice, until golden and crisp. Adjust heat if the surface browns before the centre cooks.',
          'Drain on a rack or absorbent paper and serve warm.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Knead & Rest Dough',
            instruction: 'Knead flour, salt, and oil with water into a smooth, firm dough. Rest for 45-60 minutes.'
          },
          {
            stepNum: 2,
            title: 'Coarse Urad Paste',
            instruction: 'Grind soaked urad dal with ginger, cumin, chilli, and hing into a thick, moldable filling.'
          },
          {
            stepNum: 3,
            title: 'Stuff & Seal Discs',
            instruction: 'Divide dough into 8 balls, place filling in centre, pinch tightly, and flatten into thick discs.'
          },
          {
            stepNum: 4,
            title: 'Golden Deep-Frying',
            instruction: 'Fry in medium-hot oil until puffed, crisp, and golden on both sides.'
          }
        ],
        servingSuggestion: {
          text: 'Serve warm with tamarind chutney, mint chutney, or a spicy Pahari potato curry. Avoid sealing in a container while steaming hot.',
          imageUrl: '/images/hp/babru.jpg'
        },
        vessel: 'Heavy Kadai for Frying',
        cookingFat: 'Mustard Oil or Vegetable Oil',
        season: 'Monsoon & Winter Mornings',
        flavorProfile: ['Crisp Crust', 'Earthy Black Gram', 'Ginger & Cumin Spiced'],
        dietary: 'Vegetarian',
        imageUrl: '/images/hp/babru.jpg'
      },
      {
        id: 'hp-tudkiya-bhat',
        name: 'Tudkiya Bhat',
        nativeName: 'तुड़किया भात',
        englishSubtitle: 'Spiced Himachali Rice',
        tagline: 'Hearty Pahari spiced rice cooked with potatoes, yogurt, ghee, and whole Himalayan aromatics.',
        description: 'Tudkiya bhat is a spiced rice dish associated with Himachal Pradesh. Potatoes, yogurt, aromatics, and whole spices make it more substantial than plain rice. This version is designed for a standard kitchen pot; the texture should remain fluffy and the grains should not collapse into a wet pulao.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Chamba & Upper Kangra Valleys',
        culturalSignificance: 'A beloved one-pot mountain meal traditionally prepared when returning from high pastures or during chilly rainy evenings, combining cultured curd and mountain tubers.',
        servesCount: 'Yield: 4 servings',
        approxPrepTime: 'Preparation 20 min; cooking 30–40 min',
        ingredientSections: [
          {
            title: 'Rice & Tubers',
            items: [
              { item: 'Basmati or long-grain rice', amount: '1 1/2 cups', note: 'rinsed and soaked 20 min' },
              { item: 'Medium potato', amount: '1', note: 'peeled and diced' },
              { item: 'Small onion', amount: '1', note: 'sliced (optional)' }
            ]
          },
          {
            title: 'Yogurt & Whole Spices',
            items: [
              { item: 'Plain yogurt', amount: '1/2 cup', note: 'whisked' },
              { item: 'Ghee or oil', amount: '1 tbsp' },
              { item: 'Ginger-garlic paste', amount: '1 tsp' },
              { item: 'Cinnamon stick', amount: '1 small stick' },
              { item: 'Green cardamom pods', amount: '2 pods' },
              { item: 'Cloves', amount: '3 cloves' },
              { item: 'Bay leaf', amount: '1 leaf' },
              { item: 'Cumin seeds', amount: '1/2 tsp' }
            ]
          },
          {
            title: 'Ground Spices & Liquid',
            items: [
              { item: 'Turmeric powder', amount: '1/2 tsp' },
              { item: 'Coriander powder', amount: '1/2 tsp' },
              { item: 'Hot water or light stock', amount: '3 cups' },
              { item: 'Salt', amount: 'to taste' },
              { item: 'Chopped coriander and lemon', amount: 'optional' }
            ]
          }
        ],
        ingredients: [
          { item: 'Basmati rice, soaked', amount: '1 1/2 cups' },
          { item: 'Potato, diced', amount: '1 medium' },
          { item: 'Plain yogurt, whisked', amount: '1/2 cup' },
          { item: 'Ghee or oil', amount: '1 tbsp' },
          { item: 'Ginger-garlic paste & onion', amount: 'to taste' },
          { item: 'Whole spices (cinnamon, cardamom, cloves, bay leaf, cumin)', amount: 'to taste' },
          { item: 'Turmeric, coriander powder & salt', amount: 'to taste' },
          { item: 'Hot water', amount: '3 cups' }
        ],
        preparationSteps: [
          'Rinse the rice until the water is mostly clear, then soak for 20 minutes and drain.',
          'Heat ghee in a heavy pot. Add cumin, bay leaf, cinnamon, cardamom, and cloves. Stir briefly until fragrant.',
          'Add onion if using and cook until softened. Add ginger-garlic paste and cook until the sharp raw aroma fades.',
          'Add potato, turmeric, coriander powder, and salt. Stir to coat the potato pieces in the spices. Cook for 3–4 minutes.',
          'Lower the heat. Add whisked yogurt gradually while stirring. Cook for 2–3 minutes until it coats the potato and the mixture looks cohesive.',
          'Add drained rice and fold gently to avoid breaking the grains. Pour in hot water, bring to a gentle boil, then cover and reduce heat to low.',
          'Cook for 12–15 minutes, or until the rice is tender and the liquid has been absorbed. Turn off the heat and rest, covered, for 10 minutes.',
          'Fluff with a fork and taste for seasoning. Garnish with coriander or a little lemon if desired.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Soak Rice & Whole Tempering',
            instruction: 'Soak rice for 20 minutes. Heat ghee and sizzle cumin, cinnamon, cardamom, cloves, and bay leaf.'
          },
          {
            stepNum: 2,
            title: 'Sauté Tubers & Aromatics',
            instruction: 'Sauté onion, ginger-garlic paste, and diced potatoes with turmeric and coriander.'
          },
          {
            stepNum: 3,
            title: 'Yogurt Emulsion',
            instruction: 'Lower heat and stir in whisked yogurt gradually until a cohesive masala coats the potatoes.'
          },
          {
            stepNum: 4,
            title: 'Pot Simmer & Rest',
            instruction: 'Fold in soaked rice, pour hot water, cover and cook on low for 12-15 minutes. Rest 10 minutes and fluff.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot as a main dish with plain curd, a seasonal vegetable, or a simple lentil soup.',
          imageUrl: '/images/hp/tudkiya_bhat.jpg'
        },
        vessel: 'Heavy Handi or Degchi',
        cookingFat: 'Desi Ghee',
        season: 'Monsoon & Winter',
        flavorProfile: ['Aromatic Spiced Grains', 'Yogurt Tang', 'Earthy Potatoes', 'Ghee Fragrance'],
        dietary: 'Vegetarian',
        imageUrl: '/images/hp/tudkiya_bhat.jpg'
      }
    ]
  },
  rj: {
    id: 'rj',
    name: 'Rajasthan',
    nativeName: 'राजस्थान',
    capital: 'Jaipur',
    region: 'West',
    historicalEra: 'Rajputana Royal Haveli & Thar Desert Caravans',
    culinaryPhilosophy: 'Culinary mastery born from water scarcity and extreme desert heat: heavy usage of camel and cow milk curd, sun-dried desert bush berries, chickpea flours, and pure ghee preserving food on long military campaigns.',
    heirloomVessels: ['Kansa Katori', 'Hammered Copper Handi', 'Clay Matka Hearth'],
    signatureSpices: ['Mathania Red Chillies', 'Wild Kachri Powder', 'Ajwain', 'Nagaur Methi', 'Asafoetida'],
    stapleGrains: ['Desert Pearl Millet (Bajra)', 'Gram Flour (Besan)', 'Barley (Jau)'],
    representativeDish: {
      id: 'rj-ker',
      name: 'Ker Ki Sabzi',
      nativeName: 'केर की सब्जी',
      englishSubtitle: 'Tangy Wild Desert Berry Yogurt Curry',
      tagline: 'Tangy, sun-dried desert caper berries slow-simmered in a fragrant spiced yogurt gravy.',
      description: 'Ker is a small, sour wild berry found in the arid zones of the Thar desert. It is traditionally dried, preserved, and then rehydrated to make a tangy, spiced yogurt-based curry.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Thar Desert & Marwar',
      culturalSignificance: 'Ker berries grow wild on thorny Capparis decidua bushes in Rajasthan barren sands. Foraged and sun-preserved across generations, this dish embodies desert survival gastronomy.',
      servesCount: 'Serves 4',
      approxPrepTime: '30 min (+ overnight soaking)',
      ingredientSections: [
        {
          title: 'Preserved Desert Berries & Dairy',
          items: [
            { item: 'Dried Ker', amount: '1 cup', note: 'soaked overnight & boiled' },
            { item: 'Whisked yogurt (dahi)', amount: '1 cup' }
          ]
        },
        {
          title: 'Tempering & Whole Spices',
          items: [
            { item: 'Ghee or mustard oil', amount: '2-3 tbsp' },
            { item: 'Cumin seeds (jeera)', amount: '1 tsp' },
            { item: 'Mustard seeds (rai)', amount: '1/2 tsp' },
            { item: 'Asafoetida (hing)', amount: '1/4 tsp' }
          ]
        },
        {
          title: 'Spice Paste & Souring',
          items: [
            { item: 'Red chili powder', amount: '1 tsp' },
            { item: 'Turmeric powder', amount: '1/4 tsp' },
            { item: 'Coriander powder', amount: '1 tsp' },
            { item: 'Dry mango powder (amchur)', amount: '1/2 tsp' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Dried Ker', amount: '1 cup' },
        { item: 'Whisked yogurt (dahi)', amount: '1 cup' },
        { item: 'Ghee or mustard oil', amount: '2-3 tbsp' },
        { item: 'Cumin seeds (jeera)', amount: '1 tsp' },
        { item: 'Mustard seeds (rai)', amount: '1/2 tsp' },
        { item: 'Asafoetida (hing)', amount: '1/4 tsp' },
        { item: 'Red chili powder', amount: '1 tsp' },
        { item: 'Turmeric powder', amount: '1/4 tsp' },
        { item: 'Coriander powder', amount: '1 tsp' },
        { item: 'Dry mango powder (amchur)', amount: '1/2 tsp' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Soaking & Boiling: Wash the dried ker thoroughly and soak them in water overnight. The next day, drain the water, rinse them again, and boil them in fresh water with a pinch of salt until they become tender (about 15-20 minutes). Drain and set aside.',
        'Spice Mix: In a bowl, mix the whisked yogurt with the turmeric, red chili powder, and coriander powder to create a paste.',
        'Tempering: Heat the ghee or oil in a heavy-bottomed pan. Add the mustard seeds and cumin seeds. Once they splutter, add the asafoetida.',
        'Cooking: Add the boiled ker to the pan and sauté for 2 minutes. Lower the flame completely and pour in the spiced yogurt mixture.',
        'Simmering: Stir continuously until the yogurt comes to a boil to prevent it from splitting. Add the dry mango powder and salt. Let it simmer on low heat until the oil separates and floats to the top.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Soaking & Boiling',
          instruction: 'Wash dried ker thoroughly and soak overnight. Rinse and boil in fresh salted water for 15-20 minutes until tender. Drain and set aside.'
        },
        {
          stepNum: 2,
          title: 'Spice Paste Preparation',
          instruction: 'Whisk yogurt with turmeric, red chili powder, and coriander powder until smooth and emulsified.'
        },
        {
          stepNum: 3,
          title: 'Tempering',
          instruction: 'Heat ghee or mustard oil in a heavy pan. Splutter cumin and mustard seeds, then add asafoetida.'
        },
        {
          stepNum: 4,
          title: 'Sautéing & Yogurt Addition',
          instruction: 'Add boiled ker and sauté for 2 minutes. Reduce heat completely and pour in spiced yogurt mixture, stirring continuously.'
        },
        {
          stepNum: 5,
          title: 'Simmering & Finishing',
          instruction: 'Stir until boiling to prevent curdling. Add amchur and salt. Simmer gently until oil separates and floats to the surface.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot as a main side dish alongside traditional flatbreads like Bajra Roti (pearl millet), Missi Roti, or plain wheat Phulka. It pairs exceptionally well with fresh buttermilk (chaas).',
        imageUrl: '/images/rj/ker_ki_sabzi.jpg'
      },
      vessel: 'Heavy Cast Iron Kadhai / Clay Handi',
      cookingFat: 'Clarified Cow Ghee / Cold-Pressed Mustard Oil',
      season: 'Summer Desert Drought / Year-Round',
      flavorProfile: ['Tangy Wild Berry', 'Spiced Yogurt', 'Earthy Bitterness', 'Warm Cumin'],
      dietary: 'Vegetarian',
      imageUrl: '/images/rj/ker_ki_sabzi.jpg',
      phonetic: 'KAY-r kee SUB-zee'
    },
    dishes: [
      {
        id: 'rj-ker',
        name: 'Ker Ki Sabzi',
        nativeName: 'केर की सब्जी',
        englishSubtitle: 'Tangy Wild Desert Berry Yogurt Curry',
        tagline: 'Tangy, sun-dried desert caper berries slow-simmered in a fragrant spiced yogurt gravy.',
        description: 'Ker is a small, sour wild berry found in the arid zones of the Thar desert. It is traditionally dried, preserved, and then rehydrated to make a tangy, spiced yogurt-based curry.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Thar Desert & Marwar',
        culturalSignificance: 'Ker berries grow wild on thorny Capparis decidua bushes in Rajasthan barren sands. Foraged and sun-preserved across generations, this dish embodies desert survival gastronomy.',
        servesCount: 'Serves 4',
        approxPrepTime: '30 min (+ overnight soaking)',
        ingredientSections: [
          {
            title: 'Preserved Desert Berries & Dairy',
            items: [
              { item: 'Dried Ker', amount: '1 cup', note: 'soaked overnight & boiled' },
              { item: 'Whisked yogurt (dahi)', amount: '1 cup' }
            ]
          },
          {
            title: 'Tempering & Whole Spices',
            items: [
              { item: 'Ghee or mustard oil', amount: '2-3 tbsp' },
              { item: 'Cumin seeds (jeera)', amount: '1 tsp' },
              { item: 'Mustard seeds (rai)', amount: '1/2 tsp' },
              { item: 'Asafoetida (hing)', amount: '1/4 tsp' }
            ]
          },
          {
            title: 'Spice Paste & Souring',
            items: [
              { item: 'Red chili powder', amount: '1 tsp' },
              { item: 'Turmeric powder', amount: '1/4 tsp' },
              { item: 'Coriander powder', amount: '1 tsp' },
              { item: 'Dry mango powder (amchur)', amount: '1/2 tsp' },
              { item: 'Salt', amount: 'to taste' }
            ]
          }
        ],
        ingredients: [
          { item: 'Dried Ker', amount: '1 cup' },
          { item: 'Whisked yogurt (dahi)', amount: '1 cup' },
          { item: 'Ghee or mustard oil', amount: '2-3 tbsp' },
          { item: 'Cumin seeds (jeera)', amount: '1 tsp' },
          { item: 'Mustard seeds (rai)', amount: '1/2 tsp' },
          { item: 'Asafoetida (hing)', amount: '1/4 tsp' },
          { item: 'Red chili powder', amount: '1 tsp' },
          { item: 'Turmeric powder', amount: '1/4 tsp' },
          { item: 'Coriander powder', amount: '1 tsp' },
          { item: 'Dry mango powder (amchur)', amount: '1/2 tsp' },
          { item: 'Salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Wash the dried ker thoroughly and soak overnight. Boil in fresh salted water for 15-20 minutes until tender, then drain.',
          'Mix whisked yogurt with turmeric, red chili powder, and coriander powder to form a paste.',
          'Heat ghee or mustard oil in a pan, splutter cumin and mustard seeds, and add asafoetida.',
          'Add boiled ker and sauté for 2 minutes. Lower heat and pour in the spiced yogurt mixture.',
          'Stir continuously until boiling. Add dry mango powder and salt, simmering until oil floats to the top.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Soaking & Boiling',
            instruction: 'Wash dried ker thoroughly and soak overnight. Boil in salted water until tender, then drain.'
          },
          {
            stepNum: 2,
            title: 'Spice Mix',
            instruction: 'Whisk yogurt with turmeric, red chili, and coriander powder into a smooth paste.'
          },
          {
            stepNum: 3,
            title: 'Tempering',
            instruction: 'Heat ghee or mustard oil. Sizzle cumin, mustard seeds, and asafoetida.'
          },
          {
            stepNum: 4,
            title: 'Simmering',
            instruction: 'Sauté ker, add yogurt mix stirring constantly, add amchur and salt, and simmer until fragrant.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot as a main side dish alongside Bajra Roti, Missi Roti, or Phulka with cold chaas.',
          imageUrl: '/images/rj/ker_ki_sabzi.jpg'
        },
        vessel: 'Heavy-bottomed Kadhai',
        cookingFat: 'Ghee or Mustard Oil',
        season: 'All Year',
        flavorProfile: ['Tangy', 'Spiced Yogurt', 'Warm Cumin'],
        dietary: 'Vegetarian',
        imageUrl: '/images/rj/ker_ki_sabzi.jpg'
      },
      {
        id: 'rj-sangri',
        name: 'Sangri (Sangri ki sabji)',
        nativeName: 'सांगरी की सब्जी',
        englishSubtitle: 'Spiced Khejri Desert Tree Bean Pod Stir-fry',
        tagline: 'Sun-dried desert bean pods sautéed with whole dry red chilies, fennel, and amchur.',
        description: 'Sangri refers to the long, dried bean pods of the Khejri tree. While it can be cooked alone, it is almost exclusively cooked and served with Ker as the famous desert staple, Ker Sangri.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Marwar & Bikaner Arid Zones',
        culturalSignificance: 'Harvested from Prosopis cineraria (the sacred Khejri tree), sangri pods are dried and preserved without water, allowing this dish to withstand weeks in camel saddlebags without spoiling.',
        servesCount: 'Serves 4–6',
        approxPrepTime: '35 min (+ overnight soaking)',
        ingredientSections: [
          {
            title: 'Desert Foraged Beans & Berries',
            items: [
              { item: 'Dried Sangri (desert beans)', amount: '1 cup' },
              { item: 'Dried Ker (berries)', amount: '1/4 cup' }
            ]
          },
          {
            title: 'Tempering Aromatics',
            items: [
              { item: 'Mustard oil', amount: '3 tbsp' },
              { item: 'Whole dried red chilies', amount: '3-4' },
              { item: 'Cumin seeds', amount: '1 tsp' },
              { item: 'Fennel seeds (saunf)', amount: '1 tsp' },
              { item: 'Asafoetida (hing)', amount: '1/4 tsp' }
            ]
          },
          {
            title: 'Dry Spices & Seasoning',
            items: [
              { item: 'Red chili powder', amount: '1.5 tsp' },
              { item: 'Coriander powder', amount: '1 tsp' },
              { item: 'Turmeric powder', amount: '1/2 tsp' },
              { item: 'Dry mango powder (amchur)', amount: '1 tsp' },
              { item: 'Salt', amount: 'to taste' }
            ]
          }
        ],
        ingredients: [
          { item: 'Dried Sangri (desert beans)', amount: '1 cup' },
          { item: 'Dried Ker (berries)', amount: '1/4 cup' },
          { item: 'Whole dried red chilies', amount: '3-4' },
          { item: 'Mustard oil', amount: '3 tbsp' },
          { item: 'Cumin seeds', amount: '1 tsp' },
          { item: 'Fennel seeds (saunf)', amount: '1 tsp' },
          { item: 'Asafoetida (hing)', amount: '1/4 tsp' },
          { item: 'Red chili powder', amount: '1.5 tsp' },
          { item: 'Coriander powder', amount: '1 tsp' },
          { item: 'Turmeric powder', amount: '1/2 tsp' },
          { item: 'Dry mango powder (amchur)', amount: '1 tsp' },
          { item: 'Salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Preparation: Wash the dried Sangri and Ker multiple times in water to remove desert sand. Soak them together overnight in buttermilk or salted water to soften them and remove excess bitterness.',
          'Boiling: Drain the soaked ingredients, rinse them, and boil them in fresh salted water for about 20 minutes until they are soft but retain their shape. Drain completely.',
          'Tempering: Heat mustard oil in a pan until it smokes, then lower the heat. Add cumin seeds, fennel seeds, asafoetida, and the whole dried red chilies.',
          'Sautéing: Add the boiled Ker and Sangri to the pan. Sauté for 3-4 minutes on medium heat.',
          'Spicing: Sprinkle the turmeric, red chili powder, coriander powder, amchur, and salt directly over the vegetables. Toss well so the spices coat the beans evenly. Cook for another 5-7 minutes without water until the spices are roasted and the dish is completely dry.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Soaking & Cleansing',
            instruction: 'Wash dried Sangri and Ker repeatedly. Soak overnight in salted water or buttermilk to soften and remove desert dust.'
          },
          {
            stepNum: 2,
            title: 'Boiling',
            instruction: 'Boil in fresh water for 20 minutes until tender yet firm. Drain thoroughly.'
          },
          {
            stepNum: 3,
            title: 'Smoked Mustard Tempering',
            instruction: 'Heat mustard oil to smoking point, lower flame, and crackle cumin, fennel seeds, hing, and whole dry chilies.'
          },
          {
            stepNum: 4,
            title: 'Dry Spice Roasting',
            instruction: 'Toss boiled beans in oil, dust with turmeric, red chili, coriander, and amchur. Cook without water until spiced and glistening.'
          }
        ],
        servingSuggestion: {
          text: 'Serve as a dry side dish with Puri, Paratha, or Bajra Roti. Because it is cooked without water, it has a long shelf life at room temperature and is traditionally packed as a travel staple.',
          imageUrl: '/images/rj/sangri_ki_sabji.jpg'
        },
        vessel: 'Cast Iron Handi / Kadhai',
        cookingFat: 'Cold-Pressed Mustard Oil',
        season: 'Year-Round / Travel Food',
        flavorProfile: ['Dry Spiced', 'Nutty Pod', 'Fennel Aromatic', 'Tangy Amchur'],
        dietary: 'Vegan',
        imageUrl: '/images/rj/sangri_ki_sabji.jpg'
      },
      {
        id: 'rj-khunijara',
        name: 'Khunijara Ki Sabzi',
        nativeName: 'खूणीजरे की सब्जी',
        englishSubtitle: 'Foraged Wild Monsoon Greens from the Hadoti Hearth',
        tagline: 'Hyper-seasonal wild leafy greens sauteed with pungent crushed garlic and mustard oil.',
        description: 'Khunijara (or Khunajara) is a traditional, seasonal wild leafy green vegetable that grows prominently in the Hadoti region (Kota/Bundi) of Rajasthan during the monsoon (Sawan) season.',
        preservationStatus: 'Endangered Oral Tradition',
        microOrigin: 'Hadoti Region (Kota & Bundi)',
        culturalSignificance: 'A hyper-seasonal wild green foraged along riverbanks and field borders during Sawan. Cooked simply with pungent garlic and cold-pressed mustard oil in iron woks, it embodies the ancient oral forager traditions of rural Hadoti.',
        servesCount: 'Serves 3–4',
        approxPrepTime: '25 min',
        ingredientSections: [
          {
            title: 'Wild Greens & Fresh Aromatics',
            items: [
              { item: 'Fresh Khunijara leaves', amount: '2 bunches', note: 'thoroughly washed & chopped' },
              { item: 'Garlic cloves', amount: '10-12 cloves', note: 'crushed or finely chopped' },
              { item: 'Green chilies', amount: '2-3', note: 'finely chopped' }
            ]
          },
          {
            title: 'Fat & Spices',
            items: [
              { item: 'Mustard oil', amount: '2 tbsp' },
              { item: 'Cumin seeds (jeera)', amount: '1 tsp' },
              { item: 'Turmeric powder', amount: '1/2 tsp' },
              { item: 'Red chili powder', amount: '1 tsp' },
              { item: 'Coriander powder', amount: '1 tsp' },
              { item: 'Salt', amount: 'to taste' }
            ]
          }
        ],
        ingredients: [
          { item: 'Fresh Khunijara leaves', amount: '2 bunches' },
          { item: 'Garlic cloves', amount: '10-12 cloves, crushed' },
          { item: 'Green chilies', amount: '2-3, chopped' },
          { item: 'Mustard oil', amount: '2 tbsp' },
          { item: 'Cumin seeds (jeera)', amount: '1 tsp' },
          { item: 'Turmeric powder', amount: '1/2 tsp' },
          { item: 'Red chili powder', amount: '1 tsp' },
          { item: 'Coriander powder', amount: '1 tsp' },
          { item: 'Salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Cleaning: Thoroughly wash the fresh Khunijara leaves in running water multiple times to remove all dirt and soil. Chop the leaves finely.',
          'Tempering: Heat mustard oil in a heavy iron wok (kadhai) until it reaches smoking point, then reduce the heat. Add the cumin seeds and let them crackle.',
          'Sautéing Aromatics: Add the crushed garlic and chopped green chilies. Sauté until the garlic turns golden brown and aromatic (garlic is the primary flavor profile for this dish).',
          'Cooking the Greens: Add the chopped Khunijara leaves to the wok and mix well. As the leaves begin to wilt and release their own water, add the turmeric, red chili powder, coriander powder, and salt.',
          'Finishing: Cook uncovered or partially covered on medium heat until the natural water evaporates and the greens are tender. Stir occasionally to prevent sticking.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Cleaning Wild Greens',
            instruction: 'Wash Khunijara leaves in cold water multiple times to shed field soil. Chop finely.'
          },
          {
            stepNum: 2,
            title: 'Mustard Oil Searing',
            instruction: 'Heat mustard oil to smoking in a heavy iron wok. Crackle cumin seeds.'
          },
          {
            stepNum: 3,
            title: 'Aromatic Garlic Browning',
            instruction: 'Add crushed garlic and green chilies. Sauté until golden and deeply aromatic.'
          },
          {
            stepNum: 4,
            title: 'Simmering Greens',
            instruction: 'Toss in greens and spices. Cook until moisture evaporates and greens become tender and rich.'
          }
        ],
        servingSuggestion: {
          text: 'Serve steaming hot right out of the pan. It is traditionally eaten with Makki ki Roti (corn flatbread), Jowar Roti, or thick wheat chapatis, often accompanied by raw onions and garlic chutney.',
          imageUrl: '/images/rj/khunijara_ki_sabzi.png'
        },
        vessel: 'Heavy Iron Wok (Kadhai)',
        cookingFat: 'Cold-Pressed Mustard Oil',
        season: 'Monsoon (Sawan)',
        flavorProfile: ['Garlic Infused', 'Herbaceous Pungency', 'Earthy Greens'],
        dietary: 'Vegan',
        imageUrl: '/images/rj/khunijara_ki_sabzi.png'
      }
    ]
  },
  kl: {
    id: 'kl',
    name: 'Kerala',
    nativeName: 'കേരളം',
    capital: 'Thiruvananthapuram',
    region: 'South',
    historicalEra: 'Malabar Spice Trade & Travancore Coastal Heritage',
    culinaryPhilosophy: 'Hyper-local coastal gastronomy centered on fresh scraped coconut, banana-leaf steaming, cooling earthenware rice kanjis, and sweet jaggery-infused festival adas.',
    heirloomVessels: ['Mankalam (Earthen Clay Pot)', 'Appachembu (Traditional Steamer)', 'Uruli (Heavy Bell Metal Vessel)'],
    signatureSpices: ['Tellicherry Cardamom', 'Kanthari (Bird Eye Chilli)', 'Curry Leaves', 'Dark Palm Jaggery', 'Dry Ginger'],
    stapleGrains: ['Palakkadan Matta Rice', 'Rice Flour (Podi)', 'Cassava (Tapioca)'],
    representativeDish: {
      id: 'kl-pazhamkanji',
      name: 'Pazhamkanji',
      nativeName: 'പഴങ്കഞ്ഞി',
      englishSubtitle: 'Rice Gruel with Traditional Accompaniments',
      tagline: 'Comforting fermented rice gruel in starchy broth served with shallots, fiery bird\'s eye chilli & coconut chammanthi.',
      description: 'Pazhamkanji is Kerala\'s ancient morning elixir. Cooked Kerala parboiled Matta rice is steeped in boiled and cooled water in an earthen pot (mankalam). By morning, natural lacto-fermentation transforms the starches into an easy-to-digest, nutrient-packed cooling broth, served with crushed shallots, fiery Kanthari chillies, raw mango pickle, and roasted papad.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Rural Backwaters & Paddy Belts of Alappuzha & Palakkad',
      culturalSignificance: 'The timeless breakfast of Kerala\'s paddy farmers and boatmen, loaded with natural B-vitamins, microflora, and cooling hydration.',
      servesCount: 'Serves 2',
      approxPrepTime: '15 minutes',
      ingredientSections: [
        {
          title: 'Rice & Liquid',
          items: [
            { item: 'Cooked Kerala Matta or parboiled rice', amount: '1 cup' },
            { item: 'Clean drinking water', amount: '2 1/2 – 3 cups' },
            { item: 'Salt', amount: 'to taste' }
          ]
        },
        {
          title: 'Traditional Accompaniments',
          items: [
            { item: 'Small shallots (cheriya ulli), peeled and crushed', amount: '4–5' },
            { item: 'Green chilli (or kanthari)', amount: '2–3' },
            { item: 'Tender mango or lime pickle', amount: '1 tbsp' },
            { item: 'Coconut chammanthi or chutney', amount: 'to serve' }
          ]
        }
      ],
      ingredients: [
        { item: 'Cooked rice', amount: '1 cup' },
        { item: 'Clean drinking water', amount: '2 1/2 – 3 cups' },
        { item: 'Salt', amount: 'to taste' },
        { item: 'Small shallots, green chilli, pickle or coconut chutney to serve', amount: 'as needed' }
      ],
      preparationSteps: [
        'Put cooked rice and water in a saucepan and simmer 8–10 minutes until the rice softens and the liquid becomes starchy.',
        'Mash lightly with a spoon for a thicker kanji, or leave grains whole according to family preference.',
        'Season with salt and adjust water to your preferred drinking consistency.',
        'Serve warm or room temperature with peeled shallots, chilli, spicy pickle, or coconut chutney.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Simmer Rice & Water',
          instruction: 'Simmer cooked rice and water together for 8–10 minutes until soft and creamy.'
        },
        {
          stepNum: 2,
          title: 'Gentle Mash',
          instruction: 'Lightly mash the grains with the back of a ladle to release silky starches.'
        },
        {
          stepNum: 3,
          title: 'Season to Taste',
          instruction: 'Season with salt and adjust water to desired thin or thick consistency.'
        },
        {
          stepNum: 4,
          title: 'Plate with Sides',
          instruction: 'Serve in earthen bowls alongside whole shallots, green chilli, and pickle.'
        }
      ],
      servingSuggestion: {
        text: 'Serve in traditional unglazed clay bowls with crushed shallots, spicy bird\'s eye chilli, tender mango pickle, and roasted papad.',
        imageUrl: '/images/kl/pazhamkanji.jpg'
      },
      vessel: 'Mankalam (Earthen Clay Pot)',
      cookingFat: 'Zero Cooking Fat (Oil-Free)',
      season: 'Monsoon Mornings & Humid Summer Days',
      flavorProfile: ['Cooling Starchy Broth', 'Lacto-Fermented Tang', 'Pungent Shallot Crunch', 'Fiery Kanthari Heat'],
      dietary: 'Vegan',
      imageUrl: '/images/kl/pazhamkanji.jpg',
      phonetic: 'PAH-zhum-kuhn-jee'
    },
    dishes: [
      {
        id: 'kl-pazhamkanji',
        name: 'Pazhamkanji',
        nativeName: 'പഴങ്കഞ്ഞി',
        englishSubtitle: 'Rice Gruel with Traditional Accompaniments',
        tagline: 'Comforting fermented rice gruel in starchy broth served with shallots, fiery bird\'s eye chilli & coconut chammanthi.',
        description: 'Pazhamkanji is Kerala\'s ancient morning elixir. Cooked Kerala parboiled Matta rice is steeped in boiled and cooled water in an earthen pot (mankalam). By morning, natural lacto-fermentation transforms the starches into an easy-to-digest, nutrient-packed cooling broth, served with crushed shallots, fiery Kanthari chillies, raw mango pickle, and roasted papad.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Rural Backwaters & Paddy Belts of Alappuzha & Palakkad',
        culturalSignificance: 'The timeless breakfast of Kerala\'s paddy farmers and boatmen, loaded with natural B-vitamins, microflora, and cooling hydration.',
        servesCount: 'Serves 2',
        approxPrepTime: '15 minutes',
        ingredientSections: [
          {
            title: 'Rice & Liquid',
            items: [
              { item: 'Cooked Kerala Matta or parboiled rice', amount: '1 cup' },
              { item: 'Clean drinking water', amount: '2 1/2 – 3 cups' },
              { item: 'Salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Traditional Accompaniments',
            items: [
              { item: 'Small shallots (cheriya ulli), peeled and crushed', amount: '4–5' },
              { item: 'Green chilli (or kanthari)', amount: '2–3' },
              { item: 'Tender mango or lime pickle', amount: '1 tbsp' },
              { item: 'Coconut chammanthi or chutney', amount: 'to serve' }
            ]
          }
        ],
        ingredients: [
          { item: 'Cooked rice', amount: '1 cup' },
          { item: 'Clean drinking water', amount: '2 1/2 – 3 cups' },
          { item: 'Salt', amount: 'to taste' },
          { item: 'Small shallots, green chilli, pickle or coconut chutney to serve', amount: 'as needed' }
        ],
        preparationSteps: [
          'Put cooked rice and water in a saucepan and simmer 8–10 minutes until the rice softens and the liquid becomes starchy.',
          'Mash lightly with a spoon for a thicker kanji, or leave grains whole according to family preference.',
          'Season with salt and adjust water to your preferred drinking consistency.',
          'Serve warm or room temperature with peeled shallots, chilli, spicy pickle, or coconut chutney.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Simmer Rice & Water',
            instruction: 'Simmer cooked rice and water together for 8–10 minutes until soft and creamy.'
          },
          {
            stepNum: 2,
            title: 'Gentle Mash',
            instruction: 'Lightly mash the grains with the back of a ladle to release silky starches.'
          },
          {
            stepNum: 3,
            title: 'Season to Taste',
            instruction: 'Season with salt and adjust water to desired thin or thick consistency.'
          },
          {
            stepNum: 4,
            title: 'Plate with Sides',
            instruction: 'Serve in earthen bowls alongside whole shallots, green chilli, and pickle.'
          }
        ],
        servingSuggestion: {
          text: 'Serve in traditional unglazed clay bowls with crushed shallots, spicy bird\'s eye chilli, tender mango pickle, and roasted papad.',
          imageUrl: '/images/kl/pazhamkanji.jpg'
        },
        vessel: 'Mankalam (Earthen Clay Pot)',
        cookingFat: 'Zero Cooking Fat (Oil-Free)',
        season: 'Monsoon Mornings & Humid Summer Days',
        flavorProfile: ['Cooling Starchy Broth', 'Lacto-Fermented Tang', 'Pungent Shallot Crunch', 'Fiery Kanthari Heat'],
        dietary: 'Vegan',
        imageUrl: '/images/kl/pazhamkanji.jpg',
        phonetic: 'PAH-zhum-kuhn-jee'
      },
      {
        id: 'kl-ela-ada',
        name: 'Ela Ada',
        nativeName: 'ഇലയട',
        englishSubtitle: 'Banana-Leaf Rice Parcel with Coconut and Jaggery',
        tagline: 'Hand-patted rice dough filled with caramelized jaggery, grated coconut & cardamom, steamed inside fragrant banana leaf.',
        description: 'Ela Ada is a revered traditional sweet delicacy across Kerala. A soft, supple rice flour dough is patted paper-thin over fresh, flame-wilted banana leaf rectangles, layered with a fragrant mixture of freshly grated coconut, melted dark jaggery, and crushed green cardamom, then folded and steamed until the banana leaf perfumes the entire parcel.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Central Travancore & Malabar Households',
        culturalSignificance: 'An integral offering for temple rituals and traditional 4 o\'clock tea times (chaya samayam), embodying the sacred harmony of banana leaf, coconut, and jaggery.',
        servesCount: 'Makes 6 parcels',
        approxPrepTime: '35 minutes',
        ingredientSections: [
          {
            title: 'Rice Dough',
            items: [
              { item: 'Rice flour', amount: '1 cup' },
              { item: 'Hot water', amount: 'about 3/4 cup' },
              { item: 'Salt', amount: 'pinch' }
            ]
          },
          {
            title: 'Sweet Filling',
            items: [
              { item: 'Freshly grated coconut', amount: '1 cup' },
              { item: 'Grated dark jaggery', amount: '1/2 cup' },
              { item: 'Cardamom powder', amount: '1/4 tsp' }
            ]
          },
          {
            title: 'Wrapping',
            items: [
              { item: 'Banana leaves, softened over flame', amount: '6 pieces' }
            ]
          }
        ],
        ingredients: [
          { item: 'Rice flour', amount: '1 cup' },
          { item: 'Hot water', amount: 'about 3/4 cup' },
          { item: 'Pinch of salt', amount: 'to taste' },
          { item: 'Grated coconut', amount: '1 cup' },
          { item: 'Grated jaggery', amount: '1/2 cup' },
          { item: 'Cardamom powder', amount: '1/4 tsp' },
          { item: 'Banana leaves, softened over a flame', amount: '6 pieces' }
        ],
        preparationSteps: [
          'Mix grated coconut, jaggery and cardamom powder thoroughly in a bowl.',
          'Add hot water and salt gradually to rice flour, mixing into a soft, pliable dough.',
          'Cut banana leaves into rectangles and soften briefly over an open flame so they fold smoothly without tearing.',
          'Pat a thin layer of dough over each leaf. Place sweet filling on one half and fold the leaf over.',
          'Steam parcels in a steamer for 10–15 minutes until the dough is cooked through. Cool slightly before opening.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Mix Sweet Filling',
            instruction: 'Combine grated coconut, dark jaggery, and crushed cardamom in a bowl.'
          },
          {
            stepNum: 2,
            title: 'Knead Soft Dough',
            instruction: 'Add hot water and salt gradually to rice flour, mixing into a soft, pliable dough.'
          },
          {
            stepNum: 3,
            title: 'Wilt Banana Leaves',
            instruction: 'Pass banana leaves over flame briefly until pliable and supple.'
          },
          {
            stepNum: 4,
            title: 'Pat, Fill & Fold',
            instruction: 'Pat thin dough on leaf, add filling on one half, and fold into half-moon parcel.'
          },
          {
            stepNum: 5,
            title: 'Steam Parcels',
            instruction: 'Steam parcels for 10–15 minutes until fragrant and set; cool slightly before serving.'
          }
        ],
        servingSuggestion: {
          text: 'Serve warm, peeling back the fragrant, emerald banana leaf directly at the table alongside a steaming glass of spiced Kerala black tea (Kattan Chaya).',
          imageUrl: '/images/kl/ela_ada.jpg'
        },
        vessel: 'Appachembu (Traditional Steamer)',
        cookingFat: 'Zero Fat in Dough / Desi Ghee',
        season: 'Monsoon Evenings & Festival Days',
        flavorProfile: ['Warm Cardamom Fragrance', 'Smoky Palm Jaggery', 'Juicy Sweet Coconut', 'Banana Leaf Essence'],
        dietary: 'Vegetarian',
        imageUrl: '/images/kl/ela_ada.jpg',
        phonetic: 'EH-lah AH-dah'
      }
    ]
  },
  jh: {
    id: 'jh',
    name: 'Jharkhand',
    nativeName: 'झारखंड',
    capital: 'Ranchi',
    region: 'East',
    historicalEra: 'Chota Nagpur Tribal Autonomy & Ancient Forest Settlements',
    culinaryPhilosophy: 'Deeply reverent forest foraging, Sal grove mushrooms (Rugra), fermented bamboo shoots (Karil), wild tree buds, and unvarnished cold-pressed mustard oil with rustic millets.',
    heirloomVessels: ["Lohe Ka Kadai (Iron Wok)", "Mitti Ka Bartan (Clay Pot)", "Sil Batta (Stone Slab)"],
    signatureSpices: ["Peeli Sarson (Yellow Mustard)", "Panch Phoron", "Sukhi Mirch", "Bhuna Jeera", "Garlic"],
    stapleGrains: ["Usna Chawal (Parboiled Rice)", "Marua (Finger Millet)", "Gora Dhan (Red Hill Rice)"],
    representativeDish: {
      id: 'jh-rugra-futu-curry',
      name: 'Rugra / Futu Curry',
      nativeName: 'रुगड़ा / फुटू करी',
      englishSubtitle: 'Subterranean Wild Mushroom in Spiced Gravy',
      tagline: 'Coveted subterranean monsoon puffball mushrooms with a meaty yolk-like center, braised in a pungent mustard-garlic gravy.',
      description: 'A coveted seasonal jewel of Jharkhand’s forest table, Rugra (also known locally as Futu) is an edible subterranean puffball mushroom that sprouts exclusively beneath the dense canopy of Sal (Shorea robusta) forests during the early monsoon weeks of July and August. Resembling small, firm black pebbles on the outside, a bite through the taut, rubbery skin reveals an explosion of rich, savory liquid with a meaty, yolk-like center. Cooked in tribal and rural hearths across Ranchi and Khunti with pungent mustard paste, garlic, and onions, this wild forage turns forest earthiness into an incomparable monsoon delicacy.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Dense Sal (Shorea robusta) Forests, Ranchi & Khunti',
      culturalSignificance: 'Foraged exclusively by tribal indigenous communities from forest soil during initial monsoon showers, Rugra is one of the most treasured wild delicacies in India.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '30 min',
      ingredientSections: [
        {
          title: 'Foraged Sal Forest Mushrooms',
          items: [
            { item: 'Fresh Rugra / Futu mushrooms', amount: '250 g', note: 'scrubbed thoroughly of forest soil' },
            { item: 'Medium potato (alu)', amount: '1', note: 'cubed, optional for texture' },
            { item: 'Medium tomato', amount: '1', note: 'chopped' }
          ]
        },
        {
          title: 'Pungent Sarson Bata & Aromatics',
          items: [
            { item: 'Yellow and black mustard paste (sarson bata)', amount: '1.5 tbsp' },
            { item: 'Ginger-garlic paste', amount: '1 tbsp' },
            { item: 'Medium onions (pyaj)', amount: '2', note: 'finely chopped' },
            { item: 'Cumin seeds & bay leaf', amount: '1/2 tsp cumin, 1 bay leaf' },
            { item: 'Turmeric, coriander, chili, garam masala', amount: '1/2 tsp turmeric, 1 tsp coriander, 1 tsp chili, 1/2 tsp garam masala' },
            { item: 'Pure mustard oil (sarson ka tel)', amount: '3 tbsp' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh Rugra / Futu mushrooms', amount: '250 g' },
        { item: 'Potatoes (alu)', amount: '1 medium', note: 'cubed' },
        { item: 'Mustard paste (sarson bata)', amount: '1.5 tbsp' },
        { item: 'Ginger-garlic paste', amount: '1 tbsp' },
        { item: 'Onions & tomato', amount: '2 onions, 1 tomato' },
        { item: 'Cumin seeds & bay leaf', amount: '1/2 tsp seeds, 1 leaf' },
        { item: 'Turmeric, coriander, chili, garam masala', amount: 'ground spices' },
        { item: 'Mustard oil (sarson ka tel)', amount: '3 tbsp' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Because Rugra grows underground, the outer skin carries fine forest soil. Submerge them in plenty of water, scrubbing gently with your hands through several changes of water until completely clean. Pat dry. Leave smaller spheres whole; halve the larger ones carefully so their savory centers stay intact.',
        'Heat 1.5 tablespoons of mustard oil in a heavy-bottomed kadai. Lightly sear the cleaned Rugra (and cubed potatoes, if using) with a pinch of turmeric and salt for 3–4 minutes until the skin tightens and turns glossy. Drain and set aside.',
        'Add the remaining mustard oil to the same pan. Crackle the cumin seeds and bay leaf. Toss in the chopped onions and sauté over medium heat until golden brown. Add the ginger-garlic paste and sauté for another minute until fragrant.',
        'Stir in the chopped tomatoes, turmeric, coriander, and red chili powders. Cook down into a jammy masala until oil edges the pan. Lower the heat, pour in the mustard paste loosened with a splash of water, and stir gently for barely a minute to keep the mustard sweet and unburned.',
        'Return the seared Rugra to the pan, turning gently to coat every mushroom in the rich gravy base. Pour in 1 cup of warm water, season with salt, and cover with a tight lid. Simmer over low heat for 8–10 minutes until the gravy turns rich and clings to the mushrooms. Finish with a dusting of garam masala.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Clean the Mushrooms',
          instruction: 'Gently scrub subterranean forest soil in multiple waters, pat dry, and leave whole or halve.'
        },
        {
          stepNum: 2,
          title: 'Sear the Rugra',
          instruction: 'Sauté mushrooms and potatoes in 1.5 tbsp mustard oil with turmeric and salt 3–4 min until skins tighten.'
        },
        {
          stepNum: 3,
          title: 'Build the Masala Base',
          instruction: 'Sizzle cumin seeds and bay leaf, caramelize onions golden-brown, and cook ginger-garlic paste.'
        },
        {
          stepNum: 4,
          title: 'Cook Tomatoes & Mustard Paste',
          instruction: 'Cook tomatoes with dry spices until oil edges, then stir in loosened sarson bata for 1 min on low heat.'
        },
        {
          stepNum: 5,
          title: 'Simmer to a Rich Gravy',
          instruction: 'Add seared Rugra and 1 cup warm water, cover and simmer 8–10 min, finishing with garam masala.'
        }
      ],
      servingSuggestion: {
        text: 'Serve piping hot with a mound of steamed white rice or thick whole-wheat rotis, relishing the burst of earthy, rich broth locked within each mushroom.',
        imageUrl: '/images/jh/rugra_futu_curry.jpg'
      },
      vessel: 'Heavy Cast Iron Kadhai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Monsoon (July – August Shravan Rains)',
      flavorProfile: ["Explosive Meaty Mushroom Broth", "Sharp Pungent Sarson Bata", "Smoky Forest Earthiness", "Caramelized Onion-Garlic Warmth"],
      dietary: 'Vegetarian',
      imageUrl: '/images/jh/rugra_futu_curry.jpg',
      phonetic: 'ROOG-rah FOO-too'
    },
    dishes: [
      {
      id: 'jh-rugra-futu-curry',
      name: 'Rugra / Futu Curry',
      nativeName: 'रुगड़ा / फुटू करी',
      englishSubtitle: 'Subterranean Wild Mushroom in Spiced Gravy',
      tagline: 'Coveted subterranean monsoon puffball mushrooms with a meaty yolk-like center, braised in a pungent mustard-garlic gravy.',
      description: 'A coveted seasonal jewel of Jharkhand’s forest table, Rugra (also known locally as Futu) is an edible subterranean puffball mushroom that sprouts exclusively beneath the dense canopy of Sal (Shorea robusta) forests during the early monsoon weeks of July and August. Resembling small, firm black pebbles on the outside, a bite through the taut, rubbery skin reveals an explosion of rich, savory liquid with a meaty, yolk-like center. Cooked in tribal and rural hearths across Ranchi and Khunti with pungent mustard paste, garlic, and onions, this wild forage turns forest earthiness into an incomparable monsoon delicacy.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Dense Sal (Shorea robusta) Forests, Ranchi & Khunti',
      culturalSignificance: 'Foraged exclusively by tribal indigenous communities from forest soil during initial monsoon showers, Rugra is one of the most treasured wild delicacies in India.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '30 min',
      ingredientSections: [
        {
          title: 'Foraged Sal Forest Mushrooms',
          items: [
            { item: 'Fresh Rugra / Futu mushrooms', amount: '250 g', note: 'scrubbed thoroughly of forest soil' },
            { item: 'Medium potato (alu)', amount: '1', note: 'cubed, optional for texture' },
            { item: 'Medium tomato', amount: '1', note: 'chopped' }
          ]
        },
        {
          title: 'Pungent Sarson Bata & Aromatics',
          items: [
            { item: 'Yellow and black mustard paste (sarson bata)', amount: '1.5 tbsp' },
            { item: 'Ginger-garlic paste', amount: '1 tbsp' },
            { item: 'Medium onions (pyaj)', amount: '2', note: 'finely chopped' },
            { item: 'Cumin seeds & bay leaf', amount: '1/2 tsp cumin, 1 bay leaf' },
            { item: 'Turmeric, coriander, chili, garam masala', amount: '1/2 tsp turmeric, 1 tsp coriander, 1 tsp chili, 1/2 tsp garam masala' },
            { item: 'Pure mustard oil (sarson ka tel)', amount: '3 tbsp' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh Rugra / Futu mushrooms', amount: '250 g' },
        { item: 'Potatoes (alu)', amount: '1 medium', note: 'cubed' },
        { item: 'Mustard paste (sarson bata)', amount: '1.5 tbsp' },
        { item: 'Ginger-garlic paste', amount: '1 tbsp' },
        { item: 'Onions & tomato', amount: '2 onions, 1 tomato' },
        { item: 'Cumin seeds & bay leaf', amount: '1/2 tsp seeds, 1 leaf' },
        { item: 'Turmeric, coriander, chili, garam masala', amount: 'ground spices' },
        { item: 'Mustard oil (sarson ka tel)', amount: '3 tbsp' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Because Rugra grows underground, the outer skin carries fine forest soil. Submerge them in plenty of water, scrubbing gently with your hands through several changes of water until completely clean. Pat dry. Leave smaller spheres whole; halve the larger ones carefully so their savory centers stay intact.',
        'Heat 1.5 tablespoons of mustard oil in a heavy-bottomed kadai. Lightly sear the cleaned Rugra (and cubed potatoes, if using) with a pinch of turmeric and salt for 3–4 minutes until the skin tightens and turns glossy. Drain and set aside.',
        'Add the remaining mustard oil to the same pan. Crackle the cumin seeds and bay leaf. Toss in the chopped onions and sauté over medium heat until golden brown. Add the ginger-garlic paste and sauté for another minute until fragrant.',
        'Stir in the chopped tomatoes, turmeric, coriander, and red chili powders. Cook down into a jammy masala until oil edges the pan. Lower the heat, pour in the mustard paste loosened with a splash of water, and stir gently for barely a minute to keep the mustard sweet and unburned.',
        'Return the seared Rugra to the pan, turning gently to coat every mushroom in the rich gravy base. Pour in 1 cup of warm water, season with salt, and cover with a tight lid. Simmer over low heat for 8–10 minutes until the gravy turns rich and clings to the mushrooms. Finish with a dusting of garam masala.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Clean the Mushrooms',
          instruction: 'Gently scrub subterranean forest soil in multiple waters, pat dry, and leave whole or halve.'
        },
        {
          stepNum: 2,
          title: 'Sear the Rugra',
          instruction: 'Sauté mushrooms and potatoes in 1.5 tbsp mustard oil with turmeric and salt 3–4 min until skins tighten.'
        },
        {
          stepNum: 3,
          title: 'Build the Masala Base',
          instruction: 'Sizzle cumin seeds and bay leaf, caramelize onions golden-brown, and cook ginger-garlic paste.'
        },
        {
          stepNum: 4,
          title: 'Cook Tomatoes & Mustard Paste',
          instruction: 'Cook tomatoes with dry spices until oil edges, then stir in loosened sarson bata for 1 min on low heat.'
        },
        {
          stepNum: 5,
          title: 'Simmer to a Rich Gravy',
          instruction: 'Add seared Rugra and 1 cup warm water, cover and simmer 8–10 min, finishing with garam masala.'
        }
      ],
      servingSuggestion: {
        text: 'Serve piping hot with a mound of steamed white rice or thick whole-wheat rotis, relishing the burst of earthy, rich broth locked within each mushroom.',
        imageUrl: '/images/jh/rugra_futu_curry.jpg'
      },
      vessel: 'Heavy Cast Iron Kadhai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Monsoon (July – August Shravan Rains)',
      flavorProfile: ["Explosive Meaty Mushroom Broth", "Sharp Pungent Sarson Bata", "Smoky Forest Earthiness", "Caramelized Onion-Garlic Warmth"],
      dietary: 'Vegetarian',
      imageUrl: '/images/jh/rugra_futu_curry.jpg',
      phonetic: 'ROOG-rah FOO-too'
      },
      {
      id: 'jh-karil-ki-sabzi',
      name: 'Karil Ki Sabzi',
      nativeName: 'करील की सब्जी',
      englishSubtitle: 'Fermented Tender Bamboo Shoot Curry',
      tagline: 'Naturally fermented tender forest bamboo shoots parboiled and braised with potatoes, mustard seeds, and roasted cumin.',
      description: 'Celebrated across Jharkhand’s tribal heartlands for its gut-friendly, probiotic qualities, Karil refers to the tender, new shoots of bamboo (bans) harvested deep in the forest groves during the rainy season. Because raw shoots carry natural bitterness and cyanogenic compounds, age-old culinary wisdom dictates that they are peeled to their tender ivory core, thinly shredded, and fermented in earthenware vessels submerged in clean water for 48 hours. This natural lactic fermentation tames the bite, leaving a mild, pleasant sourness that pairs magnificently with rustic mustard seeds, dried red chilies, and cold-pressed mustard oil.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Chota Nagpur Tribal Forests & Village Homes',
      culturalSignificance: 'A cornerstone of tribal forest wisdom, using 48-hour lactic water fermentation to neutralize bamboo toxins while creating a tangy seasonal delicacy.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '30 min; 48-hr natural fermentation',
      ingredientSections: [
        {
          title: 'Fermented Forest Shoots & Potatoes',
          items: [
            { item: 'Fresh tender bamboo shoot (karil)', amount: '250 g', note: 'shredded and naturally water-fermented for 48 hours' },
            { item: 'Medium potato', amount: '1', note: 'cut into small wedges' }
          ]
        },
        {
          title: 'Tempering & Spiced Braise',
          items: [
            { item: 'Large onion', amount: '1', note: 'thinly sliced' },
            { item: 'Garlic cloves', amount: '5–6', note: 'crushed' },
            { item: 'Brown mustard seeds (sarson / rai)', amount: '1 tsp' },
            { item: 'Whole dried red chilies', amount: '2' },
            { item: 'Turmeric & red chili powder', amount: '1/2 tsp each' },
            { item: 'Roasted cumin powder (bhuna jeera)', amount: '1 tsp' },
            { item: 'Pure mustard oil (sarson ka tel)', amount: '2 tbsp' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fermented bamboo shoot (karil)', amount: '250 g' },
        { item: 'Potato', amount: '1 medium' },
        { item: 'Onion & garlic', amount: '1 onion, 5–6 cloves garlic' },
        { item: 'Mustard seeds & dry red chilies', amount: '1 tsp seeds, 2 chilies' },
        { item: 'Turmeric, chili & roasted cumin powder', amount: 'ground spices' },
        { item: 'Mustard oil (sarson ka tel)', amount: '2 tbsp' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Peel away the tough, hairy outer sheaths until you reach the pale, yielding inner core. Slice the tender shoot into paper-thin strips. Submerge the slices completely in clean water in an earthenware pot or glass jar, cover loosely, and leave to ferment at room temperature for 48 hours.',
        'Drain the fermented shoots thoroughly and discard the soak water. Bring a pot of fresh salted water to a rolling boil, add the shoots, and boil uncovered for 8–10 minutes to soften them further and eliminate any remaining acridity. Drain and squeeze gently.',
        'Heat mustard oil in a cast-iron skillet or kadai until lightly smoking, then reduce the flame. Crackle the whole mustard seeds, snap the dried red chilies into the pan, and add the crushed garlic. Sauté until the garlic releases its sharp, sweet aroma.',
        'Add the sliced onions and sauté until translucent. Toss in the potato wedges along with turmeric powder, red chili powder, and salt. Cook on medium heat for 4–5 minutes until the potatoes begin to take on color.',
        'Add the parboiled bamboo shoots to the pan. Toss thoroughly to combine with the aromatics and potatoes. Splash in 1/4 cup of warm water, cover with a tight lid, and let it braise over low flame for 8–10 minutes until the potatoes are fork-tender and the shoots have soaked up the spiced oil. Uncover and fry on high heat for 2 minutes to dry off excess moisture, finishing with a sprinkle of roasted cumin powder.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Shred and Ferment',
          instruction: 'Strip shoot to tender core, slice paper-thin, and submerge in water in an earthen pot for 48 hrs to lacto-ferment.'
        },
        {
          stepNum: 2,
          title: 'Drain and Parboil',
          instruction: 'Boil fermented shoots in fresh salted water 8–10 min to soften and remove acridity, then drain.'
        },
        {
          stepNum: 3,
          title: 'Temper the Aromatics',
          instruction: 'Crackle mustard seeds, dried red chilies, and crushed garlic in smoking mustard oil.'
        },
        {
          stepNum: 4,
          title: 'Sauté Potatoes & Spices',
          instruction: 'Add sliced onions, potato wedges, turmeric, chili powder, and salt; cook 4–5 min.'
        },
        {
          stepNum: 5,
          title: 'Braise to a Cohesive Fry',
          instruction: 'Add shoots, splash 1/4 cup water, braise covered 8–10 min, then flash-fry dry with bhuna jeera.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm with boiled country rice (usna chawal) or thick marua (finger millet) rotis.',
        imageUrl: '/images/jh/karil_ki_sabzi.jpg'
      },
      vessel: 'Cast Iron Skillet or Kadai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Monsoon (Forest Bamboo Sprout Season)',
      flavorProfile: ["Pleasant Tangy Lactic Sourness", "Crisp Bamboo Shoot Texture", "Toasted Garlic-Mustard Temper", "Warm Roasted Cumin Finish"],
      dietary: 'Vegan',
      imageUrl: '/images/jh/karil_ki_sabzi.jpg',
      phonetic: 'kah-REEL kee SAB-zee'
      },
      {
      id: 'jh-sanai-phool-bhaja',
      name: 'Sanai Phool Bhaja',
      nativeName: 'सनई फूल भाजा',
      englishSubtitle: 'Stir-Fried Jute / Sunn Hemp Blossoms',
      tagline: 'Golden sunn hemp autumn blossoms quick-sautéed in smoking mustard oil with crushed garlic, green chilies, and potatoes.',
      description: 'When autumn rolls across eastern India, the sun-drenched fields light up with the vibrant golden blossoms of the Sanai plant (Crotalaria juncea / Sunn hemp). Foraging for these edible flowers is an eagerly awaited rural ritual. With their mild vegetable sweetness complemented by a fleeting, pleasant herbal bitterness, the tender petals require very little fuss. Cooked in hot, smoking mustard oil with nothing more than crushed garlic, slit green chilies, and an optional golden potato dice, Sanai Phool Bhaja is an elegant study in seasonal minimalism.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Rural Farmlands of Jharkhand & Chota Nagpur',
      culturalSignificance: 'A seasonal celebration of edible flora, gathering golden farm blossoms in autumn before seed pods develop.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Foraged Sunn Hemp Blossoms',
          items: [
            { item: 'Fresh Sanai flowers (sanai ke phool)', amount: '250 g', note: 'stems and calyxes removed' },
            { item: 'Medium potato (alu)', amount: '1', note: 'finely diced, optional' }
          ]
        },
        {
          title: 'Tempering & Golden Spices',
          items: [
            { item: 'Small onion', amount: '1', note: 'thinly sliced' },
            { item: 'Garlic cloves (lehsun)', amount: '5–6', note: 'crushed coarsely in a mortar' },
            { item: 'Fresh green chilies (hari mirch)', amount: '2–3', note: 'slit lengthwise' },
            { item: 'Cumin seeds or panch phoron', amount: '1/2 tsp' },
            { item: 'Turmeric powder (haldi)', amount: '1/2 tsp' },
            { item: 'Pure mustard oil (sarson ka tel)', amount: '1.5 tbsp' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh Sanai blossoms', amount: '250 g' },
        { item: 'Potato (alu)', amount: '1 medium', note: 'diced' },
        { item: 'Small onion & garlic', amount: '1 onion, 5–6 cloves garlic' },
        { item: 'Green chilies & cumin seeds', amount: '2–3 chilies, 1/2 tsp seeds' },
        { item: 'Mustard oil (sarson ka tel)', amount: '1.5 tbsp' },
        { item: 'Turmeric & Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Pick over the flowers carefully, plucking away tough green calyxes, insect debris, and long stems, leaving only the tender yellow petals and soft buds. Wash the blossoms gently in a colander under cold water and let them drain thoroughly.',
        'Heat the mustard oil in a kadai until shimmering. Toss in the cumin seeds and allow them to crackle. Slide in the crushed garlic cloves and slit green chilies, sautéing over medium flame for barely 30 seconds until the garlic turns aromatic and pale golden.',
        'Add the sliced onion and diced potatoes (if using). Sprinkle a pinch of turmeric and salt, and sauté over medium heat for 4–5 minutes until the potatoes soften and the onions begin to caramelize along the edges.',
        'Add the drained Sanai flowers to the skillet. Sprinkle the remaining turmeric powder and salt. Stir-fry gently over medium flame; the petals will soften, lose their volume, and release a light moisture within 2–3 minutes.',
        'Keep the pan uncovered or cover loosely for barely 3 minutes so the blossoms remain vibrant. Turn up the heat for the final minute to evaporate any remaining moisture, allowing the petals to pick up a light, savory sear from the mustard oil.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Clean the Petals',
          instruction: 'Pluck tender yellow petals and buds away from tough calyxes; wash gently and drain well.'
        },
        {
          stepNum: 2,
          title: 'Sizzle Aromatics',
          instruction: 'Crackle cumin seeds, crushed garlic, and green chilies in smoking mustard oil until pale golden.'
        },
        {
          stepNum: 3,
          title: 'Sweat Onions & Potatoes',
          instruction: 'Sauté onions and diced potatoes 4–5 min with salt and turmeric until softened.'
        },
        {
          stepNum: 4,
          title: 'Flash-Fry the Blossoms',
          instruction: 'Fold in blossoms, stir-fry 2–3 min as petals collapse and release sweet nectar moisture.'
        },
        {
          stepNum: 5,
          title: 'Sear to a Crisp Tender',
          instruction: 'Cook on high flame for final minute to evaporate moisture and pick up a savory golden sear.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm immediately alongside a simple yellow dal and steaming rice, appreciating the flower\'s delicate balance of honeyed and bitter notes.',
        imageUrl: '/images/jh/sanai_phool_bhaja.jpg'
      },
      vessel: 'Iron Kadai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Autumn (September – October Blossom Season)',
      flavorProfile: ["Delicate Honeyed Floral Sweetness", "Fleeting Herbal Bitterness", "Roasted Garlic Infusion", "Mustard Oil Sear"],
      dietary: 'Vegan',
      imageUrl: '/images/jh/sanai_phool_bhaja.jpg',
      phonetic: 'sah-NYE PHOOL BHAH-jah'
      },
      {
      id: 'jh-koinar-saag',
      name: 'Koinar Saag',
      nativeName: 'कोइनार साग',
      englishSubtitle: 'Wild Orchid Tree Leaves Stir-Fry',
      tagline: 'Foraged purple orchid tree leaves and buds blanched and sautéed in smoking mustard oil with whole mustard seeds and smashed garlic.',
      description: 'A bedrock staple of tribal subsistence cooking in Jharkhand and Chota Nagpur, Koinar Saag utilizes the tender, split heart-shaped leaves and pink-tinged buds of the wild purple orchid tree (Bauhinia purpurea). Foraged from forested hill slopes during the change of seasons, these leaves are celebrated for their immense concentration of plant iron, calcium, and dietary roughage. Prepared without intricate masalas, this rustic stir-fry honors tribal culinary philosophy: letting the wild, mineral-rich, mildly mucilaginous greens shine against the backdrop of smoking mustard oil, whole mustard seeds, and mellow roasted garlic.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Forest Slopes of Chota Nagpur & Santhal Parganas',
      culturalSignificance: 'Sacred ancestral wild forage of Munda, Oraon, and Santhal communities, packed with mountain minerals for sustained physical labor.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '20 min',
      ingredientSections: [
        {
          title: 'Foraged Wild Orchid Foliage',
          items: [
            { item: 'Tender Koinar leaves and buds (Bauhinia purpurea)', amount: '300 g', note: 'sorted, pale green young leaves' },
            { item: 'Water for blanching', amount: 'as needed' }
          ]
        },
        {
          title: 'Rustic Garlic & Mustard Temper',
          items: [
            { item: 'Garlic cloves (lehsun)', amount: '6–8', note: 'smashed with flat of knife' },
            { item: 'Whole dried red chilies (sukhi lal mirch)', amount: '2' },
            { item: 'Brown mustard seeds (rai / sarson)', amount: '1 tsp' },
            { item: 'Turmeric powder (haldi)', amount: '1/2 tsp' },
            { item: 'Pure cold-pressed mustard oil', amount: '1.5 tbsp', note: 'sarson ka tel' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Tender Koinar leaves & buds', amount: '300 g' },
        { item: 'Garlic cloves (lehsun)', amount: '6–8', note: 'smashed' },
        { item: 'Dried red chilies', amount: '2' },
        { item: 'Brown mustard seeds (rai)', amount: '1 tsp' },
        { item: 'Turmeric powder', amount: '1/2 tsp' },
        { item: 'Mustard oil (sarson ka tel)', amount: '1.5 tbsp' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Pick only the pale green, tender young leaves and closed buds, discarding any tough or fibrous mature foliage. Rinse thoroughly in several changes of water. Bring a shallow pot of lightly salted water to a boil, drop the leaves in, and blanch for 3 to 4 minutes until they turn soft and pliable. Drain completely, pressing out excess water gently with a spoon.',
        'Heat mustard oil in an iron kadai until smoking hot. Lower the flame and drop in the mustard seeds, letting them pop vigorously. Snap in the dried red chilies and toss in the smashed garlic cloves. Fry gently until the garlic is fragrant and turns a light golden-brown hue.',
        'Slide the blanched, drained Koinar leaves directly into the flavored oil. Sprinkle the turmeric powder and salt over the leaves.',
        'Sauté continuously over medium heat for 5 to 7 minutes, breaking apart any clusters with the edge of your spatula. Allow the leaves to absorb the garlic-infused mustard oil completely until the stir-fry turns glossy, dry, and cohesive.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Sort and Blanch',
          instruction: 'Pick tender heart-shaped young leaves and buds; blanch in boiling salted water 3–4 min and gently press out water.'
        },
        {
          stepNum: 2,
          title: 'Infuse Aromatics',
          instruction: 'Sizzle mustard seeds, dried red chilies, and smashed garlic cloves in smoking mustard oil until golden-brown.'
        },
        {
          stepNum: 3,
          title: 'Add Greens & Season',
          instruction: 'Slide blanched leaves into scented oil, season with turmeric powder and salt.'
        },
        {
          stepNum: 4,
          title: 'Sauté to a Dry Gloss',
          instruction: 'Stir-fry 5–7 min breaking apart clusters until greens absorb oil and turn glossy, dry, and cohesive.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot piled next to a rustic bowl of Madua Ghatta (millet porridge) or alongside warm boiled rice and roasted lentil papad.',
        imageUrl: '/images/jh/koinar_saag.jpg'
      },
      vessel: 'Heavy Cast Iron Kadai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Spring & Seasonal Shift (New Leaf Emergence)',
      flavorProfile: ["Mineral-Rich Wild Forest Earthiness", "Mild Mucilaginous Velvet Texture", "Sharp Popped Mustard Seeds", "Smoky Smashed Garlic"],
      dietary: 'Vegan',
      imageUrl: '/images/jh/koinar_saag.jpg',
      phonetic: 'koy-NAHR SAHG'
      },
      {
      id: 'jh-beng-saag-chorchori',
      name: 'Beng Saag Chorchori',
      nativeName: 'बेंग साग चरचरी',
      englishSubtitle: 'Pennywort & Garlic Stir-Fry',
      tagline: 'Medicinal wild Indian pennywort (Brahmi / Gotu Kola) flash-wilted in pungent mustard oil with nigella seeds, garlic, and potato cubes.',
      description: 'Foraged along damp riverbanks, freshwater streamlets, and shaded mountain springs throughout Jharkhand, Beng Saag—botanically Centella asiatica, known widely as Brahmi or Gotu Kola—is a wild creeping herb revered in Ayurvedic and tribal ethnomedicine. Famed as a powerful natural adaptogen that cools the system, aids digestion, and revitalizes cognitive clarity, it carries a deep herbal, faintly peppery bite. In household kitchens, it is treated with gentle restraint: briefly wilted in pungent mustard oil with garlic, green chilies, and tiny potato cubes to preserve its delicate medicinal compounds.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Riverbanks & Shaded Springs of Jharkhand',
      culturalSignificance: 'Ancestral tribal tonic herb eaten as the auspicious first mouthful of a meal to sharpen the intellect and cool the digestive tract.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Foraged Wild Pennywort',
          items: [
            { item: 'Fresh Beng Saag (Centella asiatica / Gotu Kola)', amount: '200 g', note: 'stalks included, finely shredded' },
            { item: 'Medium potato', amount: '1', note: 'cut into very small dice' }
          ]
        },
        {
          title: 'Pungent Tempering & Seasoning',
          items: [
            { item: 'Garlic cloves (lehsun)', amount: '4–5', note: 'finely minced' },
            { item: 'Green chilies (hari mirch)', amount: '2', note: 'finely chopped' },
            { item: 'Nigella seeds (kalo jeere) or cumin seeds', amount: '1/2 tsp' },
            { item: 'Turmeric powder (haldi)', amount: '1/4 tsp' },
            { item: 'Pure mustard oil (sarson ka tel)', amount: '1 tbsp' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh Beng Saag leaves & stalks', amount: '200 g' },
        { item: 'Potato', amount: '1 medium', note: 'tiny dice' },
        { item: 'Garlic & green chilies', amount: '4–5 cloves, 2 chilies' },
        { item: 'Nigella seeds (kalo jeere)', amount: '1/2 tsp' },
        { item: 'Mustard oil (sarson ka tel)', amount: '1 tbsp' },
        { item: 'Turmeric & Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Wash the creeping herb carefully under running water to remove any river silt or grit clinging to the slender stems and fan-shaped leaves. Pat dry with a clean cloth, then roughly chop both stems and leaves into fine shreds.',
        'Heat the mustard oil in a small pan until lightly smoking. Add the nigella seeds and let them sizzle. Drop in the minced garlic and chopped green chilies, sautéing for 30 seconds until fragrant. Add the finely cubed potatoes along with a pinch of turmeric and salt. Sauté over low-medium heat for 5 minutes, covering occasionally, until the potatoes are cooked through and golden.',
        'Turn up the heat slightly and fold in the shredded Beng Saag. Sprinkle with salt. Sauté briskly for barely 2 to 3 minutes—just long enough for the leaves to collapse into the potatoes and turn a deep glossy emerald, without overcooking or destroying its vibrant vitality.',
        'Turn off the flame immediately, drizzle a few drops of raw mustard oil on top if desired, and let the residual pan heat finish softening the greens.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Clean and Shred',
          instruction: 'Carefully wash riverbank grit off slender stems and fan-shaped leaves, pat dry, and chop into fine shreds.'
        },
        {
          stepNum: 2,
          title: 'Sauté Potatoes & Nigella',
          instruction: 'Sizzle nigella seeds, garlic, and chilies in mustard oil; cook potato dice until tender and golden.'
        },
        {
          stepNum: 3,
          title: 'Flash-Wilt the Greens',
          instruction: 'Fold in shredded Beng Saag and sauté briskly 2–3 min until emerald and glossy without killing nutrients.'
        },
        {
          stepNum: 4,
          title: 'Residual Heat Finish',
          instruction: 'Turn off flame, drizzle drops of raw mustard oil, and rest in pan residual heat.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm with the very first morsel of a meal over hot steamed rice, relishing its invigorating, earthy bite.',
        imageUrl: '/images/jh/beng_saag_chorchori.jpg'
      },
      vessel: 'Small Cast Iron Skillet',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Monsoon to Autumn (High Water Streamlet Season)',
      flavorProfile: ["Invigorating Herbal Peppery Kick", "Earthy Adaptogenic Green Notes", "Nutty Nigella Seed Sizzle", "Tender Golden Potato Contrast"],
      dietary: 'Vegan',
      imageUrl: '/images/jh/beng_saag_chorchori.jpg',
      phonetic: 'BENG SAHG chor-CHOR-ee'
      },
      {
      id: 'jh-malhan-sabzi',
      name: 'Malhan Sabzi',
      nativeName: 'मलहन सब्जी',
      englishSubtitle: 'Indigenous Flat Broad Beans in Mustard Gravy',
      tagline: 'Heirloom winter hyacinth beans snapped by hand and braised with baby potatoes in a fiery stoneground mustard-garlic gravy.',
      description: 'A cold-weather fixture across Jharkhand’s village markets, Malhan (indigenous flat broad beans / hyacinth beans) is a treasured heirloom legume celebrated for its robust texture and sweet, green flavor. When the winter chill sets in, these broad pods are de-stringed, snapped by hand, and paired with tender local winter potatoes. Cooked down in a fiery, aromatic Sarson-Lassan (ground mustard and garlic) gravy, this curry is hearty, warming, and designed to stand up to the rustic grains of the Chota Nagpur plateau.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Chota Nagpur Plateau Village Markets & Kitchens',
      culturalSignificance: 'The cold-season herald of Jharkhand markets, uniting rustic broad pods with the region\'s signature stoneground mustard-garlic paste.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '30 min',
      ingredientSections: [
        {
          title: 'Heirloom Broad Beans & Baby Potatoes',
          items: [
            { item: 'Flat broad beans (malhan / sem)', amount: '250 g', note: 'de-stringed, snapped into bite-sized segments' },
            { item: 'Baby potatoes (alu)', amount: '2 medium', note: 'peeled and halved' },
            { item: 'Large tomato', amount: '1', note: 'chopped' }
          ]
        },
        {
          title: 'Sarson-Lassan Paste & Spices',
          items: [
            { item: 'Yellow mustard seeds (peeli sarson)', amount: '1.5 tbsp' },
            { item: 'Garlic cloves (lehsun)', amount: '6–8' },
            { item: 'Cumin seeds (jeera)', amount: '1 tsp' },
            { item: 'Panch phoron (for tempering)', amount: '1/2 tsp' },
            { item: 'Turmeric, coriander & red chili powder', amount: '1/2 tsp turmeric, 1 tsp coriander, 1 tsp chili' },
            { item: 'Pure mustard oil (sarson ka tel)', amount: '2.5 tbsp' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Flat broad beans (malhan)', amount: '250 g' },
        { item: 'Baby potatoes', amount: '2 medium' },
        { item: 'Yellow mustard seeds (peeli sarson)', amount: '1.5 tbsp' },
        { item: 'Garlic cloves', amount: '6–8' },
        { item: 'Cumin seeds & panch phoron', amount: '1 tsp cumin, 1/2 tsp panch phoron' },
        { item: 'Tomato', amount: '1 large' },
        { item: 'Turmeric, coriander & chili powder', amount: 'ground spices' },
        { item: 'Mustard oil (sarson ka tel)', amount: '2.5 tbsp' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Snap the fibrous strings running along both sides of each broad bean pod, then break the pods crosswise into halves or thirds using your fingers. Wash thoroughly and drain. In a stone grinder or small blender, grind the yellow mustard seeds, garlic cloves, and cumin seeds with a few drops of water into a silky-smooth, fragrant paste.',
        'Heat 1 tablespoon of mustard oil in a kadai. Add the prepped Malhan and potato chunks with a pinch of turmeric and salt. Sauté over medium heat for 4–5 minutes until the green beans blister lightly and the raw vegetable edge softens. Remove to a bowl.',
        'Heat the remaining mustard oil in the same pan. Crackle the panch phoron. Add the chopped tomatoes along with turmeric powder, coriander powder, and red chili powder, cooking over medium heat until the tomatoes soften into a glossy sauce. Stir in the mustard-garlic paste and cook gently on low heat for barely 1–2 minutes, ensuring it does not scorch or turn bitter.',
        'Return the seared Malhan and potatoes to the pan, turning them carefully to coat with the masala. Pour in 1 to 1.5 cups of warm water, season with salt, and bring to a gentle boil. Cover tightly and simmer over low flame for 12–15 minutes until the potatoes are tender and the broad beans yield completely, soaking up the sharp, garlicky mustard sauce.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'De-string & Stone-Grind',
          instruction: 'Snap fibrous strings from bean pods, break into segments; grind yellow mustard, garlic, and cumin into a silky paste.'
        },
        {
          stepNum: 2,
          title: 'Sear the Vegetables',
          instruction: 'Sauté beans and baby potatoes in 1 tbsp mustard oil with salt and turmeric 4–5 min until blistered.'
        },
        {
          stepNum: 3,
          title: 'Fry Masala & Mustard Paste',
          instruction: 'Sizzle panch phoron, cook tomatoes with dry spices, then gently bloom mustard-garlic paste for 1–2 min.'
        },
        {
          stepNum: 4,
          title: 'Braise to Tenderness',
          instruction: 'Coat seared vegetables with sauce, add 1 to 1.5 cups warm water, and simmer covered 12–15 min until tender.'
        }
      ],
      servingSuggestion: {
        text: 'Ladle generous spoonfuls of this rich, comforting curry over coarse boiled usna rice or alongside piping hot, puffed wheat chapatis on a chilly winter evening.',
        imageUrl: '/images/jh/malhan_sabzi.jpg'
      },
      vessel: 'Heavy Cast Iron Kadai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Peak Winter (December – February)',
      flavorProfile: ["Sweet Green Bean Meatiness", "Pungent Stoneground Garlic-Mustard Kick", "Earthy Tomato Tang", "Warm Panch Phoron Temper"],
      dietary: 'Vegan',
      imageUrl: '/images/jh/malhan_sabzi.jpg',
      phonetic: 'MAL-hahn SAB-zee'
      }
    ]
  },
  wb: {
    id: 'wb',
    name: 'West Bengal',
    nativeName: 'পশ্চিমবঙ্গ',
    capital: 'Kolkata',
    region: 'East',
    historicalEra: 'Gour-Banga, Zamindari Banquets & Riverine Heritage',
    culinaryPhilosophy: 'Celebration of sweet river waters, pungent cold-pressed mustard oil, panch phoron, aromatic Gobindobhog rice, and subtle root-to-stem zero-waste kitchen craftsmanship.',
    heirloomVessels: ["Sheel Nora (Granite Grinding Slab)", "Kansa Thali", "Pitler Handi"],
    signatureSpices: ["Panch Phoron", "Radhuni", "Kalo Jeere (Nigella)", "Shorshe (Mustard Seeds)", "Tejpata"],
    stapleGrains: ["Gobindobhog Rice", "Tulaipanji Rice", "Wheat"],
    representativeDish: {
      id: 'wb-ilish-er-dolon',
      name: 'Ilish-er Dolon',
      nativeName: 'ইলিশের দোলন',
      englishSubtitle: 'Hilsa in Mustard & Tamarind Gravy',
      tagline: 'Prized river hilsa steeped in pungent mustard, fruity tamarind pulp, and fiery green chilies.',
      description: 'In a Bengali household, fish isn’t just sustenance—it is a cultural anchor, an emblem of auspicious beginnings, and a celebration on a plate. Few preparations capture this reverence quite like Ilish-er Dolon, a vintage heirloom jewel where the prized hilsa is bathed in a sour-spicy, pungent gravy. Rather than leaning purely on the sharp, sinus-clearing mustard profile of a classic Shorshe Ilish, this traditional preparation introduces the fruity tang of tamarind, cutting beautifully through the natural oiliness and rich flesh of the fish.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Padma & Hooghly River Basins, Kolkata & East Bengal Heirloom',
      culturalSignificance: 'A 19th-century zamindari and riverine delicacy where hilsa was celebrated with the natural sourness of ripe village tamarind, balancing the fish\'s opulent omega-rich fat.',
      servesCount: 'Yield: 4–5 servings',
      approxPrepTime: 'Active 20 min; marination 15 min; simmer 8 min',
      ingredientSections: [
        {
          title: 'Prized Fish & Sour Tamarind Base',
          items: [
            { item: 'Hilsa fish steaks with bone', amount: '4–5 pieces', note: 'ilish machh' },
            { item: 'Tamarind pulp (tetul)', amount: '1 tbsp', note: 'soaked in warm water and strained' },
            { item: 'Yellow and black mustard seeds', amount: '2 tbsp', note: 'ground together with a pinch of salt' }
          ]
        },
        {
          title: 'Aromatics & Pure Mustard Oil',
          items: [
            { item: 'Fresh green chilies (kancha lanka)', amount: '4–5', note: 'slit lengthwise' },
            { item: 'Turmeric powder (holud guro)', amount: '1/2 tsp' },
            { item: 'Red chili powder or Kashmiri red chili', amount: '1/2 tsp', note: 'optional, for color' },
            { item: 'Pure cold-pressed mustard oil', amount: '3 tbsp', note: 'shorsher tel' },
            { item: 'Salt (noon)', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Hilsa fish steaks with bone (ilish machh)', amount: '4–5 pieces' },
        { item: 'Yellow and black mustard seeds', amount: '2 tbsp', note: 'ground with salt' },
        { item: 'Tamarind pulp (tetul)', amount: '1 tbsp', note: 'strained' },
        { item: 'Fresh green chilies (kancha lanka)', amount: '4–5', note: 'slit lengthwise' },
        { item: 'Turmeric powder (holud guro)', amount: '1/2 tsp' },
        { item: 'Red chili powder or Kashmiri chili', amount: '1/2 tsp' },
        { item: 'Pure mustard oil (shorsher tel)', amount: '3 tbsp' },
        { item: 'Salt to taste (noon)', amount: 'to taste' }
      ],
      preparationSteps: [
        'Wash the hilsa steaks gently and pat dry. In a shallow bowl, combine the freshly ground mustard paste, strained tamarind pulp, turmeric powder, salt, and half of the slit green chilies. Coat the fish thoroughly in this paste and let it rest for 15–20 minutes so the rich meat absorbs the sharp, tangy flavors.',
        'Heat 2 tablespoons of mustard oil in a wide, heavy-bottomed pan until it begins to lightly smoke. Lower the flame and pour in the marinated fish along with all the spice mixture clinging to the bowl. Add a splash of warm water (about 1/2 cup) along the rim to create a gentle simmering sauce.',
        'Bring the gravy to a slow, controlled simmer over medium-low heat. Hilsa cooks remarkably fast; cover the pan and let it simmer for about 6 to 8 minutes, gently turning the pieces once midway to ensure both sides cook evenly without breaking the delicate meat.',
        'Uncover the pot, slide in the remaining fresh green chilies, and drizzle the remaining tablespoon of raw, unheated mustard oil over the top. Turn off the heat immediately and keep the pot covered for 5 minutes to trap the pungent aromas.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Marinate the Fish',
          instruction: 'Combine ground mustard paste, strained tamarind pulp, turmeric, salt, and half the chilies. Coat hilsa steaks and rest 15–20 min.'
        },
        {
          stepNum: 2,
          title: 'Build the Gravy Base',
          instruction: 'Heat 2 tbsp mustard oil until smoking. Lower heat, slide in fish with marinade and 1/2 cup warm water along the rim.'
        },
        {
          stepNum: 3,
          title: 'Simmer Gently',
          instruction: 'Simmer covered over medium-low heat for 6–8 minutes, gently turning steaks once midway.'
        },
        {
          stepNum: 4,
          title: 'The Raw Oil Finish',
          instruction: 'Slide in remaining chilies, drizzle 1 tbsp raw pungent mustard oil on top, turn off flame and cover 5 min.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot over a steaming mound of fragrant Gobindobhog or long-grain white rice, letting the sharp, sour broth soak through every grain.',
        imageUrl: '/images/wb/ilish_er_dolon.jpg'
      },
      vessel: 'Wide Heavy-Bottomed Kadhai',
      cookingFat: 'Cold-Pressed Mustard Oil (Shorsher Tel)',
      season: 'Monsoon (Ilish Utsob)',
      flavorProfile: ["Pungent Sinus-Clearing Mustard", "Fruity Tamarind Tang", "Rich Hilsa Fat Umami", "Fresh Green Chili Heat"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/wb/ilish_er_dolon.jpg',
      phonetic: 'ee-LEESH-er DOH-lon'
    },
    dishes: [
      {
      id: 'wb-ilish-er-dolon',
      name: 'Ilish-er Dolon',
      nativeName: 'ইলিশের দোলন',
      englishSubtitle: 'Hilsa in Mustard & Tamarind Gravy',
      tagline: 'Prized river hilsa steeped in pungent mustard, fruity tamarind pulp, and fiery green chilies.',
      description: 'In a Bengali household, fish isn’t just sustenance—it is a cultural anchor, an emblem of auspicious beginnings, and a celebration on a plate. Few preparations capture this reverence quite like Ilish-er Dolon, a vintage heirloom jewel where the prized hilsa is bathed in a sour-spicy, pungent gravy. Rather than leaning purely on the sharp, sinus-clearing mustard profile of a classic Shorshe Ilish, this traditional preparation introduces the fruity tang of tamarind, cutting beautifully through the natural oiliness and rich flesh of the fish.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Padma & Hooghly River Basins, Kolkata & East Bengal Heirloom',
      culturalSignificance: 'A 19th-century zamindari and riverine delicacy where hilsa was celebrated with the natural sourness of ripe village tamarind, balancing the fish\'s opulent omega-rich fat.',
      servesCount: 'Yield: 4–5 servings',
      approxPrepTime: 'Active 20 min; marination 15 min; simmer 8 min',
      ingredientSections: [
        {
          title: 'Prized Fish & Sour Tamarind Base',
          items: [
            { item: 'Hilsa fish steaks with bone', amount: '4–5 pieces', note: 'ilish machh' },
            { item: 'Tamarind pulp (tetul)', amount: '1 tbsp', note: 'soaked in warm water and strained' },
            { item: 'Yellow and black mustard seeds', amount: '2 tbsp', note: 'ground together with a pinch of salt' }
          ]
        },
        {
          title: 'Aromatics & Pure Mustard Oil',
          items: [
            { item: 'Fresh green chilies (kancha lanka)', amount: '4–5', note: 'slit lengthwise' },
            { item: 'Turmeric powder (holud guro)', amount: '1/2 tsp' },
            { item: 'Red chili powder or Kashmiri red chili', amount: '1/2 tsp', note: 'optional, for color' },
            { item: 'Pure cold-pressed mustard oil', amount: '3 tbsp', note: 'shorsher tel' },
            { item: 'Salt (noon)', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Hilsa fish steaks with bone (ilish machh)', amount: '4–5 pieces' },
        { item: 'Yellow and black mustard seeds', amount: '2 tbsp', note: 'ground with salt' },
        { item: 'Tamarind pulp (tetul)', amount: '1 tbsp', note: 'strained' },
        { item: 'Fresh green chilies (kancha lanka)', amount: '4–5', note: 'slit lengthwise' },
        { item: 'Turmeric powder (holud guro)', amount: '1/2 tsp' },
        { item: 'Red chili powder or Kashmiri chili', amount: '1/2 tsp' },
        { item: 'Pure mustard oil (shorsher tel)', amount: '3 tbsp' },
        { item: 'Salt to taste (noon)', amount: 'to taste' }
      ],
      preparationSteps: [
        'Wash the hilsa steaks gently and pat dry. In a shallow bowl, combine the freshly ground mustard paste, strained tamarind pulp, turmeric powder, salt, and half of the slit green chilies. Coat the fish thoroughly in this paste and let it rest for 15–20 minutes so the rich meat absorbs the sharp, tangy flavors.',
        'Heat 2 tablespoons of mustard oil in a wide, heavy-bottomed pan until it begins to lightly smoke. Lower the flame and pour in the marinated fish along with all the spice mixture clinging to the bowl. Add a splash of warm water (about 1/2 cup) along the rim to create a gentle simmering sauce.',
        'Bring the gravy to a slow, controlled simmer over medium-low heat. Hilsa cooks remarkably fast; cover the pan and let it simmer for about 6 to 8 minutes, gently turning the pieces once midway to ensure both sides cook evenly without breaking the delicate meat.',
        'Uncover the pot, slide in the remaining fresh green chilies, and drizzle the remaining tablespoon of raw, unheated mustard oil over the top. Turn off the heat immediately and keep the pot covered for 5 minutes to trap the pungent aromas.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Marinate the Fish',
          instruction: 'Combine ground mustard paste, strained tamarind pulp, turmeric, salt, and half the chilies. Coat hilsa steaks and rest 15–20 min.'
        },
        {
          stepNum: 2,
          title: 'Build the Gravy Base',
          instruction: 'Heat 2 tbsp mustard oil until smoking. Lower heat, slide in fish with marinade and 1/2 cup warm water along the rim.'
        },
        {
          stepNum: 3,
          title: 'Simmer Gently',
          instruction: 'Simmer covered over medium-low heat for 6–8 minutes, gently turning steaks once midway.'
        },
        {
          stepNum: 4,
          title: 'The Raw Oil Finish',
          instruction: 'Slide in remaining chilies, drizzle 1 tbsp raw pungent mustard oil on top, turn off flame and cover 5 min.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot over a steaming mound of fragrant Gobindobhog or long-grain white rice, letting the sharp, sour broth soak through every grain.',
        imageUrl: '/images/wb/ilish_er_dolon.jpg'
      },
      vessel: 'Wide Heavy-Bottomed Kadhai',
      cookingFat: 'Cold-Pressed Mustard Oil (Shorsher Tel)',
      season: 'Monsoon (Ilish Utsob)',
      flavorProfile: ["Pungent Sinus-Clearing Mustard", "Fruity Tamarind Tang", "Rich Hilsa Fat Umami", "Fresh Green Chili Heat"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/wb/ilish_er_dolon.jpg',
      phonetic: 'ee-LEESH-er DOH-lon'
      },
      {
      id: 'wb-lau-patar-bhorta',
      name: 'Lau Patar Bhorta',
      nativeName: 'লাউ পাতার ভর্তা',
      englishSubtitle: 'Spiced Bottle Gourd Leaf Mash',
      tagline: 'Velvety blanched bottle gourd leaves stone-ground on a sheel-nora with garlic, chilies, and raw mustard oil.',
      description: 'Long before zero-waste and "root-to-stem" cooking became culinary movements, Bengali grandmothers had already elevated garden scraps into edible comfort. Lau Patar Bhorta is a quintessential example of that quiet kitchen thrift. Made from tender, velvety bottle gourd leaves that are blanched, stone-ground with aromatics, and bound with pungent mustard oil, this rustic mash is an everyday staple designed to wake up the palate before the main courses arrive.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Rural Bengal Kitchens & Village Courtyards',
      culturalSignificance: 'The absolute epitome of Bengali zero-waste sustainability, transforming leafy vines into an addictive nose-tingling appetizer.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Tender Vines & Aromatics',
          items: [
            { item: 'Tender bottle gourd leaves (lau pata)', amount: '10–12', note: 'thoroughly washed and de-stemmed' },
            { item: 'Garlic cloves (roshun)', amount: '4–5' },
            { item: 'Fiery green chilies (kancha lanka)', amount: '3–4' }
          ]
        },
        {
          title: 'Tempering & Finishing',
          items: [
            { item: 'Nigella seeds (kalo jeere)', amount: '1/2 tsp', note: 'optional, for flash-tempering' },
            { item: 'Cold-pressed mustard oil (shorsher tel)', amount: '2 tbsp' },
            { item: 'Salt to taste (noon)', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Tender bottle gourd leaves (lau pata)', amount: '10–12' },
        { item: 'Garlic cloves (roshun)', amount: '4–5' },
        { item: 'Fiery green chilies (kancha lanka)', amount: '3–4' },
        { item: 'Nigella seeds (kalo jeere)', amount: '1/2 tsp' },
        { item: 'Mustard oil (shorsher tel)', amount: '2 tbsp' },
        { item: 'Salt (noon)', amount: 'to taste' }
      ],
      preparationSteps: [
        'Bring a pot of lightly salted water to a rolling boil. Drop the cleaned bottle gourd leaves in and blanch for 2 to 3 minutes until tender and silky yet vibrant green. Drain immediately and plunge into cold water to halt cooking, then gently squeeze out the excess water.',
        'In the traditional manner, place the blanched leaves on a sheel-nora (flat grinding stone) alongside raw garlic cloves, green chilies, and a generous pinch of salt. Grind everything together into a smooth, thick, cohesive paste.',
        'While many purists enjoy it raw, you can optionally heat a tablespoon of mustard oil in a skillet, crackle nigella seeds, and sauté the green paste for 2–3 minutes over low heat until the raw garlic aroma mellows and the water evaporates.',
        'Transfer the emerald mash to a small serving bowl. Drizzle a final splash of raw, pungent mustard oil right over the surface and top with a fresh slit green chili.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Blanch the Greens',
          instruction: 'Blanch leaves in boiling salted water 2–3 min, plunge into cold water, and squeeze out excess moisture.'
        },
        {
          stepNum: 2,
          title: 'Grind to a Silk',
          instruction: 'Stone-grind blanched leaves on a sheel-nora with raw garlic, green chilies, and salt into a cohesive paste.'
        },
        {
          stepNum: 3,
          title: 'Warm the Mash (Optional)',
          instruction: 'Optionally sauté in mustard oil with nigella seeds for 2–3 min to mellow garlic.'
        },
        {
          stepNum: 4,
          title: 'Drizzle and Serve',
          instruction: 'Drizzle raw pungent mustard oil over the emerald mash and top with slit green chili.'
        }
      ],
      servingSuggestion: {
        text: 'Best eaten by hand: take a small scoop of the bhorta, crush it into steaming hot rice, and savor the nose-tingling heat against the earthy greens.',
        imageUrl: '/images/wb/lau_patar_bhorta.jpg'
      },
      vessel: 'Sheel Nora (Granite Grinding Slab)',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'All Seasons / Everyday Comfort',
      flavorProfile: ["Pungent Mustard Sting", "Raw Garlic Warmth", "Earthy Leafy Sweetness", "Fiery Green Chili"],
      dietary: 'Vegan',
      imageUrl: '/images/wb/lau_patar_bhorta.jpg',
      phonetic: 'LAOW pah-TAHR BHOR-tah'
      },
      {
      id: 'wb-goalando-steamer-fowl',
      name: 'Goalando Steamer Fowl Curry',
      nativeName: 'গোয়ালন্দ স্টিমার মুরগির ঝোল',
      englishSubtitle: 'Rustic Padma River Boatmen’s Curry',
      tagline: 'Fiery crimson chicken broth slow-braised by Padma river boatmen with hand-bruised aromatics and raw mustard oil.',
      description: 'Born on the breezy lower decks of early 20th-century paddle steamers chugging through the Padma River, Goalondo Steamer Fowl Curry is an iconic recipe shaped by river mist and practicality. Prepared by Muslim boatmen (khalasis) using rustic country chicken and pantry staples that wouldn’t spoil on long journeys, this curry foregoes all delicate curds, fine pastes, and royal marinades. Instead, it relies on roughly pounded aromatics, dry red heat, and generous glugs of mustard oil, simmering down into a fiery, crimson broth.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Goalando Ghat Paddle Steamers, Padma River Crossings',
      culturalSignificance: 'Immortalized in the travel memoirs of Syed Mujtaba Ali, this legendary boatmen curry warmed passengers traveling between Calcutta and Dhaka on historic British India Steam Navigation liners.',
      servesCount: 'Yield: 4–5 servings',
      approxPrepTime: 'Prep 15 min; cook 45 min',
      ingredientSections: [
        {
          title: 'Country Fowl & Pounded Heat',
          items: [
            { item: 'Country chicken or bone-in fowl (deshi murgi)', amount: '750 g', note: 'cut into curry pieces' },
            { item: 'Whole dried red chilies (shukno lanka)', amount: '6–8', note: 'soaked and roughly ground into coarse paste' },
            { item: 'Garlic cloves (roshun)', amount: '10–12', note: 'coarsely bruised or pounded' },
            { item: 'Ginger (aada)', amount: '1.5-inch knob', note: 'julienned or crushed' }
          ]
        },
        {
          title: 'Onions, Oil & Broth Base',
          items: [
            { item: 'Large onions (pyaj)', amount: '3', note: 'thinly sliced' },
            { item: 'Turmeric powder (holud guro)', amount: '1 tsp' },
            { item: 'Pungent mustard oil (shorsher tel)', amount: '4 tbsp' },
            { item: 'Warm water', amount: '2 cups' },
            { item: 'Salt to taste (noon)', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Country chicken / bone-in fowl (deshi murgi)', amount: '750 g' },
        { item: 'Large onions (pyaj)', amount: '3', note: 'thinly sliced' },
        { item: 'Garlic cloves (roshun)', amount: '10–12', note: 'bruised' },
        { item: 'Fresh ginger (aada)', amount: '1.5-inch knob', note: 'crushed' },
        { item: 'Whole dried red chilies (shukno lanka)', amount: '6–8', note: 'coarse paste' },
        { item: 'Turmeric powder', amount: '1 tsp' },
        { item: 'Mustard oil (shorsher tel)', amount: '4 tbsp' },
        { item: 'Warm water', amount: '2 cups' },
        { item: 'Salt (noon)', amount: 'to taste' }
      ],
      preparationSteps: [
        'In a heavy pot (traditionally a clay handi or deep karahi), combine the chicken pieces directly with sliced onions, bruised garlic, crushed ginger, coarse red chili paste, turmeric powder, salt, and three tablespoons of raw mustard oil. Rub the mixture vigorously into the meat with your hands until the onions begin to soften and sweat.',
        'Place the pot over a medium-low flame. Cover and let the chicken cook in its own rendered juices and oil for 15–20 minutes, stirring occasionally. The onions will melt down to form a rich, spicy, fragrant red base around the chicken.',
        'Pour in warm water to reach your preferred gravy consistency. Bring the curry to a boil, then cover and simmer over low heat until the chicken is fork-tender and a glossy, fiery-red layer of mustard oil separates and floats proudly on the surface (tori).',
        'Turn off the heat and drizzle the remaining tablespoon of raw mustard oil around the perimeter. Keep the pot covered for 10 minutes to allow the sharp aromas to settle into the meat.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Toss and Hand-Marinate',
          instruction: 'Hand-rub chicken pieces directly with onions, bruised garlic, ginger, dried chili paste, turmeric, salt, and 3 tbsp raw mustard oil until onions soften.'
        },
        {
          stepNum: 2,
          title: 'Slow Sear (Koshano)',
          instruction: 'Cover and braise over medium-low flame for 15–20 min in its own rendered juices until onions melt into a red fragrant base.'
        },
        {
          stepNum: 3,
          title: 'Simmer the Broth',
          instruction: 'Add warm water, bring to boil, cover and simmer until fowl is fork-tender and glossy fiery-red tori floats on top.'
        },
        {
          stepNum: 4,
          title: 'The Final Rest',
          instruction: 'Drizzle 1 tbsp raw mustard oil around perimeter, remove from flame, and rest covered 10 min.'
        }
      ],
      servingSuggestion: {
        text: 'Ladle this thin, fiery crimson broth generously over plain boiled white rice, letting the unvarnished heat and rustic garlic aroma cut through the air.',
        imageUrl: '/images/wb/goalando_steamer_fowl_curry.jpg'
      },
      vessel: 'Clay Handi or Heavy Cast Iron Karahi',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'All Seasons / Steamer Crossing Comfort',
      flavorProfile: ["Fiery Dried Red Chili Heat", "Rustic Bruised Garlic", "Sharp Raw Mustard Pungency", "Deep Fowl Stock Savory"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/wb/goalando_steamer_fowl_curry.jpg',
      phonetic: 'goh-ah-LAHN-doh STEE-mahr FOWL'
      },
      {
      id: 'wb-kacha-lanka-jhol',
      name: 'Kacha Lanka Jhol',
      nativeName: 'কাঁচা লঙ্কা ঝোল',
      englishSubtitle: 'Fresh Green Chili & Tamarind Fish Stew',
      tagline: 'Light, invigorating fish broth extracting the herbal fruitiness of green chilies with garlic and tart tamarind.',
      description: 'A celebrated standard from early 20th-century Bengal, Kacha Lanka Jhol turns one of the sharpest, most intimidating aromatics in the kitchen into a light, soothing, and appetite-reviving stew. Unlike heavy banquet gravies that depend on thick nut pastes or cream, this dish extracts the clean, herbal fruitiness of green chilies without overwhelming the tongue with raw burn. Tempered with garlic and balanced by the sour punch of tamarind, it is a masterclass in elemental seasoning.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Urban & Semi-Rural Bengal Households',
      culturalSignificance: 'A restorative monsoon broth prescribed for convalescence and humid sultry afternoons, delivering pure digestive refreshment without heaviness.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '20 min',
      ingredientSections: [
        {
          title: 'Fresh Fish & Tangy Broth',
          items: [
            { item: 'Fresh carp / Rohu/Katla fish steaks', amount: '4 pieces', note: 'rui/katla machh' },
            { item: 'Tamarind pulp (tetul)', amount: '1.5 tbsp', note: 'extracted with warm water' },
            { item: 'Fresh green chilies (kancha lanka)', amount: '8–10', note: 'halved lengthwise' }
          ]
        },
        {
          title: 'Tempering & Golden Spices',
          items: [
            { item: 'Garlic cloves (roshun)', amount: '6', note: 'lightly crushed' },
            { item: 'Cumin seeds (jeere) or panch phoron', amount: '1/2 tsp', note: 'for tempering' },
            { item: 'Turmeric powder (holud guro)', amount: '1/2 tsp' },
            { item: 'Cold-pressed mustard oil', amount: '2 tbsp', note: 'shorsher tel' },
            { item: 'Salt to taste (noon)', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh Rohu or Katla fish steaks', amount: '4 pieces' },
        { item: 'Fresh green chilies (kancha lanka)', amount: '8–10', note: 'halved' },
        { item: 'Garlic cloves (roshun)', amount: '6', note: 'crushed' },
        { item: 'Tamarind pulp (tetul)', amount: '1.5 tbsp' },
        { item: 'Cumin seeds or panch phoron', amount: '1/2 tsp' },
        { item: 'Turmeric powder', amount: '1/2 tsp' },
        { item: 'Mustard oil (shorsher tel)', amount: '2 tbsp' },
        { item: 'Salt (noon)', amount: 'to taste' }
      ],
      preparationSteps: [
        'Smear the fish steaks with a pinch of turmeric powder and salt. Lightly sear them in a tablespoon of hot mustard oil for barely 1–2 minutes per side—just enough to firm up the meat without giving it a hard crust. Remove and set aside.',
        'In the same pan, heat the remaining mustard oil until smoking. Drop in the cumin seeds and let them sizzle for a few seconds, then toss in the crushed garlic. Sauté gently until the garlic turns fragrant and pale golden (do not let it brown).',
        'Toss in the slit green chilies and sauté for 30 seconds until they blister lightly. Pour in 1.5 cups of warm water mixed with turmeric powder, salt, and the strained tamarind pulp. Bring the broth to a brisk boil, allowing the chilies to surrender their essential oils and soften into the stew.',
        'Slide the pan-seared fish steaks into the boiling stew. Reduce the flame to medium, cover, and let it simmer for 5 to 6 minutes so the fish soaks up the sharp, citrusy tang of the broth.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Light Sear the Fish',
          instruction: 'Smear fish steaks with turmeric and salt, lightly flash-sear in 1 tbsp mustard oil 1–2 min per side to firm up meat.'
        },
        {
          stepNum: 2,
          title: 'Temper the Aromatics',
          instruction: 'Heat remaining oil, sizzle cumin seeds, then sauté crushed garlic until fragrant and pale golden.'
        },
        {
          stepNum: 3,
          title: 'Build the Jhol',
          instruction: 'Blister slit green chilies 30 sec, add warm water mixed with turmeric, salt, and strained tamarind; bring to brisk boil.'
        },
        {
          stepNum: 4,
          title: 'Simmer to Finish',
          instruction: 'Slide seared fish into boiling broth, cover and simmer on medium flame 5–6 min until fish absorbs citrusy tang.'
        }
      ],
      servingSuggestion: {
        text: 'Serve piping hot in wide soup bowls alongside warm rice—ideal on humid monsoon afternoons or whenever the palate craves a clean, invigorating reset.',
        imageUrl: '/images/wb/kacha_lanka_jhol.jpg'
      },
      vessel: 'Traditional Kansa Kadhai or Enamelled Pan',
      cookingFat: 'Cold-Pressed Mustard Oil',
      season: 'Monsoon & Humid Summer',
      flavorProfile: ["Clean Herbal Chili Fruitiness", "Tart Tamarind Tang", "Aromatic Garlic", "Sweet Freshwater Fish Broth"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/wb/kacha_lanka_jhol.jpg',
      phonetic: 'KAHN-chah LAHN-kah JHOL'
      },
      {
      id: 'wb-kumro-dhokar-dalna',
      name: 'Kumro Dhokar Dalna',
      nativeName: 'কুমড়ো ধোঁকার ডালনা',
      englishSubtitle: 'Spiced Pumpkin Seed Cake Curry',
      tagline: 'Ingenious heirloom Bengali widow-cuisine curry of steamed & pan-crisped pumpkin seed diamond cakes in cumin-ginger gravy.',
      description: 'Emerging from the storied tradition of Bengali widow cuisine (niramish ranna), Dhokar Dalna is a monument to ingenuity born out of rigid social strictures. Barred from consuming meat, onions, or garlic, resourceful home cooks invented dhoka—spiced, steamed, and fried lentil diamond cakes masquerading with the heft of meat. In times of extreme scarcity when even lentils ran short, cooks turned to Kumro Dhokar Dalna, gathering discarded pumpkin seeds and transforming them into a rich, nutty, and velvety alternative that rivals any traditional pulse cake.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Brahmin & Kayastha Widow Kitchens, Rural Bengal',
      culturalSignificance: 'A revered culinary innovation demonstrating how zero-waste kitchen practices turned discarded seeds into regal vegetarian centerpieces.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: 'Active 35 min; seed soaking 4 hrs',
      ingredientSections: [
        {
          title: 'Pumpkin Seed Dhoka (Cakes)',
          items: [
            { item: 'Pumpkin seeds (kumro bichi)', amount: '1 cup', note: 'shelled and soaked for 4 hours' },
            { item: 'Roasted Bengal gram flour (besan)', amount: '2 tbsp', note: 'for binding if needed' },
            { item: 'Green chili (kancha lanka)', amount: '1', note: 'finely minced' },
            { item: 'Ginger paste (aada bata)', amount: '1/2 tsp' },
            { item: 'Asafoetida (hing)', amount: '1/4 tsp' },
            { item: 'Cumin seeds (jeere)', amount: '1/2 tsp' },
            { item: 'Mustard oil for frying', amount: 'as needed' }
          ]
        },
        {
          title: 'Dalna (Gravy Base)',
          items: [
            { item: 'Medium potato (aloo)', amount: '1', note: 'peeled and quartered' },
            { item: 'Large tomato', amount: '1', note: 'pureed' },
            { item: 'Ginger paste (aada bata)', amount: '1 tbsp' },
            { item: 'Cumin powder (jeere guro)', amount: '1 tsp' },
            { item: 'Turmeric & Kashmiri chili powder', amount: '1/2 tsp each' },
            { item: 'Bay leaf and dried red chili', amount: '1 each' },
            { item: 'Bengali garam masala & desi ghee', amount: '1/2 tsp garam masala, 1 tsp ghee' },
            { item: 'Salt and pinch of sugar', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Pumpkin seeds (kumro bichi)', amount: '1 cup', note: 'soaked 4 hrs' },
        { item: 'Roasted besan', amount: '2 tbsp' },
        { item: 'Ginger paste (aada bata)', amount: '1.5 tbsp divided' },
        { item: 'Green chili', amount: '1' },
        { item: 'Asafoetida (hing)', amount: '1/4 tsp' },
        { item: 'Potato (aloo)', amount: '1 medium', note: 'quartered' },
        { item: 'Tomato puree', amount: '1 large tomato' },
        { item: 'Cumin seeds & powder', amount: '1.5 tsp total' },
        { item: 'Turmeric & Kashmiri red chili powder', amount: '1/2 tsp each' },
        { item: 'Bay leaf & dry red chili', amount: '1 each' },
        { item: 'Bengali garam masala & pure ghee', amount: '1/2 tsp masala, 1 tsp ghee' },
        { item: 'Mustard oil & Salt', amount: 'for frying & to taste' }
      ],
      preparationSteps: [
        'Grind the soaked pumpkin seeds with green chili, ginger paste, and minimal water into a thick, semi-fine paste. In a skillet, heat a teaspoon of mustard oil, bloom the hing and cumin seeds, then turn the pumpkin paste in along with salt and turmeric. Stir vigorously over low heat until the mixture loses stickiness and forms a cohesive dough-like ball.',
        'Turn the warm dough onto a greased plate and flatten it into a smooth, 1/2-inch-thick square slab. Let it cool and set for 15 minutes, then cut diagonally into classic diamond-shaped cakes (dhoka). Shallow-fry these diamonds in medium-hot mustard oil until golden and crisp around the edges. Drain and set aside.',
        'In the remaining oil, fry the potato chunks until golden, then set aside. Temper the oil with bay leaf, dried red chili, and whole cumin. Add tomato puree, ginger paste, cumin powder, turmeric, and red chili powder. Sauté over medium heat until the masala releases oil at the edges.',
        'Return the fried potatoes to the pan, add 1.5 cups of warm water, season with salt and a pinch of sugar, and simmer until the potatoes are tender. Gently slide the fried pumpkin seed dhokas into the gravy and simmer for just 2 minutes—take care not to overcook, as seed cakes soak up liquid quickly.',
        'Finish with a sprinkle of fragrant garam masala and a spoonful of golden ghee. Turn off the heat and let the curry rest covered for 5 minutes.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Make the Dhoka Dough',
          instruction: 'Grind soaked pumpkin seeds with chili and ginger. Sauté in oil with bloomed hing and cumin until paste forms cohesive ball.'
        },
        {
          stepNum: 2,
          title: 'Shape & Shallow Fry',
          instruction: 'Flatten dough on greased plate into 1/2-inch slab, cool 15 min, cut into diamonds, and shallow-fry until golden-crisp.'
        },
        {
          stepNum: 3,
          title: 'Prepare the Dalna Base',
          instruction: 'Fry potatoes golden. Temper oil with bay leaf, red chili, and cumin; cook tomato puree, ginger, and ground spices until oil edges.'
        },
        {
          stepNum: 4,
          title: 'Simmer and Assemble',
          instruction: 'Add 1.5 cups warm water, salt, sugar; simmer potatoes tender. Slide dhokas into gravy for barely 2 minutes.'
        },
        {
          stepNum: 5,
          title: 'Aromatic Finish',
          instruction: 'Finish with Bengali garam masala and 1 tsp ghee; rest covered for 5 minutes.'
        }
      ],
      servingSuggestion: {
        text: 'Serve alongside steamed basmati rice or soft rotis, savoring the delicate, nutty bite of the seed cakes as they absorb the warm cumin-ginger gravy.',
        imageUrl: '/images/wb/kumro_dhokar_dalna.jpg'
      },
      vessel: 'Heavy Bottomed Kadhai',
      cookingFat: 'Cold-Pressed Mustard Oil & Desi Ghee',
      season: 'Autumn to Winter (Niramish Days)',
      flavorProfile: ["Nutty Sweet Seed Crumb", "Warm Ginger-Cumin Gravy", "Aromatic Garam Masala", "Golden Ghee Finish"],
      dietary: 'Vegetarian',
      imageUrl: '/images/wb/kumro_dhokar_dalna.jpg',
      phonetic: 'KOOM-roh DHO-kahr DAHL-nah'
      }
    ]
  },
  ct: {
    id: 'ct',
    name: 'Chhattisgarh',
    nativeName: 'छत्तीसगढ़',
    capital: 'Raipur',
    region: 'Central',
    historicalEra: 'Dakshina Kosala Kingdom & Ancient Gondwana Tribal Forest',
    culinaryPhilosophy: 'The Rice Bowl of India: masterful treatment of heirloom rice grains (steamed fara rolls, lacy cheela crepes, scalded chausela pooris), jaggery-sesame winter sweets, and sharp woodsmoke firecraft.',
    heirloomVessels: ["Lohe Ka Tawa (Cast Iron Griddle)", "Mitti Ka Chulha", "Dauri (Wicker Mold)"],
    signatureSpices: ["Safed Til (Sesame)", "Sarson (Mustard Seeds)", "Saunf (Fennel)", "Sukhi Lal Mirch", "Kadi Patta"],
    stapleGrains: ["Chawal (Short-Grain Rice)", "Chawal Ka Atta (Rice Flour)", "Gehun (Whole Wheat)"],
    representativeDish: {
      id: 'ct-fara-phara',
      name: 'Fara / Phara',
      nativeName: 'फरा / मुठिया',
      englishSubtitle: 'Steamed Chhattisgarhi Rice Rolls',
      tagline: 'Tender steamed rice rolls tempered in smoking mustard oil with crackling sesame seeds, green chilies, and curry leaves.',
      description: 'Known as the "Rice Bowl of India," Chhattisgarh’s culinary traditions celebrate the grain in every conceivable texture. Fara (often called Phara or Muthiya) is perhaps the most beloved everyday breakfast born of this abundance. Part dumpling, part steamed roll, it transforms leftover cooked rice and raw rice flour into tender, cylindrical rolls with tapered ends. While completely wholesome and light on the palate when steamed fresh, the true magic happens when these rolls are tempered in smoking mustard oil with crackling sesame seeds, green chilies, and curry leaves—creating a crisp, blistered skin around a soft, pillowy center.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Rural Bastar & Chhattisgarhi Plains Homesteads',
      culturalSignificance: 'The quintessential Chhattisgarhi breakfast, showcasing agrarian frugality and the versatility of indigenous rice flour.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '25 min',
      ingredientSections: [
        {
          title: 'Tender Rice Dough Base',
          items: [
            { item: 'Cooked white rice', amount: '1 cup', note: 'preferably short-grain, mashed' },
            { item: 'Fine rice flour (chawal ka atta)', amount: '1 cup' },
            { item: 'Fresh green chilies (hari mirch)', amount: '2–3', note: 'finely chopped' },
            { item: 'Fresh coriander leaves', amount: '1 tbsp', note: 'finely minced' },
            { item: 'Cumin seeds (jeera)', amount: '1/2 tsp' },
            { item: 'Warm water', amount: '1 cup', note: 'as needed to knead' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        },
        {
          title: 'Crispy Chhunk / Tadka (Tempering)',
          items: [
            { item: 'Mustard oil or refined oil', amount: '1.5 tbsp' },
            { item: 'White sesame seeds (safed til)', amount: '1 tsp' },
            { item: 'Brown mustard seeds (rai / sarson)', amount: '1 tsp' },
            { item: 'Curry leaves (kadi patta)', amount: '1 sprig' },
            { item: 'Whole dried red chilies (sukhi lal mirch)', amount: '2' }
          ]
        }
      ],
      ingredients: [
        { item: 'Cooked short-grain rice', amount: '1 cup' },
        { item: 'Rice flour (chawal ka atta)', amount: '1 cup' },
        { item: 'Green chilies & coriander', amount: '2–3 chilies, 1 tbsp coriander' },
        { item: 'Cumin seeds', amount: '1/2 tsp' },
        { item: 'White sesame seeds (safed til)', amount: '1 tsp' },
        { item: 'Mustard seeds & curry leaves', amount: '1 tsp seeds, 1 sprig leaves' },
        { item: 'Dried red chilies', amount: '2' },
        { item: 'Mustard oil', amount: '1.5 tbsp' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'In a wide mixing bowl, mash the cooked rice using your fingers or the back of a cup until broken down. Add the rice flour, chopped green chilies, minced coriander, cumin seeds, and salt. Gradually pour in warm water and knead into a smooth, pliable, non-sticky dough. Let it rest covered for 10 minutes.',
        'Grease your palms with a drop of oil. Pinch off small portions of the dough (lemon-sized) and roll them between your hands into slender cylinders, gently tapering both ends so they resemble pointed spindles or pea pods.',
        'Grease a steamer plate or colander. Arrange the shaped rolls in a single layer without overcrowding so they do not stick together. Steam over boiling water for 10 to 12 minutes until they turn glossy, firm to the touch, and a skewer inserted comes out clean. Remove and let them cool for 2 minutes to set.',
        'Heat oil in a wide kadai. Crackle the mustard seeds and sesame seeds until they pop and turn fragrant. Toss in the dried red chilies and curry leaves. Slide the steamed fara into the sizzling temper, tossing gently on medium heat for 3–4 minutes until the rolls pick up a light golden, crispy crust around the edges.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Knead the Dough',
          instruction: 'Mash cooked rice with rice flour, green chilies, coriander, cumin, and warm water into a smooth pliable dough.'
        },
        {
          stepNum: 2,
          title: 'Shape the Spindles',
          instruction: 'Roll lemon-sized dough balls into slender cylinders with tapered pointed ends between oiled palms.'
        },
        {
          stepNum: 3,
          title: 'Steam to Firmness',
          instruction: 'Steam on greased plate for 10–12 min until glossy, firm, and thoroughly cooked through.'
        },
        {
          stepNum: 4,
          title: 'Temper and Crisp',
          instruction: 'Toss steamed fara in sizzling mustard oil with sesame seeds, curry leaves, and dry chilies until golden-crusted.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm straight from the pan alongside a bowl of rustic roasted tomato-garlic chutney (tamatar ki bilahi chutney) or spicy green coriander dip.',
        imageUrl: '/images/ct/fara_phara.jpg'
      },
      vessel: 'Traditional Steamer & Heavy Kadai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'All Seasons / Everyday Agrarian Breakfast',
      flavorProfile: ["Crisp Blistered Sesame Crust", "Soft Pillowy Steamed Rice Center", "Toasted Mustard Seed Pop", "Fresh Herb & Chili Heat"],
      dietary: 'Vegan',
      imageUrl: '/images/ct/fara_phara.jpg',
      phonetic: 'FAH-rah / PAH-rah'
    },
    dishes: [
      {
      id: 'ct-fara-phara',
      name: 'Fara / Phara',
      nativeName: 'फरा / मुठिया',
      englishSubtitle: 'Steamed Chhattisgarhi Rice Rolls',
      tagline: 'Tender steamed rice rolls tempered in smoking mustard oil with crackling sesame seeds, green chilies, and curry leaves.',
      description: 'Known as the "Rice Bowl of India," Chhattisgarh’s culinary traditions celebrate the grain in every conceivable texture. Fara (often called Phara or Muthiya) is perhaps the most beloved everyday breakfast born of this abundance. Part dumpling, part steamed roll, it transforms leftover cooked rice and raw rice flour into tender, cylindrical rolls with tapered ends. While completely wholesome and light on the palate when steamed fresh, the true magic happens when these rolls are tempered in smoking mustard oil with crackling sesame seeds, green chilies, and curry leaves—creating a crisp, blistered skin around a soft, pillowy center.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Rural Bastar & Chhattisgarhi Plains Homesteads',
      culturalSignificance: 'The quintessential Chhattisgarhi breakfast, showcasing agrarian frugality and the versatility of indigenous rice flour.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '25 min',
      ingredientSections: [
        {
          title: 'Tender Rice Dough Base',
          items: [
            { item: 'Cooked white rice', amount: '1 cup', note: 'preferably short-grain, mashed' },
            { item: 'Fine rice flour (chawal ka atta)', amount: '1 cup' },
            { item: 'Fresh green chilies (hari mirch)', amount: '2–3', note: 'finely chopped' },
            { item: 'Fresh coriander leaves', amount: '1 tbsp', note: 'finely minced' },
            { item: 'Cumin seeds (jeera)', amount: '1/2 tsp' },
            { item: 'Warm water', amount: '1 cup', note: 'as needed to knead' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        },
        {
          title: 'Crispy Chhunk / Tadka (Tempering)',
          items: [
            { item: 'Mustard oil or refined oil', amount: '1.5 tbsp' },
            { item: 'White sesame seeds (safed til)', amount: '1 tsp' },
            { item: 'Brown mustard seeds (rai / sarson)', amount: '1 tsp' },
            { item: 'Curry leaves (kadi patta)', amount: '1 sprig' },
            { item: 'Whole dried red chilies (sukhi lal mirch)', amount: '2' }
          ]
        }
      ],
      ingredients: [
        { item: 'Cooked short-grain rice', amount: '1 cup' },
        { item: 'Rice flour (chawal ka atta)', amount: '1 cup' },
        { item: 'Green chilies & coriander', amount: '2–3 chilies, 1 tbsp coriander' },
        { item: 'Cumin seeds', amount: '1/2 tsp' },
        { item: 'White sesame seeds (safed til)', amount: '1 tsp' },
        { item: 'Mustard seeds & curry leaves', amount: '1 tsp seeds, 1 sprig leaves' },
        { item: 'Dried red chilies', amount: '2' },
        { item: 'Mustard oil', amount: '1.5 tbsp' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'In a wide mixing bowl, mash the cooked rice using your fingers or the back of a cup until broken down. Add the rice flour, chopped green chilies, minced coriander, cumin seeds, and salt. Gradually pour in warm water and knead into a smooth, pliable, non-sticky dough. Let it rest covered for 10 minutes.',
        'Grease your palms with a drop of oil. Pinch off small portions of the dough (lemon-sized) and roll them between your hands into slender cylinders, gently tapering both ends so they resemble pointed spindles or pea pods.',
        'Grease a steamer plate or colander. Arrange the shaped rolls in a single layer without overcrowding so they do not stick together. Steam over boiling water for 10 to 12 minutes until they turn glossy, firm to the touch, and a skewer inserted comes out clean. Remove and let them cool for 2 minutes to set.',
        'Heat oil in a wide kadai. Crackle the mustard seeds and sesame seeds until they pop and turn fragrant. Toss in the dried red chilies and curry leaves. Slide the steamed fara into the sizzling temper, tossing gently on medium heat for 3–4 minutes until the rolls pick up a light golden, crispy crust around the edges.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Knead the Dough',
          instruction: 'Mash cooked rice with rice flour, green chilies, coriander, cumin, and warm water into a smooth pliable dough.'
        },
        {
          stepNum: 2,
          title: 'Shape the Spindles',
          instruction: 'Roll lemon-sized dough balls into slender cylinders with tapered pointed ends between oiled palms.'
        },
        {
          stepNum: 3,
          title: 'Steam to Firmness',
          instruction: 'Steam on greased plate for 10–12 min until glossy, firm, and thoroughly cooked through.'
        },
        {
          stepNum: 4,
          title: 'Temper and Crisp',
          instruction: 'Toss steamed fara in sizzling mustard oil with sesame seeds, curry leaves, and dry chilies until golden-crusted.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm straight from the pan alongside a bowl of rustic roasted tomato-garlic chutney (tamatar ki bilahi chutney) or spicy green coriander dip.',
        imageUrl: '/images/ct/fara_phara.jpg'
      },
      vessel: 'Traditional Steamer & Heavy Kadai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'All Seasons / Everyday Agrarian Breakfast',
      flavorProfile: ["Crisp Blistered Sesame Crust", "Soft Pillowy Steamed Rice Center", "Toasted Mustard Seed Pop", "Fresh Herb & Chili Heat"],
      dietary: 'Vegan',
      imageUrl: '/images/ct/fara_phara.jpg',
      phonetic: 'FAH-rah / PAH-rah'
      },
      {
      id: 'ct-chawal-cheela',
      name: 'Chhattisgarhi Chawal Cheela',
      nativeName: 'चावल चीला',
      englishSubtitle: 'Lacy Rice Flour Crepes',
      tagline: 'Intricate, feather-light lacy crepes made from freshly milled rice flour, cumin, and chilies cooked on a seasoned iron tawa.',
      description: 'A timeless morning staple across both tribal hamlets and urban homes in Chhattisgarh, Chawal Cheela represents the beauty of rustic minimalism. Prepared with a light, pourable batter of freshly milled rice flour, water, and salt, this delicate crepe requires a practiced flick of the wrist. Cooked on a sizzling cast-iron skillet greased with a muslin cloth or half a cut potato, the thin batter sizzles into an intricate, lacy disk that remains feather-soft in the center while turning golden and crisp along the ruffled edges.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Bastar Tribal Hamlets & Rural Chhattisgarh Homes',
      culturalSignificance: 'The delicate daily bread of the Rice Bowl, eaten fresh off the woodfire iron tawa with fiery roasted tomato chutney.',
      servesCount: 'Yield: 6–8 crepes',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Flowing Rice Batter',
          items: [
            { item: 'Fine rice flour (chawal ka atta)', amount: '1.5 cups' },
            { item: 'Water', amount: '2 to 2.5 cups', note: 'to make a thin flowing batter' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        },
        {
          title: 'Seasonings & Skillet Sizzle',
          items: [
            { item: 'Small onion', amount: '1', note: 'very finely minced, optional' },
            { item: 'Green chilies', amount: '2', note: 'finely chopped' },
            { item: 'Fresh coriander leaves', amount: '2 tbsp', note: 'finely chopped' },
            { item: 'Cumin seeds (jeera)', amount: '1/2 tsp' },
            { item: 'Oil or ghee for shallow frying', amount: '2 tbsp' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fine rice flour (chawal ka atta)', amount: '1.5 cups' },
        { item: 'Water', amount: '2–2.5 cups' },
        { item: 'Onion', amount: '1 small', note: 'minced' },
        { item: 'Green chilies & coriander', amount: '2 chilies, 2 tbsp coriander' },
        { item: 'Cumin seeds (jeera)', amount: '1/2 tsp' },
        { item: 'Oil or ghee', amount: '2 tbsp' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'In a large bowl, whisk together the rice flour, cumin seeds, and salt. Gradually pour in water, whisking vigorously to ensure a completely smooth, lump-free batter with the thin, running consistency of fresh buttermilk. Fold in the minced onion, chopped green chilies, and coriander leaves. Let it rest for 5 minutes.',
        'Set a heavy cast-iron tawa or flat griddle over medium-high heat. Drizzle a few drops of oil and rub it evenly across the surface using a sliced onion or folded damp cloth until the pan is evenly seasoned and smoking hot.',
        'Give the batter a thorough stir from the bottom before each pour (rice flour settles quickly). Pour a ladleful of batter in a circular motion starting from the outer circumference and moving inward toward the center, allowing natural holes and lacy vents to form.',
        'Drizzle a few drops of oil around the edges and over the top. Cover with a concave lid for 1 to 2 minutes on medium flame so the steam cooks the top layer through. Uncover, let the bottom crisp up into a pale golden lace, then flip gently and cook the other side for 30 seconds.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Whisk the Thin Batter',
          instruction: 'Whisk rice flour, cumin, and salt with water into a buttermilk-thin batter; fold in minced aromatics.'
        },
        {
          stepNum: 2,
          title: 'Season the Cast Iron Tawa',
          instruction: 'Rub hot iron griddle with an onion half dipped in oil until smoking hot and slick.'
        },
        {
          stepNum: 3,
          title: 'Pour the Lacy Crepe',
          instruction: 'Pour a ladleful in a quick spiral from edges inward, letting delicate lacy vents and bubbles form naturally.'
        },
        {
          stepNum: 4,
          title: 'Steam and Crisp',
          instruction: 'Cover with domed lid 1–2 min to steam top, uncover to let base turn golden-crisp, then flip briefly.'
        }
      ],
      servingSuggestion: {
        text: 'Fold into halves or rolls and serve immediately with spicy charred tomato chutney or a bowl of cooling curd.',
        imageUrl: '/images/ct/chawal_cheela.jpg'
      },
      vessel: 'Heavy Cast-Iron Tawa (Lohe Ka Tawa)',
      cookingFat: 'Pure Mustard Oil or Desi Ghee',
      season: 'All Seasons / Everyday Comfort',
      flavorProfile: ["Delicate Feather-Light Texture", "Crispy Golden Ruffled Edges", "Fresh Green Chili & Cumin Zing", "Clean Pure Rice Sweetness"],
      dietary: 'Vegan',
      imageUrl: '/images/ct/chawal_cheela.jpg',
      phonetic: 'chah-WAHL CHEE-lah'
      },
      {
      id: 'ct-khurmi',
      name: 'Khurmi',
      nativeName: 'खुरमी',
      englishSubtitle: 'Festive Jaggery & Whole Wheat Crisps',
      tagline: 'Heirloom festive patties of coarse whole wheat and semolina, enriched with dark country jaggery, ghee, and sesame.',
      description: 'Deeply rooted in the cultural heritage of Chhattisgarh, Khurmi is an heirloom festive sweet intimately tied to agrarian celebrations like Pola and Teeja. Symbolizing warmth, prosperity, and maternal blessings, these traditional confections are crafted from coarse whole wheat flour, a splash of semolina or rice flour for crunch, rich cow’s ghee, and dark country jaggery. Kneaded into a firm dough, pressed into decorative, ridged oval patties, and slow-fried in batches until deep amber, a well-made Khurmi delivers a rich, buttery snap on the outside that yields to a crumbly, cardamom-scented heart.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Agrarian Households Across Chhattisgarh Plains',
      culturalSignificance: 'Sacred maternal blessing sweet exchanged during Pola (bullock worship) and Teeja festivals, carrying weeks of long shelf life.',
      servesCount: 'Yield: 12–15 crisps',
      approxPrepTime: '40 min',
      ingredientSections: [
        {
          title: 'Flour, Crunch & Shortening',
          items: [
            { item: 'Coarse whole wheat flour (gehun ka atta)', amount: '2 cups' },
            { item: 'Fine semolina (sooji) or rice flour', amount: '1/4 cup', note: 'for crunch' },
            { item: 'Pure ghee (moyen)', amount: '3 tbsp', note: 'for shortening' },
            { item: 'Ghee or neutral oil for deep frying', amount: 'as needed' }
          ]
        },
        {
          title: 'Jaggery Syrup & Fragrant Aromatics',
          items: [
            { item: 'Dark organic jaggery (gud)', amount: '3/4 cup', note: 'roughly crushed' },
            { item: 'Warm water', amount: '1/2 cup', note: 'to melt jaggery' },
            { item: 'Green cardamom powder (elaichi)', amount: '1 tsp' },
            { item: 'White sesame seeds (safed til)', amount: '1 tbsp' }
          ]
        }
      ],
      ingredients: [
        { item: 'Coarse whole wheat flour', amount: '2 cups' },
        { item: 'Semolina (sooji)', amount: '1/4 cup' },
        { item: 'Dark jaggery (gud)', amount: '3/4 cup' },
        { item: 'Pure cow ghee', amount: '3 tbsp + for frying' },
        { item: 'White sesame seeds', amount: '1 tbsp' },
        { item: 'Cardamom powder', amount: '1 tsp' },
        { item: 'Water', amount: '1/2 cup' }
      ],
      preparationSteps: [
        'In a small saucepan, combine the crushed jaggery with 1/2 cup of warm water. Warm gently over low heat, stirring occasionally, just until the jaggery completely dissolves into a thin syrup. Strain through a fine sieve to remove any grit and allow it to cool to lukewarm.',
        'In a large mixing bowl, combine the whole wheat flour, semolina, cardamom powder, and sesame seeds. Drizzle the warm ghee over the flour. Rub the ghee thoroughly into the flour using both hands for 3–4 minutes until the mixture resembles breadcrumbs and holds its shape loosely when squeezed.',
        'Pour the lukewarm jaggery syrup into the flour in small increments. Knead into a very firm, dense dough (similar to a mathri dough). Cover with a damp cloth and let it rest for 15 minutes.',
        'Pinch off small portions of the dough and roll them into thick, slightly flattened oblong discs. Traditionally, these are pressed against a carved wooden mold (khurmi saancha) or the patterned back of a woven wicker basket (dauri) to emboss a lattice or ridged design on top.',
        'Heat ghee or oil in a heavy kadai over medium flame, then drop the heat to low. Gently slide in 4 to 5 shaped patties at a time. Fry patiently on low-medium flame without disturbing them for the first 2 minutes. Turn them over and fry for 8 to 10 minutes until they turn an even, deep golden-amber.',
        'Drain on absorbent paper and allow them to cool completely. As they cool, the outer shell turns shatteringly crisp while retaining its tender, buttery crumb within. Store in an airtight jar to enjoy over weeks.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Melt Jaggery Syrup',
          instruction: 'Dissolve crushed dark jaggery in warm water over low flame without boiling, strain grit, and cool to lukewarm.'
        },
        {
          stepNum: 2,
          title: 'Incorporate the Moyen',
          instruction: 'Rub warm ghee into flour, semolina, cardamom, and sesame seeds with palms until breadcrumb texture forms.'
        },
        {
          stepNum: 3,
          title: 'Knead Dense Dough',
          instruction: 'Gradually add jaggery syrup to form a very tight dense dough; rest covered with a damp cloth 15 min.'
        },
        {
          stepNum: 4,
          title: 'Emboss and Shape',
          instruction: 'Shape oblong thick patties and press against a wicker basket or carved mold to emboss traditional ridges.'
        },
        {
          stepNum: 5,
          title: 'Slow Fry to Amber',
          instruction: 'Slow-fry on gentle low-medium heat 8–10 min until deep amber, then cool completely for signature snap.'
        }
      ],
      servingSuggestion: {
        text: 'Enjoy as a celebratory teatime confection or festive snack; as it cools, the exterior becomes brittle and crisp around a fragrant, cardamom-scented heart.',
        imageUrl: '/images/ct/khurmi.jpg'
      },
      vessel: 'Wicker Basket (Dauri) & Heavy Iron Kadai',
      cookingFat: 'Pure Desi Ghee or Groundnut Oil',
      season: 'Pola & Teeja Agrarian Festivals (Autumn)',
      flavorProfile: ["Deep Caramelized Jaggery Warmth", "Nutty Toasted Sesame Crunch", "Aromatic Cardamom Core", "Rich Buttery Crumb Snap"],
      dietary: 'Vegetarian',
      imageUrl: '/images/ct/khurmi.jpg',
      phonetic: 'KHOOR-mee'
      },
      {
      id: 'ct-gulgula',
      name: 'Gulgula',
      nativeName: 'गुलगुला',
      englishSubtitle: 'Fennel-Spiced Sweet Wheat Fritters',
      tagline: 'Crisp golden-amber miniature fritters of whole wheat and jaggery, bursting with crushed fennel seeds and airy crumb.',
      description: 'A timeless sweet comfort food woven into festive afternoons and community gatherings across Chhattisgarh, Gulgula is a rustic, deep-fried fritter cherished for its crisp, golden-amber crust and airy, pillowy crumb. Prepared with a simple batter of whole wheat flour, country jaggery (or raw sugar), and warm water, what truly distinguishes this treat is the generous inclusion of crushed sweet fennel seeds (saunf). The fragrant licorice aroma of the fennel cuts through the caramel sweetness of the jaggery, while also lending digestive warmth. Dropped by hand into bubbling oil or ghee, these miniature fritters puff into uneven spheres that deliver immediate nostalgia in every warm bite.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Village Courtyards & Festive Melas Across Chhattisgarh',
      culturalSignificance: 'The joyful heart of rural festive afternoons and weddings, fried fresh in iron cauldrons and shared warm in sal leaf cones.',
      servesCount: 'Yield: 15–20 fritters',
      approxPrepTime: '25 min; batter rest 20 min',
      ingredientSections: [
        {
          title: 'Flour & Licorice Fennel Batter',
          items: [
            { item: 'Whole wheat flour (gehun ka atta)', amount: '1.5 cups' },
            { item: 'Sweet fennel seeds (saunf)', amount: '1.5 tbsp', note: 'lightly bruised in a mortar' },
            { item: 'Green cardamom powder (elaichi)', amount: '1/2 tsp' },
            { item: 'Baking soda', amount: '1/4 tsp', note: 'optional, for extra lift' }
          ]
        },
        {
          title: 'Jaggery Water & Golden Frying',
          items: [
            { item: 'Dark country jaggery (gud)', amount: '3/4 cup', note: 'crushed (or raw sugar)' },
            { item: 'Warm water', amount: '3/4 cup', note: 'as needed to make drop-consistency batter' },
            { item: 'Ghee or neutral oil for deep frying', amount: 'as needed' }
          ]
        }
      ],
      ingredients: [
        { item: 'Whole wheat flour (gehun ka atta)', amount: '1.5 cups' },
        { item: 'Dark country jaggery (gud)', amount: '3/4 cup' },
        { item: 'Sweet fennel seeds (saunf)', amount: '1.5 tbsp', note: 'bruised' },
        { item: 'Green cardamom powder', amount: '1/2 tsp' },
        { item: 'Baking soda', amount: '1/4 tsp' },
        { item: 'Warm water', amount: '3/4 cup' },
        { item: 'Ghee or oil for frying', amount: 'as needed' }
      ],
      preparationSteps: [
        'In a bowl, dissolve the crushed jaggery completely in 3/4 cup of warm water. Strain through a fine tea strainer to eliminate any grit or impurities, then let it cool until just lukewarm.',
        'In a wide mixing bowl, combine the whole wheat flour, bruised fennel seeds, cardamom powder, and baking soda. Gradually pour in the jaggery water, whisking vigorously with your fingers or a whisk in one circular direction for 4 to 5 minutes to incorporate air. Aim for a thick, glossy, ribbon-like consistency that drops slowly from your fingers without being runny. Rest covered for 15–20 minutes.',
        'Heat sufficient ghee or oil in a deep, heavy-bottomed kadai over medium flame. Test temperature by dropping a tiny speck of batter; it should rise to the surface steadily without turning brown instantly. Lower heat to medium-low.',
        'Wet your fingers with a drop of water. Scoop small, walnut-sized mounds of batter and drop them carefully into the hot oil. They will sink briefly, then bob up to the surface and swell into round, puffed fritters.',
        'Fry on low-medium flame, turning them frequently with a slotted spoon for 5 to 7 minutes so the heat penetrates to the center. Once they turn a rich, glossy golden-brown on all sides, drain them onto absorbent kitchen paper.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Dissolve Jaggery',
          instruction: 'Dissolve dark jaggery in warm water, strain grit through a mesh, and cool to lukewarm.'
        },
        {
          stepNum: 2,
          title: 'Whip the Batter',
          instruction: 'Whisk flour, bruised fennel, cardamom, and soda with jaggery water in one direction 4–5 min to incorporate air; rest 20 min.'
        },
        {
          stepNum: 3,
          title: 'Drop Mounds by Hand',
          instruction: 'Drop walnut-sized dollops into medium-low oil using wet fingertips; watch them bob and puff into golden spheres.'
        },
        {
          stepNum: 4,
          title: 'Fry to Amber Gloss',
          instruction: 'Fry gently 5–7 min turning constantly until deep golden-brown, then drain on paper towels.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm straight from the pan, or let them cool to room temperature where the exterior settles into a crisp, caramelized shell around a spongy, sweet center.',
        imageUrl: '/images/ct/gulgula.jpg'
      },
      vessel: 'Heavy Cast Iron Kadai',
      cookingFat: 'Pure Desi Ghee or Cold-Pressed Oil',
      season: 'Festivals, Monsoons & Winter Evenings',
      flavorProfile: ["Caramelized Jaggery Sweetness", "Warm Licorice Fennel Scent", "Pillowy Spongy Crumb", "Crisp Amber Crust"],
      dietary: 'Vegetarian',
      imageUrl: '/images/ct/gulgula.jpg',
      phonetic: 'gool-GOO-lah'
      },
      {
      id: 'ct-chausela',
      name: 'Chausela',
      nativeName: 'चौसेला / चावल की पूरी',
      englishSubtitle: 'Crispy Chhattisgarhi Rice Flour Pooris',
      tagline: 'Scalded rice flour dough hand-patted into discs and deep-fried until ballooning into crisp, golden hollow domes.',
      description: 'While rice serves as the foundation for porridge and crepes in Chhattisgarh, Chausela—also known as Chousela or Chawal ki Poori—reimagines the staple grain as a golden, puffed flatbread. Essential to winter rituals, wedding feasts, and harvest holidays like Diwali and Chhath, this regional bread replaces conventional wheat dough with scalded rice flour kneaded into a velvety, workable mass. Flattened gently by hand and slipped into smoking oil, each poori balloons into a crisp, hollow dome with a delicate rice crunch that contrasts against a soft, pliable interior.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Rural Bastar & Chhattisgarhi Heartland Kitchens',
      culturalSignificance: 'The grand ceremonial flatbread of Diwali and Chhath in Chhattisgarh, celebrating newly harvested winter paddy.',
      servesCount: 'Yield: 8–10 pooris',
      approxPrepTime: '25 min',
      ingredientSections: [
        {
          title: 'Scalded Rice Flour Dough',
          items: [
            { item: 'Fine rice flour (chawal ka atta)', amount: '2 cups' },
            { item: 'Water', amount: '2 cups', note: 'brought to rolling boil' },
            { item: 'Cumin seeds (jeera) or carom seeds (ajwain)', amount: '1 tsp' },
            { item: 'Pure ghee or mustard oil', amount: '1 tbsp', note: 'for the dough' },
            { item: 'Salt to taste', amount: '1/2 tsp' }
          ]
        },
        {
          title: 'Hand Shaping & Deep Frying',
          items: [
            { item: 'Green chili', amount: '1', note: 'very finely minced, optional' },
            { item: 'Mustard oil or neutral oil for deep frying', amount: 'as needed' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fine rice flour (chawal ka atta)', amount: '2 cups' },
        { item: 'Water', amount: '2 cups' },
        { item: 'Cumin seeds (jeera) or ajwain', amount: '1 tsp' },
        { item: 'Pure ghee or mustard oil', amount: '1 tbsp' },
        { item: 'Green chili', amount: '1', note: 'minced' },
        { item: 'Salt', amount: '1/2 tsp' },
        { item: 'Mustard oil for frying', amount: 'as needed' }
      ],
      preparationSteps: [
        'Bring the 2 cups of water to a rolling boil in a heavy-bottomed pan. Add the cumin seeds, salt, green chili (if using), and a tablespoon of ghee or oil. Lower the flame and pour in the rice flour in a steady stream, stirring briskly with the handle of a wooden spoon to prevent lumps until the flour absorbs the liquid and pulls together into a rough mass. Turn off the flame, cover with a tight lid, and let it steam in its own residual heat for 10 minutes.',
        'While the dough is still warm to the touch, transfer it onto a wide platter or flat surface. Lightly grease your palms and knead the mixture vigorously for 4 to 5 minutes into a smooth, crack-free, pliable dough. Cover with a damp cloth.',
        'Pinch off lemon-sized portions of the dough and roll them into smooth balls. Lay a ball between two sheets of greased banana leaf, parchment, or plastic sheet. Using your fingertips or the flat base of a bowl, gently press and pat it outward into a small, uniform, 3-to-4-inch disc of medium thickness (avoid rolling with heavy pressure on a pin).',
        'Heat oil in a deep kadai over medium-high flame until hot. Slide in one shaped poori at a time. Press down very gently on the center with the back of a slotted spoon; the trapped steam will cause the poori to balloon completely into a rounded dome.',
        'Flip and fry for another 30 to 45 seconds until the outer surface turns pale golden and crisp with faint amber speckles. Lift out with a slotted spoon and drain on paper towels.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Scald the Rice Flour',
          instruction: 'Pour rice flour into boiling seasoned water with cumin and ghee; stir briskly into a ball and steam covered 10 min.'
        },
        {
          stepNum: 2,
          title: 'Knead While Warm',
          instruction: 'Knead warm dough with oiled palms 4–5 min into a velvety crack-free mass; keep covered with damp cloth.'
        },
        {
          stepNum: 3,
          title: 'Hand-Pat Discs',
          instruction: 'Pat lemon-sized balls into 3–4 inch discs between greased banana leaves with gentle fingertip pressure.'
        },
        {
          stepNum: 4,
          title: 'Balloon in Hot Oil',
          instruction: 'Slide into hot oil, press gently with slotted spoon to balloon into a hollow dome, flip, and fry until crisp pale golden.'
        }
      ],
      servingSuggestion: {
        text: 'Serve immediately while hot and puffed, paired traditionally with a rustic, spicy aloo ki sabzi (potato curry) and a stone-ground, tangy roasted tomato chutney (silbatta tamatar chutney).',
        imageUrl: '/images/ct/chausela.jpg'
      },
      vessel: 'Heavy Bottomed Pot & Deep Frying Kadai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Diwali, Chhath Puja & Winter Weddings',
      flavorProfile: ["Delicate Crispy Rice Shell", "Soft Steamy Hollow Interior", "Toasted Cumin Undertone", "Golden Savory Fragrance"],
      dietary: 'Vegan',
      imageUrl: '/images/ct/chausela.jpg',
      phonetic: 'chow-SAY-lah'
      }
    ]
  },
  as: {
    id: 'as',
    name: 'Assam',
    nativeName: 'অসম',
    capital: 'Dispur / Guwahati',
    region: 'North-East',
    historicalEra: 'Ahom Dynasty & Brahmaputra Wetland Civilization',
    culinaryPhilosophy: 'Clean, fluid, digestive gastronomy centered on wild foraging of greens (xaak), acidic broths (tenga) balanced by Kaji Nemu lemon, artisanal mashed dishes (pitika), and overnight wild fermented rice (poita bhaat).',
    heirloomVessels: ["Kahi Bati (Bell Metal Platter & Bowls)", "Mathani (Wooden Churner)", "Clay Handi"],
    signatureSpices: ["Kaji Nemu (Assam Lemon)", "Methi Guti (Fenugreek)", "Mitha Tel (Mustard Oil)", "Kola Khar", "Bhut Jolokia"],
    stapleGrains: ["Joha Rice (Aromatic Sticky Rice)", "Bora Saul (Sticky Rice)", "Arua Saul"],
    representativeDish: {
      id: 'as-masor-tenga',
      name: 'Masor Tenga',
      nativeName: 'মাছৰ টেঙা',
      englishSubtitle: 'Assamese Tangy Fish Broth',
      tagline: 'Light, rejuvenating Assamese sour fish broth tempered with fenugreek seeds, local tomatoes, and aromatic Kaji Nemu lemon.',
      description: 'A definitive cornerstone of Assamese culinary identity, Masor Tenga—literally translating to "sour fish"—is a light, rejuvenating broth crafted to bring respite from humid summer afternoons. Unlike rich, cream-laden or nut-thickened gravies, this preparation is kept deliberately thin, pale, and fluid, focusing squarely on the natural sweet oiliness of fresh river fish balanced by clean acidity. While sun-dried mangosteen (thekera), elephant apple (ou tenga), or raw mango frequently take center stage, everyday home kitchens rely on juicy local tomatoes and a brisk squeeze of fresh kaji nemu (Assam lemon). Cooked in cold-pressed mustard oil, the soul of the broth lies in a sparse tempering of fenugreek seeds, which imparts a subtle, earthy bitterness that balances the sour broth.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Brahmaputra River Valley, Assam',
      culturalSignificance: 'The crown jewel of everyday Assamese dining, providing pure digestive comfort and hydration during humid tropical months.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '20 min',
      ingredientSections: [
        {
          title: 'Fresh River Carp & Acidic Base',
          items: [
            { item: 'Freshwater carp steaks (rohu / rou machh)', amount: '500 g', note: 'cleaned' },
            { item: 'Ripe local tomatoes', amount: '60 g', note: 'roughly chopped' },
            { item: 'Fresh lime or Assam lemon (kaji nemu) juice', amount: '10 ml' }
          ]
        },
        {
          title: 'Tempering & Clean Aromatics',
          items: [
            { item: 'Red onion', amount: '50 g', note: 'finely chopped' },
            { item: 'Ginger-garlic paste', amount: '20 g' },
            { item: 'Fresh green chilies', amount: '15 g', note: 'slit lengthwise' },
            { item: 'Fenugreek seeds (methi guti)', amount: 'a generous pinch' },
            { item: 'Turmeric powder (halodhi)', amount: '5 g' },
            { item: 'Cold-pressed mustard oil (mitha tel)', amount: '50 g' },
            { item: 'Fresh coriander leaves', amount: '20 g', note: 'finely chopped' },
            { item: 'Warm water & salt', amount: '1 to 1.5 cups water, salt to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Freshwater carp steaks (rohu / rou machh)', amount: '500 g' },
        { item: 'Ripe local tomatoes', amount: '60 g' },
        { item: 'Assam lemon (kaji nemu) or lime juice', amount: '10 ml' },
        { item: 'Fenugreek seeds (methi guti)', amount: 'a pinch' },
        { item: 'Red onion & ginger-garlic paste', amount: '50 g onion, 20 g paste' },
        { item: 'Green chilies & coriander', amount: '15 g chilies, 20 g coriander' },
        { item: 'Mustard oil (mitha tel)', amount: '50 g' },
        { item: 'Turmeric (halodhi) & Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Pat the cleaned rohu steaks dry. Rub them with a pinch of turmeric powder and salt, letting them rest for 10 minutes. Heat the mustard oil in a wide, heavy pan until it begins to smoke lightly. Slide in the fish pieces and shallow-fry over medium flame until pale golden and lightly firmed on both sides. Drain and set aside.',
        'In the same warm oil, lower the flame and toss in the fenugreek seeds. Allow them to sizzle for barely a few seconds until fragrant—taking care not to let them scorch. Add the chopped onions and sauté over medium heat until translucent and lightly browned.',
        'Add the ginger-garlic paste, remaining turmeric powder, and slit green chilies. Sauté for a minute until the raw edge mellows. Toss in the chopped tomatoes with a pinch of salt; cover and simmer for 2 minutes until the tomatoes soften and collapse into a loose sauce.',
        'Pour in a cup of warm water and bring the light broth to a brisk rolling boil. Gently slip the seared fish steaks into the liquid. Cover the pan and let it simmer on medium flame for 3 to 4 minutes, allowing the fish to absorb the light tang of the tomato while enriching the broth.',
        'Turn off the flame. Drizzle the fresh lime juice over the broth and scatter chopped coriander leaves across the top. Cover tightly for 2 minutes off the heat so the herbal aromatics infuse.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Shallow-Fry the Fish',
          instruction: 'Rub carp steaks with turmeric and salt; flash-fry in smoking mustard oil until pale golden, then drain.'
        },
        {
          stepNum: 2,
          title: 'Temper Fenugreek & Onions',
          instruction: 'Sizzle fenugreek seeds for seconds without scorching, then sauté onions until translucent golden.'
        },
        {
          stepNum: 3,
          title: 'Build the Light Tomato Base',
          instruction: 'Add ginger-garlic paste, green chilies, turmeric, and chopped tomatoes; simmer until tomatoes collapse.'
        },
        {
          stepNum: 4,
          title: 'Simmer the Broth',
          instruction: 'Add warm water, bring to rolling boil, slip in fish steaks, and simmer covered 3–4 minutes.'
        },
        {
          stepNum: 5,
          title: 'Kaji Nemu Finish',
          instruction: 'Turn off flame, drizzle fresh Assam lemon juice, scatter coriander, and cover 2 minutes to infuse.'
        }
      ],
      servingSuggestion: {
        text: 'Ladle hot into wide bowls over mounds of steaming joha or long-grain white rice, letting the clean, palate-cleansing broth soak through every bite.',
        imageUrl: '/images/as/masor_tenga.jpg'
      },
      vessel: 'Wide Heavy Enameled Pan or Kadhai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil (Mitha Tel)',
      season: 'Spring to Monsoon (High Summer Heat)',
      flavorProfile: ["Clean Bright Citrus Acidity", "Fragrant Kaji Nemu Aroma", "Subtle Bitter Fenugreek Note", "Sweet River Carp Fat"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/as/masor_tenga.jpg',
      phonetic: 'MAH-xor TENG-ah'
    },
    dishes: [
      {
      id: 'as-masor-tenga',
      name: 'Masor Tenga',
      nativeName: 'মাছৰ টেঙা',
      englishSubtitle: 'Assamese Tangy Fish Broth',
      tagline: 'Light, rejuvenating Assamese sour fish broth tempered with fenugreek seeds, local tomatoes, and aromatic Kaji Nemu lemon.',
      description: 'A definitive cornerstone of Assamese culinary identity, Masor Tenga—literally translating to "sour fish"—is a light, rejuvenating broth crafted to bring respite from humid summer afternoons. Unlike rich, cream-laden or nut-thickened gravies, this preparation is kept deliberately thin, pale, and fluid, focusing squarely on the natural sweet oiliness of fresh river fish balanced by clean acidity. While sun-dried mangosteen (thekera), elephant apple (ou tenga), or raw mango frequently take center stage, everyday home kitchens rely on juicy local tomatoes and a brisk squeeze of fresh kaji nemu (Assam lemon). Cooked in cold-pressed mustard oil, the soul of the broth lies in a sparse tempering of fenugreek seeds, which imparts a subtle, earthy bitterness that balances the sour broth.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Brahmaputra River Valley, Assam',
      culturalSignificance: 'The crown jewel of everyday Assamese dining, providing pure digestive comfort and hydration during humid tropical months.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '20 min',
      ingredientSections: [
        {
          title: 'Fresh River Carp & Acidic Base',
          items: [
            { item: 'Freshwater carp steaks (rohu / rou machh)', amount: '500 g', note: 'cleaned' },
            { item: 'Ripe local tomatoes', amount: '60 g', note: 'roughly chopped' },
            { item: 'Fresh lime or Assam lemon (kaji nemu) juice', amount: '10 ml' }
          ]
        },
        {
          title: 'Tempering & Clean Aromatics',
          items: [
            { item: 'Red onion', amount: '50 g', note: 'finely chopped' },
            { item: 'Ginger-garlic paste', amount: '20 g' },
            { item: 'Fresh green chilies', amount: '15 g', note: 'slit lengthwise' },
            { item: 'Fenugreek seeds (methi guti)', amount: 'a generous pinch' },
            { item: 'Turmeric powder (halodhi)', amount: '5 g' },
            { item: 'Cold-pressed mustard oil (mitha tel)', amount: '50 g' },
            { item: 'Fresh coriander leaves', amount: '20 g', note: 'finely chopped' },
            { item: 'Warm water & salt', amount: '1 to 1.5 cups water, salt to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Freshwater carp steaks (rohu / rou machh)', amount: '500 g' },
        { item: 'Ripe local tomatoes', amount: '60 g' },
        { item: 'Assam lemon (kaji nemu) or lime juice', amount: '10 ml' },
        { item: 'Fenugreek seeds (methi guti)', amount: 'a pinch' },
        { item: 'Red onion & ginger-garlic paste', amount: '50 g onion, 20 g paste' },
        { item: 'Green chilies & coriander', amount: '15 g chilies, 20 g coriander' },
        { item: 'Mustard oil (mitha tel)', amount: '50 g' },
        { item: 'Turmeric (halodhi) & Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Pat the cleaned rohu steaks dry. Rub them with a pinch of turmeric powder and salt, letting them rest for 10 minutes. Heat the mustard oil in a wide, heavy pan until it begins to smoke lightly. Slide in the fish pieces and shallow-fry over medium flame until pale golden and lightly firmed on both sides. Drain and set aside.',
        'In the same warm oil, lower the flame and toss in the fenugreek seeds. Allow them to sizzle for barely a few seconds until fragrant—taking care not to let them scorch. Add the chopped onions and sauté over medium heat until translucent and lightly browned.',
        'Add the ginger-garlic paste, remaining turmeric powder, and slit green chilies. Sauté for a minute until the raw edge mellows. Toss in the chopped tomatoes with a pinch of salt; cover and simmer for 2 minutes until the tomatoes soften and collapse into a loose sauce.',
        'Pour in a cup of warm water and bring the light broth to a brisk rolling boil. Gently slip the seared fish steaks into the liquid. Cover the pan and let it simmer on medium flame for 3 to 4 minutes, allowing the fish to absorb the light tang of the tomato while enriching the broth.',
        'Turn off the flame. Drizzle the fresh lime juice over the broth and scatter chopped coriander leaves across the top. Cover tightly for 2 minutes off the heat so the herbal aromatics infuse.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Shallow-Fry the Fish',
          instruction: 'Rub carp steaks with turmeric and salt; flash-fry in smoking mustard oil until pale golden, then drain.'
        },
        {
          stepNum: 2,
          title: 'Temper Fenugreek & Onions',
          instruction: 'Sizzle fenugreek seeds for seconds without scorching, then sauté onions until translucent golden.'
        },
        {
          stepNum: 3,
          title: 'Build the Light Tomato Base',
          instruction: 'Add ginger-garlic paste, green chilies, turmeric, and chopped tomatoes; simmer until tomatoes collapse.'
        },
        {
          stepNum: 4,
          title: 'Simmer the Broth',
          instruction: 'Add warm water, bring to rolling boil, slip in fish steaks, and simmer covered 3–4 minutes.'
        },
        {
          stepNum: 5,
          title: 'Kaji Nemu Finish',
          instruction: 'Turn off flame, drizzle fresh Assam lemon juice, scatter coriander, and cover 2 minutes to infuse.'
        }
      ],
      servingSuggestion: {
        text: 'Ladle hot into wide bowls over mounds of steaming joha or long-grain white rice, letting the clean, palate-cleansing broth soak through every bite.',
        imageUrl: '/images/as/masor_tenga.jpg'
      },
      vessel: 'Wide Heavy Enameled Pan or Kadhai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil (Mitha Tel)',
      season: 'Spring to Monsoon (High Summer Heat)',
      flavorProfile: ["Clean Bright Citrus Acidity", "Fragrant Kaji Nemu Aroma", "Subtle Bitter Fenugreek Note", "Sweet River Carp Fat"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/as/masor_tenga.jpg',
      phonetic: 'MAH-xor TENG-ah'
      },
      {
      id: 'as-poita-bhaat',
      name: 'Poita Bhaat',
      nativeName: 'পইতা ভাত',
      englishSubtitle: 'Fermented Summer Rice with Aromatic Accoutrements',
      tagline: 'Ancient wild lactic-fermented summer rice submerged in refreshing poita pani with raw mustard oil, onions, and spicy aloo pitika.',
      description: 'The ultimate summer cooler of the Brahmaputra Valley, Poita Bhaat is an ancient, agrarian staple that harnesses the gentle magic of wild fermentation. Akin to Odisha\'s Basi Pakhala and Bengal\'s Panta Bhaat, it repurposes leftover evening rice by submerging it in fresh water and letting it rest overnight. By dawn, natural lactic fermentation breaks down complex starches, softening the grains and imparting a faint, thirst-quenching sourness packed with bioavailable nutrients and probiotics. Kept unadorned and served chilled or at room temperature, its brilliance lies in elemental assembly—paired with raw pungency and a sharp side of mashed comfort.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Brahmaputra Valley Agrarian Homesteads, Assam',
      culturalSignificance: 'The cultural soul of agrarian Assamese mornings and Rongali Bihu celebrations, delivering sustained cooling energy for farming life.',
      servesCount: 'Yield: 2–3 servings',
      approxPrepTime: 'Active 10 min; overnight ferment 8–10 hrs',
      ingredientSections: [
        {
          title: 'Overnight Fermented Grains',
          items: [
            { item: 'Cooked white rice', amount: '1 cup', note: 'country short-grain variety, not basmati' },
            { item: 'Clean drinking water', amount: '2 to 3 cups', note: 'enough to submerge fully' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        },
        {
          title: 'Raw Aromatics & Pungent Oil',
          items: [
            { item: 'Small red onion', amount: '1', note: 'roughly chopped or sliced into rings' },
            { item: 'Fresh green chilies', amount: '2', note: 'slit or crushed' },
            { item: 'Raw cold-pressed mustard oil (mitha tel)', amount: '1 tbsp' },
            { item: 'Aloo Pitika (mashed potato with mustard oil)', amount: '1 portion', note: 'to serve alongside' }
          ]
        }
      ],
      ingredients: [
        { item: 'Cooked country white rice', amount: '1 cup' },
        { item: 'Clean drinking water', amount: '2–3 cups' },
        { item: 'Red onion', amount: '1 small' },
        { item: 'Green chilies', amount: '2' },
        { item: 'Raw mustard oil (mitha tel)', amount: '1 tbsp' },
        { item: 'Aloo Pitika', amount: '1 portion', note: 'accompaniment' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Transfer the freshly cooked and cooled leftover rice into a clean earthenware, ceramic, or stainless-steel bowl. Pour in enough drinking water to cover the grains by at least an inch. Cover loosely with a plate and set it aside in a cool, quiet corner at room temperature overnight (8 to 10 hours).',
        'By morning, the rice grains will be soft and yielding, and the water (poita pani) will have developed a milky cast and a clean, refreshing tang. Stir in a generous pinch of salt using your fingers or a spoon.',
        'Scatter the roughly chopped raw red onion and slit green chilies directly over the soaked rice. Finish with an unheated swirl of raw, pungent mustard oil across the surface of the water.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Overnight Submergence',
          instruction: 'Submerge cooked cooled rice under 2–3 cups water in an earthen or ceramic bowl; rest loosely covered 8–10 hours.'
        },
        {
          stepNum: 2,
          title: 'Season with Salt',
          instruction: 'Stir in a generous pinch of salt into the milky tangy poita pani with fingers or spoon.'
        },
        {
          stepNum: 3,
          title: 'Garnish with Raw Pungency',
          instruction: 'Scatter sliced raw red onion rings, crushed green chilies, and a golden swirl of raw unheated mustard oil.'
        }
      ],
      servingSuggestion: {
        text: 'Serve cold in wide rimmed bowls, eaten by hand alongside a warm sphere of rustic Aloo Pitika or roasted dried fish for a deeply grounding, cooling morning meal.',
        imageUrl: '/images/as/poita_bhaat.jpg'
      },
      vessel: 'Clay Handi or Ceramic Bowl (Kahi Bati)',
      cookingFat: 'Pure Raw Cold-Pressed Mustard Oil (Unheated)',
      season: 'Peak Summer & Bohag Bihu (April – July)',
      flavorProfile: ["Refreshing Lactic Rice Tang", "Milky Probiotic Poita Pani", "Raw Mustard Oil Sinus Pungency", "Sweet Crisp Onion Crunch"],
      dietary: 'Vegan',
      imageUrl: '/images/as/poita_bhaat.jpg',
      phonetic: 'poy-TAH BHAHT'
      },
      {
      id: 'as-kesa-kolor-pitika',
      name: 'Kesa Kolor Pitika',
      nativeName: 'কেঁচা কলৰ পিটিকা',
      englishSubtitle: 'Spiced Raw Banana Mash',
      tagline: 'Green plantains boiled in their skins, hand-mashed into a velvety balm with raw mustard oil, red onions, and green chilies.',
      description: 'Pitika represents the heart of Assamese comfort cooking—an artisanal tradition of mashing vegetables, tubers, or roasted fish with nothing more than raw mustard oil, pungent aromatics, and bare seasoning. Kesa Kolor Pitika takes green, unripened plantains and turns them into a velvety, soothing side dish. In traditional food wisdom, raw banana is prized for its digestive, cooling nature, providing a hearty, starchy ballast that remains light on the stomach during sultry months. Boiling the fruit in its natural green jacket seals in moisture while preserving an earthy, garden-fresh undertone.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Rural Assamese Kitchens & Backyard Groves',
      culturalSignificance: 'The archetypal soul food of Assam, turning backyard plantains into digestive comfort with hand-massaged raw mustard oil.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '20 min',
      ingredientSections: [
        {
          title: 'Tender Green Plantains',
          items: [
            { item: 'Green raw cooking bananas / plantains (kesa kol)', amount: '3 medium', note: 'boiled in their green jackets' }
          ]
        },
        {
          title: 'Hand Emulsion & Aromatics',
          items: [
            { item: 'Red onion', amount: '80 g', note: 'very finely chopped' },
            { item: 'Fresh green chilies', amount: '15 g', note: 'minced' },
            { item: 'Fresh coriander leaves', amount: '20 g', note: 'finely chopped' },
            { item: 'Pure cold-pressed mustard oil (mitha tel)', amount: '15 ml' },
            { item: 'Coarse red chili flakes', amount: 'a pinch', note: 'optional' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Raw cooking bananas (kesa kol)', amount: '3 medium' },
        { item: 'Red onion', amount: '80 g', note: 'finely chopped' },
        { item: 'Green chilies', amount: '15 g', note: 'minced' },
        { item: 'Fresh coriander leaves', amount: '20 g' },
        { item: 'Pure mustard oil (mitha tel)', amount: '15 ml' },
        { item: 'Red chili flakes & salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Wash the raw bananas thoroughly, trimming only the extreme woody tips while keeping the skin intact. Place them in a pot of water (or pressure cooker with water) and boil until fork-tender (approx. 1 whistle on medium flame in a pressure cooker).',
        'Remove the boiled plantains from the water and let them cool until comfortable to handle. Slit the softened green peel lengthwise and strip it off cleanly; the fruit beneath will be steamy, tender, and concentrated in flavor without being waterlogged.',
        'Transfer the boiled plantains to a wide shallow bowl. Mash thoroughly using a fork or the palm of your hand until smooth, leaving just a few coarse, rustic bits for textural bite.',
        'Add the finely chopped red onions, minced green chilies, fresh coriander leaves, red chili flakes, and salt to the mashed banana.',
        'Pour the raw mustard oil directly over the mixture. Knead and fold the ingredients together vigorously with your fingers, allowing the sharp, sinus-clearing oil to emulsify with the warm, starchy banana.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Boil in Jackets',
          instruction: 'Boil unpeeled plantains until fork-tender (1 whistle in pressure cooker) to seal in earthy moisture.'
        },
        {
          stepNum: 2,
          title: 'Strip and Mash',
          instruction: 'Strip off softened peel cleanly; mash steamy fruit with hands or fork into a smooth yet rustic texture.'
        },
        {
          stepNum: 3,
          title: 'Fold Aromatics',
          instruction: 'Mix in finely chopped red onions, green chilies, fresh coriander, chili flakes, and salt.'
        },
        {
          stepNum: 4,
          title: 'Hand-Emulsify with Mustard Oil',
          instruction: 'Pour raw cold-pressed mustard oil directly on warm mash; knead vigorously with fingers into a velvety emulsion.'
        }
      ],
      servingSuggestion: {
        text: 'Serve at room temperature shaped into a rustic mound, paired with hot steamed rice, yellow dal, or as a cooling side to Poita Bhaat.',
        imageUrl: '/images/as/kesa_kolor_pitika.jpg'
      },
      vessel: 'Earthen Bowl or Bell Metal Platter',
      cookingFat: 'Pure Cold-Pressed Mustard Oil (Raw Unheated)',
      season: 'All Seasons / Therapeutic Comfort',
      flavorProfile: ["Velvety Starchy Banana Sweetness", "Sharp Sinus-Clearing Raw Mustard Kick", "Crisp Red Onion Crunch", "Fresh Coriander Vibrance"],
      dietary: 'Vegan',
      imageUrl: '/images/as/kesa_kolor_pitika.jpg',
      phonetic: 'KAY-sah KOH-lor pee-TEE-kah'
      },
      {
      id: 'as-amlu',
      name: 'Amlu',
      nativeName: 'আমলু',
      englishSubtitle: 'Thin Masoor Dal Soup with Green Mango',
      tagline: 'Palate-cleansing, thin red lentil soup steeped with tart green raw mango spears and crackled black mustard seeds.',
      description: 'When summer temperatures climb across the plains of Assam, Amlu—a pale, tangy red lentil broth steeped with tart slices of green raw mango—arrives as liquid relief. Unassuming in appearance and free of heavy spices or thick purees, this dish functions almost like a tonic or a palate-cleansing first course. The lentils dissolve completely to give the broth gentle body and protein, while the simmered raw mango yields an unadulterated, thirst-quenching sourness. Lightly tempered with nothing more than crackling mustard seeds, it prioritizes pure refreshment over ornate seasoning.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Brahmaputra Valley Plains & Homestead Orchards',
      culturalSignificance: 'The quintessential summer tonic of Assam, cooling the blood and reviving appetites during sultry midday meals.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '20 min',
      ingredientSections: [
        {
          title: 'Tender Lentils & Tart Raw Mango',
          items: [
            { item: 'Split red lentils (masoor dal)', amount: '1/2 cup' },
            { item: 'Sour raw mango (kesa aam)', amount: '1 small', note: 'peeled, deseeded, cut into slender spears' },
            { item: 'Water', amount: '3 cups', note: 'for a thin soup-like consistency' },
            { item: 'Turmeric powder (halodhi)', amount: '1/2 tsp' }
          ]
        },
        {
          title: 'Minimal Mustard Chhunk',
          items: [
            { item: 'Whole black mustard seeds (sarson / rai)', amount: '1/2 tsp' },
            { item: 'Cold-pressed mustard oil', amount: '1 tsp' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Split red lentils (masoor dal)', amount: '1/2 cup' },
        { item: 'Sour raw mango (kesa aam)', amount: '1 small', note: 'spears' },
        { item: 'Mustard seeds (sarson / rai)', amount: '1/2 tsp' },
        { item: 'Mustard oil', amount: '1 tsp' },
        { item: 'Turmeric (halodhi) & Salt', amount: '1/2 tsp turmeric, salt to taste' },
        { item: 'Water', amount: '3 cups' }
      ],
      preparationSteps: [
        'Rinse the red lentils thoroughly in cold water. In a pressure cooker or deep pot, combine the lentils with 3 cups of water, turmeric powder, and salt. Pressure-cook over medium flame for 3 whistles (or simmer uncovered until completely collapsed).',
        'Whisk the cooked dal vigorously with a traditional wooden churner (mathani) or wire whisk until completely smooth and homogenous. The consistency should be thin, fluid, and soup-like.',
        'Return the pot of whisked dal to medium-low heat. Drop in the raw mango slices. Simmer gently for 5 to 7 minutes until the mango wedges are tender and pliable yet still hold their shape, allowing their tart juices to seep into the lentil base. Season with additional salt if needed.',
        'In a small ladle or pan, heat a teaspoon of mustard oil until smoking. Reduce heat, toss in the black mustard seeds, and let them crackle briskly. Pour the sizzling seeds and fragrant oil directly into the simmering dal pot. Cover immediately with a lid to trap the smoky perfume.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Pressure-Cook Lentils',
          instruction: 'Cook red lentils with water, turmeric, and salt for 3 whistles until completely collapsed.'
        },
        {
          stepNum: 2,
          title: 'Churn into Broth',
          instruction: 'Whisk vigorously with a wooden mathani into a completely smooth, thin, soup-like consistency.'
        },
        {
          stepNum: 3,
          title: 'Simmer with Raw Mango',
          instruction: 'Simmer raw mango spears in the broth for 5–7 min until tender yet holding shape, infusing tart juices.'
        },
        {
          stepNum: 4,
          title: 'Sizzle Mustard Seeds',
          instruction: 'Crackle black mustard seeds in hot mustard oil, pour sizzling temper into broth, and trap aroma with lid.'
        }
      ],
      servingSuggestion: {
        text: 'Ladle warm into shallow bowls and sip as a restorative starter, or pour generously over plain white rice at the beginning of a mid-day meal.',
        imageUrl: '/images/as/amlu.jpg'
      },
      vessel: 'Brass Handi & Wooden Churner (Mathani)',
      cookingFat: 'Cold-Pressed Mustard Oil (1 tsp)',
      season: 'Peak Summer (Mango Harvest Season)',
      flavorProfile: ["Thirst-Quenching Raw Mango Tartness", "Silky Thin Lentil Broth", "Smoky Crackled Mustard Seeds", "Pure Palate-Cleansing Refreshment"],
      dietary: 'Vegan',
      imageUrl: '/images/as/amlu.jpg',
      phonetic: 'AHM-loo'
      },
      {
      id: 'as-lai-xaak-bhaja',
      name: 'Lai Xaak Bhaja',
      nativeName: 'লাই শাক ভাজা',
      englishSubtitle: 'Stir-Fried Peppery Red Mustard Greens',
      tagline: 'Tender winter broad-leafed red mustard greens flash-seared in smoking mustard oil with dried red chilies and asafoetida.',
      description: 'Leafy greens (xaak) are indispensable to the Assamese table, woven into meals as an everyday celebration of seasonality. Lai Xaak—peppery, broad-leafed red mustard greens—is treasured for its bold, faintly bitter bite and rich natural water content. While many green preparations call for ginger and garlic, traditional Lai Xaak Bhaja embraces restraint: finely shredded leaves, smoking mustard oil, a whisper of asafoetida, and whole dried red chilies. The secret lies in a high-heat sear followed by a slow, covered braise in its own rendered moisture, cooking the greens tender in just minutes while locking in their mineral vitality.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Kitchen Gardens & River Islands (Chars) of Assam',
      culturalSignificance: 'The beloved winter green of Assam, celebrated during Magh Bihu feasts for its brisk peppery vitality.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Tender Peppery Greens',
          items: [
            { item: 'Fresh tender red mustard greens (lai xaak)', amount: '400 g', note: 'washed and finely shredded' },
            { item: 'Turmeric powder (halodhi)', amount: '1/2 tsp' },
            { item: 'Red chili powder', amount: '1/2 tsp' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        },
        {
          title: 'Aromatic High-Heat Temper',
          items: [
            { item: 'Whole dried red chilies (sukha lanka)', amount: '4 g', note: 'snapped into halves' },
            { item: 'Asafoetida (hing)', amount: 'a pinch' },
            { item: 'Pure cold-pressed mustard oil (mitha tel)', amount: '25 ml' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh red mustard greens (lai xaak)', amount: '400 g' },
        { item: 'Dried red chilies (sukha lanka)', amount: '4 g' },
        { item: 'Asafoetida (hing)', amount: 'a pinch' },
        { item: 'Mustard oil (mitha tel)', amount: '25 ml' },
        { item: 'Turmeric & red chili powder', amount: '1/2 tsp each' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Trim off the tough, fibrous root bases and thick lower stems from the greens. Wash the tender leaves thoroughly in multiple changes of cold water to rid them of river silt. Shake off excess moisture. Gather the leaves into tight bundles on a chopping board and slice them into whisper-thin shreds—the finer the cut, the silkier and more cohesive the final stir-fry.',
        'Set a heavy cast-iron kadai or thick-bottomed wok over high heat. Pour in the mustard oil and heat until it hits smoking point, then drop the flame to low. Add the broken dried red chilies and fry for 10 seconds until they turn a glossy, toasted dark mahogany. Add the asafoetida and let it bloom for 5 seconds.',
        'Turn the heat up to medium-high and slide in the finely shredded greens in handfuls. Toss briskly with a spatula to coat every ribbon in the chili-infused oil.',
        'Sprinkle the turmeric powder, red chili powder, and salt over the greens. Toss again as the leaves begin to collapse and release their natural ruby-green juices. Cover the wok with a tight lid, reduce the flame to low, and let the greens braise in their own steam for 10 to 12 minutes, stirring every few minutes.',
        'Uncover the pan. Turn the heat to medium for the final 1 to 2 minutes, stirring continuously until all rendered water evaporates completely and the greens glisten in the scented oil without being mushy.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Wash and Fine-Shred',
          instruction: 'Trim thick stems, rinse river silt thoroughly, bundle leaves, and slice into whisper-thin shreds.'
        },
        {
          stepNum: 2,
          title: 'Sear the Aromatics',
          instruction: 'Heat mustard oil to smoking point; toast dried red chilies to dark mahogany and bloom asafoetida for 5 sec.'
        },
        {
          stepNum: 3,
          title: 'Toss on High Flame',
          instruction: 'Slide in shredded greens, tossing briskly over medium-high heat to coat in chili-infused oil.'
        },
        {
          stepNum: 4,
          title: 'Steam in Rendered Juices',
          instruction: 'Season with turmeric, chili powder, and salt; cover and braise on low flame 10–12 min in its own moisture.'
        },
        {
          stepNum: 5,
          title: 'Dry-Fry to Glisten',
          instruction: 'Uncover and stir-fry 1–2 min on medium flame until rendered juices evaporate and greens glisten.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm straight from the wok alongside hot steamed rice and a simple bowl of lentils.',
        imageUrl: '/images/as/lai_xaak_bhaja.jpg'
      },
      vessel: 'Heavy Cast-Iron Wok (Karahi)',
      cookingFat: 'Pure Cold-Pressed Mustard Oil (Mitha Tel)',
      season: 'Winter (Magh Bihu Harvest Season)',
      flavorProfile: ["Bold Peppery Mustard Greens", "Smoky Toasted Red Chili Heat", "Subtle Savory Hing Undertone", "Silky Mineral-Rich Texture"],
      dietary: 'Vegan',
      imageUrl: '/images/as/lai_xaak_bhaja.jpg',
      phonetic: 'LYE ZHAHK BHAH-jah'
      }
    ]
  },
  tn: {
    id: 'tn',
    name: 'Tamil Nadu',
    nativeName: 'தமிழ்நாடு',
    capital: 'Chennai',
    region: 'South',
    historicalEra: 'Sangam Era & Kongu Agricultural Heritage',
    culinaryPhilosophy: 'Preservation of wild seasonal greens, healing herbal preparations, cooling overnight fermented rice porridges, and coconut-tempered poriyals reflecting ancient Siddha balanced sustenance.',
    heirloomVessels: ['Vengala Paanai (Bronze Pot)', 'Mankalathil (Earthen Clay Pot)', 'Ammikkal (Stone Grinder)'],
    signatureSpices: ['Cold-Pressed Gingelly Oil', 'Mustard Seeds', 'Whole Dried Red Chillies', 'Curry Leaves', 'Turmeric'],
    stapleGrains: ['Ponni Rice', 'Kavuni Arisi (Black Rice)', 'Thinai (Foxtail Millet)'],
    representativeDish: {
      id: 'tn-manathakkali-keerai-poriyal',
      name: 'Manathakkali Keerai Poriyal',
      nativeName: 'மணத்தக்காளி கீரை பொரியல்',
      englishSubtitle: 'Seasonal Greens Stir-Fry',
      tagline: 'Tender heirloom black nightshade greens gently tempered with mustard seeds, dried chilli & fresh grated coconut.',
      description: 'Manathakkali (black nightshade) greens appear in traditional Tamil home kitchens valued for their cooling, digestive properties. In this simple poriyal, tender cleaned greens are gently cooked with mustard seeds, red chilli, and a pinch of turmeric, then finished with freshly grated coconut to balance the subtle medicinal bitterness of the leaves.',
      preservationStatus: 'Traditional Dish',
      microOrigin: 'Thanjavur, Madurai & Kongu Nadu Home Kitchens',
      culturalSignificance: 'Celebrated in Siddha and Tamil culinary medicine for soothing stomach ulcers and cooling the body during blistering tropical heat.',
      servesCount: 'Serves 2–3',
      approxPrepTime: '20 minutes',
      ingredientSections: [
        {
          title: 'Heirloom Greens & Aromatics',
          items: [
            { item: 'Cleaned edible manathakkali greens, chopped', amount: '2 cups' },
            { item: 'Small onion, finely chopped', amount: '1 small', note: 'optional' }
          ]
        },
        {
          title: 'Tempering & Spices',
          items: [
            { item: 'Cold-pressed oil', amount: '1 tsp' },
            { item: 'Mustard seeds', amount: '1/2 tsp' },
            { item: 'Dried red chilli', amount: '1 whole' },
            { item: 'Turmeric powder', amount: 'pinch' },
            { item: 'Salt', amount: 'to taste' }
          ]
        },
        {
          title: 'Finishing',
          items: [
            { item: 'Freshly grated coconut', amount: '2 tbsp' }
          ]
        }
      ],
      ingredients: [
        { item: 'Cleaned edible manathakkali greens, chopped', amount: '2 cups' },
        { item: 'Cold-pressed oil', amount: '1 tsp' },
        { item: 'Mustard seeds', amount: '1/2 tsp' },
        { item: 'Dried red chilli', amount: '1' },
        { item: 'Small onion, chopped', amount: '1 small, optional' },
        { item: 'Fresh grated coconut', amount: '2 tbsp' },
        { item: 'Salt and pinch of turmeric', amount: 'to taste' }
      ],
      preparationSteps: [
        'Wash the greens thoroughly in several changes of clean water and drain well.',
        'Heat oil in a pan; splutter mustard seeds and add broken dried red chilli and chopped onion if using.',
        'Add the chopped greens, turmeric, salt, and a splash of water. Cover and cook for 5–8 minutes until tender.',
        'Uncover and cook off excess moisture. Stir in freshly grated coconut, remove from heat, and serve warm with steamed rice.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Clean & Drain Greens',
          instruction: 'Wash manathakkali greens thoroughly in water to remove garden grit and drain well.'
        },
        {
          stepNum: 2,
          title: 'Fragrant Tempering',
          instruction: 'Heat oil, splutter mustard seeds, and sauté dried red chilli and chopped onion until fragrant.'
        },
        {
          stepNum: 3,
          title: 'Gentle Steam',
          instruction: 'Add chopped greens, turmeric, salt, and a splash of water; cover and cook for 5–8 minutes until tender.'
        },
        {
          stepNum: 4,
          title: 'Coconut Finish',
          instruction: 'Uncover to evaporate excess moisture, fold in freshly grated coconut, and serve.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm as a nourishing side dish alongside steamed Ponni rice, rustic paruppu (lentils), and hot milagu rasam.',
        imageUrl: '/images/tn/manathakkali_keerai_poriyal.jpg'
      },
      vessel: 'Vengala Paanai or Heavy Iron Vaanali',
      cookingFat: 'Cold-Pressed Gingelly (Sesame) Oil',
      season: 'Monsoon & Post-Harvest Months',
      flavorProfile: ['Subtle Earthy Bitterness', 'Nutty Sweet Coconut', 'Mustard Sizzle', 'Mild Chilli Warmth'],
      dietary: 'Vegetarian',
      imageUrl: '/images/tn/manathakkali_keerai_poriyal.jpg',
      phonetic: 'Mah-nah-thah-KAH-li KEE-rye Poh-ree-YAHL'
    },
    dishes: [
      {
        id: 'tn-manathakkali-keerai-poriyal',
        name: 'Manathakkali Keerai Poriyal',
        nativeName: 'மணத்தக்காளி கீரை பொரியல்',
        englishSubtitle: 'Seasonal Greens Stir-Fry',
        tagline: 'Tender heirloom black nightshade greens gently tempered with mustard seeds, dried chilli & fresh grated coconut.',
        description: 'Manathakkali (black nightshade) greens appear in traditional Tamil home kitchens valued for their cooling, digestive properties. In this simple poriyal, tender cleaned greens are gently cooked with mustard seeds, red chilli, and a pinch of turmeric, then finished with freshly grated coconut to balance the subtle medicinal bitterness of the leaves.',
        preservationStatus: 'Traditional Dish',
        microOrigin: 'Thanjavur, Madurai & Kongu Nadu Home Kitchens',
        culturalSignificance: 'Celebrated in Siddha and Tamil culinary medicine for soothing stomach ulcers and cooling the body during blistering tropical heat.',
        servesCount: 'Serves 2–3',
        approxPrepTime: '20 minutes',
        ingredientSections: [
          {
            title: 'Heirloom Greens & Aromatics',
            items: [
              { item: 'Cleaned edible manathakkali greens, chopped', amount: '2 cups' },
              { item: 'Small onion, finely chopped', amount: '1 small', note: 'optional' }
            ]
          },
          {
            title: 'Tempering & Spices',
            items: [
              { item: 'Cold-pressed oil', amount: '1 tsp' },
              { item: 'Mustard seeds', amount: '1/2 tsp' },
              { item: 'Dried red chilli', amount: '1 whole' },
              { item: 'Turmeric powder', amount: 'pinch' },
              { item: 'Salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Finishing',
            items: [
              { item: 'Freshly grated coconut', amount: '2 tbsp' }
            ]
          }
        ],
        ingredients: [
          { item: 'Cleaned edible manathakkali greens, chopped', amount: '2 cups' },
          { item: 'Cold-pressed oil', amount: '1 tsp' },
          { item: 'Mustard seeds', amount: '1/2 tsp' },
          { item: 'Dried red chilli', amount: '1' },
          { item: 'Small onion, chopped', amount: '1 small, optional' },
          { item: 'Fresh grated coconut', amount: '2 tbsp' },
          { item: 'Salt and pinch of turmeric', amount: 'to taste' }
        ],
        preparationSteps: [
          'Wash the greens thoroughly in several changes of clean water and drain well.',
          'Heat oil in a pan; splutter mustard seeds and add broken dried red chilli and chopped onion if using.',
          'Add the chopped greens, turmeric, salt, and a splash of water. Cover and cook for 5–8 minutes until tender.',
          'Uncover and cook off excess moisture. Stir in freshly grated coconut, remove from heat, and serve warm with steamed rice.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Clean & Drain Greens',
            instruction: 'Wash manathakkali greens thoroughly in water to remove garden grit and drain well.'
          },
          {
            stepNum: 2,
            title: 'Fragrant Tempering',
            instruction: 'Heat oil, splutter mustard seeds, and sauté dried red chilli and chopped onion until fragrant.'
          },
          {
            stepNum: 3,
            title: 'Gentle Steam',
            instruction: 'Add chopped greens, turmeric, salt, and a splash of water; cover and cook for 5–8 minutes until tender.'
          },
          {
            stepNum: 4,
            title: 'Coconut Finish',
            instruction: 'Uncover to evaporate excess moisture, fold in freshly grated coconut, and serve.'
          }
        ],
        servingSuggestion: {
          text: 'Serve warm as a nourishing side dish alongside steamed Ponni rice, rustic paruppu (lentils), and hot milagu rasam.',
          imageUrl: '/images/tn/manathakkali_keerai_poriyal.jpg'
        },
        vessel: 'Vengala Paanai or Heavy Iron Vaanali',
        cookingFat: 'Cold-Pressed Gingelly (Sesame) Oil',
        season: 'Monsoon & Post-Harvest Months',
        flavorProfile: ['Subtle Earthy Bitterness', 'Nutty Sweet Coconut', 'Mustard Sizzle', 'Mild Chilli Warmth'],
        dietary: 'Vegetarian',
        imageUrl: '/images/tn/manathakkali_keerai_poriyal.jpg',
        phonetic: 'Mah-nah-thah-KAH-li KEE-rye Poh-ree-YAHL'
      },
      {
        id: 'tn-pazhaya-saadam',
        name: 'Pazhaya Saadam',
        nativeName: 'பழைய சாதம்',
        englishSubtitle: 'Soaked or Fermented Leftover Rice',
        tagline: 'Overnight cooled rice steeped in clean water, lightly mashed with sea salt & served with small onions, chillies or buttermilk.',
        description: 'Pazhaya saadam reflects the ancient Tamil agrarian practice of saving and steeping evening cooked rice in earthen pots of fresh drinking water overnight. By morning, the gentle natural fermentation transforms the rice into a probiotic, thirst-quenching cooling meal that energized farmers before heading into the fields under the blazing sun.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Tamil Agricultural Valleys (Cauvery Delta & Madurai)',
        culturalSignificance: 'The historic breakfast of Tamil farmers and laborers, praised in ancient Sangam literature as "pazhayadhu" for its instant vitality, hydration, and natural gut cooling.',
        servesCount: 'Serves 1–2',
        approxPrepTime: '5 minutes plus soaking',
        ingredientSections: [
          {
            title: 'Rice & Soaking',
            items: [
              { item: 'Freshly cooked rice, cooled', amount: '1 cup' },
              { item: 'Clean drinking water', amount: 'enough to cover' },
              { item: 'Salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Traditional Accompaniments',
            items: [
              { item: 'Small shallots (sambar onions)', amount: '4–6 whole', note: 'peeled' },
              { item: 'Fresh green chilli', amount: '1–2', note: 'slit' },
              { item: 'Fresh churned buttermilk or curd', amount: '1/2 cup', note: 'optional' }
            ]
          }
        ],
        ingredients: [
          { item: 'Freshly cooked rice, cooled', amount: '1 cup' },
          { item: 'Clean drinking water', amount: 'enough to cover' },
          { item: 'Salt', amount: 'to taste' },
          { item: 'Small onion, green chilli or buttermilk to serve', amount: 'optional' }
        ],
        preparationSteps: [
          'Place cooled cooked rice in a clean covered earthen vessel and add clean drinking water to cover the grains completely.',
          'For a safer everyday version, refrigerate promptly and enjoy the next day. Traditional room-temperature fermentation is practised in some homes, but warm conditions require careful food safety.',
          'Drain some water if desired; lightly mash the softened rice with clean fingers or a ladle and season with salt.',
          'Serve with whole crunchy small onions, slit green chilli, curd or cool buttermilk.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Submerge Rice',
            instruction: 'Place cooled cooked rice in a clean covered vessel and cover fully with clean drinking water.'
          },
          {
            stepNum: 2,
            title: 'Overnight Steeping',
            instruction: 'Refrigerate promptly and let steep overnight to develop pleasant sweetness and soft texture.'
          },
          {
            stepNum: 3,
            title: 'Mash & Season',
            instruction: 'Drain some water if desired; lightly mash the rice grains and season with sea salt.'
          },
          {
            stepNum: 4,
            title: 'Serve with Accompaniments',
            instruction: 'Serve cold or room temperature with peeled shallots, fresh green chilli, or sour buttermilk.'
          }
        ],
        servingSuggestion: {
          text: 'Serve in traditional terracotta bowls accompanied by whole crunchy shallots, salted curd chillies (mor milagai), and fresh buttermilk.',
          imageUrl: '/images/tn/pazhaya_saadam.jpg'
        },
        vessel: 'Mankalathil (Earthen Clay Pot)',
        cookingFat: 'Zero Cooking Fat (Oil-Free)',
        season: 'Peak Summer & Hot Agricultural Days',
        flavorProfile: ['Cooling & Mellow', 'Subtle Fermented Tang', 'Crunchy Shallot Sharpness', 'Creamy Curd Balance'],
        dietary: 'Vegetarian',
        imageUrl: '/images/tn/pazhaya_saadam.jpg',
        phonetic: 'Pah-ZHAI-yah SAH-dum'
      }
    ]
  },
  pb: {
    id: 'pb',
    name: 'Punjab',
    nativeName: 'ਪੰਜਾਬ',
    capital: 'Chandigarh',
    region: 'North',
    historicalEra: 'Vedic Saptasindhu & Mughal Grand Trunk Road',
    culinaryPhilosophy: 'Hearty agrarian gastronomy powered by community tandoors, unpasteurized churned butter, slow-simmered winter greens, robust pulses, and ceremonial langar hospitality.',
    heirloomVessels: ['Mitti Da Tandoor', 'Heavy Iron Tawa', 'Pital Patila'],
    signatureSpices: ['Crushed Coriander Seeds', 'Kasoori Methi', 'Ajwain (Carom)', 'Amchur', 'Black Cardamom'],
    stapleGrains: ['Makki Atta (Cornmeal)', 'Stoneground Sharbati Wheat', 'Basmati Rice'],
    representativeDish: {
      id: 'pb-sarson-saag',
      name: 'Sarson da Saag te Makki di Roti',
      nativeName: 'ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ ਤੇ ਮੱਕੀ ਦੀ ਰੋਟੀ',
      englishSubtitle: 'Mustard Greens with Cornmeal Flatbread',
      tagline: 'Iconic winter mustard and bathua greens slow-cooked in earthen pots, served with rustic makki rotis and white butter.',
      description: 'This iconic pairing combines mustard greens with cornmeal flatbread. Mustard leaves can be assertive, so spinach or bathua is added to mellow the flavour and improve the texture. The saag should be thick and spoonable, not watery; makki di roti is traditionally rustic and cooked on heavy tawas.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Majha & Malwa Countryside',
      culturalSignificance: 'The cultural heartbeat of Punjabi agrarian life. Prepared during the chilly winter months when mustard fields are in bloom, cooked on village hearths and served with unpasteurized white butter (makhan) and jaggery.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: 'Greens 45–60 min; breads 30 min',
      ingredientSections: [
        {
          title: 'Fresh Winter Greens',
          items: [
            { item: 'Mustard greens (sarson)', amount: '500g', note: 'washed and chopped' },
            { item: 'Spinach (palak) or bathua', amount: '250g', note: 'washed and chopped' },
            { item: 'Maize flour (makki atta)', amount: '2 tbsp', note: 'for thickening saag' }
          ]
        },
        {
          title: 'Tadka Aromatics & Fat',
          items: [
            { item: 'Ghee or butter', amount: '2 tbsp', note: 'plus extra for serving' },
            { item: 'Grated ginger', amount: '1 tbsp' },
            { item: 'Garlic cloves', amount: '3', note: 'chopped' },
            { item: 'Green chilli', amount: '1', note: 'optional' },
            { item: 'Small onion', amount: '1', note: 'chopped (optional)' },
            { item: 'Salt', amount: 'to taste' }
          ]
        },
        {
          title: 'Makki di Roti Dough',
          items: [
            { item: 'Makki atta (maize flour)', amount: '2 cups' },
            { item: 'Warm water', amount: 'as needed' },
            { item: 'Salt', amount: 'pinch' }
          ]
        }
      ],
      ingredients: [
        { item: 'Mustard greens (sarson)', amount: '500g' },
        { item: 'Spinach or bathua', amount: '250g' },
        { item: 'Maize flour (makki atta)', amount: '2 cups + 2 tbsp' },
        { item: 'Fresh butter or desi ghee', amount: 'generous dollops' },
        { item: 'Ginger, garlic & green chillies', amount: 'to taste' },
        { item: 'Onion & salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Wash the greens carefully, especially around stems. Chop coarsely and place in a pot with a small splash of water and a pinch of salt.',
        'Cover and simmer until the stems are tender, 25–35 minutes. Stir occasionally and add only enough water to prevent sticking.',
        'Cool slightly, then mash with a potato masher or traditional wooden churner (madhani). Keep some texture rather than turning it into a completely smooth puree.',
        'Heat ghee in a pan. Cook ginger, garlic, chilli, and onion until fragrant and soft. Add the greens and simmer gently for 10 minutes.',
        'Sprinkle in maize flour while stirring. Cook another 5–8 minutes so the flour thickens the saag and loses its raw taste. Adjust salt.',
        'For the rotis, mix makki atta and salt. Add warm water gradually to make a soft dough.',
        'Divide into balls. Pat each between damp palms or between parchment into a round, about 1/2 cm thick. Repair cracks with damp fingers.',
        'Cook on a hot tawa until the underside firms and develops brown spots. Turn carefully, cook the second side, and finish with a little ghee or white butter.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Simmer Winter Greens',
          instruction: 'Chop washed mustard greens and bathua/spinach. Simmer covered with minimal water for 25-35 minutes until tender.'
        },
        {
          stepNum: 2,
          title: 'Coarse Mashing & Makki Thickening',
          instruction: 'Mash with a wooden masher. Sprinkle maize flour into simmering greens to thicken and bind the saag.'
        },
        {
          stepNum: 3,
          title: 'Ginger-Garlic Tadka',
          instruction: 'Sauté ginger, garlic, green chilli, and onion in ghee, then fold into the simmering saag.'
        },
        {
          stepNum: 4,
          title: 'Pat & Roast Makki Rotis',
          instruction: 'Knead makki atta with warm water, pat between damp palms, and roast on hot iron tawa with ghee.'
        }
      ],
      servingSuggestion: {
        text: 'Serve the saag steaming hot topped with a generous dollop of homemade white butter (makhan), paired with hot makki di roti, raw radish slices, and gur (jaggery).',
        imageUrl: '/images/pb/sarson_ka_saag.jpg'
      },
      vessel: 'Clay Handi & Cast Iron Tawa',
      cookingFat: 'Desi Cow Ghee & White Butter (Makhan)',
      season: 'Peak Winter (November – February)',
      flavorProfile: ['Pungent Mustard Greens', 'Earthy Cornmeal', 'Rich Churned Butter', 'Garlic Warmth'],
      dietary: 'Vegetarian',
      imageUrl: '/images/pb/sarson_ka_saag.jpg',
      phonetic: 'SUR-sohn dah SAHG'
    },
    dishes: [
      {
        id: 'pb-sarson-saag',
        name: 'Sarson da Saag te Makki di Roti',
        nativeName: 'ਸਰ੍ਹੋਂ ਦਾ ਸਾਗ ਤੇ ਮੱਕੀ ਦੀ ਰੋਟੀ',
        englishSubtitle: 'Mustard Greens with Cornmeal Flatbread',
        tagline: 'Iconic winter mustard and bathua greens slow-cooked in earthen pots, served with rustic makki rotis and white butter.',
        description: 'This iconic pairing combines mustard greens with cornmeal flatbread. Mustard leaves can be assertive, so spinach or bathua is added to mellow the flavour and improve the texture. The saag should be thick and spoonable, not watery; makki di roti is traditionally rustic and cooked on heavy tawas.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Majha & Malwa Countryside',
        culturalSignificance: 'The cultural heartbeat of Punjabi agrarian life. Prepared during the chilly winter months when mustard fields are in bloom, cooked on village hearths and served with unpasteurized white butter (makhan) and jaggery.',
        servesCount: 'Yield: 4 servings',
        approxPrepTime: 'Greens 45–60 min; breads 30 min',
        ingredientSections: [
          {
            title: 'Fresh Winter Greens',
            items: [
              { item: 'Mustard greens (sarson)', amount: '500g' },
              { item: 'Spinach (palak) or bathua', amount: '250g' },
              { item: 'Maize flour (makki atta)', amount: '2 tbsp' }
            ]
          },
          {
            title: 'Tadka Aromatics & Fat',
            items: [
              { item: 'Ghee or butter', amount: '2 tbsp' },
              { item: 'Grated ginger & garlic', amount: '1 tbsp each' },
              { item: 'Onion & green chilli', amount: 'to taste' }
            ]
          },
          {
            title: 'Makki di Roti Dough',
            items: [
              { item: 'Makki atta', amount: '2 cups' },
              { item: 'Warm water & salt', amount: 'as needed' }
            ]
          }
        ],
        ingredients: [
          { item: 'Mustard greens', amount: '500g' },
          { item: 'Spinach/bathua', amount: '250g' },
          { item: 'Makki atta', amount: '2 cups + 2 tbsp' },
          { item: 'Butter or ghee', amount: 'generous amounts' },
          { item: 'Ginger, garlic, onion & chillies', amount: 'to taste' }
        ],
        preparationSteps: [
          'Wash and chop mustard greens and spinach. Simmer with a splash of water and salt for 30 minutes.',
          'Mash coarsely, then simmer with ginger, garlic, and onion sautéed in ghee.',
          'Stir in maize flour to thicken the saag.',
          'Knead makki atta with warm water, pat into discs, and roast on a hot griddle until crisp with brown spots.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Boil & Mash Greens',
            instruction: 'Simmer greens tender and mash coarsely with a wooden madhani.'
          },
          {
            stepNum: 2,
            title: 'Tadka & Thickening',
            instruction: 'Sauté ginger, garlic, and onions, add greens, and stir in maize flour.'
          },
          {
            stepNum: 3,
            title: 'Griddle Makki Roti',
            instruction: 'Pat dough into rounds and roast on a hot tawa with fresh ghee.'
          }
        ],
        servingSuggestion: {
          text: 'Serve with white butter, jaggery chunks, and fresh radish.',
          imageUrl: '/images/pb/sarson_ka_saag.jpg'
        },
        vessel: 'Clay Handi & Iron Tawa',
        cookingFat: 'Ghee & White Butter',
        season: 'Winter',
        flavorProfile: ['Earthy', 'Pungent', 'Rich Dairy'],
        dietary: 'Vegetarian',
        imageUrl: '/images/pb/sarson_ka_saag.jpg'
      },
      {
        id: 'pb-amritsari-chole',
        name: 'Amritsari Chole',
        nativeName: 'ਅੰਮ੍ਰਿਤਸਰੀ ਛੋਲੇ',
        englishSubtitle: 'Dark Spiced Tangy Chickpea Curry',
        tagline: 'Dark, tea-infused tangy chickpeas slow-simmered in roasted spices and amchur.',
        description: 'Amritsari chole is a deeply flavoured chickpea curry commonly associated with the food culture of Amritsar. The chickpeas should be tender but intact, while the gravy carries tang, roasted spice, and a dark, concentrated character.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Amritsar Bazaars',
        culturalSignificance: 'A cornerstone of Amritsari street food culture, famously paired with crisp tandoori kulchas or bhaturas.',
        servesCount: 'Yield: 4–5 servings',
        approxPrepTime: 'Soaking 8 hrs; cooking 60–90 min',
        ingredientSections: [
          {
            title: 'Chickpeas & Infusion',
            items: [
              { item: 'Dried chickpeas', amount: '1 1/2 cups', note: 'soaked overnight' },
              { item: 'Black tea bag in muslin pouch', amount: '1', note: 'optional for color' },
              { item: 'Black cardamom & green cardamom', amount: '1 & 2 pods' }
            ]
          },
          {
            title: 'Aromatics & Spices',
            items: [
              { item: 'Onions, finely chopped', amount: '2 medium' },
              { item: 'Tomatoes, crushed', amount: '2' },
              { item: 'Ginger-garlic paste', amount: '1 tbsp' },
              { item: 'Chole masala', amount: '1 tsp' },
              { item: 'Amchur or lemon juice', amount: '1-2 tsp' },
              { item: 'Cumin, coriander, chilli & turmeric', amount: 'to taste' },
              { item: 'Oil or ghee', amount: '2 tbsp' }
            ]
          }
        ],
        ingredients: [
          { item: 'Dried chickpeas', amount: '1 1/2 cups, soaked' },
          { item: 'Onions and tomatoes', amount: '2 each' },
          { item: 'Ginger-garlic paste', amount: '1 tbsp' },
          { item: 'Chole masala & whole spices', amount: 'to taste' },
          { item: 'Amchur or lemon juice', amount: '1-2 tsp' },
          { item: 'Oil or ghee', amount: '2 tbsp' }
        ],
        preparationSteps: [
          'Drain soaked chickpeas. Pressure-cook with salt and optional tea pouch until tender. Reserve cooking liquid.',
          'Heat oil in a heavy pan. Sauté cumin, cardamoms, and onions until deep golden.',
          'Add ginger-garlic paste, then tomatoes, turmeric, coriander, and chole masala until oil separates.',
          'Add cooked chickpeas and cooking liquid. Mash a small portion of chickpeas to naturally thicken the gravy.',
          'Simmer for 20-25 minutes, then finish with amchur or lemon juice and ginger juliennes.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Pressure Cook Chickpeas',
            instruction: 'Cook chickpeas with black cardamom and optional tea pouch until completely tender.'
          },
          {
            stepNum: 2,
            title: 'Deep Masala Bhunai',
            instruction: 'Slowly brown onions, cook tomatoes with chole masala until oil separates.'
          },
          {
            stepNum: 3,
            title: 'Simmer & Mash for Body',
            instruction: 'Simmer with cooking liquor, mashing a ladleful of chickpeas for natural body.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot with Amritsari kulcha, bhature, or steamed rice, accompanied by sliced onions and lemon wedges.',
          imageUrl: '/images/pb/amritsari_chole.jpg'
        },
        vessel: 'Heavy Cast Iron Pan',
        cookingFat: 'Ghee or Mustard Oil',
        season: 'All Year',
        flavorProfile: ['Tangy Amchur', 'Roasted Spice', 'Earthy Chickpea'],
        dietary: 'Vegetarian',
        imageUrl: '/images/pb/amritsari_chole.jpg'
      },
      {
        id: 'pb-amritsari-fish-fry',
        name: 'Amritsari-Style Fish Fry',
        nativeName: 'ਅੰਮ੍ਰਿਤਸਰੀ ਮੱਛੀ',
        englishSubtitle: 'Crisp Ajwain & Gram-Flour Crusted Fish',
        tagline: 'Flaky white river fish coated in ajwain-scented gram flour batter flash-fried to golden crunch.',
        description: 'Amritsari-style fish is known for a crisp, spiced coating and a tender interior. A firm white fish works well because it can be handled without breaking. The coating should cling rather than form a thick batter; gram flour, carom seed, chilli, and lemon provide a savoury, slightly tangy crust.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Amritsar Street Stalls',
        culturalSignificance: 'A legendary specialty from the food streets of Amritsar, where fresh freshwater catch is spiced with ajwain (carom seeds) to cut richness and enhance crispness.',
        servesCount: 'Yield: 4 servings as a starter',
        approxPrepTime: 'Marination 20–30 min; frying 15 min',
        ingredientSections: [
          {
            title: 'Fish & First Marinade',
            items: [
              { item: 'Firm boneless white fish', amount: '600g', note: 'cut into medium pieces' },
              { item: 'Ginger-garlic paste', amount: '1 tbsp' },
              { item: 'Lemon juice', amount: '1 tbsp' },
              { item: 'Salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Crisp Coating Batter',
            items: [
              { item: 'Besan (gram flour)', amount: '3/4 cup' },
              { item: 'Rice flour', amount: '1 tbsp', note: 'for extra crispness' },
              { item: 'Ajwain (carom seeds)', amount: '1 tsp', note: 'lightly crushed' },
              { item: 'Turmeric & red chilli powder', amount: '1/2 tsp & 1 tsp' },
              { item: 'Garam masala', amount: '1/2 tsp' },
              { item: 'Oil', amount: 'for frying' }
            ]
          }
        ],
        ingredients: [
          { item: 'Firm white fish', amount: '600g' },
          { item: 'Besan (gram flour)', amount: '3/4 cup' },
          { item: 'Rice flour', amount: '1 tbsp' },
          { item: 'Ajwain (carom seeds)', amount: '1 tsp' },
          { item: 'Ginger-garlic paste & lemon juice', amount: '1 tbsp each' },
          { item: 'Spices and salt', amount: 'to taste' },
          { item: 'Oil for frying', amount: 'as needed' }
        ],
        preparationSteps: [
          'Pat the fish dry with paper towels to help the marinade cling.',
          'Coat fish with ginger-garlic paste, lemon juice, salt, turmeric, chilli, ajwain, and garam masala. Rest 10 minutes.',
          'Toss fish in besan and rice flour, sprinkling water a teaspoon at a time until a thin, clinging coating forms.',
          'Heat oil over medium flame. Fry fish in small batches until golden and crisp, then drain on a wire rack.',
          'Serve immediately with lemon wedges and mint chutney.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Ajwain Marinade',
            instruction: 'Marinate dry fish in ginger-garlic, lemon, ajwain, and spices for 10 minutes.'
          },
          {
            stepNum: 2,
            title: 'Clinging Besan Coat',
            instruction: 'Toss with besan and rice flour with minimal water so the batter clings without dripping.'
          },
          {
            stepNum: 3,
            title: 'Flash Fry',
            instruction: 'Fry in hot oil until the crust is shatteringly crisp and the fish is succulent inside.'
          }
        ],
        servingSuggestion: {
          text: 'Serve immediately with sliced onion rings, lemon wedges, and fresh mint-coriander chutney.',
          imageUrl: '/images/pb/amritsari_fish_fry.jpg'
        },
        vessel: 'Deep Heavy Kadai',
        cookingFat: 'Mustard Oil or Neutral Oil',
        season: 'All Year',
        flavorProfile: ['Crisp Crust', 'Pungent Ajwain', 'Succulent Flaky Fish', 'Zesty Lemon'],
        dietary: 'Non-Vegetarian',
        imageUrl: '/images/pb/amritsari_fish_fry.jpg'
      },
      {
        id: 'pb-dal-makhani',
        name: 'Punjabi Dal Makhani',
        nativeName: 'ਦਾਲ ਮਖਣੀ',
        englishSubtitle: 'Slow-Simmered Black Lentils with Butter & Cream',
        tagline: 'Velvety whole black urad and kidney beans slow-simmered for hours with butter and cream.',
        description: 'Dal makhani combines whole black gram with a smaller amount of kidney beans and a slow-cooked tomato-and-spice base. Its characteristic texture comes from long simmering, frequent stirring, and some beans breaking down into the liquid.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Punjab & Delhi Border Dhaba Hearths',
        culturalSignificance: 'Created in the post-partition era from traditional maa ki dal, this slow-simmered creation is now a universal symbol of Punjabi warmth.',
        servesCount: 'Yield: 5 servings',
        approxPrepTime: 'Soaking overnight; simmering 2–3 hours',
        ingredientSections: [
          {
            title: 'Pulses',
            items: [
              { item: 'Whole urad dal (black gram)', amount: '1 cup', note: 'rinsed' },
              { item: 'Rajma (kidney beans)', amount: '1/4 cup', note: 'rinsed' }
            ]
          },
          {
            title: 'Tadka & Dairy Base',
            items: [
              { item: 'Butter', amount: '1 1/2 tbsp', note: 'plus finish' },
              { item: 'Oil', amount: '1 tbsp' },
              { item: 'Onion, finely chopped', amount: '1' },
              { item: 'Tomatoes, pureed', amount: '2' },
              { item: 'Ginger-garlic paste', amount: '1 tbsp' },
              { item: 'Cumin, turmeric, coriander, Kashmiri chilli', amount: 'to taste' },
              { item: 'Fresh cream', amount: '1/4 cup', note: 'optional' },
              { item: 'Garam masala & salt', amount: 'to taste' }
            ]
          }
        ],
        ingredients: [
          { item: 'Whole urad dal & rajma', amount: '1 1/4 cups total' },
          { item: 'Butter and oil', amount: 'generous amounts' },
          { item: 'Onion and tomato puree', amount: 'to taste' },
          { item: 'Ginger-garlic paste', amount: '1 tbsp' },
          { item: 'Cream, spices & salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Soak urad dal and rajma overnight. Pressure-cook until meltingly soft.',
          'Heat oil and butter, sauté cumin, then onions until golden. Add ginger-garlic paste and tomato puree with spices until thick.',
          'Add cooked pulses and their liquid. Simmer on low heat for at least 60 minutes, stirring and mashing a portion of beans against the pot wall.',
          'Stir in garam masala and optional cream. Simmer for 5 minutes, rest 10 minutes, and finish with a knob of butter.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Overnight Soak & Cook',
            instruction: 'Cook soaked urad and rajma until beans crush easily between fingers.'
          },
          {
            stepNum: 2,
            title: 'Butter Masala Base',
            instruction: 'Sauté onions and ginger-garlic in butter and oil, cooking tomatoes until rich.'
          },
          {
            stepNum: 3,
            title: 'Slow Simmer & Mash',
            instruction: 'Simmer on low for an hour, mashing beans to develop an ultra-velvety consistency.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot with tandoori roti, garlic naan, or jeera rice, with a fresh salad and pickle.',
          imageUrl: '/images/pb/dal_makhani.jpg'
        },
        vessel: 'Heavy Copper Degchi or Cast Iron Pot',
        cookingFat: 'Butter & Desi Ghee',
        season: 'All Year',
        flavorProfile: ['Creamy Butter', 'Earthy Black Gram', 'Mild Kashmiri Chilli', 'Smoky Char'],
        dietary: 'Vegetarian',
        imageUrl: '/images/pb/dal_makhani.jpg'
      },
      {
        id: 'pb-pinni',
        name: 'Pinni',
        nativeName: 'ਪਿੰਨੀ',
        englishSubtitle: 'Punjabi Flour-and-Ghee Sweet',
        tagline: 'Rich winter energy sweet of slow-roasted whole wheat flour, desi ghee, almonds, and jaggery.',
        description: 'Pinni is a dense sweet made by slowly roasting flour in ghee and combining it with sugar or jaggery and nuts. It is associated with winter and celebratory home cooking in parts of North India, including Punjab. The crucial technique is patience: flour must roast slowly enough to lose its raw taste without burning.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Punjab Winter Kitchens',
        culturalSignificance: 'Prepared in large batches at the start of winter to fortify the family against the cold, packed for brides, and shared at Lohri celebrations.',
        servesCount: 'Yield: 12 small pinnis',
        approxPrepTime: '40–50 min',
        ingredientSections: [
          {
            title: 'Base & Pure Fat',
            items: [
              { item: 'Whole-wheat flour', amount: '2 cups' },
              { item: 'Desi ghee', amount: '3/4 cup', note: 'plus 1-2 tbsp if needed' }
            ]
          },
          {
            title: 'Sweetener & Dry Fruits',
            items: [
              { item: 'Powdered sugar or grated jaggery', amount: '3/4 cup' },
              { item: 'Chopped almonds', amount: '1/4 cup' },
              { item: 'Pistachios or cashews', amount: '2 tbsp' },
              { item: 'Raisins', amount: '2 tbsp', note: 'optional' },
              { item: 'Cardamom powder', amount: '1/2 tsp' },
              { item: 'Edible gum (gond)', amount: '2 tbsp', note: 'optional, fried & crushed' }
            ]
          }
        ],
        ingredients: [
          { item: 'Whole-wheat flour', amount: '2 cups' },
          { item: 'Pure desi ghee', amount: '3/4 cup' },
          { item: 'Sugar or jaggery', amount: '3/4 cup' },
          { item: 'Chopped nuts (almonds, pistachios)', amount: '1/3 cup' },
          { item: 'Cardamom powder', amount: '1/2 tsp' }
        ],
        preparationSteps: [
          'If using edible gum, fry in ghee until puffed, then cool and crush.',
          'Warm remaining ghee in a heavy pan on low heat. Add flour and stir continuously for 20-30 minutes until deep golden-brown and nutty.',
          'Add chopped nuts and raisins, stirring for 2 minutes. Remove from heat and allow to cool until warm.',
          'Add powdered sugar or jaggery, cardamom, and optional gond. Mix thoroughly.',
          'Shape firmly into golf-ball-sized round pinnis while warm. Cool completely before storing in an airtight tin.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Patient Ghee Roasting',
            instruction: 'Roast wheat flour in ghee on low heat for 20-30 minutes until nutty and golden-brown.'
          },
          {
            stepNum: 2,
            title: 'Fold Nuts & Sweetener',
            instruction: 'Fold in chopped nuts, then add jaggery or sugar once the mixture cools to warm.'
          },
          {
            stepNum: 3,
            title: 'Shape Pinnis',
            instruction: 'Squeeze tightly into round balls while still warm and let set.'
          }
        ],
        servingSuggestion: {
          text: 'Serve with hot masala chai or warm milk as a rich morning or festive winter treat.',
          imageUrl: '/images/pb/pinni.jpg'
        },
        vessel: 'Heavy Brass or Iron Kadai',
        cookingFat: 'Pure Desi Ghee',
        season: 'Winter (Lohri)',
        flavorProfile: ['Toasted Nutty Flour', 'Caramel Jaggery', 'Rich Desi Ghee', 'Cardamom'],
        dietary: 'Vegetarian',
        imageUrl: '/images/pb/pinni.jpg'
      }
    ]
  },
  gj: {
    id: 'gj',
    name: 'Gujarat',
    nativeName: 'ગુજરાત',
    capital: 'Gandhinagar',
    region: 'West',
    historicalEra: 'Kathiawar & Surat Mercantile Era',
    culinaryPhilosophy: 'Subtle sweet-sour balance achieved with jaggery and kokum, seasonal clay-pot underground braising, and multi-grain sun-dried crisp flatbreads.',
    heirloomVessels: ['Matla (Earthen Terracotta Pot)', 'Kansa Thali', 'Brass Kadai'],
    signatureSpices: ['Ajwain', 'White Sesame Seeds', 'Asafoetida', 'Dry Ginger', 'Green Garlic'],
    stapleGrains: ['Bajra (Pearl Millet)', 'Jowar (Sorghum)', 'Besan'],
    representativeDish: {
      id: 'gj-handvo',
      name: 'Handvo',
      nativeName: 'હાંડવો',
      englishSubtitle: 'Savory Spiced Lentil & Rice Cake',
      tagline: 'Savory fermented lentil and rice vegetable cake pan-roasted with a crisp sesame and mustard crust.',
      description: 'A classic Gujarati savory cake, Handvo is traditionally baked in a special sand-filled cooker but is now commonly pan-roasted or baked in an oven. It features a fermented batter and is packed with grated vegetables, giving it a crusty exterior and a soft, spongy interior.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Ahmedabad & Kathiawar Kitchens',
      culturalSignificance: 'Handvo combines slow microbial fermentation with vegetable fortification. The sesame-mustard seed tempering poured at high heat creates the signature crackling golden outer crust while maintaining an airy, spongy center.',
      servesCount: 'Serves 4–6',
      approxPrepTime: '40 min (+ 8-10 hrs fermentation)',
      ingredientSections: [
        {
          title: 'Fermented Batter Grains',
          items: [
            { item: 'Regular rice', amount: '1 cup' },
            { item: 'Chana dal (split bengal gram)', amount: '1/2 cup' },
            { item: 'Toor dal (pigeon pea)', amount: '1/4 cup' },
            { item: 'Urad dal (split black gram)', amount: '2 tbsp' },
            { item: 'Sour curd (yogurt)', amount: '1/2 cup' }
          ]
        },
        {
          title: 'Vegetables & Seasonings',
          items: [
            { item: 'Grated bottle gourd (dudhi)', amount: '1 cup' },
            { item: 'Ginger-green chili paste', amount: '1 tbsp' },
            { item: 'Turmeric powder', amount: '1/4 tsp' },
            { item: 'Red chili powder', amount: '1/2 tsp' },
            { item: 'Sugar', amount: '1 tbsp' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'Fruit salt (Eno) or baking soda', amount: '1 tsp' }
          ]
        },
        {
          title: 'Sesame & Mustard Tempering',
          items: [
            { item: 'Oil', amount: '2 tbsp' },
            { item: 'Mustard seeds', amount: '1 tsp' },
            { item: 'Cumin seeds', amount: '1 tsp' },
            { item: 'Sesame seeds', amount: '1 tbsp' },
            { item: 'Asafoetida (hing)', amount: 'a pinch' },
            { item: 'Curry leaves', amount: '7-8' }
          ]
        }
      ],
      ingredients: [
        { item: 'Rice & mixed dals (chana, toor, urad)', amount: '1 3/4 cups total' },
        { item: 'Sour curd', amount: '1/2 cup' },
        { item: 'Grated bottle gourd (dudhi)', amount: '1 cup' },
        { item: 'Ginger-green chili paste', amount: '1 tbsp' },
        { item: 'Sesame seeds', amount: '1 tbsp' },
        { item: 'Mustard & cumin seeds', amount: '1 tsp each' },
        { item: 'Turmeric, chili powder, sugar & salt', amount: 'to taste' },
        { item: 'Fruit salt (Eno)', amount: '1 tsp' },
        { item: 'Oil', amount: '2 tbsp' }
      ],
      preparationSteps: [
        'Soak and grind the grains: Wash the rice and all the dals together, and soak them in water for 4 to 5 hours. Drain the water and blend the grains with the sour curd to form a slightly coarse, thick batter.',
        'Ferment the batter: Cover the batter and let it ferment in a warm place for 8 to 10 hours or overnight to develop its distinct sour note and spongy texture.',
        'Fold in vegetables and spices: To the fermented batter, add the grated bottle gourd (squeeze out excess water first), ginger-green chili paste, turmeric, red chili powder, sugar, and salt. Mix well. Just before cooking, stir in the fruit salt (Eno) and 1 tablespoon of water over it to activate it.',
        'Temper and cook: Heat oil in a heavy-bottomed, deep non-stick pan. Add mustard seeds, cumin seeds, sesame seeds, hing, and curry leaves. Let them crackle. Pour a thick layer of the batter over the tempering.',
        'Pan-roast until crusty: Cover the pan and cook on a low flame for 12-15 minutes until the bottom is golden brown and crisp. Carefully flip the handvo, add a few more drops of oil around the edges, and cook uncovered for another 10-12 minutes until the other side is crisp and a toothpick inserted comes out clean.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Soak & Grind Grains',
          instruction: 'Soak rice, chana dal, toor dal, and urad dal for 4-5 hours. Grind coarsely with sour curd into a thick batter.'
        },
        {
          stepNum: 2,
          title: 'Overnight Fermentation',
          instruction: 'Rest batter in a warm corner for 8-10 hours until aerated, light, and mildly sour.'
        },
        {
          stepNum: 3,
          title: 'Fold Vegetables & Spices',
          instruction: 'Fold in squeezed bottle gourd, ginger-green chili paste, spices, and sugar. Stir in fruit salt just before cooking.'
        },
        {
          stepNum: 4,
          title: 'Tempering & Slow Pan-Roasting',
          instruction: 'Crackle sesame, mustard, cumin, and curry leaves in oil. Pour thick batter over tempering and cook covered until deep golden.'
        },
        {
          stepNum: 5,
          title: 'Flip & Crisp Outer Crust',
          instruction: 'Carefully flip and roast until both sides are deeply crusted and a tester comes out clean.'
        }
      ],
      servingSuggestion: {
        text: 'Cut the Handvo into wedges or squares. It is served warm or at room temperature alongside a cup of hot masala chai and green coriander chutney. It makes for a hearty breakfast or an evening snack.',
        imageUrl: '/images/gj/handvo.jpg'
      },
      vessel: 'Heavy Cast Iron Handvo Pan / Kadai',
      cookingFat: 'Cold-Pressed Peanut or Sesame Oil',
      season: 'Autumn & Winter Evenings',
      flavorProfile: ['Fermented Tang', 'Sesame Nutty Crunch', 'Sweet Bottle Gourd', 'Green Chili Zing'],
      dietary: 'Vegetarian',
      imageUrl: '/images/gj/handvo.jpg',
      phonetic: 'HAHND-voh'
    },
    dishes: [
      {
        id: 'gj-handvo',
        name: 'Handvo',
        nativeName: 'હાંડવો',
        englishSubtitle: 'Savory Spiced Lentil & Rice Cake',
        tagline: 'Savory fermented lentil and rice vegetable cake pan-roasted with a crisp sesame and mustard crust.',
        description: 'A classic Gujarati savory cake, Handvo is traditionally baked in a special sand-filled cooker but is now commonly pan-roasted or baked in an oven. It features a fermented batter and is packed with grated vegetables, giving it a crusty exterior and a soft, spongy interior.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Ahmedabad & Kathiawar Kitchens',
        culturalSignificance: 'Combines slow microbial fermentation with vegetable fortification, finished with hot crackling sesame tempering.',
        servesCount: 'Serves 4–6',
        approxPrepTime: '40 min (+ fermentation)',
        ingredientSections: [
          {
            title: 'Fermented Grains',
            items: [
              { item: 'Rice & Mixed Dals', amount: '1 3/4 cups' },
              { item: 'Sour Curd', amount: '1/2 cup' }
            ]
          },
          {
            title: 'Vegetables & Aromatics',
            items: [
              { item: 'Grated Dudhi (Bottle Gourd)', amount: '1 cup' },
              { item: 'Ginger-Green Chili Paste', amount: '1 tbsp' },
              { item: 'Eno Fruit Salt', amount: '1 tsp' }
            ]
          },
          {
            title: 'Tempering',
            items: [
              { item: 'Sesame & Mustard Seeds', amount: '1 tbsp each' },
              { item: 'Oil & Curry Leaves', amount: '2 tbsp' }
            ]
          }
        ],
        ingredients: [
          { item: 'Rice and mixed lentils', amount: '1 3/4 cups' },
          { item: 'Sour curd', amount: '1/2 cup' },
          { item: 'Grated bottle gourd', amount: '1 cup' },
          { item: 'Sesame & mustard seeds', amount: '1 tbsp each' },
          { item: 'Oil and spices', amount: 'to taste' }
        ],
        preparationSteps: [
          'Soak rice and dals for 5 hours, grind with sour curd, and ferment overnight.',
          'Mix in grated bottle gourd, chili paste, spices, and Eno fruit salt.',
          'Heat oil, crackle sesame seeds, mustard seeds, and curry leaves.',
          'Pour batter into the pan, cover, and roast on low flame until base is golden and crisp.',
          'Flip carefully and roast the second side until crisp throughout.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Fermentation',
            instruction: 'Soak rice and mixed dals, grind with curd, and ferment for 8-10 hours.'
          },
          {
            stepNum: 2,
            title: 'Batter Mixing',
            instruction: 'Fold in grated bottle gourd, aromatics, spices, and Eno fruit salt.'
          },
          {
            stepNum: 3,
            title: 'Pan Roasting',
            instruction: 'Crackle sesame and mustard seeds in oil, pour batter, and cook covered on low flame until crisp.'
          }
        ],
        servingSuggestion: {
          text: 'Serve warm in wedges with hot masala chai and fresh coriander chutney.',
          imageUrl: '/images/gj/handvo.jpg'
        },
        vessel: 'Heavy Cast Iron Pan',
        cookingFat: 'Peanut Oil',
        season: 'All Year',
        flavorProfile: ['Fermented Tang', 'Crisp Sesame', 'Spiced Vegetable'],
        dietary: 'Vegetarian',
        imageUrl: '/images/gj/handvo.jpg'
      },
      {
        id: 'gj-paanki',
        name: 'Paanki',
        nativeName: 'પાંકી',
        englishSubtitle: 'Banana Leaf Steamed Rice Pancakes',
        tagline: 'Delicate, paper-thin fermented rice flour pancakes steamed between fresh banana leaves.',
        description: 'Paanki is an incredibly delicate, paper-thin savory pancake made from a fermented rice flour batter. What makes it unique is that it is cooked between fresh banana leaves, which impart a distinct herbal aroma to the dish.',
        preservationStatus: 'Revived Heirloom',
        microOrigin: 'Coastal & South Gujarat Kitchens',
        culturalSignificance: 'An ingenious culinary method where moist batter is enveloped in banana leaves and roasted on dry iron pans. The gentle indirect steam preserves tenderness while infusing the mineral chlorophyll notes of the scorched banana leaf.',
        servesCount: 'Serves 4',
        approxPrepTime: '20 min (+ 2 hrs resting)',
        ingredientSections: [
          {
            title: 'Thin Fermented Batter',
            items: [
              { item: 'Rice flour', amount: '1 cup' },
              { item: 'Urad dal flour', amount: '1 tbsp', note: 'optional, for binding' },
              { item: 'Sour curd', amount: '1/2 cup' },
              { item: 'Water', amount: '3/4 cup', note: 'adjust for consistency' }
            ]
          },
          {
            title: 'Seasonings',
            items: [
              { item: 'Cumin seeds', amount: '1 tsp', note: 'roasted and crushed lightly' },
              { item: 'Green chili paste', amount: '1 tsp' },
              { item: 'Salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Botanical Wrap',
            items: [
              { item: 'Fresh banana leaves', amount: 'cut into 5x5 inch squares' },
              { item: 'Oil', amount: 'for greasing leaves' }
            ]
          }
        ],
        ingredients: [
          { item: 'Rice flour', amount: '1 cup' },
          { item: 'Urad dal flour', amount: '1 tbsp' },
          { item: 'Sour curd', amount: '1/2 cup' },
          { item: 'Roasted cumin seeds', amount: '1 tsp' },
          { item: 'Green chili paste', amount: '1 tsp' },
          { item: 'Fresh banana leaves', amount: 'cut squares' },
          { item: 'Oil for greasing', amount: '1 tbsp' },
          { item: 'Salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Prepare the batter: In a mixing bowl, whisk together the rice flour, urad dal flour, sour curd, and water to form a smooth, lump-free batter. It should have a thin, pouring consistency. Cover and let it rest for 2 to 3 hours to ferment slightly.',
          'Flavor the batter: After resting, stir in the crushed cumin seeds, green chili paste, and salt.',
          'Prep the banana leaves: Wash and dry the banana leaf squares. Lightly grease the smooth side of each leaf square with a few drops of oil.',
          'Spread the batter: Place one greased banana leaf on a flat surface. Pour 1 to 2 tablespoons of the thin batter in the center and spread it out slightly. Immediately cover it with another greased banana leaf square, pressing gently so the batter spreads evenly between the two leaves into a thin layer.',
          'Pan-steam the Paanki: Heat a flat iron tawa (griddle) on medium heat. Place the banana leaf parcel directly onto the hot tawa. Cook for 1 to 2 minutes until the bottom leaf turns brown and spots appear. Flip the parcel and cook the other side for another minute until the batter inside sets and cooks through.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Batter Fermentation',
            instruction: 'Whisk rice flour, curd, and water into a thin, lump-free batter. Rest 2-3 hours.'
          },
          {
            stepNum: 2,
            title: 'Aromatic Seasoning',
            instruction: 'Fold in crushed roasted cumin, chili paste, and salt.'
          },
          {
            stepNum: 3,
            title: 'Leaf Enveloping',
            instruction: 'Spread batter between two lightly greased banana leaf squares.'
          },
          {
            stepNum: 4,
            title: 'Dry Pan Steaming',
            instruction: 'Griddle the wrapped leaf parcel on hot tawa until scorched on both sides and cooked inside.'
          }
        ],
        servingSuggestion: {
          text: 'Serve piping hot directly in the banana leaves. The diner peels back the top leaf to reveal the soft, fragrant pancake inside. It is typically eaten by scraping it off the leaf, accompanied by spicy green chutney or a sweet-and-sour raw mango chunda.',
          imageUrl: '/images/gj/paanki.jpg'
        },
        vessel: 'Cast Iron Tawa (Griddle)',
        cookingFat: 'Peanut Oil (drops for greasing)',
        season: 'Monsoon & Winter',
        flavorProfile: ['Banana Leaf Infused', 'Tangy Rice Ferment', 'Crushed Cumin', 'Green Chili Sharpness'],
        dietary: 'Vegan',
        imageUrl: '/images/gj/paanki.jpg'
      },
      {
        id: 'gj-aambil',
        name: 'Aambil',
        nativeName: 'આંબિલ',
        englishSubtitle: 'Fermented Indigenous Millet Beverage',
        tagline: 'Ancient indigenous finger millet and buttermilk fermented cooler from the Dangs forest hearth.',
        description: 'Tracing its roots to the Adivasi (indigenous) communities of southern Gujarat, Aambil is an ancient, gut-friendly summer cooler. It is essentially a fermented gruel made from ragi (finger millet) or jowar (sorghum) mixed with buttermilk, highly valued for its hydrating and cooling properties.',
        preservationStatus: 'Endangered Oral Tradition',
        microOrigin: 'Dang & South Gujarat Adivasi Forests',
        culturalSignificance: 'Practiced for millennia by the tribal forest communities of South Gujarat and the Dangs. Cooked over clay hearths and stored in earthen matkas to naturally ferment, Aambil prevents heat exhaustion and replenishes electrolytes.',
        servesCount: 'Serves 4',
        approxPrepTime: '20 min (+ cooling time)',
        ingredientSections: [
          {
            title: 'Millet Porridge Base',
            items: [
              { item: 'Ragi (Nachani) or Jowar flour', amount: '1/4 cup' },
              { item: 'Water', amount: '2 to 3 cups' }
            ]
          },
          {
            title: 'Fermented Taak & Salts',
            items: [
              { item: 'Thin buttermilk (taak)', amount: '1.5 cups' },
              { item: 'Roasted cumin powder', amount: '1 tsp' },
              { item: 'Black salt (kala namak)', amount: '1/2 tsp' },
              { item: 'Regular salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Optional Add-ins',
            items: [
              { item: 'Crushed green chili', amount: '1' },
              { item: 'Crushed garlic cloves', amount: '2' },
              { item: 'Fresh coriander, finely chopped', amount: 'for garnish' }
            ]
          }
        ],
        ingredients: [
          { item: 'Ragi or Jowar flour', amount: '1/4 cup' },
          { item: 'Fresh buttermilk (taak)', amount: '1.5 cups' },
          { item: 'Roasted cumin powder', amount: '1 tsp' },
          { item: 'Black salt (kala namak)', amount: '1/2 tsp' },
          { item: 'Crushed green chili & garlic', amount: 'optional' },
          { item: 'Water & fresh coriander', amount: 'as needed' }
        ],
        preparationSteps: [
          'Make the millet paste: In a small bowl, whisk the ragi or jowar flour with 1/4 cup of water to create a smooth, lump-free slurry.',
          'Boil the water: Bring about 2 cups of water to a rolling boil in a deep saucepan. If using garlic and green chili, add the crushed aromatics to the boiling water.',
          'Cook the millet: Lower the heat and slowly pour the millet slurry into the boiling water while stirring continuously to prevent clumping. Let the mixture simmer on low heat for 7-8 minutes until the raw smell of the flour disappears and the liquid thickens slightly.',
          'Cool the mixture: Turn off the heat and allow the cooked millet mixture to cool down completely to room temperature. It will thicken further as it cools.',
          'Blend with buttermilk: Once completely cool, transfer the mixture to a large vessel or earthen pot (matka). Pour in the thin buttermilk. Add the black salt, regular salt, and roasted cumin powder. Whisk everything together until thoroughly combined and frothy.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Slurry Preparation',
            instruction: 'Whisk ragi or jowar flour with water into a smooth paste without lumps.'
          },
          {
            stepNum: 2,
            title: 'Porridge Simmering',
            instruction: 'Pour slurry into boiling water with crushed garlic/chili. Simmer 7-8 minutes while whisking constantly.'
          },
          {
            stepNum: 3,
            title: 'Cooling',
            instruction: 'Allow millet porridge to cool completely to room temperature in an earthen pot.'
          },
          {
            stepNum: 4,
            title: 'Whisk with Buttermilk',
            instruction: 'Whisk in churned buttermilk, black salt, and roasted cumin until smooth and frothy.'
          }
        ],
        servingSuggestion: {
          text: 'Aambil must be served thoroughly chilled. Pour it into tall glasses, garnish with fresh chopped coriander or a sprinkle of roasted cumin powder. It is traditionally consumed in the mid-morning or afternoon during the harsh Indian summers to prevent heatstroke and keep the stomach cool.',
          imageUrl: '/images/gj/aambil.jpg'
        },
        vessel: 'Clay Matka (Earthen Terracotta Pot)',
        cookingFat: 'Zero Fat',
        season: 'Peak Summer',
        flavorProfile: ['Fermented Millet Earthiness', 'Tangy Buttermilk', 'Roasted Cumin', 'Pungent Black Salt'],
        dietary: 'Vegetarian',
        imageUrl: '/images/gj/aambil.jpg'
      }
    ]
  },
  mh: {
    id: 'mh',
    name: 'Maharashtra',
    nativeName: 'महाराष्ट्र',
    capital: 'Mumbai',
    region: 'West',
    historicalEra: 'Maratha Forts & Konkan-Deccan Heritage',
    culinaryPhilosophy: 'Rich, contrasting geography of the Konkan coastline and dry Deccan plateau. Characterized by Goda masala, fiery Kolhapuri Lavangi chillies, peanut powders, and kokum.',
    heirloomVessels: ['Pital Handi', 'Cast Iron Tawa', 'Modak Patra (Steamer)'],
    signatureSpices: ['Goda Masala (Stone Flower & Coconut Blend)', 'Bedgi & Lavangi Chillies', 'Solkadhi Kokum', 'Dagad Phool'],
    stapleGrains: ['Jowar Bhakri', 'Ambemohar Aromatic Rice', 'Nachni (Ragi)'],
    representativeDish: {
      id: 'mh-dashmi-roti',
      name: 'Dashmi Roti',
      nativeName: 'दशमी पोळी',
      englishSubtitle: 'Jaggery & Milk Sweetened Travel Flatbread',
      tagline: 'Slightly sweet, tender flatbread kneaded in milk and jaggery with exceptional traveling shelf-life.',
      description: 'Dashmi is a slightly sweet, thick flatbread made using milk instead of water. Because it contains no water, it has a long shelf life and is a traditional travel food in Maharashtra.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Rural Deccan & Khandesh Hearth',
      culturalSignificance: 'Crafted for centuries as sustenance for travellers, pilgrims, and farmers traversing the rugged Western Ghats. The absence of water and kneading with milk and ghee keeps the bread soft and prevents spoiling for days without refrigeration.',
      servesCount: 'Yields 6–8 rotis',
      approxPrepTime: '30 min',
      ingredientSections: [
        {
          title: 'Dough & Sweet Milk Base',
          items: [
            { item: 'Whole wheat flour (atta)', amount: '2 cups' },
            { item: 'Grated jaggery (gud)', amount: '1/2 cup' },
            { item: 'Warm milk', amount: '3/4 cup', note: 'adjust as needed' }
          ]
        },
        {
          title: 'Aromatics & Roasting',
          items: [
            { item: 'Ghee or peanut oil', amount: '2 tbsp', note: 'plus extra for roasting' },
            { item: 'Salt', amount: 'pinch' },
            { item: 'Cardamom powder', amount: 'pinch', note: 'optional' }
          ]
        }
      ],
      ingredients: [
        { item: 'Whole wheat flour (atta)', amount: '2 cups' },
        { item: 'Grated jaggery (gud)', amount: '1/2 cup' },
        { item: 'Warm milk', amount: '3/4 cup' },
        { item: 'Pure ghee or peanut oil', amount: '2 tbsp' },
        { item: 'Pinch of salt and cardamom powder', amount: 'to taste' }
      ],
      preparationSteps: [
        'Dissolve: Soak the grated jaggery in the warm milk until it completely dissolves.',
        'Kneading: In a wide bowl, mix the whole wheat flour, salt, cardamom powder, and 2 tablespoons of ghee. Gradually add the jaggery-milk solution and knead it into a semi-stiff dough.',
        'Resting: Let the dough rest for 10–15 minutes.',
        'Rolling: Divide the dough into lemon-sized balls. Roll them out into circles that are slightly thicker than a standard chapati.',
        'Roasting: Heat a tawa (griddle) on medium flame. Roast the rolled roti on both sides, applying ghee until golden brown spots appear and the edges are cooked through.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Dissolve Jaggery in Milk',
          instruction: 'Stir grated jaggery into warm milk until thoroughly dissolved.'
        },
        {
          stepNum: 2,
          title: 'Knead Semi-Stiff Dough',
          instruction: 'Mix whole wheat flour with ghee, cardamom, and salt. Add jaggery milk in parts to knead a pliable, smooth dough.'
        },
        {
          stepNum: 3,
          title: 'Rolling the Rotis',
          instruction: 'Divide into lemon-sized balls and roll out slightly thicker than chapatis.'
        },
        {
          stepNum: 4,
          title: 'Ghee Roasting',
          instruction: 'Roast on a hot tawa with generous ghee until golden speckled on both sides.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm or at room temperature. It is traditionally eaten with spicy garlic chutney (thecha), mango pickle, or simply as a snack with a hot cup of masala chai.',
        imageUrl: '/images/mh/dashmi_roti.jpg'
      },
      vessel: 'Cast Iron Tawa (Griddle)',
      cookingFat: 'Pure Desi Ghee / Peanut Oil',
      season: 'All Seasons / Travel & Festive',
      flavorProfile: ['Subtle Jaggery Sweet', 'Cardamom Floral', 'Warm Toasted Ghee'],
      dietary: 'Vegetarian',
      imageUrl: '/images/mh/dashmi_roti.jpg',
      phonetic: 'DASH-mee POH-lee'
    },
    dishes: [
      {
        id: 'mh-dashmi-roti',
        name: 'Dashmi Roti',
        nativeName: 'दशमी पोळी',
        englishSubtitle: 'Jaggery & Milk Sweetened Travel Flatbread',
        tagline: 'Slightly sweet, tender flatbread kneaded in milk and jaggery with exceptional traveling shelf-life.',
        description: 'Dashmi is a slightly sweet, thick flatbread made using milk instead of water. Because it contains no water, it has a long shelf life and is a traditional travel food in Maharashtra.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Rural Deccan & Khandesh Hearth',
        culturalSignificance: 'Crafted for centuries as sustenance for travellers and pilgrims across the Western Ghats without refrigeration.',
        servesCount: 'Yields 6–8 rotis',
        approxPrepTime: '30 min',
        ingredientSections: [
          {
            title: 'Dough & Sweet Milk Base',
            items: [
              { item: 'Whole wheat flour', amount: '2 cups' },
              { item: 'Grated jaggery', amount: '1/2 cup' },
              { item: 'Warm milk', amount: '3/4 cup' }
            ]
          },
          {
            title: 'Roasting',
            items: [
              { item: 'Desi ghee', amount: 'for kneading & roasting' },
              { item: 'Cardamom & salt', amount: 'pinch each' }
            ]
          }
        ],
        ingredients: [
          { item: 'Whole wheat flour', amount: '2 cups' },
          { item: 'Grated jaggery', amount: '1/2 cup' },
          { item: 'Warm milk', amount: '3/4 cup' },
          { item: 'Ghee or peanut oil', amount: '2 tbsp' },
          { item: 'Salt and cardamom', amount: 'pinch' }
        ],
        preparationSteps: [
          'Dissolve jaggery in warm milk.',
          'Rub ghee into flour with salt and cardamom, then knead with jaggery milk into a semi-stiff dough.',
          'Rest for 15 minutes, divide into balls, and roll into rounds.',
          'Roast on a hot griddle with ghee until speckled with golden spots.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Kneading with Milk',
            instruction: 'Dissolve jaggery in warm milk and knead into flour and ghee.'
          },
          {
            stepNum: 2,
            title: 'Roasting on Tawa',
            instruction: 'Roast on iron tawa with ghee until cooked through and golden.'
          }
        ],
        servingSuggestion: {
          text: 'Serve with spicy green chili-garlic thecha, mango pickle, or hot masala chai.',
          imageUrl: '/images/mh/dashmi_roti.jpg'
        },
        vessel: 'Cast Iron Tawa',
        cookingFat: 'Pure Desi Ghee',
        season: 'All Year',
        flavorProfile: ['Sweet Jaggery', 'Toasted Grain', 'Aromatic Cardamom'],
        dietary: 'Vegetarian',
        imageUrl: '/images/mh/dashmi_roti.jpg'
      },
      {
        id: 'mh-ukadpendi',
        name: 'Ukadpendi',
        nativeName: 'उकडपेंडी',
        englishSubtitle: 'Roasted Spiced Wheat & Buttermilk Hearth Porridge',
        tagline: 'Quick comforting roasted wheat flour porridge slow-steamed in spiced sour buttermilk.',
        description: 'Ukadpendi is a savory, spiced flour porridge—often made with roasted whole wheat flour (or jowar flour) and buttermilk. It is a quick, comforting traditional breakfast.',
        preservationStatus: 'Endangered Oral Tradition',
        microOrigin: 'Vidarbha & Marathwada Kitchens',
        culturalSignificance: 'A rustic comfort dish from rural Maharashtra, Ukadpendi is prepared early in the morning using freshly churned taak (buttermilk). The slow addition of dry-roasted flour to bubbling spiced buttermilk requires practiced wrist rhythm to avoid lumps.',
        servesCount: 'Serves 3–4',
        approxPrepTime: '25 min',
        ingredientSections: [
          {
            title: 'Grains & Fermented Dairy',
            items: [
              { item: 'Whole wheat flour (coarse works best)', amount: '1 cup' },
              { item: 'Buttermilk', amount: '2 cups', note: 'or 1/2 cup yogurt whisked with 1.5 cups water' }
            ]
          },
          {
            title: 'Tadka & Aromatics',
            items: [
              { item: 'Medium onion', amount: '1', note: 'finely chopped' },
              { item: 'Green chilies', amount: '2-3', note: 'slit' },
              { item: 'Curry leaves', amount: '8-10' },
              { item: 'Mustard seeds (rai)', amount: '1/2 tsp' },
              { item: 'Cumin seeds (jeera)', amount: '1/2 tsp' },
              { item: 'Turmeric powder', amount: '1/4 tsp' },
              { item: 'Asafoetida (hing)', amount: 'a pinch' },
              { item: 'Peanut oil', amount: '2 tbsp' },
              { item: 'Salt', amount: 'to taste' },
              { item: 'Fresh coriander leaves', amount: 'for garnish' }
            ]
          }
        ],
        ingredients: [
          { item: 'Coarse whole wheat flour', amount: '1 cup' },
          { item: 'Cultured buttermilk (taak)', amount: '2 cups' },
          { item: 'Onion, finely chopped', amount: '1 medium' },
          { item: 'Green chilies & curry leaves', amount: 'to taste' },
          { item: 'Mustard seeds, cumin, hing & turmeric', amount: '1/2 tsp each' },
          { item: 'Peanut oil & salt', amount: '2 tbsp' },
          { item: 'Fresh coriander leaves', amount: 'for garnish' }
        ],
        preparationSteps: [
          'Dry Roasting: In a heavy-bottomed pan, dry roast the whole wheat flour on low heat until it emits a nutty aroma and turns slightly pinkish-brown. Remove and set aside.',
          'Tempering: In the same pan, heat the peanut oil. Add the mustard and cumin seeds. Once they splutter, add the hing, curry leaves, and green chilies.',
          'Sautéing: Add the chopped onions and sauté until they turn translucent. Stir in the turmeric powder.',
          'Boiling: Lower the heat and carefully pour in the buttermilk while stirring continuously to prevent the yogurt from splitting. Add salt and bring the liquid to a gentle boil.',
          'Whisking: Slowly add the roasted flour in a steady stream with one hand while vigorously whisking with the other to prevent lumps (similar to making polenta).',
          'Steaming: Once the flour absorbs the liquid and thickens into a porridge consistency, cover the pan with a lid. Let it steam on very low heat for 3–4 minutes.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Dry Roasting Flour',
            instruction: 'Dry roast coarse wheat flour on low heat until nutty and fragrant.'
          },
          {
            stepNum: 2,
            title: 'Tempering Aromatics',
            instruction: 'Heat peanut oil, splutter mustard and cumin seeds, and sauté onions with curry leaves and chilies.'
          },
          {
            stepNum: 3,
            title: 'Buttermilk Boiling',
            instruction: 'Pour in buttermilk while stirring continuously and bring to a gentle boil with salt.'
          },
          {
            stepNum: 4,
            title: 'Whisking & Steaming',
            instruction: 'Stream in roasted flour while whisking vigorously. Cover and steam on low heat for 3-4 minutes.'
          }
        ],
        servingSuggestion: {
          text: 'Serve piping hot in a bowl. Drizzle a spoonful of raw peanut oil or homemade ghee on top, and garnish generously with freshly chopped coriander. It pairs perfectly with a side of lemon pickle.',
          imageUrl: '/images/mh/ukadpendi.jpg'
        },
        vessel: 'Heavy Cast Iron Kadhai with tight lid',
        cookingFat: 'Cold-Pressed Peanut Oil or Ghee',
        season: 'Monsoon & Winter Mornings',
        flavorProfile: ['Tangy Buttermilk', 'Nutty Roasted Grain', 'Mustard & Curry Leaf Temper', 'Green Chili Heat'],
        dietary: 'Vegetarian',
        imageUrl: '/images/mh/ukadpendi.jpg'
      },
      {
        id: 'mh-bharli-vangi',
        name: 'Bharli Vangi (Stuffed Eggplant)',
        nativeName: 'भरली वांगी',
        englishSubtitle: 'Baby Eggplants Stuffed with Goda Masala, Peanuts & Coconut',
        tagline: 'Tender baby eggplants stuffed with a rich roasted peanut, sesame, and Goda masala stuffing.',
        description: 'This is a signature Maharashtrian delicacy featuring baby eggplants stuffed with a rich, dark, sweet-and-spicy coconut and peanut mixture, flavored with traditional Goda Masala.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Western Maharashtra & Deccan Plateau',
        culturalSignificance: 'A quintessential feast dish cooked for weddings and harvest gatherings. The complex spice foundation comes from Goda Masala—an aromatic Maharashtrian spice blend perfumed with stone flower (dagad phool) and dried coconut.',
        servesCount: 'Serves 4',
        approxPrepTime: '40 min',
        ingredientSections: [
          {
            title: 'Eggplants & Base Aromatics',
            items: [
              { item: 'Small baby eggplants (brinjals)', amount: '8-10' },
              { item: 'Medium onion', amount: '1', note: 'finely chopped' },
              { item: 'Ginger-garlic paste', amount: '1 tsp' }
            ]
          },
          {
            title: 'Heirloom Stuffing Paste',
            items: [
              { item: 'Roasted peanut powder', amount: '1/2 cup', note: 'coarsely ground' },
              { item: 'Desiccated coconut', amount: '1/4 cup', note: 'dry roasted until golden' },
              { item: 'Sesame seeds', amount: '2 tbsp', note: 'dry roasted' },
              { item: 'Goda Masala', amount: '2 tbsp' },
              { item: 'Red chili powder', amount: '1 tsp' },
              { item: 'Turmeric powder', amount: '1/2 tsp' },
              { item: 'Grated jaggery', amount: '1 tbsp' },
              { item: 'Tamarind pulp', amount: '1 tbsp' }
            ]
          },
          {
            title: 'Tadka & Gravy',
            items: [
              { item: 'Peanut oil', amount: '3 tbsp' },
              { item: 'Mustard seeds', amount: '1 tsp' },
              { item: 'Salt', amount: 'to taste' },
              { item: 'Fresh coriander leaves', amount: 'for garnish' }
            ]
          }
        ],
        ingredients: [
          { item: 'Baby eggplants (brinjals)', amount: '8-10' },
          { item: 'Roasted peanut powder', amount: '1/2 cup' },
          { item: 'Roasted coconut & sesame', amount: '1/4 cup + 2 tbsp' },
          { item: 'Goda Masala', amount: '2 tbsp' },
          { item: 'Tamarind pulp & jaggery', amount: '1 tbsp each' },
          { item: 'Peanut oil', amount: '3 tbsp' },
          { item: 'Mustard seeds, turmeric, chili & salt', amount: 'to taste' },
          { item: 'Onion & coriander', amount: 'as needed' }
        ],
        preparationSteps: [
          'Prepare Eggplants: Wash the baby eggplants and keep the stems intact. Make a cross-slit from the bottom up to the stem, without splitting them entirely. Soak them in salted water to prevent oxidation.',
          'Make the Stuffing: In a bowl, mix the roasted peanut powder, roasted coconut, roasted sesame seeds, Goda Masala, red chili powder, turmeric, jaggery, tamarind pulp, ginger-garlic paste, half of the chopped coriander, and salt. Add a few drops of oil and mix it into a thick, coarse paste.',
          'Stuffing: Drain the eggplants and gently stuff the masala mixture tightly into the slits of each one. Keep any leftover masala aside.',
          'Tempering: Heat oil in a heavy-bottomed pan or kadhai. Add mustard seeds and let them pop. Add the chopped onions and sauté until golden brown.',
          'Cooking: Gently place the stuffed eggplants into the pan. Sauté carefully for 2 minutes so they get coated in the oil.',
          'Simmering: Add the leftover stuffing mixture and about 1 to 1.5 cups of warm water. Stir gently, cover the pan, and simmer on low heat for 15–20 minutes until the eggplants are tender, the gravy is thick, and a layer of oil separates on top.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Eggplant Slitting',
            instruction: 'Cross-slit baby eggplants keeping stems intact. Soak in salted water.'
          },
          {
            stepNum: 2,
            title: 'Masala Paste Making',
            instruction: 'Mix ground peanuts, roasted coconut, sesame, Goda masala, tamarind, and jaggery into a moist stuffing.'
          },
          {
            stepNum: 3,
            title: 'Stuffing & Searing',
            instruction: 'Pack stuffing into eggplants. Sauté with onions and mustard seeds in peanut oil.'
          },
          {
            stepNum: 4,
            title: 'Slow Simmering',
            instruction: 'Add remaining masala and warm water. Simmer covered for 15-20 minutes until meltingly tender.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot with Jowar Bhakri, Bajra Bhakri, or Chapati. A traditional plate includes a side of raw sliced onions, a wedge of lemon, and fresh green chilies.',
          imageUrl: '/images/mh/bharli_vangi.jpg'
        },
        vessel: 'Heavy Cast Iron Kadhai / Mitti Handi',
        cookingFat: 'Cold-Pressed Peanut Oil',
        season: 'Autumn & Winter',
        flavorProfile: ['Rich Peanut Umami', 'Aromatic Goda Masala', 'Tangy Tamarind', 'Sweet Jaggery Accent'],
        dietary: 'Vegetarian',
        imageUrl: '/images/mh/bharli_vangi.jpg'
      }
    ]
  },
  or: {
    id: 'or',
    name: 'Odisha',
    nativeName: 'ଓଡ଼ିଶା',
    capital: 'Bhubaneswar',
    region: 'East',
    historicalEra: 'Kalinga Maritime Era & Jagannath Temple Chhappan Bhog',
    culinaryPhilosophy: 'Sacred temple purity, profound digestive wisdom, seasonal foraging of banana stems and drumstick foliage, wild lactic acid fermentation, and gentle mustard oil cooking.',
    heirloomVessels: ["Kansa Bati (Bell Metal Bowls)", "Khadika (Bamboo Skewers)", "Matka (Clay Fermentation Pot)"],
    signatureSpices: ["Pancha Phutana", "Sorisha (Mustard Seeds)", "Golmaricha (Black Pepper)", "Haladi Patra (Turmeric Leaves)"],
    stapleGrains: ["Arua Chaula (Raw Rice)", "Usuna Chaula (Parboiled Rice)", "Mandia (Ragi)"],
    representativeDish: {
      id: 'or-enduri-pitha',
      name: 'Enduri Pitha',
      nativeName: 'ଏଣ୍ଡୁରି ପିଠା',
      englishSubtitle: 'Haladi Patra Pitha / Steamed Turmeric Leaf Rice Cake',
      tagline: 'Fermented rice and urad dal batter wrapped in lush green turmeric leaves and steamed with sweet coconut-chhena filling.',
      description: 'Deeply entwined with the culinary heritage of Odisha, Enduri Pitha—often known as Haladi Patra Pitha—is a festive staple made during Prathamastami, a festival celebrating the health and long life of the firstborn. While traditionally an auspicious offering, it frequently doubles as a comforting, seasonal snack in Odia households. The soul of this steamed delicacy lies in the lush, green turmeric leaves that wrap the batter, releasing a warm, herbal fragrance that permeates deep into the cake.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Coastal & Rural Odia Kitchens, Prathamastami Festival',
      culturalSignificance: 'The aromatic hallmark of Odia culinary spirituality, harnessing fresh monsoon-to-winter turmeric leaves to infuse an irresistible earthy peppery perfume into fermented rice cakes.',
      servesCount: 'Yield: 6–8 pithas; serves 3–4',
      approxPrepTime: 'Active 30 min; batter ferment 8 hrs; steam 15 min',
      ingredientSections: [
        {
          title: 'Fermented Batter Base',
          items: [
            { item: 'Raw rice (chaula)', amount: '1.5 cups' },
            { item: 'Skinless black gram (biri / urad dal)', amount: '1 cup' },
            { item: 'Fresh green turmeric leaves (haladi patra)', amount: '6–8 leaves', note: 'wiped clean' },
            { item: 'Salt to taste (luna)', amount: 'a pinch' }
          ]
        },
        {
          title: 'Sweet Coconut & Chhena Stuffing',
          items: [
            { item: 'Freshly grated coconut (nadia kora)', amount: '1 cup' },
            { item: 'Fresh cottage cheese (chhena)', amount: '100 g' },
            { item: 'Organic dark jaggery (guda)', amount: '150 g' },
            { item: 'Green cardamoms (aleicha)', amount: '3', note: 'crushed' },
            { item: 'Black peppercorns (golmaricha)', amount: '6', note: 'crushed' }
          ]
        }
      ],
      ingredients: [
        { item: 'Raw rice (chaula)', amount: '1.5 cups' },
        { item: 'Skinless black gram (biri)', amount: '1 cup' },
        { item: 'Fresh grated coconut (nadia kora)', amount: '1 cup' },
        { item: 'Fresh cottage cheese (chhena)', amount: '100 g' },
        { item: 'Jaggery (guda)', amount: '150 g' },
        { item: 'Green cardamoms & black pepper', amount: '3 pods & 6 peppercorns' },
        { item: 'Fresh turmeric leaves (haladi patra)', amount: '6–8 leaves' },
        { item: 'Salt (luna)', amount: 'to taste' }
      ],
      preparationSteps: [
        'Rinse the rice and skinless black gram thoroughly, then soak them together for about 4 hours. Drain and grind into a thick, lush batter—aiming for a velvety black gram base with just a fine hint of grain left in the rice. Whip the batter vigorously to incorporate air, then set it in a warm corner to ferment for around 8 hours until light and aerated. Gently fold in a pinch of salt.',
        'Set a pan over medium heat and combine the grated coconut, fresh chhena, and jaggery. Stir gently as the jaggery melts, coating the mixture until the moisture cooks off and leaves you with a rich, glossy, semi-dry filling. Finish with crushed cardamom and the gentle bite of black pepper. Take off the flame and let it cool.',
        'Lay a fresh turmeric leaf flat along the counter, trimming the edges if it is overly wide. Spoon a generous ladle of batter down the center and gently smooth it into an oblong layer. Spoon the sweet coconut-chhena stuffing down the middle. Fold the leaf lengthwise along the spine so the batter wraps over the filling like a cocoon, sealing the sweet core inside.',
        'Steam the leaf packets until firm, fragrant, and a skewer inserted through the center comes out clean. If using an idli steamer, angle the long parcels along the racks so they fit comfortably, or tie muslin over a wide pot for authentic village steaming.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Ferment the Batter',
          instruction: 'Soak rice and urad dal 4 hrs, grind into a thick lush batter, whip vigorously, and ferment 8 hours in a warm corner.'
        },
        {
          stepNum: 2,
          title: 'Make the Chhena Stuffing',
          instruction: 'Cook grated coconut, chhena, and jaggery into a glossy semi-dry filling; season with cardamom and crushed black pepper.'
        },
        {
          stepNum: 3,
          title: 'Assemble the Pitha',
          instruction: 'Smooth batter down the center of each turmeric leaf, add sweet filling, and fold leaf lengthwise into a cocoon.'
        },
        {
          stepNum: 4,
          title: 'Steam to Perfection',
          instruction: 'Steam for 12–15 minutes until firm, springy, and permeated with herbal peppery turmeric leaf aroma.'
        }
      ],
      servingSuggestion: {
        text: 'Unwrap while still warm, letting the gentle, earthy perfume of the leaf drift away as you bite into the tender, sweet-filled rice cake.',
        imageUrl: '/images/or/enduri_pitha.jpg'
      },
      vessel: 'Athara Handi (Earthen Steamer with Muslin) or Idli Steamer',
      cookingFat: 'Zero-Oil (Steamed in Leaves)',
      season: 'Late Autumn / Prathamastami Festival',
      flavorProfile: ["Herbal Turmeric Leaf Perfume", "Sweet Jaggery-Chhena Core", "Gentle Black Pepper Bite", "Airy Fermented Rice Texture"],
      dietary: 'Vegetarian',
      imageUrl: '/images/or/enduri_pitha.jpg',
      phonetic: 'en-DOO-ree PEE-tah'
    },
    dishes: [
      {
      id: 'or-enduri-pitha',
      name: 'Enduri Pitha',
      nativeName: 'ଏଣ୍ଡୁରି ପିଠା',
      englishSubtitle: 'Haladi Patra Pitha / Steamed Turmeric Leaf Rice Cake',
      tagline: 'Fermented rice and urad dal batter wrapped in lush green turmeric leaves and steamed with sweet coconut-chhena filling.',
      description: 'Deeply entwined with the culinary heritage of Odisha, Enduri Pitha—often known as Haladi Patra Pitha—is a festive staple made during Prathamastami, a festival celebrating the health and long life of the firstborn. While traditionally an auspicious offering, it frequently doubles as a comforting, seasonal snack in Odia households. The soul of this steamed delicacy lies in the lush, green turmeric leaves that wrap the batter, releasing a warm, herbal fragrance that permeates deep into the cake.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Coastal & Rural Odia Kitchens, Prathamastami Festival',
      culturalSignificance: 'The aromatic hallmark of Odia culinary spirituality, harnessing fresh monsoon-to-winter turmeric leaves to infuse an irresistible earthy peppery perfume into fermented rice cakes.',
      servesCount: 'Yield: 6–8 pithas; serves 3–4',
      approxPrepTime: 'Active 30 min; batter ferment 8 hrs; steam 15 min',
      ingredientSections: [
        {
          title: 'Fermented Batter Base',
          items: [
            { item: 'Raw rice (chaula)', amount: '1.5 cups' },
            { item: 'Skinless black gram (biri / urad dal)', amount: '1 cup' },
            { item: 'Fresh green turmeric leaves (haladi patra)', amount: '6–8 leaves', note: 'wiped clean' },
            { item: 'Salt to taste (luna)', amount: 'a pinch' }
          ]
        },
        {
          title: 'Sweet Coconut & Chhena Stuffing',
          items: [
            { item: 'Freshly grated coconut (nadia kora)', amount: '1 cup' },
            { item: 'Fresh cottage cheese (chhena)', amount: '100 g' },
            { item: 'Organic dark jaggery (guda)', amount: '150 g' },
            { item: 'Green cardamoms (aleicha)', amount: '3', note: 'crushed' },
            { item: 'Black peppercorns (golmaricha)', amount: '6', note: 'crushed' }
          ]
        }
      ],
      ingredients: [
        { item: 'Raw rice (chaula)', amount: '1.5 cups' },
        { item: 'Skinless black gram (biri)', amount: '1 cup' },
        { item: 'Fresh grated coconut (nadia kora)', amount: '1 cup' },
        { item: 'Fresh cottage cheese (chhena)', amount: '100 g' },
        { item: 'Jaggery (guda)', amount: '150 g' },
        { item: 'Green cardamoms & black pepper', amount: '3 pods & 6 peppercorns' },
        { item: 'Fresh turmeric leaves (haladi patra)', amount: '6–8 leaves' },
        { item: 'Salt (luna)', amount: 'to taste' }
      ],
      preparationSteps: [
        'Rinse the rice and skinless black gram thoroughly, then soak them together for about 4 hours. Drain and grind into a thick, lush batter—aiming for a velvety black gram base with just a fine hint of grain left in the rice. Whip the batter vigorously to incorporate air, then set it in a warm corner to ferment for around 8 hours until light and aerated. Gently fold in a pinch of salt.',
        'Set a pan over medium heat and combine the grated coconut, fresh chhena, and jaggery. Stir gently as the jaggery melts, coating the mixture until the moisture cooks off and leaves you with a rich, glossy, semi-dry filling. Finish with crushed cardamom and the gentle bite of black pepper. Take off the flame and let it cool.',
        'Lay a fresh turmeric leaf flat along the counter, trimming the edges if it is overly wide. Spoon a generous ladle of batter down the center and gently smooth it into an oblong layer. Spoon the sweet coconut-chhena stuffing down the middle. Fold the leaf lengthwise along the spine so the batter wraps over the filling like a cocoon, sealing the sweet core inside.',
        'Steam the leaf packets until firm, fragrant, and a skewer inserted through the center comes out clean. If using an idli steamer, angle the long parcels along the racks so they fit comfortably, or tie muslin over a wide pot for authentic village steaming.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Ferment the Batter',
          instruction: 'Soak rice and urad dal 4 hrs, grind into a thick lush batter, whip vigorously, and ferment 8 hours in a warm corner.'
        },
        {
          stepNum: 2,
          title: 'Make the Chhena Stuffing',
          instruction: 'Cook grated coconut, chhena, and jaggery into a glossy semi-dry filling; season with cardamom and crushed black pepper.'
        },
        {
          stepNum: 3,
          title: 'Assemble the Pitha',
          instruction: 'Smooth batter down the center of each turmeric leaf, add sweet filling, and fold leaf lengthwise into a cocoon.'
        },
        {
          stepNum: 4,
          title: 'Steam to Perfection',
          instruction: 'Steam for 12–15 minutes until firm, springy, and permeated with herbal peppery turmeric leaf aroma.'
        }
      ],
      servingSuggestion: {
        text: 'Unwrap while still warm, letting the gentle, earthy perfume of the leaf drift away as you bite into the tender, sweet-filled rice cake.',
        imageUrl: '/images/or/enduri_pitha.jpg'
      },
      vessel: 'Athara Handi (Earthen Steamer with Muslin) or Idli Steamer',
      cookingFat: 'Zero-Oil (Steamed in Leaves)',
      season: 'Late Autumn / Prathamastami Festival',
      flavorProfile: ["Herbal Turmeric Leaf Perfume", "Sweet Jaggery-Chhena Core", "Gentle Black Pepper Bite", "Airy Fermented Rice Texture"],
      dietary: 'Vegetarian',
      imageUrl: '/images/or/enduri_pitha.jpg',
      phonetic: 'en-DOO-ree PEE-tah'
      },
      {
      id: 'or-manja-rai',
      name: 'Manja Rai',
      nativeName: 'ମଞ୍ଜା ରାଇ',
      englishSubtitle: 'Spiced Banana Stem in Mustard Gravy',
      tagline: 'Crisp, therapeutic banana pseudo-stem simmered with potatoes in a pungent mustard-garlic-cumin paste.',
      description: 'A rustic classic from the home kitchens of Odisha, Manja Rai turns one of nature’s most humble, fibrous gifts—the tender inner core of the banana pseudo-stem (manja)—into an aromatic, comforting delicacy. Revered in traditional Odia food wisdom for its therapeutic and digestive qualities, the banana stem requires careful handling to discard its web of delicate, clinging threads. In this preparation, the sweet, crisp stem is paired with tender potatoes and simmered in a sharp, pungent mustard-cumin-garlic paste (rai), creating a lightly textured, fragrant side dish deeply rooted in village cooking traditions.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Odia Village Courtyards & Rural Kitchens',
      culturalSignificance: 'A testament to traditional botanical wisdom, utilizing banana plantation cores to cleanse the renal tract while providing a zesty everyday side.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '25 min',
      ingredientSections: [
        {
          title: 'Tender Stem & Potatoes',
          items: [
            { item: 'Tender banana pseudo-stem (manja)', amount: '1 medium segment', note: 'fibers removed, finely diced' },
            { item: 'Potato (alu)', amount: '1 medium', note: 'peeled and finely cubed' }
          ]
        },
        {
          title: 'Pungent Rai Paste & Tempering',
          items: [
            { item: 'Mustard seeds (sorisha)', amount: '1.5 tbsp', note: 'ground into paste' },
            { item: 'Cumin seeds (jeera)', amount: '1 tsp', note: 'ground into paste' },
            { item: 'Garlic cloves (rasuna)', amount: '5–6', note: 'ground into paste' },
            { item: 'Whole mustard seeds', amount: '1 tsp', note: 'for tempering' },
            { item: 'Turmeric & red chili powder', amount: '1/2 tsp each' },
            { item: 'Mustard oil (tela)', amount: '2 tbsp' },
            { item: 'Salt to taste (luna)', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Tender banana stem (manja)', amount: '1 segment', note: 'diced' },
        { item: 'Potato (alu)', amount: '1 medium', note: 'cubed' },
        { item: 'Mustard seeds (sorisha)', amount: '1.5 tbsp + 1 tsp' },
        { item: 'Cumin seeds (jeera)', amount: '1 tsp' },
        { item: 'Garlic cloves (rasuna)', amount: '5–6' },
        { item: 'Red chili & turmeric powder', amount: '1/2 tsp each' },
        { item: 'Mustard oil (tela)', amount: '2 tbsp' },
        { item: 'Salt (luna)', amount: 'to taste' }
      ],
      preparationSteps: [
        'Trim the outer fibrous sheath to expose the pale, crisp inner core of the stem. Slice it crosswise into thin rounds; as you cut, catch the fine, hair-like fibers with your fingers or twirl them around a small stick to pull them away. Drop the slices directly into a bowl of water to prevent browning, then finely chop into small dice.',
        'In a small wet grinder or mortar, blend the mustard seeds, cumin seeds, garlic cloves, and a small splash of water into a thick, smooth, velvety paste.',
        'Heat the oil in a heavy-bottomed skillet over medium heat. Toss in a teaspoon of mustard seeds and let them crackle vigorously. Add the cubed potatoes and drained banana stem. Sauté gently for 3 to 4 minutes until they turn glossy and begin to soften.',
        'Stir in the prepared mustard-garlic paste along with the turmeric powder, red chili powder, and salt. Sauté over low heat for barely a minute—taking care not to scorch the mustard base. Pour in about half a cup of warm water, cover with a tight lid, and simmer over low flame until the stem turns tender-crisp and the potatoes are fork-soft.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Clean and De-thread',
          instruction: 'Slice banana stem into rounds, twirl away thread-like fibers on a stick, and submerge in water before finely dicing.'
        },
        {
          stepNum: 2,
          title: 'Grind the Rai Paste',
          instruction: 'Wet-grind mustard seeds, cumin seeds, garlic cloves, and a splash of water into a silky pungent paste.'
        },
        {
          stepNum: 3,
          title: 'Sauté the Vegetables',
          instruction: 'Crackle mustard seeds in mustard oil; sauté potatoes and diced banana stem 3–4 min until glossy.'
        },
        {
          stepNum: 4,
          title: 'Simmer with Spices',
          instruction: 'Add rai paste, turmeric, chili powder, and salt; braise with 1/2 cup water covered on low flame until tender-crisp.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm alongside steamed rice and a simple dal, letting the pungent punch of mustard and garlic bring out the gentle sweetness of the stem.',
        imageUrl: '/images/or/manja_rai.jpg'
      },
      vessel: 'Heavy Cast Iron Kadhai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'All Seasons / Therapeutic Everyday Cooking',
      flavorProfile: ["Pungent Mustard Rai Kick", "Crisp Fibrous Sweet Stem", "Toasted Garlic Warmth", "Earthy Cumin Undertone"],
      dietary: 'Vegan',
      imageUrl: '/images/or/manja_rai.jpg',
      phonetic: 'MAHN-jah RYE'
      },
      {
      id: 'or-machha-munda-mudhi-ghanta',
      name: 'Machha Munda Mudhi Ghanta',
      nativeName: 'ମାଛ ମୁଣ୍ଡ ମୁଢ଼ି ଘାଣ୍ଟ',
      englishSubtitle: 'Spiced Fish Head with Lentils & Vegetables',
      tagline: 'Prized freshwater Rohu fish head fractured and slow-simmered with chana dal, red lentils, pumpkin, and roasted spices.',
      description: 'A celebrated feast-day specialty from Odisha, Machha Munda Mudhi Ghanta is a slow-cooked, hearty medley centered around prized freshwater fish heads—traditionally Rohu (Rohi) or Catla (Bhakur). While closely related to the rustic Odia favorite Chinchada, this dish elevates the profile by weaving split chickpeas and red lentils directly into the mix, giving the gravy a luxurious, velvety body. As the golden-fried fish head simmers alongside tender chunks of pumpkin, potato, and aromatics, it fractures gently, releasing its rich juices into the spiced, lentil-thickened base.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Cuttack & Coastal Odia Festive Banquets',
      culturalSignificance: 'The indisputable star of celebratory gatherings and Durga Puja family reunions in Odisha, transforming the sweetest part of the fish into a rich textured stew.',
      servesCount: 'Yield: 4–5 servings',
      approxPrepTime: '45 min',
      ingredientSections: [
        {
          title: 'Crisp Fish Heads & Split Pulses',
          items: [
            { item: 'Freshwater fish heads (machha munda)', amount: '2', note: 'Rohu or Catla, split in halves' },
            { item: 'Split chickpeas (chana dal / buta dali)', amount: '1/2 cup' },
            { item: 'Red lentils (masoor dal / masoori dali)', amount: '1/2 cup' },
            { item: 'Pumpkin (kakharu)', amount: '200 g', note: 'diced into large chunks' },
            { item: 'Potatoes (alu)', amount: '2 medium', note: 'peeled and cubed' }
          ]
        },
        {
          title: 'Aromatics, Paste & Odia Masala',
          items: [
            { item: 'Large onions (piaja)', amount: '1 sliced + 1 for paste' },
            { item: 'Ginger and garlic paste', amount: '2-inch ginger & 5 garlic cloves' },
            { item: 'Large tomato', amount: '1', note: 'roughly chopped' },
            { item: 'Bay leaves & dried red chilies', amount: '2 each' },
            { item: 'Cumin & coriander powder', amount: '1 tsp cumin, 2 tsp coriander' },
            { item: 'Turmeric, chili & garam masala', amount: '2 tsp turmeric, 1 tsp chili, 1 tsp garam masala' },
            { item: 'Pure mustard oil (sorisha tela)', amount: '2–3 tbsp' },
            { item: 'Salt to taste (luna)', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Freshwater fish heads (Rohu/Catla)', amount: '2', note: 'split in halves' },
        { item: 'Split chickpeas (chana dal)', amount: '1/2 cup' },
        { item: 'Red lentils (masoor dal)', amount: '1/2 cup' },
        { item: 'Pumpkin (kakharu)', amount: '200 g' },
        { item: 'Potatoes (alu)', amount: '2 medium' },
        { item: 'Onions, ginger, garlic & tomato', amount: '2 onions, aromatics paste, 1 tomato' },
        { item: 'Bay leaves, whole mustard & cumin', amount: '2 leaves, 1/2 tsp each seeds' },
        { item: 'Turmeric, coriander, cumin, chili, garam masala', amount: 'ground spices' },
        { item: 'Mustard oil (sorisha tela)', amount: '2–3 tbsp' },
        { item: 'Salt (luna)', amount: 'to taste' }
      ],
      preparationSteps: [
        'Rinse the split chickpeas and red lentils together, then soak in water for 20 minutes. Rub the cleaned fish heads with a teaspoon of turmeric powder and salt, ensuring the spices coat all crevices.',
        'Heat mustard oil in a wide pan until it lightly smokes. Slide in the marinated fish heads and fry over medium flame until crisp and deep golden brown on all sides. Remove and set aside.',
        'In a pressure cooker, heat a tablespoon of mustard oil. Add one bay leaf, half the mustard seeds, and half the cumin seeds. Add cubed potatoes, pumpkin, soaked lentils, half the turmeric, chili powder, and salt. Cook for 2 whistles on medium heat until soft but not mushy.',
        'In a heavy-bottomed kadai, heat another splash of oil. Splutter remaining mustard, cumin, dried red chilies, and second bay leaf. Fry sliced onions golden brown, sauté onion-ginger-garlic paste until oil surfaces, then cook down chopped tomatoes and ground spices.',
        'Add the fried fish heads into the sautéed masala, crushing them lightly with the back of a ladle so they release their flavor into the paste. Gently pour in the boiled lentils and vegetables from the cooker. Stir, bring to a gentle boil, and simmer for 5 to 7 minutes.',
        'Sprinkle the garam masala over the top, give it a final gentle mix, and cover the pan for 1 to 2 minutes off the heat to seal in the aromas.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Marinate & Soak',
          instruction: 'Soak chana and masoor dal 20 min. Coat fish heads thoroughly with turmeric and salt.'
        },
        {
          stepNum: 2,
          title: 'Deep-Fry Fish Heads',
          instruction: 'Fry marinated fish heads in smoking mustard oil until deep golden-brown and crisp on all sides.'
        },
        {
          stepNum: 3,
          title: 'Pressure-Cook Lentils',
          instruction: 'Cook soaked lentils, potatoes, and pumpkin with bay leaf and spices for 2 whistles until tender.'
        },
        {
          stepNum: 4,
          title: 'Build the Masala Base',
          instruction: 'Sauté onions, ginger-garlic paste, tomatoes, and ground spices in mustard oil until aromatic and oil edges.'
        },
        {
          stepNum: 5,
          title: 'Crush and Simmer',
          instruction: 'Add fried fish heads, crack lightly with ladle, pour in cooked lentils and vegetables, and simmer 5–7 min.'
        },
        {
          stepNum: 6,
          title: 'Garam Masala Finish',
          instruction: 'Scatter garam masala on top and rest covered for 2 minutes.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm with a generous mound of steaming white rice, relishing the deep, savory balance between the rich fish head and the earthy, sweet lentils.',
        imageUrl: '/images/or/machha_munda_mudhi_ghanta.jpg'
      },
      vessel: 'Heavy Bottomed Odia Kadai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Festivals, Weddings & Winter Celebrations',
      flavorProfile: ["Rich Sweet Fish Head Collagen", "Earthy Creamy Lentils", "Sweet Pumpkin Melange", "Aromatic Garam Masala Warmth"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/or/machha_munda_mudhi_ghanta.jpg',
      phonetic: 'MAH-chah MOON-dah MOO-dhee GHAHN-tah'
      },
      {
      id: 'or-pakhala-bhata',
      name: 'Pakhala Bhata',
      nativeName: 'ପଖାଳ ଭାତ',
      englishSubtitle: 'Odia Fermented & Tempered Rice Water',
      tagline: 'Ancient fermented rice submerged in probiotic water, tempered with mustard seeds, curry leaves, ginger, and curd.',
      description: 'A culinary lifeline across Odisha, Pakhala Bhata is an ancient, cooling staple engineered perfectly for the tropical summer heat. At its heart, it is cooked rice submerged in water and allowed to ferment naturally, cultivating lactic acid cultures that break down anti-nutrients and significantly enhance the bioavailability of minerals like iron, potassium, and calcium. While typically set aside during the chill of winter, it commands deep devotion across the state, celebrated globally every year on March 20th as Pakhala Dibasa.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Everyday Odia Households Across All Districts',
      culturalSignificance: 'The sacred cooling ritual of Lord Jagannath during Chandan Yatra, and the life-giving summer staple of agrarian Odisha.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: 'Active 15 min; fermentation 8–10 hrs',
      ingredientSections: [
        {
          title: 'Fermented Rice Base',
          items: [
            { item: 'Aged short-grain raw or parboiled rice', amount: '1 cup', note: 'arua or usuna chaula' },
            { item: 'Clean water for soaking', amount: '4 cups' },
            { item: 'Fresh curd / yogurt (dahi)', amount: '1/2 cup', note: 'for Dahi Pakhala' },
            { item: 'Salt to taste (luna)', amount: 'to taste' }
          ]
        },
        {
          title: 'Chhunka (Tempering)',
          items: [
            { item: 'Mustard oil or pure ghee', amount: '1 tsp' },
            { item: 'Mustard seeds (sorisha)', amount: '1/2 tsp' },
            { item: 'Fresh curry leaves (bhrusanga patra)', amount: '1 sprig' },
            { item: 'Whole dried red chili', amount: '1' },
            { item: 'Crushed fresh ginger (ada)', amount: 'small knob' }
          ]
        }
      ],
      ingredients: [
        { item: 'Aged short-grain rice (arua/usuna)', amount: '1 cup' },
        { item: 'Water for cooking & fermenting', amount: '4 cups' },
        { item: 'Fresh dahi (curd)', amount: '1/2 cup', note: 'optional' },
        { item: 'Mustard seeds (sorisha)', amount: '1/2 tsp' },
        { item: 'Curry leaves & dry red chili', amount: '1 sprig & 1 chili' },
        { item: 'Crushed ginger', amount: '1 small knob' },
        { item: 'Mustard oil or ghee', amount: '1 tsp' },
        { item: 'Salt (luna)', amount: 'to taste' }
      ],
      preparationSteps: [
        'Rinse the aged rice thoroughly and boil in water until just cooked through—the grains should be tender but hold their structure, never turned to mush. Drain off the excess starch water (peja) and spread the rice out in a wide bowl to cool completely to room temperature.',
        'Choose your variant: For Basi Pakhala (Overnight Fermented), place the cooled rice into a traditional porous clay pot (matka), submerge fully in clean water, cover loosely, and let rest undisturbed overnight (8–10 hours) until a mild sour effervescence develops. For Dahi Pakhala, whisk plain yogurt with salt and fold it into the water.',
        'Heat a teaspoon of oil in a small pan. Crackle the mustard seeds, then toss in the dried red chili, curry leaves, and crushed ginger. Let the aromatics bloom for a few seconds until fragrant, then pour the sizzling temper directly over the cold, water-soaked rice.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Cook and Cool the Rice',
          instruction: 'Cook aged short-grain rice until tender yet distinct, drain peja, and cool completely to room temperature.'
        },
        {
          stepNum: 2,
          title: 'Overnight Ferment (Basi)',
          instruction: 'Submerge rice in clean water in a terracotta matka, ferment 8–10 hours until gently effervescent, and fold in curd.'
        },
        {
          stepNum: 3,
          title: 'Tempering (Chhunka)',
          instruction: 'Sizzle mustard seeds, curry leaves, red chili, and ginger in hot oil; pour sizzling temper over the chilled fermented bowl.'
        }
      ],
      servingSuggestion: {
        text: 'Serve chilled or at room temperature, ideally paired with rustic accompaniments like badi chura (crushed spiced lentil fritters), roasted fish (machha bhaja), or simple mashed greens (saga bhaja).',
        imageUrl: '/images/or/pakhala_bhata.jpg'
      },
      vessel: 'Terracotta Clay Matka & Bell Metal Kansa Bowl',
      cookingFat: 'Minimal Mustard Oil or Desi Ghee (1 tsp)',
      season: 'Peak Summer (Pakhala Dibasa on March 20th)',
      flavorProfile: ["Tangy Probiotic Effervescence", "Cooling Refreshing Rice Water", "Sizzling Mustard-Curry Leaf Chhunka", "Zesty Crushed Ginger"],
      dietary: 'Vegetarian',
      imageUrl: '/images/or/pakhala_bhata.jpg',
      phonetic: 'pah-KHAH-lah BHAH-tah'
      },
      {
      id: 'or-sajana-saga-kharada',
      name: 'Sajana Saga Kharada',
      nativeName: 'ସଜନା ଶାଗ ଖରଡ଼ା',
      englishSubtitle: 'Stir-Fried Drumstick Leaves with Moong Dal & Coconut',
      tagline: 'Nutrient-dense tender moringa leaves simmered with split moong dal, freshly grated coconut, and garlic chhunka.',
      description: 'While the slender pods of the Moringa oleifera tree (known variably across India as drumstick, sahjan, or muniga) are culinary regulars, its tiny green leaves hide immense nutrient density and time-tested therapeutic value. In Odia households, Sajana Saga Kharada is an everyday treasure celebrated for its antimicrobial goodness and gentle, earthy bitterness. Simmered alongside golden yellow split moong dal, softened with freshly grated coconut, and finished with a fragrant mustard-garlic temper, this humble stir-fry elevates backyard foraging into nourishing, wholesome comfort.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Backyard Gardens Across Rural Odisha',
      culturalSignificance: 'A pillar of traditional wellness cooking in Odisha, revered for fortifying health and immunity through backyard moringa harvesting.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '20 min',
      ingredientSections: [
        {
          title: 'Tender Moringa & Golden Moong',
          items: [
            { item: 'Tender drumstick/moringa leaves (sajana saga)', amount: '2 cups', note: 'stripped and cleaned' },
            { item: 'Yellow split gram (muga dali)', amount: '3 tbsp', note: 'lightly rinsed' },
            { item: 'Freshly grated coconut (nadia kora)', amount: '3 tbsp' }
          ]
        },
        {
          title: 'Tempering & Sweet Aromatics',
          items: [
            { item: 'Medium onion (piaja)', amount: '1', note: 'thinly sliced' },
            { item: 'Garlic cloves (rasuna)', amount: '4–5', note: 'lightly crushed' },
            { item: 'Mustard seeds (sorisha)', amount: '1 tsp' },
            { item: 'Dried red chilies (sukhila lanka)', amount: '1–2' },
            { item: 'Mustard oil (sorisha tela)', amount: '1.5 tbsp' },
            { item: 'Salt to taste (luna)', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Tender moringa leaves (sajana saga)', amount: '2 cups' },
        { item: 'Yellow split moong dal (muga dali)', amount: '3 tbsp' },
        { item: 'Freshly grated coconut (nadia kora)', amount: '3 tbsp' },
        { item: 'Onion (piaja)', amount: '1 medium', note: 'sliced' },
        { item: 'Garlic cloves (rasuna)', amount: '4–5', note: 'crushed' },
        { item: 'Mustard seeds & dry red chilies', amount: '1 tsp seeds, 2 chilies' },
        { item: 'Mustard oil (sorisha tela)', amount: '1.5 tbsp' },
        { item: 'Salt (luna)', amount: 'to taste' }
      ],
      preparationSteps: [
        'Pluck the tiny, tender drumstick leaves away from their fibrous stalks and woody stems—discarding any tough bits that can cause bitterness. Wash the leaves thoroughly in a colander under running water and drain well.',
        'Place a heavy pan over medium heat. Add the cleaned moringa leaves along with the yellow split moong dal, a splash of water (about 1/2 to 3/4 cup), and salt to taste. Cover and simmer gently until the dal turns soft and tender yet retains its shape, and excess moisture evaporates.',
        'In a separate small skillet, heat the mustard oil until shimmering. Toss in the mustard seeds and let them splutter briskly. Add the dried red chilies and crushed garlic cloves, sautéing until aromatic. Slide in the sliced onions and fry until soft with golden-brown edges.',
        'Pour the sizzling oil, aromatic garlic, and caramelized onions directly over the boiled moringa-dal mixture. Stir in the freshly grated coconut, tossing everything together over low heat for 2 to 3 minutes until the flavors marry and the pan is completely dry.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Strip and Clean Leaves',
          instruction: 'Pluck tender leaves away from tough stems to prevent bitterness; rinse thoroughly and drain.'
        },
        {
          stepNum: 2,
          title: 'Boil Dal and Greens',
          instruction: 'Simmer moringa leaves with moong dal, salt, and 1/2 cup water until dal is tender and moisture evaporates.'
        },
        {
          stepNum: 3,
          title: 'Make the Chhunka',
          instruction: 'Sizzle mustard seeds, dried red chilies, crushed garlic, and sliced onions in mustard oil until golden.'
        },
        {
          stepNum: 4,
          title: 'Toss with Grated Coconut',
          instruction: 'Pour sizzling temper over greens, fold in fresh grated coconut, and toss on low heat until completely dry.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm with a ladle of hot dal, fluffy steamed rice, or alongside a cool bowl of Pakhala Bhata on a sultry afternoon.',
        imageUrl: '/images/or/sajana_saga_kharada.jpg'
      },
      vessel: 'Cast Iron Skillet or Kadhai',
      cookingFat: 'Cold-Pressed Mustard Oil',
      season: 'Spring & Summer (New Foliage Season)',
      flavorProfile: ["Gentle Herbal Bitterness", "Sweet Nutty Coconut", "Caramelized Garlic-Onion Temper", "Nutritious Moong Dal Texture"],
      dietary: 'Vegan',
      imageUrl: '/images/or/sajana_saga_kharada.jpg',
      phonetic: 'sah-JAH-nah SHAH-gah khah-RAH-dah'
      }
    ]
  },
  up: {
    id: 'up',
    name: 'Uttar Pradesh',
    nativeName: 'उत्तर प्रदेश',
    capital: 'Lucknow',
    region: 'North',
    historicalEra: 'Awadh Nawabi Dastarkhwan & Kashi Heritage',
    culinaryPhilosophy: 'Subtle aromatic dum cooking in sealed copper degs, slow simmering, fine hand-pounded kebabs, vibrant Varanasi chaat culture, and seasonal winter green-pea gravies.',
    heirloomVessels: ['Lagan (Wide Shallow Copper Pot)', 'Handi with Dough Seal', 'Iron Kadhai'],
    signatureSpices: ['Potli Masala', 'Mace (Javitri)', 'Yellow Chilli Powder', 'Kewra Water', 'Roasted Cumin'],
    stapleGrains: ['Lucknowi Basmati Rice', 'Fine Sharbati Atta', 'Roasted Gram (Sattu)'],
    representativeDish: {
      id: 'up-galouti-kebab',
      name: 'Awadhi-Style Galouti Kebab',
      nativeName: 'गलौटी कबाब',
      englishSubtitle: 'Melt-in-the-Mouth Spiced Meat Patties',
      tagline: 'Regal Lucknowi hand-pounded meat patties marinated with browned onions, mace, and roasted gram flour.',
      description: 'Galouti kebab is associated with Awadhi cuisine and is known for its tender, finely textured mixture. Traditional professional recipes may use specialised spice blends and meat-tenderising methods; this home adaptation uses minced meat, fried onion, and warm spices. The mixture should be soft enough to shape but not wet enough to collapse in the pan.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Lucknow Nawabi Kitchens',
      culturalSignificance: 'Created in the court of Nawab Asad-ud-Daula by master khansamas for a toothless royal patron. The meat is passed repeatedly through sieves and infused with delicate botanicals so it melts instantaneously on the palate.',
      servesCount: 'Yield: 12 small kebabs',
      approxPrepTime: 'Preparation 30 min; resting 30 min; cooking 20 min',
      ingredientSections: [
        {
          title: 'Meat & Marinade',
          items: [
            { item: 'Finely minced lamb or goat', amount: '500g' },
            { item: 'Ginger-garlic paste', amount: '1 tbsp' },
            { item: 'Thinly sliced onion', amount: '1 medium', note: 'fried golden & crushed' }
          ]
        },
        {
          title: 'Aromatic Spices & Binder',
          items: [
            { item: 'Roasted cumin powder', amount: '1 tsp' },
            { item: 'Coriander powder', amount: '1 tsp' },
            { item: 'Garam masala', amount: '1/2 tsp' },
            { item: 'Ground black pepper', amount: '1/4 tsp' },
            { item: 'Chilli powder', amount: '1/2 tsp', note: 'optional' },
            { item: 'Roasted gram flour (besan)', amount: '1 tbsp', note: 'as needed for binding' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'Chopped coriander or mint', amount: '1 tbsp', note: 'optional' }
          ]
        },
        {
          title: 'Searing',
          items: [
            { item: 'Ghee or neutral oil', amount: '2 tbsp', note: 'for shallow frying' }
          ]
        }
      ],
      ingredients: [
        { item: 'Finely minced meat (lamb/goat)', amount: '500g' },
        { item: 'Fried crushed onion', amount: '1 medium' },
        { item: 'Roasted gram flour (besan)', amount: '1 tbsp' },
        { item: 'Ginger-garlic paste', amount: '1 tbsp' },
        { item: 'Roasted cumin, coriander & garam masala', amount: 'to taste' },
        { item: 'Pure desi ghee', amount: 'for shallow frying' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Heat 2 tbsp ghee/oil, fry sliced onion until deep golden, drain and crush finely.',
        'In a bowl, mix minced meat with ginger-garlic paste, cumin, coriander, garam masala, pepper, chilli, salt, and the fried onion. Knead for several minutes until cohesive.',
        'Cover and refrigerate for 30 minutes to firm the mixture.',
        'Add roasted gram flour a teaspoon at a time if needed for binding.',
        'Shape into small, flat patties with greased hands.',
        'Heat a thin layer of ghee in a heavy pan over medium-low heat. Cook patties in batches until a crust forms, then turn gently and cook through.',
        'Rest briefly on a warm plate before serving.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Brown Onion & Meat Knead',
          instruction: 'Fry sliced onion until golden and crush. Knead thoroughly into fine minced meat with aromatics and spices.'
        },
        {
          stepNum: 2,
          title: 'Chill & Shape Patties',
          instruction: 'Refrigerate mixture for 30 minutes. Bind with roasted gram flour and shape into flat patties.'
        },
        {
          stepNum: 3,
          title: 'Ghee Griddle Sear',
          instruction: 'Slow-fry patties in ghee on medium-low heat until browned and tender throughout.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot with mint chutney, sliced onions, lemon wedges, and paper-thin roomali roti or sheermal.',
        imageUrl: '/images/up/galouti_kebab.jpg'
      },
      vessel: 'Mahi Tawa or Cast Iron Skillet',
      cookingFat: 'Pure Desi Ghee',
      season: 'Festive & Winter Evenings',
      flavorProfile: ['Melting Texture', 'Fried Onion Sweetness', 'Aromatic Mace & Garam Masala', 'Charred Ghee'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/up/galouti_kebab.jpg',
      phonetic: 'gah-LOW-tee kah-BAHB'
    },
    dishes: [
      {
        id: 'up-galouti-kebab',
        name: 'Awadhi-Style Galouti Kebab',
        nativeName: 'गलौटी कबाब',
        englishSubtitle: 'Melt-in-the-Mouth Spiced Meat Patties',
        tagline: 'Regal Lucknowi hand-pounded meat patties marinated with browned onions, mace, and roasted gram flour.',
        description: 'Galouti kebab is associated with Awadhi cuisine and is known for its tender, finely textured mixture. Traditional professional recipes may use specialised spice blends and meat-tenderising methods; this home adaptation uses minced meat, fried onion, and warm spices. The mixture should be soft enough to shape but not wet enough to collapse in the pan.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Lucknow Nawabi Kitchens',
        culturalSignificance: 'Created in the court of Nawab Asad-ud-Daula for royal indulgence.',
        servesCount: 'Yield: 12 small kebabs',
        approxPrepTime: 'Prep 30 min; resting 30 min; cooking 20 min',
        ingredientSections: [
          {
            title: 'Minced Meat & Aromatics',
            items: [
              { item: 'Finely minced lamb or goat', amount: '500g' },
              { item: 'Fried crushed onion', amount: '1 medium' }
            ]
          },
          {
            title: 'Binder & Spices',
            items: [
              { item: 'Roasted besan', amount: '1 tbsp' },
              { item: 'Ghee & spices', amount: 'to taste' }
            ]
          }
        ],
        ingredients: [
          { item: 'Minced meat', amount: '500g' },
          { item: 'Fried onion', amount: '1' },
          { item: 'Roasted besan', amount: '1 tbsp' },
          { item: 'Spices & ghee', amount: 'to taste' }
        ],
        preparationSteps: [
          'Knead fine mince with fried onions, ginger-garlic, and spices.',
          'Rest in refrigerator, bind with roasted gram flour, and shape patties.',
          'Shallow-fry in ghee on medium-low heat until crusty and tender.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Knead & Shape',
            instruction: 'Knead spiced mince with fried onions and form delicate patties.'
          },
          {
            stepNum: 2,
            title: 'Ghee Fry',
            instruction: 'Pan-fry slowly in desi ghee until caramelized on both sides.'
          }
        ],
        servingSuggestion: {
          text: 'Serve with mint chutney, sliced onions, and roomali roti.',
          imageUrl: '/images/up/galouti_kebab.jpg'
        },
        vessel: 'Mahi Tawa',
        cookingFat: 'Ghee',
        season: 'All Year',
        flavorProfile: ['Melt-in-mouth', 'Aromatic Spice', 'Rich Ghee'],
        dietary: 'Non-Vegetarian',
        imageUrl: '/images/up/galouti_kebab.jpg'
      },
      {
        id: 'up-tamatar-chaat',
        name: 'Banarasi-Style Tamatar Chaat',
        nativeName: 'बनारसी टमाटर चाट',
        englishSubtitle: 'Tangy Tomato-Potato Street Chaat',
        tagline: 'Varanasi street specialty of spiced crushed tomatoes and potatoes finished with tamarind water and crisp sev.',
        description: 'Varanasi’s street-food repertoire includes distinctive chaat preparations. Tamatar chaat balances cooked tomato, potato, spice, and tangy-sweet seasoning. Street vendors vary their texture and toppings; this version aims for a soft, spoonable base with enough acidity and crunch to keep it lively.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Varanasi (Kashi) Ghats & Alleyways',
        culturalSignificance: 'Unique to Banaras street cuisine, unlike potato or lentil chaats found elsewhere. Served steaming hot in earthen kulhads at the ghats.',
        servesCount: 'Yield: 4 snack portions',
        approxPrepTime: '30–35 min',
        ingredientSections: [
          {
            title: 'Tomato & Potato Base',
            items: [
              { item: 'Ripe tomatoes, chopped', amount: '4 medium' },
              { item: 'Potatoes, boiled and diced', amount: '2 medium' },
              { item: 'Ghee or oil', amount: '1 tbsp' },
              { item: 'Grated ginger & green chilli', amount: '1 tsp & 1' }
            ]
          },
          {
            title: 'Chaat Seasonings & Toppings',
            items: [
              { item: 'Cumin seeds & roasted cumin powder', amount: '1/2 tsp each' },
              { item: 'Chaat masala & black salt', amount: '1/2 tsp & 1/4 tsp' },
              { item: 'Tamarind chutney or water', amount: '1-2 tsp' },
              { item: 'Sugar or jaggery', amount: '1 tsp', note: 'optional' },
              { item: 'Fresh coriander & sev / crushed papdi', amount: 'for garnish' }
            ]
          }
        ],
        ingredients: [
          { item: 'Ripe tomatoes', amount: '4' },
          { item: 'Boiled potatoes', amount: '2' },
          { item: 'Ghee', amount: '1 tbsp' },
          { item: 'Ginger, green chilli & chaat masala', amount: 'to taste' },
          { item: 'Tamarind chutney & black salt', amount: 'to taste' },
          { item: 'Crisp sev & fresh coriander', amount: 'for topping' }
        ],
        preparationSteps: [
          'Boil, peel, and dice potatoes.',
          'Heat ghee in a pan, add cumin and ginger until fragrant.',
          'Add chopped tomatoes, chilli, and salt. Cook and press tomatoes until juicy and thick.',
          'Add diced potatoes, roasted cumin, chaat masala, black salt, and tamarind chutney. Simmer for 5-8 minutes.',
          'Adjust sweet-tangy balance, stir in coriander, spoon into bowls, and top with sev.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Cook Juicy Tomatoes',
            instruction: 'Sauté ginger in ghee, add tomatoes and simmer until broken down into a thick pulp.'
          },
          {
            stepNum: 2,
            title: 'Fold Potatoes & Chaat Spices',
            instruction: 'Fold in diced potatoes, black salt, chaat masala, and tamarind water until simmering.'
          },
          {
            stepNum: 3,
            title: 'Crisp Garnish',
            instruction: 'Ladle into bowls and top with crispy sev, chopped coriander, and lemon juice.'
          }
        ],
        servingSuggestion: {
          text: 'Serve piping hot in clay kulhads topped with crispy nylon sev, fresh cilantro, and a drizzle of sugar-tamarind syrup.',
          imageUrl: '/images/up/tamatar_chaat.jpg'
        },
        vessel: 'Heavy Pan or Flat Tawa',
        cookingFat: 'Pure Desi Ghee',
        season: 'Winter & Evening Street Snack',
        flavorProfile: ['Tangy Cooked Tomato', 'Pungent Black Salt', 'Crisp Sev', 'Warm Ghee'],
        dietary: 'Vegetarian',
        imageUrl: '/images/up/tamatar_chaat.jpg'
      },
      {
        id: 'up-vegetable-tehri',
        name: 'Vegetable Tehri',
        nativeName: 'वेजिटेबल तहरी',
        englishSubtitle: 'Spiced Rice with Vegetables',
        tagline: 'Fragrant one-pot Awadhi yellow basmati rice slow-cooked with seasonal winter potatoes, carrots, and peas.',
        description: 'Tehri is a one-pot spiced rice dish found in parts of Uttar Pradesh and neighbouring regions. Potatoes and seasonal vegetables cook with rice and whole spices, making a filling meal from a modest pantry. It should be aromatic and separate enough to serve with a spoon, not as wet as khichdi.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Awadh & Central UP Countryside',
        culturalSignificance: 'Born as a comforting vegetarian counterpart to royal biryanis, celebrated across UP homes for Sunday lunches during the winter pea harvest.',
        servesCount: 'Yield: 4 servings',
        approxPrepTime: '40–45 min',
        ingredientSections: [
          {
            title: 'Rice & Winter Vegetables',
            items: [
              { item: 'Basmati rice', amount: '1 1/2 cups', note: 'soaked 20 min' },
              { item: 'Potato, diced', amount: '1 medium' },
              { item: 'Carrot, diced', amount: '1' },
              { item: 'Green peas', amount: '1/2 cup' }
            ]
          },
          {
            title: 'Whole Spices & Aromatics',
            items: [
              { item: 'Ghee or oil', amount: '2 tbsp' },
              { item: 'Onion, sliced', amount: '1' },
              { item: 'Tomato, chopped', amount: '1' },
              { item: 'Ginger-garlic paste', amount: '1 tbsp' },
              { item: 'Cumin seeds, bay leaf, cinnamon stick, cloves', amount: 'whole spices' }
            ]
          },
          {
            title: 'Ground Spices & Liquid',
            items: [
              { item: 'Turmeric powder', amount: '1/2 tsp', note: 'essential for golden color' },
              { item: 'Coriander powder & garam masala', amount: '1 tsp & 1/2 tsp' },
              { item: 'Hot water', amount: '3 cups' },
              { item: 'Salt', amount: 'to taste' }
            ]
          }
        ],
        ingredients: [
          { item: 'Basmati rice, soaked', amount: '1 1/2 cups' },
          { item: 'Potatoes, carrots & green peas', amount: '2 cups mixed' },
          { item: 'Desi ghee or oil', amount: '2 tbsp' },
          { item: 'Onion, tomato & ginger-garlic', amount: 'to taste' },
          { item: 'Whole spices, turmeric & salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Rinse and soak rice for 20 minutes, then drain.',
          'Heat ghee in a heavy pot, add whole spices (cumin, bay leaf, cinnamon, cloves) until fragrant.',
          'Sauté onion until golden, add ginger-garlic paste, then potatoes, carrots, and peas for 4 minutes.',
          'Add tomato, turmeric, coriander, garam masala, and salt until cohesive.',
          'Fold in drained rice gently, pour hot water, cover, and cook on low heat for 12-15 minutes.',
          'Rest covered for 10 minutes, fluff gently with a fork, and garnish with coriander.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Temper Whole Spices',
            instruction: 'Sizzle cumin, cinnamon, cloves, and bay leaf in ghee, then cook onions and aromatics.'
          },
          {
            stepNum: 2,
            title: 'Sauté Seasonal Vegetables',
            instruction: 'Sauté potatoes, carrots, and peas with turmeric until well coated.'
          },
          {
            stepNum: 3,
            title: 'Pot Simmer & Fluff',
            instruction: 'Fold in rice, add hot water, cover tightly, simmer until tender, and fluff gently.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot with plain curd or boondi raita, mango pickle, roasted papad, and a drizzle of warm ghee.',
          imageUrl: '/images/up/vegetable_tehri.jpg'
        },
        vessel: 'Heavy Copper Degchi or Handi',
        cookingFat: 'Pure Desi Ghee',
        season: 'Winter (Peak Harvest)',
        flavorProfile: ['Aromatic Golden Rice', 'Sweet Peas & Vegetables', 'Warming Spices', 'Rich Ghee'],
        dietary: 'Vegetarian',
        imageUrl: '/images/up/vegetable_tehri.jpg'
      },
      {
        id: 'up-agra-petha',
        name: 'Agra Petha',
        nativeName: 'आगरा पेठा',
        englishSubtitle: 'Ash-Gourd Sweet, Home-Style',
        tagline: 'Translucent, delicate candied ash-gourd cubes steeped in cardamom and kewra-infused sugar syrup.',
        description: 'Agra petha is a well-known sweet associated with Agra and made from ash gourd (also called winter melon). Traditional commercial methods can involve food-grade lime treatment to help the pieces retain shape and develop a translucent texture. Because lime handling requires care, this home version uses a simpler method.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Agra Historic Quarter',
        culturalSignificance: 'Associated with the Mughal era in Agra, crafted from firm winter melon cubes slowly infused with sweet syrup and floral waters.',
        servesCount: 'Yield: About 20 small pieces',
        approxPrepTime: 'Prep 30 min; soaking 6–10 hrs; cooking 45–60 min',
        ingredientSections: [
          {
            title: 'Ash Gourd Base',
            items: [
              { item: 'Firm ash gourd', amount: '1 kg', note: 'peeled and deseeded' }
            ]
          },
          {
            title: 'Sugar Syrup & Aromatics',
            items: [
              { item: 'Sugar', amount: '750g' },
              { item: 'Water', amount: '4 cups' },
              { item: 'Cardamom pods', amount: '2-3', note: 'optional' },
              { item: 'Lemon juice', amount: '1 tsp', note: 'optional' },
              { item: 'Food-grade rose or kewra water', amount: 'few drops', note: 'sparingly' }
            ]
          }
        ],
        ingredients: [
          { item: 'Firm ash gourd (petha fruit)', amount: '1 kg' },
          { item: 'Sugar', amount: '750g' },
          { item: 'Cardamom pods & lemon juice', amount: 'optional' },
          { item: 'Kewra or rose water', amount: 'few drops' }
        ],
        preparationSteps: [
          'Cut ash gourd into even cubes, removing all seeds and fibrous centre. Pierce pieces lightly with a fork.',
          'Blanch in boiling water for 5-8 minutes until slightly translucent at edges, then drain and cool.',
          'In a wide pot, dissolve sugar in water and bring to a simmer, skimming foam.',
          'Add ash gourd pieces and simmer gently until translucent and syrup thickens slightly.',
          'Turn off heat and let soak in syrup for several hours or overnight.',
          'Add cardamom and a few drops of rose or kewra water. Cool and refrigerate.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Prep & Blanch Gourd',
            instruction: 'Peel, cube, and fork-prick ash gourd. Blanch in boiling water until translucent at edges.'
          },
          {
            stepNum: 2,
            title: 'Syrup Simmer',
            instruction: 'Simmer gently in sugar syrup until the cubes absorb syrup and turn glassy.'
          },
          {
            stepNum: 3,
            title: 'Aromatic Soak',
            instruction: 'Steep overnight in cardamom and kewra syrup in the refrigerator.'
          }
        ],
        servingSuggestion: {
          text: 'Serve chilled in small portions as an elegant post-meal sweet.',
          imageUrl: '/images/up/agra_petha.jpg'
        },
        vessel: 'Wide Stainless Steel or Brass Pot',
        cookingFat: 'Zero Fat',
        season: 'All Year',
        flavorProfile: ['Clean Translucent Sweetness', 'Delicate Melon Texture', 'Floral Kewra & Rose'],
        dietary: 'Vegan',
        imageUrl: '/images/up/agra_petha.jpg'
      },
      {
        id: 'up-nimona',
        name: 'Nimona',
        nativeName: 'मटर का निमोना',
        englishSubtitle: 'Green-Pea Curry',
        tagline: 'Rustic winter curry of coarsely crushed sweet green peas slow-simmered with potatoes in mustard oil.',
        description: 'Nimona is a winter-associated green-pea preparation found in parts of Uttar Pradesh and neighbouring regions. Fresh peas are crushed or ground coarsely, then cooked with potato and spices. The dish should retain the sweetness of peas while developing a savoury, slightly thick gravy.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Varanasi, Gorakhpur & Eastern UP',
        culturalSignificance: 'A beloved winter ritual across Eastern UP homes when fresh tender garden peas flood local markets. The coarse grind releases pea milk to naturally thicken the spiced gravy.',
        servesCount: 'Yield: 4 servings',
        approxPrepTime: '35–45 min',
        ingredientSections: [
          {
            title: 'Green Peas',
            items: [
              { item: 'Fresh green peas', amount: '2 cups', note: 'two-thirds coarsely crushed, one-third whole' },
              { item: 'Medium potato', amount: '1', note: 'diced' }
            ]
          },
          {
            title: 'Aromatics & Spices',
            items: [
              { item: 'Mustard oil', amount: '2 tbsp' },
              { item: 'Cumin seeds', amount: '1/2 tsp' },
              { item: 'Small onion', amount: '1', note: 'finely chopped (optional)' },
              { item: 'Tomato', amount: '1', note: 'chopped' },
              { item: 'Ginger-garlic paste', amount: '1 tbsp' },
              { item: 'Turmeric, coriander, chilli & garam masala', amount: 'to taste' },
              { item: 'Water', amount: '2 - 2 1/2 cups' },
              { item: 'Fresh coriander & salt', amount: 'to taste' }
            ]
          }
        ],
        ingredients: [
          { item: 'Fresh green peas', amount: '2 cups' },
          { item: 'Potato, diced', amount: '1 medium' },
          { item: 'Mustard oil', amount: '2 tbsp' },
          { item: 'Onion, tomato & ginger-garlic paste', amount: 'to taste' },
          { item: 'Cumin, turmeric, coriander, garam masala & salt', amount: 'to taste' },
          { item: 'Fresh coriander', amount: 'for garnish' }
        ],
        preparationSteps: [
          'Pulse about two-thirds of the fresh peas in a grinder to a coarse texture; keep the remaining peas whole.',
          'Heat mustard oil in a pan, sizzle cumin, add onion and ginger-garlic paste until soft.',
          'Add tomato, turmeric, coriander powder, chilli, and salt. Cook until tomato softens.',
          'Add diced potato and stir for 2-3 minutes. Add coarsely ground peas and whole peas, stirring to coat.',
          'Pour in water to make a thick curry, cover, and simmer for 15-20 minutes until potatoes and peas are tender.',
          'Add garam masala and chopped coriander, simmer 2 minutes, and serve hot.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Coarse Pea Grind',
            instruction: 'Coarsely crush two-thirds of the fresh peas while keeping one-third whole for texture.'
          },
          {
            stepNum: 2,
            title: 'Mustard Oil Bhunai',
            instruction: 'Sauté onions and ginger-garlic in mustard oil, cook tomatoes with spices, and add potatoes.'
          },
          {
            stepNum: 3,
            title: 'Simmer Pea Curry',
            instruction: 'Add crushed and whole peas with water; simmer gently until potatoes are fork-tender and gravy is rich.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot with plain boiled rice or hot phulkas with a dollop of fresh ghee.',
          imageUrl: '/images/up/nimona.jpg'
        },
        vessel: 'Heavy Iron Kadhai',
        cookingFat: 'Cold-Pressed Mustard Oil',
        season: 'Winter (Fresh Pea Season)',
        flavorProfile: ['Sweet Garden Peas', 'Earthy Mustard Oil', 'Tender Potatoes', 'Warm Garam Masala'],
        dietary: 'Vegetarian',
        imageUrl: '/images/up/nimona.jpg'
      }
    ]
  },
  br: {
    id: 'br',
    name: 'Bihar',
    nativeName: 'बिहार',
    capital: 'Patna',
    region: 'East',
    historicalEra: 'Magadha Empire, Mithila Kingdom & Ancient Pataliputra',
    culinaryPhilosophy: 'Rustic, fire-tempered agrarian gastronomy featuring winter root vegetables, roasted grains (chura, sattu), wholesome gourds simmered in milk, and cold-pressed mustard oil with zero artificial spices.',
    heirloomVessels: ["Lohe Ki Kadhai (Cast Iron Pot)", "Earthen Chulha Handi", "Kansa Thali"],
    signatureSpices: ["Pachforna", "Sarson Ka Tel (Mustard Oil)", "Sukhi Lal Mirch", "Kala Namak", "Jeera"],
    stapleGrains: ["Arwa Chawal", "Chura (Flattened Rice)", "Sattu (Roasted Gram Flour)", "Wheat"],
    representativeDish: {
      id: 'br-lauka-jabar',
      name: 'Lauka Jabar',
      nativeName: 'लौका जबर',
      englishSubtitle: 'Bottle Gourd & Rice Porridge in Milk Temper',
      tagline: 'Soothing winter porridge of tender bottle gourd and fragrant short-grain rice cooked in milk with a sizzling mustard-chili tadka.',
      description: 'A rustic winter comfort food from regional rural hearths (particularly celebrated in Bihari and eastern household traditions), Lauka Jabar—also known simply as Jabar—is a gentle, porridge-style one-pot meal designed to soothe the digestive system while delivering nourishing warmth. Made during the cooler months when fresh, sweet bottle gourds are at their tender best, this preparation slow-cooks delicate cubes of gourd and fragrant short-grain rice together in a creamy bath of milk and water. Light on the stomach yet satisfying, it is finished with a crackling temper of mustard oil, seeds, and toasted red chilies that cuts beautifully through the sweet richness of the milk.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Mithila, Magadh & Bhojpur Rural Hearths',
      culturalSignificance: 'A revered Ayurvedic postpartum and winter comfort food, combining cooling bottle gourd with warming mustard tadka in creamy sweet milk.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '25 min',
      ingredientSections: [
        {
          title: 'Tender Gourd, Rice & Milk Base',
          items: [
            { item: 'Bottle gourd (lauka / lauki)', amount: '1 medium', note: 'peeled and finely diced, approx. 2 cups' },
            { item: 'Short-grain raw white rice (Arwa / Gobindobhog)', amount: '1/2 cup', note: 'soaked 20 min' },
            { item: 'Whole milk', amount: '1.5 cups' },
            { item: 'Water', amount: '1.5 cups' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        },
        {
          title: 'Chhunk / Tadka (Tempering)',
          items: [
            { item: 'Pure mustard oil (sarson ka tel)', amount: '1.5 tbsp' },
            { item: 'Cumin seeds (jeera)', amount: '1/2 tsp' },
            { item: 'Black or yellow mustard seeds (sarson / rai)', amount: '1/2 tsp' },
            { item: 'Whole dried red chilies (sukhi lal mirch)', amount: '2' },
            { item: 'Asafoetida (hing)', amount: 'a pinch', note: 'optional' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh bottle gourd (lauka)', amount: '1 medium', note: 'diced' },
        { item: 'Short-grain raw rice (Arwa)', amount: '1/2 cup' },
        { item: 'Whole milk', amount: '1.5 cups' },
        { item: 'Water', amount: '1.5 cups' },
        { item: 'Pure mustard oil', amount: '1.5 tbsp' },
        { item: 'Cumin & mustard seeds', amount: '1/2 tsp each' },
        { item: 'Dried red chilies & hing', amount: '2 chilies, pinch hing' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'In a deep, heavy-bottomed pot or pressure cooker, combine the drained soaked rice, finely cubed bottle gourd, water, milk, and salt. Bring to a gentle boil over medium heat, stirring occasionally to prevent the milk from catching at the bottom.',
        'Lower the heat, cover, and let the mixture simmer gently until both the rice and bottle gourd are completely soft and yielding (or cook for 2 whistles in a pressure cooker). Using the back of a ladle, lightly mash a few pieces of the gourd into the rice so the porridge turns luscious, thick, and velvety.',
        'Heat the mustard oil in a small pan until lightly smoking, then reduce the heat. Add the cumin seeds and mustard seeds, letting them splutter vigorously. Toss in the dried red chilies and a pinch of asafoetida, letting the chilies blister and darken into a fragrant mahogany hue.',
        'Pour the crackling, aromatic oil and spices directly into the warm rice-gourd pot. Stir well to fold the pungent mustard oil through the sweet, milky porridge, then cover immediately with a tight lid for 2 minutes to lock in the aromas.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Simmer Gourd & Rice',
          instruction: 'Combine soaked Arwa rice, diced lauka, water, milk, and salt; bring to gentle boil, stirring frequently.'
        },
        {
          stepNum: 2,
          title: 'Mash to a Velvet Consistency',
          instruction: 'Simmer until tender or pressure cook for 2 whistles; lightly mash a portion of gourd into rice until thick and creamy.'
        },
        {
          stepNum: 3,
          title: 'Prepare the Chhunk',
          instruction: 'Heat mustard oil until smoking, crackle cumin and mustard seeds, blister dried red chilies and hing until mahogany.'
        },
        {
          stepNum: 4,
          title: 'Temper and Lock Aromas',
          instruction: 'Pour sizzling mustard temper into warm milky porridge, fold thoroughly, and seal with lid for 2 min.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm in deep bowls on a crisp evening, enjoyed on its own or paired with roasted papad, spicy green chili pickle, or a simple mashed potato chokha.',
        imageUrl: '/images/br/lauka_jabar.jpg'
      },
      vessel: 'Heavy Bottomed Kadhai or Earthen Handi',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Winter (Cold-Weather Hearth)',
      flavorProfile: ["Sweet Milky Rice Comfort", "Tender Hydrating Bottle Gourd", "Smoky Blistered Red Chili", "Pungent Mustard Oil Kick"],
      dietary: 'Vegetarian',
      imageUrl: '/images/br/lauka_jabar.jpg',
      phonetic: 'LAOW-kah JAH-bar'
    },
    dishes: [
      {
      id: 'br-lauka-jabar',
      name: 'Lauka Jabar',
      nativeName: 'लौका जबर',
      englishSubtitle: 'Bottle Gourd & Rice Porridge in Milk Temper',
      tagline: 'Soothing winter porridge of tender bottle gourd and fragrant short-grain rice cooked in milk with a sizzling mustard-chili tadka.',
      description: 'A rustic winter comfort food from regional rural hearths (particularly celebrated in Bihari and eastern household traditions), Lauka Jabar—also known simply as Jabar—is a gentle, porridge-style one-pot meal designed to soothe the digestive system while delivering nourishing warmth. Made during the cooler months when fresh, sweet bottle gourds are at their tender best, this preparation slow-cooks delicate cubes of gourd and fragrant short-grain rice together in a creamy bath of milk and water. Light on the stomach yet satisfying, it is finished with a crackling temper of mustard oil, seeds, and toasted red chilies that cuts beautifully through the sweet richness of the milk.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Mithila, Magadh & Bhojpur Rural Hearths',
      culturalSignificance: 'A revered Ayurvedic postpartum and winter comfort food, combining cooling bottle gourd with warming mustard tadka in creamy sweet milk.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '25 min',
      ingredientSections: [
        {
          title: 'Tender Gourd, Rice & Milk Base',
          items: [
            { item: 'Bottle gourd (lauka / lauki)', amount: '1 medium', note: 'peeled and finely diced, approx. 2 cups' },
            { item: 'Short-grain raw white rice (Arwa / Gobindobhog)', amount: '1/2 cup', note: 'soaked 20 min' },
            { item: 'Whole milk', amount: '1.5 cups' },
            { item: 'Water', amount: '1.5 cups' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        },
        {
          title: 'Chhunk / Tadka (Tempering)',
          items: [
            { item: 'Pure mustard oil (sarson ka tel)', amount: '1.5 tbsp' },
            { item: 'Cumin seeds (jeera)', amount: '1/2 tsp' },
            { item: 'Black or yellow mustard seeds (sarson / rai)', amount: '1/2 tsp' },
            { item: 'Whole dried red chilies (sukhi lal mirch)', amount: '2' },
            { item: 'Asafoetida (hing)', amount: 'a pinch', note: 'optional' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh bottle gourd (lauka)', amount: '1 medium', note: 'diced' },
        { item: 'Short-grain raw rice (Arwa)', amount: '1/2 cup' },
        { item: 'Whole milk', amount: '1.5 cups' },
        { item: 'Water', amount: '1.5 cups' },
        { item: 'Pure mustard oil', amount: '1.5 tbsp' },
        { item: 'Cumin & mustard seeds', amount: '1/2 tsp each' },
        { item: 'Dried red chilies & hing', amount: '2 chilies, pinch hing' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'In a deep, heavy-bottomed pot or pressure cooker, combine the drained soaked rice, finely cubed bottle gourd, water, milk, and salt. Bring to a gentle boil over medium heat, stirring occasionally to prevent the milk from catching at the bottom.',
        'Lower the heat, cover, and let the mixture simmer gently until both the rice and bottle gourd are completely soft and yielding (or cook for 2 whistles in a pressure cooker). Using the back of a ladle, lightly mash a few pieces of the gourd into the rice so the porridge turns luscious, thick, and velvety.',
        'Heat the mustard oil in a small pan until lightly smoking, then reduce the heat. Add the cumin seeds and mustard seeds, letting them splutter vigorously. Toss in the dried red chilies and a pinch of asafoetida, letting the chilies blister and darken into a fragrant mahogany hue.',
        'Pour the crackling, aromatic oil and spices directly into the warm rice-gourd pot. Stir well to fold the pungent mustard oil through the sweet, milky porridge, then cover immediately with a tight lid for 2 minutes to lock in the aromas.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Simmer Gourd & Rice',
          instruction: 'Combine soaked Arwa rice, diced lauka, water, milk, and salt; bring to gentle boil, stirring frequently.'
        },
        {
          stepNum: 2,
          title: 'Mash to a Velvet Consistency',
          instruction: 'Simmer until tender or pressure cook for 2 whistles; lightly mash a portion of gourd into rice until thick and creamy.'
        },
        {
          stepNum: 3,
          title: 'Prepare the Chhunk',
          instruction: 'Heat mustard oil until smoking, crackle cumin and mustard seeds, blister dried red chilies and hing until mahogany.'
        },
        {
          stepNum: 4,
          title: 'Temper and Lock Aromas',
          instruction: 'Pour sizzling mustard temper into warm milky porridge, fold thoroughly, and seal with lid for 2 min.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm in deep bowls on a crisp evening, enjoyed on its own or paired with roasted papad, spicy green chili pickle, or a simple mashed potato chokha.',
        imageUrl: '/images/br/lauka_jabar.jpg'
      },
      vessel: 'Heavy Bottomed Kadhai or Earthen Handi',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Winter (Cold-Weather Hearth)',
      flavorProfile: ["Sweet Milky Rice Comfort", "Tender Hydrating Bottle Gourd", "Smoky Blistered Red Chili", "Pungent Mustard Oil Kick"],
      dietary: 'Vegetarian',
      imageUrl: '/images/br/lauka_jabar.jpg',
      phonetic: 'LAOW-kah JAH-bar'
      },
      {
      id: 'br-parwal-ki-mithai',
      name: 'Parwal Ki Mithai',
      nativeName: 'परवल की मिठाई',
      englishSubtitle: 'Stuffed Pointed Gourd Confection',
      tagline: 'Tender pointed gourds poached in cardamom syrup, stuffed with rich roasted khoya, saffron, and slivered dry fruits.',
      description: 'A rare and ingenious jewel of Bihari festive confectionery, Parwal Ki Mithai turns a typically savory vegetable—the crisp pointed gourd (parwal)—into a decadent, glistening dessert. Often showcased during Diwali, Chhath Puja, and weddings, this sweet exemplifies how rustic ingenuity can create grandeur from everyday produce. The peeled, deseeded gourds are first poached in an aromatic sugar syrup until tender, emerald-green, and translucent. Once soaked through, each tender shell is cradled with a rich filling of reduced milk solids (mawa/khoya), warming spices, and finely chopped nuts.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Mithila, Patna & Nalanda Festive Kitchens',
      culturalSignificance: 'A celebrated jewel of Bihari festive sweets offered to deities during Chhath and savored at weddings, showcasing supreme confectionery mastery.',
      servesCount: 'Yield: 10–12 pieces',
      approxPrepTime: '40 min; chill 1 hr',
      ingredientSections: [
        {
          title: 'Tender Gourd Shells & Sugar Glaze',
          items: [
            { item: 'Fresh pointed gourds (parwal / potol)', amount: '10–12', note: 'scraped, deseeded slit along belly' },
            { item: 'Granulated sugar', amount: '1.5 cups', note: 'for syrup' },
            { item: 'Water', amount: '1.5 cups', note: 'for syrup' },
            { item: 'Green cardamom pods', amount: '2', note: 'crushed for syrup' },
            { item: 'Baking soda', amount: 'a pinch', note: 'optional, retains bright emerald hue' }
          ]
        },
        {
          title: 'Mawa Khoya & Nut Stuffing',
          items: [
            { item: 'Mawa / khoya', amount: '1 cup', note: 'crumbled or grated' },
            { item: 'Powdered sugar', amount: '3–4 tbsp' },
            { item: 'Mixed nuts (almonds, pistachios, cashews)', amount: '2 tbsp', note: 'finely slivered' },
            { item: 'Green cardamom powder (elaichi)', amount: '1/2 tsp' },
            { item: 'Saffron strands (kesar) or silver leaf (varq)', amount: 'a pinch' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh pointed gourds (parwal)', amount: '10–12' },
        { item: 'Mawa / khoya', amount: '1 cup' },
        { item: 'Granulated sugar', amount: '1.5 cups' },
        { item: 'Powdered sugar', amount: '3–4 tbsp' },
        { item: 'Slivered almonds, pistachios & cashews', amount: '2 tbsp' },
        { item: 'Cardamom pods & powder', amount: '2 pods + 1/2 tsp powder' },
        { item: 'Saffron strands or varq', amount: 'a pinch' }
      ],
      preparationSteps: [
        'Lightly scrape the rough skin off the gourds using the edge of a spoon or peeler (do not peel away all the green). Slice off both ends, make a single lengthwise incision along the belly, and gently scoop out all the seeds and fibrous core using the handle of a small spoon.',
        'Bring a pot of water to a boil with a tiny pinch of baking soda. Drop the deseeded gourds in and boil for 4–5 minutes until just pliable and tender-crisp. Drain immediately and immerse in cold water, then lay them cut-side down on a clean towel to drain.',
        'In a wide saucepan, combine sugar, water, and crushed cardamom pods. Bring to a boil over medium heat until you achieve a light, sticky, single-string consistency. Slide the parwals into the syrup and simmer on low heat for 10–12 minutes until translucent, glossy, and sweet throughout. Cool in syrup.',
        'In a heavy skillet, roast crumbled khoya over low flame for 3–4 minutes until aromatic and softly melted. Once cool, fold in powdered sugar, cardamom powder, saffron, and half of the slivered nuts.',
        'Lift each parwal from the syrup and drain. Gently pry open the slit and fill each gourd generously with the mawa-nut mixture, smoothing the surface along the opening. Garnish with remaining pistachios, saffron strands, or edible silver foil.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Deseed the Parwals',
          instruction: 'Scrape skin lightly, slit along belly, and scoop out seeds using a small spoon handle.'
        },
        {
          stepNum: 2,
          title: 'Flash Poach',
          instruction: 'Boil deseeded gourds in boiling water with a pinch of soda for 4–5 min until pliable, then cool in ice water and drain.'
        },
        {
          stepNum: 3,
          title: 'Simmer in Cardamom Syrup',
          instruction: 'Simmer parwals in single-string cardamom sugar syrup 10–12 min until translucent and glossy sweet.'
        },
        {
          stepNum: 4,
          title: 'Prepare Mawa Stuffing',
          instruction: 'Roast khoya until fragrant, cool completely, and mix with powdered sugar, cardamom, saffron, and nuts.'
        },
        {
          stepNum: 5,
          title: 'Stuff and Garnish',
          instruction: 'Fill drained syrup-glazed gourds with mawa mixture, smooth opening, and garnish with pistachios and saffron.'
        }
      ],
      servingSuggestion: {
        text: 'Chill for an hour before serving to let the sweet set, offering a refreshing, juicy crunch that yields to fragrant, creamy mawa.',
        imageUrl: '/images/br/parwal_ki_mithai.jpg'
      },
      vessel: 'Brass Handi & Heavy Khoya Skillet',
      cookingFat: 'Pure Cow Ghee (in Khoya)',
      season: 'Diwali, Chhath Puja & Autumn Weddings',
      flavorProfile: ["Sweet Juicy Gourd Crunch", "Creamy Cardamom Mawa", "Nutty Pistachio-Almond Chew", "Saffron Fragrance"],
      dietary: 'Vegetarian',
      imageUrl: '/images/br/parwal_ki_mithai.jpg',
      phonetic: 'par-WAHL kee mi-THY'
      },
      {
      id: 'br-dal-jhingni',
      name: 'Dal Jhingni',
      nativeName: 'दाल झिंगनी',
      englishSubtitle: 'Spiced Lentils with Ridge Gourd in Mustard Oil',
      tagline: 'Nutrient-dense split Bengal gram simmered with tender ridge gourd, garlic, cumin, and cold-pressed mustard oil.',
      description: 'A comforting, nutrient-dense staple of eastern home cooking, Dal Jhingni marries the earthy, robust bite of split pulses with the natural sweetness and cooling hydration of ridge gourd (jhingni / tori). Often adapted with bottle gourd (Lauki Dal), this version shines brightest with ridge gourd, which melts into silky, tender pockets within the slow-simmered gravy. Flavored with humble pantry staples like garlic, earthy cumin, and slit green chilies, the real character of the dish comes from cooking in cold-pressed mustard oil, lending a faint smokiness that cuts right through the richness of the dal.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Rural Magadh & Bhojpur Courtyards',
      culturalSignificance: 'Everyday nutritional backbone of agrarian families, blending drought-hardy pulses with tender garden gourds.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '30 min; dal soaking 30 min',
      ingredientSections: [
        {
          title: 'Pulses & Ridge Gourd',
          items: [
            { item: 'Split Bengal gram (chana dal) or toor dal', amount: '1 cup', note: 'soaked for 30 minutes' },
            { item: 'Ridge gourds (jhingni / tori)', amount: '2 medium', note: 'peeled, edges trimmed, diced into 1/2-inch rounds' },
            { item: 'Turmeric powder (haldi)', amount: '1/2 tsp' },
            { item: 'Water', amount: '2.5 cups' }
          ]
        },
        {
          title: 'Tempering & Jammy Masala',
          items: [
            { item: 'Pure mustard oil (sarson ka tel)', amount: '2 tbsp' },
            { item: 'Cumin seeds (jeera)', amount: '1 tsp' },
            { item: 'Whole dried red chili & bay leaf', amount: '1 each' },
            { item: 'Garlic cloves', amount: '5–6', note: 'finely minced' },
            { item: 'Green chilies', amount: '2', note: 'slit lengthwise' },
            { item: 'Medium onion & tomato', amount: '1 each', note: 'chopped' },
            { item: 'Coriander & cumin powder', amount: '1 tsp coriander, 1/2 tsp cumin' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Split chana dal or toor dal', amount: '1 cup' },
        { item: 'Ridge gourds (jhingni)', amount: '2 medium' },
        { item: 'Onion & tomato', amount: '1 each' },
        { item: 'Garlic & green chilies', amount: '5–6 cloves, 2 chilies' },
        { item: 'Cumin seeds, dry red chili, bay leaf', amount: '1 tsp seeds, 1 chili, 1 leaf' },
        { item: 'Turmeric, coriander & cumin powder', amount: 'ground spices' },
        { item: 'Mustard oil (sarson ka tel)', amount: '2 tbsp' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Rinse the soaked dal thoroughly. In a pressure cooker, combine the dal with 2.5 cups of water, turmeric powder, and salt. Cook over medium flame (4–5 whistles for chana dal, or 2–3 whistles for toor dal) until soft and cooked through yet holding gentle structure. Lightly mash with a ladle and set aside.',
        'Heat the mustard oil in a deep kadai or skillet until it begins to lightly smoke, then lower the heat. Add the cumin seeds, dried red chili, and bay leaf, letting the seeds crackle and release their fragrance.',
        'Stir in the minced garlic and slit green chilies, sautéing for barely 30 seconds until the garlic turns golden and aromatic. Add the chopped onions and cook over medium heat until they turn translucent with caramelized, golden edges.',
        'Add the chopped tomato along with coriander powder and cumin powder. Cook down for 2–3 minutes until tomatoes soften into a jammy masala and release oil. Add the diced ridge gourd and sauté for 3 minutes to coat well in the spice paste.',
        'Pour the cooked dal and its broth into the skillet with the vegetables. Stir well, adding a splash of warm water if needed. Bring to a gentle boil, cover with a tight lid, and simmer on low-medium flame for 8–10 minutes until the ridge gourd is silky-tender and the broth forms a cohesive, fragrant gravy.',
        'Turn off the heat and keep the pot covered for 5 minutes to let the mustard oil aroma settle into the steam.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Cook the Dal',
          instruction: 'Pressure-cook soaked chana dal with water, turmeric, and salt until tender yet structural; lightly mash.'
        },
        {
          stepNum: 2,
          title: 'Build the Mustard Tadka',
          instruction: 'Heat mustard oil until smoking, sizzle cumin seeds, dried red chili, and bay leaf.'
        },
        {
          stepNum: 3,
          title: 'Sauté Aromatics',
          instruction: 'Add minced garlic and slit green chilies for 30 sec, then cook onions until golden-edged.'
        },
        {
          stepNum: 4,
          title: 'Cook Jammy Masala & Gourd',
          instruction: 'Sauté tomato with coriander and cumin powder until oil releases; fold in diced ridge gourd for 3 min.'
        },
        {
          stepNum: 5,
          title: 'Simmer Together',
          instruction: 'Pour in dal and broth, cover tightly, and simmer 8–10 min until ridge gourd is silky-tender.'
        },
        {
          stepNum: 6,
          title: 'Rest and Infuse',
          instruction: 'Cover off the heat for 5 minutes to trap mustard aromatics.'
        }
      ],
      servingSuggestion: {
        text: 'Ladle hot into wide bowls alongside steamed white rice, a crisp roasted papad, or thick whole-wheat rotis smeared with ghee.',
        imageUrl: '/images/br/dal_jhingni.jpg'
      },
      vessel: 'Heavy Cast Iron Kadai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Summer & Monsoon (Ridge Gourd Harvest)',
      flavorProfile: ["Earthy Chana Dal Texture", "Silky Sweet Ridge Gourd", "Smoky Mustard Oil Perfume", "Golden Garlic Warmth"],
      dietary: 'Vegan',
      imageUrl: '/images/br/dal_jhingni.jpg',
      phonetic: 'DAHL zhing-NEE'
      },
      {
      id: 'br-chura-bhunja',
      name: 'Chura Bhunja',
      nativeName: 'चूड़ा भूँजा',
      englishSubtitle: 'Roasted Flattened Rice with Seasonal Crunch',
      tagline: 'Shatteringly crisp dry-roasted thick flattened rice tossed with fried peanuts, sweet winter peas, and raw mustard oil.',
      description: 'The quintessential evening companion across the verandas and street corners of Bihar, Chura Bhunja (or Chura Bhuja) is far more than a snack—it is a daily ritual. Built around thick, country-variety flattened rice (chura) dry-roasted to a nutty, shatteringly crisp perfection, it transforms with the turn of the seasons. While roasted peanuts, pungent raw mustard oil, sharp onions, and blistering green chilies remain constant companions year-round, the onset of winter brings sweet green peas (matar) and tender green chickpeas (choliya / hara chana).',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Bihari Village Verandas & Countryside Street Corners',
      culturalSignificance: 'The cultural soul of evening gatherings (adda) in Bihar, uniting generations over hot roasted chura, fresh winter crops, and steaming milk tea.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Crisp Grains & Legumes',
          items: [
            { item: 'Thick flattened rice (mota chura / poha)', amount: '2 cups' },
            { item: 'Raw peanuts (moongphali)', amount: '1/2 cup' },
            { item: 'Fresh green peas (matar) or green chickpeas (choliya)', amount: '1/2 cup', note: 'seasonal winter greens' }
          ]
        },
        {
          title: 'Aromatics, Oil & Spices',
          items: [
            { item: 'Medium onion (pyaj)', amount: '1', note: 'thinly sliced' },
            { item: 'Fresh green chilies (hari mirch)', amount: '3–4', note: 'finely chopped or slit' },
            { item: 'Turmeric powder (haldi)', amount: '1/2 tsp', note: 'optional, for golden hue' },
            { item: 'Pure mustard oil (sarson ka tel)', amount: '2 tbsp' },
            { item: 'Salt or black salt (kala namak)', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Thick flattened rice (mota chura)', amount: '2 cups' },
        { item: 'Raw peanuts', amount: '1/2 cup' },
        { item: 'Fresh green peas or choliya', amount: '1/2 cup' },
        { item: 'Onion (pyaj)', amount: '1 medium', note: 'sliced' },
        { item: 'Green chilies', amount: '3–4' },
        { item: 'Mustard oil (sarson ka tel)', amount: '2 tbsp' },
        { item: 'Turmeric & black salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Heat a heavy-bottomed cast iron skillet or deep kadai over medium flame. Add the flattened rice in batches without oil (dry roast) and stir continuously for 4–6 minutes until the flakes expand slightly, turn pale cream to light golden, and become shatteringly crisp to the touch. Transfer to a wide tray and cool.',
        'In the same pan, heat a tablespoon of mustard oil. Add the peanuts and fry on low heat until they crackle and turn a deep reddish-brown. If using winter greens like fresh peas or choliya, toss them into the skillet right after the peanuts, sautéing for 3–4 minutes until tender, slightly blistered, and sweet. Drain and transfer to the bowl with the roasted chura.',
        'In the remaining warm oil in the pan, flash-fry the green chilies and sliced onions for barely a minute—keeping them translucent and crisp rather than deeply browned. Toss in a pinch of turmeric and salt.',
        'Combine the crisp roasted chura, fried peanuts, tender peas, and sautéed onion-chili mix in a large bowl. Drizzle a few drops of raw, pungent mustard oil over the top and toss vigorously to coat every flake.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Dry-Roast the Chura',
          instruction: 'Dry-roast thick poha in a hot iron skillet 4–6 min until expanded, crisp, and shatteringly brittle.'
        },
        {
          stepNum: 2,
          title: 'Fry Peanuts & Winter Greens',
          instruction: 'Fry peanuts in 1 tbsp mustard oil until reddish-brown; flash-sauté fresh peas or choliya until blistered sweet.'
        },
        {
          stepNum: 3,
          title: 'Flash-Sauté Alliums',
          instruction: 'Flash-fry green chilies and sliced onions for 1 min with turmeric and salt, retaining crisp crunch.'
        },
        {
          stepNum: 4,
          title: 'Toss with Raw Mustard Oil',
          instruction: 'Toss all components vigorously with a drizzle of raw pungent mustard oil and black salt.'
        }
      ],
      servingSuggestion: {
        text: 'Serve immediately while warm and crisp, paired with a steaming clay cup of milk tea or alongside a rustic bowl of spiced ghugni.',
        imageUrl: '/images/br/chura_bhunja.jpg'
      },
      vessel: 'Heavy Cast Iron Kadai (Lohe Ki Kadhai)',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'Peak Winter (Chhath & Makar Sankranti Season)',
      flavorProfile: ["Shatteringly Crisp Roasted Grain", "Nutty Fried Peanuts", "Sweet Burst of Winter Peas", "Sharp Raw Mustard Pungency"],
      dietary: 'Vegan',
      imageUrl: '/images/br/chura_bhunja.jpg',
      phonetic: 'CHOO-rah BHOON-jah'
      },
      {
      id: 'br-lal-thariya-sabji',
      name: 'Lal Thariya Sabji',
      nativeName: 'लाल थरिया सब्जी / लाल साग',
      englishSubtitle: 'Stir-Fried Red Amaranth Greens in Mustard Oil',
      tagline: 'Vibrant winter red amaranth leaves quick-wilted in smoking mustard oil with whole cumin, caramelized onions, and smoky dried chilies.',
      description: 'Known affectionately as Lal Thariya across rural Bihar and widely celebrated as Lal Saag, this ruby-hued winter dish proves that elemental cooking often yields the purest comfort. Centered around tender red amaranth leaves freshly harvested during the cold months, this preparation relies on minimal intervention, allowing the mineral-rich, earthy sweetness of the greens to shine. Sizzled in smoking mustard oil with whole cumin seeds, caramelised onions, and smoky dried red chilies, the tender leaves wilt down into a luscious, glossy side dish that naturally paints the plate a vibrant, celebratory magenta.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Bihari Village Farmlands & Countryside Kitchens',
      culturalSignificance: 'A mineral-rich nutritional powerhouse celebrating winter harvest cycles across eastern agrarian homesteads.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Fresh Red Amaranth Greens',
          items: [
            { item: 'Fresh red amaranth leaves (lal thariya / lal saag)', amount: '1 large bunch', note: 'cleaned and finely chopped, approx. 4 cups' },
            { item: 'Turmeric powder (haldi)', amount: '1/2 tsp' },
            { item: 'Salt to taste (namak)', amount: 'to taste' }
          ]
        },
        {
          title: 'Aromatics & Smoking Mustard Oil',
          items: [
            { item: 'Medium onion (pyaj)', amount: '1', note: 'thinly sliced' },
            { item: 'Garlic cloves (lehsun)', amount: '4–5', note: 'crushed or thinly sliced' },
            { item: 'Whole dried red chilies (sukhi lal mirch)', amount: '2' },
            { item: 'Cumin seeds (jeera)', amount: '1 tsp' },
            { item: 'Pure mustard oil (sarson ka tel)', amount: '1.5 tbsp' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh red amaranth (lal thariya)', amount: '1 bunch (4 cups)' },
        { item: 'Onion (pyaj)', amount: '1 medium', note: 'sliced' },
        { item: 'Garlic cloves (lehsun)', amount: '4–5', note: 'crushed' },
        { item: 'Dried red chilies (sukhi lal mirch)', amount: '2' },
        { item: 'Cumin seeds (jeera)', amount: '1 tsp' },
        { item: 'Mustard oil (sarson ka tel)', amount: '1.5 tbsp' },
        { item: 'Turmeric & Salt', amount: '1/2 tsp turmeric, salt to taste' }
      ],
      preparationSteps: [
        'Pluck the tender red amaranth leaves and soft upper stems, discarding any tough or woody lower stalks. Wash thoroughly in several changes of cold water to rid the leaves of fine soil, drain completely in a colander, and chop finely.',
        'Heat the mustard oil in a heavy kadai until it begins to smoke lightly, then reduce the heat to medium. Add the cumin seeds and let them sizzle. Snap the dried red chilies and drop them in alongside the crushed garlic, letting them brown and infuse the oil with a smoky aroma.',
        'Add the sliced onions to the pan. Sauté over medium flame for 3 to 4 minutes until they turn soft, translucent, and develop light golden edges.',
        'Add the chopped lal thariya leaves to the pan in handfuls. Sprinkle the turmeric powder and salt over the top. Stir gently; the voluminous leaves will begin to collapse and release their natural ruby moisture almost immediately.',
        'Lower the heat, cover the pan, and let the greens simmer in their own juices for 5 to 7 minutes until the stems are completely tender. Remove the lid and turn the flame to medium-high, stirring for another 2 minutes until released water evaporates and the saag turns silky, cohesive, and lightly coated in aromatic oil.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Wash and Chop',
          instruction: 'Pluck tender amaranth leaves and soft upper stems, wash away fine silt thoroughly, drain, and chop finely.'
        },
        {
          stepNum: 2,
          title: 'Infuse Aromatics',
          instruction: 'Heat mustard oil until smoking; brown cumin seeds, snapped dry red chilies, and crushed garlic.'
        },
        {
          stepNum: 3,
          title: 'Caramelize Onions',
          instruction: 'Sauté sliced onions 3–4 min until translucent with golden edges.'
        },
        {
          stepNum: 4,
          title: 'Wilt and Simmer',
          instruction: 'Add greens, turmeric, and salt; cover and simmer 5–7 min in their own ruby-colored juices.'
        },
        {
          stepNum: 5,
          title: 'Dry to a Gloss',
          instruction: 'Uncover and stir-fry 2 min on high flame until moisture evaporates and greens glisten with aromatic oil.'
        }
      ],
      servingSuggestion: {
        text: 'Ladle hot onto a plate alongside steamed white rice, a spoon of yellow lentil soup (dal), and roasted papad, relishing the sweet, earthy contrast of the crimson leaves against plain white rice.',
        imageUrl: '/images/br/lal_thariya_sabji.jpg'
      },
      vessel: 'Heavy Iron Kadai',
      cookingFat: 'Cold-Pressed Mustard Oil',
      season: 'Peak Winter (November – February)',
      flavorProfile: ["Sweet Mineral-Rich Earthy Greens", "Smoky Toasted Red Chili", "Rich Garlic Undertone", "Golden Mustard Oil Sheen"],
      dietary: 'Vegan',
      imageUrl: '/images/br/lal_thariya_sabji.jpg',
      phonetic: 'LAHL thah-REE-yah SAB-jee'
      }
    ]
  },
  ka: {
    id: 'ka',
    name: 'Karnataka',
    nativeName: 'ಕರ್ನಾಟಕ',
    capital: 'Bengaluru',
    region: 'South',
    historicalEra: 'Hoysala & Deccan Plateau Foodways',
    culinaryPhilosophy: 'Balancing the arid Deccan millet traditions of ragi and jowar with coastal Malnad spice groves. Reverence for whole finger-millet cooling gruels (ambli) and roasted rice festive sweets (thambittu).',
    heirloomVessels: ['Manneri (Terracotta Pot)', 'Uruli (Heavy Kadai)', 'Kavili (Concave Iron Griddle)'],
    signatureSpices: ['Tellicherry Cardamom', 'Byadgi Chilli', 'Crushed Cumin', 'Dark Sugarcane Jaggery', 'Pure Desi Ghee'],
    stapleGrains: ['Ragi (Finger Millet)', 'Raw Rice', 'Jowar (Sorghum)'],
    representativeDish: {
      id: 'ka-ragi-ambli',
      name: 'Ragi Ambli',
      nativeName: 'ರಾಗಿ ಅಂಬ್ಲಿ',
      englishSubtitle: 'Finger-Millet Gruel',
      tagline: 'Velvety finger-millet gruel gently simmered, cooled & tempered with buttermilk, crushed cumin & shallots.',
      description: 'Ambli is a practical millet gruel and ancestral coolant of Karnataka\'s dry Deccan plateau and Old Mysore heartland. Whole finger-millet (ragi) flour is cooked slowly in water into a smooth, glossy porridge, then cooled and whisked with fresh sour buttermilk, crushed cumin seeds, and finely chopped shallots.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Old Mysore, Mandya, Hassan & Kolar Belts',
      culturalSignificance: 'The time-honored coolant of Karnataka\'s agricultural communities, rich in calcium and iron, providing sustainable energy throughout demanding harvests.',
      servesCount: 'Serves 2',
      approxPrepTime: '15 minutes',
      ingredientSections: [
        {
          title: 'Millet Porridge',
          items: [
            { item: 'Ragi flour', amount: '3 tbsp' },
            { item: 'Water', amount: '2 cups' },
            { item: 'Salt', amount: 'to taste' }
          ]
        },
        {
          title: 'Cultured Finishing',
          items: [
            { item: 'Buttermilk', amount: '1/2 cup', note: 'optional' },
            { item: 'Chopped onion, coriander or cumin', amount: 'to taste', note: 'optional' }
          ]
        }
      ],
      ingredients: [
        { item: 'Ragi flour', amount: '3 tbsp' },
        { item: 'Water', amount: '2 cups' },
        { item: 'Salt', amount: 'to taste' },
        { item: 'Buttermilk', amount: '1/2 cup, optional' },
        { item: 'Chopped onion, coriander or cumin', amount: 'optional' }
      ],
      preparationSteps: [
        'Whisk ragi flour with 1/2 cup cool water until smooth and lump-free.',
        'Bring remaining water to a simmer and slowly stir in the ragi slurry.',
        'Cook on low for 5–8 minutes, stirring continuously so it does not form lumps.',
        'Cool until lukewarm. Add salt and buttermilk if using.',
        'Serve as a thin drink or thicker porridge according to personal preference.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Whisk Slurry',
          instruction: 'Whisk ragi flour with 1/2 cup cool water until completely smooth.'
        },
        {
          stepNum: 2,
          title: 'Simmer Water',
          instruction: 'Bring remaining water to a simmer and slowly pour in the ragi slurry while stirring.'
        },
        {
          stepNum: 3,
          title: 'Gentle Cooking',
          instruction: 'Cook on low heat for 5–8 minutes, stirring steadily so no lumps develop.'
        },
        {
          stepNum: 4,
          title: 'Cool & Season',
          instruction: 'Cool to lukewarm temperature, then stir in sea salt and fresh buttermilk.'
        },
        {
          stepNum: 5,
          title: 'Serve',
          instruction: 'Serve in earthen terracotta cups garnished with chopped shallots or cumin.'
        }
      ],
      servingSuggestion: {
        text: 'Serve in traditional terracotta cups sprinkled with roasted jeera powder and accompanied by raw shallots and fresh curd.',
        imageUrl: '/images/ka/ragi_ambli.jpg'
      },
      vessel: 'Manneri (Terracotta Pot)',
      cookingFat: 'Oil-Free Cooking',
      season: 'Summer & Peak Harvest Days',
      flavorProfile: ['Earthy Ragi Nutty Notes', 'Pleasantly Tart Buttermilk', 'Warm Roasted Cumin', 'Shallot Crunch'],
      dietary: 'Millet-based',
      imageUrl: '/images/ka/ragi_ambli.jpg',
      phonetic: 'RAH-gee UHM-blee'
    },
    dishes: [
      {
        id: 'ka-ragi-ambli',
        name: 'Ragi Ambli',
        nativeName: 'ರಾಗಿ ಅಂಬ್ಲಿ',
        englishSubtitle: 'Finger-Millet Gruel',
        tagline: 'Velvety finger-millet gruel gently simmered, cooled & tempered with buttermilk, crushed cumin & shallots.',
        description: 'Ambli is a practical millet gruel and ancestral coolant of Karnataka\'s dry Deccan plateau and Old Mysore heartland. Whole finger-millet (ragi) flour is cooked slowly in water into a smooth, glossy porridge, then cooled and whisked with fresh sour buttermilk, crushed cumin seeds, and finely chopped shallots.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Old Mysore, Mandya, Hassan & Kolar Belts',
        culturalSignificance: 'The time-honored coolant of Karnataka\'s agricultural communities, rich in calcium and iron, providing sustainable energy throughout demanding harvests.',
        servesCount: 'Serves 2',
        approxPrepTime: '15 minutes',
        ingredientSections: [
          {
            title: 'Millet Porridge',
            items: [
              { item: 'Ragi flour', amount: '3 tbsp' },
              { item: 'Water', amount: '2 cups' },
              { item: 'Salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Cultured Finishing',
            items: [
              { item: 'Buttermilk', amount: '1/2 cup', note: 'optional' },
              { item: 'Chopped onion, coriander or cumin', amount: 'to taste', note: 'optional' }
            ]
          }
        ],
        ingredients: [
          { item: 'Ragi flour', amount: '3 tbsp' },
          { item: 'Water', amount: '2 cups' },
          { item: 'Salt', amount: 'to taste' },
          { item: 'Buttermilk', amount: '1/2 cup, optional' },
          { item: 'Chopped onion, coriander or cumin', amount: 'optional' }
        ],
        preparationSteps: [
          'Whisk ragi flour with 1/2 cup cool water until smooth and lump-free.',
          'Bring remaining water to a simmer and slowly stir in the ragi slurry.',
          'Cook on low for 5–8 minutes, stirring continuously so it does not form lumps.',
          'Cool until lukewarm. Add salt and buttermilk if using.',
          'Serve as a thin drink or thicker porridge according to personal preference.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Whisk Slurry',
            instruction: 'Whisk ragi flour with 1/2 cup cool water until completely smooth.'
          },
          {
            stepNum: 2,
            title: 'Simmer Water',
            instruction: 'Bring remaining water to a simmer and slowly pour in the ragi slurry while stirring.'
          },
          {
            stepNum: 3,
            title: 'Gentle Cooking',
            instruction: 'Cook on low heat for 5–8 minutes, stirring steadily so no lumps develop.'
          },
          {
            stepNum: 4,
            title: 'Cool & Season',
            instruction: 'Cool to lukewarm temperature, then stir in sea salt and fresh buttermilk.'
          },
          {
            stepNum: 5,
            title: 'Serve',
            instruction: 'Serve in earthen terracotta cups garnished with chopped shallots or cumin.'
          }
        ],
        servingSuggestion: {
          text: 'Serve in traditional terracotta cups sprinkled with roasted jeera powder and accompanied by raw shallots and fresh curd.',
          imageUrl: '/images/ka/ragi_ambli.jpg'
        },
        vessel: 'Manneri (Terracotta Pot)',
        cookingFat: 'Oil-Free Cooking',
        season: 'Summer & Peak Harvest Days',
        flavorProfile: ['Earthy Ragi Nutty Notes', 'Pleasantly Tart Buttermilk', 'Warm Roasted Cumin', 'Shallot Crunch'],
        dietary: 'Millet-based',
        imageUrl: '/images/ka/ragi_ambli.jpg',
        phonetic: 'RAH-gee UHM-blee'
      },
      {
        id: 'ka-akki-thambittu',
        name: 'Akki Thambittu',
        nativeName: 'ಅಕ್ಕಿ ತಂಬಿಟ್ಟು',
        englishSubtitle: 'Roasted Rice-Flour Sweet',
        tagline: 'Hand-moulded festive sweet made from golden roasted rice flour, cardamom-infused jaggery syrup & pure desi ghee.',
        description: 'Akki Thambittu is a beloved traditional roasted rice-flour confection prepared during festive traditions and temple celebrations in Karnataka. Rice flour is slow-roasted until fragrant, combined with warm jaggery syrup, pure desi ghee, grated coconut, and crushed cardamom, then hand-shaped into comforting soft mounds.',
        preservationStatus: 'Traditional Dish',
        microOrigin: 'Bangalore Rural, Mandya & Mysore Royal Hearth',
        culturalSignificance: 'Traditionally shaped into sacred lamp mounds (thambittu deepa) and offered to deities during Maha Shivaratri and harvest celebrations.',
        servesCount: 'Makes 8 small portions',
        approxPrepTime: '25 minutes',
        ingredientSections: [
          {
            title: 'Roasted Rice Base',
            items: [
              { item: 'Rice flour', amount: '1 cup' }
            ]
          },
          {
            title: 'Jaggery Syrup',
            items: [
              { item: 'Grated jaggery', amount: '1/2 cup' },
              { item: 'Water', amount: '2–3 tbsp' }
            ]
          },
          {
            title: 'Fat & Aromatics',
            items: [
              { item: 'Pure desi ghee', amount: '2–4 tbsp' },
              { item: 'Grated coconut', amount: '2 tbsp', note: 'optional' },
              { item: 'Cardamom powder', amount: '1/4 tsp' },
              { item: 'Chopped nuts or sesame seeds', amount: '1–2 tbsp', note: 'optional' }
            ]
          }
        ],
        ingredients: [
          { item: 'Rice flour', amount: '1 cup' },
          { item: 'Grated jaggery', amount: '1/2 cup' },
          { item: 'Ghee', amount: '2–4 tbsp' },
          { item: 'Grated coconut', amount: '2 tbsp, optional' },
          { item: 'Cardamom', amount: '1/4 tsp' },
          { item: 'Chopped nuts or sesame', amount: '1–2 tbsp, optional' }
        ],
        preparationSteps: [
          'Dry-roast rice flour on low heat, stirring continuously until aromatic but not browned; cool slightly.',
          'Warm jaggery with 2–3 tbsp water until dissolved; strain through a sieve if needed.',
          'Return syrup to low heat and stir in ghee, cardamom and coconut if using.',
          'Add rice flour gradually, mixing until it forms a soft, mouldable mixture. Add a little more ghee if dry.',
          'When cool enough to handle, shape into small balls or mounds and let set.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Roast Rice Flour',
            instruction: 'Dry-roast rice flour on low heat until aromatic and fragrant; do not brown.'
          },
          {
            stepNum: 2,
            title: 'Melt Jaggery Syrup',
            instruction: 'Dissolve grated jaggery with water into a syrup and strain if necessary.'
          },
          {
            stepNum: 3,
            title: 'Ghee & Cardamom',
            instruction: 'Stir pure ghee, crushed cardamom, and grated coconut into the warm syrup.'
          },
          {
            stepNum: 4,
            title: 'Combine & Knead',
            instruction: 'Stir in roasted rice flour gradually until a soft, mouldable dough forms.'
          },
          {
            stepNum: 5,
            title: 'Shape Mounds',
            instruction: 'Divide warm dough and shape into rounded mounds or traditional deepas.'
          }
        ],
        servingSuggestion: {
          text: 'Serve warm or set at room temperature on brass platters or clean banana leaves for festival offerings and family tea.',
          imageUrl: '/images/ka/akki_thambittu.jpg'
        },
        vessel: 'Uruli / Heavy Kadai',
        cookingFat: 'Pure Desi Ghee',
        season: 'Maha Shivaratri, Gauri Habba & Winter Festivals',
        flavorProfile: ['Toasted Rice Aroma', 'Warm Molten Jaggery', 'Nutty Sesame & Coconut', 'Fragrant Cardamom & Ghee'],
        dietary: 'Vegetarian',
        imageUrl: '/images/ka/akki_thambittu.jpg',
        phonetic: 'UHK-kee THAAM-bit-too'
      }
    ]
  },
  ap: {
    id: 'ap',
    name: 'Andhra Pradesh',
    nativeName: 'ఆంధ్ర ప్రదేశ్',
    capital: 'Amaravati',
    region: 'South',
    historicalEra: 'Kakatiya & Godavari River Delta Heritage',
    culinaryPhilosophy: 'Vibrant regional cooking balancing robust chutneys, seasonal raw jackfruit curries, and sustaining Rayalaseema ragi staples with fragrant whole spices and fresh citrus.',
    heirloomVessels: ['Bandli (Heavy Kadai)', 'Tudupu Karra (Wooden Churning Stick)', 'Mankalathil (Clay Pot)'],
    signatureSpices: ['Mustard Seeds', 'Curry Leaves', 'Turmeric', 'Coriander Powder', 'Red Chilli Powder', 'Fresh Lemon'],
    stapleGrains: ['Sona Masoori Rice', 'Ragi (Finger Millet)', 'Red Gram (Kandi Pappu)'],
    representativeDish: {
      id: 'ap-panasa-puttu-koora',
      name: 'Panasa Puttu Koora',
      nativeName: 'పనస పొట్టు కూర',
      englishSubtitle: 'Raw Jackfruit Curry',
      tagline: 'Tender shredded raw jackfruit tossed with tempered mustard, curry leaves, crushed chillies & finished with fresh lemon juice.',
      description: 'Panasa Puttu Koora is an iconic Coastal Andhra delicacy celebrating raw green jackfruit. Chopped jackfruit is gently steamed until tender, shredded into fine strands, and tossed in hot oil with crackling mustard seeds, curry leaves, green chillies, turmeric, coriander, and finished with fresh lemon juice.',
      preservationStatus: 'Revived Heirloom',
      microOrigin: 'East & West Godavari Districts, Coastal Andhra',
      culturalSignificance: 'A festive wedding and ceremony delicacy in Andhra households, celebrating the bountiful raw jackfruit harvest before the fruit turns sweet.',
      servesCount: 'Serves 3–4',
      approxPrepTime: '40–50 minutes',
      ingredientSections: [
        {
          title: 'Jackfruit Base',
          items: [
            { item: 'Raw jackfruit, peeled and chopped', amount: '3 cups' }
          ]
        },
        {
          title: 'Tempering & Aromatics',
          items: [
            { item: 'Cooking oil', amount: '2 tbsp' },
            { item: 'Mustard seeds', amount: '1/2 tsp' },
            { item: 'Medium onion, sliced', amount: '1' },
            { item: 'Green chillies, slit', amount: '2' },
            { item: 'Fresh curry leaves', amount: '1 sprig' }
          ]
        },
        {
          title: 'Spices & Finishing',
          items: [
            { item: 'Turmeric powder', amount: '1/2 tsp' },
            { item: 'Chilli powder', amount: '1 tsp' },
            { item: 'Coriander powder', amount: '1 tsp' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'Fresh lemon juice', amount: '1–2 tbsp' }
          ]
        }
      ],
      ingredients: [
        { item: 'Raw jackfruit, peeled and chopped', amount: '3 cups' },
        { item: 'Cooking oil', amount: '2 tbsp' },
        { item: 'Mustard seeds', amount: '1/2 tsp' },
        { item: 'Medium onion, sliced', amount: '1' },
        { item: 'Green chillies', amount: '2' },
        { item: 'Turmeric powder', amount: '1/2 tsp' },
        { item: 'Chilli powder', amount: '1 tsp' },
        { item: 'Coriander powder', amount: '1 tsp' },
        { item: 'Salt, curry leaves, and lemon juice', amount: 'to taste' }
      ],
      preparationSteps: [
        'Steam or boil jackfruit pieces until tender; drain and shred lightly with a fork.',
        'Heat oil in a pan; add mustard seeds, curry leaves, onion and chillies. Cook until onion softens.',
        'Add turmeric, chilli powder, coriander powder and salt.',
        'Add jackfruit and toss well. Cook covered 8–10 minutes, stirring occasionally.',
        'Finish with lemon juice and serve warm with rice.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Steam & Shred',
          instruction: 'Steam or boil jackfruit chunks until tender, drain thoroughly, and shred finely with a fork.'
        },
        {
          stepNum: 2,
          title: 'Temper Aromatics',
          instruction: 'Heat oil, crackle mustard seeds with curry leaves, and sauté onions with green chillies until soft.'
        },
        {
          stepNum: 3,
          title: 'Bloom Spices',
          instruction: 'Add turmeric, chilli powder, coriander powder, and salt to the tempered aromatics.'
        },
        {
          stepNum: 4,
          title: 'Simmer Shreds',
          instruction: 'Toss shredded jackfruit into spiced oil, cover, and cook for 8–10 minutes on low heat.'
        },
        {
          stepNum: 5,
          title: 'Lemon Finish',
          instruction: 'Remove from heat, squeeze fresh lemon juice over the curry, and toss well.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot with fragrant steamed rice, a spoonful of ghee, and a comforting bowl of Andhra pappu or majjiga pulusu.',
        imageUrl: '/images/ap/panasa_puttu_koora.jpg'
      },
      vessel: 'Bandli (Heavy Kadai)',
      cookingFat: 'Groundnut Oil / Sesame Oil',
      season: 'Spring & Summer Jackfruit Harvest',
      flavorProfile: ['Meaty Shredded Texture', 'Mustard Pungency', 'Curry Leaf Aroma', 'Tangy Citrus Zing'],
      dietary: 'Vegan',
      imageUrl: '/images/ap/panasa_puttu_koora.jpg',
      phonetic: 'Pah-NAH-sah PUHT-too KOO-rah'
    },
    dishes: [
      {
        id: 'ap-panasa-puttu-koora',
        name: 'Panasa Puttu Koora',
        nativeName: 'పనస పొట్టు కూర',
        englishSubtitle: 'Raw Jackfruit Curry',
        tagline: 'Tender shredded raw jackfruit tossed with tempered mustard, curry leaves, crushed chillies & finished with fresh lemon juice.',
        description: 'Panasa Puttu Koora is an iconic Coastal Andhra delicacy celebrating raw green jackfruit. Chopped jackfruit is gently steamed until tender, shredded into fine strands, and tossed in hot oil with crackling mustard seeds, curry leaves, green chillies, turmeric, coriander, and finished with fresh lemon juice.',
        preservationStatus: 'Revived Heirloom',
        microOrigin: 'East & West Godavari Districts, Coastal Andhra',
        culturalSignificance: 'A festive wedding and ceremony delicacy in Andhra households, celebrating the bountiful raw jackfruit harvest before the fruit turns sweet.',
        servesCount: 'Serves 3–4',
        approxPrepTime: '40–50 minutes',
        ingredientSections: [
          {
            title: 'Jackfruit Base',
            items: [
              { item: 'Raw jackfruit, peeled and chopped', amount: '3 cups' }
            ]
          },
          {
            title: 'Tempering & Aromatics',
            items: [
              { item: 'Cooking oil', amount: '2 tbsp' },
              { item: 'Mustard seeds', amount: '1/2 tsp' },
              { item: 'Medium onion, sliced', amount: '1' },
              { item: 'Green chillies, slit', amount: '2' },
              { item: 'Fresh curry leaves', amount: '1 sprig' }
            ]
          },
          {
            title: 'Spices & Finishing',
            items: [
              { item: 'Turmeric powder', amount: '1/2 tsp' },
              { item: 'Chilli powder', amount: '1 tsp' },
              { item: 'Coriander powder', amount: '1 tsp' },
              { item: 'Salt', amount: 'to taste' },
              { item: 'Fresh lemon juice', amount: '1–2 tbsp' }
            ]
          }
        ],
        ingredients: [
          { item: 'Raw jackfruit, peeled and chopped', amount: '3 cups' },
          { item: 'Cooking oil', amount: '2 tbsp' },
          { item: 'Mustard seeds', amount: '1/2 tsp' },
          { item: 'Medium onion, sliced', amount: '1' },
          { item: 'Green chillies', amount: '2' },
          { item: 'Turmeric powder', amount: '1/2 tsp' },
          { item: 'Chilli powder', amount: '1 tsp' },
          { item: 'Coriander powder', amount: '1 tsp' },
          { item: 'Salt, curry leaves, and lemon juice', amount: 'to taste' }
        ],
        preparationSteps: [
          'Steam or boil jackfruit pieces until tender; drain and shred lightly with a fork.',
          'Heat oil in a pan; add mustard seeds, curry leaves, onion and chillies. Cook until onion softens.',
          'Add turmeric, chilli powder, coriander powder and salt.',
          'Add jackfruit and toss well. Cook covered 8–10 minutes, stirring occasionally.',
          'Finish with lemon juice and serve warm with rice.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Steam & Shred',
            instruction: 'Steam or boil jackfruit chunks until tender, drain thoroughly, and shred finely with a fork.'
          },
          {
            stepNum: 2,
            title: 'Temper Aromatics',
            instruction: 'Heat oil, crackle mustard seeds with curry leaves, and sauté onions with green chillies until soft.'
          },
          {
            stepNum: 3,
            title: 'Bloom Spices',
            instruction: 'Add turmeric, chilli powder, coriander powder, and salt to the tempered aromatics.'
          },
          {
            stepNum: 4,
            title: 'Simmer Shreds',
            instruction: 'Toss shredded jackfruit into spiced oil, cover, and cook for 8–10 minutes on low heat.'
          },
          {
            stepNum: 5,
            title: 'Lemon Finish',
            instruction: 'Remove from heat, squeeze fresh lemon juice over the curry, and toss well.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot with fragrant steamed rice, a spoonful of ghee, and a comforting bowl of Andhra pappu or majjiga pulusu.',
          imageUrl: '/images/ap/panasa_puttu_koora.jpg'
        },
        vessel: 'Bandli (Heavy Kadai)',
        cookingFat: 'Groundnut Oil / Sesame Oil',
        season: 'Spring & Summer Jackfruit Harvest',
        flavorProfile: ['Meaty Shredded Texture', 'Mustard Pungency', 'Curry Leaf Aroma', 'Tangy Citrus Zing'],
        dietary: 'Vegan',
        imageUrl: '/images/ap/panasa_puttu_koora.jpg',
        phonetic: 'Pah-NAH-sah PUHT-too KOO-rah'
      },
      {
        id: 'ap-rayalaseema-ragi-sangati',
        name: 'Rayalaseema Ragi Sangati',
        nativeName: 'రాయలసీమ రాగి సంగటి',
        englishSubtitle: 'Finger-Millet and Rice Balls',
        tagline: 'Steamed soft rice blended vigorously with nutrient-dense ragi flour into pillowy, sustaining mountain spheres.',
        description: 'Rayalaseema Ragi Sangati is the quintessential nutrient-dense rural staple of Rayalaseema. Soft-cooked rice is simmered in water, gradually dusted with nutty finger-millet (ragi) flour, and beaten vigorously with a sturdy wooden stick into smooth, dense, steaming spheres traditionally eaten with fiery country gravies and pappu.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Rayalaseema (Anantapur, Kadapa, Kurnool & Chittoor)',
        culturalSignificance: 'The historic daily staple of agrarian Rayalaseema families, providing endurance under harsh arid climates and revered as a low-glycemic superfood.',
        servesCount: 'Serves 2–3',
        approxPrepTime: '30 minutes',
        ingredientSections: [
          {
            title: 'Grains & Water',
            items: [
              { item: 'Rice', amount: '1/2 cup' },
              { item: 'Ragi flour', amount: '1 cup' },
              { item: 'Water', amount: '3 1/2 – 4 cups' },
              { item: 'Salt', amount: 'to taste', note: 'optional' }
            ]
          }
        ],
        ingredients: [
          { item: 'Rice', amount: '1/2 cup' },
          { item: 'Ragi flour', amount: '1 cup' },
          { item: 'Water', amount: '3 1/2 – 4 cups' },
          { item: 'Salt', amount: 'optional' }
        ],
        preparationSteps: [
          'Wash rice and cook it in the water until very soft; stir and lightly mash.',
          'Lower the heat. Sprinkle in ragi flour gradually while stirring vigorously to avoid lumps.',
          'Cover and cook on low for 5–7 minutes.',
          'Beat with a sturdy spoon until cohesive. Wet hands or use a spoon to shape into balls.',
          'Serve hot with pappu, pulusu or a vegetable curry.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Cook Rice Soft',
            instruction: 'Wash rice and boil in 3.5 to 4 cups of water until completely soft and mashed.'
          },
          {
            stepNum: 2,
            title: 'Sprinkle Ragi Flour',
            instruction: 'Lower heat and sprinkle ragi flour over the boiling rice without stirring immediately.'
          },
          {
            stepNum: 3,
            title: 'Vigorous Stir',
            instruction: 'Stir vigorously with a sturdy wooden stick to prevent any lumps from forming.'
          },
          {
            stepNum: 4,
            title: 'Cover & Steam',
            instruction: 'Cover and steam on low flame for 5–7 minutes until fully cooked and glossy.'
          },
          {
            stepNum: 5,
            title: 'Shape Spheres',
            instruction: 'Beat well until cohesive; dampen hands with water and roll into smooth, warm spheres.'
          }
        ],
        servingSuggestion: {
          text: 'Ladle hot gongura pappu or spicy pulusu around the warm ragi ball, make a dimple on top, and fill with a teaspoon of pure melted ghee.',
          imageUrl: '/images/ap/rayalaseema_ragi_sangati.jpg'
        },
        vessel: 'Dhakka / Heavy Clay or Metal Pot with Tudupu Karra',
        cookingFat: 'Pure Desi Ghee (optional dollop on top)',
        season: 'Year-Round Everyday Sustenance',
        flavorProfile: ['Nutty Ragi Earthiness', 'Soft Rice Comfort', 'Dense & Satiating', 'Neutral Canvas for Fiery Gravies'],
        dietary: 'Millet-based',
        imageUrl: '/images/ap/rayalaseema_ragi_sangati.jpg',
        phonetic: 'RAH-yah-lah-SEE-mah RAH-gee SAHN-gah-tee'
      }
    ]
  },
  tg: {
    id: 'tg',
    name: 'Telangana',
    nativeName: 'తెలంగాణ',
    capital: 'Hyderabad',
    region: 'South',
    historicalEra: 'Kakatiya Dynasty & Deccan Plateau Foodways',
    culinaryPhilosophy: 'Telangana\'s older everyday foodways celebrate sorghum, pearl millet, seasonal greens, and cooling gruels closely linked to local arid crops and deep household ancestral knowledge.',
    heirloomVessels: ['Penam (Concave Cast Iron Tawa)', 'Kundha (Earthen Terracotta Pot)', 'Sarva (Brass Bowl)'],
    signatureSpices: ['Curry Leaves', 'Cumin Seeds', 'Dried Red Chillies', 'White Sesame', 'Pappu Broth'],
    stapleGrains: ['Jowar (Sorghum)', 'Sajja (Pearl Millet)', 'Toor Dal'],
    representativeDish: {
      id: 'tg-jonna-rotte',
      name: 'Jonna Rotte',
      nativeName: 'జొన్న రొట్టె',
      englishSubtitle: 'Sorghum Flatbread',
      tagline: 'Artisanal hand-patted unleavened sorghum flatbread baked on iron tawa, blistered over embers & served with fiery podis.',
      description: 'Jonna Rotte is Telangana\'s iconic sorghum flatbread. Made purely from milled sorghum (jowar) flour and hot water, the warm dough is patted rhythmically by hand into thin rounds without rolling pins, cooked on a blistering concave tawa with a sprinkle of water, and toasted until puffed and lightly charred.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Deccan Plateau & Rural Telangana Districts',
      culturalSignificance: 'The historic daily staple of Telangana farmers and weavers, representing exceptional manual hand-patting skill passed down through generations of rural women.',
      servesCount: 'Makes 4 small rotte',
      approxPrepTime: '25 minutes',
      ingredientSections: [
        {
          title: 'Sorghum Dough',
          items: [
            { item: 'Jowar (sorghum) flour', amount: '1 cup' },
            { item: 'Hot water', amount: '3/4 cup', note: 'approximately' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'Extra flour', amount: 'for shaping' }
          ]
        }
      ],
      ingredients: [
        { item: 'Jowar (sorghum) flour', amount: '1 cup' },
        { item: 'Hot water', amount: '3/4 cup, approximately' },
        { item: 'Salt', amount: 'to taste' },
        { item: 'Extra flour for shaping', amount: 'as needed' }
      ],
      preparationSteps: [
        'Put flour and salt in a bowl. Add hot water gradually and mix with a spoon.',
        'When cool enough to handle, knead into a soft dough; add a little water if it cracks.',
        'Divide into four balls. Pat each into a thin round between damp hands or on a clean board dusted with flour.',
        'Cook on a hot tawa. Turn and cook both sides; sprinkle a little water on the surface if needed.',
        'Serve hot with pappu, leafy curry, chutney or dal.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Hot Water Mix',
          instruction: 'Place jowar flour and salt in a bowl, pour in hot water, and combine with a spoon.'
        },
        {
          stepNum: 2,
          title: 'Knead Soft Dough',
          instruction: 'Knead warm dough vigorously with palms until soft, adding drops of water if cracks show.'
        },
        {
          stepNum: 3,
          title: 'Hand-Pat Rounds',
          instruction: 'Divide into 4 balls; dust board with flour and pat gently with damp hand into thin rounds.'
        },
        {
          stepNum: 4,
          title: 'Tawa Bake',
          instruction: 'Place on hot iron tawa, sprinkle surface with water, and cook until water evaporates.'
        },
        {
          stepNum: 5,
          title: 'Toast Both Sides',
          instruction: 'Flip and toast both sides until light brown speckles appear and the bread puffs.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot with spicy pappu, pachi pulusu, freshly ground peanut chutney, or a dollop of country butter.',
        imageUrl: '/images/tg/jonna_rotte.jpg'
      },
      vessel: 'Penam (Concave Cast Iron Tawa)',
      cookingFat: 'Dry Baked (Zero Fat on Tawa)',
      season: 'Year-Round Everyday Staple',
      flavorProfile: ['Nutty Sorghum Earthiness', 'Smoky Char', 'Lightly Chewy Texture', 'Subtle Toasted Grain Sweetness'],
      dietary: 'Millet-based',
      imageUrl: '/images/tg/jonna_rotte.jpg',
      phonetic: 'JON-nah ROHT-tay'
    },
    dishes: [
      {
        id: 'tg-jonna-rotte',
        name: 'Jonna Rotte',
        nativeName: 'జొన్న రొట్టె',
        englishSubtitle: 'Sorghum Flatbread',
        tagline: 'Artisanal hand-patted unleavened sorghum flatbread baked on iron tawa, blistered over embers & served with fiery podis.',
        description: 'Jonna Rotte is Telangana\'s iconic sorghum flatbread. Made purely from milled sorghum (jowar) flour and hot water, the warm dough is patted rhythmically by hand into thin rounds without rolling pins, cooked on a blistering concave tawa with a sprinkle of water, and toasted until puffed and lightly charred.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Deccan Plateau & Rural Telangana Districts',
        culturalSignificance: 'The historic daily staple of Telangana farmers and weavers, representing exceptional manual hand-patting skill passed down through generations of rural women.',
        servesCount: 'Makes 4 small rotte',
        approxPrepTime: '25 minutes',
        ingredientSections: [
          {
            title: 'Sorghum Dough',
            items: [
              { item: 'Jowar (sorghum) flour', amount: '1 cup' },
              { item: 'Hot water', amount: '3/4 cup', note: 'approximately' },
              { item: 'Salt', amount: 'to taste' },
              { item: 'Extra flour', amount: 'for shaping' }
            ]
          }
        ],
        ingredients: [
          { item: 'Jowar (sorghum) flour', amount: '1 cup' },
          { item: 'Hot water', amount: '3/4 cup, approximately' },
          { item: 'Salt', amount: 'to taste' },
          { item: 'Extra flour for shaping', amount: 'as needed' }
        ],
        preparationSteps: [
          'Put flour and salt in a bowl. Add hot water gradually and mix with a spoon.',
          'When cool enough to handle, knead into a soft dough; add a little water if it cracks.',
          'Divide into four balls. Pat each into a thin round between damp hands or on a clean board dusted with flour.',
          'Cook on a hot tawa. Turn and cook both sides; sprinkle a little water on the surface if needed.',
          'Serve hot with pappu, leafy curry, chutney or dal.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Hot Water Mix',
            instruction: 'Place jowar flour and salt in a bowl, pour in hot water, and combine with a spoon.'
          },
          {
            stepNum: 2,
            title: 'Knead Soft Dough',
            instruction: 'Knead warm dough vigorously with palms until soft, adding drops of water if cracks show.'
          },
          {
            stepNum: 3,
            title: 'Hand-Pat Rounds',
            instruction: 'Divide into 4 balls; dust board with flour and pat gently with damp hand into thin rounds.'
          },
          {
            stepNum: 4,
            title: 'Tawa Bake',
            instruction: 'Place on hot iron tawa, sprinkle surface with water, and cook until water evaporates.'
          },
          {
            stepNum: 5,
            title: 'Toast Both Sides',
            instruction: 'Flip and toast both sides until light brown speckles appear and the bread puffs.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot with spicy pappu, pachi pulusu, freshly ground peanut chutney, or a dollop of country butter.',
          imageUrl: '/images/tg/jonna_rotte.jpg'
        },
        vessel: 'Penam (Concave Cast Iron Tawa)',
        cookingFat: 'Dry Baked (Zero Fat on Tawa)',
        season: 'Year-Round Everyday Staple',
        flavorProfile: ['Nutty Sorghum Earthiness', 'Smoky Char', 'Lightly Chewy Texture', 'Subtle Toasted Grain Sweetness'],
        dietary: 'Millet-based',
        imageUrl: '/images/tg/jonna_rotte.jpg',
        phonetic: 'JON-nah ROHT-tay'
      },
      {
        id: 'tg-sajja-ambali',
        name: 'Sajja Ambali',
        nativeName: 'సజ్జ అంబలి',
        englishSubtitle: 'Pearl-Millet Savoury Gruel',
        tagline: 'Cooling fermented pearl-millet savoury gruel blended with sour buttermilk, shallots & fragrant coriander.',
        description: 'Sajja Ambali is an ancestral cooling pearl-millet gruel popular throughout the rural heartlands of Telangana. Pearl millet flour is cooked gently with water into a smooth porridge, cooled, and whisked with sour buttermilk, salt, and finely chopped raw onions for natural hydration in intense dry heat.',
        preservationStatus: 'Traditional Dish',
        microOrigin: 'Mahabubnagar, Warangal & Nalgonda Rural Belts',
        culturalSignificance: 'Carried by farmers in mud jugs to arid millet fields, this nourishing probiotic gruel restores electrolyte balance and prevents sunstroke.',
        servesCount: 'Serves 2',
        approxPrepTime: '20 minutes plus cooling',
        ingredientSections: [
          {
            title: 'Millet Gruel Base',
            items: [
              { item: 'Sajja (pearl millet) flour', amount: '1/2 cup' },
              { item: 'Water', amount: '3 cups' },
              { item: 'Salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Cooling Blend',
            items: [
              { item: 'Buttermilk', amount: '1/2 cup', note: 'optional, after cooling' },
              { item: 'Chopped onion, coriander or green chilli', amount: 'to taste', note: 'optional' }
            ]
          }
        ],
        ingredients: [
          { item: 'Sajja (pearl millet) flour', amount: '1/2 cup' },
          { item: 'Water', amount: '3 cups' },
          { item: 'Salt', amount: 'to taste' },
          { item: 'Buttermilk', amount: '1/2 cup, optional, after cooling' },
          { item: 'Chopped onion, coriander or green chilli', amount: 'optional' }
        ],
        preparationSteps: [
          'Whisk millet flour with 1 cup cool water until completely lump-free.',
          'Bring remaining water to a simmer, then pour in the slurry while stirring.',
          'Cook gently for 8–12 minutes, stirring until the flour is cooked and the gruel thickens.',
          'Cool until lukewarm. Add salt and, if desired, buttermilk and chopped onion.',
          'Serve as a drinkable gruel or spoonable porridge.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Make Slurry',
            instruction: 'Whisk sajja flour with 1 cup cold water until completely smooth.'
          },
          {
            stepNum: 2,
            title: 'Pour & Whisk',
            instruction: 'Pour slurry steadily into simmering water while stirring vigorously.'
          },
          {
            stepNum: 3,
            title: 'Gentle Simmer',
            instruction: 'Simmer on low for 8–12 minutes until cooked through and nicely thickened.'
          },
          {
            stepNum: 4,
            title: 'Cool Down',
            instruction: 'Cool to lukewarm temperature; do not add buttermilk while boiling.'
          },
          {
            stepNum: 5,
            title: 'Fold Buttermilk & Onions',
            instruction: 'Stir in salt, buttermilk, and finely chopped raw onions; serve fresh.'
          }
        ],
        servingSuggestion: {
          text: 'Serve cool in terracotta earthen cups topped with finely chopped pink onions and fresh coriander.',
          imageUrl: '/images/tg/sajja_ambali.jpg'
        },
        vessel: 'Kundha (Earthen Terracotta Pot)',
        cookingFat: 'Oil-Free Cooking',
        season: 'Peak Summer & Harvest Months',
        flavorProfile: ['Cooling Tart Buttermilk', 'Earthy Pearl Millet Depth', 'Crunchy Pungent Shallots', 'Spicy Chilli Kick'],
        dietary: 'Millet-based',
        imageUrl: '/images/tg/sajja_ambali.jpg',
        phonetic: 'SUHJ-jah AHM-bah-lee'
      }
    ]
  },
  ga: {
    id: 'ga',
    name: 'Goa',
    nativeName: 'गोंय / गोवा',
    capital: 'Panaji',
    region: 'West',
    historicalEra: 'Konkan Saraswat & Indo-Portuguese Fusion',
    culinaryPhilosophy: 'Dual culinary worlds: Saraswat Hindu satvik preparations with triphala and coconut alongside Christian vinegar-macerated spice pastes (recheado) and multi-layered egg desserts.',
    heirloomVessels: ['Kundlem (Earthen Pot)', 'Brass Uruli', 'Handi'],
    signatureSpices: ['Tefal / Triphala Berries', 'Goan Toddy Vinegar', 'Kokum (Solam)', 'Kashmiri Chillies'],
    stapleGrains: ['Goan Ukda Red Rice', 'Coconut Paste', 'Rawa'],
    representativeDish: {
      id: 'ga-xit-kodi',
      name: 'Xit Kodi',
      nativeName: 'शीत कोडी',
      englishSubtitle: 'Goan Fish Curry and Rice',
      tagline: 'The daily lifeblood of Goa: fresh coastal fish simmered in a coconut, tamarind & kokum broth over parboiled red rice.',
      description: 'Xit means rice, and Kodi means curry. This is the daily lifeblood of Goa. A true Goan fish curry uses a fresh coconut base soured with tamarind and kokum, paired with the state\'s traditional parboiled red rice.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Coastal Goan Fishing Hamlets & River Estuaries',
      culturalSignificance: 'Xit Kodi is the foundation of Goan identity. The addition of kokum petals (sole) gives the curry its authentic reddish-orange tinge and distinctive sour edge that balances the fatty coastal fish.',
      servesCount: 'Serves 4',
      approxPrepTime: '40 min',
      ingredientSections: [
        {
          title: 'The Fish & Parboiled Rice',
          items: [
            { item: 'Firm white fish (Mackerel, Kingfish, or Pomfret)', amount: '500g', note: 'cleaned and sliced' },
            { item: 'Ukde Xit (Goan parboiled red rice)', amount: '1 cup' },
            { item: 'Fish marinade', amount: '1/2 tsp turmeric, 1 tsp salt' }
          ]
        },
        {
          title: 'Grinding Coconut Paste',
          items: [
            { item: 'Grated fresh coconut', amount: '1 cup' },
            { item: 'Dry Kashmiri chilies', amount: '6-8' },
            { item: 'Coriander seeds', amount: '1 tbsp' },
            { item: 'Cumin seeds', amount: '1/2 tsp' },
            { item: 'Turmeric powder', amount: '1/2 tsp' },
            { item: 'Garlic cloves', amount: '4' },
            { item: 'Tamarind', amount: '1 marble-sized ball' }
          ]
        },
        {
          title: 'Curry Broth & Souring',
          items: [
            { item: 'Onion', amount: '1/2', note: 'finely sliced' },
            { item: 'Green chilies', amount: '2', note: 'slit' },
            { item: 'Dried kokum petals (sole)', amount: '3-4 petals' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Firm white fish (Kingfish or Mackerel)', amount: '500g' },
        { item: 'Ukde Xit (Goan parboiled red rice)', amount: '1 cup' },
        { item: 'Freshly grated coconut', amount: '1 cup' },
        { item: 'Dry Kashmiri chilies', amount: '6-8' },
        { item: 'Kokum petals (sole)', amount: '3-4' },
        { item: 'Coriander & cumin seeds', amount: '1 tbsp & 1/2 tsp' },
        { item: 'Tamarind & garlic', amount: 'to taste' },
        { item: 'Onion, green chili, turmeric, salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Marinate the fish: Rub the cleaned fish slices with salt and turmeric. Set aside for 15-20 minutes.',
        'Cook the rice: Wash the Goan red rice and boil it in plenty of water. It takes longer to cook than white rice (usually 30-40 minutes). Drain the excess water once the grains are swollen and tender.',
        'Grind the coconut base: Blend the coconut, dry red chilies, coriander seeds, cumin, turmeric, garlic, and tamarind with a little water until it forms a very fine, smooth paste.',
        'Build the curry broth: In a clay pot (modki) or deep pan, bring 1.5 cups of water to a boil. Add the sliced onion and green chilies. Boil until the onions turn translucent.',
        'Simmer the masala: Stir the ground coconut paste into the boiling water. Adjust the consistency (it should be pouring consistency, not too thick). Bring to a simmer and add the kokum petals and salt.',
        'Poach the fish: Slide the marinated fish pieces gently into the bubbling curry. Simmer on medium-low heat for 5-7 minutes until the fish turns opaque and cooks through. Swirl the pot gently by the handles instead of using a spoon to prevent breaking the fish.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Marinate Fish & Cook Rice',
          instruction: 'Rub sliced fish with turmeric and salt. Boil Goan red rice in water for 35 minutes until plump, then drain.'
        },
        {
          stepNum: 2,
          title: 'Grind Coconut Masala',
          instruction: 'Blend grated coconut, Kashmiri chilies, coriander, cumin, garlic, and tamarind into an ultra-smooth paste.'
        },
        {
          stepNum: 3,
          title: 'Build Kodi Broth',
          instruction: 'Boil sliced onions and slit green chilies in water. Whisk in coconut masala and add kokum petals.'
        },
        {
          stepNum: 4,
          title: 'Poach Fish Gently',
          instruction: 'Slide fish gently into simmering curry. Simmer for 5-7 minutes without stirring with a spoon to keep steaks intact.'
        }
      ],
      servingSuggestion: {
        text: 'Serve the Kodi piping hot, ladled generously over a mound of the earthy Ukde Xit. It is almost always accompanied by a piece of semolina-coated fried fish (Rava fry), some local mango pickle, and a simple vegetable stir-fry (foogath) on the side.',
        imageUrl: '/images/ga/xit_kodi.jpg'
      },
      vessel: 'Clay Modki Pot',
      cookingFat: 'Cold-Pressed Coconut Oil',
      season: 'Year-Round Coastal Harvest',
      flavorProfile: ['Tangy Kokum & Tamarind', 'Smooth Coconut Milk', 'Gentle Kashmiri Chilli Heat', 'Coastal Fish Savory'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/ga/xit_kodi.jpg',
      phonetic: 'SHEET KOH-dee'
    },
    dishes: [
      {
        id: 'ga-niro',
        name: 'Niro',
        nativeName: 'नीरो',
        englishSubtitle: 'Fresh Cashew Apple Juice',
        tagline: 'Pure, cold-pressed first-run juice of freshly picked cashew apples, enjoyed fresh on the orchard.',
        description: 'Niro is the pure, unfermented juice extracted from cashew apples immediately after harvest. Because it ferments rapidly into alcohol (which is then distilled into urrak and feni), it must be consumed fresh on the same day it is extracted.',
        preservationStatus: 'Endangered Oral Tradition',
        microOrigin: 'Valpoi, Sattari & Ponda Cashew Groves',
        culturalSignificance: 'Extracted exclusively during the hot cashew harvest months (March to May) in Goa hills. Only the very first gentle hand or foot press (colmbi) is consumed as sweet Niro; subsequent presses are fermented into feni.',
        servesCount: 'Serves 2–4',
        approxPrepTime: '15 min',
        ingredientSections: [
          {
            title: 'Orchard Harvest',
            items: [
              { item: 'Fresh ripe cashew apples (bonda in Konkani)', amount: '6-8 fruits' }
            ]
          },
          {
            title: 'Flavor Balancers',
            items: [
              { item: 'Salt', amount: 'pinch', note: 'to balance astringency' },
              { item: 'Fresh lime juice', amount: 'squeeze', note: 'optional' }
            ]
          }
        ],
        ingredients: [
          { item: 'Fresh ripe cashew apples (bonda)', amount: '6-8 fruits' },
          { item: 'Sea salt', amount: 'pinch' },
          { item: 'Lime juice', amount: 'squeeze, optional' }
        ],
        preparationSteps: [
          'Extract the first press: Traditionally, cashew apples are stomped in a rock basin called a colmbi. For a smaller batch, the juice is firmly squeezed by hand or pressed using a manual juicer. Only the first, gentle press is used for Niro to avoid extracting the bitter tannins from the skin.',
          'Strain the liquid: Pass the extracted cloudy liquid through a clean muslin cloth or a fine sieve multiple times. This removes fibrous pulp and produces a clear, golden-yellow juice.',
          'Balance the flavor: Stir in a tiny pinch of salt to cut through the throat-catching astringency natural to cashew apples, with an optional splash of lime.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'First-Run Gentle Press',
            instruction: 'Press ripe cashew apples gently to extract only the sweet, golden juice, avoiding bitter skin tannins.'
          },
          {
            stepNum: 2,
            title: 'Muslin Straining',
            instruction: 'Filter through clean muslin multiple times until a sparkling clear nectar is obtained.'
          },
          {
            stepNum: 3,
            title: 'Salt Balance',
            instruction: 'Add a tiny pinch of salt and lime to tame natural astringency.'
          }
        ],
        servingSuggestion: {
          text: 'Serve immediately, poured over ice in tall glasses. It is traditionally enjoyed as a refreshing mid-morning summer drink in Goan villages. It should never be stored at room temperature for more than a few hours.',
          imageUrl: '/images/ga/niro.jpg'
        },
        vessel: 'Glass Tumbler / Terracotta Kulhad',
        cookingFat: 'Zero Fat (Raw Pressed Juice)',
        season: 'Cashew Harvest (March – May)',
        flavorProfile: ['Sweet Nectar', 'Mild Astringent', 'Citrus Lime Zing', 'Fruity Floral'],
        dietary: 'Vegan',
        imageUrl: '/images/ga/niro.jpg'
      },
      {
        id: 'ga-ghontan-sasav',
        name: 'Ghontan Sasav',
        nativeName: 'घोंटांचे सासाव',
        englishSubtitle: 'Wild Mango & Mustard Curry',
        tagline: 'Saraswat Brahmin sweet, sour, and pungent wild mango and coconut curry tempered with mustard.',
        description: 'A quintessential Saraswat Brahmin summer dish, sasav (meaning mustard) perfectly balances sweet, sour, spicy, and bitter notes. It utilizes ghontan—small, fibrous, incredibly sweet wild mangoes that are eaten whole, seed and all.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Saraswat Brahmin Kitchens & Marcel Orchards',
        culturalSignificance: 'Sasav is an ancient Konkani term for mustard seed. Cooked without onion or garlic in the Saraswat Brahmin tradition, this dish celebrates the tiny wild fibrous mangoes that flourish during coastal monsoon borders.',
        servesCount: 'Serves 4',
        approxPrepTime: '25 min',
        ingredientSections: [
          {
            title: 'Wild Mango Base',
            items: [
              { item: 'Ripe ghontan (small wild mangoes)', amount: '8-10' },
              { item: 'Jaggery', amount: '1/4 cup', note: 'adjust to sweetness' },
              { item: 'Salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Coconut & Mustard Paste',
            items: [
              { item: 'Freshly grated coconut', amount: '1 cup' },
              { item: 'Mustard seeds (sasav)', amount: '1 tsp' },
              { item: 'Dry Kashmiri or Bedgi red chilies', amount: '3-4', note: 'roasted' },
              { item: 'Turmeric powder', amount: '1/2 tsp' }
            ]
          },
          {
            title: 'Tempering',
            items: [
              { item: 'Coconut oil', amount: '1 tbsp' },
              { item: 'Mustard seeds', amount: '1/2 tsp' },
              { item: 'Curry leaves', amount: '1 sprig' },
              { item: 'Asafoetida (hing)', amount: '1 pinch' }
            ]
          }
        ],
        ingredients: [
          { item: 'Ripe ghontan wild mangoes', amount: '8-10' },
          { item: 'Freshly grated coconut', amount: '1 cup' },
          { item: 'Mustard seeds (sasav)', amount: '1 1/2 tsp' },
          { item: 'Dry Kashmiri red chilies', amount: '3-4' },
          { item: 'Jaggery & salt', amount: 'to taste' },
          { item: 'Coconut oil, curry leaves, hing', amount: 'for tempering' }
        ],
        preparationSteps: [
          'Prep the mangoes: Wash and peel the mangoes. Gently squeeze them with your hands to release some pulp, but keep the whole fibrous seeds submerged in their own pulp. Do not discard the seeds.',
          'Grind the masala: Grind the grated coconut, roasted red chilies, and turmeric powder into a coarse paste using a little water.',
          'Blend the mustard: Add the raw mustard seeds to the grinder only in the last few seconds. Grinding mustard for too long releases intense bitterness.',
          'Combine and season: Mix the ground masala paste with the mango pulp and seeds. Stir in the jaggery and salt.',
          'Temper the curry: Heat coconut oil in a small pan. Splutter mustard seeds, add asafoetida and curry leaves, and pour the hot oil over the mango mixture. Mix well.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Mango Pulping',
            instruction: 'Peel wild mangoes and squeeze gently, keeping seeds submerged in their pulp.'
          },
          {
            stepNum: 2,
            title: 'Grind Coconut Paste',
            instruction: 'Grind coconut and red chilies, adding mustard seeds only at the end to prevent bitterness.'
          },
          {
            stepNum: 3,
            title: 'Combine & Season',
            instruction: 'Mix paste with mango pulp and seeds, adjusting with jaggery and salt.'
          },
          {
            stepNum: 4,
            title: 'Coconut Oil Tempering',
            instruction: 'Pour hot coconut oil tempered with mustard, hing, and curry leaves over the dish.'
          }
        ],
        servingSuggestion: {
          text: 'Serve at room temperature as a sweet-and-sour relish accompanying rice, dal, and fried fish or vegetables. To eat it, suck the sweet, spicy pulp directly off the fibrous mango seed.',
          imageUrl: '/images/ga/ghontan_sasav.jpg'
        },
        vessel: 'Clay Kundlem Pot / Uruli',
        cookingFat: 'Cold-Pressed Coconut Oil',
        season: 'Summer (April – June)',
        flavorProfile: ['Sweet Wild Mango', 'Pungent Mustard', 'Fiery Roasted Chilli', 'Coconut Richness'],
        dietary: 'Vegan',
        imageUrl: '/images/ga/ghontan_sasav.jpg'
      },
      {
        id: 'ga-xit-kodi',
        name: 'Xit Kodi',
        nativeName: 'शीत कोडी',
        englishSubtitle: 'Goan Fish Curry and Rice',
        tagline: 'The daily lifeblood of Goa: fresh coastal fish simmered in a coconut, tamarind & kokum broth over parboiled red rice.',
        description: 'Xit means rice, and Kodi means curry. This is the daily lifeblood of Goa. A true Goan fish curry uses a fresh coconut base soured with tamarind and kokum, paired with the state\'s traditional parboiled red rice.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Coastal Goan Hamlets',
        culturalSignificance: 'Daily sustenance across Goan homes with signature sour kokum and red ukde rice.',
        servesCount: 'Serves 4',
        approxPrepTime: '40 min',
        ingredientSections: [
          {
            title: 'Fish & Red Rice',
            items: [
              { item: 'Sliced fish (Kingfish or Pomfret)', amount: '500g' },
              { item: 'Ukde Xit (Goan red rice)', amount: '1 cup' }
            ]
          },
          {
            title: 'Coconut Kodi Masala',
            items: [
              { item: 'Grated coconut', amount: '1 cup' },
              { item: 'Kashmiri chilies & tamarind', amount: 'to taste' },
              { item: 'Kokum petals (sole)', amount: '3-4' }
            ]
          }
        ],
        ingredients: [
          { item: 'Firm white fish', amount: '500g' },
          { item: 'Ukde Xit (Goan red rice)', amount: '1 cup' },
          { item: 'Coconut paste & spices', amount: 'to taste' },
          { item: 'Kokum petals (sole)', amount: '3-4' }
        ],
        preparationSteps: [
          'Marinate fish slices in salt and turmeric.',
          'Cook Goan parboiled red rice until tender.',
          'Grind fresh coconut with red chilies, coriander, cumin, garlic, and tamarind.',
          'Simmer onions and green chilies, stir in coconut masala and kokum petals.',
          'Poach fish steaks gently until tender.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Cook Rice & Marinate',
            instruction: 'Boil red rice and salt-marinate fish pieces.'
          },
          {
            stepNum: 2,
            title: 'Simmer Kodi & Poach Fish',
            instruction: 'Blend coconut paste, simmer with kokum, and gently poach the fish steaks.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot with parboiled Ukde Xit and Rava fried fish.',
          imageUrl: '/images/ga/xit_kodi.jpg'
        },
        vessel: 'Clay Modki',
        cookingFat: 'Coconut Oil',
        season: 'All Year',
        flavorProfile: ['Tangy Kokum', 'Creamy Coconut', 'Fresh Fish Savory'],
        dietary: 'Non-Vegetarian',
        imageUrl: '/images/ga/xit_kodi.jpg'
      }
    ]
  },
  ut: {
    id: 'ut',
    name: 'Uttarakhand',
    nativeName: 'उत्तराखंड',
    capital: 'Dehradun / Gairsain',
    region: 'North',
    historicalEra: 'Kedar Khand & Katyuri Himalayan Dynasties',
    culinaryPhilosophy: 'Hyper-local Himalayan forest and hill agriculture: indigenous finger millets (mandua), barnyard millets (jhangora), sun-dried black lentils, foraged nettles, and aromatic jakhiya tempering.',
    heirloomVessels: ['Heavy Iron Kadhai (Bhadoo)', 'Brass Parat', 'Soapstone Bowl'],
    signatureSpices: ['Jakhiya (Wild Mustard Cleome)', 'Jambu (Himalayan Allium)', 'Bhang Seeds (Hemp)', 'Gandharini (Angelica)', 'Chora'],
    stapleGrains: ['Mandua (Finger Millet)', 'Jhangora (Barnyard Millet)', 'Himalayan Red Rice', 'Gahat (Horsegram)'],
    representativeDish: {
      id: 'ut-kafuli',
      name: 'Kafuli',
      nativeName: 'काफुली',
      englishSubtitle: 'Thick Greens Curry',
      tagline: 'Garhwali iron-pot simmered spinach and fenugreek leaves thickened with rice flour and tempered in jakhiya.',
      description: 'Kafuli is a Garhwali preparation often made from spinach and fenugreek leaves. The greens are cooked and thickened, producing a dish that is earthy and vivid rather than cream-based. The exact balance of greens and thickener varies; a little rice or wheat paste gives body without hiding the flavour of the leaves.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Garhwal & Kumaon Hill Villages',
      culturalSignificance: 'Traditionally slow-cooked in heavy cast iron pots (bhadoo) over pine wood embers, the iron infuses the wild greens with essential bioavailable minerals.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '35–45 min',
      ingredientSections: [
        {
          title: 'Hill Greens',
          items: [
            { item: 'Spinach (palak)', amount: '400g', note: 'washed and chopped' },
            { item: 'Fenugreek leaves (methi)', amount: '150g', note: 'washed and chopped' }
          ]
        },
        {
          title: 'Thickener Slurry',
          items: [
            { item: 'Rice flour or finely ground rice', amount: '1 1/2 tbsp', note: 'mixed with water' },
            { item: 'Water', amount: '1 - 1 1/2 cups' }
          ]
        },
        {
          title: 'Tempering & Spices',
          items: [
            { item: 'Mustard oil or ghee', amount: '1 tbsp' },
            { item: 'Jakhiya seeds (or cumin)', amount: '1/2 tsp' },
            { item: 'Garlic cloves', amount: '3', note: 'chopped' },
            { item: 'Green chilli', amount: '1', note: 'optional' },
            { item: 'Turmeric powder & salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Spinach and fenugreek leaves', amount: '550g total' },
        { item: 'Rice flour slurry', amount: '1 1/2 tbsp' },
        { item: 'Mustard oil or ghee', amount: '1 tbsp' },
        { item: 'Jakhiya seeds or cumin', amount: '1/2 tsp' },
        { item: 'Garlic, green chilli, turmeric & salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Wash greens carefully and chop. Bring water to a simmer in a pot, add greens, turmeric, chilli, and salt, and cook 10-15 minutes until wilted.',
        'Cool slightly and blend or mash to a coarse rustic puree.',
        'Return greens to the pot. Mix rice flour with cold water into a smooth slurry, stir into the greens, and simmer for 5-8 minutes until thickened.',
        'Heat mustard oil in a small pan, crackle jakhiya seeds (or cumin) and garlic until fragrant, and pour over the greens.',
        'Simmer for another 2 minutes and serve hot.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Simmer Wild Greens',
          instruction: 'Cook spinach and fenugreek with turmeric and salt until tender; mash coarsely.'
        },
        {
          stepNum: 2,
          title: 'Rice Flour Thickening',
          instruction: 'Stir in rice flour slurry gradually to give kafuli its rich body.'
        },
        {
          stepNum: 3,
          title: 'Jakhiya Oil Sizzle',
          instruction: 'Crackle jakhiya seeds and garlic in mustard oil and pour hot over the greens.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot with steamed red rice or mandua (finger millet) roti, accompanied by a spoonful of ghee.',
        imageUrl: '/images/ut/kafuli.jpg'
      },
      vessel: 'Heavy Cast Iron Bhadoo Pot',
      cookingFat: 'Cold-Pressed Mustard Oil',
      season: 'Autumn & Winter',
      flavorProfile: ['Earthy Mineral Greens', 'Nutty Jakhiya Crunch', 'Garlic Fragrance', 'Subtle Bitterness'],
      dietary: 'Vegetarian',
      imageUrl: '/images/ut/kafuli.jpg',
      phonetic: 'KAH-foo-lee'
    },
    dishes: [
      {
        id: 'ut-kafuli',
        name: 'Kafuli',
        nativeName: 'काफुली',
        englishSubtitle: 'Thick Greens Curry',
        tagline: 'Garhwali iron-pot simmered spinach and fenugreek leaves thickened with rice flour and tempered in jakhiya.',
        description: 'Kafuli is a Garhwali preparation often made from spinach and fenugreek leaves. The greens are cooked and thickened, producing a dish that is earthy and vivid rather than cream-based. The exact balance of greens and thickener varies; a little rice or wheat paste gives body without hiding the flavour of the leaves.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Garhwal & Kumaon',
        culturalSignificance: 'Traditional iron-pot green stew sustaining Himalayan hill settlements.',
        servesCount: 'Yield: 4 servings',
        approxPrepTime: '35–45 min',
        ingredientSections: [
          {
            title: 'Greens',
            items: [
              { item: 'Spinach & fenugreek leaves', amount: '550g' }
            ]
          },
          {
            title: 'Tempering',
            items: [
              { item: 'Mustard oil', amount: '1 tbsp' },
              { item: 'Jakhiya seeds', amount: '1/2 tsp' }
            ]
          }
        ],
        ingredients: [
          { item: 'Spinach and fenugreek leaves', amount: '550g' },
          { item: 'Rice flour slurry', amount: '1 1/2 tbsp' },
          { item: 'Mustard oil & jakhiya seeds', amount: '1 tbsp & 1/2 tsp' },
          { item: 'Garlic & spices', amount: 'to taste' }
        ],
        preparationSteps: [
          'Simmer greens tender and mash coarsely.',
          'Thicken with rice flour slurry.',
          'Temper jakhiya seeds and garlic in mustard oil and pour over.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Simmer & Thicken',
            instruction: 'Mash tender greens and simmer with rice flour slurry.'
          },
          {
            stepNum: 2,
            title: 'Jakhiya Tadka',
            instruction: 'Crackle jakhiya and garlic in hot mustard oil.'
          }
        ],
        servingSuggestion: {
          text: 'Serve with mandua roti and fresh curd.',
          imageUrl: '/images/ut/kafuli.jpg'
        },
        vessel: 'Iron Bhadoo Pot',
        cookingFat: 'Mustard Oil',
        season: 'Winter',
        flavorProfile: ['Earthy', 'Nutty', 'Herbal'],
        dietary: 'Vegetarian',
        imageUrl: '/images/ut/kafuli.jpg'
      },
      {
        id: 'ut-chainsoo',
        name: 'Chainsoo',
        nativeName: 'चैंसू',
        englishSubtitle: 'Roasted Black-Gram Curry',
        tagline: 'Nutty Garhwali curry made by dry-roasting whole black urad dal before stone-grinding and simmering.',
        description: 'Chainsoo is a robust Garhwali dish made from roasted black gram (urad). Roasting before grinding gives the pulse a nutty aroma and distinguishes the dish from ordinary boiled dal. The ground pulse thickens the gravy, so careful addition of water and frequent stirring are essential to avoid lumps.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Garhwal Valleys',
        culturalSignificance: 'Unique among Indian dal preparations for roasting the pulses dry in iron pans before grinding, imparting a rich, toasted aroma suited to mountain cold.',
        servesCount: 'Yield: 4 servings',
        approxPrepTime: '40–50 min',
        ingredientSections: [
          {
            title: 'Roasted Pulse',
            items: [
              { item: 'Whole urad dal', amount: '1 cup', note: 'dry-roasted and coarsely ground' }
            ]
          },
          {
            title: 'Aromatics & Spices',
            items: [
              { item: 'Mustard oil or ghee', amount: '1 tbsp' },
              { item: 'Cumin seeds', amount: '1/2 tsp' },
              { item: 'Garlic & ginger', amount: '3 cloves & 1 tsp' },
              { item: 'Small onion', amount: '1', note: 'optional' },
              { item: 'Turmeric, coriander, chilli & salt', amount: 'to taste' },
              { item: 'Hot water', amount: '3-4 cups' }
            ]
          }
        ],
        ingredients: [
          { item: 'Whole urad dal', amount: '1 cup' },
          { item: 'Mustard oil', amount: '1 tbsp' },
          { item: 'Garlic, ginger & cumin', amount: 'to taste' },
          { item: 'Turmeric, coriander powder & salt', amount: 'to taste' },
          { item: 'Hot water', amount: '3-4 cups' }
        ],
        preparationSteps: [
          'Dry roast urad dal in a heavy pan on medium-low heat until nutty and darkened. Cool and grind to a coarse powder.',
          'Heat mustard oil, sauté cumin, garlic, ginger, and optional onion until soft.',
          'Add turmeric, coriander, chilli, and salt with a splash of water.',
          'Sprinkle in ground dal gradually while stirring. Add hot water in stages to avoid lumps.',
          'Simmer for 20-30 minutes, stirring frequently until creamy and cooked through.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Dry Roast Dal',
            instruction: 'Roast whole urad in a dry pan until deeply aromatic and nutty. Coarsely grind.'
          },
          {
            stepNum: 2,
            title: 'Simmer with Water',
            instruction: 'Sauté garlic in mustard oil, stir in ground dal, and add hot water gradually, simmering until creamy.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot with steamed rice or mandua roti and bhang ki chutney.',
          imageUrl: '/images/ut/chainsoo.jpg'
        },
        vessel: 'Heavy Cast Iron Kadhai',
        cookingFat: 'Mustard Oil',
        season: 'Winter & Monsoon',
        flavorProfile: ['Toasted Dal Nutty', 'Earthy Garlic', 'Warming Mustard Oil'],
        dietary: 'Vegetarian',
        imageUrl: '/images/ut/chainsoo.jpg'
      },
      {
        id: 'ut-aloo-ke-gutke',
        name: 'Aloo ke Gutke',
        nativeName: 'आलू के गुटके',
        englishSubtitle: 'Spiced Potatoes',
        tagline: 'Kumaoni-style chunky boiled potatoes tossed in smoking mustard oil with crackling jakhiya seeds.',
        description: 'Aloo ke gutke is a Kumaoni-style potato preparation, typically made with boiled potatoes, oil, chilli, and a fragrant tempering. The potatoes are cut into chunky pieces and tossed until their edges take on the spices. The goal is a dry, lightly crisp exterior and a soft centre, not a wet curry.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Kumaon Hills (Almora & Nainital)',
        culturalSignificance: 'The signature snack and side dish of Kumaon, made distinctive by jakhiya (Cleome viscosa) seeds that pop with a nutty crunch in smoking mustard oil.',
        servesCount: 'Yield: 4 servings as a side',
        approxPrepTime: '30–35 min',
        ingredientSections: [
          {
            title: 'Potatoes & Oil',
            items: [
              { item: 'Potatoes, boiled and cubed', amount: '600g' },
              { item: 'Mustard oil', amount: '2 tbsp' }
            ]
          },
          {
            title: 'Jakhiya Tempering & Spices',
            items: [
              { item: 'Jakhiya seeds (or cumin)', amount: '1 tsp' },
              { item: 'Dried red chillies', amount: '2-3', note: 'broken' },
              { item: 'Turmeric & coriander powder', amount: '1/2 tsp each' },
              { item: 'Fresh coriander & salt', amount: 'to taste' },
              { item: 'Lemon juice', amount: 'optional' }
            ]
          }
        ],
        ingredients: [
          { item: 'Boiled potatoes, cubed', amount: '600g' },
          { item: 'Mustard oil', amount: '2 tbsp' },
          { item: 'Jakhiya seeds (or cumin)', amount: '1 tsp' },
          { item: 'Dried red chillies & turmeric', amount: 'to taste' },
          { item: 'Fresh coriander & salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Boil potatoes until just tender, peel, and cut into large chunks with uneven edges.',
          'Heat mustard oil in a wide pan until shimmering. Crackle jakhiya and dried red chillies without burning.',
          'Add turmeric and coriander, then immediately toss in potatoes to coat evenly.',
          'Cook over medium heat for 8-12 minutes until edges turn golden and crisp.',
          'Finish with chopped coriander and lemon juice.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Jakhiya Crackle',
            instruction: 'Crackle jakhiya seeds and red chillies in smoking mustard oil.'
          },
          {
            stepNum: 2,
            title: 'Crisp Potato Tossing',
            instruction: 'Toss chunky boiled potatoes with spices until crusty and golden on the edges.'
          }
        ],
        servingSuggestion: {
          text: 'Serve with puri, mandua roti, or hot tea, accompanied by bhang ki chutney.',
          imageUrl: '/images/ut/aloo_ke_gutke.jpg'
        },
        vessel: 'Iron Kadai',
        cookingFat: 'Mustard Oil',
        season: 'All Year',
        flavorProfile: ['Crisp Edge Potato', 'Pungent Mustard', 'Crunchy Jakhiya', 'Red Chilli Heat'],
        dietary: 'Vegan',
        imageUrl: '/images/ut/aloo_ke_gutke.jpg'
      },
      {
        id: 'ut-jhangora-ki-kheer',
        name: 'Jhangora ki Kheer',
        nativeName: 'झंगोरे की खीर',
        englishSubtitle: 'Barnyard-Millet Pudding',
        tagline: 'Delicate Himalayan dessert of indigenous barnyard millet simmered in milk with cardamom and saffron.',
        description: 'Jhangora is a local name for barnyard millet used in Uttarakhand. In kheer, the grains soften in milk and produce a pudding with a delicate, slightly grainy texture. Rinse the millet well and stir frequently so the milk does not catch on the bottom of the pan.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Garhwal & Kumaon Hill Kitchens',
        culturalSignificance: 'Barnyard millet is an ancient climate-resilient Himalayan crop; this sweet kheer is made during sacred fasts and festive gatherings.',
        servesCount: 'Yield: 4 small dessert servings',
        approxPrepTime: '35–45 min',
        ingredientSections: [
          {
            title: 'Millet & Dairy',
            items: [
              { item: 'Jhangora (barnyard millet)', amount: '1/2 cup', note: 'rinsed' },
              { item: 'Whole milk', amount: '4 cups' }
            ]
          },
          {
            title: 'Sweetener & Aromatics',
            items: [
              { item: 'Sugar', amount: '3-4 tbsp', note: 'to taste' },
              { item: 'Green cardamom pods, crushed', amount: '3' },
              { item: 'Almonds or cashews', amount: '1 tbsp', note: 'chopped' },
              { item: 'Raisins & saffron', amount: 'optional' },
              { item: 'Pinch of salt', amount: 'pinch' }
            ]
          }
        ],
        ingredients: [
          { item: 'Jhangora (barnyard millet)', amount: '1/2 cup' },
          { item: 'Whole milk', amount: '4 cups' },
          { item: 'Sugar', amount: '3-4 tbsp' },
          { item: 'Cardamom pods', amount: '3' },
          { item: 'Nuts & saffron', amount: 'optional' }
        ],
        preparationSteps: [
          'Rinse jhangora in several changes of water and drain.',
          'Bring milk to a simmer in a heavy-bottomed pot, stirring regularly.',
          'Add millet and a pinch of salt. Simmer on low heat for 25-35 minutes, stirring frequently until grains soften and milk thickens.',
          'Add cardamom, nuts, and raisins. Simmer 3-5 minutes.',
          'Stir in sugar once the millet is tender. Rest 5-10 minutes and serve warm or chilled.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Simmer Millet in Milk',
            instruction: 'Cook rinsed jhangora in gently bubbling milk until the grains soften and creaminess develops.'
          },
          {
            stepNum: 2,
            title: 'Infuse Aromatics',
            instruction: 'Add crushed cardamom, nuts, and sugar, simmering until delicately thickened.'
          }
        ],
        servingSuggestion: {
          text: 'Serve warm in earthen bowls or chilled as a light, fragrant mountain dessert.',
          imageUrl: '/images/ut/jhangora_ki_kheer.jpg'
        },
        vessel: 'Heavy Copper or Brass Pot',
        cookingFat: 'Zero Added Fat',
        season: 'Festive & Winter',
        flavorProfile: ['Creamy Milk', 'Delicate Grain Texture', 'Cardamom Floral', 'Saffron Fragrance'],
        dietary: 'Vegetarian',
        imageUrl: '/images/ut/jhangora_ki_kheer.jpg'
      },
      {
        id: 'ut-bhang-ki-chutney',
        name: 'Bhang ki Chutney',
        nativeName: 'भांग की चटनी',
        englishSubtitle: 'Roasted Hemp-Seed Chutney',
        tagline: 'Piquant, nutty mountain condiment of toasted food-grade hemp seeds pounded with cumin and lemon.',
        description: 'This chutney uses culinary hemp seeds for their nutty, toasted flavour, typically combined with cumin, chilli, garlic, and an acidic ingredient. It is an accompaniment rather than a main dish. Use only food-grade hemp seeds sold for culinary use.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Uttarakhand Mountain Valleys',
        culturalSignificance: 'A distinct culinary heritage of Uttarakhand hill communities using non-psychoactive hemp seeds (bhang ke beej) roasted on iron tawas for a warming winter condiment.',
        servesCount: 'Yield: 1 small bowl',
        approxPrepTime: '10–15 min',
        ingredientSections: [
          {
            title: 'Hemp Seeds & Spices',
            items: [
              { item: 'Food-grade hemp seeds (bhang seeds)', amount: '3 tbsp', note: 'culinary use' },
              { item: 'Cumin seeds', amount: '1/2 tsp' },
              { item: 'Green or dried red chilli', amount: '1' },
              { item: 'Small garlic clove', amount: '1', note: 'optional' },
              { item: 'Lemon juice or tamarind water', amount: '1-2 tsp' },
              { item: 'Salt & water', amount: 'to taste' },
              { item: 'Fresh coriander', amount: '1 tbsp', note: 'optional' }
            ]
          }
        ],
        ingredients: [
          { item: 'Culinary hemp seeds (bhang)', amount: '3 tbsp' },
          { item: 'Cumin seeds', amount: '1/2 tsp' },
          { item: 'Green chilli & garlic', amount: '1 each' },
          { item: 'Lemon juice or tamarind', amount: '1-2 tsp' },
          { item: 'Salt & coriander', amount: 'to taste' }
        ],
        preparationSteps: [
          'Toast hemp seeds gently in a dry pan over low heat until fragrant. Avoid burning.',
          'Toast cumin separately until aromatic.',
          'Grind toasted hemp seeds, cumin, chilli, garlic, and salt in a stone mortar.',
          'Add lemon juice or tamarind water, then water a little at a time to form a thick, spoonable chutney.',
          'Rest for 5 minutes and serve fresh.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Toast Hemp Seeds',
            instruction: 'Dry-toast culinary hemp seeds and cumin until nutty and fragrant.'
          },
          {
            stepNum: 2,
            title: 'Stone Grind Chutney',
            instruction: 'Grind with green chilli, garlic, and lemon juice into a spoonable, rustic paste.'
          }
        ],
        servingSuggestion: {
          text: 'Serve in small portions alongside mandua roti, rice, chainsoo, or aloo ke gutke.',
          imageUrl: '/images/ut/bhang_ki_chutney.jpg'
        },
        vessel: 'Sil-Batta (Stone Mortar)',
        cookingFat: 'Zero Fat',
        season: 'Winter & Monsoon',
        flavorProfile: ['Nutty Toasted Seed', 'Tangy Lemon / Tamarind', 'Gentle Heat', 'Earthy Garlic'],
        dietary: 'Vegan',
        imageUrl: '/images/ut/bhang_ki_chutney.jpg'
      }
    ]
  },
  sk: {
    id: 'sk',
    name: 'Sikkim',
    nativeName: 'सिक्किम',
    capital: 'Gangtok',
    region: 'North-East',
    historicalEra: 'Chogyal Dynasty & Eastern Himalayan Foothills',
    culinaryPhilosophy: 'World leaders in fermented preservation: zero-oil pork braises with winter radish and wild fiddlehead ferns (Phagshapa), fiery Dalle Khursani cherry pepper pickles, bamboo shoots, and fragrant Himalayan timur peppercorns.',
    heirloomVessels: ["Heavy Cast Iron Wok", "Mirtikana (Glass Pickle Jar)", "Wooden Mortar"],
    signatureSpices: ["Dalle Khursani (Round Cherry Chili)", "Timur (Sichuan Pepper)", "Bastenga (Fermented Bamboo Shoot)", "Rai (Brown Mustard)"],
    stapleGrains: ["Buckwheat (Kuttu)", "Country Brown Rice", "Finger Millet"],
    representativeDish: {
      id: 'sk-phagshapa',
      name: 'Phagshapa',
      nativeName: 'Phagshapa',
      englishSubtitle: 'Sikkimese Braised Pork with Radish & Wild Greens',
      tagline: 'Tender strips of pork belly braised in rendered fat with winter radish, mountain chilies, fiddlehead ferns, and citrusy Sichuan pepper.',
      description: 'The quintessential winter dish of Sikkim, Phagshapa is an ancient, warming stew that showcases the Himalayan art of cooking meat in its own rendered fat. Tender strips of pork belly are gently stewed without any added cooking oil, allowing the rendered lard to meld with the clean sweetness of sliced winter radish (mooli) and rehydrated fiddlehead ferns (ningro) or tender spinach. Flavored with whole dried mountain red chilies and finished with crushed Sichuan pepper (timur), the resulting broth is pale, deeply savory, and marked by a distinctive citrusy, tongue-numbing warmth that cuts effortlessly through the rich pork belly.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Bhutia & Lepcha Himalayan Villages, Sikkim',
      culturalSignificance: 'The premier winter feast dish of Sikkim, showcasing zero-oil cooking where pork fat melts into sweet radish and wild fiddlehead ferns.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '40 min',
      ingredientSections: [
        {
          title: 'Pork Belly, Radish & Wild Ferns',
          items: [
            { item: 'Pork belly', amount: '500 g', note: 'cut into long thin strips' },
            { item: 'White winter radish (mooli)', amount: '200 g', note: 'peeled and cut into thick rounds' },
            { item: 'Dried fiddlehead ferns (ningro)', amount: '100 g', note: 'rehydrated, or fresh young spinach leaves' }
          ]
        },
        {
          title: 'Mountain Chilies & Timur Spice',
          items: [
            { item: 'Whole dried mountain red chilies', amount: '6', note: 'softened and chopped with seeds' },
            { item: 'Red onion', amount: '150 g', note: 'thinly sliced' },
            { item: 'Fresh ginger & garlic', amount: '20 g ginger juliennes, 5 cloves sliced garlic' },
            { item: 'Sichuan pepper (timur)', amount: '4 g', note: 'lightly cracked' },
            { item: 'Warm water & salt', amount: '300 ml water, 6 g salt' }
          ]
        }
      ],
      ingredients: [
        { item: 'Pork belly strips', amount: '500 g' },
        { item: 'White winter radish (mooli)', amount: '200 g' },
        { item: 'Dried fiddlehead ferns (ningro)', amount: '100 g' },
        { item: 'Dried mountain red chilies', amount: '6' },
        { item: 'Red onion, ginger, garlic', amount: '150 g onion, aromatics' },
        { item: 'Sichuan pepper (timur)', amount: '4 g' },
        { item: 'Warm water & salt', amount: '300 ml water, 6 g salt' }
      ],
      preparationSteps: [
        'If using dried fiddlehead ferns (ningro), place them in a bowl of warm water for 30 minutes until fully plump and rehydrated, then drain and gently squeeze out excess water. (If using fresh spinach, wash thoroughly and roughly chop). Soak the dried red chilies in warm water for 10 minutes to soften, drain, and chop roughly—retaining the seeds for authentic mountain heat.',
        'Set a heavy-bottomed wok, clay pot, or cast-iron skillet over medium-high heat without any added oil. Lay the pork belly strips in the pan. Cook for 5 to 6 minutes, turning occasionally; the pork fat will render out naturally, sizzling the meat until the edges turn pale golden-brown.',
        'Add the sliced onion, julienned ginger, and sliced garlic directly into the bubbling rendered pork fat. Stir-fry over medium flame for 4 to 5 minutes until the onions soften and turn translucent.',
        'Toss in the soaked, chopped dried red chilies. Stir well and cook for 2 minutes, allowing the chili oil to color the pork and aromatics.',
        'Slide the sliced radish rounds into the pot, stirring gently to ensure the radish is coated in the pork drippings. The radish will begin to sweat and absorb the savory pan juices.',
        'Pour in the 300 ml of warm water and season with salt. Bring to a rolling boil over high heat, then lower the flame to medium-low. Cover tightly with a lid and simmer for 20 to 25 minutes until the pork belly is fork-tender and the radish rounds are translucent yet hold their shape.',
        'Remove the lid and add the rehydrated fiddlehead ferns (or fresh spinach) along with the crushed Sichuan pepper (timur). Stir gently and simmer uncovered for another 4 to 5 minutes, allowing the greens to wilt into the broth and the timur to release its signature citrusy, numbing aroma. Taste and adjust salt.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Rehydrate Ferns & Chilies',
          instruction: 'Soak dried fiddlehead ferns (ningro) 30 min until plump; soften mountain chilies in warm water and chop with seeds.'
        },
        {
          stepNum: 2,
          title: 'Render the Pork Belly',
          instruction: 'Cook pork belly strips in dry pan 5–6 min until natural lard renders and meat turns pale golden-brown.'
        },
        {
          stepNum: 3,
          title: 'Sauté Aromatics in Lard',
          instruction: 'Stir-fry sliced onions, julienned ginger, garlic, and soaked chilies in rendered pork fat until translucent.'
        },
        {
          stepNum: 4,
          title: 'Braise with Radish',
          instruction: 'Toss radish rounds in savory fat, add 300 ml water and salt, cover and braise 20–25 min until fork-tender.'
        },
        {
          stepNum: 5,
          title: 'The Timur Finish',
          instruction: 'Add rehydrated fiddlehead ferns and cracked Sichuan pepper (timur); simmer 4–5 min to release citrusy numbing aroma.'
        }
      ],
      servingSuggestion: {
        text: 'Ladle hot into wide soup bowls alongside steaming hill rice, savoring the tender balance between melt-in-the-mouth pork belly, sweet radish, and the refreshing herbal tingle of timur.',
        imageUrl: '/images/sk/phagshapa.jpg'
      },
      vessel: 'Heavy Cast-Iron Wok or Earthen Pot',
      cookingFat: 'Zero-Oil (Rendered Pork Fat)',
      season: 'Peak Winter (Himalayan Chill)',
      flavorProfile: ["Rich Melting Pork Belly Broth", "Clean Sweet Braised Radish", "Citrusy Numbing Timur Pepper", "Earthy Wild Fiddlehead Greens"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/sk/phagshapa.jpg',
      phonetic: 'fahg-SHAH-pah'
    },
    dishes: [
      {
      id: 'sk-phagshapa',
      name: 'Phagshapa',
      nativeName: 'Phagshapa',
      englishSubtitle: 'Sikkimese Braised Pork with Radish & Wild Greens',
      tagline: 'Tender strips of pork belly braised in rendered fat with winter radish, mountain chilies, fiddlehead ferns, and citrusy Sichuan pepper.',
      description: 'The quintessential winter dish of Sikkim, Phagshapa is an ancient, warming stew that showcases the Himalayan art of cooking meat in its own rendered fat. Tender strips of pork belly are gently stewed without any added cooking oil, allowing the rendered lard to meld with the clean sweetness of sliced winter radish (mooli) and rehydrated fiddlehead ferns (ningro) or tender spinach. Flavored with whole dried mountain red chilies and finished with crushed Sichuan pepper (timur), the resulting broth is pale, deeply savory, and marked by a distinctive citrusy, tongue-numbing warmth that cuts effortlessly through the rich pork belly.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Bhutia & Lepcha Himalayan Villages, Sikkim',
      culturalSignificance: 'The premier winter feast dish of Sikkim, showcasing zero-oil cooking where pork fat melts into sweet radish and wild fiddlehead ferns.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '40 min',
      ingredientSections: [
        {
          title: 'Pork Belly, Radish & Wild Ferns',
          items: [
            { item: 'Pork belly', amount: '500 g', note: 'cut into long thin strips' },
            { item: 'White winter radish (mooli)', amount: '200 g', note: 'peeled and cut into thick rounds' },
            { item: 'Dried fiddlehead ferns (ningro)', amount: '100 g', note: 'rehydrated, or fresh young spinach leaves' }
          ]
        },
        {
          title: 'Mountain Chilies & Timur Spice',
          items: [
            { item: 'Whole dried mountain red chilies', amount: '6', note: 'softened and chopped with seeds' },
            { item: 'Red onion', amount: '150 g', note: 'thinly sliced' },
            { item: 'Fresh ginger & garlic', amount: '20 g ginger juliennes, 5 cloves sliced garlic' },
            { item: 'Sichuan pepper (timur)', amount: '4 g', note: 'lightly cracked' },
            { item: 'Warm water & salt', amount: '300 ml water, 6 g salt' }
          ]
        }
      ],
      ingredients: [
        { item: 'Pork belly strips', amount: '500 g' },
        { item: 'White winter radish (mooli)', amount: '200 g' },
        { item: 'Dried fiddlehead ferns (ningro)', amount: '100 g' },
        { item: 'Dried mountain red chilies', amount: '6' },
        { item: 'Red onion, ginger, garlic', amount: '150 g onion, aromatics' },
        { item: 'Sichuan pepper (timur)', amount: '4 g' },
        { item: 'Warm water & salt', amount: '300 ml water, 6 g salt' }
      ],
      preparationSteps: [
        'If using dried fiddlehead ferns (ningro), place them in a bowl of warm water for 30 minutes until fully plump and rehydrated, then drain and gently squeeze out excess water. (If using fresh spinach, wash thoroughly and roughly chop). Soak the dried red chilies in warm water for 10 minutes to soften, drain, and chop roughly—retaining the seeds for authentic mountain heat.',
        'Set a heavy-bottomed wok, clay pot, or cast-iron skillet over medium-high heat without any added oil. Lay the pork belly strips in the pan. Cook for 5 to 6 minutes, turning occasionally; the pork fat will render out naturally, sizzling the meat until the edges turn pale golden-brown.',
        'Add the sliced onion, julienned ginger, and sliced garlic directly into the bubbling rendered pork fat. Stir-fry over medium flame for 4 to 5 minutes until the onions soften and turn translucent.',
        'Toss in the soaked, chopped dried red chilies. Stir well and cook for 2 minutes, allowing the chili oil to color the pork and aromatics.',
        'Slide the sliced radish rounds into the pot, stirring gently to ensure the radish is coated in the pork drippings. The radish will begin to sweat and absorb the savory pan juices.',
        'Pour in the 300 ml of warm water and season with salt. Bring to a rolling boil over high heat, then lower the flame to medium-low. Cover tightly with a lid and simmer for 20 to 25 minutes until the pork belly is fork-tender and the radish rounds are translucent yet hold their shape.',
        'Remove the lid and add the rehydrated fiddlehead ferns (or fresh spinach) along with the crushed Sichuan pepper (timur). Stir gently and simmer uncovered for another 4 to 5 minutes, allowing the greens to wilt into the broth and the timur to release its signature citrusy, numbing aroma. Taste and adjust salt.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Rehydrate Ferns & Chilies',
          instruction: 'Soak dried fiddlehead ferns (ningro) 30 min until plump; soften mountain chilies in warm water and chop with seeds.'
        },
        {
          stepNum: 2,
          title: 'Render the Pork Belly',
          instruction: 'Cook pork belly strips in dry pan 5–6 min until natural lard renders and meat turns pale golden-brown.'
        },
        {
          stepNum: 3,
          title: 'Sauté Aromatics in Lard',
          instruction: 'Stir-fry sliced onions, julienned ginger, garlic, and soaked chilies in rendered pork fat until translucent.'
        },
        {
          stepNum: 4,
          title: 'Braise with Radish',
          instruction: 'Toss radish rounds in savory fat, add 300 ml water and salt, cover and braise 20–25 min until fork-tender.'
        },
        {
          stepNum: 5,
          title: 'The Timur Finish',
          instruction: 'Add rehydrated fiddlehead ferns and cracked Sichuan pepper (timur); simmer 4–5 min to release citrusy numbing aroma.'
        }
      ],
      servingSuggestion: {
        text: 'Ladle hot into wide soup bowls alongside steaming hill rice, savoring the tender balance between melt-in-the-mouth pork belly, sweet radish, and the refreshing herbal tingle of timur.',
        imageUrl: '/images/sk/phagshapa.jpg'
      },
      vessel: 'Heavy Cast-Iron Wok or Earthen Pot',
      cookingFat: 'Zero-Oil (Rendered Pork Fat)',
      season: 'Peak Winter (Himalayan Chill)',
      flavorProfile: ["Rich Melting Pork Belly Broth", "Clean Sweet Braised Radish", "Citrusy Numbing Timur Pepper", "Earthy Wild Fiddlehead Greens"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/sk/phagshapa.jpg',
      phonetic: 'fahg-SHAH-pah'
      },
      {
      id: 'sk-awoshi-kipiki',
      name: 'Naga-Style Pork with Bamboo Shoots (Awoshi Kipiki / Vathsa)',
      nativeName: 'Awoshi Kipiki / Vathsa',
      englishSubtitle: 'Himalayan Pork Braised with Fermented Bamboo Shoots',
      tagline: 'Succulent pork pressure-tenderized, pan-crisped in mustard oil, and braised in tart fermented bamboo shoots and fiery chilies.',
      description: 'A celebrated cornerstone of everyday Himalayan hearth cooking, this preparation brings together two pillars of indigenous food culture: succulent country pork and fermented bamboo shoot (bastenga / raja bamboo shoot). Foregoing powdered garam masalas and elaborate onion-tomato bases, authentic cooking lets the natural richness of the meat shine against the tart, umami-rich funk of the bamboo shoots. First pressure-rendered to achieve tender bite, the pork is pan-browned in mustard oil with minced ginger, garlic, and fiery chilies before braising down into a semi-dry, glistening fry that coats every piece in savory pungency.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Eastern Himalayan Foothills & Border Kitchens',
      culturalSignificance: 'A quintessential tribal staple uniting mountain communities across Sikkim and the Northeast hills.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '30 min',
      ingredientSections: [
        {
          title: 'Succulent Pork & Fermented Shoots',
          items: [
            { item: 'Fresh country pork (belly or shoulder)', amount: '250 g', note: 'cut into bite-sized cubes' },
            { item: 'Fermented or tender bamboo shoots', amount: '1/2 cup', note: 'finely sliced or crushed' }
          ]
        },
        {
          title: 'Aromatics, Chilies & Mustard Oil',
          items: [
            { item: 'Fresh green chilies', amount: '4–5', note: 'roughly chopped' },
            { item: 'Red chili powder', amount: '1 tsp', note: 'fiery mountain chili or Kashmiri for color' },
            { item: 'Ginger and garlic', amount: '1-inch knob ginger, 3–4 cloves garlic, minced' },
            { item: 'Pure mustard oil', amount: '2–3 tbsp' },
            { item: 'Hot water & salt', amount: '1/2 cup hot water, salt to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh pork belly / shoulder', amount: '250 g' },
        { item: 'Fermented bamboo shoots', amount: '1/2 cup' },
        { item: 'Fresh green chilies', amount: '4–5' },
        { item: 'Minced ginger & garlic', amount: '1-inch ginger, 3–4 cloves garlic' },
        { item: 'Red chili powder', amount: '1 tsp' },
        { item: 'Mustard oil', amount: '2–3 tbsp' },
        { item: 'Hot water & salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Wash the pork pieces thoroughly and pat dry. Drain and rinse the bamboo shoots if using brine-packed varieties. Finely mince the ginger and garlic, and roughly chop the fresh green chilies.',
        'Place the pork cubes into a pressure cooker with just enough water to submerge them slightly. Pressure-cook over medium flame for 3 to 4 whistles until the meat begins to yield. Depressurize naturally, drain excess cooking liquid, and set parboiled pork aside.',
        'Heat the mustard oil in a heavy kadai or cast-iron skillet until lightly smoking. Add the parboiled pork pieces and fry over medium heat for 3 to 4 minutes until the edges turn golden-brown and crisp, rendering out additional savory fat.',
        'Add the minced ginger and garlic directly to the pan. Sauté alongside the pork for 3 to 4 minutes until the raw allium aroma mellows into a rich, roasted perfume.',
        'Stir in the red chili powder and chopped green chilies, tossing vigorously for 1 minute to infuse the chili oil evenly into the meat cubes.',
        'Add the prepared bamboo shoots, hot water, and salt. Stir well to loosen any caramelized bits stuck to the bottom of the pan. Cover with a tight lid and let it braise over low-medium flame for 3 to 4 minutes until the liquid reduces completely and the sharp, tangy bamboo shoot clings tightly to the glistening meat.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Pre-Cook the Pork',
          instruction: 'Pressure-cook pork cubes for 3–4 whistles until tender; drain cooking liquid and set meat aside.'
        },
        {
          stepNum: 2,
          title: 'Pan-Brown in Mustard Oil',
          instruction: 'Crisp parboiled pork in smoking mustard oil 3–4 min until edges turn golden-brown and savory fat renders.'
        },
        {
          stepNum: 3,
          title: 'Bloom Ginger & Garlic',
          instruction: 'Add minced aromatics to the bubbling pan, sautéing until roasted perfume emerges.'
        },
        {
          stepNum: 4,
          title: 'Infuse Chili Heat',
          instruction: 'Toss in chili powder and chopped green chilies vigorously for 1 minute.'
        },
        {
          stepNum: 5,
          title: 'Braise with Bamboo Shoot',
          instruction: 'Add bamboo shoots and 1/2 cup hot water, cover, and braise until sauce reduces to a glistening tangy coat.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot alongside a mound of steaming country brown rice or sticky hill rice, accompanied by boiled indigenous greens.',
        imageUrl: '/images/sk/naga_style_pork.jpg'
      },
      vessel: 'Heavy Cast-Iron Skillet or Kadai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil & Rendered Pork Fat',
      season: 'All Seasons / Mountain Hearth Essential',
      flavorProfile: ["Tart Fermented Bamboo Shoot Funk", "Succulent Crispy Pork Belly", "Sharp Mustard Oil Pungency", "Direct Fiery Green Chili Heat"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/sk/naga_style_pork.jpg',
      phonetic: 'ah-WOH-shee kee-PEE-kee'
      },
      {
      id: 'sk-no-oil-chicken',
      name: 'No-Oil Chicken with Bamboo Shoots & Winter Vegetables',
      nativeName: 'No-Oil Chicken Stew',
      englishSubtitle: 'Clear Himalayan Water-Braised Poultry Broth',
      tagline: 'Delicate boneless chicken breast braised oil-free in its own juices with fermented bamboo shoot, sweet winter vegetables, and rice-flour liaison.',
      description: 'Drawing inspiration from the oil-free, water-braised stews common across Northeast India, this light poultry dish proves that deep flavor does not require heavy fats. Boneless chicken breast is cooked entirely without added cooking oil, braising gently in its own natural juices alongside aromatic ginger, garlic, sliced tomatoes, carrots, and potatoes. Fermented bamboo shoots cut through the mild sweetness of the root vegetables with their signature earthy tang, while a light slurry of rice flour ties the clear broth into a velvety, comforting stew that remains exceptionally clean on the palate.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Highland Kitchens of Sikkim & Eastern Himalayas',
      culturalSignificance: 'A health-restoring clear stew cooked without a drop of oil, relying on pure steam-braising and fermented bamboo shoots.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '25 min',
      ingredientSections: [
        {
          title: 'Tender Poultry & Winter Vegetables',
          items: [
            { item: 'Boneless chicken breast', amount: '1', note: 'cut into bite-sized cubes' },
            { item: 'Fermented or tender bamboo shoots', amount: '2–3 tbsp', note: 'sliced' },
            { item: 'Medium potato & carrot', amount: '1 each', note: 'cut into slender batons' }
          ]
        },
        {
          title: 'Oil-Free Aromatics & Rice Slurry',
          items: [
            { item: 'Medium tomato & onion', amount: '1 each', note: 'thinly sliced' },
            { item: 'Fresh green chilies', amount: '2', note: 'slit lengthwise' },
            { item: 'Ginger and garlic paste', amount: '1 tbsp each' },
            { item: 'Rice flour (chawal ka atta)', amount: '1 tbsp', note: 'slurry with 2 tbsp water' },
            { item: 'Hot water & salt', amount: '1 cup hot water, salt to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Chicken breast cubes', amount: '1 breast' },
        { item: 'Fermented bamboo shoots', amount: '2–3 tbsp' },
        { item: 'Potato and carrot batons', amount: '1 each' },
        { item: 'Tomato and onion', amount: '1 each' },
        { item: 'Green chilies', amount: '2' },
        { item: 'Ginger and garlic paste', amount: '1 tbsp each' },
        { item: 'Rice flour (for liaison)', amount: '1 tbsp' },
        { item: 'Hot water & salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Wash the chicken breast cubes and drain thoroughly. Peel, wash, and cut the potato and carrot into uniform finger-length batons. Slice the onions and tomatoes thinly, and slit the green chilies.',
        'Heat a wide, thick-bottomed non-stick pan or skillet over low-medium heat without adding any oil. Add half of the ginger-garlic paste (1/2 tbsp each) and a splash of water, stirring for 1 minute until fragrant. Add the sliced tomatoes and cook for another minute until they soften and release their natural red juices.',
        'Add the sliced onions, chicken cubes, slit green chilies, and potato batons. Sauté continuously for 2 minutes over medium flame; the chicken will sear lightly on the surface as the onions turn translucent and sweat.',
        'Cover the pan with a tight lid and let the mixture steam in its own moisture for 2 minutes. Uncover, add the carrot batons, salt, and remaining half of the ginger and garlic paste. Stir well, cover again, and cook for another 2 minutes.',
        'Pour in 1 cup of hot water and add the bamboo shoots. Stir well, bring to a gentle rolling boil, cover with the lid, and simmer on medium-low flame for 3 to 5 minutes until the potatoes and carrots are tender-soft and the chicken is cooked through.',
        'Whisk the rice flour with 2 tablespoons of room-temperature water in a small bowl to create a smooth slurry. Pour the slurry into the simmering stew in a steady stream, stirring gently for 1 minute until the broth transforms into a glossy, lightly bound, comforting gravy.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Prep Meat and Root Batons',
          instruction: 'Slice chicken breast, cut potato and carrot into matchstick batons, and prep aromatics.'
        },
        {
          stepNum: 2,
          title: 'Water-Sweat Aromatics',
          instruction: 'Cook ginger-garlic paste and tomatoes with a splash of water without oil until tomatoes soften.'
        },
        {
          stepNum: 3,
          title: 'Toss Chicken and Potatoes',
          instruction: 'Add onions, chicken, chilies, and potatoes; sauté 2 min until chicken sears lightly.'
        },
        {
          stepNum: 4,
          title: 'Steam-Braise in Natural Juices',
          instruction: 'Cover pan to steam in natural poultry juices, then add carrot batons, remaining aromatics, and salt.'
        },
        {
          stepNum: 5,
          title: 'Simmer with Bamboo Shoots',
          instruction: 'Add 1 cup hot water and bamboo shoots; simmer covered 3–5 min until root vegetables are fork-tender.'
        },
        {
          stepNum: 6,
          title: 'Thicken with Rice Slurry',
          instruction: 'Whisk in rice-flour slurry; simmer 1 min until broth turns glossy, bound, and comforting.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm in deep bowls over plain boiled white rice, relishing the clean, citrusy, fermented notes of the bamboo shoots.',
        imageUrl: '/images/sk/no_oil_chicken.jpg'
      },
      vessel: 'Wide Heavy Non-Stick Skillet or Clay Pan',
      cookingFat: 'Zero-Oil (Steam-Braised in Natural Juices)',
      season: 'Winter & Convalescence (Clean Eating)',
      flavorProfile: ["Clean Pure Chicken Broth", "Tart Fermented Bamboo Tang", "Sweet Carrot-Potato Batons", "Velvety Rice-Bound Texture"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/sk/no_oil_chicken.jpg',
      phonetic: 'NO-OYL CHIK-en'
      },
      {
      id: 'sk-kancha-bamboo-achar',
      name: 'Kancha Bamboo Shoot Achar',
      nativeName: 'काँचा तामाको अचार',
      englishSubtitle: 'Pickled Tender Bamboo Shoots',
      tagline: 'Crunchy tender bamboo shoots cured in salt and vinegar, tossed in crimson pickle spices, split mustard dal, and groundnut oil.',
      description: 'A pungent, lip-smacking condiment that pairs effortlessly with dal-rice and parathas, this pickled bamboo shoot preparation bridges tribal mountain foraging with traditional Indian pickling techniques. Fresh, tender young bamboo shoots are first scrubbed of their raw bitterness through an initial cure of turmeric, vinegar, and salt, which draws out excess vegetative water. Once drained, the crunchy ivory slivers are tossed in coarse pickle masala, Kashmiri chili, and a cool, crackling temper of groundnut oil, mustard dal, and fragrant asafoetida. Balanced by a final hit of fresh lemon juice, it offers a crunchy, sour-spicy bite built for long-term storage.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Sikkimese Mountain Pantries & Homesteads',
      culturalSignificance: 'The quintessential pantry preserve of Sikkim, ensuring year-round access to forest bamboo goodness during freezing snowbound months.',
      servesCount: 'Yield: 1 medium glass jar (approx. 500 g)',
      approxPrepTime: '30 min; 24-hr salt-vinegar cure',
      ingredientSections: [
        {
          title: 'Cured Bamboo Shoots',
          items: [
            { item: 'Tender bamboo shoots', amount: '300 g', note: 'peeled, washed, cut into matchsticks' },
            { item: 'White vinegar & salt', amount: '2 tbsp vinegar, 1 tsp salt', note: 'for 24-hr cure' },
            { item: 'Turmeric powder (haldi)', amount: '1 tsp' }
          ]
        },
        {
          title: 'Pickle Masala & Mustard Temper',
          items: [
            { item: 'Ready pickle masala (achaari masala)', amount: '50 g' },
            { item: 'Kashmiri red chili powder', amount: '50 g', note: 'for color and warmth' },
            { item: 'Cold-pressed groundnut oil or mustard oil', amount: '200 g' },
            { item: 'Large lemons', amount: '2', note: 'freshly juiced' },
            { item: 'Split mustard seeds / mustard dal (rai ki dal)', amount: '1 tbsp' },
            { item: 'Asafoetida (hing)', amount: '2 tsp' },
            { item: 'Salt to taste', amount: '1 tbsp' }
          ]
        }
      ],
      ingredients: [
        { item: 'Tender bamboo shoot matchsticks', amount: '300 g' },
        { item: 'White vinegar', amount: '2 tbsp' },
        { item: 'Achaari pickle masala', amount: '50 g' },
        { item: 'Kashmiri red chili powder', amount: '50 g' },
        { item: 'Groundnut or mustard oil', amount: '200 g' },
        { item: 'Fresh lemon juice', amount: '2 lemons' },
        { item: 'Split mustard dal (rai ki dal)', amount: '1 tbsp' },
        { item: 'Asafoetida (hing)', amount: '2 tsp' },
        { item: 'Turmeric & Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Place the cleaned, chopped bamboo shoots into a non-reactive ceramic or glass mixing bowl. Add the turmeric powder, vinegar, and 1 teaspoon of salt. Toss thoroughly to coat every piece. Cover loosely and allow the shoots to marinate at room temperature for a full 24 hours to draw out moisture and cure the bamboo.',
        'On the second day, drain the bamboo shoots thoroughly through a colander. Spread them out on double layers of absorbent kitchen paper or a clean cotton towel, patting them gently to remove all surface moisture. (Ensuring the shoots are thoroughly dry is critical for shelf-life).',
        'Transfer the dried bamboo shoots back into a dry mixing bowl. Add the readymade pickle masala, Kashmiri red chili powder, 1 teaspoon of asafoetida, and remaining salt. Toss with a clean, dry spoon until every bamboo sliver is heavily coated in the dry crimson spices.',
        'Heat the groundnut oil in a saucepan over medium heat until hot. Toss in the split mustard dal and let it crackle and turn pale golden for a few seconds. Remove the pan from the flame immediately and allow the oil to cool for 2 to 3 minutes. Stir in the remaining teaspoon of asafoetida and a pinch of chili powder to infuse the oil with a warm, nutty aroma.',
        'Allow the spiced oil to cool down completely to room temperature. Pour the cooled oil and freshly squeezed lemon juice directly over the spiced bamboo shoots. Mix gently until glossy and evenly coated. Transfer into a sterilized, dry, airtight glass jar.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'The 24-Hour Cure',
          instruction: 'Toss bamboo matchsticks with turmeric, vinegar, and salt; marinate covered 24 hours to draw out moisture.'
        },
        {
          stepNum: 2,
          title: 'Drain and Dry',
          instruction: 'Drain thoroughly and pat completely dry on cotton towels (critical for mold prevention and shelf life).'
        },
        {
          stepNum: 3,
          title: 'Coat in Crimson Spices',
          instruction: 'Toss dry shoots with achaari masala, Kashmiri chili powder, hing, and salt until heavily coated.'
        },
        {
          stepNum: 4,
          title: 'Prepare Mustard Dal Temper',
          instruction: 'Sizzle split mustard dal in hot groundnut oil until pale golden; cool slightly and stir in hing.'
        },
        {
          stepNum: 5,
          title: 'Cool, Combine & Bottle',
          instruction: 'Pour cooled tempered oil and fresh lemon juice over shoots, mix glossy, and transfer into sterilized glass jar.'
        }
      ],
      servingSuggestion: {
        text: 'Let the jar sit in a warm, dry corner (or in mild sunlight) for 2 to 3 days to allow the spices and lemon juice to penetrate the bamboo shoots before serving alongside parathas, khichdi, or steamed rice.',
        imageUrl: '/images/sk/kancha_bamboo_shoot_achar.jpg'
      },
      vessel: 'Sterilized Glass Jar (Mirtikana)',
      cookingFat: 'Cold-Pressed Groundnut Oil or Mustard Oil',
      season: 'Monsoon to Autumn Pickling Season',
      flavorProfile: ["Pungent Crunchy Bamboo Matchsticks", "Sour-Tangy Vinegar and Lemon Bite", "Aromatic Mustard Dal Crackle", "Warm Fragrant Asafoetida"],
      dietary: 'Vegan',
      imageUrl: '/images/sk/kancha_bamboo_shoot_achar.jpg',
      phonetic: 'KAHN-chah TAH-mah-ko ah-CHAHR'
      },
      {
      id: 'sk-marcha-ko-achar',
      name: 'Marcha Ko Achar',
      nativeName: 'डल्ले खोर्सानीको अचार',
      englishSubtitle: 'Sikkimese Spiced Round Chili Pickle',
      tagline: 'Iconic fiery round Dalle Khursani cherry peppers quick-cooked in mustard oil with browned seeds, onions, and jammy tomatoes.',
      description: 'A fiery, indispensable condiment resting on dining tables across Sikkim and the Darjeeling hills, Marcha Ko Achar—traditionally made with iconic Dalle Khursani (Sikkimese round cherry peppers) or seasonal pickled greens/vegetables—is celebrated for its piercing heat, herbal undertones, and vibrant tang. Cooked lightly in pure mustard oil or clarified ghee tempered with whole mustard seeds, the round chilies soften alongside sweet caramelized onions and jammy tomatoes, creating a thick, coarsely crushed relish that instantly wakes up the palate.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Sikkimese Hill Tables & Darjeeling Ridge Cafes',
      culturalSignificance: 'The fiery symbol of Sikkimese hospitality, resting in glass jars on every dining table to accompany steaming momos and thukpa.',
      servesCount: 'Yield: 6–8 table condiment portions',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Iconic Dalle Khursani Chilies',
          items: [
            { item: 'Fresh Dalle Khursani / round cherry chilies', amount: '300 g', note: 'washed, patted dry, stems trimmed' }
          ]
        },
        {
          title: 'Alliums, Tomato & Mustard Sizzle',
          items: [
            { item: 'Medium red onion', amount: '1', note: 'finely chopped' },
            { item: 'Medium ripe tomato', amount: '1', note: 'finely chopped' },
            { item: 'Pure cold-pressed mustard oil or ghee', amount: '30 ml' },
            { item: 'Whole brown mustard seeds (rai / sarson)', amount: '5 g' },
            { item: 'Turmeric powder (haldi)', amount: '3 g' },
            { item: 'Red chili powder', amount: '5 g', note: 'optional, for color' },
            { item: 'Fresh coriander leaves', amount: '15 g', note: 'finely chopped' },
            { item: 'Salt to taste', amount: '8 g' }
          ]
        }
      ],
      ingredients: [
        { item: 'Dalle Khursani cherry chilies', amount: '300 g' },
        { item: 'Red onion & ripe tomato', amount: '1 each' },
        { item: 'Brown mustard seeds (rai)', amount: '5 g' },
        { item: 'Mustard oil or ghee', amount: '30 ml' },
        { item: 'Turmeric & red chili powder', amount: '3 g turmeric, 5 g chili' },
        { item: 'Fresh coriander leaves', amount: '15 g' },
        { item: 'Salt to taste', amount: '8 g' }
      ],
      preparationSteps: [
        'Wash the round chilies or vegetables thoroughly and pat them completely dry with a clean cloth. Trim the stems, leaving the fiery pods whole or halved as preferred. Finely chop the onion and tomato.',
        'Heat the mustard oil or ghee in a heavy skillet or kadai over medium flame until shimmering. Add the whole mustard seeds and allow them to crackle and pop vigorously.',
        'Slide the chopped onions into the spluttering oil. Sauté over medium heat for 3 to 4 minutes until they soften, turn translucent, and take on faint golden edges.',
        'Add the chopped tomatoes to the pan. Cook down for 3 minutes, stirring occasionally, until they break down into a soft, saucy base.',
        'Add the turmeric powder, red chili powder, and salt. Sauté the masala over low heat for 1 minute until the oil begins to separate along the edges.',
        'Add the whole cherry chilies (or prepped vegetable) into the pan, tossing well to coat with the glossy masala. Cover with a tight lid, reduce the flame to low, and cook for 6 to 8 minutes, stirring occasionally, until the chili skins blister, soften, and absorb the spiced sauce.',
        'Remove the lid, scatter freshly chopped coriander leaves over the top, and give it a final gentle mix.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Dry and Trim Dalle Pods',
          instruction: 'Wash round cherry chilies thoroughly and pat completely dry; trim woody stems leaving fiery pods intact.'
        },
        {
          stepNum: 2,
          title: 'Sizzle Brown Mustard Seeds',
          instruction: 'Heat mustard oil or ghee until shimmering; pop whole brown mustard seeds briskly.'
        },
        {
          stepNum: 3,
          title: 'Caramelize Onions & Tomatoes',
          instruction: 'Sauté chopped red onions until translucent golden, then cook down tomatoes into a jammy sauce.'
        },
        {
          stepNum: 4,
          title: 'Simmer Whole Chilies',
          instruction: 'Toss whole Dalle Khursani in masala, cover, and braise on low 6–8 min until chili skins blister and soften.'
        },
        {
          stepNum: 5,
          title: 'Coriander Finish',
          instruction: 'Scatter fresh chopped coriander and give a final gentle toss.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm or at room temperature in small bowls as a spicy companion to Sikkimese Momo, warm Dhindo, or a simple meal of Dal-Bhaat.',
        imageUrl: '/images/sk/marcha_ko_achar.jpg'
      },
      vessel: 'Heavy Bottomed Skillet or Kadhai',
      cookingFat: 'Pure Cold-Pressed Mustard Oil or Clarified Ghee',
      season: 'All Seasons / Iconic Himalayan Table Pickle',
      flavorProfile: ["Explosive Dalle Khursani Cherry Chili Heat", "Jammy Sweet Tomato Relish", "Toasted Brown Mustard Seed Pop", "Herbaceous Fresh Coriander"],
      dietary: 'Vegan',
      imageUrl: '/images/sk/marcha_ko_achar.jpg',
      phonetic: 'MAHR-chah koh ah-CHAHR'
      }
    ]
  },
nl: {
    id: 'nl',
    name: 'Nagaland',
    nativeName: 'Nagaland',
    capital: 'Kohima',
    region: 'North-East',
    historicalEra: 'Naga Hill Tribes & Ancient Morung Traditions',
    culinaryPhilosophy: 'Slow smoke-curing over hearth woodfires, naturally fermented soybeans (Axone/Akhuni), taro-leaf cakes (Anishi), bamboo shoots, and fiery Raja Mircha. Pure tribal gastronomy with zero artificial oils or refined powders.',
    heirloomVessels: ["Earthen Hearth Pots", "Smoked Bamboo Skewers", "Wood Carved Platters", "Tathu Long Stone Mortar"],
    signatureSpices: ["Raja Mircha (King Chilli)", "Axone (Fermented Soybean)", "Anishi (Taro Leaf Cakes)", "Fermented Bamboo Shoot", "Sichuan Wild Peppercorns"],
    stapleGrains: ["Naga Hill Sticky Rice", "Red Mountain Rice", "Millet"],
    representativeDish: {
      id: 'nl-axone-pork',
      name: 'Axone Pork',
      nativeName: 'Axone / Akhuni',
      englishSubtitle: 'Sümi Smoked Pork with Fermented Soybean',
      tagline: 'Tender smoke-dried pork simmered with pungent banana-leaf fermented soybeans, garlic and fiery king chilli.',
      description: 'Few ingredients are as loved, and as misunderstood, as axone (akhuni), the fermented soybean of the Sümi (Sema) Nagas. Its name is commonly explained as a joining of Sümi words for “smell” and “strong”, and the smell is exactly the point: it is the deep, savoury, almost meaty backbone of Naga cooking. Simmered with smoked pork, onion, ginger and fiery chillies, it becomes one of the most iconic plates of the Naga kitchen.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Sümi (Sema) Naga Villages, Satakha & Zunheboto',
      culturalSignificance: 'Sümi elders tell more than one tale of how axone was found. In the version one Ao storyteller recalls her grandmother telling at bedtime, an orphan girl named Kujunakali lived with a stingy aunt and uncle who fed her half-cooked soybeans and spoiled vegetables. One hungry evening she crept into the haystack shed to fetch soybeans she had secretly hidden weeks earlier, and found them transformed into something tangy, tender and deeply aromatic. The Sümi elders took note and named her discovery axone. A second tale, recorded in Sümi country (Satakha–Vishepu) in 2008, has two sisters leaving their leftover field lunch of soybeans under a roof; three days later the beans are mouldy, yet smell and taste so good that the elder sister declares they should always eat them that way. Axone later carried its own politics too: in 2007 a Delhi safety handbook for Northeast students cautioned against cooking akhuni, a moment the anthropologist Dolly Kikon has written about as a clash over smell and belonging.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '45 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'smoked pork belly', amount: '400 g', note: 'cut into 1-inch pieces' },
            { item: 'axone (akhuni)', amount: '3 tbsp', note: 'fermented soybean cake or paste' },
            { item: 'onion', amount: '1 medium', note: 'sliced' },
            { item: 'ginger and 5 cloves garlic', amount: '1-inch knob', note: 'coarsely pounded' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'green chilies', amount: '3–4', note: 'or 1 raja mircha (Naga king chili) for the brave' },
            { item: 'fermented or fresh bamboo shoot', amount: '¼ cup', note: 'sliced (optional)' },
            { item: 'water', amount: '2½ cups' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'smoked pork belly', amount: '400 g', note: 'cut into 1-inch pieces' },
        { item: 'axone (akhuni)', amount: '3 tbsp', note: 'fermented soybean cake or paste' },
        { item: 'onion', amount: '1 medium', note: 'sliced' },
        { item: 'ginger and 5 cloves garlic', amount: '1-inch knob', note: 'coarsely pounded' },
        { item: 'green chilies', amount: '3–4', note: 'or 1 raja mircha (Naga king chili) for the brave' },
        { item: 'fermented or fresh bamboo shoot', amount: '¼ cup', note: 'sliced (optional)' },
        { item: 'water', amount: '2½ cups' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Soften the Pork: Rinse the smoked pork and boil it in the water for 20–25 minutes until tender. Keep the stock.',
        'Pound the Aromatics: In a mortar, pound the ginger, garlic and chilies into a coarse paste.',
        'Wake the Axone: If using a leaf-wrapped cake, toast it briefly over a flame or in a dry pan for 1–2 minutes until the aroma rises, then crush it roughly.',
        'Simmer Together: Add the pounded paste, axone, sliced onion and bamboo shoot (if using) to the pork with about 1 cup of the reserved stock. Cook uncovered over medium-low heat for 10–12 minutes until the gravy thickens and clings to the meat.',
        'Rest: Season with salt, cover and rest for 5 minutes.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Soften the Pork',
          instruction: 'Rinse the smoked pork and boil it in the water for 20–25 minutes until tender. Keep the stock.'
        },
        {
          stepNum: 2,
          title: 'Pound the Aromatics',
          instruction: 'In a mortar, pound the ginger, garlic and chilies into a coarse paste.'
        },
        {
          stepNum: 3,
          title: 'Wake the Axone',
          instruction: 'If using a leaf-wrapped cake, toast it briefly over a flame or in a dry pan for 1–2 minutes until the aroma rises, then crush it roughly.'
        },
        {
          stepNum: 4,
          title: 'Simmer Together',
          instruction: 'Add the pounded paste, axone, sliced onion and bamboo shoot (if using) to the pork with about 1 cup of the reserved stock. Cook uncovered over medium-low heat for 10–12 minutes until the gravy thickens and clings to the meat.'
        },
        {
          stepNum: 5,
          title: 'Rest',
          instruction: 'Season with salt, cover and rest for 5 minutes.'
        }
      ],
      servingSuggestion: {
        text: 'Serve with plenty of steamed rice and boiled greens, the way a Naga meal is traditionally built: rice, one meat dish, something boiled, and a fiery chutney.',
        imageUrl: '/images/nl/axone_pork.jpg'
      },
      vessel: 'Clay Hearth Pot',
      cookingFat: 'Zero-Oil (Pork Fat Rendered)',
      season: 'All Seasons / Hearth Gatherings',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/nl/axone_pork.jpg',
      phonetic: 'AH-kho-nee PORK'
    },
    dishes: [
      {
      id: 'nl-axone-pork',
      name: 'Axone Pork',
      nativeName: 'Axone / Akhuni',
      englishSubtitle: 'Sümi Smoked Pork with Fermented Soybean',
      tagline: 'Tender smoke-dried pork simmered with pungent banana-leaf fermented soybeans, garlic and fiery king chilli.',
      description: 'Few ingredients are as loved, and as misunderstood, as axone (akhuni), the fermented soybean of the Sümi (Sema) Nagas. Its name is commonly explained as a joining of Sümi words for “smell” and “strong”, and the smell is exactly the point: it is the deep, savoury, almost meaty backbone of Naga cooking. Simmered with smoked pork, onion, ginger and fiery chillies, it becomes one of the most iconic plates of the Naga kitchen.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Sümi (Sema) Naga Villages, Satakha & Zunheboto',
      culturalSignificance: 'Sümi elders tell more than one tale of how axone was found. In the version one Ao storyteller recalls her grandmother telling at bedtime, an orphan girl named Kujunakali lived with a stingy aunt and uncle who fed her half-cooked soybeans and spoiled vegetables. One hungry evening she crept into the haystack shed to fetch soybeans she had secretly hidden weeks earlier, and found them transformed into something tangy, tender and deeply aromatic. The Sümi elders took note and named her discovery axone. A second tale, recorded in Sümi country (Satakha–Vishepu) in 2008, has two sisters leaving their leftover field lunch of soybeans under a roof; three days later the beans are mouldy, yet smell and taste so good that the elder sister declares they should always eat them that way. Axone later carried its own politics too: in 2007 a Delhi safety handbook for Northeast students cautioned against cooking akhuni, a moment the anthropologist Dolly Kikon has written about as a clash over smell and belonging.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '45 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'smoked pork belly', amount: '400 g', note: 'cut into 1-inch pieces' },
            { item: 'axone (akhuni)', amount: '3 tbsp', note: 'fermented soybean cake or paste' },
            { item: 'onion', amount: '1 medium', note: 'sliced' },
            { item: 'ginger and 5 cloves garlic', amount: '1-inch knob', note: 'coarsely pounded' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'green chilies', amount: '3–4', note: 'or 1 raja mircha (Naga king chili) for the brave' },
            { item: 'fermented or fresh bamboo shoot', amount: '¼ cup', note: 'sliced (optional)' },
            { item: 'water', amount: '2½ cups' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'smoked pork belly', amount: '400 g', note: 'cut into 1-inch pieces' },
        { item: 'axone (akhuni)', amount: '3 tbsp', note: 'fermented soybean cake or paste' },
        { item: 'onion', amount: '1 medium', note: 'sliced' },
        { item: 'ginger and 5 cloves garlic', amount: '1-inch knob', note: 'coarsely pounded' },
        { item: 'green chilies', amount: '3–4', note: 'or 1 raja mircha (Naga king chili) for the brave' },
        { item: 'fermented or fresh bamboo shoot', amount: '¼ cup', note: 'sliced (optional)' },
        { item: 'water', amount: '2½ cups' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Soften the Pork: Rinse the smoked pork and boil it in the water for 20–25 minutes until tender. Keep the stock.',
        'Pound the Aromatics: In a mortar, pound the ginger, garlic and chilies into a coarse paste.',
        'Wake the Axone: If using a leaf-wrapped cake, toast it briefly over a flame or in a dry pan for 1–2 minutes until the aroma rises, then crush it roughly.',
        'Simmer Together: Add the pounded paste, axone, sliced onion and bamboo shoot (if using) to the pork with about 1 cup of the reserved stock. Cook uncovered over medium-low heat for 10–12 minutes until the gravy thickens and clings to the meat.',
        'Rest: Season with salt, cover and rest for 5 minutes.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Soften the Pork',
          instruction: 'Rinse the smoked pork and boil it in the water for 20–25 minutes until tender. Keep the stock.'
        },
        {
          stepNum: 2,
          title: 'Pound the Aromatics',
          instruction: 'In a mortar, pound the ginger, garlic and chilies into a coarse paste.'
        },
        {
          stepNum: 3,
          title: 'Wake the Axone',
          instruction: 'If using a leaf-wrapped cake, toast it briefly over a flame or in a dry pan for 1–2 minutes until the aroma rises, then crush it roughly.'
        },
        {
          stepNum: 4,
          title: 'Simmer Together',
          instruction: 'Add the pounded paste, axone, sliced onion and bamboo shoot (if using) to the pork with about 1 cup of the reserved stock. Cook uncovered over medium-low heat for 10–12 minutes until the gravy thickens and clings to the meat.'
        },
        {
          stepNum: 5,
          title: 'Rest',
          instruction: 'Season with salt, cover and rest for 5 minutes.'
        }
      ],
      servingSuggestion: {
        text: 'Serve with plenty of steamed rice and boiled greens, the way a Naga meal is traditionally built: rice, one meat dish, something boiled, and a fiery chutney.',
        imageUrl: '/images/nl/axone_pork.jpg'
      },
      vessel: 'Clay Hearth Pot',
      cookingFat: 'Zero-Oil (Pork Fat Rendered)',
      season: 'All Seasons / Hearth Gatherings',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/nl/axone_pork.jpg',
      phonetic: 'AH-kho-nee PORK'
      },
      {
      id: 'nl-nuoshi-anishi',
      name: 'Nüoshi / Anishi with Smoke-Dried Pork',
      nativeName: 'Nüoshi / Anishi',
      englishSubtitle: 'Ao Fermented Taro-Leaf Stew',
      tagline: 'Smoky, velvety dark taro-leaf cakes slow-braised with smoke-dried pork and mountain aromatics.',
      description: 'Nüoshi, more widely called anishi, is the coal-black, smoky taro-leaf cake of the Ao Nagas. Leaves harvested between May and September are stuffed into sacks and left to ferment for about a week, pounded into a paste in a wooden mortar, baked into a soft dough, pressed into palm-sized patties and dried over the kitchen fire. Stored well, a cake keeps for up to two years with no preservatives, which is exactly its purpose: it carries the monsoon harvest into the lean months. Some say “anishi” is a corruption of the Ao word nüushi, meaning fermented or processed taro leaf.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Ao Naga Villages, Mokokchung Hills',
      culturalSignificance: 'Today the Ao village of Süngratsü in Mokokchung is its heartland. The village council estimates that Süngratsü makes about 25,000 kg a year, and many farmers have moved from paddy to taro because the cakes earn more. On 24 October 2026 the village held a Nüoshi Festival to celebrate and protect the tradition, where organisers stressed support for local producers, especially women’s self-help groups. The effort matters because, as a recent feature on Naga food biodiversity observes, much of this fermenting and smoking know-how lives in the hands (and noses) of older women, and is not being handed down fast enough.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '50 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'smoke-dried pork', amount: '500 g', note: 'cut into bite-sized pieces' },
            { item: 'anishi cakes (about 40–50 g)', amount: '2–3', note: 'broken up' },
            { item: 'potato or a small piece of yam', amount: '1 medium', note: 'cubed' },
            { item: 'tomato', amount: '1 large', note: 'quartered' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'dried red chilies (or fresh chilies to taste)', amount: '4–5' },
            { item: 'A small handful of Sichuan pepper leaves (michinga)', amount: 'as needed', note: 'optional' },
            { item: 'water', amount: '4 cups' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'smoke-dried pork', amount: '500 g', note: 'cut into bite-sized pieces' },
        { item: 'anishi cakes (about 40–50 g)', amount: '2–3', note: 'broken up' },
        { item: 'potato or a small piece of yam', amount: '1 medium', note: 'cubed' },
        { item: 'tomato', amount: '1 large', note: 'quartered' },
        { item: 'dried red chilies (or fresh chilies to taste)', amount: '4–5' },
        { item: 'A small handful of Sichuan pepper leaves (michinga)', amount: 'as needed', note: 'optional' },
        { item: 'water', amount: '4 cups' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Boil the Pork: Boil the smoke-dried pork in the water for about 20 minutes until it begins to soften. A clay pot over the hearth is the traditional vessel.',
        'Dissolve the Anishi: Soak the crumbled anishi cakes in a little warm water for 10 minutes, mash to a rough paste and stir into the pot. The broth will turn a deep black.',
        'Add the Vegetables: Add the potato or yam, tomato and chilies. Cover and simmer gently for 20–25 minutes until the potato is soft and the broth is thin but intensely savoury.',
        'Finish: Add the Sichuan pepper leaves, adjust the salt and rest the pot for 5 minutes.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Boil the Pork',
          instruction: 'Boil the smoke-dried pork in the water for about 20 minutes until it begins to soften. A clay pot over the hearth is the traditional vessel.'
        },
        {
          stepNum: 2,
          title: 'Dissolve the Anishi',
          instruction: 'Soak the crumbled anishi cakes in a little warm water for 10 minutes, mash to a rough paste and stir into the pot. The broth will turn a deep black.'
        },
        {
          stepNum: 3,
          title: 'Add the Vegetables',
          instruction: 'Add the potato or yam, tomato and chilies. Cover and simmer gently for 20–25 minutes until the potato is soft and the broth is thin but intensely savoury.'
        },
        {
          stepNum: 4,
          title: 'Finish',
          instruction: 'Add the Sichuan pepper leaves, adjust the salt and rest the pot for 5 minutes.'
        }
      ],
      servingSuggestion: {
        text: 'Serve as a thin, dark, smoky stew over steamed rice. Smoke-dried eel is another traditional partner for anishi.',
        imageUrl: '/images/nl/nuoshi_anishi.jpg'
      },
      vessel: 'Cast Earthen Pot over Woodfire',
      cookingFat: 'Zero-Oil (Smoke-Dried Pork Fat)',
      season: 'Monsoon to Winter Hearth Feasts',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/nl/nuoshi_anishi.jpg',
      phonetic: 'NEE-oh-shee ah-NEE-shee'
      },
      {
      id: 'nl-galho-zawo',
      name: 'Galho / Zawo',
      nativeName: 'Galho / Zawo',
      englishSubtitle: 'Angami Healing Rice Porridge',
      tagline: 'Gentle, comforting rice porridge cooked with tender mustard greens, seasonal leaves, and aromatic ginger broth.',
      description: 'Galho, also called zawo, is the comfort food of the Angami and Chakhesang Nagas, often described as the Naga khichdi. Rice is simmered with leafy greens, ginger and chilies, and enriched with smoked pork, pork fat or a spoon of axone. It is eaten at any hour, served hot with a sharp pickle or chutney on the side.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Angami & Chakhesang Naga Country, Kohima',
      culturalSignificance: 'In many Naga homes galho is the dish mothers and grandmothers cook when someone is unwell, the weather turns cold, or a child refuses to eat. The greens come from the kitchen garden or the forest: in Jotsoma village, young wild tsikhra ga ferns, foraged in the monsoon, are a favourite. There are many variations, and each community and family has its own cherished recipe for it, handed along at the hearth.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '40 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'short-grain rice', amount: '1 cup', note: 'washed' },
            { item: 'water', amount: '4–5 cups' },
            { item: 'smoked pork or pork fat (or 2 tbsp axone for a lighter version)', amount: '100–150 g' },
            { item: 'mustard greens', amount: '2 cups', note: 'spinach or foraged fern tips, chopped' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'onion', amount: '1 small', note: 'sliced' },
            { item: '1-inch ginger', amount: 'as needed', note: 'crushed' },
            { item: 'green chilies', amount: '2', note: 'slit' },
            { item: 'Spring onion for garnish', amount: 'as needed' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'short-grain rice', amount: '1 cup', note: 'washed' },
        { item: 'water', amount: '4–5 cups' },
        { item: 'smoked pork or pork fat (or 2 tbsp axone for a lighter version)', amount: '100–150 g' },
        { item: 'mustard greens', amount: '2 cups', note: 'spinach or foraged fern tips, chopped' },
        { item: 'onion', amount: '1 small', note: 'sliced' },
        { item: '1-inch ginger', amount: 'as needed', note: 'crushed' },
        { item: 'green chilies', amount: '2', note: 'slit' },
        { item: 'Spring onion for garnish', amount: 'as needed' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Start the Rice: Bring the water to a boil with the crushed ginger. Add the washed rice and smoked pork (or pork fat) and cook over medium heat.',
        'Cook Down: Simmer for 20–25 minutes, stirring now and then, until the rice breaks down into a thick, soupy porridge.',
        'Add the Greens: Add the onion, chilies and chopped greens in the last 5–6 minutes so they stay bright. Stir in the axone now if using it instead of meat.',
        'Season: Add salt, scatter spring onion on top and take off the heat.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Start the Rice',
          instruction: 'Bring the water to a boil with the crushed ginger. Add the washed rice and smoked pork (or pork fat) and cook over medium heat.'
        },
        {
          stepNum: 2,
          title: 'Cook Down',
          instruction: 'Simmer for 20–25 minutes, stirring now and then, until the rice breaks down into a thick, soupy porridge.'
        },
        {
          stepNum: 3,
          title: 'Add the Greens',
          instruction: 'Add the onion, chilies and chopped greens in the last 5–6 minutes so they stay bright. Stir in the axone now if using it instead of meat.'
        },
        {
          stepNum: 4,
          title: 'Season',
          instruction: 'Add salt, scatter spring onion on top and take off the heat.'
        }
      ],
      servingSuggestion: {
        text: 'Serve steaming hot in deep bowls with a spoon of tathu (pounded chutney) or a pickle, and a boiled egg if you like.',
        imageUrl: '/images/nl/galho_zawo.jpg'
      },
      vessel: 'Heavy Iron Pot',
      cookingFat: 'Zero-Oil (Broth-Based)',
      season: 'Winter Sustenance & Recovery',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Vegetarian',
      imageUrl: '/images/nl/galho_zawo.jpg',
      phonetic: 'GAHL-ho ZAH-wo'
      },
      {
      id: 'nl-raja-mircha-tathu',
      name: 'Raja Mircha Tathu',
      nativeName: 'Raja Mircha Tathu',
      englishSubtitle: 'Naga King Chili Mortar Chutney',
      tagline: 'Flame-charred king chillies, roasted garlic, and charred tomatoes coarsely crushed in an ancient stone mortar.',
      description: 'Tathu is the Naga word for a pounded chutney or pickle, and every Naga household owns a mortar for making it (called tathu khu in Angami). This version centres on raja mircha, the Naga king chili or bhut jolokia, roasted until smoky and crushed with garlic and salt. It is meant to be eaten in tiny dabs alongside plain rice and boiled vegetables.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Naga Hearth Kitchens Across All 16 Tribes',
      culturalSignificance: 'Viswema, a large Southern Angami village near Kohima, preserves an oral history in which this chili sends a message. Before an invasion by the Manipuri army, a messenger arrived carrying something tied in a cloth. Unwrapped, it was ash, which the village elders read as a threat to burn the village down. The Viswema elders answered by tying ground Naga king chili in the same cloth and sending the messenger back, meaning, roughly, “attack us if you want to know what pain feels like.” Told as village oral history, it is a story of defiance served in a spoonful.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'fresh raja mircha (bhut jolokia); use 1–2 for a milder chutney', amount: '3–4' },
            { item: 'garlic', amount: '4 cloves', note: 'unpeeled' },
            { item: 'ripe tomato', amount: '1 small' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'fermented bamboo shoot or axone (optional)', amount: '1 tbsp' },
            { item: 'chopped coriander or spring onion greens', amount: '1 tbsp' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'fresh raja mircha (bhut jolokia); use 1–2 for a milder chutney', amount: '3–4' },
        { item: 'garlic', amount: '4 cloves', note: 'unpeeled' },
        { item: 'ripe tomato', amount: '1 small' },
        { item: 'fermented bamboo shoot or axone (optional)', amount: '1 tbsp' },
        { item: 'chopped coriander or spring onion greens', amount: '1 tbsp' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Protect Your Hands: Wear gloves when handling raja mircha, and keep the room ventilated when roasting.',
        'Roast over Embers: Roast the chilies, garlic and tomato directly on embers or a dry hot pan for 3–5 minutes, turning, until blistered and fragrant. Peel the garlic and tomato.',
        'Pound: In a mortar, pound the chilies, garlic and salt to a coarse paste. Add the tomato and the fermented bamboo shoot or axone and pound to a rough chutney.',
        'Finish: Fold in the herbs and rest for 10 minutes so the heat and smoke settle.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Protect Your Hands',
          instruction: 'Wear gloves when handling raja mircha, and keep the room ventilated when roasting.'
        },
        {
          stepNum: 2,
          title: 'Roast over Embers',
          instruction: 'Roast the chilies, garlic and tomato directly on embers or a dry hot pan for 3–5 minutes, turning, until blistered and fragrant. Peel the garlic and tomato.'
        },
        {
          stepNum: 3,
          title: 'Pound',
          instruction: 'In a mortar, pound the chilies, garlic and salt to a coarse paste. Add the tomato and the fermented bamboo shoot or axone and pound to a rough chutney.'
        },
        {
          stepNum: 4,
          title: 'Finish',
          instruction: 'Fold in the herbs and rest for 10 minutes so the heat and smoke settle.'
        }
      ],
      servingSuggestion: {
        text: 'Serve in very small quantities with steamed rice, boiled greens and smoked pork. A little goes a long way.',
        imageUrl: '/images/nl/raja_mircha_tathu.jpg'
      },
      vessel: 'Tathu Stone Mortar & Wood Pestle',
      cookingFat: 'Zero-Oil',
      season: 'Year-Round Everyday Relish',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Vegan',
      imageUrl: '/images/nl/raja_mircha_tathu.jpg',
      phonetic: 'RAH-jah MEER-cha TAH-thu'
      },
      {
      id: 'nl-amrusu',
      name: 'Amrusu',
      nativeName: 'Amrusu',
      englishSubtitle: 'Ao Pounded Rice Porridge with Chicken and Mushrooms',
      tagline: 'Coarsely pounded hill rice simmered to a creamy porridge with chicken stock, wild oyster mushrooms, and bamboo shoot.',
      description: 'Amrusu (also written amursu) is a thick, gentle porridge from the Ao Nagas, made from pounded local rice and cooked with meat, wild mushrooms and a little heat from chilies. It sits on the soupy side of a congee: quiet, filling and warming, in contrast to the sharper, smokier dishes of the Naga table.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Ao Naga Country, Mokokchung District',
      culturalSignificance: 'Home cook Kristi Kikon of Nagaland learned her recipe from her grandmother, and notes that the original Ao version uses pork intestine, with chicken being a more modern, more widely liked swap. Other households use fermented bamboo shoot or dried fish or prawn as the flavour-giver. A recipe learned from a grandmother and adapted by the next generation, it is a good example of how Naga dishes travel across families and generations; Kikon serves it topped with crackling pork skin.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '45 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'coarsely pounded rice (or coarse rice flour)', amount: '1 cup' },
            { item: 'chicken', amount: '300 g', note: 'boiled and shredded (traditionally pork intestine, cleaned and boiled)' },
            { item: 'oyster mushrooms', amount: '1 cup', note: 'torn' },
            { item: 'green chilies', amount: '4–5', note: 'lightly roasted and slit' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: '1-inch ginger and 3 cloves garlic', amount: 'as needed', note: 'crushed' },
            { item: 'fermented bamboo shoot (optional)', amount: '¼ cup' },
            { item: 'chicken stock or water', amount: '4 cups' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'Crackling pork skin to top (optional)', amount: 'as needed' }
          ]
        }
      ],
      ingredients: [
        { item: 'coarsely pounded rice (or coarse rice flour)', amount: '1 cup' },
        { item: 'chicken', amount: '300 g', note: 'boiled and shredded (traditionally pork intestine, cleaned and boiled)' },
        { item: 'oyster mushrooms', amount: '1 cup', note: 'torn' },
        { item: 'green chilies', amount: '4–5', note: 'lightly roasted and slit' },
        { item: '1-inch ginger and 3 cloves garlic', amount: 'as needed', note: 'crushed' },
        { item: 'fermented bamboo shoot (optional)', amount: '¼ cup' },
        { item: 'chicken stock or water', amount: '4 cups' },
        { item: 'Salt', amount: 'to taste' },
        { item: 'Crackling pork skin to top (optional)', amount: 'as needed' }
      ],
      preparationSteps: [
        'Build the Base: Bring the stock to a boil with the ginger, garlic, shredded chicken and mushrooms. Simmer for 10–12 minutes.',
        'Make the Slurry: In a separate bowl, whisk the pounded rice with about 1 cup of warm water until smooth.',
        'Thicken: Pour the rice slurry into the pot in a thin stream, stirring constantly. Cook on low heat for 8–10 minutes until thick and porridge-like.',
        'Season: Add the roasted chilies, bamboo shoot if using, and salt.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Build the Base',
          instruction: 'Bring the stock to a boil with the ginger, garlic, shredded chicken and mushrooms. Simmer for 10–12 minutes.'
        },
        {
          stepNum: 2,
          title: 'Make the Slurry',
          instruction: 'In a separate bowl, whisk the pounded rice with about 1 cup of warm water until smooth.'
        },
        {
          stepNum: 3,
          title: 'Thicken',
          instruction: 'Pour the rice slurry into the pot in a thin stream, stirring constantly. Cook on low heat for 8–10 minutes until thick and porridge-like.'
        },
        {
          stepNum: 4,
          title: 'Season',
          instruction: 'Add the roasted chilies, bamboo shoot if using, and salt.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot in deep bowls, topped with crackling pork skin if you like, and a spoon of chutney on the side.',
        imageUrl: '/images/nl/amrusu.jpg'
      },
      vessel: 'Heavy Bottomed Pot',
      cookingFat: 'Zero-Oil (Natural Chicken Broth)',
      season: 'Harvest & Festival Feasts',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/nl/amrusu.jpg',
      phonetic: 'AAM-roo-soo'
      }
    ]
  },
mn: {
    id: 'mn',
    name: 'Manipur',
    nativeName: 'মণিপুর',
    capital: 'Imphal',
    region: 'North-East',
    historicalEra: 'Meitei Ningthouja Dynasty & Sacred Loktak Heritage',
    culinaryPhilosophy: 'Living around sacred wetland ecosystems. Oil-free stews (Kangshoi), aromatic black scented rice (Chak-hao), lotus roots, and fermented freshwater fish (Ngari) with foraged indigenous herbs and tree chillies.',
    heirloomVessels: ["Khamen Earthenware", "Bamboo Steamers", "Bell Metal (Kansa) Bowls", "Mortar & Pestle"],
    signatureSpices: ["Ngari (Fermented Fish)", "Maroi Nakupi (Chinese Chives)", "Maroi Napakpi", "U-Morok (Tree Chilli)", "Hawaijar (Fermented Soybean)"],
    stapleGrains: ["Chak-hao (Aromatic Black Sticky Rice)", "Moirangphou Rice"],
    representativeDish: {
      id: 'mn-chakhao-kheer',
      name: 'Chak-Hao Poireiton Kheer',
      nativeName: 'চাক-হাও ক্ষীর',
      englishSubtitle: 'Black Rice Pudding of the Meitei Queen',
      tagline: 'Fragrant purple-black heirloom rice slow-cooked in sweetened whole milk, transforming into royal violet ambrosia.',
      description: 'Chak-hao is Manipur’s fragrant black rice, a variety so dark that it turns cooking milk a deep violet. It is grown in the valley districts of Bishnupur, Thoubal and Imphal, and carries a Geographical Indication tag. Slowly cooked with milk and sugar, it becomes a kheer that has been served at weddings, feasts and festivals. Farmers classify scented rice by colour: chakhao amubi (black), chakhao poireiton (purple), chakhao angangba (red) and chakhao angouba (white).',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Imphal Valley & Royal Meitei Kitchens',
      culturalSignificance: 'According to Meitei tradition recorded around the festival of Ningol Chakouba, the story begins in the reign of King Nongada Lairen Pakhangba. Laisana, sister of the chief Poireiton and of Thongaren, became his queen. Visiting her brother’s fields after her coronation, she was given a gift of a rare scented paddy that had never been seen in the kingdom, including a black-topped variety. Back at the palace she cooked it with care for her husband, who was so moved by its taste that he named the rice Chakhao-Mon, and the black-topped variety Chakhao Poireiton in her brother’s honour. Laisana then invited her brother to a feast at her house, which is said to be the origin of the custom of sisters feeding their brothers. In the 19th century, King Chandrakirti found it hard to visit all his sisters in one day and began inviting them to his own home instead, so the festival became Ningol Chakouba. Popular accounts add that the rice was once reserved for royal and ritual use, and that families who grew it handed their seed down across generations.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '50 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'chak-hao (black rice)', amount: '½ cup', note: 'soaked overnight' },
            { item: 'full-fat milk', amount: '1 litre' },
            { item: 'water', amount: '1 cup' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: '⅓–½ cup sugar or powdered jaggery', amount: 'to taste' },
            { item: 'green cardamoms', amount: '3', note: 'crushed' },
            { item: 'cashews and raisins', amount: '1 tbsp', note: 'lightly fried in ghee (optional)' }
          ]
        }
      ],
      ingredients: [
        { item: 'chak-hao (black rice)', amount: '½ cup', note: 'soaked overnight' },
        { item: 'full-fat milk', amount: '1 litre' },
        { item: 'water', amount: '1 cup' },
        { item: '⅓–½ cup sugar or powdered jaggery', amount: 'to taste' },
        { item: 'green cardamoms', amount: '3', note: 'crushed' },
        { item: 'cashews and raisins', amount: '1 tbsp', note: 'lightly fried in ghee (optional)' }
      ],
      preparationSteps: [
        'Soften the Rice: Drain the soaked rice and boil it in 1 cup of water for 15–20 minutes until the grains begin to split. Black rice takes longer to soften than white rice.',
        'Add the Milk: Pour in the milk, bring to a gentle boil, then reduce the heat to low.',
        'Slow Cook: Simmer for 40–50 minutes, stirring often, until the rice is very tender and the milk has thickened to a creamy purple pudding. Avoid high heat, which will scorch the milk.',
        'Sweeten and Perfume: Stir in the sugar or jaggery and cardamom and cook 5 more minutes. Garnish with the nuts and raisins.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Soften the Rice',
          instruction: 'Drain the soaked rice and boil it in 1 cup of water for 15–20 minutes until the grains begin to split. Black rice takes longer to soften than white rice.'
        },
        {
          stepNum: 2,
          title: 'Add the Milk',
          instruction: 'Pour in the milk, bring to a gentle boil, then reduce the heat to low.'
        },
        {
          stepNum: 3,
          title: 'Slow Cook',
          instruction: 'Simmer for 40–50 minutes, stirring often, until the rice is very tender and the milk has thickened to a creamy purple pudding. Avoid high heat, which will scorch the milk.'
        },
        {
          stepNum: 4,
          title: 'Sweeten and Perfume',
          instruction: 'Stir in the sugar or jaggery and cardamom and cook 5 more minutes. Garnish with the nuts and raisins.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm or chilled. The flavour deepens as it cools, and a spoon of it on festival day feels like a little piece of royal history.',
        imageUrl: '/images/mn/chakhao_kheer.jpg'
      },
      vessel: 'Heavy Brass Degchi',
      cookingFat: 'Dairy Fat & Pure Ghee',
      season: 'Royal Feasts & Ningol Chakouba',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Vegetarian',
      imageUrl: '/images/mn/chakhao_kheer.jpg',
      phonetic: 'CHAHK-how poy-RAY-ton KHEER'
    },
    dishes: [
      {
      id: 'mn-chakhao-kheer',
      name: 'Chak-Hao Poireiton Kheer',
      nativeName: 'চাক-হাও ক্ষীর',
      englishSubtitle: 'Black Rice Pudding of the Meitei Queen',
      tagline: 'Fragrant purple-black heirloom rice slow-cooked in sweetened whole milk, transforming into royal violet ambrosia.',
      description: 'Chak-hao is Manipur’s fragrant black rice, a variety so dark that it turns cooking milk a deep violet. It is grown in the valley districts of Bishnupur, Thoubal and Imphal, and carries a Geographical Indication tag. Slowly cooked with milk and sugar, it becomes a kheer that has been served at weddings, feasts and festivals. Farmers classify scented rice by colour: chakhao amubi (black), chakhao poireiton (purple), chakhao angangba (red) and chakhao angouba (white).',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Imphal Valley & Royal Meitei Kitchens',
      culturalSignificance: 'According to Meitei tradition recorded around the festival of Ningol Chakouba, the story begins in the reign of King Nongada Lairen Pakhangba. Laisana, sister of the chief Poireiton and of Thongaren, became his queen. Visiting her brother’s fields after her coronation, she was given a gift of a rare scented paddy that had never been seen in the kingdom, including a black-topped variety. Back at the palace she cooked it with care for her husband, who was so moved by its taste that he named the rice Chakhao-Mon, and the black-topped variety Chakhao Poireiton in her brother’s honour. Laisana then invited her brother to a feast at her house, which is said to be the origin of the custom of sisters feeding their brothers. In the 19th century, King Chandrakirti found it hard to visit all his sisters in one day and began inviting them to his own home instead, so the festival became Ningol Chakouba. Popular accounts add that the rice was once reserved for royal and ritual use, and that families who grew it handed their seed down across generations.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '50 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'chak-hao (black rice)', amount: '½ cup', note: 'soaked overnight' },
            { item: 'full-fat milk', amount: '1 litre' },
            { item: 'water', amount: '1 cup' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: '⅓–½ cup sugar or powdered jaggery', amount: 'to taste' },
            { item: 'green cardamoms', amount: '3', note: 'crushed' },
            { item: 'cashews and raisins', amount: '1 tbsp', note: 'lightly fried in ghee (optional)' }
          ]
        }
      ],
      ingredients: [
        { item: 'chak-hao (black rice)', amount: '½ cup', note: 'soaked overnight' },
        { item: 'full-fat milk', amount: '1 litre' },
        { item: 'water', amount: '1 cup' },
        { item: '⅓–½ cup sugar or powdered jaggery', amount: 'to taste' },
        { item: 'green cardamoms', amount: '3', note: 'crushed' },
        { item: 'cashews and raisins', amount: '1 tbsp', note: 'lightly fried in ghee (optional)' }
      ],
      preparationSteps: [
        'Soften the Rice: Drain the soaked rice and boil it in 1 cup of water for 15–20 minutes until the grains begin to split. Black rice takes longer to soften than white rice.',
        'Add the Milk: Pour in the milk, bring to a gentle boil, then reduce the heat to low.',
        'Slow Cook: Simmer for 40–50 minutes, stirring often, until the rice is very tender and the milk has thickened to a creamy purple pudding. Avoid high heat, which will scorch the milk.',
        'Sweeten and Perfume: Stir in the sugar or jaggery and cardamom and cook 5 more minutes. Garnish with the nuts and raisins.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Soften the Rice',
          instruction: 'Drain the soaked rice and boil it in 1 cup of water for 15–20 minutes until the grains begin to split. Black rice takes longer to soften than white rice.'
        },
        {
          stepNum: 2,
          title: 'Add the Milk',
          instruction: 'Pour in the milk, bring to a gentle boil, then reduce the heat to low.'
        },
        {
          stepNum: 3,
          title: 'Slow Cook',
          instruction: 'Simmer for 40–50 minutes, stirring often, until the rice is very tender and the milk has thickened to a creamy purple pudding. Avoid high heat, which will scorch the milk.'
        },
        {
          stepNum: 4,
          title: 'Sweeten and Perfume',
          instruction: 'Stir in the sugar or jaggery and cardamom and cook 5 more minutes. Garnish with the nuts and raisins.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm or chilled. The flavour deepens as it cools, and a spoon of it on festival day feels like a little piece of royal history.',
        imageUrl: '/images/mn/chakhao_kheer.jpg'
      },
      vessel: 'Heavy Brass Degchi',
      cookingFat: 'Dairy Fat & Pure Ghee',
      season: 'Royal Feasts & Ningol Chakouba',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Vegetarian',
      imageUrl: '/images/mn/chakhao_kheer.jpg',
      phonetic: 'CHAHK-how poy-RAY-ton KHEER'
      },
      {
      id: 'mn-pan-iromba',
      name: 'Pan Iromba',
      nativeName: 'পান ঈরোম্বা',
      englishSubtitle: 'Meitei Taro and Fermented Fish Chutney',
      tagline: 'Melt-in-mouth steamed taro corms mashed with flame-roasted ngari fermented fish, tree chillies, and garlic chives.',
      description: 'Iromba (also written eromba) is the chutney-like mash at the centre of Meitei meals: vegetables boiled or steamed with chilies, then crushed together with ngari, fermented fish. Pan iromba uses taro (pan) as its base, and holds a special place at weddings and festivals. The name itself describes the process: it comes from a Meitei phrase for mixing a watery mass by hand.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Meitei Hearth Homes, Imphal Valley',
      culturalSignificance: 'The ngari behind it is made from small freshwater fish that are sun-dried, then repeatedly smeared with oil, without salt, in specially made earthen pots. It is one of the foundational flavours of the valley. Iromba is listed among the main dishes of the Ningol Chakouba feast, when married daughters are called back to their parental homes and the older women of the household cook each daughter’s favourite dishes.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '25 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'taro corms (pan)', amount: '250 g', note: 'peeled and cut into chunks' },
            { item: 'dried red chilies (or fresh chilies', amount: '5–6', note: 'or u-morok king chili)' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'ngari (fermented fish)', amount: '2 tbsp' },
            { item: 'sprigs spring onion or garlic chives (maroi nakuppi)', amount: '2–3', note: 'chopped' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'taro corms (pan)', amount: '250 g', note: 'peeled and cut into chunks' },
        { item: 'dried red chilies (or fresh chilies', amount: '5–6', note: 'or u-morok king chili)' },
        { item: 'ngari (fermented fish)', amount: '2 tbsp' },
        { item: 'sprigs spring onion or garlic chives (maroi nakuppi)', amount: '2–3', note: 'chopped' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Steam the Taro and Chilies: Steam or boil the taro with the red chilies for about 20 minutes until the taro is soft.',
        'Mash: Mash the cooked taro in a bowl. Separately mash the chilies into a thick liquid and mix thoroughly into the taro.',
        'Roast the Ngari: Roast the ngari over an open flame or dry pan for 2–3 minutes, then crush it and add it to the mash.',
        'Season and Finish: Add salt and mix with your hands. Scatter the chopped spring onion or chives on top.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Steam the Taro and Chilies',
          instruction: 'Steam or boil the taro with the red chilies for about 20 minutes until the taro is soft.'
        },
        {
          stepNum: 2,
          title: 'Mash',
          instruction: 'Mash the cooked taro in a bowl. Separately mash the chilies into a thick liquid and mix thoroughly into the taro.'
        },
        {
          stepNum: 3,
          title: 'Roast the Ngari',
          instruction: 'Roast the ngari over an open flame or dry pan for 2–3 minutes, then crush it and add it to the mash.'
        },
        {
          stepNum: 4,
          title: 'Season and Finish',
          instruction: 'Add salt and mix with your hands. Scatter the chopped spring onion or chives on top.'
        }
      ],
      servingSuggestion: {
        text: 'Serve at room temperature as an assertive side dish with steamed rice and a milder fish or vegetable curry.',
        imageUrl: '/images/mn/pan_iromba.jpg'
      },
      vessel: 'Meitei Stone Mortar',
      cookingFat: 'Zero-Oil',
      season: 'All Seasons / Daily Hearth Essential',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/mn/pan_iromba.jpg',
      phonetic: 'PAHN ee-ROM-bah'
      },
      {
      id: 'mn-ooti',
      name: 'Ooti',
      nativeName: 'উতি',
      englishSubtitle: 'Meitei Festival Yellow Pea Stew with Bamboo Shoot',
      tagline: 'Silky yellow split peas simmered with alkali water, bamboo shoot, and fresh chives for sacred Meitei ceremonies.',
      description: 'Ooti (uti) is a humble, pale pea curry that appears at nearly every Meitei festival, from the marriage feast (makam chakouba) and the Meitei New Year (Sajibu Cheiraoba) to the chariot festival Kang. Made with dried yellow peas and sometimes fresh bamboo shoot, chives and chilies, it is mild, earthy and thick, and is prepared without much oil. Variations are named for what they contain: chagem ooti (with rice), mangal ooti (dried peas), usoi ooti (bamboo shoot), torbot ooti (ash gourd), sagolhawai ooti (black lentil) and more.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Meitei Ceremonial Feasts & Temples',
      culturalSignificance: 'The name itself is a piece of kitchen history. Ut or oot means ashes in Meitei, and Ooti is said to have been named because the old way to soften the pulses was to use ash, obtained from burnt dried pea plants or plantain stems, rather than baking soda. One food writer puts it simply: no Manipuri festival is complete without a serving of this soaked white-pea curry.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '45 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'dried yellow peas', amount: '1 cup', note: 'soaked overnight' },
            { item: 'baking soda (or 1 tbsp clear ash-water', amount: '½ tsp', note: 'the traditional softener)' },
            { item: 'fresh bamboo shoot (usoi)', amount: '½ cup', note: 'sliced (optional)' },
            { item: 'onion', amount: '1 small', note: 'finely chopped' },
            { item: '1-inch ginger', amount: 'as needed', note: 'grated' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'dried red chilies or 2 green chilies', amount: '2' },
            { item: 'turmeric', amount: '½ tsp' },
            { item: 'garlic chives or spring onion greens', amount: '2 tbsp', note: 'chopped' },
            { item: 'mustard oil (optional)', amount: '1 tsp' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'water', amount: '3 cups' }
          ]
        }
      ],
      ingredients: [
        { item: 'dried yellow peas', amount: '1 cup', note: 'soaked overnight' },
        { item: 'baking soda (or 1 tbsp clear ash-water', amount: '½ tsp', note: 'the traditional softener)' },
        { item: 'fresh bamboo shoot (usoi)', amount: '½ cup', note: 'sliced (optional)' },
        { item: 'onion', amount: '1 small', note: 'finely chopped' },
        { item: '1-inch ginger', amount: 'as needed', note: 'grated' },
        { item: 'dried red chilies or 2 green chilies', amount: '2' },
        { item: 'turmeric', amount: '½ tsp' },
        { item: 'garlic chives or spring onion greens', amount: '2 tbsp', note: 'chopped' },
        { item: 'mustard oil (optional)', amount: '1 tsp' },
        { item: 'Salt', amount: 'to taste' },
        { item: 'water', amount: '3 cups' }
      ],
      preparationSteps: [
        'Soften the Peas: Drain the soaked peas and boil them in the water with the soda (or ash-water) for 25–30 minutes, until soft but still whole.',
        'Add Flavour: Add the bamboo shoot, onion, ginger, turmeric, chilies and salt. Simmer for 10 minutes.',
        'Mash Lightly: Crush a few spoonfuls of the peas against the side of the pot to thicken the stew.',
        'Finish: Stir in the chives or spring onion and, if you like, a few drops of mustard oil.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Soften the Peas',
          instruction: 'Drain the soaked peas and boil them in the water with the soda (or ash-water) for 25–30 minutes, until soft but still whole.'
        },
        {
          stepNum: 2,
          title: 'Add Flavour',
          instruction: 'Add the bamboo shoot, onion, ginger, turmeric, chilies and salt. Simmer for 10 minutes.'
        },
        {
          stepNum: 3,
          title: 'Mash Lightly',
          instruction: 'Crush a few spoonfuls of the peas against the side of the pot to thicken the stew.'
        },
        {
          stepNum: 4,
          title: 'Finish',
          instruction: 'Stir in the chives or spring onion and, if you like, a few drops of mustard oil.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot with steamed rice, or as the pale, mild counterpoint to sharper dishes like iromba on a festival plate.',
        imageUrl: '/images/mn/ooti.jpg'
      },
      vessel: 'Cast Iron Pot',
      cookingFat: 'Cold-Pressed Mustard Oil (Minimal / Tempering)',
      season: 'Ceremonial Festivals & Sanamahi Rituals',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Vegetarian',
      imageUrl: '/images/mn/ooti.jpg',
      phonetic: 'OO-tee'
      },
      {
      id: 'mn-chagem-pomba',
      name: 'Chagem Pomba',
      nativeName: 'চাগেম পোম্বা',
      englishSubtitle: 'Meitei Broken Rice, Mustard Leaf and Fermented Soybean Mash',
      tagline: 'Wholesome broken rice stewed with pungent Hawaijar fermented soybeans, tender mustard leaves, and smoked fish.',
      description: 'Chagem pomba is a rustic Meitei dish built from chagem, broken rice grains, cooked with mustard leaves, fermented soybean (hawaijar), smoked or roasted fish and herbs, then mashed into a thick, soft, savoury porridge. It is listed among the traditional dishes of the Ningol Chakouba feast, and is also associated with weddings and other ceremonial meals.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Meitei Countryside, Bishnupur & Kakching',
      culturalSignificance: 'The name tells the tale: chagem means broken rice, the grains left over after pounding, turned here into a feast dish. Documented as an important dish at Meitei and Maring marriages and festivals, it is cooked in more than one way, and a taro-based version with dry meat or dry fish is recorded too. One Manipuri recipe site calls it an art form because so many ingredients (smoky fish, pungent hawaijar, bitter greens) have to be balanced to taste. Elder women of the household cook it, with other favourites, when daughters return home for Ningol Chakouba.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '35 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'broken rice (chagem) or short-grain rice', amount: '½ cup' },
            { item: 'mustard leaves', amount: '2 cups', note: 'chopped' },
            { item: 'green peas', amount: '¼ cup' },
            { item: 'hawaijar (fermented soybean)', amount: '2 tbsp' },
            { item: 'smoked or roasted fish (nga ayaiba)', amount: '2 pieces', note: 'flaked, or ½ cup smoked prawns' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'onion', amount: '1 small', note: 'sliced' },
            { item: 'chilies', amount: '2–3' },
            { item: 'A handful of coriander leaves', amount: 'as needed' },
            { item: 'mustard oil', amount: '1 tsp' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'water', amount: '3 cups' }
          ]
        }
      ],
      ingredients: [
        { item: 'broken rice (chagem) or short-grain rice', amount: '½ cup' },
        { item: 'mustard leaves', amount: '2 cups', note: 'chopped' },
        { item: 'green peas', amount: '¼ cup' },
        { item: 'hawaijar (fermented soybean)', amount: '2 tbsp' },
        { item: 'smoked or roasted fish (nga ayaiba)', amount: '2 pieces', note: 'flaked, or ½ cup smoked prawns' },
        { item: 'onion', amount: '1 small', note: 'sliced' },
        { item: 'chilies', amount: '2–3' },
        { item: 'A handful of coriander leaves', amount: 'as needed' },
        { item: 'mustard oil', amount: '1 tsp' },
        { item: 'Salt', amount: 'to taste' },
        { item: 'water', amount: '3 cups' }
      ],
      preparationSteps: [
        'Half-Cook the Rice: Boil the broken rice in the water for 8–10 minutes until it is about half cooked.',
        'Add the Greens: Add the mustard leaves, peas, onion and chilies. Cook until the leaves collapse and the rice is soft.',
        'Add the Ferments: Stir in the hawaijar and the flaked smoked fish and cook another 5–6 minutes.',
        'Mash: Coarsely mash with the back of a ladle until the mixture turns thick and porridge-like. Season with salt, then top with a few drops of oil and the coriander.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Half-Cook the Rice',
          instruction: 'Boil the broken rice in the water for 8–10 minutes until it is about half cooked.'
        },
        {
          stepNum: 2,
          title: 'Add the Greens',
          instruction: 'Add the mustard leaves, peas, onion and chilies. Cook until the leaves collapse and the rice is soft.'
        },
        {
          stepNum: 3,
          title: 'Add the Ferments',
          instruction: 'Stir in the hawaijar and the flaked smoked fish and cook another 5–6 minutes.'
        },
        {
          stepNum: 4,
          title: 'Mash',
          instruction: 'Coarsely mash with the back of a ladle until the mixture turns thick and porridge-like. Season with salt, then top with a few drops of oil and the coriander.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm with a little chutney such as iromba, or with a side of roasted fish.',
        imageUrl: '/images/mn/chagem_pomba.jpg'
      },
      vessel: 'Clay Handi',
      cookingFat: 'Cold-Pressed Mustard Oil (1 tsp)',
      season: 'Winter Greens Harvest Season',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/mn/chagem_pomba.jpg',
      phonetic: 'chah-GEM POM-bah'
      },
      {
      id: 'mn-dolhou-maltame',
      name: 'Dolhou Maltame',
      nativeName: 'Dolhou Maltame',
      englishSubtitle: 'Paite Dried Taro with Fermented Fish',
      tagline: 'Sun-dried monsoon taro stems braised with ngathu fermented fish, pounded ginger, and green chillies.',
      description: 'Dolhou is dried taro petiole and leaf, a pantry staple of the Paite community of Manipur. Prepared in June–July, the stems and leaves are halved and sun-dried until dark, then rolled into balls and wrapped or hung from the rooftop so they last a full year. Soaked and boiled, dolhou goes into soups and mashes; in dolhou maltame it is cooked with red chilies and mashed with roasted fermented fish and herbs.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Paite Tribal Communities, Churachandpur Hills',
      culturalSignificance: 'Dolhou is documented by tuber-crop researchers as a way of keeping one season’s harvest for the next: made in June–July, the dried balls are wrapped in paper or hung from the rooftop on threads, ready to be used through the year. A household that dries its monsoon taro is feeding itself in the months when fresh greens are gone. Dolhou goes into soups and mashes, is eaten with rice at breakfast and dinner, and is also cooked with chicken or pork.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '35 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'dolhou (dried taro petiole and leaf)', amount: '50 g', note: 'soaked in warm water for 20 minutes' },
            { item: 'dried red chilies', amount: '3–4' },
            { item: 'ngathu / ngari (fermented fish)', amount: '2 tbsp' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'A handful of coriander or spring onion leaves', amount: 'as needed', note: 'chopped' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'Water for boiling', amount: 'as needed' }
          ]
        }
      ],
      ingredients: [
        { item: 'dolhou (dried taro petiole and leaf)', amount: '50 g', note: 'soaked in warm water for 20 minutes' },
        { item: 'dried red chilies', amount: '3–4' },
        { item: 'ngathu / ngari (fermented fish)', amount: '2 tbsp' },
        { item: 'A handful of coriander or spring onion leaves', amount: 'as needed', note: 'chopped' },
        { item: 'Salt', amount: 'to taste' },
        { item: 'Water for boiling', amount: 'as needed' }
      ],
      preparationSteps: [
        'Soften the Dolhou: Drain the soaked dolhou and cut into small pieces.',
        'Boil: Boil the dolhou with the red chilies for about 20 minutes until completely soft.',
        'Roast the Fish: Roast the fermented fish for 2–3 minutes on a dry pan or open flame.',
        'Mash Together: Add the roasted fish to the boiled dolhou and mash thoroughly with the chilies. Season with salt and fold in the fresh herbs.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Soften the Dolhou',
          instruction: 'Drain the soaked dolhou and cut into small pieces.'
        },
        {
          stepNum: 2,
          title: 'Boil',
          instruction: 'Boil the dolhou with the red chilies for about 20 minutes until completely soft.'
        },
        {
          stepNum: 3,
          title: 'Roast the Fish',
          instruction: 'Roast the fermented fish for 2–3 minutes on a dry pan or open flame.'
        },
        {
          stepNum: 4,
          title: 'Mash Together',
          instruction: 'Add the roasted fish to the boiled dolhou and mash thoroughly with the chilies. Season with salt and fold in the fresh herbs.'
        }
      ],
      servingSuggestion: {
        text: 'Serve with steamed rice for breakfast or dinner. If you like, add chicken or pork to the boil for a heartier version.',
        imageUrl: '/images/mn/dolhou_maltame.jpg'
      },
      vessel: 'Iron Cooking Pot',
      cookingFat: 'Zero-Oil (Water-Braised)',
      season: 'Monsoon to Winter Foraged Greens',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/mn/dolhou_maltame.jpg',
      phonetic: 'dol-HOH mal-TAH-may'
      }
    ]
  },
  dl: {
    id: 'dl',
    name: 'Delhi',
    nativeName: 'दिल्ली / دیہلی',
    capital: 'New Delhi',
    region: 'North',
    historicalEra: 'Shahjahanabad & Sultanate Culinary Crossroad',
    culinaryPhilosophy: 'Hollowed fresh fruits and vegetables stuffed with spiced chickpeas, slow-cooked winter breakfast pulses with asafoetida, and street-food chaats refined by Mughal court physicians (Hakims).',
    heirloomVessels: ['Copper Handi', 'Iron Karahi', 'Earthen Kulhad'],
    signatureSpices: ['Amchur (Dry Mango)', 'Black Salt (Kala Namak)', 'Cumin', 'Pomegranate Powder', 'Heeng'],
    stapleGrains: ['Wheat (Khameeri Roti)', 'Basmati Rice', 'Kabuli Chana'],
    representativeDish: {
      id: 'dl-kulle-chaat',
      name: 'Purani Dilli Kulle Ki Chaat',
      nativeName: 'कुल्ले की चाट',
      tagline: 'Hollowed Cucumber & Fruit Cups Stuffed with Spiced Chickpeas & Pomegranate',
      description: 'Hollowed cucumber, tomato, and boiled potato shells filled with boiled chickpeas, ruby pomegranate arils, fresh ginger juliennes, lemon juice, and a secret 12-spice digestive masala.',
      preservationStatus: 'Endangered Oral Tradition',
      microOrigin: 'Old Delhi / Shahjahanabad Lanes',
      culturalSignificance: 'Invented during the Mughal era under Emperor Shah Jahan when court physicians prescribed cooling chaat spices to counteract brackish canal water.',
      ingredients: [
        { item: 'Crisp field cucumbers, tomatoes, and boiled potatoes', amount: '4 each' },
        { item: 'Boiled yellow peas / chickpeas', amount: '1 cup' },
        { item: 'Fresh ruby pomegranate seeds', amount: '0.5 cup' },
        { item: 'Freshly ground chaat masala with kala namak', amount: '2 tbsp' },
        { item: 'Freshly squeezed lemon juice and mint leaves', amount: 'to taste' }
      ],
      preparationSteps: [
        'Slice cucumbers and boiled potatoes into cylinders, delicately scooping out the center to form miniature edible edible cups.',
        'Fill each cup with boiled chickpeas and sparkling pomegranate seeds.',
        'Dust generously with tangy black salt and roasted cumin masala.',
        'Squeeze fresh lemon juice over each cup just before serving.'
      ],
      vessel: 'Leaf Dona or Earthen Platter',
      cookingFat: 'Zero-Oil',
      season: 'Summer / All Year Street Food',
      flavorProfile: ['Crisp Refreshing', 'Pungent Tang', 'Pomegranate Crunch'],
      dietary: 'Vegan',
      imageUrl: '/images/culinary_hero_banner.jpg',
      phonetic: 'KOOL-lay KEE CHAHT',
      approxPrepTime: '20 min'
    },
    dishes: [
      {
        id: 'dl-kulle-chaat',
        name: 'Purani Dilli Kulle Ki Chaat',
        nativeName: 'कुल्ले की चाट',
        tagline: 'Hollowed Cucumber & Fruit Cups Stuffed with Spiced Chickpeas & Pomegranate',
        description: 'Hollowed cucumber, tomato, and boiled potato shells filled with boiled chickpeas, ruby pomegranate arils, fresh ginger juliennes, lemon juice, and a secret 12-spice digestive masala.',
        preservationStatus: 'Endangered Oral Tradition',
        microOrigin: 'Shahjahanabad',
        culturalSignificance: 'Historic Mughal digestive fruit cups.',
        ingredients: [
          { item: 'Hollowed cucumbers and potatoes', amount: '6' },
          { item: 'Chickpeas and pomegranate', amount: '1 cup' },
          { item: 'Kala namak chaat spice', amount: '2 tbsp' }
        ],
        preparationSteps: [
          'Hollow cucumber cylinders into cups.',
          'Fill with chickpeas and pomegranate.',
          'Season with lemon and black salt.'
        ],
        vessel: 'Leaf Dona',
        cookingFat: 'None',
        season: 'All Year',
        flavorProfile: ['Zesty', 'Crisp', 'Sweet Tang'],
        dietary: 'Vegan',
        imageUrl: '/images/culinary_hero_banner.jpg'
      }
    ]
  },
  hr: {
    id: 'hr',
    name: 'Haryana',
    nativeName: 'हरियाणा',
    capital: 'Chandigarh',
    region: 'North',
    historicalEra: 'Mahabharata Kurukshetra & Vedic Saraswati Hearth',
    culinaryPhilosophy: 'Simple, earthy, and nutrient-dense rustic cooking: pearl millet (bajra) rotis, seasonal winter greens, wild arid melons (kachri), freshly churned butter (makhan), and pure dairy accompaniments.',
    heirloomVessels: ['Mitti Ka Chulha', 'Cast Iron Tawa', 'Terracotta Handi'],
    signatureSpices: ['Kachri Powder (Wild Melon)', 'Dry Red Chillies', 'Roasted Cumin', 'Fresh Garlic', 'Asafoetida'],
    stapleGrains: ['Pearl Millet (Bajra)', 'Desi Wheat', 'Gram Flour (Besan)'],
    representativeDish: {
      id: 'hr-bajra-khichdi',
      name: 'Bajra Khichdi',
      nativeName: 'बाजरे की खिचड़ी',
      englishSubtitle: 'Pearl Millet and Lentils',
      tagline: 'Coarsely pounded winter pearl millet slow-simmered with moong dal, served with bilona ghee and fresh curd.',
      description: 'Bajra khichdi is a hearty grain-and-pulse preparation suited to cold weather and a rural pantry. Pearl millet has a robust, earthy taste and benefits from thorough cooking. Cracked millet cooks more quickly than whole grain; tempered with cumin in ghee, it is a winter hearth staple.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Rohtak, Hisar & Rural Haryana Countryside',
      culturalSignificance: 'The ultimate survival and strength food of Haryanvi farmers. Slow-cooked over cattle dung embers in earthen pots and consumed with unpasteurized butter and fresh buttermilk to sustain heavy agrarian labour.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: 'Soaking 2–4 hrs optional; cooking 45–70 min',
      ingredientSections: [
        {
          title: 'Grains & Pulses',
          items: [
            { item: 'Cracked pearl millet (bajra)', amount: '1 cup', note: 'rinsed' },
            { item: 'Split moong dal', amount: '1/2 cup', note: 'rinsed' },
            { item: 'Water', amount: '5 cups', note: 'plus more as needed' }
          ]
        },
        {
          title: 'Seasoning & Tempering',
          items: [
            { item: 'Turmeric powder', amount: '1/2 tsp' },
            { item: 'Cumin seeds', amount: '1 tsp' },
            { item: 'Pure desi ghee', amount: '1 tbsp', note: 'plus extra for serving' },
            { item: 'Salt', amount: 'to taste' }
          ]
        },
        {
          title: 'Serving Accompaniments',
          items: [
            { item: 'Fresh curd or buttermilk (chaas)', amount: 'for serving' }
          ]
        }
      ],
      ingredients: [
        { item: 'Cracked pearl millet (bajra)', amount: '1 cup' },
        { item: 'Split moong dal', amount: '1/2 cup' },
        { item: 'Pure desi ghee', amount: 'generous spoonfuls' },
        { item: 'Cumin seeds & turmeric', amount: '1 tsp & 1/2 tsp' },
        { item: 'Salt', amount: 'to taste' },
        { item: 'Fresh curd or chaas', amount: 'for serving' }
      ],
      preparationSteps: [
        'Rinse bajra and moong dal separately until water runs clearer.',
        'Add millet, dal, water, turmeric, and salt to a heavy pot or pressure cooker. Stir to combine.',
        'Bring to a boil, then cover and simmer gently, stirring occasionally and adding hot water as it thickens until the grain and dal are tender.',
        'Warm ghee in a small pan, let cumin seeds sizzle until fragrant, and pour over the khichdi.',
        'Adjust consistency with hot water if desired and serve hot with fresh curd or buttermilk.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Rinse & Combine Grains',
          instruction: 'Rinse cracked bajra and moong dal. Combine with water, turmeric, and salt.'
        },
        {
          stepNum: 2,
          title: 'Slow Simmer',
          instruction: 'Simmer on gentle heat until the millet is thoroughly tender and creamy.'
        },
        {
          stepNum: 3,
          title: 'Cumin Ghee Tempering',
          instruction: 'Sizzle cumin seeds in pure ghee and pour the fragrant tadka over the khichdi.'
        }
      ],
      servingSuggestion: {
        text: 'Serve piping hot in a bowl with a melting pool of bilona ghee, paired with fresh curd or chilled chaas and jaggery.',
        imageUrl: '/images/hr/bajra_khichdi.jpg'
      },
      vessel: 'Terracotta Handi or Heavy Pot',
      cookingFat: 'Pure Desi Ghee',
      season: 'Winter (November – February)',
      flavorProfile: ['Earthy Pearl Millet', 'Nutty Moong Dal', 'Warm Cumin', 'Rich Desi Ghee'],
      dietary: 'Vegetarian',
      imageUrl: '/images/hr/bajra_khichdi.jpg',
      phonetic: 'BAHJ-rah KHICH-dee'
    },
    dishes: [
      {
        id: 'hr-bajra-khichdi',
        name: 'Bajra Khichdi',
        nativeName: 'बाजरे की खिचड़ी',
        englishSubtitle: 'Pearl Millet and Lentils',
        tagline: 'Coarsely pounded winter pearl millet slow-simmered with moong dal, served with bilona ghee and fresh curd.',
        description: 'Bajra khichdi is a hearty grain-and-pulse preparation suited to cold weather and a rural pantry. Pearl millet has a robust, earthy taste and benefits from thorough cooking. Cracked millet cooks more quickly than whole grain; tempered with cumin in ghee, it is a winter hearth staple.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Rohtak & Rural Haryana',
        culturalSignificance: 'The signature sustenance of Haryanvi farming families during cold months.',
        servesCount: 'Yield: 4 servings',
        approxPrepTime: '45–70 min',
        ingredientSections: [
          {
            title: 'Base',
            items: [
              { item: 'Cracked bajra', amount: '1 cup' },
              { item: 'Moong dal', amount: '1/2 cup' }
            ]
          },
          {
            title: 'Tempering',
            items: [
              { item: 'Ghee', amount: '1 tbsp' },
              { item: 'Cumin seeds & salt', amount: 'to taste' }
            ]
          }
        ],
        ingredients: [
          { item: 'Cracked bajra', amount: '1 cup' },
          { item: 'Split moong dal', amount: '1/2 cup' },
          { item: 'Desi ghee', amount: '2 tbsp' },
          { item: 'Cumin, turmeric, salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Rinse bajra and dal, cook in water with turmeric and salt until tender.',
          'Temper cumin in hot ghee and pour over the khichdi.',
          'Serve with cold curd or chaas.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Cook Millet & Dal',
            instruction: 'Simmer cracked bajra and moong dal until tender and porridge-like.'
          },
          {
            stepNum: 2,
            title: 'Ghee Cumin Tadka',
            instruction: 'Temper cumin in golden ghee and fold into khichdi.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot with fresh churned butter and buttermilk.',
          imageUrl: '/images/hr/bajra_khichdi.jpg'
        },
        vessel: 'Terracotta Handi',
        cookingFat: 'Desi Ghee',
        season: 'Winter',
        flavorProfile: ['Earthy', 'Nutty', 'Wholesome'],
        dietary: 'Vegetarian',
        imageUrl: '/images/hr/bajra_khichdi.jpg'
      },
      {
        id: 'hr-hara-dhania-cholia',
        name: 'Hara Dhania Cholia',
        nativeName: 'हरा धनिया छोलिया',
        englishSubtitle: 'Fresh Green Chickpeas with Herbs',
        tagline: 'Seasonal tender green winter chickpeas cooked with fresh coriander in an onion-tomato gravy.',
        description: 'Cholia refers to fresh green chickpeas, a seasonal ingredient enjoyed in parts of North India. Compared with dried chickpeas, fresh green chickpeas are tender, grassy, and cook relatively quickly. The recipe is a simple curry in which coriander and a lightly spiced onion-tomato base support the vegetable.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Haryana Farm Belts',
        culturalSignificance: 'Celebrated during the short winter harvest window when pods are plucked directly from fields and shelled fresh.',
        servesCount: 'Yield: 4 servings',
        approxPrepTime: '35–45 min',
        ingredientSections: [
          {
            title: 'Fresh Harvest',
            items: [
              { item: 'Shelled fresh green chickpeas (cholia)', amount: '2 cups' },
              { item: 'Fresh coriander, chopped', amount: '2 tbsp' }
            ]
          },
          {
            title: 'Aromatics & Spices',
            items: [
              { item: 'Medium onion', amount: '1', note: 'finely chopped' },
              { item: 'Tomatoes', amount: '2', note: 'chopped' },
              { item: 'Ginger-garlic paste', amount: '1 tbsp' },
              { item: 'Cumin seeds, turmeric, coriander & chilli powder', amount: 'to taste' },
              { item: 'Oil', amount: '2 tbsp' },
              { item: 'Salt', amount: 'to taste' }
            ]
          }
        ],
        ingredients: [
          { item: 'Fresh green chickpeas (cholia)', amount: '2 cups' },
          { item: 'Onion and tomatoes', amount: '1 & 2' },
          { item: 'Ginger-garlic paste', amount: '1 tbsp' },
          { item: 'Fresh coriander', amount: 'generous handful' },
          { item: 'Spices and oil', amount: 'to taste' }
        ],
        preparationSteps: [
          'Shell and rinse green chickpeas.',
          'Sauté cumin and onions in oil until golden, then add ginger-garlic paste.',
          'Add chopped tomatoes, turmeric, coriander, chilli, and salt. Cook until softened.',
          'Add green chickpeas, coat in masala, add 1/2–1 cup water, and simmer covered for 15-25 minutes until tender.',
          'Finish with plenty of fresh coriander.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Sauté Masala Base',
            instruction: 'Cook onions, ginger-garlic, and tomatoes with spices until aromatic.'
          },
          {
            stepNum: 2,
            title: 'Simmer Cholia',
            instruction: 'Simmer fresh green chickpeas in light gravy until tender and sweet.'
          }
        ],
        servingSuggestion: {
          text: 'Serve with hot bajra roti or phulkas alongside a bowl of fresh curd.',
          imageUrl: '/images/hr/hara_dhania_cholia.jpg'
        },
        vessel: 'Heavy Pan',
        cookingFat: 'Mustard Oil or Ghee',
        season: 'Winter Harvest (Dec – Feb)',
        flavorProfile: ['Sweet Grassy Cholia', 'Fresh Coriander', 'Tangy Tomato'],
        dietary: 'Vegetarian',
        imageUrl: '/images/hr/hara_dhania_cholia.jpg'
      },
      {
        id: 'hr-bajra-roti-lehsun-chutney',
        name: 'Bajra Roti with Lehsun Chutney',
        nativeName: 'बाजरे की रोटी और लहसुन की चटनी',
        englishSubtitle: 'Millet Flatbread with Pounded Garlic Chutney',
        tagline: 'Hand-patted gluten-free pearl millet bread cooked on tawa, paired with fiery garlic and red chilli chutney.',
        description: 'Bajra roti is a staple-style millet flatbread. Pearl millet dough has no gluten, so the bread is shaped by patting rather than by rolling it like wheat roti. Garlic chutney supplies sharpness and heat. The recipe depends on warm water, a soft dough, and gentle handling.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Bhiwani, Hisar & Rural Hearths',
        culturalSignificance: 'The daily agrarian plate of Haryana: unrefined, mineral-rich pearl millet paired with pungent raw garlic and dried red chillies to ignite digestion.',
        servesCount: 'Yield: 6 rotis and 1 bowl chutney',
        approxPrepTime: '40 min',
        ingredientSections: [
          {
            title: 'Millet Dough',
            items: [
              { item: 'Bajra flour', amount: '2 cups' },
              { item: 'Warm water', amount: '1 - 1 1/4 cups', note: 'added gradually' },
              { item: 'Salt', amount: '1/2 tsp' }
            ]
          },
          {
            title: 'Pounded Garlic Chutney',
            items: [
              { item: 'Garlic cloves', amount: '6' },
              { item: 'Dried red chillies', amount: '2' },
              { item: 'Roasted peanuts or sesame', amount: '1 tbsp', note: 'optional' },
              { item: 'Lemon juice & salt', amount: 'to taste' }
            ]
          }
        ],
        ingredients: [
          { item: 'Bajra flour', amount: '2 cups' },
          { item: 'Warm water', amount: 'as needed' },
          { item: 'Garlic cloves', amount: '6' },
          { item: 'Dried red chillies', amount: '2' },
          { item: 'Ghee, lemon juice & salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Knead bajra flour with warm water into a soft dough. Keep covered.',
          'Pat dough balls between damp palms into 1/2 cm thick discs.',
          'Cook on a hot tawa until brown spots appear, turn carefully, and roast.',
          'For chutney, crush garlic with toasted chillies, salt, and lemon juice into a thick paste.',
          'Brush hot rotis with ghee and serve with chutney.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Hand Pat Roti',
            instruction: 'Knead bajra with warm water and pat gently between damp hands.'
          },
          {
            stepNum: 2,
            title: 'Tawa Roasting',
            instruction: 'Roast on dry cast iron griddle until specked with golden-brown spots.'
          },
          {
            stepNum: 3,
            title: 'Crush Lehsun Chutney',
            instruction: 'Pound garlic cloves with red chillies and lemon into a sharp paste.'
          }
        ],
        servingSuggestion: {
          text: 'Serve steaming hot with a generous smear of homemade white butter, fresh curd, and spicy garlic chutney.',
          imageUrl: '/images/hr/bajra_roti_lehsun_chutney.jpg'
        },
        vessel: 'Cast Iron Tawa & Stone Mortar',
        cookingFat: 'Desi Ghee or White Butter',
        season: 'Winter',
        flavorProfile: ['Toasted Millet', 'Pungent Garlic', 'Fiery Chilli', 'Rich Butter'],
        dietary: 'Vegetarian',
        imageUrl: '/images/hr/bajra_roti_lehsun_chutney.jpg'
      },
      {
        id: 'hr-kachri-ki-chutney',
        name: 'Kachri ki Chutney',
        nativeName: 'काचरी की चटनी',
        englishSubtitle: 'Wild-Melon Chutney',
        tagline: 'Piquant, tangy relish made from small desert wild melons ground with garlic and roasted cumin.',
        description: 'Kachri is a small wild melon used in parts of Haryana and neighbouring dry regions. It is known for a sharp, tangy flavour and can be used in chutneys or vegetable preparations.',
        preservationStatus: 'Endangered Oral Tradition',
        microOrigin: 'South-Western Haryana Sand Belts',
        culturalSignificance: 'Wild kachri grows naturally in arid fields and is foraged by village women, providing vital organic acids and digestive relief during hot months.',
        servesCount: 'Yield: 1 small bowl',
        approxPrepTime: '15–20 min',
        ingredientSections: [
          {
            title: 'Wild Fruit & Aromatics',
            items: [
              { item: 'Peeled and chopped kachri', amount: '1 cup' },
              { item: 'Garlic cloves', amount: '1-2' },
              { item: 'Green chilli or dried red chilli', amount: '1' },
              { item: 'Cumin seeds', amount: '1/2 tsp', note: 'roasted' },
              { item: 'Fresh coriander leaves', amount: '1 tbsp' },
              { item: 'Salt', amount: 'to taste' }
            ]
          }
        ],
        ingredients: [
          { item: 'Wild kachri melons', amount: '1 cup, chopped' },
          { item: 'Garlic cloves', amount: '1-2' },
          { item: 'Green or red chilli', amount: '1' },
          { item: 'Roasted cumin & coriander', amount: 'to taste' },
          { item: 'Salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Wash, peel, and chop kachri, removing any damaged parts.',
          'Crush garlic, chilli, roasted cumin, and salt in a mortar.',
          'Add kachri and grind to a coarse paste.',
          'Add coriander leaves, pulse briefly, and rest 5 minutes before serving.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Stone Grinding',
            instruction: 'Crush wild kachri with roasted cumin, garlic, and chillies into a coarse, tangy relish.'
          }
        ],
        servingSuggestion: {
          text: 'Serve in modest spoonfuls alongside bajra roti, parathas, or dal-khichdi.',
          imageUrl: '/images/hr/kachri_ki_chutney.jpg'
        },
        vessel: 'Sil-Batta (Stone Mortar)',
        cookingFat: 'Zero Fat',
        season: 'Late Monsoon & Autumn',
        flavorProfile: ['Sharp Tangy', 'Wild Arid Acidity', 'Roasted Cumin', 'Garlic'],
        dietary: 'Vegan',
        imageUrl: '/images/hr/kachri_ki_chutney.jpg'
      },
      {
        id: 'hr-haryanvi-churma',
        name: 'Haryanvi Churma',
        nativeName: 'हरियाणवी चूरमा',
        englishSubtitle: 'Sweet Crumbled Wheat Bread',
        tagline: 'Celebratory rustic sweet of thick tawa-baked whole wheat flatbread crumbled with warm ghee and jaggery.',
        description: 'Churma is made by crumbling cooked wheat bread and binding it with ghee and sweetener. In Haryana, churma and related wheat-and-ghee sweets appear in festive and family contexts. The method is deliberately simple: cook the bread through, cool enough to handle, crumble finely, then add ghee and sugar or jaggery to taste.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Haryana Village Hearths',
        culturalSignificance: 'The ultimate celebratory offering in Haryana, prepared for wrestlers, visiting guests, and family feasts to demonstrate generous dairy hospitality.',
        servesCount: 'Yield: 4–6 portions',
        approxPrepTime: '45–60 min',
        ingredientSections: [
          {
            title: 'Bread Base',
            items: [
              { item: 'Whole-wheat flour', amount: '2 cups' },
              { item: 'Ghee for dough', amount: '2 tbsp' },
              { item: 'Water', amount: '3/4 cup' },
              { item: 'Pinch of salt', amount: 'pinch' }
            ]
          },
          {
            title: 'Sweetener & Ghee Finish',
            items: [
              { item: 'Melted pure ghee', amount: '1/4 - 1/3 cup' },
              { item: 'Powdered sugar or grated jaggery', amount: '1/2 cup' },
              { item: 'Cardamom powder & nuts', amount: 'optional' }
            ]
          }
        ],
        ingredients: [
          { item: 'Whole-wheat flour', amount: '2 cups' },
          { item: 'Pure desi ghee', amount: '1/3 cup + 2 tbsp' },
          { item: 'Grated jaggery or sugar', amount: '1/2 cup' },
          { item: 'Cardamom powder & almonds', amount: 'optional' }
        ],
        preparationSteps: [
          'Knead flour, salt, and 2 tbsp ghee with water into a firm dough.',
          'Divide into portions, flatten into thick discs, and roast on tawa over low heat until cooked through.',
          'Cool until warm, then crush by hand or food processor into coarse crumbs.',
          'Pour in warm melted ghee gradually, then stir in powdered sugar or grated jaggery and cardamom.',
          'Shape into loose mounds or serve crumbly.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Bake Thick Roti',
            instruction: 'Slow-cook thick wheat discs on low flame until cooked through without burning.'
          },
          {
            stepNum: 2,
            title: 'Crumb & Bind with Ghee',
            instruction: 'Crush warm breads into fine crumbs, fold in warm melted ghee, and sweeten with jaggery.'
          }
        ],
        servingSuggestion: {
          text: 'Serve warm in modest bowls, often accompanied by spicy dal or as a celebratory dessert.',
          imageUrl: '/images/hr/haryanvi_churma.jpg'
        },
        vessel: 'Heavy Tawa & Brass Parat',
        cookingFat: 'Pure Desi Ghee',
        season: 'Festive & Winter',
        flavorProfile: ['Caramel Jaggery', 'Toasted Wheat', 'Rich Desi Ghee'],
        dietary: 'Vegetarian',
        imageUrl: '/images/hr/haryanvi_churma.jpg'
      }
    ]
  },
  mp: {
    id: 'mp',
    name: 'Madhya Pradesh',
    nativeName: 'मध्य प्रदेश',
    capital: 'Bhopal',
    region: 'Central',
    historicalEra: 'Malwa Sultanate, Bundela & Baghelkhand Royalty',
    culinaryPhilosophy: 'Heartland gastronomy defined by fertile black soil, seasonal wild yams, hearty winter maize, dairy-simmered street chaats of Sarafa Bazaar, and indigenous multi-lentil fermentation.',
    heirloomVessels: ['Heavy Cast Iron Kadhai', 'Mitti Handi', 'Brass Thali', 'Patila'],
    signatureSpices: ['Indori Garadu Masala', 'Hing (Asafoetida)', 'Black Cumin', 'Amchur (Dry Mango)', 'Roasted Coriander'],
    stapleGrains: ['Desi Corn (Makka)', 'Panchmel Dal', 'Sharbati Wheat', 'Jowar'],
    representativeDish: {
      id: 'mp-bhutte-ka-kees',
      name: 'Bhutte Ka Kees',
      nativeName: 'भुट्टे का कीस',
      englishSubtitle: 'Spiced Grated Corn',
      tagline: 'Iconic Indore street food of slow-roasted grated desi corn simmered in milk, ghee, and coconut.',
      description: 'An iconic street food from the bustling Sarafa Bazaar in Indore, Malwa region. Bhutte means corn, and Kees means grated. It is a creamy, sweet, and spicy mash made by slow-roasting grated milky corn in ghee and simmering it in milk.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Sarafa Bazaar, Indore & Malwa Plateau',
      culturalSignificance: 'Born in the nocturnal jewelry street of Sarafa Bazaar, Indore, where night-time food vendors thrive. Traditional desi field corn on the cob is grated while still milky and cooked slowly with milk and ghee to achieve its melt-in-the-mouth texture.',
      servesCount: 'Serves 4',
      approxPrepTime: '30 min',
      ingredientSections: [
        {
          title: 'Fresh Corn & Dairy',
          items: [
            { item: 'Fresh, tender corn on the cob', amount: '4 medium', note: 'grated' },
            { item: 'Milk', amount: '1 cup' },
            { item: 'Desi ghee', amount: '2 tbsp' }
          ]
        },
        {
          title: 'Spices & Seasonings',
          items: [
            { item: 'Mustard seeds', amount: '1 tsp' },
            { item: 'Cumin seeds', amount: '1 tsp' },
            { item: 'Asafoetida (hing)', amount: '1 pinch' },
            { item: 'Ginger-green chili paste', amount: '1 tbsp' },
            { item: 'Turmeric powder', amount: '1/2 tsp' },
            { item: 'Sugar', amount: '1 tsp' },
            { item: 'Salt', amount: 'to taste' }
          ]
        },
        {
          title: 'Garnish',
          items: [
            { item: 'Fresh grated coconut', amount: '1/4 cup' },
            { item: 'Chopped coriander leaves', amount: '2 tbsp' },
            { item: 'Fresh lemon juice', amount: 'from 1 lemon' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh tender corn (desi corn preferred)', amount: '4 cobs, grated' },
        { item: 'Whole milk', amount: '1 cup' },
        { item: 'Pure desi ghee', amount: '2 tbsp' },
        { item: 'Mustard & cumin seeds', amount: '1 tsp each' },
        { item: 'Ginger-green chili paste', amount: '1 tbsp' },
        { item: 'Turmeric, sugar & salt', amount: 'to taste' },
        { item: 'Fresh grated coconut & coriander', amount: 'for garnish' },
        { item: 'Lemon wedges', amount: 'for finishing' }
      ],
      preparationSteps: [
        'Grate the corn: Peel the corn and grate the cobs directly into a bowl using a standard box grater.',
        'Temper the spices: Heat ghee in a heavy-bottomed kadhai (wok). Add mustard seeds and cumin seeds. Once they crackle, add hing and the ginger-green chili paste. Sauté for a few seconds.',
        'Roast the corn: Add the grated corn and turmeric powder. Roast continuously on medium-low heat for 10-12 minutes until the moisture evaporates, the mixture stops sticking to the pan, and a fragrant aroma fills the air.',
        'Simmer in milk: Pour the milk into the roasted corn. Mix well, cover with a lid, and let it simmer on low heat for 8-10 minutes until all the milk is absorbed and the corn is fully cooked and creamy.',
        'Season: Stir in the salt and sugar, cooking for one final minute before turning off the heat.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Grate Milky Corn',
          instruction: 'Grate fresh tender corn cobs on a box grater to release the sweet milky pulp.'
        },
        {
          stepNum: 2,
          title: 'Ghee Tempering',
          instruction: 'Heat ghee in a wok, splutter mustard and cumin, and sauté ginger-green chili paste.'
        },
        {
          stepNum: 3,
          title: 'Slow Corn Roasting',
          instruction: 'Roast grated corn with turmeric for 10-12 minutes until fragrant and non-sticky.'
        },
        {
          stepNum: 4,
          title: 'Milk Simmering',
          instruction: 'Pour in milk, cover, and simmer gently until absorbed into a luscious, creamy texture.'
        },
        {
          stepNum: 5,
          title: 'Garnish & Citrus Finish',
          instruction: 'Top with grated coconut, cilantro, and a burst of fresh lemon juice.'
        }
      ],
      servingSuggestion: {
        text: 'Serve piping hot in small bowls. Generously top each serving with freshly grated coconut and chopped coriander. Squeeze a fresh lemon wedge over the top right before eating to cut through the richness of the ghee and milk.',
        imageUrl: '/images/mp/bhutte_ka_kees.jpg'
      },
      vessel: 'Heavy Cast Iron Kadhai',
      cookingFat: 'Pure Desi Ghee',
      season: 'Monsoon & Winter Harvest',
      flavorProfile: ['Creamy Sweet Corn', 'Rich Cow Ghee', 'Fresh Coconut Flakes', 'Lime Acidity'],
      dietary: 'Vegetarian',
      imageUrl: '/images/mp/bhutte_ka_kees.jpg',
      phonetic: 'BHOOT-tay kah KEES'
    },
    dishes: [
      {
        id: 'mp-indrahar',
        name: 'Indrahar',
        nativeName: 'इंद्रहार',
        englishSubtitle: 'Bagheli Mixed Lentil Cubes',
        tagline: 'Ancient Baghelkhand delicacy of fermented five-lentil steamed cakes crisped to golden perfection.',
        description: 'Native to the Baghelkhand region (Rewa, Satna), Indrahar is a protein-dense delicacy made from an overnight-fermented batter of five different lentils. It can be eaten as a dry savory snack or simmered in a rich, yogurt-based gravy.',
        preservationStatus: 'Endangered Oral Tradition',
        microOrigin: 'Baghelkhand (Rewa & Satna)',
        culturalSignificance: 'Celebrated in ancient Baghelkhand lore as "food fit for Indra (King of Gods)". Combining five lentils (chana, toor, moong, urad, masoor) and allowing wild yeast fermentation, it represents nutrient-dense rural hearth wisdom.',
        servesCount: 'Serves 4–6',
        approxPrepTime: '45 min (+ overnight soaking & fermentation)',
        ingredientSections: [
          {
            title: 'Panchmel Dal Blend',
            items: [
              { item: 'Chana dal (bengal gram)', amount: '1/4 cup' },
              { item: 'Toor dal (pigeon pea)', amount: '1/4 cup' },
              { item: 'Moong dal (green gram)', amount: '1/4 cup' },
              { item: 'Urad dal (black gram)', amount: '1/4 cup' },
              { item: 'Masoor dal (red lentil)', amount: '1/4 cup' }
            ]
          },
          {
            title: 'Aromatics & Spices',
            items: [
              { item: 'Green chilies', amount: '2-3' },
              { item: 'Ginger', amount: '1-inch piece' },
              { item: 'Garlic cloves', amount: '4' },
              { item: 'Turmeric powder', amount: '1/2 tsp' },
              { item: 'Asafoetida (hing)', amount: '1/4 tsp' },
              { item: 'Salt', amount: 'to taste' }
            ]
          },
          {
            title: 'Cooking & Frying',
            items: [
              { item: 'Oil', amount: 'for greasing & shallow/deep frying' }
            ]
          }
        ],
        ingredients: [
          { item: 'Panchmel mixed lentils (chana, toor, moong, urad, masoor)', amount: '1 1/4 cups total' },
          { item: 'Green chilies, ginger & garlic', amount: 'to taste' },
          { item: 'Turmeric, hing & salt', amount: 'to taste' },
          { item: 'Oil for frying', amount: 'as needed' }
        ],
        preparationSteps: [
          'Soak and grind: Wash all the lentils together and soak them in water overnight (or for at least 6-8 hours). Drain the water completely and grind them into a thick, slightly coarse paste along with ginger, garlic, and green chilies. Use minimal water.',
          'Ferment the batter: Stir in the turmeric, hing, and salt. Vigorously whisk the batter with your hands for 5 minutes to trap air. Cover and let it ferment in a warm place for 4 to 6 hours.',
          'Steam the lentil cake: Grease a flat steel plate (thali) with oil. Pour the fermented batter into the plate, spreading it evenly to about a 1-inch thickness. Place it in a steamer and steam for 15-20 minutes until a knife inserted comes out clean.',
          'Cut and fry: Allow the steamed cake to cool completely. Cut it into square or diamond-shaped pieces. Heat oil in a pan and shallow fry (or deep fry) the pieces on medium heat until they develop a crisp, golden-brown crust.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Soak & Coarse Grind',
            instruction: 'Soak five lentils overnight. Grind with ginger, garlic, and chilies into a thick paste.'
          },
          {
            stepNum: 2,
            title: 'Aeration & Ferment',
            instruction: 'Whisk vigorously to trap air. Ferment in a warm place for 4-6 hours for a spongy crumb.'
          },
          {
            stepNum: 3,
            title: 'Steam the Slab',
            instruction: 'Spread in a greased thali and steam for 15-20 minutes until fully set.'
          },
          {
            stepNum: 4,
            title: 'Cut & Crisp',
            instruction: 'Cut into diamonds and fry until deep golden brown and crunchy on the outside.'
          }
        ],
        servingSuggestion: {
          text: 'For a snack, serve the fried Indrahar hot with green mint chutney and a cup of chai. For a main course, drop the freshly fried cubes into a bubbling, spicy yogurt-and-tomato-based curry (Indrahar ki Kadhi) and serve with hot rotis or rice.',
          imageUrl: '/images/mp/indrahar.jpg'
        },
        vessel: 'Steamer Thali & Heavy Iron Kadhai',
        cookingFat: 'Cold-Pressed Mustard Oil or Ghee',
        season: 'Monsoon & Winter',
        flavorProfile: ['Nutty Lentil Medley', 'Wild Ferment Zing', 'Crisp Crust Soft Crumb', 'Spiced Kadhi Warmth'],
        dietary: 'Vegetarian',
        imageUrl: '/images/mp/indrahar.jpg'
      },
      {
        id: 'mp-bhutte-ka-kees',
        name: 'Bhutte Ka Kees',
        nativeName: 'भुट्टे का कीस',
        englishSubtitle: 'Spiced Grated Corn',
        tagline: 'Iconic Indore street food of slow-roasted grated desi corn simmered in milk, ghee, and coconut.',
        description: 'An iconic street food from the bustling Sarafa Bazaar in Indore, Malwa region. Bhutte means corn, and Kees means grated. It is a creamy, sweet, and spicy mash made by slow-roasting grated milky corn in ghee and simmering it in milk.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Sarafa Bazaar, Indore & Malwa Plateau',
        culturalSignificance: 'Born in the nocturnal jewelry street of Sarafa Bazaar, Indore, where night-time food vendors thrive. Traditional desi field corn on the cob is grated while still milky and cooked slowly with milk and ghee to achieve its melt-in-the-mouth texture.',
        servesCount: 'Serves 4',
        approxPrepTime: '30 min',
        ingredientSections: [
          {
            title: 'Fresh Corn & Dairy',
            items: [
              { item: 'Fresh corn on the cob', amount: '4 medium', note: 'grated' },
              { item: 'Milk', amount: '1 cup' },
              { item: 'Desi ghee', amount: '2 tbsp' }
            ]
          },
          {
            title: 'Tempering & Garnish',
            items: [
              { item: 'Mustard & cumin seeds', amount: '1 tsp each' },
              { item: 'Ginger-green chili paste', amount: '1 tbsp' },
              { item: 'Fresh grated coconut & lemon juice', amount: 'for garnish' }
            ]
          }
        ],
        ingredients: [
          { item: 'Fresh corn cobs, grated', amount: '4' },
          { item: 'Whole milk', amount: '1 cup' },
          { item: 'Desi ghee', amount: '2 tbsp' },
          { item: 'Mustard & cumin seeds', amount: '1 tsp each' },
          { item: 'Grated coconut and cilantro', amount: 'for garnish' }
        ],
        preparationSteps: [
          'Grate tender corn cobs.',
          'Heat ghee in a wok, crackle mustard and cumin seeds, and add ginger-chili paste.',
          'Roast grated corn with turmeric for 10-12 minutes until aromatic.',
          'Pour in milk, cover and simmer on low heat until absorbed and creamy.',
          'Stir in salt and sugar, then finish with coconut and lemon juice.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Grate & Roast',
            instruction: 'Grate fresh corn and roast in ghee with spices until aromatic.'
          },
          {
            stepNum: 2,
            title: 'Simmer in Milk',
            instruction: 'Simmer in whole milk until creamy, rich, and tender.'
          }
        ],
        servingSuggestion: {
          text: 'Serve hot topped with fresh grated coconut, coriander, and fresh lemon juice.',
          imageUrl: '/images/mp/bhutte_ka_kees.jpg'
        },
        vessel: 'Heavy Cast Iron Kadhai',
        cookingFat: 'Pure Desi Ghee',
        season: 'Monsoon & Winter',
        flavorProfile: ['Creamy Corn', 'Ghee Richness', 'Coconut & Lime'],
        dietary: 'Vegetarian',
        imageUrl: '/images/mp/bhutte_ka_kees.jpg'
      },
      {
        id: 'mp-garadu',
        name: 'Garadu',
        nativeName: 'गराडू चाट',
        englishSubtitle: 'Indore Winter Yam Chaat',
        tagline: 'Crispy double-fried purple yam tossed in tangy Indori Garadu Masala and fresh lime.',
        description: 'Garadu is a specific variety of purple yam (lesser yam) that hits the markets in Madhya Pradesh during peak winter. It is famously double-fried for an extreme crunch and tossed in a fiery, tangy spice blend known as Garadu Masala.',
        preservationStatus: 'Living Ritual',
        microOrigin: 'Indore & Ujjain Winter Bazaars',
        culturalSignificance: 'A beloved winter evening ritual across Malwa. The tubers are parboiled, given a primary gentle fry, sliced small, and then flash-fried at smoking temperature right when ordered. The unique spice mix with dry mango and black salt gives it irresistible punch.',
        servesCount: 'Serves 4',
        approxPrepTime: '25 min',
        ingredientSections: [
          {
            title: 'Tuber & Frying',
            items: [
              { item: 'Garadu (Yam)', amount: '500g' },
              { item: 'Oil', amount: 'for deep frying' }
            ]
          },
          {
            title: 'Indori Garadu Masala',
            items: [
              { item: 'Black salt', amount: '1 tsp' },
              { item: 'Roasted cumin powder', amount: '1 tsp' },
              { item: 'Black pepper powder', amount: '1/2 tsp' },
              { item: 'Dry mango powder (amchur)', amount: '1 tsp' },
              { item: 'Red chili powder', amount: '1 tsp' },
              { item: 'Coriander powder', amount: '1/2 tsp' }
            ]
          },
          {
            title: 'Finishing Touch',
            items: [
              { item: 'Fresh lemon', amount: '1', note: 'juiced right before eating' }
            ]
          }
        ],
        ingredients: [
          { item: 'Garadu (purple yam)', amount: '500g' },
          { item: 'Oil for deep frying', amount: 'as needed' },
          { item: 'Indori Garadu Masala (black salt, cumin, amchur, pepper, chili)', amount: '2 tbsp' },
          { item: 'Fresh lemon', amount: '1' }
        ],
        preparationSteps: [
          'Peel and parboil: Apply a little cooking oil to your hands before peeling (raw yam sap can cause severe skin itching). Peel the thick skin off the Garadu. Cut it into large, thick circular blocks. Boil or steam the blocks for 8-10 minutes until a knife pierces them with some resistance—do not overcook them into mush.',
          'The First Fry: Heat oil in a kadhai. Deep fry the large boiled blocks on medium heat until they form a light crust. Remove and let them cool.',
          'The Second Fry: Cut the cooled, fried blocks into smaller, bite-sized cubes. Heat the oil until very hot, and flash-fry the small cubes on high heat until they turn deep golden brown and exceptionally crispy. Drain on paper towels.',
          'Toss in spices: Transfer the piping-hot cubes directly into a large mixing bowl. Generously sprinkle the prepared Garadu Masala over them. Toss the bowl so the oil on the hot yams helps the dry spices cling to the crust.'
        ],
        stepDetails: [
          {
            stepNum: 1,
            title: 'Peel & Parboil',
            instruction: 'Oil hands, peel Garadu yam, cut into thick blocks, and parboil for 8-10 minutes.'
          },
          {
            stepNum: 2,
            title: 'First Fry (Crust Formation)',
            instruction: 'Deep fry parboiled blocks in medium-hot oil until a pale outer skin forms. Cool.'
          },
          {
            stepNum: 3,
            title: 'Second Flash Fry (Ultra Crunch)',
            instruction: 'Cut into bite-sized cubes and flash-fry in smoking oil until deeply golden and shatteringly crisp.'
          },
          {
            stepNum: 4,
            title: 'Garadu Masala Toss',
            instruction: 'Toss smoking hot yam in tangy Indori Garadu masala and generous squeeze of fresh lemon.'
          }
        ],
        servingSuggestion: {
          text: 'Serve immediately in paper cones or plates with toothpicks. Squeeze fresh lemon juice over the top just seconds before eating to activate the spices. It loses its legendary crunch if it sits for too long.',
          imageUrl: '/images/mp/garadu.jpg'
        },
        vessel: 'Deep Iron Kadhai & Wooden Toss Bowl',
        cookingFat: 'Groundnut Oil or Mustard Oil',
        season: 'Peak Winter (Dec – Feb)',
        flavorProfile: ['Extreme Crisp Crust', 'Fluffy Steamy Center', 'Tangy Amchur & Black Salt', 'Fiery Cumin'],
        dietary: 'Vegan',
        imageUrl: '/images/mp/garadu.jpg'
      }
    ]
  },
mz: {
    id: 'mz',
    name: 'Mizoram',
    nativeName: 'Mizoram',
    capital: 'Aizawl',
    region: 'North-East',
    historicalEra: 'Ancient Lushai Hills & Hearth Wisdom',
    culinaryPhilosophy: 'Hearth cooking infused with sa-um (fermented pork fat), woodsmoked meats (sa-rep), wild forest leaves (maian), and alkali filtrate (chingal) with zero commercial spices or oils.',
    heirloomVessels: ["Lushai Bamboo Steamer", "Carved Wood Pestle & Mortar", "Cast Iron Pot", "Split Bamboo Skewers"],
    signatureSpices: ["Sa-um (Fermented Pork Fat)", "Chingal (Wood Ash Filtrate)", "Bekang (Fermented Soybeans)", "Mizo Bird\u2019s Eye Chilli (Hmarchate)"],
    stapleGrains: ["Mizo Sticky Hill Rice", "Buhman Red Rice", "Corn"],
    representativeDish: {
      id: 'mz-maian-bai',
      name: 'Maian Bai',
      nativeName: 'Maian Bai',
      englishSubtitle: 'Mizo Pumpkin-Leaf Stew with Sa-um and Ash Filtrate',
      tagline: 'Tender pumpkin shoots and garden leaves boiled in pure mountain water with fermented pork fat and clear wood-ash alkali.',
      description: 'Bai is the most beloved dish of Mizoram: a one-pot boiled stew of leaves and vegetables, cooked without browning and without much fat. It can include meat, fish or bamboo shoot, and every household has its own version. Maian bai uses the tender leaves and shoots of the pumpkin plant. Its flavour comes from sa-um (fermented pork fat), or bekang (fermented soybean), and traditionally from chingal, a filtrate made by pouring water through ash. In cities, chingal has largely been replaced by cooking soda.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Lushai Hill Villages, Aizawl & Champhai',
      culturalSignificance: 'Aizawl homemaker Ramthianghlimi, author of a Mizo cookery book, makes bai almost every day and says the day never begins without it. Food in the Mizo hills has long been tied to scarcity. Mautam, the mass flowering of bamboo that brings a plague of rats and then famine, struck again in 1959 and pushed communities to organise relief, a movement that later became the Mizo National Front; researchers note that in famine times edible roots and leaves were eaten in place of scarce rice. Those who documented Mizo food processing conclude that most of it, from fermented pork fat to smoked leaves, exists to preserve seasonal food. A theology professor in Aizawl links the use of fermented soybean to the ancestors’ migration from Myanmar around the early 18th century. In the Hmar sub-clan of the northeast, bai is traditionally made hotter than elsewhere.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '20 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'pumpkin leaves and tender shoots (maian)', amount: '4 cups', note: 'cleaned, stringed and torn' },
            { item: 'snake gourd and 6–8 okra (lady’s finger)', amount: '1 small', note: 'optional' },
            { item: 'sa-um (fermented pork fat)', amount: '2 tbsp', note: 'or 2 tbsp bekang (fermented soybean) as the flavouring' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'chingal (ash filtrate) or a pinch of baking soda', amount: '1 tbsp' },
            { item: 'bird’s eye chilies', amount: '3–4', note: 'crushed' },
            { item: 'water', amount: '3 cups' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'pumpkin leaves and tender shoots (maian)', amount: '4 cups', note: 'cleaned, stringed and torn' },
        { item: 'snake gourd and 6–8 okra (lady’s finger)', amount: '1 small', note: 'optional' },
        { item: 'sa-um (fermented pork fat)', amount: '2 tbsp', note: 'or 2 tbsp bekang (fermented soybean) as the flavouring' },
        { item: 'chingal (ash filtrate) or a pinch of baking soda', amount: '1 tbsp' },
        { item: 'bird’s eye chilies', amount: '3–4', note: 'crushed' },
        { item: 'water', amount: '3 cups' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Pre-Boil the Water: Bring the water to a rolling boil in a pot.',
        'Add the Chingal: Stir in the ash filtrate (or soda) and salt. It lends a distinctive taste and keeps the greens green.',
        'Add the Vegetables: Add the snake gourd and okra, if using, and boil 4–5 minutes. Add the pumpkin leaves and shoots.',
        'Season and Finish: Stir in the sa-um (or bekang) and chilies and cook for another 5–6 minutes until the leaves are soft and the broth is lightly thickened. Do not brown any ingredient: bai is meant to be a pure, boiled stew.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Pre-Boil the Water',
          instruction: 'Bring the water to a rolling boil in a pot.'
        },
        {
          stepNum: 2,
          title: 'Add the Chingal',
          instruction: 'Stir in the ash filtrate (or soda) and salt. It lends a distinctive taste and keeps the greens green.'
        },
        {
          stepNum: 3,
          title: 'Add the Vegetables',
          instruction: 'Add the snake gourd and okra, if using, and boil 4–5 minutes. Add the pumpkin leaves and shoots.'
        },
        {
          stepNum: 4,
          title: 'Season and Finish',
          instruction: 'Stir in the sa-um (or bekang) and chilies and cook for another 5–6 minutes until the leaves are soft and the broth is lightly thickened. Do not brown any ingredient: bai is meant to be a pure, boiled stew.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot in a bowl with plenty of steamed rice. In Mizo homes it is as likely to be breakfast as dinner.',
        imageUrl: '/images/mz/maian_bai.jpg'
      },
      vessel: 'Heavy Cooking Pot',
      cookingFat: 'Zero-Oil (Sa-um / Fermented Fat Infusion)',
      season: 'Monsoon to Winter Tender Shoots',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/mz/maian_bai.jpg',
      phonetic: 'my-AHN BYE'
    },
    dishes: [
      {
      id: 'mz-maian-bai',
      name: 'Maian Bai',
      nativeName: 'Maian Bai',
      englishSubtitle: 'Mizo Pumpkin-Leaf Stew with Sa-um and Ash Filtrate',
      tagline: 'Tender pumpkin shoots and garden leaves boiled in pure mountain water with fermented pork fat and clear wood-ash alkali.',
      description: 'Bai is the most beloved dish of Mizoram: a one-pot boiled stew of leaves and vegetables, cooked without browning and without much fat. It can include meat, fish or bamboo shoot, and every household has its own version. Maian bai uses the tender leaves and shoots of the pumpkin plant. Its flavour comes from sa-um (fermented pork fat), or bekang (fermented soybean), and traditionally from chingal, a filtrate made by pouring water through ash. In cities, chingal has largely been replaced by cooking soda.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Lushai Hill Villages, Aizawl & Champhai',
      culturalSignificance: 'Aizawl homemaker Ramthianghlimi, author of a Mizo cookery book, makes bai almost every day and says the day never begins without it. Food in the Mizo hills has long been tied to scarcity. Mautam, the mass flowering of bamboo that brings a plague of rats and then famine, struck again in 1959 and pushed communities to organise relief, a movement that later became the Mizo National Front; researchers note that in famine times edible roots and leaves were eaten in place of scarce rice. Those who documented Mizo food processing conclude that most of it, from fermented pork fat to smoked leaves, exists to preserve seasonal food. A theology professor in Aizawl links the use of fermented soybean to the ancestors’ migration from Myanmar around the early 18th century. In the Hmar sub-clan of the northeast, bai is traditionally made hotter than elsewhere.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '20 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'pumpkin leaves and tender shoots (maian)', amount: '4 cups', note: 'cleaned, stringed and torn' },
            { item: 'snake gourd and 6–8 okra (lady’s finger)', amount: '1 small', note: 'optional' },
            { item: 'sa-um (fermented pork fat)', amount: '2 tbsp', note: 'or 2 tbsp bekang (fermented soybean) as the flavouring' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'chingal (ash filtrate) or a pinch of baking soda', amount: '1 tbsp' },
            { item: 'bird’s eye chilies', amount: '3–4', note: 'crushed' },
            { item: 'water', amount: '3 cups' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'pumpkin leaves and tender shoots (maian)', amount: '4 cups', note: 'cleaned, stringed and torn' },
        { item: 'snake gourd and 6–8 okra (lady’s finger)', amount: '1 small', note: 'optional' },
        { item: 'sa-um (fermented pork fat)', amount: '2 tbsp', note: 'or 2 tbsp bekang (fermented soybean) as the flavouring' },
        { item: 'chingal (ash filtrate) or a pinch of baking soda', amount: '1 tbsp' },
        { item: 'bird’s eye chilies', amount: '3–4', note: 'crushed' },
        { item: 'water', amount: '3 cups' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Pre-Boil the Water: Bring the water to a rolling boil in a pot.',
        'Add the Chingal: Stir in the ash filtrate (or soda) and salt. It lends a distinctive taste and keeps the greens green.',
        'Add the Vegetables: Add the snake gourd and okra, if using, and boil 4–5 minutes. Add the pumpkin leaves and shoots.',
        'Season and Finish: Stir in the sa-um (or bekang) and chilies and cook for another 5–6 minutes until the leaves are soft and the broth is lightly thickened. Do not brown any ingredient: bai is meant to be a pure, boiled stew.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Pre-Boil the Water',
          instruction: 'Bring the water to a rolling boil in a pot.'
        },
        {
          stepNum: 2,
          title: 'Add the Chingal',
          instruction: 'Stir in the ash filtrate (or soda) and salt. It lends a distinctive taste and keeps the greens green.'
        },
        {
          stepNum: 3,
          title: 'Add the Vegetables',
          instruction: 'Add the snake gourd and okra, if using, and boil 4–5 minutes. Add the pumpkin leaves and shoots.'
        },
        {
          stepNum: 4,
          title: 'Season and Finish',
          instruction: 'Stir in the sa-um (or bekang) and chilies and cook for another 5–6 minutes until the leaves are soft and the broth is lightly thickened. Do not brown any ingredient: bai is meant to be a pure, boiled stew.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot in a bowl with plenty of steamed rice. In Mizo homes it is as likely to be breakfast as dinner.',
        imageUrl: '/images/mz/maian_bai.jpg'
      },
      vessel: 'Heavy Cooking Pot',
      cookingFat: 'Zero-Oil (Sa-um / Fermented Fat Infusion)',
      season: 'Monsoon to Winter Tender Shoots',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/mz/maian_bai.jpg',
      phonetic: 'my-AHN BYE'
      },
      {
      id: 'mz-sawhchiar',
      name: 'Sawhchiar',
      nativeName: 'Sawhchiar',
      englishSubtitle: 'Mizo Feast Porridge of Rice with Chicken or Pork',
      tagline: 'Celebratory community feast porridge of short-grain rice boiled slowly in rich chicken or pork broth until creamy.',
      description: 'Sawhchiar (also written sawchair and, for chicken, arsa buhchiar) is a thick, semi-solid rice porridge cooked with chicken or pork, seasoned with onions, garlic and chilies, and sometimes finished with a little ash filtrate for taste and colour. It is gentle and warming, a dish for the sick and the celebrating alike.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Mizo Community Feasts (Kut Festivals)',
      culturalSignificance: 'In the Mizo home, sawhchiar marks occasions. According to the first scientific record of Mizo traditional foods, collected from senior citizens in villages and towns across the state, it is an important item in any Mizo feast, and it may be safe to say that feasts are incomplete without it. The recipe itself is beautifully simple: meat cooked in a vessel, rice added, the whole stirred until the dish turns semi-solid. Like most Mizo food knowledge, it has been passed down by word of mouth, and each household adjusts the meat and seasoning to its own taste.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '50 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'chicken (bone-in) or pork with some fat', amount: '400 g', note: 'cut into pieces' },
            { item: 'short-grain rice', amount: '1 cup', note: 'washed' },
            { item: 'water', amount: '5–6 cups' },
            { item: 'onion', amount: '1', note: 'chopped' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'garlic', amount: '4–5 cloves', note: 'crushed' },
            { item: 'bird’s eye or green chilies', amount: '2–3' },
            { item: '1-inch ginger', amount: 'as needed', note: 'crushed (optional)' },
            { item: 'A pinch of baking soda or 1 tsp chingal (optional)', amount: 'as needed' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'chicken (bone-in) or pork with some fat', amount: '400 g', note: 'cut into pieces' },
        { item: 'short-grain rice', amount: '1 cup', note: 'washed' },
        { item: 'water', amount: '5–6 cups' },
        { item: 'onion', amount: '1', note: 'chopped' },
        { item: 'garlic', amount: '4–5 cloves', note: 'crushed' },
        { item: 'bird’s eye or green chilies', amount: '2–3' },
        { item: '1-inch ginger', amount: 'as needed', note: 'crushed (optional)' },
        { item: 'A pinch of baking soda or 1 tsp chingal (optional)', amount: 'as needed' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Cook the Meat: Put the meat in a heavy pot with the water, onion, garlic, ginger and salt. Bring to a boil and cook for 15–20 minutes until the meat is nearly tender.',
        'Add the Rice: Add the washed rice. Stir and cook over medium heat.',
        'Cook to Semi-Solid: Cook for 20–25 minutes, stirring frequently and adding hot water if needed, until the rice breaks down and the whole dish is thick and semi-solid.',
        'Season: Add the chilies, and the pinch of soda or chingal if using, and cook 3 minutes more.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Cook the Meat',
          instruction: 'Put the meat in a heavy pot with the water, onion, garlic, ginger and salt. Bring to a boil and cook for 15–20 minutes until the meat is nearly tender.'
        },
        {
          stepNum: 2,
          title: 'Add the Rice',
          instruction: 'Add the washed rice. Stir and cook over medium heat.'
        },
        {
          stepNum: 3,
          title: 'Cook to Semi-Solid',
          instruction: 'Cook for 20–25 minutes, stirring frequently and adding hot water if needed, until the rice breaks down and the whole dish is thick and semi-solid.'
        },
        {
          stepNum: 4,
          title: 'Season',
          instruction: 'Add the chilies, and the pinch of soda or chingal if using, and cook 3 minutes more.'
        }
      ],
      servingSuggestion: {
        text: 'Serve steaming hot with a side of chilli chutney. Strictly speaking, no Mizo feast table is complete without it.',
        imageUrl: '/images/mz/sawhchiar.jpg'
      },
      vessel: 'Large Heavy Cast Iron Cauldron',
      cookingFat: 'Zero-Oil (Natural Meat Broth)',
      season: 'Chapchar Kut & Community Celebrations',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/mz/sawhchiar.jpg',
      phonetic: 'SAW-chee-ar'
      },
      {
      id: 'mz-chhangban',
      name: 'Chhangban',
      nativeName: 'Chhangban',
      englishSubtitle: 'Steamed Sticky Rice Bread in Leaf',
      tagline: 'Sticky hill rice stoneground into dough, wrapped tightly in wild phrynium leaves, and steamed to fragrant chewiness.',
      description: 'Chhangban is the Mizo steamed sticky-rice bread or cake, made from finely ground sticky rice, shaped into balls and wrapped in leaves of hnahthial (Phrynium) before being cooked in a large pot. Served as a lunch, it is soft, sticky and chewy, with a faint leafy perfume.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Mizo Hearth Kitchens & Village Gatherings',
      culturalSignificance: 'The traditional preparation is slow, social work. Rice (in several local varieties such as kawnglawng, buhtawi and fazu) is pounded in a wooden mortar to unhusk it, soaked for an hour or a whole night, dried in the sun, then ground again until very fine and sieved. Mizo cooks say the finer the flour, the stickier the bread. It is a food documented from Mizo elders, who pass such techniques down verbally; the grinding, sieving and wrapping are taught by doing.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '40 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'sticky (glutinous) rice', amount: '2 cups', note: 'soaked 1 hour to overnight' },
            { item: 'Warm water', amount: 'as needed', note: 'as needed' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'A pinch of salt', amount: 'as needed' },
            { item: 'Phrynium (hnahthial) leaves or banana leaves', amount: 'as needed', note: 'wiped and softened over a flame' }
          ]
        }
      ],
      ingredients: [
        { item: 'sticky (glutinous) rice', amount: '2 cups', note: 'soaked 1 hour to overnight' },
        { item: 'Warm water', amount: 'as needed', note: 'as needed' },
        { item: 'A pinch of salt', amount: 'as needed' },
        { item: 'Phrynium (hnahthial) leaves or banana leaves', amount: 'as needed', note: 'wiped and softened over a flame' }
      ],
      preparationSteps: [
        'Dry and Grind: Drain the soaked rice, spread it on a cloth to dry in the sun or air for 1–2 hours, then grind to a very fine flour. Sieve it; the finer the flour, the stickier the finished bread.',
        'Make the Dough: Mix the flour with the salt and just enough warm water to form a soft, sticky dough. Shape into balls or short logs.',
        'Wrap: Wrap each portion tightly in leaf and tie or fold to seal.',
        'Steam: Cook the parcels in a large pot over simmering water (or a steamer) for 35–40 minutes until firm and glossy.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Dry and Grind',
          instruction: 'Drain the soaked rice, spread it on a cloth to dry in the sun or air for 1–2 hours, then grind to a very fine flour. Sieve it; the finer the flour, the stickier the finished bread.'
        },
        {
          stepNum: 2,
          title: 'Make the Dough',
          instruction: 'Mix the flour with the salt and just enough warm water to form a soft, sticky dough. Shape into balls or short logs.'
        },
        {
          stepNum: 3,
          title: 'Wrap',
          instruction: 'Wrap each portion tightly in leaf and tie or fold to seal.'
        },
        {
          stepNum: 4,
          title: 'Steam',
          instruction: 'Cook the parcels in a large pot over simmering water (or a steamer) for 35–40 minutes until firm and glossy.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm, unwrapped at the table, with bai, smoked meat or a simple chutney.',
        imageUrl: '/images/mz/chhangban.jpg'
      },
      vessel: 'Traditional Steamer / Bamboo Steamer',
      cookingFat: 'Zero-Oil (Steamed in Leaves)',
      season: 'Winter Feasts & Afternoon Tea',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Vegetarian',
      imageUrl: '/images/mz/chhangban.jpg',
      phonetic: 'CHAHNG-bahn'
      },
      {
      id: 'mz-sa-rep',
      name: 'Sa-rep / Vawksa Rep',
      nativeName: 'Sa-rep / Vawksa Rep',
      englishSubtitle: 'Bamboo-Skewered Smoked Pork',
      tagline: 'Strips of pork belly skewered on split bamboo and gently smoked above the kitchen hearth fire for weeks.',
      description: 'Sa-rep is the Mizo word for smoked meat, and the best known version is vawksa rep, smoked pork. Strips of meat are threaded onto sharpened bamboo sticks and held over the fire so that only the smoke and the heat act on it, not the flame. The meat is not barbecued but slowly smoked and dried so that it can be kept, and is later boiled into stews or cooked with bamboo shoot.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Mizo Hearth Racks (Rap-chung)',
      culturalSignificance: 'Refrigeration was unknown, so fire and sun did the work of preservation. The same method was used for barking deer, wild boar, sambar and many other forest animals, and the length of smoking depended on when the meat would be eaten. Mizo researchers note that most traditional food processing, from fermented fats to smoked leaves, exists for preservation, because vegetables and meat were seasonal and storage was poor. Like the rest of Mizo food knowledge, it is preserved mainly by word of mouth.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '35 min (excl. smoking)',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'pork belly with plenty of fat', amount: '500 g', note: 'cut into long strips' },
            { item: 'salt', amount: '1 tsp' },
            { item: 'Pointed bamboo skewers or sticks', amount: 'as needed' },
            { item: 'Hardwood fire or low smoky heat', amount: 'as needed' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'To cook the smoked pork:', amount: 'as needed' },
            { item: 'bamboo shoot', amount: '½ cup', note: 'sliced' },
            { item: 'bird’s eye chilies', amount: '3' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'water', amount: '2–3 cups' }
          ]
        }
      ],
      ingredients: [
        { item: 'pork belly with plenty of fat', amount: '500 g', note: 'cut into long strips' },
        { item: 'salt', amount: '1 tsp' },
        { item: 'Pointed bamboo skewers or sticks', amount: 'as needed' },
        { item: 'Hardwood fire or low smoky heat', amount: 'as needed' },
        { item: 'To cook the smoked pork:', amount: 'as needed' },
        { item: 'bamboo shoot', amount: '½ cup', note: 'sliced' },
        { item: 'bird’s eye chilies', amount: '3' },
        { item: 'Salt', amount: 'to taste' },
        { item: 'water', amount: '2–3 cups' }
      ],
      preparationSteps: [
        'Salt and Skewer: Rub the pork strips with salt and thread them onto bamboo skewers.',
        'Smoke: Suspend the skewers above a low, smoky fire (or in a smoker) so that only smoke and gentle heat reach the meat. Smoke for 6–8 hours for pork that will be cooked soon, or for a day or more if it is to be stored.',
        'Simmer: To serve, cut the smoked pork into pieces and simmer in the water with the bamboo shoot, chilies and a little salt for 25–30 minutes until tender.',
        'Rest: Take off the heat and let the stew sit 5 minutes.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Salt and Skewer',
          instruction: 'Rub the pork strips with salt and thread them onto bamboo skewers.'
        },
        {
          stepNum: 2,
          title: 'Smoke',
          instruction: 'Suspend the skewers above a low, smoky fire (or in a smoker) so that only smoke and gentle heat reach the meat. Smoke for 6–8 hours for pork that will be cooked soon, or for a day or more if it is to be stored.'
        },
        {
          stepNum: 3,
          title: 'Simmer',
          instruction: 'To serve, cut the smoked pork into pieces and simmer in the water with the bamboo shoot, chilies and a little salt for 25–30 minutes until tender.'
        },
        {
          stepNum: 4,
          title: 'Rest',
          instruction: 'Take off the heat and let the stew sit 5 minutes.'
        }
      ],
      servingSuggestion: {
        text: 'Serve with steamed rice and a bowl of bai. The smoked flavour is the heart of the Mizo table.',
        imageUrl: '/images/mz/sa_rep.jpg'
      },
      vessel: 'Hearth Smoke-Rack (Rap) over Fireplace',
      cookingFat: 'Zero-Oil (Natural Wood Smoke Cured)',
      season: 'Year-Round Fireplace Smoking Tradition',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/mz/sa_rep.jpg',
      phonetic: 'SAH-rep VOWK-sah REP'
      },
      {
      id: 'mz-tam-um',
      name: 'Tam-um',
      nativeName: 'Tam-um',
      englishSubtitle: 'Fermented Mustard Greens',
      tagline: 'Sun-wilted mountain mustard greens pounded in wooden mortars and naturally lacto-fermented into pungent tangy relish.',
      description: 'Tam-um is fermented mustard, one of the most popular foods of the Mizo. Mustard greens (tampui) are washed, pounded in a wooden mortar, wrapped in a large leaf (changel, a Phrynium) and placed near the fireplace for two to three days. The pounded mustard is then dried, fried and ground with salt and chilli, giving a sharp, sour, deeply savoury condiment.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Mizo Hill Hamlets across Chin-Lushai Hills',
      culturalSignificance: 'The squeezed-out liquid, called tam-er, is not thrown away: it too can be eaten. Very little of the plant is wasted. Fermented mustard is a family of foods across the northeast (Manipur has its own mustard-leaf ferments), and the Mizo version shows how kitchens here have long relied on leaves, smoke and ferment to hold the seasons. Like other Mizo food-processing techniques, it has been handed down by word of mouth, with each household adjusting the salt and chilli.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '30 min (excl. fermentation)',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'fresh mustard greens (tampui)', amount: '500 g', note: 'washed very well' },
            { item: 'Salt', amount: 'to taste' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'dried red chilies', amount: '2–3', note: 'ground' },
            { item: 'Large Phrynium or banana leaf for wrapping', amount: 'as needed' },
            { item: 'oil for frying', amount: '1 tsp' }
          ]
        }
      ],
      ingredients: [
        { item: 'fresh mustard greens (tampui)', amount: '500 g', note: 'washed very well' },
        { item: 'Salt', amount: 'to taste' },
        { item: 'dried red chilies', amount: '2–3', note: 'ground' },
        { item: 'Large Phrynium or banana leaf for wrapping', amount: 'as needed' },
        { item: 'oil for frying', amount: '1 tsp' }
      ],
      preparationSteps: [
        'Pound: Pound the washed mustard greens in a mortar to a coarse, wet mass.',
        'Wrap and Ferment: Wrap the mass in the leaf and place it near the fireplace or another warm spot for 2–3 days, until it smells sour and sharp.',
        'Press: Unwrap, squeeze out the liquid (tam-er) and save it for use in soups if you like.',
        'Dry and Fry: Dry the pounded mustard in the sun or over gentle heat. Fry in a little oil and grind with salt and chilli to a coarse mix.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Pound',
          instruction: 'Pound the washed mustard greens in a mortar to a coarse, wet mass.'
        },
        {
          stepNum: 2,
          title: 'Wrap and Ferment',
          instruction: 'Wrap the mass in the leaf and place it near the fireplace or another warm spot for 2–3 days, until it smells sour and sharp.'
        },
        {
          stepNum: 3,
          title: 'Press',
          instruction: 'Unwrap, squeeze out the liquid (tam-er) and save it for use in soups if you like.'
        },
        {
          stepNum: 4,
          title: 'Dry and Fry',
          instruction: 'Dry the pounded mustard in the sun or over gentle heat. Fry in a little oil and grind with salt and chilli to a coarse mix.'
        }
      ],
      servingSuggestion: {
        text: 'Serve in small amounts as a side with rice, or stir a spoonful into bai or soup.',
        imageUrl: '/images/mz/tam_um.jpg'
      },
      vessel: 'Wooden Mortar & Pestle (Chhumbul)',
      cookingFat: 'Minimal Mustard Oil (1 tsp) / Zero-Oil',
      season: 'Winter Mustard Harvest & Preserves',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Vegetarian',
      imageUrl: '/images/mz/tam_um.jpg',
      phonetic: 'TAHM-oom'
      }
    ]
  },
tr: {
    id: 'tr',
    name: 'Tripura',
    nativeName: 'ত্রিপুরা',
    capital: 'Agartala',
    region: 'North-East',
    historicalEra: 'Twipra Kingdom & Indigenous Borok Traditions',
    culinaryPhilosophy: 'Indigenous tribal cooking centered on pungent Berma (fermented puntius fish), fragrant wild bamboo shoot (muya), flame-charred meats, and herbal alkali preparations (chakhwi) cooked in green bamboo hollows.',
    heirloomVessels: ["Wasung (Green Bamboo Culm)", "Khol (Stone Mortar & Pestle)", "Earthen Handi", "Chakhwi Khok (Ash Filter Basket)"],
    signatureSpices: ["Berma (Fermented River Fish)", "Muya (Tender Forest Bamboo Shoot)", "Tripuri Green Chilies", "Khar (Wood Ash Filtrate)", "Siping (Roasted Sesame)"],
    stapleGrains: ["Mami Rice (Tripuri Sticky Rice)", "Aromatic Hill Rice"],
    representativeDish: {
      id: 'tr-wasung-gudok',
      name: 'Wasung Gudok',
      nativeName: 'ওয়াসুং গুদক',
      englishSubtitle: 'Bamboo-Tube Fermented Fish and Vegetable Mash',
      tagline: 'Forest vegetables and pungent Berma fermented fish sealed in green bamboo and charcoal-roasted to fragrant perfection.',
      description: 'Gudok (also written godok) is a Tripuri dish of mixed vegetables and fermented dried fish, cooked inside a freshly cut bamboo tube (wasung) over open flame. It is shared across Tripuri, Reang and Mog households, and the bamboo gives it its smoky, resinous aroma. The vegetables are mashed together with chilies and onions into a soft, fiery, deeply savoury mix.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Tripuri Tribal Villages, Baramura & Dhalai Hills',
      culturalSignificance: 'Rajib Debbarma, a young Tripuri writer, learned of Wasung Gudok from his grandparents, who told him countless stories of how delicious food cooked in bamboo tastes. When he finally tried it himself, he writes, they were not exaggerating. The method belongs to communities who live near forests and practise jhum cultivation: the hollow bamboo is both pot and lunchbox, used to carry meals to the field. With the arrival of gas cooking, the dish is now made mostly in winter, when people light wood fires. Debbarma adds that the things available in earlier days have become rare, so it is hard to prepare the dish exactly as the ancestors did.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '45 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'fresh bamboo tube', amount: '1', note: 'one end closed at a node and cleaned with a cloth' },
            { item: 'A handful of small dried fish (puthi) and 2–3 tbsp berma (fermented fish)', amount: 'as needed' },
            { item: 'mixed vegetables', amount: '2 cups', note: 'cut small: radish, potato, tender bamboo shoot, mushrooms' },
            { item: 'green chilies', amount: '4–5 small' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'onion', amount: '1 small', note: 'chopped (added after cooking)' },
            { item: 'Turmeric leaves or banana leaves', amount: 'as needed', note: 'to wrap and to seal' },
            { item: 'water', amount: '¼ cup' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'fresh bamboo tube', amount: '1', note: 'one end closed at a node and cleaned with a cloth' },
        { item: 'A handful of small dried fish (puthi) and 2–3 tbsp berma (fermented fish)', amount: 'as needed' },
        { item: 'mixed vegetables', amount: '2 cups', note: 'cut small: radish, potato, tender bamboo shoot, mushrooms' },
        { item: 'green chilies', amount: '4–5 small' },
        { item: 'onion', amount: '1 small', note: 'chopped (added after cooking)' },
        { item: 'Turmeric leaves or banana leaves', amount: 'as needed', note: 'to wrap and to seal' },
        { item: 'water', amount: '¼ cup' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Fill the Bamboo: Wrap the vegetables, dried fish and berma in turmeric leaves, or layer them directly, and fill the bamboo tube. Add salt, chilies and a little water.',
        'Seal: Plug the open end with turmeric or banana leaves.',
        'Cook over Fire: Set the bamboo over a wood fire, turning it regularly, for about 25 minutes. (At home, a covered pot over very low heat or foil parcels over embers will give a similar result.)',
        'Mash: Unload the cooked mix into a bowl, add the chopped onion and crush it all together with a bamboo stem or a pestle. Adjust the salt.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Fill the Bamboo',
          instruction: 'Wrap the vegetables, dried fish and berma in turmeric leaves, or layer them directly, and fill the bamboo tube. Add salt, chilies and a little water.'
        },
        {
          stepNum: 2,
          title: 'Seal',
          instruction: 'Plug the open end with turmeric or banana leaves.'
        },
        {
          stepNum: 3,
          title: 'Cook over Fire',
          instruction: 'Set the bamboo over a wood fire, turning it regularly, for about 25 minutes. (At home, a covered pot over very low heat or foil parcels over embers will give a similar result.)'
        },
        {
          stepNum: 4,
          title: 'Mash',
          instruction: 'Unload the cooked mix into a bowl, add the chopped onion and crush it all together with a bamboo stem or a pestle. Adjust the salt.'
        }
      ],
      servingSuggestion: {
        text: 'Serve with steamed rice, as a pungent side to a plain vegetable meal. Bamboo-cooked dishes are traditionally best on cold evenings.',
        imageUrl: '/images/tr/wasung_gudok.jpg'
      },
      vessel: 'Green Bamboo Culm (Wasung) over Open Woodfire',
      cookingFat: 'Zero-Oil',
      season: 'Forest Foraging Season & Hearth Dinners',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/tr/wasung_gudok.jpg',
      phonetic: 'wah-SOONG GOO-dok'
    },
    dishes: [
      {
      id: 'tr-wasung-gudok',
      name: 'Wasung Gudok',
      nativeName: 'ওয়াসুং গুদক',
      englishSubtitle: 'Bamboo-Tube Fermented Fish and Vegetable Mash',
      tagline: 'Forest vegetables and pungent Berma fermented fish sealed in green bamboo and charcoal-roasted to fragrant perfection.',
      description: 'Gudok (also written godok) is a Tripuri dish of mixed vegetables and fermented dried fish, cooked inside a freshly cut bamboo tube (wasung) over open flame. It is shared across Tripuri, Reang and Mog households, and the bamboo gives it its smoky, resinous aroma. The vegetables are mashed together with chilies and onions into a soft, fiery, deeply savoury mix.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Tripuri Tribal Villages, Baramura & Dhalai Hills',
      culturalSignificance: 'Rajib Debbarma, a young Tripuri writer, learned of Wasung Gudok from his grandparents, who told him countless stories of how delicious food cooked in bamboo tastes. When he finally tried it himself, he writes, they were not exaggerating. The method belongs to communities who live near forests and practise jhum cultivation: the hollow bamboo is both pot and lunchbox, used to carry meals to the field. With the arrival of gas cooking, the dish is now made mostly in winter, when people light wood fires. Debbarma adds that the things available in earlier days have become rare, so it is hard to prepare the dish exactly as the ancestors did.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '45 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'fresh bamboo tube', amount: '1', note: 'one end closed at a node and cleaned with a cloth' },
            { item: 'A handful of small dried fish (puthi) and 2–3 tbsp berma (fermented fish)', amount: 'as needed' },
            { item: 'mixed vegetables', amount: '2 cups', note: 'cut small: radish, potato, tender bamboo shoot, mushrooms' },
            { item: 'green chilies', amount: '4–5 small' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'onion', amount: '1 small', note: 'chopped (added after cooking)' },
            { item: 'Turmeric leaves or banana leaves', amount: 'as needed', note: 'to wrap and to seal' },
            { item: 'water', amount: '¼ cup' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'fresh bamboo tube', amount: '1', note: 'one end closed at a node and cleaned with a cloth' },
        { item: 'A handful of small dried fish (puthi) and 2–3 tbsp berma (fermented fish)', amount: 'as needed' },
        { item: 'mixed vegetables', amount: '2 cups', note: 'cut small: radish, potato, tender bamboo shoot, mushrooms' },
        { item: 'green chilies', amount: '4–5 small' },
        { item: 'onion', amount: '1 small', note: 'chopped (added after cooking)' },
        { item: 'Turmeric leaves or banana leaves', amount: 'as needed', note: 'to wrap and to seal' },
        { item: 'water', amount: '¼ cup' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Fill the Bamboo: Wrap the vegetables, dried fish and berma in turmeric leaves, or layer them directly, and fill the bamboo tube. Add salt, chilies and a little water.',
        'Seal: Plug the open end with turmeric or banana leaves.',
        'Cook over Fire: Set the bamboo over a wood fire, turning it regularly, for about 25 minutes. (At home, a covered pot over very low heat or foil parcels over embers will give a similar result.)',
        'Mash: Unload the cooked mix into a bowl, add the chopped onion and crush it all together with a bamboo stem or a pestle. Adjust the salt.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Fill the Bamboo',
          instruction: 'Wrap the vegetables, dried fish and berma in turmeric leaves, or layer them directly, and fill the bamboo tube. Add salt, chilies and a little water.'
        },
        {
          stepNum: 2,
          title: 'Seal',
          instruction: 'Plug the open end with turmeric or banana leaves.'
        },
        {
          stepNum: 3,
          title: 'Cook over Fire',
          instruction: 'Set the bamboo over a wood fire, turning it regularly, for about 25 minutes. (At home, a covered pot over very low heat or foil parcels over embers will give a similar result.)'
        },
        {
          stepNum: 4,
          title: 'Mash',
          instruction: 'Unload the cooked mix into a bowl, add the chopped onion and crush it all together with a bamboo stem or a pestle. Adjust the salt.'
        }
      ],
      servingSuggestion: {
        text: 'Serve with steamed rice, as a pungent side to a plain vegetable meal. Bamboo-cooked dishes are traditionally best on cold evenings.',
        imageUrl: '/images/tr/wasung_gudok.jpg'
      },
      vessel: 'Green Bamboo Culm (Wasung) over Open Woodfire',
      cookingFat: 'Zero-Oil',
      season: 'Forest Foraging Season & Hearth Dinners',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/tr/wasung_gudok.jpg',
      phonetic: 'wah-SOONG GOO-dok'
      },
      {
      id: 'tr-awaan-bangwi',
      name: 'Awaan Bangwi',
      nativeName: 'আওয়ান বাংগুই',
      englishSubtitle: 'Leaf-Steamed Sticky Rice Parcels',
      tagline: 'Gently spiced fragrant sticky rice with pork cracklings and wild ginger, wrapped in aromatic lairu leaves and slow-steamed.',
      description: 'Awaan bangwi (also called awaan bwthai) is the most loved sticky-rice dish of the Tripuri people. Soaked sticky rice (mami mairum) is mixed with sliced onion, peanuts, grated ginger and carrot, wrapped tightly in phrynium (lairu) or banana leaves, and steamed. It is savoury, chewy and fragrant with leaf, and can be eaten alone.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Tripuri Borok Kitchens, Agartala & Gomati',
      culturalSignificance: 'Tripuri writers describe sticky rice as a part of identity, and say no Tripuri festival is complete without awaan. Most people eat it with wahan mosdeng, the pounded spicy pork salad. The labour of pounding, sieving and wrapping is done mostly by women, who have kept the recipes alive and passed them down the generations; for many tribal women, making awaan is also a source of income. A sweeter version replaces the onion and ginger with ghee-fried cashews and raisins, and there are many sister dishes: awaan sokrang, steamed in a perforated earthen pot sealed with wet clay, awaan fanswi, rolled dumplings with coconut and sugar made at Haangrai (Makar Sankranti) and Hojagiri, and awaan belep, a fried pancake of coarse sticky rice flour.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '50 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'sticky rice', amount: '2 cups', note: 'soaked overnight and drained' },
            { item: 'onion', amount: '1 medium', note: 'thinly sliced' },
            { item: 'raw peanuts', amount: '¼ cup' },
            { item: '1-inch ginger', amount: 'as needed', note: 'grated' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'carrot', amount: '1 small', note: 'grated' },
            { item: 'oil or ghee', amount: '1 tbsp' },
            { item: 'Salt', amount: 'to taste' },
            { item: 'Phrynium (lairu) or banana leaves', amount: 'as needed', note: 'softened over a flame, for wrapping' }
          ]
        }
      ],
      ingredients: [
        { item: 'sticky rice', amount: '2 cups', note: 'soaked overnight and drained' },
        { item: 'onion', amount: '1 medium', note: 'thinly sliced' },
        { item: 'raw peanuts', amount: '¼ cup' },
        { item: '1-inch ginger', amount: 'as needed', note: 'grated' },
        { item: 'carrot', amount: '1 small', note: 'grated' },
        { item: 'oil or ghee', amount: '1 tbsp' },
        { item: 'Salt', amount: 'to taste' },
        { item: 'Phrynium (lairu) or banana leaves', amount: 'as needed', note: 'softened over a flame, for wrapping' }
      ],
      preparationSteps: [
        'Mix: In a bowl, combine the drained rice with the onion, peanuts, ginger, carrot, salt and oil, mixing well with your hands.',
        'Wrap: Place a portion on each leaf and fold tightly into a parcel or cone, tying with thread or a strip of leaf.',
        'Steam: Steam over boiling water for 40–45 minutes until the rice is cooked through and sticky.',
        'Rest: Let the parcels rest for 5 minutes before opening.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Mix',
          instruction: 'In a bowl, combine the drained rice with the onion, peanuts, ginger, carrot, salt and oil, mixing well with your hands.'
        },
        {
          stepNum: 2,
          title: 'Wrap',
          instruction: 'Place a portion on each leaf and fold tightly into a parcel or cone, tying with thread or a strip of leaf.'
        },
        {
          stepNum: 3,
          title: 'Steam',
          instruction: 'Steam over boiling water for 40–45 minutes until the rice is cooked through and sticky.'
        },
        {
          stepNum: 4,
          title: 'Rest',
          instruction: 'Let the parcels rest for 5 minutes before opening.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm in its leaf, with wahan mosdeng or a berma chutney, especially for winter breakfasts.',
        imageUrl: '/images/tr/awaan_bangwi.jpg'
      },
      vessel: 'Lairu / Banana Leaf Wrap in Steamer',
      cookingFat: 'Minimal Oil / Ghee (1 tbsp)',
      season: 'Garia Puja, Kharchi Festival & Celebrations',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/tr/awaan_bangwi.jpg',
      phonetic: 'ah-WAHN BAHNG-wee'
      },
      {
      id: 'tr-wahan-mosdeng',
      name: 'Wahan Mosdeng',
      nativeName: 'ওয়াহান মসদেং',
      englishSubtitle: 'Ancient Tripuri Pounded Pork Salad',
      tagline: 'Charred, tender pork tossed with fire-roasted chillies, garlic, sliced shallots, and fresh forest coriander.',
      description: 'Wahan mosdeng (“pork” and “ground chilli” in Kokborok, sometimes called pork bharta) is a pounded pork salad marinated with garlic, ginger, turmeric, charred green chilies and mustard oil. It is hot, smoky and sharp, and it is served with sticky rice or flatbread.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Ancient Twipra Tribal Feasts',
      culturalSignificance: 'Tripura’s tourism department describes wahan mosdeng as an ancient dish, and the old story is that it began with wild boar, before domestic pork, chicken or beef came into the pot. Tripuri families pair it with awaan bangwi, and Tripuri writers say it is the usual partner of sticky rice at festivals and in winter breakfasts. From wild boar to the pork, chicken and beef of today, the dish has kept its name and its fire, and it has made its way into the fast-food scene of Tripura.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '30 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'pork (with some fat)', amount: '300 g', note: 'cut into pieces' },
            { item: 'green chilies', amount: '5–6', note: 'roasted until charred' },
            { item: 'garlic', amount: '5 cloves', note: 'roasted' },
            { item: '1-inch ginger', amount: 'as needed', note: 'grated' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'turmeric', amount: '½ tsp' },
            { item: 'mustard oil', amount: '1½ tbsp' },
            { item: 'Juice of ½ lime (optional)', amount: 'as needed' },
            { item: 'A few coriander leaves', amount: 'as needed' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'pork (with some fat)', amount: '300 g', note: 'cut into pieces' },
        { item: 'green chilies', amount: '5–6', note: 'roasted until charred' },
        { item: 'garlic', amount: '5 cloves', note: 'roasted' },
        { item: '1-inch ginger', amount: 'as needed', note: 'grated' },
        { item: 'turmeric', amount: '½ tsp' },
        { item: 'mustard oil', amount: '1½ tbsp' },
        { item: 'Juice of ½ lime (optional)', amount: 'as needed' },
        { item: 'A few coriander leaves', amount: 'as needed' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Cook the Pork: Boil the pork with turmeric and salt for 20–25 minutes until tender, then roast the pieces on a dry pan or over a flame until browned at the edges.',
        'Char the Aromatics: Roast the chilies and garlic until blackened in spots, then peel the garlic.',
        'Pound: In a mortar, pound the chilies, garlic and ginger together, then add the pork and pound to a coarse, shredded mix.',
        'Finish: Stir in the mustard oil, lime and coriander. Taste and adjust the salt.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Cook the Pork',
          instruction: 'Boil the pork with turmeric and salt for 20–25 minutes until tender, then roast the pieces on a dry pan or over a flame until browned at the edges.'
        },
        {
          stepNum: 2,
          title: 'Char the Aromatics',
          instruction: 'Roast the chilies and garlic until blackened in spots, then peel the garlic.'
        },
        {
          stepNum: 3,
          title: 'Pound',
          instruction: 'In a mortar, pound the chilies, garlic and ginger together, then add the pork and pound to a coarse, shredded mix.'
        },
        {
          stepNum: 4,
          title: 'Finish',
          instruction: 'Stir in the mustard oil, lime and coriander. Taste and adjust the salt.'
        }
      ],
      servingSuggestion: {
        text: 'Serve with awaan bangwi (sticky rice), rotis or plain steamed rice.',
        imageUrl: '/images/tr/wahan_mosdeng.jpg'
      },
      vessel: 'Stone Mortar (Khol) and Wood Pestle',
      cookingFat: 'Zero-Oil (Char-Grilled Pork Fat)',
      season: 'Celebratory Gatherings & Daily Feast',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/tr/wahan_mosdeng.jpg',
      phonetic: 'wah-HAHN mos-DENG'
      },
      {
      id: 'tr-muya-awandru',
      name: 'Muya Awandru',
      nativeName: 'মুয়া আওয়ান্দ্রু',
      englishSubtitle: 'Bamboo Shoot, Berma and Rice-Flour Curry',
      tagline: 'Tender forest bamboo shoots simmered in an earthy broth infused with roasted Berma and thickened with stoneground rice flour.',
      description: 'Muya awandru (muya means bamboo shoot in Kokborok) is a thin, rice-flour-thickened bamboo shoot curry flavoured with berma, the fermented small fish that anchors Tripuri cooking. It uses very little oil, and may include coriander, green chilies and sometimes snails.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Indigenous Borok Settlements across Tripura',
      culturalSignificance: 'Awandru is a special-occasion dish among the Tiprasa (Borok) people, and muya awandru is cooked for celebrations. Bamboo shoots are gathered from the surrounding forest between May and September, and the dishes that use them (chakhwi, awandru, gudok, mosdeng and more) have been the foundation of Tripuri food for generations. Tripuri houses (gairing) were traditionally built from bamboo too, so the plant is at once home, tool and dinner. Berma itself is fermented dried small fish (puthi); only small fish are fermented.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '30 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'bamboo shoot', amount: '1 cup', note: 'thinly sliced' },
            { item: 'berma (fermented fish)', amount: '2 tbsp', note: 'roasted and crushed' },
            { item: 'rice flour', amount: '2 tbsp' },
            { item: 'green chilies', amount: '3–4', note: 'slit' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'coriander leaves', amount: '2 tbsp', note: 'chopped' },
            { item: 'oil (optional)', amount: '1 tsp' },
            { item: 'water', amount: '2½ cups' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'bamboo shoot', amount: '1 cup', note: 'thinly sliced' },
        { item: 'berma (fermented fish)', amount: '2 tbsp', note: 'roasted and crushed' },
        { item: 'rice flour', amount: '2 tbsp' },
        { item: 'green chilies', amount: '3–4', note: 'slit' },
        { item: 'coriander leaves', amount: '2 tbsp', note: 'chopped' },
        { item: 'oil (optional)', amount: '1 tsp' },
        { item: 'water', amount: '2½ cups' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Boil the Shoots: Boil the sliced bamboo shoot in plenty of water for 10–15 minutes, then drain, to remove bitterness.',
        'Build the Broth: In a pot, bring the 2½ cups water to a boil with the berma and chilies.',
        'Add the Shoots: Add the bamboo shoot and simmer for 10 minutes.',
        'Thicken: Mix the rice flour with a little cold water and stir into the pot. Cook for 5 minutes until lightly thickened, then add salt and the coriander.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Boil the Shoots',
          instruction: 'Boil the sliced bamboo shoot in plenty of water for 10–15 minutes, then drain, to remove bitterness.'
        },
        {
          stepNum: 2,
          title: 'Build the Broth',
          instruction: 'In a pot, bring the 2½ cups water to a boil with the berma and chilies.'
        },
        {
          stepNum: 3,
          title: 'Add the Shoots',
          instruction: 'Add the bamboo shoot and simmer for 10 minutes.'
        },
        {
          stepNum: 4,
          title: 'Thicken',
          instruction: 'Mix the rice flour with a little cold water and stir into the pot. Cook for 5 minutes until lightly thickened, then add salt and the coriander.'
        }
      ],
      servingSuggestion: {
        text: 'Serve with plain rice. If using snails, add them cleaned and boiled to the broth in step three.',
        imageUrl: '/images/tr/muya_awandru.jpg'
      },
      vessel: 'Clay Handi',
      cookingFat: 'Zero-Oil (Optional 1 tsp)',
      season: 'Bamboo Shoot Monsoon Season',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/tr/muya_awandru.jpg',
      phonetic: 'MOO-yah ah-wahn-DROO'
      },
      {
      id: 'tr-chakhwi',
      name: 'Chakhwi',
      nativeName: 'চাকহুই',
      englishSubtitle: 'Tripuri Ash-Water and Rice-Powder Vegetable Curry',
      tagline: 'Nutritious banana stem and bamboo shoots stewed in natural alkaline wood-ash water, gently bound with silky rice cream.',
      description: 'Chakhwi is a Tripuri curry in which vegetables are cooked in a mildly alkaline water made from ash, then thickened with rice powder (aayong) and finished with lemon leaves or crushed sesame (siping). Tender banana stem, leaves and bamboo shoot are common additions, and some cooks add pork.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Tiprasa Royal and Tribal Hamlets',
      culturalSignificance: 'Chakhwi was once cooked only by the Tiprasa community, and in villages it is prepared for weddings and social functions, where it is offered to guests. Traditionally, you cannot make it without a chakhwi khok, a bamboo filtering basket in which ash, charcoal and hot water are filtered so that the liquid that drips out, the chakhwi, can be used as the cooking base. The process is called tolwi chakhwi songma. A Tripuri writer who documents the craft hopes that families will at least keep a chakhwi khok at home, so that the next generation will see the skill and craftsmanship its elders have preserved.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '35 min',
      ingredientSections: [
        {
          title: 'Core Tribal Ingredients',
          items: [
            { item: 'water', amount: '3 cups' },
            { item: 'clear ash filtrate (or ½ tsp edible baking soda)', amount: '1 tbsp' },
            { item: 'dried or green chilies', amount: '2–3', note: 'made into a paste' },
            { item: 'chopped vegetables: tender banana stem', amount: '2 cups', note: 'leafy greens, bamboo shoot' }
          ]
        },
        {
          title: 'Aromatics & Indigenous Seasonings',
          items: [
            { item: 'rice powder (aayong)', amount: '2 tbsp', note: 'mixed in ¼ cup water' },
            { item: 'lemon leaves', amount: '2–3', note: 'or 1 tbsp crushed roasted sesame (siping)' },
            { item: 'pork (optional)', amount: '100 g' },
            { item: 'Salt', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'water', amount: '3 cups' },
        { item: 'clear ash filtrate (or ½ tsp edible baking soda)', amount: '1 tbsp' },
        { item: 'dried or green chilies', amount: '2–3', note: 'made into a paste' },
        { item: 'chopped vegetables: tender banana stem', amount: '2 cups', note: 'leafy greens, bamboo shoot' },
        { item: 'rice powder (aayong)', amount: '2 tbsp', note: 'mixed in ¼ cup water' },
        { item: 'lemon leaves', amount: '2–3', note: 'or 1 tbsp crushed roasted sesame (siping)' },
        { item: 'pork (optional)', amount: '100 g' },
        { item: 'Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Prepare the Water: Bring the water to a boil with the ash filtrate (or soda) and salt. Traditionally this is filtered through a chakhwi khok.',
        'Add the Chili: Stir in the chili paste and add the pork, if using, cooking until half done.',
        'Add the Vegetables: Add the chopped vegetables and boil 8–10 minutes until tender.',
        'Thicken and Finish: Stir in the rice powder mixture and cook 3–4 minutes more until lightly thickened. Take off the heat and add the lemon leaves or sesame.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Prepare the Water',
          instruction: 'Bring the water to a boil with the ash filtrate (or soda) and salt. Traditionally this is filtered through a chakhwi khok.'
        },
        {
          stepNum: 2,
          title: 'Add the Chili',
          instruction: 'Stir in the chili paste and add the pork, if using, cooking until half done.'
        },
        {
          stepNum: 3,
          title: 'Add the Vegetables',
          instruction: 'Add the chopped vegetables and boil 8–10 minutes until tender.'
        },
        {
          stepNum: 4,
          title: 'Thicken and Finish',
          instruction: 'Stir in the rice powder mixture and cook 3–4 minutes more until lightly thickened. Take off the heat and add the lemon leaves or sesame.'
        }
      ],
      servingSuggestion: {
        text: 'Serve with plain rice at celebrations or at home, ideally in a small group, as it was always meant to be cooked for guests.',
        imageUrl: '/images/tr/chakhwi.jpg'
      },
      vessel: 'Chakhwi Khok & Clay Pot',
      cookingFat: 'Zero-Oil',
      season: 'Tiprasa Weddings & Community Functions',
      flavorProfile: ['Pungent Indigenous Umami', 'Woodsmoke Savory', 'Deep Hearth Warmth'],
      dietary: 'Vegetarian',
      imageUrl: '/images/tr/chakhwi.jpg',
      phonetic: 'CHAHK-hwee'
      }
    ]
  },
  ar: {
    id: 'ar',
    name: 'Arunachal Pradesh',
    nativeName: 'অৰুণাচল প্ৰদেশ',
    capital: 'Itanagar',
    region: 'North-East',
    historicalEra: 'Himalayan Tribal Valleys, Monpa & Tani Heritage',
    culinaryPhilosophy: 'High-altitude mountain gastronomy: foraged Sichuan pepper (thingye), handmade buckwheat noodles, zero-oil poultry stews with banana blossoms and fermented bamboo shoots (ekung), air-cured meats with Bhut Jolokia, and aged yak chhurpi risotto.',
    heirloomVessels: ["Shibdra (Wooden Noodle Press)", "Thong (Wood Mortar & Pestle)", "Earthen Stew Pots"],
    signatureSpices: ["Thingye / Yer (Sichuan Pepper)", "Ekung / Eup (Fermented Bamboo Shoot)", "Bhut Jolokia", "Pehak (Fermented Soybean)"],
    stapleGrains: ["Buckwheat Flour", "Highland Red Rice", "Finger Millet"],
    representativeDish: {
      id: 'ar-tumpuluk-chok',
      name: 'Tumpuluk Chok',
      nativeName: 'Tumpuluk Chok',
      englishSubtitle: 'Charred Cherry Tomato & Sichuan Pepper Mash',
      tagline: 'Wild local cherry tomatoes charred over glowing coals, stone-pounded with tingling Sichuan pepper and spring onions.',
      description: 'A bright, palate-awakening staple from the highland kitchens of Arunachal Pradesh (cherished particularly within Monpa and neighboring Himalayan communities), Tumpuluk Chok is a rustic chutney-mash centered on minimalist firecraft. Making use of sweet, acidic local wild cherry tomatoes, the dish extracts deep warmth and complexity from native Sichuan pepper (yer / thingye), which imparts an unmistakable citrusy tingle and numbing vibrance. Light, oil-free, and sharp, it functions as an essential condiment designed to enliven hearty mountain starches and roasted meats.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Monpa Highland Settlements, Tawang & West Kameng',
      culturalSignificance: 'The elemental table condiment of high-altitude Himalayan hearths, combining blistered wild tomatoes with wild-foraged numbing peppercorns.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Charred Mountain Produce',
          items: [
            { item: 'Fresh wild cherry tomatoes', amount: '250 g', note: 'charred over open flame until skins blister' },
            { item: 'Spring onion stalks', amount: '3–4', note: 'finely chopped, both green and white parts' }
          ]
        },
        {
          title: 'Highland Numbing Spices',
          items: [
            { item: 'Whole Sichuan pepper (thingye / yer)', amount: '1 tsp', note: 'lightly toasted' },
            { item: 'Whole dried red chilies', amount: '2–3', note: 'fire-charred' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh cherry tomatoes', amount: '250 g' },
        { item: 'Spring onions', amount: '3–4 stalks' },
        { item: 'Sichuan pepper (thingye / yer)', amount: '1 tsp', note: 'toasted' },
        { item: 'Dried red chilies', amount: '2–3' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Heat a dry cast-iron skillet or hold the whole dried red chilies and cherry tomatoes over an open flame until their skins blister, char, and soften. (Alternatively, blister them dry in a skillet over high heat until the tomato skins burst).',
        'In a traditional wooden or stone mortar, crush the toasted Sichuan peppercorns, roasted red chilies, and salt into a coarse, fragrant powder.',
        'Drop the charred, blistered cherry tomatoes into the mortar while still warm. Gently pound and mash them with the pestle so their sweet, tart juices burst out and marry with the citrusy, numbing pepper and smoky chili bits.',
        'Fold in the freshly chopped spring onions, gently pressing them with the pestle to release their crisp allium sweetness into the tart mash.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Char the Produce',
          instruction: 'Blister cherry tomatoes and dried red chilies over open flames until charred, smoky, and soft.'
        },
        {
          stepNum: 2,
          title: 'Pound the Pepper Base',
          instruction: 'Crush toasted Sichuan peppercorns, roasted chilies, and salt in a stone mortar into a coarse aromatic powder.'
        },
        {
          stepNum: 3,
          title: 'Mash Blistered Tomatoes',
          instruction: 'Drop warm charred tomatoes into mortar, pestle-mashing gently to release tart juices into the numbing pepper.'
        },
        {
          stepNum: 4,
          title: 'Fold Crisp Spring Onions',
          instruction: 'Fold in chopped spring onions, lightly crushing to release sweet allium juices.'
        }
      ],
      servingSuggestion: {
        text: 'Serve immediately at room temperature alongside red rice, boiled meat dishes, or warm buckwheat pancakes.',
        imageUrl: '/images/ar/tumpuluk_chok.jpg'
      },
      vessel: 'Wooden Mortar & Pestle (Thong)',
      cookingFat: 'Zero-Oil (Fire-Charred)',
      season: 'All Seasons / Mountain Table Relish',
      flavorProfile: ["Citrusy Numbing Sichuan Pepper Tingle", "Smoky Charred Tomato Sweet-Acid", "Fiery Roasted Red Chili", "Crisp Spring Onion Freshness"],
      dietary: 'Vegan',
      imageUrl: '/images/ar/tumpuluk_chok.jpg',
      phonetic: 'toom-poo-LOOK CHOK'
    },
    dishes: [
      {
      id: 'ar-tumpuluk-chok',
      name: 'Tumpuluk Chok',
      nativeName: 'Tumpuluk Chok',
      englishSubtitle: 'Charred Cherry Tomato & Sichuan Pepper Mash',
      tagline: 'Wild local cherry tomatoes charred over glowing coals, stone-pounded with tingling Sichuan pepper and spring onions.',
      description: 'A bright, palate-awakening staple from the highland kitchens of Arunachal Pradesh (cherished particularly within Monpa and neighboring Himalayan communities), Tumpuluk Chok is a rustic chutney-mash centered on minimalist firecraft. Making use of sweet, acidic local wild cherry tomatoes, the dish extracts deep warmth and complexity from native Sichuan pepper (yer / thingye), which imparts an unmistakable citrusy tingle and numbing vibrance. Light, oil-free, and sharp, it functions as an essential condiment designed to enliven hearty mountain starches and roasted meats.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Monpa Highland Settlements, Tawang & West Kameng',
      culturalSignificance: 'The elemental table condiment of high-altitude Himalayan hearths, combining blistered wild tomatoes with wild-foraged numbing peppercorns.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Charred Mountain Produce',
          items: [
            { item: 'Fresh wild cherry tomatoes', amount: '250 g', note: 'charred over open flame until skins blister' },
            { item: 'Spring onion stalks', amount: '3–4', note: 'finely chopped, both green and white parts' }
          ]
        },
        {
          title: 'Highland Numbing Spices',
          items: [
            { item: 'Whole Sichuan pepper (thingye / yer)', amount: '1 tsp', note: 'lightly toasted' },
            { item: 'Whole dried red chilies', amount: '2–3', note: 'fire-charred' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fresh cherry tomatoes', amount: '250 g' },
        { item: 'Spring onions', amount: '3–4 stalks' },
        { item: 'Sichuan pepper (thingye / yer)', amount: '1 tsp', note: 'toasted' },
        { item: 'Dried red chilies', amount: '2–3' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Heat a dry cast-iron skillet or hold the whole dried red chilies and cherry tomatoes over an open flame until their skins blister, char, and soften. (Alternatively, blister them dry in a skillet over high heat until the tomato skins burst).',
        'In a traditional wooden or stone mortar, crush the toasted Sichuan peppercorns, roasted red chilies, and salt into a coarse, fragrant powder.',
        'Drop the charred, blistered cherry tomatoes into the mortar while still warm. Gently pound and mash them with the pestle so their sweet, tart juices burst out and marry with the citrusy, numbing pepper and smoky chili bits.',
        'Fold in the freshly chopped spring onions, gently pressing them with the pestle to release their crisp allium sweetness into the tart mash.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Char the Produce',
          instruction: 'Blister cherry tomatoes and dried red chilies over open flames until charred, smoky, and soft.'
        },
        {
          stepNum: 2,
          title: 'Pound the Pepper Base',
          instruction: 'Crush toasted Sichuan peppercorns, roasted chilies, and salt in a stone mortar into a coarse aromatic powder.'
        },
        {
          stepNum: 3,
          title: 'Mash Blistered Tomatoes',
          instruction: 'Drop warm charred tomatoes into mortar, pestle-mashing gently to release tart juices into the numbing pepper.'
        },
        {
          stepNum: 4,
          title: 'Fold Crisp Spring Onions',
          instruction: 'Fold in chopped spring onions, lightly crushing to release sweet allium juices.'
        }
      ],
      servingSuggestion: {
        text: 'Serve immediately at room temperature alongside red rice, boiled meat dishes, or warm buckwheat pancakes.',
        imageUrl: '/images/ar/tumpuluk_chok.jpg'
      },
      vessel: 'Wooden Mortar & Pestle (Thong)',
      cookingFat: 'Zero-Oil (Fire-Charred)',
      season: 'All Seasons / Mountain Table Relish',
      flavorProfile: ["Citrusy Numbing Sichuan Pepper Tingle", "Smoky Charred Tomato Sweet-Acid", "Fiery Roasted Red Chili", "Crisp Spring Onion Freshness"],
      dietary: 'Vegan',
      imageUrl: '/images/ar/tumpuluk_chok.jpg',
      phonetic: 'toom-poo-LOOK CHOK'
      },
      {
      id: 'ar-puta',
      name: 'Puta',
      nativeName: 'Puta',
      englishSubtitle: 'Buckwheat Noodles with Fermented Soybeans & Chives',
      tagline: 'Handmade rustic cold-climate buckwheat noodles tossed in fresh yak butter with fermented soybeans, garlic chives, and chilies.',
      description: 'Deeply rooted in the high-altitude culinary traditions of Arunachal Pradesh—most notably among the Monpa community of Tawang and West Kameng—Puta is a celebrated heirloom noodle preparation made from cold-climate buckwheat (buckwheat flour). Naturally gluten-free, earthy, and nutty, the freshly pressed noodles are tossed with fermented soybeans (pehak / chhurpi variations), wild mountain garlic chives, dried chilies, and rich churned butter. Hearty and warming against freezing winds, it is a quintessential representation of highland self-reliance.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Monpa Highland Valleys, Tawang & West Kameng',
      culturalSignificance: 'The celebratory mountain staple of Monpa alpine feasts and Losar New Year gatherings, handmade using wooden noodle presses.',
      servesCount: 'Yield: 3–4 servings',
      approxPrepTime: '30 min',
      ingredientSections: [
        {
          title: 'Handmade Buckwheat Noodles',
          items: [
            { item: 'Pure buckwheat flour', amount: '2 cups', note: 'for fresh noodles, or 250 g dry buckwheat noodles' },
            { item: 'Warm water', amount: 'as needed', note: 'to knead firm dough' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        },
        {
          title: 'Ferments, Butter & Mountain Alliums',
          items: [
            { item: 'Fermented soybeans (pehak)', amount: '2 tbsp' },
            { item: 'Fresh wild mountain garlic chives', amount: '1 cup', note: 'chopped into 1-inch ribbons' },
            { item: 'Fresh yak butter or dairy butter', amount: '2 tbsp' },
            { item: 'Medium onion & garlic cloves', amount: '1 sliced onion, 4–5 cloves minced garlic' },
            { item: 'Whole dried red chilies', amount: '2', note: 'broken' }
          ]
        }
      ],
      ingredients: [
        { item: 'Buckwheat flour (fresh noodles)', amount: '2 cups' },
        { item: 'Fermented soybeans (pehak)', amount: '2 tbsp' },
        { item: 'Mountain garlic chives', amount: '1 cup' },
        { item: 'Fresh yak butter or churned butter', amount: '2 tbsp' },
        { item: 'Onion & garlic', amount: '1 onion, 4–5 cloves garlic' },
        { item: 'Dried red chilies', amount: '2' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'If making fresh, knead the buckwheat flour with warm water into a firm, smooth dough. Press through a traditional wooden noodle press (shibdra) directly into a pot of rolling, boiling salted water. Cook for 2 to 3 minutes until they float to the surface, drain gently, and rinse in cold water to keep strands distinct. (If using dry buckwheat noodles, boil until tender-firm and drain).',
        'Melt the butter in a wide pan or wok over medium heat. Add the broken dried red chilies and minced garlic, sautéing for barely 30 seconds until aromatic and fragrant.',
        'Slide in the sliced onions and cook for 2 to 3 minutes until translucent. Stir in the fermented soybeans, breaking up any clumps with the spatula so the savory, umami notes infuse into the warm butter.',
        'Add the drained buckwheat noodles and chopped garlic chives to the pan. Season with salt. Toss everything vigorously on medium-high heat for 2 minutes until the noodles glisten with melted butter and the chives just soften while retaining their bright green crunch.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Press and Boil Noodles',
          instruction: 'Knead buckwheat dough, press through a wooden shibdra into boiling water 2–3 min until floating, drain and rinse.'
        },
        {
          stepNum: 2,
          title: 'Temper the Yak Butter',
          instruction: 'Melt churned butter in a wok; sizzle broken dry red chilies and minced garlic for 30 seconds.'
        },
        {
          stepNum: 3,
          title: 'Bloom Fermented Soybeans',
          instruction: 'Sauté sliced onions translucent, mash in fermented soybeans (pehak) to release rich umami notes into warm fat.'
        },
        {
          stepNum: 4,
          title: 'Toss with Garlic Chives',
          instruction: 'Toss buckwheat noodles and green garlic chives on medium-high heat 2 min until glistening and coated in butter.'
        }
      ],
      servingSuggestion: {
        text: 'Serve piping hot in deep wooden bowls, enjoyed on its own as a wholesome comfort meal on crisp alpine evenings.',
        imageUrl: '/images/ar/puta.jpg'
      },
      vessel: 'Wooden Noodle Press (Shibdra) & Cast Iron Wok',
      cookingFat: 'Fresh Churned Yak Butter or Pure Butter',
      season: 'Winter & Losar New Year Festivals',
      flavorProfile: ["Earthy Nutty Buckwheat Chew", "Deep Umami Fermented Soybeans", "Rich Mountain Butter Coat", "Pungent Fresh Garlic Chives"],
      dietary: 'Vegetarian',
      imageUrl: '/images/ar/puta.jpg',
      phonetic: 'POO-tah'
      },
      {
      id: 'ar-papuk',
      name: 'Papuk',
      nativeName: 'Papuk',
      englishSubtitle: 'Braised Chicken with Banana Flower & Fermented Bamboo Shoot',
      tagline: 'Tender country chicken slow-braised with shredded banana blossoms, fermented bamboo shoot, and wild mountain herbs.',
      description: 'A prized culinary classic from the indigenous tribes of Arunachal Pradesh (especially celebrated among the Nyishi and Adi communities), Papuk showcases the brilliant pairing of poultry with wild, foraged elements. Centered around tender country chicken braised alongside cleaned banana blossom petals (kera phool), this slow-cooked stew draws its soul from pungent fermented bamboo shoot (ekung or eup). Simmered without heavy oils or powdered spice mixes, the naturally sweet, savory chicken juices permeate the floral bitterness of the banana flower, accented by biting hill chilies and wild regional herbs.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Nyishi & Adi Tribal Settlements, Subansiri & Siang River Valleys',
      culturalSignificance: 'An ancestral forest feast prepared for community celebrations, showcasing indigenous zero-oil poultry braising in wild botanicals.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '40 min',
      ingredientSections: [
        {
          title: 'Country Chicken & Wild Blossom',
          items: [
            { item: 'Country chicken', amount: '500 g', note: 'cut into small bone-in curry pieces' },
            { item: 'Banana blossom / flower (kera phool)', amount: '1 medium', note: 'outer bracts removed, tender heart shredded' }
          ]
        },
        {
          title: 'Fermented Shoots & Forest Aromatics',
          items: [
            { item: 'Fermented bamboo shoot (ekung or eup)', amount: '2–3 tbsp' },
            { item: 'Whole dried red chilies', amount: '3–4' },
            { item: 'Garlic cloves & ginger', amount: '4–5 cloves garlic, 1-inch knob pounded ginger' },
            { item: 'Local tribal herbs (wild coriander / maan dhania)', amount: '1 small bunch', note: 'roughly torn' },
            { item: 'Salt & water', amount: 'salt to taste, 1 to 1.5 cups water' }
          ]
        }
      ],
      ingredients: [
        { item: 'Country chicken (bone-in)', amount: '500 g' },
        { item: 'Banana flower heart (shredded)', amount: '1 medium' },
        { item: 'Fermented bamboo shoot (ekung / eup)', amount: '2–3 tbsp' },
        { item: 'Dried red chilies', amount: '3–4' },
        { item: 'Garlic & ginger', amount: '4–5 cloves garlic, 1-inch knob ginger' },
        { item: 'Wild coriander / maan dhania', amount: '1 small bunch' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Peel away the tough, dark reddish outer bracts until you reach the pale cream, tender inner florets and heart. Finely shred the core, soaking immediately in water with a pinch of salt to prevent discoloration. Drain and squeeze well before cooking.',
        'In a traditional heavy pot or earthenware vessel, combine the cleaned country chicken pieces, shredded banana blossom, crushed garlic, pounded ginger, and fermented bamboo shoot.',
        'Break the dried red chilies into the pot and season generously with salt. Add about 1 to 1.5 cups of water. Set the pot over a medium flame and bring it to a rolling boil.',
        'Cover tightly, reduce the heat to low, and let the chicken cook in the steam and broth for 25 to 30 minutes. The banana flower will melt down into a tender, earthy base while absorbing the pungency of the fermented bamboo shoots.',
        'Once the chicken is completely tender and the broth has reduced to a rich, cohesive, aromatic stew, scatter the wild local herbs across the top. Cover for 2 minutes off the heat to lock in the herbal oils.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Shred Banana Flower',
          instruction: 'Strip dark outer bracts, finely shred pale tender heart, and soak in salted water to prevent oxidation.'
        },
        {
          stepNum: 2,
          title: 'Pot the Ingredients',
          instruction: 'Combine country chicken, banana blossom, fermented bamboo shoot, garlic, and ginger in a clay vessel.'
        },
        {
          stepNum: 3,
          title: 'Bring to Boil',
          instruction: 'Add broken dry chilies, salt, and 1.5 cups water; bring to a vigorous rolling boil.'
        },
        {
          stepNum: 4,
          title: 'Slow Steam-Braise',
          instruction: 'Cover tightly, simmer on low 25–30 min as chicken tenderizes and banana flower absorbs tangy bamboo shoot.'
        },
        {
          stepNum: 5,
          title: 'Wild Herb Finish',
          instruction: 'Scatter torn maan dhania (wild coriander) across the hot stew; rest covered 2 min to infuse.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm with boiled local hill rice, relishing the deep umami notes and tart-sour aroma characteristic of northeastern hearth cooking.',
        imageUrl: '/images/ar/papuk.jpg'
      },
      vessel: 'Earthenware Pot or Heavy Iron Cauldron',
      cookingFat: 'Zero-Oil (Natural Chicken Juices)',
      season: 'Monsoon to Winter Forest Harvests',
      flavorProfile: ["Tart Pungent Bamboo Shoot Acidity", "Subtle Floral Banana Blossom Bitterness", "Rich Country Chicken Savory", "Citrusy Wild Coriander Herb"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/ar/papuk.jpg',
      phonetic: 'PAH-pook'
      },
      {
      id: 'ar-lukter',
      name: 'Lukter',
      nativeName: 'Lukter / Lutker',
      englishSubtitle: 'Pounded Dry Meat Flakes with Bhut Jolokia',
      tagline: 'Wispy strands of sun-dried smoked meat pounded in a mortar with charred ghost pepper (Bhut Jolokia), roasted garlic, and ginger.',
      description: 'Crafted for long journeys and cold alpine winters, Lukter (or Lutker) is an intensely savory, fiery meat relish from Arunachal Pradesh. Built around air-dried or wood-smoked meat (traditionally beef, mithun, or pork), the meat is first roasted over open coals or simmered until tender, shredded into fine, wispy strands, and then pounded in a mortar with crushed flakes of the legendary ghost pepper (Bhut Jolokia). With its deep, concentrated smokiness and piercing heat, a mere spoonful of Lukter provides a potent savory foil to plain, unseasoned starch.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Arunachal Highland Trails & Alpine Settlements',
      culturalSignificance: 'The ultimate trail nourishment for high-altitude hunting and trading journeys across Himalayan passes, packed with long-preserved protein.',
      servesCount: 'Yield: 6–8 condiment portions',
      approxPrepTime: '20 min',
      ingredientSections: [
        {
          title: 'Smoked Dried Meat',
          items: [
            { item: 'Sun-dried or wood-smoked meat (pork, beef, or mutton)', amount: '200 g', note: 'tenderized and shredded into fine wispy fibers' }
          ]
        },
        {
          title: 'Fire-Charred Ghost Pepper & Aromatics',
          items: [
            { item: 'Ghost peppers (Bhut Jolokia / Raja Mircha)', amount: '1–2', note: 'fresh or dried, charred over open flame and crushed' },
            { item: 'Garlic cloves', amount: '5–6', note: 'roasted or raw' },
            { item: 'Fresh ginger', amount: '1-inch knob', note: 'bruised' },
            { item: 'Mustard oil', amount: '1 tsp', note: 'optional, for binding' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Sun-dried / smoked meat', amount: '200 g' },
        { item: 'Bhut Jolokia (Ghost pepper)', amount: '1–2', note: 'charred' },
        { item: 'Garlic cloves', amount: '5–6' },
        { item: 'Fresh ginger', amount: '1-inch knob' },
        { item: 'Mustard oil (optional)', amount: '1 tsp' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Roast the dried meat briefly over glowing charcoal or boil it in a cup of water until pliable. Using a wooden pestle or your hands, pound and shred the meat along the grain into wispy, fine fibers.',
        'Hold the Bhut Jolokia and garlic cloves over a low flame using tongs until the skin blisters, blackens lightly, and releases a powerful smoky aroma.',
        'Place the shredded meat, charred ghost pepper, garlic, ginger, and salt into a deep wooden or stone mortar. Pound rhythmically with a heavy pestle until the meat shreds fuse with the hot chili paste, taking on an even, brick-red, fibrous texture.',
        'Drizzle with a few drops of raw mustard oil (if using) and toss lightly to coat the strands.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Tenderize and Shred',
          instruction: 'Roast dried meat over charcoal or boil until pliable; shred along grain into fine wispy strands.'
        },
        {
          stepNum: 2,
          title: 'Char the Ghost Pepper',
          instruction: 'Blister Bhut Jolokia and garlic cloves over open flames until fragrant and blackened in spots.'
        },
        {
          stepNum: 3,
          title: 'Pound in Mortar',
          instruction: 'Pound shredded meat, charred pepper, garlic, ginger, and salt rhythmically until fused into brick-red relish.'
        },
        {
          stepNum: 4,
          title: 'Bind with Oil',
          instruction: 'Lightly toss with a few drops of raw mustard oil to coat fibers and seal aromas.'
        }
      ],
      servingSuggestion: {
        text: 'Serve as an intense, fiery condiment alongside boiled red rice, steamed sticky rice, or traditional millet dishes.',
        imageUrl: '/images/ar/lukter.jpg'
      },
      vessel: 'Heavy Stone or Hardwood Mortar (Shing-Khol)',
      cookingFat: 'Minimal Mustard Oil (1 tsp, optional)',
      season: 'Winter & High-Altitude Mountain Travel',
      flavorProfile: ["Explosive Ghost Pepper Heat", "Concentrated Woodsmoke Savory", "Deep Dry Meat Umami", "Charred Garlic Pungency"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/ar/lukter.jpg',
      phonetic: 'LOOK-ter'
      },
      {
      id: 'ar-khazi',
      name: 'Khazi',
      nativeName: 'Khazi / Kharzi',
      englishSubtitle: 'Cheesy Red Rice with Fermented Soybeans & Chives',
      tagline: 'Alpine mountain risotto of nutty indigenous red rice folded with melted chhurpi yak cheese, fermented soybeans, and garlic chives.',
      description: 'A luxurious, warming mountain specialty from Arunachal Pradesh’s Monpa culinary repertoire, Khazi is an indulgent, savory rice preparation that resembles an alpine risotto. Built upon indigenous nutty red rice, the dish draws its signature creaminess from local fermented yak or cow milk cheese (chhurpi or hard mountain cheese) along with pungent fermented soybeans. Enriched with spring onions, sharp ginger, and aromatic chives, Khazi is comfort food at its most primal—rich, deeply savory, and engineered to provide sustained stamina in the Himalayan highlands.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Monpa Alpine Settlements, Dirang & Tawang',
      culturalSignificance: 'The ultimate cold-weather mountain sustenance, combining high-altitude red grains with pungent aged cheese and fermented legumes.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '35 min; rice soak 30 min',
      ingredientSections: [
        {
          title: 'Indigenous Red Rice Base',
          items: [
            { item: 'Indigenous mountain red rice', amount: '1.5 cups', note: 'washed and soaked for 30 minutes' },
            { item: 'Water', amount: '3.5 cups', note: 'for cooking rice' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        },
        {
          title: 'Mountain Cheese, Ferments & Chives',
          items: [
            { item: 'Local dried cheese or chhurpi', amount: '1/2 cup', note: 'crumbled or grated; paneer can substitute in a pinch' },
            { item: 'Fermented soybeans (pehak)', amount: '2 tbsp' },
            { item: 'Fresh garlic chives', amount: '1 bunch', note: 'chopped' },
            { item: 'Spring onions & julienned ginger', amount: '3 stalks spring onion, 1-inch knob ginger' },
            { item: 'Whole dried red chilies', amount: '2', note: 'crushed' },
            { item: 'Vegetable oil or butter', amount: '1.5 tbsp' }
          ]
        }
      ],
      ingredients: [
        { item: 'Mountain red rice', amount: '1.5 cups' },
        { item: 'Chhurpi / local cottage cheese', amount: '1/2 cup' },
        { item: 'Fermented soybeans (pehak)', amount: '2 tbsp' },
        { item: 'Garlic chives & spring onions', amount: '1 bunch chives, 3 stalks onions' },
        { item: 'Fresh ginger & dry red chilies', amount: '1-inch ginger, 2 chilies' },
        { item: 'Butter or oil', amount: '1.5 tbsp' },
        { item: 'Water & Salt', amount: '3.5 cups water, salt to taste' }
      ],
      preparationSteps: [
        'In a heavy-bottomed pot, bring the soaked red rice and water to a boil with a pinch of salt. Cover, reduce heat to low, and cook for 20–25 minutes until the nutty grains are tender and cooked through, retaining a slight chew.',
        'In a separate pan, heat the oil or butter over medium flame. Add the crushed dried red chilies, julienned ginger, and spring onions, sautéing for 1 to 2 minutes until fragrant and softened.',
        'Stir in the fermented soybeans, mashing them lightly with the spoon to bloom their rich umami flavor in the warm fat.',
        'Add the cooked warm red rice directly into the pan. Stir to combine with the aromatics. Lower the flame and sprinkle the crumbled cheese (chhurpi) and chopped chives over the top. Stir continuously for 2 to 3 minutes until the cheese begins to melt, coating each ruby grain in a creamy, savory gloss.',
        'Season with additional salt if needed, turn off the flame, and let the pot sit covered for 2 minutes so the flavors fuse.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Simmer Nutty Red Rice',
          instruction: 'Cook soaked mountain red rice in 3.5 cups water with salt for 20–25 min until tender with gentle al dente chew.'
        },
        {
          stepNum: 2,
          title: 'Sauté Aromatics',
          instruction: 'Melt butter, sauté crushed dried red chilies, julienned ginger, and spring onions 1–2 min until fragrant.'
        },
        {
          stepNum: 3,
          title: 'Bloom Pehak Ferment',
          instruction: 'Stir in fermented soybeans, lightly mashing to release deep savory umami notes into warm butter.'
        },
        {
          stepNum: 4,
          title: 'Melt Chhurpi into Rice',
          instruction: 'Fold in warm red rice, sprinkle crumbled chhurpi cheese and garlic chives, stirring until creamy gloss coats grains.'
        },
        {
          stepNum: 5,
          title: 'Rest and Fuse',
          instruction: 'Cover off the flame for 2 minutes to let mountain cheese aroma permeate every ruby kernel.'
        }
      ],
      servingSuggestion: {
        text: 'Ladle hot into wide bowls and savor warm, enjoying the interplay between nutty mountain rice, creamy aged cheese, and the earthy punch of fermented soybeans.',
        imageUrl: '/images/ar/khazi.jpg'
      },
      vessel: 'Heavy Cast Iron Pot (Thal)',
      cookingFat: 'Pure Yak Butter or Dairy Butter',
      season: 'Winter & Cold Mountain Evenings',
      flavorProfile: ["Creamy Pungent Chhurpi Cheese", "Nutty Earthy Red Rice Chew", "Savory Pehak Soybean Umami", "Pungent Fresh Garlic Chives"],
      dietary: 'Vegetarian',
      imageUrl: '/images/ar/khazi.jpg',
      phonetic: 'KHAH-zee'
      }
    ]
  },
  ml: {
    id: 'ml',
    name: 'Meghalaya',
    nativeName: 'Meghalaya',
    capital: 'Shillong',
    region: 'North-East',
    historicalEra: 'Khasi, Jaintia & Garo Ancestral Hill Kingdoms',
    culinaryPhilosophy: 'Rustic highland minimalism: indigenous red hill rice braised in natural pork lard (Jadoh), dark roasted black sesame curries (Dohneiiong), hearth-fermented soybeans (Tungrymbai), pure steamed rice cakes (Pumaloi), and restorative smoked fish broths (Nakham Bitchi).',
    heirloomVessels: ["Khiew Ranei (Clay Steamer)", "Khasi Cast Iron Degchi", "Wooden Mortar"],
    signatureSpices: ["Neiiong (Black Sesame Seeds)", "Tungrymbai (Fermented Soybeans)", "Sla-met Leaves", "Garo Bird's Eye Chilies", "Black Pepper"],
    stapleGrains: ["Ja Stem (Red Hill Rice)", "Khasi White Rice", "Corn"],
    representativeDish: {
      id: 'ml-jadoh',
      name: 'Jadoh',
      nativeName: 'Jadoh',
      englishSubtitle: 'Khasi Braised Rice with Pork',
      tagline: 'Ceremonial Khasi short-grain red rice braised directly in rich rendered pork fat, turmeric, black pepper, and ginger.',
      description: 'Regarded as the crowning centerpiece of Khasi celebratory dining in Meghalaya, Jadoh (from the Khasi words Ja meaning rice and Doh meaning meat) is often likened to a regional biryani or pilaf, yet it stands entirely in a league of its own. Unlike heavy, Mughlai-style rice dishes layered with warm sweet spices and cream, Jadoh embraces rustic minimalism. Short-grain indigenous red or hill rice is simmered directly in rendered pork fat, fragrant yellow turmeric, pungent black pepper, and generous amounts of ginger. As the meat renders its natural juices into the simmering grains, each kernel turns rich, golden, and deeply savory.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Khasi Hills Celebratory Feasts, Shillong & Sohra',
      culturalSignificance: 'The cultural benchmark of Khasi celebratory feasts, prepared for weddings, festivals, and Sunday clan gatherings.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '35 min',
      ingredientSections: [
        {
          title: 'Succulent Pork & Red Hill Rice',
          items: [
            { item: 'Pork (balanced fat and meat)', amount: '400 g', note: 'cut into bite-sized cubes' },
            { item: 'Short-grain hill rice or red rice (ja stem)', amount: '2 cups', note: 'washed and drained' },
            { item: 'Warm water or light meat broth', amount: '4 cups' }
          ]
        },
        {
          title: 'Khasi Aromatics & Seasoning',
          items: [
            { item: 'Medium onions', amount: '2', note: 'finely chopped' },
            { item: 'Fresh ginger', amount: '2-inch knob', note: 'pounded to coarse paste' },
            { item: 'Garlic cloves', amount: '5–6', note: 'crushed' },
            { item: 'Turmeric powder', amount: '1 tsp' },
            { item: 'Freshly cracked black pepper', amount: '1 tsp' },
            { item: 'Green chilies & bay leaves', amount: '2–3 chilies, 2 bay leaves' },
            { item: 'Mustard oil or rendered pork lard', amount: '1 tbsp' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Pork (fat and meat cubes)', amount: '400 g' },
        { item: 'Khasi red hill rice (ja stem)', amount: '2 cups' },
        { item: 'Onions & ginger', amount: '2 onions, 2-inch ginger' },
        { item: 'Garlic cloves', amount: '5–6' },
        { item: 'Turmeric & cracked black pepper', amount: '1 tsp each' },
        { item: 'Green chilies & bay leaves', amount: '2–3 chilies, 2 leaves' },
        { item: 'Mustard oil or pork lard', amount: '1 tbsp' },
        { item: 'Meat broth or water', amount: '4 cups' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Heat a tablespoon of oil (or a few pieces of fatty pork skin) in a heavy cast-iron pot or pressure cooker. Add the pork cubes and sear over medium-high heat with a pinch of salt and turmeric for 6–8 minutes until the fat begins to render out and the meat edges turn pale golden. Remove the browned pork and set aside, keeping the rendered fat in the pot.',
        'In the same flavorful rendered fat, add the bay leaves and chopped onions. Sauté over medium flame until the onions turn translucent and soft. Stir in the crushed garlic and pounded ginger, cooking for 1–2 minutes until fragrant and mellow.',
        'Add the remaining turmeric powder and cracked black pepper. Tip in the washed and drained rice, stirring gently for 2–3 minutes to coat every grain in the spiced, golden fat.',
        'Return the seared pork pieces to the pot along with the slit green chilies. Pour in the 4 cups of warm water or broth and season with salt. Bring to a rolling boil.',
        'Lower the heat to low, cover with a tight-fitting lid, and let it simmer undisturbed for 15–18 minutes (or cook for 2 whistles in a pressure cooker) until the liquid is fully absorbed, the meat is tender, and the grains are plump and separate. Turn off the heat and let it rest covered for 5 minutes.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Render the Pork Fat',
          instruction: 'Sear pork cubes with salt and turmeric 6–8 min until fat renders and edges turn pale golden; reserve fat in pot.'
        },
        {
          stepNum: 2,
          title: 'Sauté Aromatics',
          instruction: 'Cook bay leaves, onions, crushed garlic, and pounded ginger in the rendered lard until translucent and fragrant.'
        },
        {
          stepNum: 3,
          title: 'Coat the Rice Grains',
          instruction: 'Stir in turmeric, black pepper, and drained hill rice, coating each kernel in the golden savory fat for 2–3 min.'
        },
        {
          stepNum: 4,
          title: 'Simmer with Pork',
          instruction: 'Return pork and green chilies, pour 4 cups hot broth, bring to rolling boil, and season with salt.'
        },
        {
          stepNum: 5,
          title: 'Steam to Tender Fluff',
          instruction: 'Simmer covered undisturbed on low flame 15–18 min until liquid absorbs and grains are separate and plump.'
        }
      ],
      servingSuggestion: {
        text: 'Gently fluff the golden grains with a fork and serve hot alongside a fiery onion-chili chutney (Dokhlieh) or a sour bamboo shoot pickle.',
        imageUrl: '/images/ml/jadoh.jpg'
      },
      vessel: 'Heavy Cast-Iron Degchi or Pressure Cooker',
      cookingFat: 'Rendered Pork Lard (Zero Added Commercial Fat)',
      season: 'Festivals, Weddings & Sunday Celebrations',
      flavorProfile: ["Rich Rendered Pork Umami", "Pungent Fresh Ginger Heat", "Sharp Cracked Black Pepper", "Nutty Plump Hill Rice"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/ml/jadoh.jpg',
      phonetic: 'JAH-doh'
    },
    dishes: [
      {
      id: 'ml-jadoh',
      name: 'Jadoh',
      nativeName: 'Jadoh',
      englishSubtitle: 'Khasi Braised Rice with Pork',
      tagline: 'Ceremonial Khasi short-grain red rice braised directly in rich rendered pork fat, turmeric, black pepper, and ginger.',
      description: 'Regarded as the crowning centerpiece of Khasi celebratory dining in Meghalaya, Jadoh (from the Khasi words Ja meaning rice and Doh meaning meat) is often likened to a regional biryani or pilaf, yet it stands entirely in a league of its own. Unlike heavy, Mughlai-style rice dishes layered with warm sweet spices and cream, Jadoh embraces rustic minimalism. Short-grain indigenous red or hill rice is simmered directly in rendered pork fat, fragrant yellow turmeric, pungent black pepper, and generous amounts of ginger. As the meat renders its natural juices into the simmering grains, each kernel turns rich, golden, and deeply savory.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Khasi Hills Celebratory Feasts, Shillong & Sohra',
      culturalSignificance: 'The cultural benchmark of Khasi celebratory feasts, prepared for weddings, festivals, and Sunday clan gatherings.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '35 min',
      ingredientSections: [
        {
          title: 'Succulent Pork & Red Hill Rice',
          items: [
            { item: 'Pork (balanced fat and meat)', amount: '400 g', note: 'cut into bite-sized cubes' },
            { item: 'Short-grain hill rice or red rice (ja stem)', amount: '2 cups', note: 'washed and drained' },
            { item: 'Warm water or light meat broth', amount: '4 cups' }
          ]
        },
        {
          title: 'Khasi Aromatics & Seasoning',
          items: [
            { item: 'Medium onions', amount: '2', note: 'finely chopped' },
            { item: 'Fresh ginger', amount: '2-inch knob', note: 'pounded to coarse paste' },
            { item: 'Garlic cloves', amount: '5–6', note: 'crushed' },
            { item: 'Turmeric powder', amount: '1 tsp' },
            { item: 'Freshly cracked black pepper', amount: '1 tsp' },
            { item: 'Green chilies & bay leaves', amount: '2–3 chilies, 2 bay leaves' },
            { item: 'Mustard oil or rendered pork lard', amount: '1 tbsp' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Pork (fat and meat cubes)', amount: '400 g' },
        { item: 'Khasi red hill rice (ja stem)', amount: '2 cups' },
        { item: 'Onions & ginger', amount: '2 onions, 2-inch ginger' },
        { item: 'Garlic cloves', amount: '5–6' },
        { item: 'Turmeric & cracked black pepper', amount: '1 tsp each' },
        { item: 'Green chilies & bay leaves', amount: '2–3 chilies, 2 leaves' },
        { item: 'Mustard oil or pork lard', amount: '1 tbsp' },
        { item: 'Meat broth or water', amount: '4 cups' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Heat a tablespoon of oil (or a few pieces of fatty pork skin) in a heavy cast-iron pot or pressure cooker. Add the pork cubes and sear over medium-high heat with a pinch of salt and turmeric for 6–8 minutes until the fat begins to render out and the meat edges turn pale golden. Remove the browned pork and set aside, keeping the rendered fat in the pot.',
        'In the same flavorful rendered fat, add the bay leaves and chopped onions. Sauté over medium flame until the onions turn translucent and soft. Stir in the crushed garlic and pounded ginger, cooking for 1–2 minutes until fragrant and mellow.',
        'Add the remaining turmeric powder and cracked black pepper. Tip in the washed and drained rice, stirring gently for 2–3 minutes to coat every grain in the spiced, golden fat.',
        'Return the seared pork pieces to the pot along with the slit green chilies. Pour in the 4 cups of warm water or broth and season with salt. Bring to a rolling boil.',
        'Lower the heat to low, cover with a tight-fitting lid, and let it simmer undisturbed for 15–18 minutes (or cook for 2 whistles in a pressure cooker) until the liquid is fully absorbed, the meat is tender, and the grains are plump and separate. Turn off the heat and let it rest covered for 5 minutes.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Render the Pork Fat',
          instruction: 'Sear pork cubes with salt and turmeric 6–8 min until fat renders and edges turn pale golden; reserve fat in pot.'
        },
        {
          stepNum: 2,
          title: 'Sauté Aromatics',
          instruction: 'Cook bay leaves, onions, crushed garlic, and pounded ginger in the rendered lard until translucent and fragrant.'
        },
        {
          stepNum: 3,
          title: 'Coat the Rice Grains',
          instruction: 'Stir in turmeric, black pepper, and drained hill rice, coating each kernel in the golden savory fat for 2–3 min.'
        },
        {
          stepNum: 4,
          title: 'Simmer with Pork',
          instruction: 'Return pork and green chilies, pour 4 cups hot broth, bring to rolling boil, and season with salt.'
        },
        {
          stepNum: 5,
          title: 'Steam to Tender Fluff',
          instruction: 'Simmer covered undisturbed on low flame 15–18 min until liquid absorbs and grains are separate and plump.'
        }
      ],
      servingSuggestion: {
        text: 'Gently fluff the golden grains with a fork and serve hot alongside a fiery onion-chili chutney (Dokhlieh) or a sour bamboo shoot pickle.',
        imageUrl: '/images/ml/jadoh.jpg'
      },
      vessel: 'Heavy Cast-Iron Degchi or Pressure Cooker',
      cookingFat: 'Rendered Pork Lard (Zero Added Commercial Fat)',
      season: 'Festivals, Weddings & Sunday Celebrations',
      flavorProfile: ["Rich Rendered Pork Umami", "Pungent Fresh Ginger Heat", "Sharp Cracked Black Pepper", "Nutty Plump Hill Rice"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/ml/jadoh.jpg',
      phonetic: 'JAH-doh'
      },
      {
      id: 'ml-dohneiiong',
      name: 'Dohneiiong',
      nativeName: 'Dohneiiong',
      englishSubtitle: 'Khasi Pork Curry with Roasted Black Sesame',
      tagline: 'Succulent pork belly slow-braised in a dark, inky gravy of dry-roasted black sesame paste, garlic, and green chilies.',
      description: 'One of the most distinct, soul-warming curries from the Khasi hills of Meghalaya, Dohneiiong (Doh meaning meat, Neiiong meaning black sesame seeds) pairs succulent pork belly with a luscious, dark, nutty paste. Rather than relying on thick cream or overpowering garam masalas, this dish derives its smoky depth and velvety gravy entirely from dry-roasted black sesame seeds ground with garlic and green chilies. As the fatty pork braises slowly in this inky sauce, the seeds release their aromatic oils, creating a dark, deeply earthy curry that clings to every piece of meat.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Khasi Hills Hearth Kitchens, East Khasi Hills',
      culturalSignificance: 'The signature black curry of the Khasi people, celebrated for the nutty richness of indigenous toasted black sesame.',
      servesCount: 'Yield: 4 servings',
      approxPrepTime: '40 min',
      ingredientSections: [
        {
          title: 'Pork Belly & Toasted Black Sesame',
          items: [
            { item: 'Pork belly or shoulder', amount: '500 g', note: 'cut into thick curry pieces' },
            { item: 'Black sesame seeds (neiiong)', amount: '3–4 tbsp', note: 'dry-roasted and ground into thick obsidian paste' }
          ]
        },
        {
          title: 'Khasi Alliums & Seasoning',
          items: [
            { item: 'Medium onions', amount: '2', note: 'finely chopped' },
            { item: 'Ginger and garlic paste', amount: '1.5 tbsp each' },
            { item: 'Fresh green chilies', amount: '3–4', note: 'slit' },
            { item: 'Turmeric & red chili powder', amount: '1 tsp each' },
            { item: 'Mustard oil', amount: '2 tbsp' },
            { item: 'Warm water & salt', amount: '1.5 cups water, salt to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Pork belly / shoulder', amount: '500 g' },
        { item: 'Black sesame seeds (neiiong)', amount: '3–4 tbsp' },
        { item: 'Onions', amount: '2 medium', note: 'chopped' },
        { item: 'Ginger & garlic paste', amount: '1.5 tbsp each' },
        { item: 'Green chilies', amount: '3–4' },
        { item: 'Turmeric & chili powder', amount: '1 tsp each' },
        { item: 'Mustard oil', amount: '2 tbsp' },
        { item: 'Salt to taste', amount: 'to taste' }
      ],
      preparationSteps: [
        'Heat a dry skillet over low-medium flame. Add the black sesame seeds and dry-roast, stirring continuously, for 2–3 minutes until they crackle and release a warm, nutty aroma (do not let them scorch). Remove immediately and let cool. Grind the roasted seeds with a splash of water into a thick, fine, obsidian-black paste.',
        'Heat the mustard oil in a heavy-bottomed kadai or pot until lightly smoking. Add the pork pieces with a pinch of turmeric and salt. Sauté over medium flame for 6–8 minutes until the pork browns lightly and renders some of its natural fat. Remove the pork and set aside.',
        'In the remaining oil and pork drippings, add the chopped onions and sauté until golden brown. Stir in the ginger paste, garlic paste, and slit green chilies, cooking for 2 minutes until the raw edge vanishes.',
        'Lower the flame and stir in the black sesame paste along with the remaining turmeric and red chili powder. Sauté gently for 1–2 minutes over low heat until the paste blooms and releases its signature nutty aroma into the oil.',
        'Return the seared pork pieces to the pot, tossing well to ensure every cube is cloaked in the black sauce. Pour in 1.5 cups of warm water, season with salt, cover with a tight lid, and simmer over low heat for 25–30 minutes (or pressure-cook for 3–4 whistles) until the meat is fork-tender and a glossy film of fragrant sesame and pork oil pools on top.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Roast and Grind Sesame',
          instruction: 'Dry-roast black sesame seeds until popping and fragrant; grind with a splash of water into an obsidian-black paste.'
        },
        {
          stepNum: 2,
          title: 'Brown the Pork',
          instruction: 'Brown pork cubes in hot mustard oil with salt and turmeric 6–8 min until fat renders; reserve pork.'
        },
        {
          stepNum: 3,
          title: 'Sauté Alliums & Aromatics',
          instruction: 'Cook onions golden in pork drippings, then sauté ginger-garlic paste and slit green chilies for 2 min.'
        },
        {
          stepNum: 4,
          title: 'Bloom the Sesame Paste',
          instruction: 'Stir in black sesame paste on low heat for 1–2 min until aromatic oils bloom into the fat.'
        },
        {
          stepNum: 5,
          title: 'Braise to Tenderness',
          instruction: 'Coat pork in black sauce, add 1.5 cups warm water, and simmer covered 25–30 min until fork-tender and glossy.'
        }
      ],
      servingSuggestion: {
        text: 'Serve hot over a mound of plain steamed white or red rice, savoring the rich, smoky warmth of the black sesame gravy.',
        imageUrl: '/images/ml/dohneiiong.jpg'
      },
      vessel: 'Heavy Cast Iron Kadai or Pot',
      cookingFat: 'Mustard Oil & Rendered Pork Fat',
      season: 'Winter & Chilly Mountain Evenings',
      flavorProfile: ["Deep Toasted Nutty Sesame", "Smoky Earthy Obsidian Gravy", "Tender Fatty Pork Richness", "Fresh Ginger & Green Chili Heat"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/ml/dohneiiong.jpg',
      phonetic: 'doh-nay-YONG'
      },
      {
      id: 'ml-tungrymbai',
      name: 'Tungrymbai',
      nativeName: 'Tungrymbai',
      englishSubtitle: 'Sautéed Fermented Soybeans with Aromatics',
      tagline: 'Pungent hearth-fermented soybeans sautéed in mustard oil with black sesame, crushed ginger, garlic, and fiery green chilies.',
      description: 'A revered indigenous staple among the Khasi, Jaintia, and Garo households of Meghalaya, Tungrymbai is an umami-packed preparation centered on traditionally fermented soybeans. Cleaned soybeans are boiled, wrapped tightly in leaves (often sla-met or wild leaves), placed inside a woven basket near the hearth, and allowed to ferment for several days until they soften and develop their characteristic sharp, pungent aroma. While often cooked with small bits of pork or pork fat in tribal kitchens, the quintessential preparation—celebrated widely as a vegetarian powerhouse—sautés the fermented mash in cold-pressed mustard oil with pounded ginger, garlic, chilies, and black sesame, yielding an earthy, savory paste that revives any simple meal.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Khasi & Jaintia Hearth Kitchens, Meghalaya',
      culturalSignificance: 'The daily umami heartbeat of Khasi home dining, preserved over generations through woodfire hearth leaf fermentation.',
      servesCount: 'Yield: 4 condiment portions',
      approxPrepTime: '20 min',
      ingredientSections: [
        {
          title: 'Hearth-Fermented Soybeans',
          items: [
            { item: 'Fermented soybeans (tungrymbai)', amount: '200 g', note: 'lightly mashed with back of spoon' }
          ]
        },
        {
          title: 'Pungent Alliums & Black Sesame',
          items: [
            { item: 'Medium onion', amount: '1', note: 'finely chopped' },
            { item: 'Ginger and garlic paste', amount: '1 tbsp each', note: 'freshly crushed' },
            { item: 'Fresh green chilies', amount: '3–4', note: 'slit or pounded' },
            { item: 'Black sesame paste', amount: '1.5 tbsp', note: 'dry-roasted and ground, optional but traditional' },
            { item: 'Turmeric powder', amount: '1/2 tsp' },
            { item: 'Pure mustard oil', amount: '2 tbsp' },
            { item: 'Warm water & salt', amount: '1/4 cup water, salt to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Fermented soybeans (tungrymbai)', amount: '200 g' },
        { item: 'Onion', amount: '1 medium' },
        { item: 'Ginger & garlic paste', amount: '1 tbsp each' },
        { item: 'Green chilies', amount: '3–4' },
        { item: 'Black sesame paste', amount: '1.5 tbsp' },
        { item: 'Mustard oil', amount: '2 tbsp' },
        { item: 'Turmeric & Salt', amount: 'to taste' }
      ],
      preparationSteps: [
        'Place the fermented soybeans in a bowl and crush them gently with a fork or pestle so the beans are broken down yet retain a coarse, rustic texture.',
        'Heat the mustard oil in a small heavy-bottomed pan or clay pot until it begins to smoke lightly, then lower the heat. Add the chopped onions and sauté until translucent. Stir in the crushed garlic, ginger paste, and green chilies, cooking for 1–2 minutes until the raw allium sharpness mellows.',
        'Add the turmeric powder and the roasted black sesame paste (if using). Stir well over low flame for a minute until the mixture forms a dark, fragrant base.',
        'Add the mashed fermented soybeans into the pan. Sauté over low-medium flame for 4–5 minutes, stirring continuously as the beans absorb the pungent mustard oil and garlic notes. Splash in 1/4 cup of warm water, season with salt, and cover with a lid.',
        'Simmer on low heat for 6–8 minutes until the liquid cooks off and the dish forms a thick, glistening, jammy relish that leaves the sides of the pan.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Rough-Mash Ferment',
          instruction: 'Crush fermented soybeans with a fork so beans break down while keeping rustic texture.'
        },
        {
          stepNum: 2,
          title: 'Sauté Aromatics',
          instruction: 'Cook chopped onions, garlic, ginger paste, and green chilies in smoking mustard oil until softened.'
        },
        {
          stepNum: 3,
          title: 'Incorporate Black Sesame',
          instruction: 'Bloom turmeric and roasted black sesame paste for 1 minute on low heat into a dark fragrant paste.'
        },
        {
          stepNum: 4,
          title: 'Simmer to a Jammy Relish',
          instruction: 'Add mashed soybeans, splash 1/4 cup water, cover, and cook 6–8 min until thick and glossy.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm in small bowls alongside hot steamed rice, boiled indigenous greens, and a bowl of light dal or meat broth.',
        imageUrl: '/images/ml/tungrymbai.jpg'
      },
      vessel: 'Small Earthen Pot or Cast Iron Skillet',
      cookingFat: 'Pure Cold-Pressed Mustard Oil',
      season: 'All Seasons / Everyday Umami Paste',
      flavorProfile: ["Pungent Fermented Soybean Umami", "Warm Roasted Black Sesame", "Fiery Fresh Green Chili Heat", "Sharp Mustard-Garlic Zing"],
      dietary: 'Vegetarian',
      imageUrl: '/images/ml/tungrymbai.jpg',
      phonetic: 'toong-RIM-bye'
      },
      {
      id: 'ml-pumaloi',
      name: 'Pumaloi',
      nativeName: 'Pumaloi',
      englishSubtitle: 'Steamed Khasi Rice Cakes',
      tagline: 'Airy, cloud-like steamed cakes of coarsely ground indigenous hill rice, crafted in artisanal terracotta Khiew Ranei steamers.',
      description: 'Elegantly simple and deeply embedded in Khasi hearth culture, Pumaloi is a traditional steamed rice cake crafted from unique, indigenous hill rice varieties. Traditionally steamed inside an artisanal earthenware steamer called a Khiew Ranei fitted with a bamboo spout, this preparation relies on no fats, leavenings, or heavy seasonings. Coarsely ground, lightly moistened rice flour is packed gently into the pot and allowed to steam until the individual grains fuse into an airy, cloud-like cake. Soft, porous, and neutral with a faint sweet grain perfume, it acts as the ideal edible sponge to mop up rich Khasi curries like Dohneiiong or spicy vegetable stews.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Khasi Hills Villages & Tea Stalls Across Meghalaya',
      culturalSignificance: 'The quintessential Khasi hearth staple, steamed in porous red earthenware to accompany afternoon red tea (sha saw) or rich meat curries.',
      servesCount: 'Yield: 4–6 cakes',
      approxPrepTime: '25 min; flour resting 1 hr',
      ingredientSections: [
        {
          title: 'Artisanal Rice Flour',
          items: [
            { item: 'Short-grain white or red hill rice (Khasi rice)', amount: '2 cups', note: 'soaked, dried, stone-ground to coarse sand texture' },
            { item: 'Warm water', amount: 'as needed', note: 'for moistening the flour' },
            { item: 'Salt', amount: 'a pinch' }
          ]
        },
        {
          title: 'Earthen Steaming Equipment',
          items: [
            { item: 'Khiew Ranei (traditional terracotta steamer) or ramekin', amount: '1', note: 'lined with muslin cloth' }
          ]
        }
      ],
      ingredients: [
        { item: 'Khasi red or white hill rice', amount: '2 cups' },
        { item: 'Warm water', amount: 'as needed to moisten' },
        { item: 'Salt', amount: 'a pinch' }
      ],
      preparationSteps: [
        'Wash the rice thoroughly, drain, and spread it out on a clean cotton cloth to air-dry for about an hour until it is dry to the touch but the kernels retain inner hydration. Transfer to a stone mortar or dry grinder and pulse into a coarse, grainy flour (it should feel like fine sand, not a powdery dusting).',
        'Place the coarse rice flour into a wide mixing bowl and add a pinch of salt. Sprinkle warm water a few drops at a time using your fingertips, tossing the flour gently. The aim is to evenly moisten the flour without turning it into a wet paste—it should resemble moist sand that clumps together when squeezed in your fist, but shatters cleanly when tapped.',
        'Lightly grease a round steaming container, ramekin, or idli plate (or use a traditional terracotta pot lined with muslin). Spoon the moistened rice flour into the mold loosely—do not press down or pack it tight, as steam needs space to circulate through the grains. Smooth the top level.',
        'Set the filled mold inside a preheated steamer over rolling boiling water. Cover tightly with a domed lid to keep condensation from dripping back into the cake. Steam on medium-high heat for 12 to 15 minutes.',
        'Check by tapping the top lightly; the cake should feel firm, springy, and set. Remove from the steamer, let it rest for 2 minutes, and invert gently onto a plate.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Grind Grainy Flour',
          instruction: 'Air-dry washed rice for 1 hour, pulse into a sandy coarse flour resembling fine beach sand.'
        },
        {
          stepNum: 2,
          title: 'Moisten to Sand Texture',
          instruction: 'Fingertip-toss flour with drops of warm water and pinch of salt until it clumps when squeezed but shatters cleanly.'
        },
        {
          stepNum: 3,
          title: 'Pack Loosely in Steamer',
          instruction: 'Spoon loosely into mold without packing tight so steam penetrates between grains freely.'
        },
        {
          stepNum: 4,
          title: 'Steam to Springiness',
          instruction: 'Steam covered 12–15 min over boiling water until top feels firm, springy, and thoroughly set.'
        }
      ],
      servingSuggestion: {
        text: 'Serve warm straight from the steamer alongside rich meat curries, fried greens, or simply with a cup of hot red tea (sha saw).',
        imageUrl: '/images/ml/pumaloi.jpg'
      },
      vessel: 'Khiew Ranei (Earthen Steamer with Bamboo Spout)',
      cookingFat: 'Zero-Oil (Steamed Pure Grain)',
      season: 'All Seasons / Daily Tea & Hearth Meal',
      flavorProfile: ["Sweet Delicate Rice Perfume", "Airy Cloud-Like Crumb", "Neutral Savory-Absorbing Texture", "Porous Moist Grain"],
      dietary: 'Vegan',
      imageUrl: '/images/ml/pumaloi.jpg',
      phonetic: 'poo-mah-LOY'
      },
      {
      id: 'ml-nakham-bitchi',
      name: 'Nakham Bitchi',
      nativeName: 'Nakham Bitchi',
      englishSubtitle: 'Garo Dried Fish & Chili Broth',
      tagline: 'Fiery, restorative clear soup of wood-smoked fish boiled with crushed garlic, smashed ginger, and scorching Garo bird\'s eye chilies.',
      description: 'A legendary restorative specialty hailing from the Garo Hills of Meghalaya, Nakham Bitchi is a fiery, aromatic clear soup built around Nakham—traditionally sun-dried and wood-smoked fish. Prized for its clean heat and deeply savory profile, this broth is a cherished remedy on freezing evenings, rainy monsoons, or whenever the body craves rejuvenation. Simmered simply with crushed garlic, fresh ginger, and scorching local birds eye or fiery red chilies, it is often seasoned with kalchi (a traditional indigenous alkaline ash filtrate) or salt. The resulting soup is clear, sharp, and unmistakably invigorating.',
      preservationStatus: 'Living Ritual',
      microOrigin: 'Garo Hills Homesteads, Tura & East Garo Hills',
      culturalSignificance: 'The cherished ancestral tonic of the Garo people, celebrated for revitalizing energy and soothing colds with woodsmoke fish and fiery hill chillies.',
      servesCount: 'Yield: 3–4 soup bowls',
      approxPrepTime: '15 min',
      ingredientSections: [
        {
          title: 'Wood-Smoked Fish & Pure Water',
          items: [
            { item: 'Dried and smoked fish (nakham)', amount: '100 g', note: 'heads and fins trimmed, charred over flame' },
            { item: 'Water', amount: '3 cups' }
          ]
        },
        {
          title: 'Fire Aromatics & Indigenous Seasoning',
          items: [
            { item: 'Fresh ginger', amount: '1.5-inch piece', note: 'smashed or coarsely pounded' },
            { item: 'Garlic cloves', amount: '6–8', note: 'lightly bruised' },
            { item: 'Fiery green chilies or Garo bird\'s eye chilies', amount: '3–4', note: 'crushed' },
            { item: 'Alkaline filtrate (kalchi)', amount: '1 tsp', note: 'optional, or pinch of baking soda' },
            { item: 'Wild coriander or cilantro', amount: 'fresh sprigs', note: 'for garnish' },
            { item: 'Salt to taste', amount: 'to taste' }
          ]
        }
      ],
      ingredients: [
        { item: 'Dried smoked fish (nakham)', amount: '100 g' },
        { item: 'Fresh ginger & garlic', amount: '1.5-inch ginger, 6–8 cloves garlic' },
        { item: 'Garo bird\'s eye chilies', amount: '3–4' },
        { item: 'Kalchi (alkaline ash filtrate)', amount: '1 tsp', note: 'optional' },
        { item: 'Wild coriander sprigs', amount: 'for garnish' },
        { item: 'Water & Salt', amount: '3 cups water, salt to taste' }
      ],
      preparationSteps: [
        'Hold the dried fish over a low open flame using metal tongs (or place on a dry hot skillet) for 1–2 minutes until lightly charred and smoky. Rinse in warm water to clear away any surface soot, then break the fish into 1-inch pieces.',
        'In a clay pot or saucepan, bring 3 cups of water to a rolling boil over medium heat. Add the bruised garlic cloves, smashed ginger, and crushed fiery chilies, letting the aromatics infuse their essential oils into the rolling water for 2–3 minutes.',
        'Add the charred dried fish pieces into the boiling pot. Lower the heat to medium-low, cover, and let the soup simmer steadily for 8 to 10 minutes. The dried fish will soften, yielding its intense savory smokiness directly into the clear broth.',
        'Add the alkaline kalchi (or a tiny pinch of baking soda, if using) along with salt to taste. The broth will deepen slightly in color. Let it simmer uncovered for another 2 minutes so the flavors balance.',
        'Remove from the flame and toss in freshly torn coriander or local wild herbs.'
      ],
      stepDetails: [
        {
          stepNum: 1,
          title: 'Flame-Char the Fish',
          instruction: 'Hold dried smoked fish over open flame 1–2 min to blister skin; rinse surface soot and break into pieces.'
        },
        {
          stepNum: 2,
          title: 'Boil Aromatics',
          instruction: 'Bring water to boil with bruised garlic, smashed ginger, and crushed bird\'s eye chilies for 2–3 min.'
        },
        {
          stepNum: 3,
          title: 'Simmer Woodsmoke Broth',
          instruction: 'Add fish pieces, cover, and simmer 8–10 min until fish yields intense woodsmoke savoriness to clear broth.'
        },
        {
          stepNum: 4,
          title: 'Season with Kalchi',
          instruction: 'Add indigenous kalchi ash filtrate and salt; simmer 2 min, finish with fresh wild coriander.'
        }
      ],
      servingSuggestion: {
        text: 'Ladle hot into wide cups or bowls to sip directly as a soul-warming broth, or spoon generously over plain boiled rice at the beginning of a traditional Garo meal.',
        imageUrl: '/images/ml/nakham_bitchi.jpg'
      },
      vessel: 'Clay Pot or Enamelled Saucepan',
      cookingFat: 'Zero-Oil (Clear Broth)',
      season: 'Monsoon, Winter & Cold Evening Tonic',
      flavorProfile: ["Piercing Bird's Eye Chili Heat", "Intense Woodsmoke Savory Fish", "Pungent Smashed Ginger-Garlic", "Restorative Clear Herbal Tonic"],
      dietary: 'Non-Vegetarian',
      imageUrl: '/images/ml/nakham_bitchi.jpg',
      phonetic: 'nah-KHAHM bee-CHEE'
      }
    ]
  }
};

// Fallback generator for remaining UTs and smaller states to guarantee 100% complete coverage for all 36 regions:
const defaultMeta: Record<string, { name: string; native: string; cap: string; reg: StateArchive['region']; dish: string; desc: string }> = {
  an: { name: 'Andaman and Nicobar Islands', native: 'अंडमान और निकोबार', cap: 'Port Blair', reg: 'Islands', dish: 'Island Mud Crab & Pandan Stew', desc: 'Mangrove mud crab cooked in freshly pressed coconut milk and wild island pandan leaves.' },
  ch: { name: 'Chandigarh', native: 'ਚੰਡੀਗੜ੍ਹ', cap: 'Chandigarh', reg: 'North', dish: 'Wild Anardana Paneer Tikka', desc: 'Wood-fired cottage cheese marinated in dried pomegranate seeds and cold-pressed mustard oil.' },
  dn: { name: 'Dadra and Nagar Haveli', native: 'दादरा और नगर हवेली', cap: 'Silvassa', reg: 'West', dish: 'Varli Forest Ubadiyu', desc: 'Tribal earthen pot winter stew with wild beans, roots, and ajwain leaves cooked in smoking pits.' },
  dd: { name: 'Daman and Diu', native: 'દમણ અને દીવ', cap: 'Daman', reg: 'West', dish: 'Fisherman Caldine with Kokum', desc: 'Gentle, aromatic yellow coconut and turmeric coastal broth infused with wild kokum petals.' },
  ld: { name: 'Lakshadweep', native: 'ലക്ഷദ്വീപ്', cap: 'Kavaratti', reg: 'Islands', dish: 'Kavaratti Mus Kavaab', desc: 'Spiced smoked skipjack tuna skewers slow-braised in coconut milk, shallots, and fresh curry leaves.' },
  py: { name: 'Puducherry', native: 'புதுச்சேரி', cap: 'Puducherry', reg: 'South', dish: 'Creole Poulet Rouge / Fish Assad', desc: 'Historic French-Tamil coastal stew with coconut milk, star anise, fenugreek, and tomato.' }
};

// Populate the remaining states to guarantee 100% interactive coverage:
Object.entries(defaultMeta).forEach(([id, meta]) => {
  if (!statesArchiveData[id]) {
    statesArchiveData[id] = {
      id,
      name: meta.name,
      nativeName: meta.native,
      capital: meta.cap,
      region: meta.reg,
      historicalEra: 'Ancient Regional Cultural Hearth',
      culinaryPhilosophy: `${meta.name} boasts a profound regional gastronomy centered around seasonal ingredients, heirloom pots, and generations-old oral recipes.`,
      heirloomVessels: ['Clay Handi', 'Cast Iron Pan', 'Brass Uruli'],
      signatureSpices: ['Indigenous Wild Herbs', 'Heirloom Chillies', 'Local Mustard / Coconut'],
      stapleGrains: ['Regional Rice Varieties', 'Ancient Millets'],
      representativeDish: {
        id: `${id}-rep`,
        name: meta.dish,
        nativeName: meta.native,
        tagline: meta.desc,
        description: meta.desc,
        preservationStatus: 'Endangered Oral Tradition',
        microOrigin: `${meta.cap} & Rural Hinterlands`,
        culturalSignificance: `Preserved for centuries within village communities and passed down through maternal hearths without written manuals.`,
        ingredients: [
          { item: 'Heirloom regional starches & vegetables', amount: '300g' },
          { item: 'Cold-pressed local oil / ghee', amount: '2 tbsp' },
          { item: 'Wild native spices and sea salt', amount: 'to taste' }
        ],
        preparationSteps: [
          'Prepare native ingredients and wash in spring water.',
          'Slow simmer in traditional earthen cookware over glowing embers.',
          'Infuse with regional whole spices and fresh herbs before serving.'
        ],
        vessel: 'Traditional Earthenware',
        cookingFat: 'Native Cold-Pressed Oil / Ghee',
        season: 'Seasonal Harvest',
        flavorProfile: ['Earthy', 'Aromatic', 'Heirloom Terroir'],
        dietary: 'Vegetarian',
        imageUrl: '/images/culinary_hero_banner.jpg',
        phonetic: meta.dish.split(' ')[0],
        approxPrepTime: '40 min'
      },
      dishes: [
        {
          id: `${id}-rep`,
          name: meta.dish,
          nativeName: meta.native,
          tagline: meta.desc,
          description: meta.desc,
          preservationStatus: 'Endangered Oral Tradition',
          microOrigin: `${meta.cap} & Hinterlands`,
          culturalSignificance: `Preserved for generations by local elders.`,
          ingredients: [
            { item: 'Local harvest produce', amount: '300g' },
            { item: 'Heirloom seasonings', amount: 'to taste' }
          ],
          preparationSteps: [
            'Prepare and clean local ingredients.',
            'Simmer slowly in earthenware.',
            'Serve with traditional accompaniments.'
          ],
          vessel: 'Clay Handi',
          cookingFat: 'Local Oil',
          season: 'All Seasons',
          flavorProfile: ['Traditional', 'Wholesome'],
          dietary: 'Vegetarian',
          imageUrl: '/images/culinary_hero_banner.jpg'
        }
      ]
    };
  }
});
