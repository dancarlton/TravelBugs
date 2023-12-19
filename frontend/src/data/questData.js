// creator images
import creator1 from '../assets/images/creators/creator1.jpg'
import creator2 from '../assets/images/creators/creator2.jpg'

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

const questData = [
  {
    id: 1,
    title: 'Mystery Adventure',
    description: 'A thrilling quest uncovering hidden secrets in the city',
    imageUrl: quest1,
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
    tags: ['Adventure', 'Mystery', 'City'],
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
    imageUrl: quest3,
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
    tags: ['History', 'Exploration', 'Culture'],
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
    tags: ['Adventure', 'Exploration', 'City'],
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
    imageUrl: quest5,
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
    tags: ['History', 'Culture', 'Educational'],
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
    tags: ['Food', 'Gourmet', 'Culinary Adventure'],
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
    imageUrl: quest7,
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
    tags: ['Nature', 'Relaxation', 'Gardens'],
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
    imageUrl: quest8,
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
    tags: ['Supernatural', 'Haunted', 'Night Tour'],
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
    tags: ['Eco-friendly', 'Beach', 'Community Service'],
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
    imageUrl: quest10,
    imageAlt: 'City skyline at night from a rooftop bar',
    ratings: [
      { user: 'User60', rating: 4.7 },
      { user: 'User61', rating: 5.0 },
    ],
    overallRating: 4.85,
    ratingTotal: 3215,
    creator: 'Party Pete',
    creatorUserName: 'partypete',
    creatorRating: 4.8,
    creatorProfilePic: creator1,
    tags: ['Nightlife', 'Bars', 'City Views'],
    rewards: ['Drink Vouchers', 'VIP Access'],
    itinerary:
      'Start at the Skyline Lounge, then visit The Observatory and The Penthouse Club.',
    directions: 'Meet at the entrance of the Skyline Lounge.',
    creatorRecommendations: 'Dress to impress and bring a valid ID.',
  },

  {
    id: 11,
    title: 'Underground Music Scene',
    description:
      'Discover hidden music gems and underground artists in the city.',
    imageUrl: quest11,
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
    tags: ['Music', 'Underground', 'Nightlife'],
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
    imageUrl: quest12,
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
    tags: ['Crafts', 'Workshop', 'Cultural'],
    rewards: ['Handmade Souvenir', 'Workshop Certificate'],
    itinerary:
      'The workshop takes place at the Artisan’s Guild, covering various types of crafts.',
    directions: 'Meet at the entrance of the Artisan’s Guild.',
    creatorRecommendations:
      'Wear comfortable clothes that you don’t mind getting a little dirty.',
  },
]

export default questData
