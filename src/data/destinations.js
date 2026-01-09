const base = process.env.PUBLIC_URL;

const destinations = [
  {
    id: "banaras",
    title: "Banaras",
    visitDate: { month: "December", year: "2025" },
    description: {
      short: "A city filled with spirituality and a showcase of India's culture and beauty.",
      long: [
        "Banaras is not just a city—it is a living rhythm of faith, history, and continuity. From the early morning prayers echoing across the ghats to the quiet rituals performed by the river, every moment feels deeply intentional and rooted in centuries of tradition.",
        "Walking through its narrow lanes reveals layers of culture at every turn—temples tucked between homes, conversations flowing freely, and a sense of timelessness that blurs the line between past and present. It is a place that invites reflection and teaches patience.",
        "Banaras leaves you with a feeling that lingers long after you leave, reminding you of the beauty in continuity and belief.",
      ],
    },
    images: {
      home: [
        `${base}/images/banaras_1.jpeg`,
        `${base}/images/banaras_2.jpeg`,
        `${base}/images/banaras_3.jpeg`,
      ],
      atlas: [
        `${base}/images/banaras_1.jpeg`,
        `${base}/images/banaras_2.jpeg`,
        `${base}/images/banaras_3.jpeg`,
        `${base}/images/banaras_4.jpeg`,
        `${base}/images/banaras_5.jpeg`,
      ],
    },
  },

  {
    id: "goa",
    title: "Goa",
    visitDate: { month: "October", year: "2024" },
    description: {
      short: "A hub for adventure sports, it is the best place to let loose and have fun in India.",
      long: [
        "Goa is a contrast of energy and ease. Its beaches stretch endlessly, offering space to pause, while its streets pulse with music, conversation, and color.",
        "Mornings feel slow and golden, while evenings come alive with lights, laughter, and movement. Beyond the popular coastlines, quieter towns and markets reveal a softer, more personal side of the region.",
        "Goa represents freedom in motion—a reminder that rest and excitement can coexist beautifully.",
        "Goa’s charm goes beyond its beaches and parties. From quiet spice plantations and lush hinterlands to vibrant Portuguese-influenced architecture, the state is a mosaic of experiences waiting to be explored. Savor local cuisine, wander through serene villages, and soak in the laid-back lifestyle that makes Goa feel like a world apart from the rush of everyday life.",
      ],
    },
    images: {
      home: [
        `${base}/images/goa_1.jpeg`,
        `${base}/images/goa_2.jpeg`,
        `${base}/images/goa_3.jpeg`,
      ],
      atlas: [
        `${base}/images/goa_1.jpeg`,
        `${base}/images/goa_2.jpeg`,
        `${base}/images/goa_3.jpeg`,
        `${base}/images/goa_4.jpeg`,
      ],
    },
  },

  {
    id: "uttarakhand",
    title: "Uttarakhand",
    visitDate: { month: "October", year: "2023" },
    description: {
      short: "A place to be surrounded by nature, away from everyday busy life.",
      long: [
        "Uttarakhand feels like an escape into stillness. Surrounded by mountains and forests, the air itself seems quieter, encouraging introspection and calm.",
        "Rivers flow steadily through valleys, and trails lead to views that reward patience and presence. Life here moves at a gentler pace, shaped by nature rather than urgency.",
        "It is a place that restores balance—a reminder of how grounding simplicity and solitude can be.",
      ],
    },
    images: {
      home: [
        `${base}/images/uttarakhand_1.jpeg`,
        `${base}/images/uttarakhand_2.jpeg`,
        `${base}/images/uttarakhand_3.jpeg`,
      ],
      atlas: [
        `${base}/images/uttarakhand_1.jpeg`,
        `${base}/images/uttarakhand_2.jpeg`,
        `${base}/images/uttarakhand_3.jpeg`,
        `${base}/images/uttarakhand_4.jpeg`,
      ],
    },
  },

  {
    id: "ayodhya",
    title: "Ayodhya",
    visitDate: { month: "December", year: "2025" },
    description: {
      short: "An ancient city with profound cultural and spiritual significance.",
      long: [
        "Ayodhya is a city steeped in history, legend, and spirituality. Known for its ancient temples and sacred ghats, it offers a serene and contemplative atmosphere for travelers seeking a connection with India's cultural heritage.",
        "Walking through its streets, you encounter a blend of tradition and vibrant local life — from colorful markets to the soothing sounds of ritual prayers along the Sarayu river. Each corner tells a story of devotion, architecture, and the passage of centuries.",
        "This city encourages visitors to slow down, reflect, and immerse themselves in a tapestry of history, mythology, and everyday beauty. Whether it’s sunrise by the river or exploring its historic landmarks, Ayodhya leaves a lasting impression on every traveler.",
      ],
    },
    images: {
      home: [
        `${base}/images/ayodhya_1.jpeg`,
        `${base}/images/ayodhya_2.jpeg`,
        `${base}/images/ayodhya_3.jpeg`,
      ],
      atlas: [
        `${base}/images/ayodhya_1.jpeg`,
        `${base}/images/ayodhya_2.jpeg`,
        `${base}/images/ayodhya_3.jpeg`,
        `${base}/images/ayodhya_4.jpeg`,
        `${base}/images/ayodhya_5.jpeg`,
      ],
    },
  },

  {
    id: "agra",
    title: "Agra",
    visitDate: { month: "July", year: "2023" },
    description: {
      short: "Agra is home to the iconic Taj Mahal and rich Mughal history.",
      long: [
        "Agra is a city steeped in history and culture, home to the iconic Taj Mahal. Walking through the white marble masterpiece is an unforgettable experience.",
        "Beyond the Taj Mahal, the Agra Fort and Fatehpur Sikri reveal centuries of Mughal architecture and stories. The bustling local bazaars offer spices, handicrafts, and vibrant street life that contrasts beautifully with the grandeur of the monuments.",
        "Agra is defined by its monumental history and enduring elegance. The Taj Mahal anchors the city in beauty and memory, while forts and markets add layers of movement, culture, and life.",
      ],
    },
    images: {
      home: [
        `${base}/images/agra_1.jpeg`,
        `${base}/images/agra_2.jpeg`,
        `${base}/images/agra_3.jpeg`,
      ],
      atlas: [
        `${base}/images/agra_1.jpeg`,
        `${base}/images/agra_2.jpeg`,
        `${base}/images/agra_3.jpeg`,
        `${base}/images/agra_4.jpeg`,
        `${base}/images/agra_5.jpeg`,
      ],
    },
  },

  {
    id: "jaipur",
    title: "Jaipur",
    visitDate: { month: "October", year: "2025" },
    description: {
      short: "Jaipur blends royal history with vibrant street life.",
      long: [
        "Jaipur reveals itself through balance and symmetry. The city’s pink-hued architecture, wide streets, and historic forts create a sense of order that feels intentional rather than rigid.",
        "Exploring its palaces and courtyards, time seems to slow down. Light, stone, and space work together to create moments of quiet reflection, even amid the city’s constant movement.",
        "Beyond the landmarks, Jaipur’s markets and neighborhoods add texture and life — fabrics, craftsmanship, and everyday rituals layered into the city’s rhythm.",
        "Jaipur leaves behind a calm sense of structure, reminding you that beauty can exist in both detail and design.",
      ],
    },
    images: {
      home: [
        `${base}/images/jaipur_1.jpeg`,
        `${base}/images/jaipur_2.jpeg`,
        `${base}/images/jaipur_3.jpeg`,
      ],
      atlas: [
        `${base}/images/jaipur_1.jpeg`,
        `${base}/images/jaipur_2.jpeg`,
        `${base}/images/jaipur_3.jpeg`,
        `${base}/images/jaipur_4.jpeg`,
        `${base}/images/jaipur_5.jpeg`,
      ],
    },
  },
];

export default destinations;