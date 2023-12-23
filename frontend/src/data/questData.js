// creator images
import creator1 from '../assets/images/users/creator1.jpg'
import creator2 from '../assets/images/users/creator2.jpg'
import creator3 from '../assets/images/users/creator3.jpg'
import creator4 from '../assets/images/users/creator4.jpg'
import creator5 from '../assets/images/users/creator5.jpg'
import creator6 from '../assets/images/users/creator6.jpg'

// quest images
import quest1 from '../assets/images/quests/quest1.jpg'
import quest2 from '../assets/images/quests/quest2.jpg'
import quest3 from '../assets/images/quests/quest3.jpg'
import quest4 from '../assets/images/quests/quest4.jpg'
import quest5 from '../assets/images/quests/quest5.jpg'
import quest6 from '../assets/images/quests/quest6.jpg'
import quest7 from '../assets/images/quests/quest7.jpg'
import quest8 from '../assets/images/quests/quest8.jpg'
import quest9 from '../assets/images/quests/quest9.jpg'
import quest10 from '../assets/images/quests/quest10.jpg'
import quest11 from '../assets/images/quests/quest11.jpg'
import quest12 from '../assets/images/quests/quest12.jpg'

// trending quests
import trending1 from '../assets/images/quests/trending/trending1.jpg'
import trending2 from '../assets/images/quests/trending/trending2.jpg'
import trending3 from '../assets/images/quests/trending/trending3.jpg'
import trending4 from '../assets/images/quests/trending/trending4.jpg'
import trending5 from '../assets/images/quests/trending/trending5.jpg'

// hiking quests
import hiking1 from '../assets/images/quests/hiking/hiking1.jpg'
import hiking2 from '../assets/images/quests/hiking/hiking2.jpg'
import hiking3 from '../assets/images/quests/hiking/hiking3.jpg'
import hiking4 from '../assets/images/quests/hiking/hiking4.jpg'
import hiking5 from '../assets/images/quests/hiking/hiking5.jpg'

// date night quests
import datenight1 from '../assets/images/quests/date-night/datenight1.jpg'
import datenight2 from '../assets/images/quests/date-night/datenight2.jpg'
import datenight3 from '../assets/images/quests/date-night/datenight3.jpg'
import datenight4 from '../assets/images/quests/date-night/datenight4.jpg'
import datenight5 from '../assets/images/quests/date-night/datenight5.jpg'

// 21+ quests
import twentyone1 from '../assets/images/quests/21/twentyone1.jpg'
import twentyone2 from '../assets/images/quests/21/twentyone2.jpg'
import twentyone3 from '../assets/images/quests/21/twentyone3.jpg'
import twentyone4 from '../assets/images/quests/21/twentyone4.jpg'
import twentyone5 from '../assets/images/quests/21/twentyone5.jpg'

// top quests
import topquests1 from '../assets/images/quests/top-quests/topquest1.jpg'
import topquests2 from '../assets/images/quests/top-quests/topquest2.jpg'
import topquests3 from '../assets/images/quests/top-quests/topquest3.jpg'
import topquests4 from '../assets/images/quests/top-quests/topquest4.jpg'
import topquests5 from '../assets/images/quests/top-quests/topquest5.jpg'

// historic quests
import historic1 from '../assets/images/quests/historic/historic1.jpg'
import historic2 from '../assets/images/quests/historic/historic2.jpg'
import historic3 from '../assets/images/quests/historic/historic3.jpg'
import historic4 from '../assets/images/quests/historic/historic4.jpg'
import historic5 from '../assets/images/quests/historic/historic5.jpg'

