export interface OralAudioStory {
  id: string;
  title: string;
  subtitle: string;
  dishName: string;
  nativeName?: string;
  category: 'audio-recording';
  audioUrl: string;
  durationSeconds: number;
  durationFormatted: string;
  speaker: {
    name: string;
    roleOrIdentity: string;
    location: string;
    language: string;
  };
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'Pan-India';
  themeTag: string;
  pullQuote: string;
  fullTranscript: string;
  culturalStory: string[];
  sensoryMemories: {
    label: string;
    description: string;
  }[];
  imageUrl: string;
  relatedStateId?: string;
  relatedDishId?: string;
}

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

/**
 * Authentic Recorded Audio Stories in People's Own Voices
 * Preserving personal culinary experiences, family memories, and emotional connections.
 */
export const oralAudioStories: OralAudioStory[] = [
  {
    id: 'oral-audio-dosa',
    title: 'Hostel Days & Mom’s Crispy Ghee Dosa: The Food That Heals Everything',
    subtitle: 'A student living away from home on why mom’s fresh fermented dosa is an emotion, a celebration, and a life cure',
    dishName: 'Mom’s Crispy Ghee Dosa with Gunpowder Podi',
    nativeName: 'ತುಪ್ಪದ ದೋಸೆ / நெய் தோசை / నేతి దోస',
    category: 'audio-recording',
    audioUrl: '/audio/stories/moms_crispy_dosa.mp3',
    durationSeconds: 140,
    durationFormatted: '2:20',
    speaker: {
      name: 'Hostel Student',
      roleOrIdentity: 'Engineering Student living away from home',
      location: 'Bengaluru / Coastal Karnataka & Andhra',
      language: 'English'
    },
    region: 'South',
    themeTag: 'Maternal Love, Comfort Food & Hostel Days',
    pullQuote: 'Before going home from the hostel, I ask my mother to please keep lots of dosa batter ready! It’s hot, crispy, ghee on top, having it with podi, coconut chutney, and sambar... Whenever I have a bad day or celebrate good news, dosa is the cure for everything.',
    fullTranscript: `Hey guys, so I think it's pretty obvious that by now Dosa is my actually all-time favourite food. And when I say favourite, I very genuinely mean like I can have dosa literally anytime, like whenever you give, I can just eat it anytime without getting bored of it.

Like, I live in a hostel, so that one thing what I do is when I go home—just before going home, I just ask my mother to please just keep a lot of dosa batter ready so that I can just have it every morning!

There's something really, really special about mom's dosa: like that hot, crispy dosa, like putting ghee on it, and then having it with podi, and then that coconut chutney and the sambar. Like, I swear it's a completely different kind of happiness! And then the moment you take the first bite, you just feel more and more, and before you realise it, you’ve probably lost count.

At this point, I actually think that I have developed kind of an addiction to dosas—I just cannot imagine life without them. The funniest part is, it's the solution to like anything in my life: if I am having a bad day, or something goes wrong, or I'm just feeling low, I just eat dosa and my mood instantly gets better. And if something good happens, I still celebrate—I just eat dosa!

Whatever happens in my life—happy, stressed, excited—dosa is the meaning. I've reached a point where it's no longer just food; it's an emotion, a comfort food, and an essential part of my life. And there's one thing I am absolutely sure of: no matter what happens in life, I will always love eating dosas anytime.`,
    culturalStory: [
      'Living away from home in university hostels is a rite of passage for millions of Indian students. The routine mess food leaves a profound sensory longing for the specific alchemy of home: the familiar hum of the stone wet-grinder on weekends, the mild effervescent tang of wild overnight fermented batter, and the crackle of water droplets dancing on a seasoned cast-iron tawa.',
      'A mother’s dosa is an irreplaceable signature—the proportion of aged raw rice to urad dal, a pinch of golden methi seeds for amber hue, a handful of beaten flattened rice (poha) for crisp porous lightness, and the generous ladle of pure country ghee that fries the bottom into an intricate, golden honeycomb lattice. Standing by the stove as hot dosas slide onto the plate faster than one can count represents unconditional care.'
    ],
    sensoryMemories: [
      { label: 'Aroma', description: 'Desi cow ghee searing on cast iron, fermented rice-dal nuttiness, and freshly crackled mustard-curry leaf tadka' },
      { label: 'Texture', description: 'Crackling golden-brown lace on the perimeter with a soft, honeycomb-aerated center dipped in spicy podi oil' },
      { label: 'Emotional Core', description: 'Mother standing by the stove serving hot dosas one after another; food as the ultimate restorative therapy' }
    ],
    imageUrl: '/images/stories/ghee_dosa.jpg',
    relatedStateId: 'ka',
    relatedDishId: 'ka-ragi-ambli'
  },
  {
    id: 'oral-audio-paratha',
    title: 'The Midnight Highway & Mom’s Hot Lauki Paratha',
    subtitle: 'Refusing midnight Delhi dinner to endure a 3-hour journey to Mathura just for hot home-cooked parathas',
    dishName: 'Lauki Paratha & Desi Makhan',
    nativeName: 'लौकी का पराठा',
    category: 'audio-recording',
    audioUrl: '/audio/stories/midnight_lauki_paratha.m4a',
    durationSeconds: 69,
    durationFormatted: '1:09',
    speaker: {
      name: 'North Indian Traveler',
      roleOrIdentity: 'Student Traveler returning home to Mathura',
      location: 'Delhi to Mathura, Uttar Pradesh',
      language: 'English'
    },
    region: 'North',
    themeTag: 'Late-Night Homecoming & Mother’s Griddle',
    pullQuote: 'I was that crazy that I waited 2 to 3 hours of traveling from Delhi to Mathura just for that paratha. I told my father: no outside dinner, I just want to reach home at 2 AM and have mom make fresh lauki parathas.',
    fullTranscript: `Being a North Indian, paratha is like all-time favorite... something like anytime.

Recently, when I was going back to my home around 11:00 PM or 12:00 AM, my father asked me, 'Hey, you want to have dinner in Delhi where we were at?' And I was supposed to go to Mathura.

Basically you can think of it—I was that crazy that I could wait that 2 to 3 hours of traveling to Mathura for that paratha! I was like: 'No, no, no, I don't want any outside dinner right now. I just want to go home and have my favorite parathas.'

So I reached home around 1:00 or 2:00 AM, and then I asked my mother, 'Please, let me have a nice paratha, like lauki paratha.' That is a memory of how much love I have for parathas.`,
    culturalStory: [
      'Across the northern plains of the Yamuna basin, the stuffed paratha is more than food—it is an unconditional gesture of welcome. Arriving home past midnight to find a mother willing to fire up the iron tawa and knead freshly grated bottle gourd (lauki) into spiced whole-wheat dough speaks to the heart of Indian domestic warmth.',
      'Lauki paratha is a beloved comfort staple in Braj and Uttar Pradesh households, prized for its cooling digestive lightness, fragrant carom seeds (ajwain), and roasted cumin, best enjoyed steaming hot with fresh homemade white butter (desi makhan).'
    ],
    sensoryMemories: [
      { label: 'Aroma', description: 'Toasted whole wheat and ajwain frying on an iron griddle, mingled with tender spiced bottle gourd' },
      { label: 'Texture', description: 'Crisp golden-brown spotted exterior layered with tender, spiced soft interior' },
      { label: 'Emotional Core', description: 'The absolute reassurance of reaching home at 2 AM and eating fresh from mother’s hands' }
    ],
    imageUrl: '/images/stories/lauki_paratha.jpg',
    relatedStateId: 'up',
    relatedDishId: 'up-vegetable-tehri'
  },
  {
    id: 'oral-audio-chole-bhature',
    title: 'The 7th Birthday Revelation: The Magic of Chole Bhature',
    subtitle: 'A childhood birthday memory of falling in love with the classic combination of spiced chickpeas and puffed bhatura',
    dishName: 'Chole Bhature & Pickled Chilies',
    nativeName: 'छोले भटूरे',
    category: 'audio-recording',
    audioUrl: '/audio/stories/birthday_chole_bhature.m4a',
    durationSeconds: 19,
    durationFormatted: '0:19',
    speaker: {
      name: 'Food Enthusiast',
      roleOrIdentity: 'Childhood Birthday Storyteller',
      location: 'Delhi / Punjab',
      language: 'English'
    },
    region: 'North',
    themeTag: 'Childhood Celebrations & Classic Pairings',
    pullQuote: 'First ever when I had it, I was around 7 or 8 years old on my birthday. I love the taste of Chole Bhature—not the oil, but the combined combination of chole and bhature.',
    fullTranscript: `My favorite dish is Chole Bhature. First ever when I had it, I was around 7 or 8 years old.

The memory associated with it was I had my birthday on that day. And I love the taste of Chole Bhature—not the oil, but the combined combination of Chole Bhature.`,
    culturalStory: [
      'In North India, Chole Bhature is the undisputed crown of festive indulgence. Slow-cooked dark chickpeas infused with tea decoction, dried pomegranate seeds (anardana), and robust Punjabi garam masala find their perfect counterpart in piping-hot, balloon-puffed fermented bhaturas.',
      'For a young child tasting it at a birthday celebration, the pairing creates an indelible sensory memory—tearing through the crisp gossamer crust of the bhatura to scoop up the dark spiced gravy along with crunchy pickled onions and sour green chillies.'
    ],
    sensoryMemories: [
      { label: 'Aroma', description: 'Black tea leaves, toasted anardana, and fragrant kasoori methi rising from dark spiced gravy' },
      { label: 'Texture', description: 'Air-filled, pillowy fermented bhatura bread that tears softly into hearty, melting chickpeas' },
      { label: 'Emotional Core', description: 'Childhood birthdays where festive food transforms an ordinary morning into pure celebration' }
    ],
    imageUrl: '/images/stories/chole_bhature.jpg',
    relatedStateId: 'pb',
    relatedDishId: 'pb-amritsari-chole'
  },
  {
    id: 'oral-audio-misal-pav',
    title: 'The 90-Minute Local Train Quest: The Spiciest Misal Challenge',
    subtitle: 'Boarding a local train with college friends on an ambitious hunt for legendary fiery Maharashtrian rassa',
    dishName: 'Kolhapuri & Puneri Misal Pav',
    nativeName: 'मिसळ पाव',
    category: 'audio-recording',
    audioUrl: '/audio/stories/spicy_misal_pav_quest.m4a',
    durationSeconds: 37,
    durationFormatted: '0:37',
    speaker: {
      name: 'College Adventurer',
      roleOrIdentity: 'Student Traveler & Street Food Explorer',
      location: 'Mumbai & Pune, Maharashtra',
      language: 'English'
    },
    region: 'West',
    themeTag: 'Youth Adventures, Spice Challenges & Friendship',
    pullQuote: 'Me and my friends took a 1.5-hour train to find the spiciest misal. We thought we could handle the spice, but apparently we could not do it! But it was an unforgettable time.',
    fullTranscript: `My favorite dish is Misal Pav. And one of the memory I would like to share is when me and my friends decided to go and find a place where they serve the spiciest misal.

It took us around one or one and a half hour approx to reach by train. After reaching there and ordering all those different types of misal, we thought we could handle the spice, but apparently we could not do it!

But yeah, it was a fun time spending with them.`,
    culturalStory: [
      'Misal Pav in Maharashtra is not merely breakfast; it is a sport, a camaraderie ritual, and a badge of honor. Built upon sprouted moth beans (matki), spicy ginger-garlic gravy (tarri/rassa), crunchy farsan, and finely minced onions served alongside pillow-soft ladi pav, it delivers an adrenaline rush of flavor.',
      'College expeditions aboard local trains to hunt down famous misal joints in Dadar, Thane, or Pune are cherished memories for youth across Maharashtra. The shared laughter, teary eyes, and breathless gasps from fiery Kolhapuri spice unite friends around the table in unforgettable fellowship.'
    ],
    sensoryMemories: [
      { label: 'Aroma', description: 'Fiery red Kolhapuri chili oil (tarri) sizzling with garlic, cloves, and dry coconut' },
      { label: 'Texture', description: 'Sprouted moth beans swimming in liquid fire, crunchy farsan, and soft buttery pav soaking up the broth' },
      { label: 'Emotional Core', description: 'Youthful bravado, college friendships, and memories forged over local train journeys' }
    ],
    imageUrl: '/images/stories/misal_pav.jpg',
    relatedStateId: 'mh',
    relatedDishId: 'mh-bharli-vangi'
  },
  {
    id: 'oral-audio-hyderabad-biryani',
    title: 'Beyond The Famous Restaurants: Why Mom’s Biryani Still Reigns Supreme',
    subtitle: 'A reflection on Hyderabad’s aromatic legacy and why no iconic eatery can match the warmth of home',
    dishName: 'Hyderabadi Dum Biryani with Raita',
    nativeName: 'हैदराबादी दम बिरयानी / హైదరాబాదీ దమ్ బిర్యానీ',
    category: 'audio-recording',
    audioUrl: '/audio/stories/hyderabadi_moms_biryani.mp4',
    durationSeconds: 79,
    durationFormatted: '1:19',
    speaker: {
      name: 'Deccan Culinary Voice',
      roleOrIdentity: 'Home Culinary Chronicler',
      location: 'Hyderabad, Telangana',
      language: 'English'
    },
    region: 'South',
    themeTag: 'Home Cooking vs Commercial Fame & Maternal Love',
    pullQuote: 'Many people travel to Hyderabad just to have a taste of it... But if you ask me whether restaurant biryani is better than homemade, my answer will always be my mom’s biryani. For me, biryani is not just food—it’s an emotion, a feeling, and a taste of home.',
    fullTranscript: `Whenever I think of biryani, the first thing that strikes my mind is its amazing taste and aroma. Hyderabad is famous for its biryani, and honestly, you can find it anywhere and at any time.

The moment you open a plate of Hyderabadi Biryani, the rich aroma of spices fills the air. The perfectly cooked rice, the tender juicy chicken, and its flavorful masala makes every bite so special and delicious. Of course, biryani is never complete without a cool and refreshing raita!

Eating biryani in Hyderabad is truly a remarkable experience; many people travel to Hyderabad just to have a taste of it. But if you ask me whether restaurant biryani is better than homemade biryani, my answer will always be my mom's biryani. There's something special about the biryani made at home by my mom—the love, the flavours, and the warmth taste even better.

No matter how famous a restaurant is or how delicious its biryani tastes, nothing can beat the biryani made by my mom at home, because for me, biryani is not just food; it's an emotion, a feeling, and a taste of home.`,
    culturalStory: [
      'Hyderabad’s Nizami and Deccani culinary history made dum biryani a global icon. Yet within the city itself, the truest culinary debates are not between legendary restaurants, but between commercial excess and domestic refinement.',
      'Home-cooked Hyderabadi biryani relies on precision marination in spiced curd, mint, and fried onions without synthetic essences or heavy oils, allowing the delicate aromatics of aged basmati to shine through with maternal tenderness.'
    ],
    sensoryMemories: [
      { label: 'Aroma', description: 'Intoxicating bouquet of royal shahi jeera, saffron strands, and fresh mint leaves' },
      { label: 'Texture', description: 'Silken, long-grain basmati separate and feather-light, paired with succulent slow-cooked meat' },
      { label: 'Emotional Core', description: 'The timeless truth that mother’s hands impart a warmth no commercial kitchen can ever replicate' }
    ],
    imageUrl: '/images/stories/hyderabadi_biryani.jpg',
    relatedStateId: 'tg',
    relatedDishId: 'tg-jonna-rotte'
  },
  {
    id: 'oral-audio-litti-chokha',
    title: 'Sacred Cow-Dung Embers & Sattu: The Timeless Resilience of Litti Chokha',
    subtitle: 'Oral lore on how rustic wood-and-dung fires and roasted gram flour nourished Bihar through hardship',
    dishName: 'Litti Chokha with Charred Baingan & Ghee',
    nativeName: 'लिट्टी चोखा',
    category: 'audio-recording',
    audioUrl: '/audio/stories/bihar_litti_chokha.mp4',
    durationSeconds: 65,
    durationFormatted: '1:05',
    speaker: {
      name: 'Bhojpuri Heritage Chronicler',
      roleOrIdentity: 'Rural Cultural Chronicler',
      location: 'Magadh & Bhojpuri Heartland, Bihar',
      language: 'Bilingual (Hindi & English)'
    },
    region: 'East',
    themeTag: 'Rural Resilience, Ancestral Fire & Soil Heritage',
    pullQuote: 'From what my mother and elders taught me, during difficult times when resources were scarce, cow-dung cake fires and roasted sattu gave communities complete nutrition. That is why Litti Chokha is the heartbeat of Bihar.',
    fullTranscript: `Jaise maine meri mummy aur teachers se suna, purane samay mein jab kathinaiyan chal rahi thi, toh us samay logon ke paas resources aur khane ke utne paise bhi nahi hote the.

Par Bihar mein har gaon aur har ghar mein jo naturally available tha—jaise cow dung cakes (goitha/upala) ki aanch—uspe sattu se bhari hui litti banti thi. Isliye Litti Chokha Bihar ka sabse authentic, nutritious aur shaktishali food hai jo aaj bhi hamari pehchaan hai.`,
    culturalStory: [
      'Litti Chokha is ancient Magadhan gastronomy in its purest elemental form: earth, fire, and roasted grains. Whole-wheat dough balls stuffed with spiced roasted black chickpea flour (sattu), pungent mustard oil, carom seeds, and pickled spices are roasted directly over smoldering cow dung cake embers (goitha).',
      'Historically championed by travelers, farmers, and military garrisons under Sher Shah Suri due to its long shelf-life and high protein content, it requires no fancy utensils—just the heat of the hearth and the gifts of the land, finished with roasted eggplant and tomato chokha and a dip in clarified cow ghee.'
    ],
    sensoryMemories: [
      { label: 'Aroma', description: 'Smoky ash of slow-burning embers, cold-pressed raw mustard oil, and toasted sattu' },
      { label: 'Texture', description: 'Brittle crust dusted with woodsmoke giving way to a nutty, crumbly, spicy center saturated in warm ghee' },
      { label: 'Emotional Core', description: 'The earthy pride of rural Bihar—sustenance born of natural wisdom, self-reliance, and ancestral fires' }
    ],
    imageUrl: '/images/stories/litti_chokha.jpg',
    relatedStateId: 'br',
    relatedDishId: 'br-lauka-jabar'
  }
];

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
      name: 'Elderly Paddy Farmer',
      roleOrTitle: 'Third-Generation Rice Cultivator (72)',
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
      name: 'Pahari Home Cook & Weaver',
      roleOrTitle: 'Mountain Hearth Keeper & Weaver (68)',
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
      name: 'Hereditary Boti Master Cook',
      roleOrTitle: 'Third-Generation Feasting Cook (61)',
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
      name: 'Adivasi Forest Forager',
      roleOrTitle: 'Tribal Elder & Botanical Guide (75)',
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
      name: 'Thar Desert Pastoralist',
      roleOrTitle: 'Caravan Shepherd & Oral Historian (81)',
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
      name: 'Temple Food Historian',
      roleOrTitle: 'Ritual Food Archivist & Homemaker (69)',
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
      name: 'Delta Banquet Cook',
      roleOrTitle: 'Traditional Feast Curator (74)',
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
      name: 'Ao Clan Elder',
      roleOrTitle: 'Highland Elder & Village Chronicler (78)',
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

