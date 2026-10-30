export interface FoodStory {
  id: string;
  title: string;
  subtitle: string;
  dishName: string;
  nativeName: string;
  stateName: string;
  stateId: string;
  dishId: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East';
  narrator: {
    name: string;
    roleOrTitle: string;
    location: string;
  };
  eraTag: string;
  themeTag: string;
  pullQuote: string;
  storyParagraphs: string[];
  historicalContext: string;
  sensoryMemories: {
    label: string;
    description: string;
  }[];
  imageUrl: string;
}

export const foodStoriesCollection: FoodStory[] = [
  {
    id: 'story-pazhamkanji',
    title: 'The Clay Pot of Dawn: Water, Salt, and Backwater Memories',
    subtitle: 'A farmer’s morning ritual with fermented rice in the waterlogged paddies of Kuttanad',
    dishName: 'Pazhamkanji',
    nativeName: 'പഴങ്കഞ്ഞി',
    stateName: 'Kerala',
    stateId: 'kl',
    dishId: 'kl-pazhamkanji',
    region: 'South',
    narrator: {
      name: 'Narayanan Pillai',
      roleOrTitle: 'Elderly Paddy Farmer (72)',
      location: 'Kuttanad, Alappuzha, Kerala'
    },
    eraTag: 'Agrarian Oral Memory',
    themeTag: 'Fermentation & Sustenance',
    pullQuote: 'Before the sun even touched the water hyacinths, my mother would uncover the mankalam. One swallow of that cold, starchy broth, and your body forgot yesterday’s exhaustion.',
    storyParagraphs: [
      'In our village below sea level, time was measured not by clock chimes, but by the rising water in the canals and the temperature of the kitchen earthen pot. Every evening, my grandmother would ladle leftover boiled Matta rice into an unglazed terracotta mankalam, pour clean boiled water over it until the grains swam freely, and tie a clean muslin cloth over the mouth. It slept on the cool mud floor while the village went quiet.',
      'By four in the morning, before heading into the muddy paddy fields, we would gather on the veranda. Uncovering that pot released a scent like nothing else: a gentle, sweet-sour fermented tang, clean and earthy. Grandmother would crush two fiery green Kanthari chillies directly into the bowl with a pinch of sea salt, add three crunchy small shallots, and ladle that cool, velvety white liquid over the plump ruby grains.',
      'You did not use a spoon. You held the earthen bowl with both hands and drank the fermented broth first—a rush of soothing, cooling probiotic electricity that coated your throat—before scooping up the soft grains and biting into the sharp, eye-watering heat of the shallot. For six hours in the blistering sun standing knee-deep in swamp water, you never felt tired or thirsty.'
    ],
    historicalContext: 'Pazhamkanji represents the ancient coastal science of lacto-fermentation developed across southern agrarian communities. Modern microbiological studies show that soaking parboiled rice overnight increases bioavailable iron by over 300% and generates abundant natural B-complex vitamins, creating an ideal indigenous electrolyte solution perfectly suited to tropical farm labor.',
    sensoryMemories: [
      { label: 'Aroma', description: 'Gentle lactic fermentation mingled with cool riverine terracotta' },
      { label: 'Texture', description: 'Velvety starchy liquid with tender, plump grains that yield effortlessly' },
      { label: 'Flavor Shock', description: 'Mellow lactic sourness shattered by crunchy shallots and fiery Kanthari chilli' }
    ],
    imageUrl: '/images/kl/pazhamkanji.jpg'
  },
  {
    id: 'story-siddu',
    title: 'The Snowbound Hearth of Kullu: Walnuts and Steaming Khameer',
    subtitle: 'Winter mornings when snow barricaded the doors and the smell of yeast dough filled the cedar attic',
    dishName: 'Siddu',
    nativeName: 'सिड्डू',
    stateName: 'Himachal Pradesh',
    stateId: 'hp',
    dishId: 'hp-siddu',
    region: 'North',
    narrator: {
      name: 'Kamla Devi',
      roleOrTitle: 'Pahari Home Cook & Handloom Weaver (68)',
      location: 'Naggar Valley, Kullu, Himachal Pradesh'
    },
    eraTag: 'Himalayan Winter Lore',
    themeTag: 'Pastoral Hearth Warmth',
    pullQuote: 'When the cedar branches bowed with three feet of white snow, the hearth became our world. Siddu was not just breakfast; it was the warmth that kept our family together.',
    storyParagraphs: [
      'In the upper Kullu valley, winter did not knock politely; it arrived with a roar that buried our wooden thresholds under heavy mountain snow. When the cold crept between the cedar wall planks, mother would prepare the khameer—the gentle leavening passed down from our great-grandmother. The stone-ground wheat flour was kneaded into a soft, elastic dough and tucked beneath heavy woolen blankets beside the woodfire hearth to rise slowly overnight.',
      'While the dough puffed in the gentle warmth, my sisters and I would sit near the embers cracking thin-shelled wild mountain walnuts with flat river stones. The walnuts were pounded with lightly toasted poppy seeds, a pinch of wild mint, and green mountain chillies until the paste was rich with aromatic nut oils. She would shape the dough into plump oval crescents, tucking the stuffing tightly inside before sealing the seams with fluted thumb pinches.',
      'The best moment was when the wooden steamer lid was lifted. A billowing cloud of warm, yeasty, wheaty steam filled the dark room. Mother would split the steaming siddu down the center and pour two massive ladlefuls of warm, golden cow ghee right into the heart of the bread. The molten ghee soaked deep into the soft, spongy crumb. Eating it beside the dancing flames, winter outside could not touch us.'
    ],
    historicalContext: 'Siddu is a living relic of medieval trans-Himalayan foodways. Living in high-altitude terrain with short farming seasons, Pahari communities mastered yeast-fermented wheat doughs and relied on foraged high-calorie wild walnuts and pure clarified butter (ghee) to provide the intense thermal energy needed to endure months of isolation.',
    sensoryMemories: [
      { label: 'The Sound', description: 'The steady hiss of boiling water under the brass steamer and the crackle of pine logs' },
      { label: 'The First Bite', description: 'Pillowy steamed dough yielding to rich, buttery crushed walnuts and poppy seed crunch' },
      { label: 'The Finish', description: 'Warm golden desi ghee dripping between fingers, melting away the mountain chill' }
    ],
    imageUrl: '/images/hp/siddu.jpg'
  },
  {
    id: 'story-kangri-dham',
    title: 'The Midnight Brass Cauldrons: Secret of the Hereditary Botis',
    subtitle: 'Behind the scenes of an authentic Kangra feast cooked exclusively without onions or garlic',
    dishName: 'Kangri Dham (Rajma Madra)',
    nativeName: 'कांगड़ी धाम (मदरा)',
    stateName: 'Himachal Pradesh',
    stateId: 'hp',
    dishId: 'hp-kangri-dham',
    region: 'North',
    narrator: {
      name: 'Pandit Rameshwar Sharma',
      roleOrTitle: 'Third-Generation Hereditary Boti Master Cook (61)',
      location: 'Jawalamukhi, Kangra, Himachal Pradesh'
    },
    eraTag: 'Centuries-Old Feasting Tradition',
    themeTag: 'Ceremonial Fellowship',
    pullQuote: 'A true Boti does not cook with eyes alone; he listens to the sound of yogurt simmering in the brass charoti. When the ghee separates like sunlight on morning dew, the Madra is ready.',
    storyParagraphs: [
      'I was nine years old when my grandfather first allowed me to sit near the Bhatti—the long, narrow trench dug into the earth and lined with river stones, fired by blazing oak and rhododendron wood. Dham is not food prepared in hurried domestic saucepans. It is an act of devotion cooked in massive, heavy-rimmed brass pots called charotis, passed down from father to son for over a century.',
      'The soul of the entire feast is Rajma Madra. In modern city restaurants, people drown rajma in onions, tomatoes, and harsh powdered spices. But our ancestors established a sacred code: no onions, no garlic, and no raw tomatoes. The rich, velvety sauce comes entirely from slow-simmered full-fat valley yogurt, tempered with desi ghee, green cardamom, cloves, cinnamon, and cumin.',
      'The secret lies in the rhythm of the wooden ladle. If your hand tires and you pause for even two minutes, the cold mountain yogurt will curdle upon meeting the brass heat. You must stir in patient, unbroken circles for over an hour until the dairy emulsifies with the ghee into a golden, glossy cream that lovingly coats every single bean. When the villagers sit cross-legged in long rows on the ground and we ladle Madra onto fresh stitched taur leaves, the silence that falls across hundreds of people is the greatest praise a cook can ever receive.'
    ],
    historicalContext: 'Legend traces Kangri Dham back over a thousand years to Raja Jaistambh of the Katoch dynasty, who was so captivated by the royal Kashmiri banquet courses that he ordered his royal temple cooks (the Botis) to create a satvik version conforming to strict temple dietary principles. To this day, the feast follows a precise mathematical order of service ending in sweet meetha and tangy amchur khatta.',
    sensoryMemories: [
      { label: 'Visual', description: 'Deep red mountain kidney beans suspended in ivory-golden yogurt gravy gleaming with ghee' },
      { label: 'Aroma', description: 'Intense blooming green cardamom and cloves rising from hot brass cauldrons' },
      { label: 'Ritual Experience', description: 'Dining on leaf plates (pattals) amidst hundreds of community members under open mountain skies' }
    ],
    imageUrl: '/images/hp/kangri_dham.jpg'
  },
  {
    id: 'story-rugra',
    title: 'Monsoon Whispers in the Sal Woods: Hunting the Black Pearls of Jharkhand',
    subtitle: 'Walking through wet forest floor with tribal elders in search of wild subterranean puffballs',
    dishName: 'Rugra / Futu Curry',
    nativeName: 'रुगड़ा / फुटू करी',
    stateName: 'Jharkhand',
    stateId: 'jh',
    dishId: 'jh-rugra-futu-curry',
    region: 'East',
    narrator: {
      name: 'Budhram Munda',
      roleOrTitle: 'Adivasi Elder & Botanical Forager (75)',
      location: 'Khunti District, Chota Nagpur Plateau, Jharkhand'
    },
    eraTag: 'Indigenous Forest Knowledge',
    themeTag: 'Wild Foraging & Nature Harmony',
    pullQuote: 'Rugra does not grow because someone planted a seed. It is the gift of the lightning and the roots of the ancient Sal tree when the earth is thoroughly soaked.',
    storyParagraphs: [
      'In our tribal homeland, the onset of the Asarh monsoon brings a scent that cannot be described—the fragrance of red laterite soil drinking its first deep rainwater after scorching summer drought. That is when we head into the deep Sal forests. You do not look up into the branches; your eyes must be glued to the dark bed of decayed leaves.',
      'Finding Rugra requires generations of instinct. You look for tiny hairline cracks in the damp red earth, or a minute mound no bigger than a beetle shell. With a flat iron knife, you gently lift the topsoil, and there they rest: clusters of smooth, spherical wild puffballs, glistening like dark river pearls. Inside, their delicate meat is pure ivory when young, turning to deep slate grey as they mature.',
      'Back in our courtyard, washing them is a community ritual—rubbing them between palms in multiple bowls of well water to remove every grain of forest soil. My wife fries them in cold-pressed mustard oil with crushed garlic, ginger, and wild forest spices in a heavy iron kadai. When you bite through the taut, rubbery outer skin into the piping hot core, it pops in your mouth, releasing a rich, savory, earthy juice that no farmed mushroom in the world can ever match.'
    ],
    historicalContext: 'Rugra (an indigenous mycorrhizal fungus belonging to the genus Astraeus) forms an obligate symbiotic relationship with the root systems of Shorea robusta (Sal trees). Highly perishable and incapable of commercial cultivation, it remains one of India’s most prized wild seasonal delicacies, treasured for centuries by Santhal, Munda, and Oraon communities for its dense protein and medicinal value.',
    sensoryMemories: [
      { label: 'The Hunt', description: 'The petrichor of wet red mud and decaying Sal leaves after a thunderstorm' },
      { label: 'The Mouthfeel', description: 'A firm, gelatinous outer casing that pops crisply between teeth, flooding the palate with umami broth' },
      { label: 'The Sizzle', description: 'Pungent mustard oil crackling with wild cumin and crushed green chillies' }
    ],
    imageUrl: '/images/jh/rugra_futu_curry.jpg'
  },
  {
    id: 'story-ker-sangri',
    title: 'The Tree That Defied the Drought: Flavours of the Great Thar Desert',
    subtitle: 'How wild prickly shrubs and desert bean pods sustained generations across Rajasthan’s shifting dunes',
    dishName: 'Ker Ki Sabzi & Sangri',
    nativeName: 'केर सांगरी',
    stateName: 'Rajasthan',
    stateId: 'rj',
    dishId: 'rj-ker',
    region: 'West',
    narrator: {
      name: 'Bhagirath Singh Bhati',
      roleOrTitle: 'Desert Shepherd & Oral Historian (81)',
      location: 'Thar Desert, Barmer, Rajasthan'
    },
    eraTag: 'Desert Survival Wisdom',
    themeTag: 'Arid Pantry Resilience',
    pullQuote: 'When the monsoon failed and water wells ran dry for three summers, crops turned to dust. But the Khejri tree stood emerald green, feeding our camels and keeping our children alive.',
    storyParagraphs: [
      'To someone from the green river valleys, the Thar desert looks barren and unforgiving. But our ancestors saw it as an astonishing pantry. Under the blistering heat of May, when hot loo winds sweep across the golden dunes, two wild plants come alive: the prickly Ker bush with its tiny, sour berry beads, and the majestic Khejri tree with its slender green bean pods called Sangri.',
      'We harvested the sangri before the pods turned woody, drying them on woven charpoys under the scorching sun until they turned brittle and dark. Because they are cooked completely dry without water in generous quantities of mustard oil, dried red chillies, amchur, and yogurt, Ker Sangri could last for weeks in a horseman’s saddlebag without spoiling even in fifty-degree heat.',
      'When I would travel across the dunes with our camel caravans, we would halt at dusk near an oasis, build a small fire of dried babool twigs, and roast thick millet Bajra rotis on the embers. Breaking a piece of hot, charred roti and rolling it around tangy, spicy Ker Sangri and taking a sip of cool buttermilk from a leather mashaq—that was royalty in the desert.'
    ],
    historicalContext: 'During the cataclysmic Chhapania Famine of 1899–1900, when all conventional crops perished across northwestern India, the indigenous Khejri tree (Prosopis cineraria) and Ker bushes provided vital sustenance to millions of desert pastoralists. Recognized as the state tree of Rajasthan and fiercely protected by the Bishnoi community, it remains a symbol of ecological survival.',
    sensoryMemories: [
      { label: 'Texture Contrast', description: 'Tender chewy dried beans paired with tart, tongue-tingling bursts of wild ker berries' },
      { label: 'Spice Notes', description: 'Smoky whole dried Mathania chillies, pungent mustard oil, and mouth-puckering dry mango powder' },
      { label: 'Pairing', description: 'Rough, earthen bajra roti slathered in white butter melting on hot griddles' }
    ],
    imageUrl: '/images/culinary_hero_banner.jpg'
  },
  {
    id: 'story-enduri-pitha',
    title: 'The Steaming Turmeric Leaves of Prathamastami: Fragrance of Utkala',
    subtitle: 'The sacred aroma that filled every Odia courtyard on dewy November festival mornings',
    dishName: 'Enduri Pitha',
    nativeName: 'ଏଣ୍ଡୁରି ପିଠା',
    stateName: 'Odisha',
    stateId: 'or',
    dishId: 'or-enduri-pitha',
    region: 'East',
    narrator: {
      name: 'Annapurna Das',
      roleOrTitle: 'Temple Food Historian & Homemaker (69)',
      location: 'Cuttack, Mahanadi Delta, Odisha'
    },
    eraTag: 'Temple Liturgy & Hearth Rituals',
    themeTag: 'Botanical Steaming & Maternal Blessing',
    pullQuote: 'The fragrance of Enduri Pitha does not stay in the pot; it floats across the garden wall into the lane, telling everyone that Prathamastami has arrived in the village.',
    storyParagraphs: [
      'In Odisha, winter arrives not with frost, but with the harvest festival of Prathamastami in the month of Margasira. On that morning, mothers bless their firstborn children with lighted brass lamps and dubo grass. But for every child in our house, the true excitement was the kitchen hearth where the steaming pots of Enduri Pitha were bubbling.',
      'Days before the festival, my father would harvest the long, tender green turmeric leaves (haladi patra) from our backyard garden. Mother would stone-grind soaked black gram and parboiled rice into a silken, fluffy batter that was allowed to ferment overnight until light as mountain clouds. The filling was prepared with freshly scraped coconut, dark palm jaggery, crushed black pepper, and green cardamom.',
      'Watching mother wrap the pitha was like watching poetry. She would wipe each green turmeric leaf, spread a spoonful of batter along the central vein, line it with sweet coconut, and gently fold the leaf lengthwise to seal it. As the earthen steamer whispered over the firewood, the essential oils of the turmeric leaf seeped deeply into the rice-dal cake. When peeled open, the pitha retained the exact emerald ribbed imprint of the leaf, tasting earthy, sweet, and faintly medicinal.'
    ],
    historicalContext: 'Enduri Pitha is one of the ancient Chhappan Bhog (56 sacred offerings) presented daily to Lord Jagannath in the sacred temple kitchen of Puri. In ancient Ayurvedic medical tradition, the volatile curcumin oils absorbed by the dough during steam-infusion were prized for boosting seasonal respiratory immunity as winter dampness set in across the coastal delta.',
    sensoryMemories: [
      { label: 'Fragrance', description: 'Incredible balsamic, clove-menthol aroma of heated fresh turmeric leaves filling the room' },
      { label: 'Visual', description: 'Glistening white steamed rice cake marked with the delicate herringbone veins of the leaf' },
      { label: 'Sweet Harmony', description: 'Creamy fermented batter melting into warm dark jaggery and pepper-spiced coconut' }
    ],
    imageUrl: '/images/or/enduri_pitha.jpg'
  },
  {
    id: 'story-panasa-puttu',
    title: 'The Konaseema Wedding Mystery: The Jackfruit That Fooled Royal Banquets',
    subtitle: 'How grandmothers in Andhra’s lush coconut delta transformed green jackfruit into culinary gold',
    dishName: 'Panasa Puttu Koora',
    nativeName: 'పనస పొట్టు కూర',
    stateName: 'Andhra Pradesh',
    stateId: 'ap',
    dishId: 'ap-panasa-puttu-koora',
    region: 'South',
    narrator: {
      name: 'Lakshmi Kameshwari',
      roleOrTitle: 'Traditional Banquet Curator (74)',
      location: 'Rajahmundry, East Godavari, Andhra Pradesh'
    },
    eraTag: 'Godavari Delta Wedding Heritage',
    themeTag: 'Culinary Artistry & Deceptive Textures',
    pullQuote: 'At grand Andhra weddings, guests would take their first bite and swear it was tender mutton kheema. Then the bride’s grandmother would laugh and say: ‘It grew on our backyard jackfruit tree!’',
    storyParagraphs: [
      'In the fertile Godavari river delta where emerald coconut groves stretch to the horizon, hospitality is an art form. When summer approached and wedding pandals were erected with fresh green palm fronds, the culinary centerpiece was never just rich sweets; it was Panasa Puttu Koora.',
      'Preparing it was a test of supreme patience. Young, unripe green jackfruits were plucked when the seeds were still soft as milk pearls. Five or six women would sit in a circle on the cool stone floor, their hands and curved chopping knives (kathi peeta) coated generously in cold-pressed sesame oil to keep the sticky latex sap from clinging to their skin. With rhythmic precision, they peeled away the thorny green rind and finely minced the creamy white flesh into microscopic shreds that resembled tender meat fibers.',
      'The magic happened in the massive brass bandli. Sizzling mustard seeds, fresh curry leaves from the hedge, fiery slit green chillies, and yellow turmeric were tossed with the shredded jackfruit until every fiber turned golden. Steamed gently and finished with a sharp squeeze of fresh garden lemon, the finished dish had an uncanny, meaty, savory chew that captivated both vegetarians and meat-lovers alike.'
    ],
    historicalContext: 'Raw jackfruit (Artocarpus heterophyllus) has been cultivated in the southern river basins for over three millennia. Classical Sanskrit Ayurvedic texts refer to it as "Phalavriksha" and praised unripe jackfruit for regulating blood sugar and providing dense dietary fiber, establishing it as the supreme celebratory "plant-meat" in traditional Andhra wedding banquets.',
    sensoryMemories: [
      { label: 'Aroma', description: 'Pungent crackling mustard seeds and bruised curry leaves frying in warm sesame oil' },
      { label: 'Texture', description: 'Delicately shredded, meaty strands that absorb spices like a sponge' },
      { label: 'Finish', description: 'Vibrant citrus acidity cutting through earthy spices, best eaten with steaming Sona Masoori rice and ghee' }
    ],
    imageUrl: '/images/ap/panasa_puttu_koora.jpg'
  },
  {
    id: 'story-anishi-pork',
    title: 'Smoke of the Ao Hills: Anishi and the Sacred Hearth Racks',
    subtitle: 'The timeless tribal alchemy of fermented taro leaves, wild king chillies, and woodfire embers in Nagaland',
    dishName: 'Nüoshi / Anishi with Smoked Pork',
    nativeName: 'Anishi / Nüoshi',
    stateName: 'Nagaland',
    stateId: 'nl',
    dishId: 'nl-nuoshi-anishi',
    region: 'North-East',
    narrator: {
      name: 'Imtitemjen Ao',
      roleOrTitle: 'Clan Elder & Village Chronicler (78)',
      location: 'Mokokchung District, Nagaland'
    },
    eraTag: 'Highland Indigenous Lore',
    themeTag: 'Smoke, Taro & Fermentation',
    pullQuote: 'The hearth is the heartbeat of our home. As long as the smoke rises through the bamboo racks drying the anishi cakes, the family will never go hungry.',
    storyParagraphs: [
      'If you walk into an authentic Ao Naga village home, you will immediately notice the mephu—the central three-stone hearth that is kept smoldering day and night with seasoned oak and hickory logs. Suspended directly above the dancing flames are three tiered bamboo hanging racks. That is where our ancestors stored their wisdom.',
      'In late monsoon, when wild taro plants (Colocasia) grow lush along the forest ridges, the women harvest the tender green stems and leaves. Instead of cooking them immediately, they are wrapped tightly in wild banana leaves and allowed to ferment in dark baskets until they turn dark green and deeply acidic. Then, the fermented taro is pounded into a paste with ginger and salt, shaped into small circular black cakes, and laid on the bamboo racks directly over the woodsmoke.',
      'Over weeks of exposure to the fragrant smoke, the taro cakes turn coal-black, dry, and intensely concentrated. When braised with thick chunks of oak-smoked pork and crushed Raja Mircha (king chilli) in a pot of mountain stream water, the black anishi dissolves into a velvety, pitch-dark, smoky gravy. It tastes of the primeval forest, of smoke, of fermented earth—a flavor so deep that one bowl of rice steeped in that broth feels like an embrace from the mountain itself.'
    ],
    historicalContext: 'Anishi is an indigenous food security innovation developed by the Ao Naga people before the advent of trade routes or modern salt preservation. Wild taro contains calcium oxalate raphide crystals that cause severe throat irritation if consumed raw; the multistage tribal process of fermentation followed by long-term hot woodsmoke curing breaks down the crystals completely while unlocking immense umami.',
    sensoryMemories: [
      { label: 'Atmosphere', description: 'The comforting aroma of highland oak embers drifting through bamboo woven walls' },
      { label: 'Color & Viscosity', description: 'A brooding, pitch-dark gravy clinging to tender smoked pork fat' },
      { label: 'Heat & Depth', description: 'Explosive floral kick from fresh Naga King Chilli balanced by the earthy, smoked richness of anishi' }
    ],
    imageUrl: '/images/himalayan_heirloom_dish.jpg'
  }
];