const questData = [
  {
    id: 1,
    title: 'Mystery Adventure',
    description: 'A thrilling quest uncovering hidden secrets in the city',
    imageUrl: trending1,
    imageAlt: 'Mystery Adventure Quest',
    ratings: [
      { user: 'User1', rating: 4 },
      { user: 'User2', rating: 5 },
    ],
    overallRating: 4.5,
    ratingTotal: 3215,
    creator: 'Explorer Joe',
    creatorUserName: 'explorerjoe',
    creatorRating: 4.8,
    creatorProfilePic: creator1,
    tags: ['Arts & Culture', 'Trending Now', 'Top Quests', 'Mystery', 'City'],
    rewards: ['Drinks', 'Tickets'],
    itinerary:
      'Start at the old town square, solve the riddle, move to the next clue at the central library...',
    directions:
      'The quest begins at the heart of the city, easily accessible by public transport.',
    creatorRecommendations: 'Wear comfortable shoes and bring a water bottle.',
  },

  {
    id: 2,
    title: 'Urban Graffiti Tour',
    description: `Explore the vibrant street art in the city’s hippest neighborhoods.`,
    imageUrl: quest2,
    imageAlt: 'Colorful street graffiti',
    ratings: [
      { user: 'User10', rating: 4.5 },
      { user: 'User11', rating: 5 },
    ],
    overallRating: 4.7,
    ratingTotal: 3215,
    creator: 'Art Lover Amy',
    creatorUserName: 'artloveramy',
    creatorRating: 4.6,
    creatorProfilePic: creator2,
    tags: ['Urban', 'Art & Culture', 'Walking Tour'],
    rewards: ['Local Crafts', 'Discounts'],
    itinerary:
      'Start at Main Street, then explore alleyways and hidden corners filled with art.',
    directions: 'Meet at the corner of Main Street and 5th Avenue.',
    creatorRecommendations: 'Bring a camera and comfortable walking shoes.',
  },
  {
    id: 3,
    title: 'Historic Castle Exploration',
    description:
      'A journey back in time exploring ancient castles and their stories.',
    imageUrl: historic1,
    imageAlt: 'Ancient castle on a hill',
    ratings: [
      { user: 'User20', rating: 5 },
      { user: 'User21', rating: 4.8 },
    ],
    overallRating: 4.9,
    ratingTotal: 3215,
    creator: 'History Buff Brian',
    creatorUserName: 'historybuffbrian',
    creatorRating: 4.7,
    creatorProfilePic: creator1,
    tags: ['Historic', 'History', 'Exploration'],
    rewards: ['Museum Tickets', 'Exclusive Access'],
    itinerary:
      'Tour starts at the Royal Castle, followed by a visit to the Knight’s Tower.',
    directions: 'Gather at the city museum entrance.',
    creatorRecommendations:
      'Wear comfortable clothing and be prepared for some light climbing.',
  },
  {
    id: 4,
    title: 'City Scavenger Hunt',
    description:
      'A thrilling scavenger hunt through the city’s landmarks and hidden gems.',
    imageUrl: quest4,
    imageAlt: 'City skyline',
    ratings: [
      { user: 'User1', rating: 4.2 },
      { user: 'User2', rating: 4.8 },
    ],
    overallRating: 3.5,
    ratingTotal: 3215,
    creator: 'Adventurer Alex',
    creatorUserName: 'adventurealex',
    creatorRating: 4.6,
    creatorProfilePic: creator1,
    tags: ['Adventure', 'Exploration', 'City', 'Historic'],
    rewards: ['Gift Cards', 'Merchandise'],
    itinerary:
      'Begin at the Central Park entrance, then move to the historic downtown, ending at the city viewpoint.',
    directions: 'Meet at the main gate of Central Park.',
    creatorRecommendations: 'Wear comfortable shoes and bring a water bottle.',
  },

  {
    id: 5,
    title: 'Historical Landmarks Tour',
    description:
      'Discover the rich history of the city by visiting famous historical landmarks.',
    imageUrl: historic4,
    imageAlt: 'Historical building',
    ratings: [
      { user: 'User3', rating: 5.0 },
      { user: 'User4', rating: 4.5 },
    ],
    overallRating: 4.75,
    ratingTotal: 3215,
    creator: 'History Buff Helen',
    creatorUserName: 'historybuffhelen',
    creatorRating: 4.9,
    creatorProfilePic: creator2,
    tags: ['Historic', 'Culture', 'Educational'],
    rewards: ['Museum Tickets', 'Exclusive Access'],
    itinerary:
      'Start at the Old Town Hall, proceed to the Ancient Library, and finish at the War Memorial.',
    directions: 'Gather in front of the Old Town Hall.',
    creatorRecommendations: 'Bring a camera and a notebook for taking notes.',
  },
  {
    id: 6,
    title: 'Gourmet Food Crawl',
    description:
      'Experience the city’s best culinary delights in this gourmet food crawl.',
    imageUrl: quest6,
    imageAlt: 'Assortment of gourmet dishes',
    ratings: [
      { user: 'User27', rating: 4.8 },
      { user: 'User28', rating: 5.0 },
    ],
    overallRating: 4.9,
    ratingTotal: 3215,
    creator: 'Chef Carla',
    creatorUserName: 'chefcarla',
    creatorRating: 4.8,
    creatorProfilePic: creator1,
    tags: ['Food', 'Gourmet', 'Culinary Adventure', 'Trending'],
    rewards: ['Food Vouchers', 'Cooking Class Access'],
    itinerary:
      'Begin at the famous La Piazza restaurant, then to Bistro du Vin, and end at Chocolatier Delight.',
    directions: 'Meet outside La Piazza restaurant.',
    creatorRecommendations:
      'Come hungry and be ready to explore a variety of flavors.',
  },
  {
    id: 7,
    title: 'Secret Garden Tour',
    description: 'Explore hidden gardens and green spaces within the city.',
    imageUrl: hiking3,
    imageAlt: 'Lush green garden in the city',
    ratings: [
      { user: 'User30', rating: 4.6 },
      { user: 'User31', rating: 5 },
    ],
    overallRating: 4.8,
    ratingTotal: 3215,
    creator: 'Gardener Gwen',
    creatorUserName: 'gardenergwen',
    creatorRating: 4.9,
    creatorProfilePic: creator2,
    tags: ['Nature', 'Historic', 'Gardens', 'Trending'],
    rewards: ['Plant Seeds', 'Gardening Guide'],
    itinerary:
      'Start at the City Botanical Gardens, then visit several secret garden spots known only to locals.',
    directions: 'Meet at the main entrance of the City Botanical Gardens.',
    creatorRecommendations:
      'Wear comfortable walking shoes and bring a camera.',
  },

  {
    id: 8,
    title: 'Ghost Walk',
    description: 'A spooky tour of the city’s most haunted locations.',
    imageUrl: datenight3,
    imageAlt: 'Shadowy figure in an old building',
    ratings: [
      { user: 'User40', rating: 4.4 },
      { user: 'User41', rating: 4.9 },
    ],
    overallRating: 4.65,
    ratingTotal: 3215,
    creator: 'Spooky Sarah',
    creatorUserName: 'spookysarah',
    creatorRating: 4.7,
    creatorProfilePic: creator1,
    tags: ['Hiking', 'Nature', 'Date Night'],
    rewards: ['Ghost Stories Book', 'Flashlights'],
    itinerary:
      'Begin at the Old Cemetery, then visit the Haunted Mansion and the Abandoned Hospital.',
    directions: 'Meet at the entrance of the Old Cemetery at dusk.',
    creatorRecommendations: 'Bring a flashlight and a brave heart.',
  },

  {
    id: 9,
    title: 'Beach Cleanup Challenge',
    description:
      'Join a rewarding quest to clean and preserve our beautiful beaches.',
    imageUrl: quest9,
    imageAlt: 'Pristine beach with clear waters',
    ratings: [
      { user: 'User50', rating: 5.0 },
      { user: 'User51', rating: 4.8 },
    ],
    overallRating: 4.9,
    ratingTotal: 3215,
    creator: 'Eco Emma',
    creatorUserName: 'ecoemma',
    creatorRating: 4.9,
    creatorProfilePic: creator2,
    tags: ['Beach', 'Group'],
    rewards: ['Reusable Water Bottle', 'Eco Badge'],
    itinerary:
      'Gather at Sunrise Beach, then move along the coast, cleaning up as we go.',
    directions: 'Meet at the main parking lot of Sunrise Beach.',
    creatorRecommendations:
      'Wear sunscreen, a hat, and bring a reusable water bottle.',
  },

  {
    id: 10,
    title: 'Rooftop Bars Hop',
    description:
      'Experience the city’s nightlife with a tour of the best rooftop bars.',
    imageUrl: twentyone2,
    imageAlt: 'City skyline at night from a rooftop bar',
    ratings: [
      { user: 'User60', rating: 4.7 },
      { user: 'User61', rating: 5.0 },
    ],
    overallRating: 2.85,
    ratingTotal: 3215,
    creator: 'Party Pete',
    creatorUserName: 'partypete',
    creatorRating: 4.8,
    creatorProfilePic: creator1,
    tags: ['21+', 'Nightlife', 'Bars', 'City Views'],
    rewards: ['Drink Vouchers', 'VIP Access'],
    itinerary:
      'Start at the Skyline Lounge, then visit The Observatory and The Penthouse Club.',
    directions: 'Meet at the entrance of the Skyline Lounge.',
    creatorRecommendations: 'Dress to impress and bring a valid ID.',
  },

  {
    id: 11,
    title: 'Underground Music Scene ',
    description:
      'Discover hidden music gems and underground artists in the city.',
    imageUrl: twentyone3,
    imageAlt: 'Live band performing in an underground venue',
    ratings: [
      { user: 'User70', rating: 4.5 },
      { user: 'User71', rating: 5.0 },
    ],
    overallRating: 4.75,
    ratingTotal: 3215,
    creator: 'Music Maven Maria',
    creatorUserName: 'musicmavenmaria',
    creatorRating: 4.7,
    creatorProfilePic: creator2,
    tags: ['21+', 'Music', 'Underground', 'Nightlife', 'Trending'],
    rewards: ['Concert Tickets', 'Band Merch'],
    itinerary:
      'Begin at The Hideout, then to The Basement, and end at The Secret Spot.',
    directions: 'Meet outside The Hideout.',
    creatorRecommendations: 'Be open to new sounds and enjoy the vibe.',
  },

  {
    id: 12,
    title: 'Cultural Crafts Workshop',
    description: 'Learn traditional crafts and create your own souvenirs.',
    imageUrl: datenight1,
    imageAlt: 'Handmade crafts on a workshop table',
    ratings: [
      { user: 'User80', rating: 4.8 },
      { user: 'User81', rating: 5.0 },
    ],
    overallRating: 4.9,
    ratingTotal: 3215,
    creator: 'Crafty Carol',
    creatorUserName: 'craftycarol',
    creatorRating: 4.8,
    creatorProfilePic: creator1,
    tags: ['Arts & Culture', 'Workshop', 'Date Night', 'Group'],
    rewards: ['Handmade Souvenir', 'Workshop Certificate'],
    itinerary:
      'The workshop takes place at the Artisan’s Guild, covering various types of crafts.',
    directions: 'Meet at the entrance of the Artisan’s Guild.',
    creatorRecommendations:
      'Wear comfortable clothes that you don’t mind getting a little dirty.',
  },
  {
    id: 13,
    title: 'Urban Street Art Tour',
    description: 'Explore the vibrant street art scene with a local graffiti artist.',
    imageUrl: quest1,
    imageAlt: 'Colorful street art murals',
    ratings: [
      { user: 'User182', rating: 4.7 },
      { user: 'User183', rating: 5.0 }
    ],
    overallRating: 4.85,
    ratingTotal: 2541,
    creator: 'SprayCan Sam',
    creatorUserName: 'spraycansam',
    creatorRating: 4.9,
    creatorProfilePic: creator2,
    tags: ['Arts & Culture', 'Top 10'],
    rewards: ['Exclusive Graffiti Sticker Pack', 'Digital Tour Photo Album'],
    itinerary: 'The tour covers famous street art spots across the city center.',
    directions: 'Gather at City Park entrance.',
    creatorRecommendations: 'Comfortable walking shoes recommended.'
  },

  {
    id: 14,
    title: 'Rooftop Concert Series',
    description: 'Enjoy live music with stunning cityscape views.',
    imageUrl: twentyone1,
    imageAlt: 'Band playing on a rooftop at sunset',
    ratings: [
      { user: 'User300', rating: 4.9 },
      { user: 'User301', rating: 5.0 }
    ],
    overallRating: 4.95,
    ratingTotal: 4623,
    creator: 'Melody Masters',
    creatorUserName: 'melodymasters',
    creatorRating: 4.7,
    creatorProfilePic: creator3,
    tags: ['Music', 'Live Entertainment', 'Top 10', 'Nightlife', 'Trending'],
    rewards: ['VIP Access Badge', 'Exclusive Event Merchandise'],
    itinerary: 'The event features multiple artists performing at a prime city rooftop.',
    directions: 'Meet at the Skyline Tower lobby.',
    creatorRecommendations: 'Dress warmly for the evening breeze.'
  },

  {
    id: 15,
    title: 'Mystery Dinner Theatre',
    description: 'Participate in an interactive mystery play while enjoying a gourmet dinner.',
    imageUrl: twentyone3,
    imageAlt: 'Actors performing in a dinner theatre setting',
    ratings: [
      { user: 'User450', rating: 4.6 },
      { user: 'User451', rating: 5.0 }
    ],
    overallRating: 4.8,
    ratingTotal: 1875,
    creator: 'Dramatic Dana',
    creatorUserName: 'dramaticdana',
    creatorRating: 4.85,
    creatorProfilePic: creator4,
    tags: ['Dining', 'Theatre', 'Top 10', 'Interactive'],
    rewards: ['Signed Script Copy', 'Commemorative Photo'],
    itinerary: 'The evening unfolds with a mystery plot alongside a three-course meal.',
    directions: 'Join us at the Grandiose Theatre.',
    creatorRecommendations: 'Dress code is smart casual.'
  },

  {
    id: 16,
    title: 'Haunted Historical Tour',
    description: 'Discover the city’s haunted past with chilling tales and historical insights.',
    imageUrl: historic4,
    imageAlt: 'An old, spooky historical building at night',
    ratings: [
      { user: 'User520', rating: 4.9 },
      { user: 'User521', rating: 4.8 }
    ],
    overallRating: 4.85,
    ratingTotal: 3050,
    creator: 'Ghostly Gary',
    creatorUserName: 'ghostlygary',
    creatorRating: 4.9,
    creatorProfilePic: creator5,
    tags: ['Historical', 'Adventure', 'Top 10', 'Spooky', 'Trending'],
    rewards: ['Ghostly Souvenirs', 'Historical Guidebook'],
    itinerary: 'Tour through the city’s most notoriously haunted locations.',
    directions: 'Meet outside the Old Town Hall.',
    creatorRecommendations: 'Bring a flashlight and wear comfortable shoes.'
  },

  {
    id: 17,
    title: 'Gourmet Food Truck Rally',
    description: `Embark on a culinary adventure as you explore the city's vibrant food scene through its best food trucks. This quest invites you to sample a diverse array of gourmet delights, ranging from artisanal street tacos and gourmet burgers to exotic international cuisine and decadent desserts. As you navigate through bustling streets and cozy neighborhoods, each food truck offers a unique flavor experience, crafted by local chefs using fresh, high-quality ingredients.`,
    imageUrl: twentyone2,
    imageAlt: 'A line of food trucks at a park',
    ratings: [
      { user: 'User650', rating: 4.7 },
      { user: 'User651', rating: 4.8 }
    ],
    overallRating: 4.75,
    ratingTotal: 2100,
    creator: 'Culinary Carlos',
    creatorUserName: 'culinarycarlos',
    creatorRating: 4.6,
    creatorProfilePic: creator6,
    tags: ['Food', 'Local Cuisine', 'Top 10', 'Festival', 'Trending'],
    rewards: ['Food Tasting Pass', 'Exclusive Recipes eBook'],
    itinerary: 'Enjoy a culinary journey through the city’s top food trucks.',
    directions: 'Start at the central food truck park.',
    creatorRecommendations: 'Come hungry and ready to explore!'
  }

]

export default questData
