import logoImg1 from '../../../public/img/logo pictures/logo-img1.png'
import logoImg2 from '../../../public/img/logo pictures/logo-img2.png'
// import logoImg3 from '../../../public/img/logo pictures/logo-img3.png' not working
import logoImg4 from '../../../public/img/logo pictures/logo-img4.png'
import logoImg5 from '../../../public/img/logo pictures/logo-img5.png'
// import logoImg6 from '../../../public/img/logo pictures/logo-img6.png' not working
// import logoImg7 from '../../../public/img/logo pictures/logo-img7.png' not working
// import logoImg8 from '../../../public/img/logo pictures/logo-img8.png' not working
import logoImg9 from '../../../public/img/logo pictures/logo-img9.png'
import logoImg10 from '../../../public/img/logo pictures/logo-img10.png'
import logoImg11 from '../../../public/img/logo pictures/logo-img11.png'
import logoImg12 from '../../../public/img/logo pictures/logo-img12.png'
import logoImg13 from '../../../public/img/logo pictures/logo-img13.png'
import logoImg14 from '../../../public/img/logo pictures/logo-img14.png'
import logoImg15 from '../../../public/img/logo pictures/logo-img15.png'
import logoImg16 from '../../../public/img/logo pictures/logo-img16.png'
import logoImg17 from '../../../public/img/logo pictures/logo-img17.png'
import logoImg18 from '../../../public/img/logo pictures/logo-img18.png'
import logoImg19 from '../../../public/img/logo pictures/logo-img19.png'
import logoImg20 from '../../../public/img/logo pictures/logo-img20.png'
import logoImg21 from '../../../public/img/logo pictures/logo-img21.png'
import logoImg22 from '../../../public/img/logo pictures/logo-img22.png'
import logoImg23 from '../../../public/img/logo pictures/logo-img23.png'
import logoImg24 from '../../../public/img/logo pictures/logo-img24.png'
import logoImg25 from '../../../public/img/logo pictures/logo-img25.png'
import logoImg26 from '../../../public/img/logo pictures/logo-img26.png'
import logoImg27 from '../../../public/img/logo pictures/logo-img27.png'
import logoImg28 from '../../../public/img/logo pictures/logo-img28.png'
import logoImg29 from '../../../public/img/logo pictures/logo-img29.png'
import logoImg30 from '../../../public/img/logo pictures/logo-img30.png'
import logoImg31 from '../../../public/img/logo pictures/logo-img31.png'
import logoImg32 from '../../../public/img/logo pictures/logo-img32.png'
import logoImg33 from '../../../public/img/logo pictures/logo-img33.png'
import logoImg34 from '../../../public/img/logo pictures/logo-img34.png'
import logoImg35 from '../../../public/img/logo pictures/logo-img35.png'
import logoImg36 from '../../../public/img/logo pictures/logo-img36.png'
import logoImg37 from '../../../public/img/logo pictures/logo-img37.png'
import logoImg38 from '../../../public/img/logo pictures/logo-img38.png'
import logoImg39 from '../../../public/img/logo pictures/logo-img39.png'

import logoDiver1 from '../../../public/img/logo-diver26.png'
import logoDiver2 from '../../../public/img/logo-diver29.png'
import logoDiver3 from '../../../public/img/logo-diver28.png'
import logoDiver4 from '../../../public/img/logo-diver27.png'
import sellerPfp from '../../../public/img/profile.pictures/seller-pfp.jpg'
import { gigDescriptions } from "./MockDesc"



export const mockGigs2 = [
  {
    "_id": "g101",
    "title": "I will design professional business cards that leave a lasting impression",
    "description": "I create sleek, professional business cards tailored to your brand. Whether you want a minimalist or vibrant design, you'll get print-ready files that speak volumes.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=1" },
      { "src": "https://picsum.photos/550/250?random=3" },
      { "src": "https://picsum.photos/550/250?random=12" },
      { "src": "https://picsum.photos/550/250?random=8" }
    ],
    "rating": 4.8,
    "category": ["graphics-design"],
    "owner": {
      "_id": "u1",
      "fullname": "Clara Lee",
      "imgUrl": "https://picsum.photos/550/250?random=2",
      "level": 2
    },
    "purchasePlan": {
      "price": 60,
      "deliveryDay": 7,
      "revisions": 3,
      "content": "High-quality custom-designed business card with your brand identity in mind.",
      "includes": ["Commercial use", "Vector file", "Logo transparency"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u2",
          "fullname": "Leo Green",
          "loc": "Australia",
          "imgUrl": "https://picsum.photos/550/250?random=4"
        },
        "rating": 4.9,
        "comment": "Fast delivery and quality work. Thanks!"
      }
    ]
  },
  {
    "_id": "g102",
    "title": "I will develop a responsive website for your business",
    "description": "I build clean, responsive websites that are mobile-friendly and SEO-optimized. Whether you need a landing page or a full business site, I ensure performance and quality.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=5" },
      { "src": "https://picsum.photos/550/250?random=6" },
      { "src": "https://picsum.photos/550/250?random=7" },
      { "src": "https://picsum.photos/550/250?random=8" }
    ],
    "rating": 4.7,
    "category": ["programming-tech", "digital-marketing"],
    "owner": {
      "_id": "u3",
      "fullname": "Eva Brown",
      "imgUrl": "https://picsum.photos/550/250?random=9",
      "level": 2
    },
    "purchasePlan": {
      "price": 45,
      "deliveryDay": 1,
      "revisions": 5,
      "content": "Fully responsive and fast-loading business website tailored to your brand.",
      "includes": ["Source file", "Logo transparency", "Social media kit"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u4",
          "fullname": "Nina Park",
          "loc": "Germany",
          "imgUrl": "https://picsum.photos/550/250?random=10"
        },
        "rating": 4.8,
        "comment": "Beautifully coded and responsive. Highly recommend!"
      }
    ]
  },
  {
    "_id": "g103",
    "title": "I will create an AI chatbot for your website using GPT technology",
    "description": "I build intelligent AI chatbots using GPT to automate customer service and improve engagement. Let your site communicate like never before—24/7 and smart.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=11" },
      { "src": "https://picsum.photos/550/250?random=12" },
      { "src": "https://picsum.photos/550/250?random=13" },
      { "src": "https://picsum.photos/550/250?random=14" }
    ],
    "rating": 4.8,
    "category": ["ai-services", "programming-tech"],
    "owner": {
      "_id": "u5",
      "fullname": "Bob Smith",
      "imgUrl": "https://picsum.photos/550/250?random=15",
      "level": 2
    },
    "purchasePlan": {
      "price": 75,
      "deliveryDay": 5,
      "revisions": 1,
      "content": "Custom GPT chatbot for your business to automate tasks and boost user experience.",
      "includes": ["Logo transparency", "Printable file", "Vector file"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u6",
          "fullname": "Tom Ray",
          "loc": "India",
          "imgUrl": "https://picsum.photos/550/250?random=16"
        },
        "rating": 4.8,
        "comment": "Great job! Everything was just perfect."
      }
    ]
  },
  {
    "_id": "g104",
    "title": "I will animate your logo for intros and outros",
    "description": "I create dynamic logo animations perfect for YouTube intros, business promos, or social media. Your logo will stand out with a custom animation tailored to your style.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=17" },
      { "src": "https://picsum.photos/550/250?random=18" },
      { "src": "https://picsum.photos/550/250?random=19" },
      { "src": "https://picsum.photos/550/250?random=20" }
    ],
    "rating": 5.0,
    "category": ["video-animation", "graphics-design"],
    "owner": {
      "_id": "u7",
      "fullname": "Maya Patel",
      "imgUrl": "https://picsum.photos/550/250?random=1",
      "level": 1
    },
    "purchasePlan": {
      "price": 40,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Professional animated logo intro/outro that enhances your video presence.",
      "includes": ["Transparent background", "High-resolution video", "Custom animation"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u8",
          "fullname": "Carlos Mendes",
          "loc": "Brazil",
          "imgUrl": "https://picsum.photos/550/250?random=2"
        },
        "rating": 5.0,
        "comment": "Absolutely loved the animation! Looks very professional."
      }
    ]
  },
  {
    "_id": "g105",
    "title": "I will write SEO optimized blog posts for your website",
    "description": "I craft engaging, SEO-friendly blog posts that boost your visibility and keep readers hooked. Get content tailored to your niche and optimized for performance.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=3" },
      { "src": "https://picsum.photos/550/250?random=4" },
      { "src": "https://picsum.photos/550/250?random=5" },
      { "src": "https://picsum.photos/550/250?random=6" }
    ],
    "rating": 4.9,
    "category": ["writing-translation", "digital-marketing"],
    "owner": {
      "_id": "u9",
      "fullname": "Liam Turner",
      "imgUrl": "https://picsum.photos/550/250?random=7",
      "level": 3
    },
    "purchasePlan": {
      "price": 30,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "Well-researched, optimized content tailored to your industry and keywords.",
      "includes": ["SEO optimization", "Topic research", "Plagiarism check"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u10",
          "fullname": "Sarah Kim",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=8"
        },
        "rating": 4.9,
        "comment": "High quality and delivered on time. Will order again!"
      }
    ]
  },
  {
    "_id": "g106",
    "title": "I will produce a custom jingle for your podcast or brand",
    "description": "Get a catchy, professional jingle tailored to your brand voice. I compose and produce original music that gives your podcast, video, or brand identity an audio edge.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=9" },
      { "src": "https://picsum.photos/550/250?random=10" },
      { "src": "https://picsum.photos/550/250?random=11" },
      { "src": "https://picsum.photos/550/250?random=12" }
    ],
    "rating": 5.0,
    "category": ["music-audio"],
    "owner": {
      "_id": "u11",
      "fullname": "Jesse Wells",
      "imgUrl": "https://picsum.photos/550/250?random=13",
      "level": 2
    },
    "purchasePlan": {
      "price": 85,
      "deliveryDay": 4,
      "revisions": 2,
      "content": "Custom music production for branding or podcasts with commercial rights included.",
      "includes": ["High quality WAV/MP3", "Commercial use", "Custom instrumentation"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u12",
          "fullname": "Sophie Allen",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=14"
        },
        "rating": 5.0,
        "comment": "Exactly what I wanted! The jingle was perfect for my intro."
      }
    ]
  },
  {
    "_id": "g107",
    "title": "I will edit your videos with cinematic cuts and effects",
    "description": "I deliver smooth, professional video editing with transitions, effects, and color grading. Great for YouTube, promos, or short films with an eye for pacing and storytelling.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=15" },
      { "src": "https://picsum.photos/550/250?random=16" },
      { "src": "https://picsum.photos/550/250?random=17" },
      { "src": "https://picsum.photos/550/250?random=18" }
    ],
    "rating": 4.8,
    "category": ["video-animation"],
    "owner": {
      "_id": "u13",
      "fullname": "Dylan West",
      "imgUrl": "https://picsum.photos/550/250?random=19",
      "level": 1
    },
    "purchasePlan": {
      "price": 70,
      "deliveryDay": 3,
      "revisions": 3,
      "content": "Polished cinematic video edits with effects, music, and professional transitions.",
      "includes": ["Color grading", "Sound sync", "Motion graphics"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u14",
          "fullname": "Rami Cohen",
          "loc": "Israel",
          "imgUrl": "https://picsum.photos/550/250?random=20"
        },
        "rating": 4.9,
        "comment": "Loved the storytelling and flow. Very responsive and talented!"
      }
    ]
  },
  {
    "_id": "g108",
    "title": "I will write a professional business plan tailored to your startup",
    "description": "Need funding or direction? I create detailed business plans including market research, strategy, and financials to help you impress investors and launch with clarity.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=1" },
      { "src": "https://picsum.photos/550/250?random=2" },
      { "src": "https://picsum.photos/550/250?random=3" },
      { "src": "https://picsum.photos/550/250?random=4" }
    ],
    "rating": 4.7,
    "category": ["business", "finance"],
    "owner": {
      "_id": "u15",
      "fullname": "Natalie Brooks",
      "imgUrl": "https://picsum.photos/550/250?random=5",
      "level": 3
    },
    "purchasePlan": {
      "price": 120,
      "deliveryDay": 5,
      "revisions": 2,
      "content": "Investor-ready business plan including market analysis, financials, and strategy.",
      "includes": ["Market research", "Revenue model", "Pitch deck (optional)"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u16",
          "fullname": "Ahmed Saleh",
          "loc": "United Arab Emirates",
          "imgUrl": "https://picsum.photos/550/250?random=6"
        },
        "rating": 4.7,
        "comment": "Very detailed and professional. Great for my startup pitch!"
      }
    ]
  },
  {
    "_id": "g109",
    "title": "I will translate English to Spanish with accuracy and speed",
    "description": "As a bilingual speaker with 5+ years experience, I provide fluent, native-quality Spanish translations of your documents, websites, or articles—fast and accurate.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=7" },
      { "src": "https://picsum.photos/550/250?random=8" },
      { "src": "https://picsum.photos/550/250?random=9" },
      { "src": "https://picsum.photos/550/250?random=10" }
    ],
    "rating": 5.0,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u17",
      "fullname": "Luis Fernandez",
      "imgUrl": "https://picsum.photos/550/250?random=11",
      "level": 2
    },
    "purchasePlan": {
      "price": 25,
      "deliveryDay": 1,
      "revisions": 2,
      "content": "Manual translation of up to 1000 words from English to Spanish with native fluency.",
      "includes": ["Proofreading", "Localization", "Fast delivery"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u18",
          "fullname": "Clara Weiss",
          "loc": "Switzerland",
          "imgUrl": "https://picsum.photos/550/250?random=12"
        },
        "rating": 5.0,
        "comment": "Perfect translation. Very fast too. Gracias!"
      }
    ]
  },
  {
    "_id": "g110",
    "title": "I will optimize your WordPress website for performance and SEO",
    "description": "Improve your website’s speed and visibility! I handle caching, image optimization, keyword integration, and mobile responsiveness for peak WordPress performance.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=13" },
      { "src": "https://picsum.photos/550/250?random=14" },
      { "src": "https://picsum.photos/550/250?random=15" },
      { "src": "https://picsum.photos/550/250?random=16" }
    ],
    "rating": 4.6,
    "category": ["programming-tech", "digital-marketing"],
    "owner": {
      "_id": "u19",
      "fullname": "Arjun Mehra",
      "imgUrl": "https://picsum.photos/550/250?random=17",
      "level": 1
    },
    "purchasePlan": {
      "price": 55,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Speed up and optimize your WordPress site with technical and on-page SEO.",
      "includes": ["SEO report", "Performance boost", "Mobile optimization"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u20",
          "fullname": "Emily Zhao",
          "loc": "Singapore",
          "imgUrl": "https://picsum.photos/550/250?random=18"
        },
        "rating": 4.6,
        "comment": "Noticed a big jump in loading speed. Very helpful!"
      }
    ]
  },
  {
    "_id": "g111",
    "title": "I will design eye-catching social media posts for your brand",
    "description": "I create visually engaging and brand-consistent social media graphics tailored for platforms like Instagram, Facebook, and Twitter. Boost engagement and leave a lasting impression.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=1" },
      { "src": "https://picsum.photos/550/250?random=2" },
      { "src": "https://picsum.photos/550/250?random=3" },
      { "src": "https://picsum.photos/550/250?random=4" }
    ],
    "rating": 4.9,
    "category": ["graphics-design", "digital-marketing"],
    "owner": {
      "_id": "u21",
      "fullname": "Monica Reyes",
      "imgUrl": "https://picsum.photos/550/250?random=5",
      "level": 2
    },
    "purchasePlan": {
      "price": 40,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Professionally designed social posts tailored to your branding and audience.",
      "includes": ["High-res images", "Platform-specific sizes", "Source file"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u22",
          "fullname": "Kai Yamamoto",
          "loc": "Japan",
          "imgUrl": "https://picsum.photos/550/250?random=6"
        },
        "rating": 4.9,
        "comment": "Fantastic graphics that really boosted our engagement!"
      }
    ]
  },
  {
    "_id": "g112",
    "title": "I will develop a custom API using Node.js and Express",
    "description": "I’ll build a scalable, secure RESTful API using Node.js and Express, perfect for integrating with mobile apps, web apps, or external services. Includes full documentation.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=7" },
      { "src": "https://picsum.photos/550/250?random=8" },
      { "src": "https://picsum.photos/550/250?random=9" },
      { "src": "https://picsum.photos/550/250?random=10" }
    ],
    "rating": 4.8,
    "category": ["programming-tech"],
    "owner": {
      "_id": "u23",
      "fullname": "Omar Ali",
      "imgUrl": "https://picsum.photos/550/250?random=11",
      "level": 1
    },
    "purchasePlan": {
      "price": 90,
      "deliveryDay": 3,
      "revisions": 3,
      "content": "Custom-built REST API using Node.js/Express with endpoints and authentication.",
      "includes": ["CRUD operations", "JWT Auth", "API docs"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u24",
          "fullname": "Brian Lee",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=12"
        },
        "rating": 4.8,
        "comment": "API was well-structured and easy to integrate!"
      }
    ]
  },
  {
    "_id": "g113",
    "title": "I will compose relaxing ambient music for meditation or sleep",
    "description": "Immerse your audience in calm. I produce original ambient tracks tailored to meditation, sleep aids, or background music for apps and videos.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=13" },
      { "src": "https://picsum.photos/550/250?random=14" },
      { "src": "https://picsum.photos/550/250?random=15" },
      { "src": "https://picsum.photos/550/250?random=16" }
    ],
    "rating": 5.0,
    "category": ["music-audio"],
    "owner": {
      "_id": "u25",
      "fullname": "Yara Mendez",
      "imgUrl": "https://picsum.photos/550/250?random=17",
      "level": 2
    },
    "purchasePlan": {
      "price": 65,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "Custom ambient music for sleep, meditation, or relaxation with royalty-free rights.",
      "includes": ["HQ WAV file", "Loopable version", "Commercial rights"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u26",
          "fullname": "Sean Patel",
          "loc": "India",
          "imgUrl": "https://picsum.photos/550/250?random=18"
        },
        "rating": 5.0,
        "comment": "The audio was beautifully composed and calming!"
      }
    ]
  },
  {
    "_id": "g114",
    "title": "I will write SEO blog articles tailored to your niche",
    "description": "Boost your search engine rankings with well-researched, keyword-optimized articles that speak to your audience and elevate your content strategy.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=19" },
      { "src": "https://picsum.photos/550/250?random=20" },
      { "src": "https://picsum.photos/550/250?random=1" },
      { "src": "https://picsum.photos/550/250?random=2" }
    ],
    "rating": 4.7,
    "category": ["writing-translation", "digital-marketing"],
    "owner": {
      "_id": "u27",
      "fullname": "Greta Novak",
      "imgUrl": "https://picsum.photos/550/250?random=3",
      "level": 1
    },
    "purchasePlan": {
      "price": 35,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Up to 1000 words of SEO-friendly blog content, tailored to your niche and tone.",
      "includes": ["Meta description", "Keyword research", "Royalty-free image"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u28",
          "fullname": "Jonas Meier",
          "loc": "Germany",
          "imgUrl": "https://picsum.photos/550/250?random=4"
        },
        "rating": 4.7,
        "comment": "Well written and exactly what my blog needed."
      }
    ]
  },
  {
    "_id": "g115",
    "title": "I will animate your logo into a dynamic video intro",
    "description": "Make your brand stand out with a custom animated logo intro. Perfect for YouTube, presentations, or product videos.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=5" },
      { "src": "https://picsum.photos/550/250?random=6" },
      { "src": "https://picsum.photos/550/250?random=7" },
      { "src": "https://picsum.photos/550/250?random=8" }
    ],
    "rating": 4.9,
    "category": ["video-animation", "graphics-design"],
    "owner": {
      "_id": "u29",
      "fullname": "Leo Martins",
      "imgUrl": "https://picsum.photos/550/250?random=9",
      "level": 3
    },
    "purchasePlan": {
      "price": 60,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Custom animated logo intro in MP4 format with your brand style.",
      "includes": ["Full HD", "Sound FX", "Transparency version"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30",
          "fullname": "Nina Roz",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=10"
        },
        "rating": 4.9,
        "comment": "Slick animation! Perfect for my video series intros."
      }
    ]
  },
  {
    "_id": "g116",
    "title": "I will provide professional business name ideas with available domains",
    "description": "I’ll brainstorm brandable and unique business name ideas for your startup or product, with available domain options and a rationale for each suggestion.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=11" },
      { "src": "https://picsum.photos/550/250?random=12" },
      { "src": "https://picsum.photos/550/250?random=13" },
      { "src": "https://picsum.photos/550/250?random=14" }
    ],
    "rating": 4.8,
    "category": ["business"],
    "owner": {
      "_id": "u31",
      "fullname": "Isaac Fong",
      "imgUrl": "https://picsum.photos/550/250?random=15",
      "level": 2
    },
    "purchasePlan": {
      "price": 30,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "5 business name ideas with available .com domains and brief brand explanations.",
      "includes": ["Domain check", "Brand rationale", "Naming strategy"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u32",
          "fullname": "Veronica Miles",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=16"
        },
        "rating": 4.8,
        "comment": "Creative and relevant names with domains ready to register!"
      }
    ]
  },
  {
    "_id": "g117",
    "title": "I will create an explainer video with voice over",
    "description": "I’ll produce a professional explainer video including scriptwriting, animation, and voice-over to effectively communicate your product or service.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=17" },
      { "src": "https://picsum.photos/550/250?random=18" },
      { "src": "https://picsum.photos/550/250?random=19" },
      { "src": "https://picsum.photos/550/250?random=20" }
    ],
    "rating": 5.0,
    "category": ["video-animation"],
    "owner": {
      "_id": "u33",
      "fullname": "Carmen Diaz",
      "imgUrl": "https://picsum.photos/550/250?random=1",
      "level": 3
    },
    "purchasePlan": {
      "price": 120,
      "deliveryDay": 5,
      "revisions": 3,
      "content": "60-second animated explainer video with voice-over and custom graphics.",
      "includes": ["Scriptwriting", "Voice-over", "HD video"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u34",
          "fullname": "Ali Reza",
          "loc": "Pakistan",
          "imgUrl": "https://picsum.photos/550/250?random=2"
        },
        "rating": 5.0,
        "comment": "Very professional and perfectly communicated our app's value!"
      }
    ]
  },
  {
    "_id": "g118",
    "title": "I will build an eCommerce website using Shopify",
    "description": "I’ll design and set up your Shopify store with a premium theme, essential apps, and customizations that fit your brand. Perfect for launching your online store quickly and efficiently.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=3" },
      { "src": "https://picsum.photos/550/250?random=4" },
      { "src": "https://picsum.photos/550/250?random=5" },
      { "src": "https://picsum.photos/550/250?random=6" }
    ],
    "rating": 4.9,
    "category": ["programming-tech"],
    "owner": {
      "_id": "u35",
      "fullname": "Samira Khan",
      "imgUrl": "https://picsum.photos/550/250?random=7",
      "level": 2
    },
    "purchasePlan": {
      "price": 150,
      "deliveryDay": 7,
      "revisions": 2,
      "content": "Complete Shopify store setup with up to 10 product uploads and full customization.",
      "includes": ["Responsive design", "SEO setup", "Payment gateway integration"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u36",
          "fullname": "Tobias Frank",
          "loc": "Germany",
          "imgUrl": "https://picsum.photos/550/250?random=8"
        },
        "rating": 4.9,
        "comment": "Beautiful store setup, and everything worked right out of the box."
      }
    ]
  },
  {
    "_id": "g119",
    "title": "I will translate English to Spanish and vice versa",
    "description": "Accurate and culturally adapted translations between English and Spanish for websites, documents, and more. Native fluency and fast delivery.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=9" },
      { "src": "https://picsum.photos/550/250?random=10" },
      { "src": "https://picsum.photos/550/250?random=11" },
      { "src": "https://picsum.photos/550/250?random=12" }
    ],
    "rating": 4.8,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u37",
      "fullname": "Luis Hernandez",
      "imgUrl": "https://picsum.photos/550/250?random=13",
      "level": 1
    },
    "purchasePlan": {
      "price": 25,
      "deliveryDay": 1,
      "revisions": 1,
      "content": "Up to 1000 words of professional English-Spanish or Spanish-English translation.",
      "includes": ["Proofreading", "Localization", "Editable doc"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u38",
          "fullname": "Anna Schmitt",
          "loc": "Switzerland",
          "imgUrl": "https://picsum.photos/550/250?random=14"
        },
        "rating": 4.8,
        "comment": "Great quality and very natural translation!"
      }
    ]
  },
  {
    "_id": "g120",
    "title": "I will train a custom AI model for your business use case",
    "description": "Get a fine-tuned AI model for your specific use case, including NLP tasks, chatbots, or predictive analytics. I’ll handle data preparation, training, and deployment.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=15" },
      { "src": "https://picsum.photos/550/250?random=16" },
      { "src": "https://picsum.photos/550/250?random=17" },
      { "src": "https://picsum.photos/550/250?random=18" }
    ],
    "rating": 5.0,
    "category": ["ai-services"],
    "owner": {
      "_id": "u39",
      "fullname": "Zhen Wei",
      "imgUrl": "https://picsum.photos/550/250?random=19",
      "level": 3
    },
    "purchasePlan": {
      "price": 300,
      "deliveryDay": 10,
      "revisions": 2,
      "content": "Custom AI model trained on your data with API access and deployment support.",
      "includes": ["Model training", "Evaluation report", "Deployment guide"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u40",
          "fullname": "George Allen",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=20"
        },
        "rating": 5.0,
        "comment": "Incredible service, and the model exceeded our expectations!"
      }
    ]
  },
  {
    "_id": "g121",
    "title": "I will design engaging Instagram carousel posts for your brand",
    "description": "I’ll create visually compelling and on-brand Instagram carousel posts to help drive engagement and improve your social media presence.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=1" },
      { "src": "https://picsum.photos/550/250?random=2" },
      { "src": "https://picsum.photos/550/250?random=3" },
      { "src": "https://picsum.photos/550/250?random=4" }
    ],
    "rating": 4.9,
    "category": ["graphics-design"],
    "owner": {
      "_id": "u41",
      "fullname": "Nina Patel",
      "imgUrl": "https://picsum.photos/550/250?random=5",
      "level": 2
    },
    "purchasePlan": {
      "price": 35,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "3 fully designed Instagram carousel posts tailored to your brand.",
      "includes": ["Custom graphics", "Branded templates", "Editable source files"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u42",
          "fullname": "Kyle Tran",
          "loc": "Vietnam",
          "imgUrl": "https://picsum.photos/550/250?random=6"
        },
        "rating": 4.9,
        "comment": "These carousels gave my page a major boost in impressions!"
      }
    ]
  },
  {
    "_id": "g122",
    "title": "I will write SEO optimized blog posts to grow your traffic",
    "description": "I’ll write high-quality, keyword-optimized blog posts that are tailored to your niche, drive organic traffic, and resonate with your target audience.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=7" },
      { "src": "https://picsum.photos/550/250?random=8" },
      { "src": "https://picsum.photos/550/250?random=9" },
      { "src": "https://picsum.photos/550/250?random=10" }
    ],
    "rating": 4.7,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u43",
      "fullname": "Liam O'Connor",
      "imgUrl": "https://picsum.photos/550/250?random=11",
      "level": 1
    },
    "purchasePlan": {
      "price": 40,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "1000-word SEO blog post with optimized meta description and header structure.",
      "includes": ["Keyword research", "SEO formatting", "Grammarly check"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u44",
          "fullname": "Sophie Müller",
          "loc": "Germany",
          "imgUrl": "https://picsum.photos/550/250?random=12"
        },
        "rating": 4.7,
        "comment": "Solid SEO writing — my posts started ranking in just a few weeks!"
      }
    ]
  },
  {
    "_id": "g123",
    "title": "I will mix and master your song for a radio-ready sound",
    "description": "Professional audio mixing and mastering for your song using industry-standard plugins to achieve a polished, radio-ready track.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=13" },
      { "src": "https://picsum.photos/550/250?random=14" },
      { "src": "https://picsum.photos/550/250?random=15" },
      { "src": "https://picsum.photos/550/250?random=16" }
    ],
    "rating": 5.0,
    "category": ["music-audio"],
    "owner": {
      "_id": "u45",
      "fullname": "Jonas White",
      "imgUrl": "https://picsum.photos/550/250?random=17",
      "level": 3
    },
    "purchasePlan": {
      "price": 75,
      "deliveryDay": 4,
      "revisions": 3,
      "content": "Mixing and mastering for one track up to 5 minutes long.",
      "includes": ["EQ and compression", "Stereo imaging", "Final mastering"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u46",
          "fullname": "Chloe Rivera",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=18"
        },
        "rating": 5.0,
        "comment": "Sounded so clean and professional — ready for release!"
      }
    ]
  },
  {
    "_id": "g124",
    "title": "I will create and manage Facebook ad campaigns",
    "description": "Get effective Facebook ad campaigns designed to convert, including strategy, ad copywriting, creative direction, and daily optimization.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=19" },
      { "src": "https://picsum.photos/550/250?random=20" },
      { "src": "https://picsum.photos/550/250?random=1" },
      { "src": "https://picsum.photos/550/250?random=2" }
    ],
    "rating": 4.6,
    "category": ["digital-marketing"],
    "owner": {
      "_id": "u47",
      "fullname": "Marco Leoni",
      "imgUrl": "https://picsum.photos/550/250?random=3",
      "level": 2
    },
    "purchasePlan": {
      "price": 100,
      "deliveryDay": 7,
      "revisions": 1,
      "content": "Full Facebook ad campaign setup with targeting and optimization.",
      "includes": ["Audience targeting", "Ad copywriting", "Performance reporting"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u48",
          "fullname": "Olivia Zhang",
          "loc": "Singapore",
          "imgUrl": "https://picsum.photos/550/250?random=4"
        },
        "rating": 4.6,
        "comment": "Got good results and helpful feedback on our ad strategy."
      }
    ]
  },
  {
    "_id": "g125",
    "title": "I will develop a custom WordPress plugin for your website",
    "description": "I will design and code a custom WordPress plugin that fits your exact functionality needs, whether it’s a contact form, integration, or automation.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=5" },
      { "src": "https://picsum.photos/550/250?random=6" },
      { "src": "https://picsum.photos/550/250?random=7" },
      { "src": "https://picsum.photos/550/250?random=8" }
    ],
    "rating": 4.9,
    "category": ["programming-tech"],
    "owner": {
      "_id": "u49",
      "fullname": "Fatima Al-Najjar",
      "imgUrl": "https://picsum.photos/550/250?random=9",
      "level": 2
    },
    "purchasePlan": {
      "price": 180,
      "deliveryDay": 6,
      "revisions": 2,
      "content": "Custom-built plugin with documentation and compatibility testing.",
      "includes": ["Custom functionality", "Security tested", "Installation help"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u50",
          "fullname": "Brian Lim",
          "loc": "Malaysia",
          "imgUrl": "https://picsum.photos/550/250?random=10"
        },
        "rating": 4.9,
        "comment": "Worked like a charm. Just what my site needed."
      }
    ]
  },
  {
    "_id": "g126",
    "title": "I will create a professional explainer video for your business",
    "description": "I will produce a clear and engaging explainer video that highlights your product or service and connects with your audience effectively.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=11" },
      { "src": "https://picsum.photos/550/250?random=12" },
      { "src": "https://picsum.photos/550/250?random=13" },
      { "src": "https://picsum.photos/550/250?random=14" }
    ],
    "rating": 4.8,
    "category": ["video-animation"],
    "owner": {
      "_id": "u51",
      "fullname": "Jared Collins",
      "imgUrl": "https://picsum.photos/550/250?random=15",
      "level": 3
    },
    "purchasePlan": {
      "price": 150,
      "deliveryDay": 5,
      "revisions": 2,
      "content": "1-minute explainer video with script, voiceover, and animation.",
      "includes": ["Storyboard", "Voiceover", "HD delivery"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u52",
          "fullname": "Maria Gonzalez",
          "loc": "Spain",
          "imgUrl": "https://picsum.photos/550/250?random=16"
        },
        "rating": 4.8,
        "comment": "Great video that perfectly explained our service."
      }
    ]
  },
  {
    "_id": "g127",
    "title": "I will build a responsive ecommerce website using Shopify",
    "description": "I will design and develop a responsive, user-friendly Shopify ecommerce store customized for your brand and products.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=17" },
      { "src": "https://picsum.photos/550/250?random=18" },
      { "src": "https://picsum.photos/550/250?random=19" },
      { "src": "https://picsum.photos/550/250?random=20" }
    ],
    "rating": 4.9,
    "category": ["programming-tech"],
    "owner": {
      "_id": "u53",
      "fullname": "Emily Turner",
      "imgUrl": "https://picsum.photos/550/250?random=1",
      "level": 2
    },
    "purchasePlan": {
      "price": 250,
      "deliveryDay": 7,
      "revisions": 3,
      "content": "Custom Shopify store with responsive design and payment integration.",
      "includes": ["Product upload", "SEO optimization", "Mobile-friendly"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u54",
          "fullname": "Ahmed Hassan",
          "loc": "Egypt",
          "imgUrl": "https://picsum.photos/550/250?random=2"
        },
        "rating": 5.0,
        "comment": "Fantastic job, my online store looks amazing and works smoothly."
      }
    ]
  },
  {
    "_id": "g128",
    "title": "I will translate your documents from English to Spanish",
    "description": "Accurate and professional translation of documents from English to Spanish, preserving the meaning and tone of your original content.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=3" },
      { "src": "https://picsum.photos/550/250?random=4" },
      { "src": "https://picsum.photos/550/250?random=5" },
      { "src": "https://picsum.photos/550/250?random=6" }
    ],
    "rating": 4.7,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u55",
      "fullname": "Isabella Cruz",
      "imgUrl": "https://picsum.photos/550/250?random=7",
      "level": 1
    },
    "purchasePlan": {
      "price": 30,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Translate up to 1000 words from English to Spanish with natural flow.",
      "includes": ["Proofreading", "Cultural accuracy", "Fast delivery"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u56",
          "fullname": "John Baker",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=8"
        },
        "rating": 4.6,
        "comment": "Perfect translation, very precise and clear."
      }
    ]
  },
  {
    "_id": "g129",
    "title": "I will create custom AI chatbot solutions for your business",
    "description": "I develop AI-powered chatbots tailored to your business needs that improve customer engagement and automate support efficiently.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=9" },
      { "src": "https://picsum.photos/550/250?random=10" },
      { "src": "https://picsum.photos/550/250?random=11" },
      { "src": "https://picsum.photos/550/250?random=12" }
    ],
    "rating": 4.9,
    "category": ["ai-services"],
    "owner": {
      "_id": "u57",
      "fullname": "Carlos Mendes",
      "imgUrl": "https://picsum.photos/550/250?random=13",
      "level": 3
    },
    "purchasePlan": {
      "price": 300,
      "deliveryDay": 10,
      "revisions": 2,
      "content": "Custom AI chatbot with NLP capabilities, integration, and training data.",
      "includes": ["NLP model training", "Multi-platform support", "Analytics setup"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u58",
          "fullname": "Laura Kim",
          "loc": "South Korea",
          "imgUrl": "https://picsum.photos/550/250?random=14"
        },
        "rating": 5.0,
        "comment": "This chatbot transformed how we interact with customers!"
      }
    ]
  },
  {
    "_id": "g130",
    "title": "I will provide professional bookkeeping and accounting services",
    "description": "Comprehensive bookkeeping and accounting services to keep your financial records accurate and up-to-date, suitable for small businesses.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=15" },
      { "src": "https://picsum.photos/550/250?random=16" },
      { "src": "https://picsum.photos/550/250?random=17" },
      { "src": "https://picsum.photos/550/250?random=18" }
    ],
    "rating": 4.8,
    "category": ["finance"],
    "owner": {
      "_id": "u59",
      "fullname": "Monica Reyes",
      "imgUrl": "https://picsum.photos/550/250?random=19",
      "level": 2
    },
    "purchasePlan": {
      "price": 120,
      "deliveryDay": 5,
      "revisions": 3,
      "content": "Monthly bookkeeping service including bank reconciliation and financial statements.",
      "includes": ["Bank reconciliation", "Expense tracking", "Financial reports"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u60",
          "fullname": "David Kim",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=20"
        },
        "rating": 4.7,
        "comment": "Reliable and accurate, helped us stay organized."
      }
    ]
  },
  {
    "_id": "g131",
    "title": "I will design a stunning social media marketing campaign",
    "description": "I will craft creative and effective social media marketing campaigns that increase engagement and grow your brand’s online presence.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=5" },
      { "src": "https://picsum.photos/550/250?random=6" },
      { "src": "https://picsum.photos/550/250?random=7" },
      { "src": "https://picsum.photos/550/250?random=8" }
    ],
    "rating": 4.9,
    "category": ["digital-marketing"],
    "owner": {
      "_id": "u61",
      "fullname": "Nina Patel",
      "imgUrl": "https://picsum.photos/550/250?random=9",
      "level": 3
    },
    "purchasePlan": {
      "price": 180,
      "deliveryDay": 6,
      "revisions": 3,
      "content": "Complete campaign strategy with content calendar, graphics, and analytics.",
      "includes": ["Content creation", "Ad setup", "Performance tracking"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u62",
          "fullname": "Sam Wilson",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=10"
        },
        "rating": 5.0,
        "comment": "My followers and sales increased thanks to this campaign!"
      }
    ]
  }
  ,
  {
    "_id": "g132",
    "title": "I will develop a custom WordPress website tailored to your needs",
    "description": "I will build a fast, secure, and responsive WordPress site customized to your requirements with SEO best practices.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=11" },
      { "src": "https://picsum.photos/550/250?random=12" },
      { "src": "https://picsum.photos/550/250?random=13" },
      { "src": "https://picsum.photos/550/250?random=14" }
    ],
    "rating": 4.8,
    "category": ["programming-tech"],
    "owner": {
      "_id": "u63",
      "fullname": "Oliver James",
      "imgUrl": "https://picsum.photos/550/250?random=15",
      "level": 2
    },
    "purchasePlan": {
      "price": 200,
      "deliveryDay": 7,
      "revisions": 2,
      "content": "Custom WordPress website with theme customization and plugins installation.",
      "includes": ["Responsive design", "SEO optimized", "Security setup"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u64",
          "fullname": "Linda Park",
          "loc": "Australia",
          "imgUrl": "https://picsum.photos/550/250?random=16"
        },
        "rating": 4.7,
        "comment": "Professional work, site looks great and functions perfectly."
      }
    ]
  }
  ,
  {
    "_id": "g133",
    "title": "I will write engaging blog posts and articles for your website",
    "description": "I provide high-quality, SEO-friendly blog posts and articles tailored to your niche and audience to boost your website traffic.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=17" },
      { "src": "https://picsum.photos/550/250?random=18" },
      { "src": "https://picsum.photos/550/250?random=19" },
      { "src": "https://picsum.photos/550/250?random=20" }
    ],
    "rating": 4.8,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u65",
      "fullname": "Sophia Lee",
      "imgUrl": "https://picsum.photos/550/250?random=1",
      "level": 1
    },
    "purchasePlan": {
      "price": 50,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "Up to 1000 words of original, SEO-optimized blog content on your topic.",
      "includes": ["SEO keywords", "Proofreading", "Fast delivery"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u66",
          "fullname": "Mark Brown",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=2"
        },
        "rating": 4.9,
        "comment": "Great content that improved my site’s search rankings."
      }
    ]
  }
  ,
  {
    "_id": "g134",
    "title": "I will compose original music and soundtracks for your projects",
    "description": "I create custom, royalty-free music tracks and sound effects tailored to match your video, game, or multimedia project perfectly.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=3" },
      { "src": "https://picsum.photos/550/250?random=4" },
      { "src": "https://picsum.photos/550/250?random=5" },
      { "src": "https://picsum.photos/550/250?random=6" }
    ],
    "rating": 4.7,
    "category": ["music-audio"],
    "owner": {
      "_id": "u67",
      "fullname": "Ethan Walker",
      "imgUrl": "https://picsum.photos/550/250?random=7",
      "level": 2
    },
    "purchasePlan": {
      "price": 120,
      "deliveryDay": 5,
      "revisions": 3,
      "content": "Custom music track up to 3 minutes, mixed and mastered for your project.",
      "includes": ["Royalty-free license", "Multiple genres", "Fast delivery"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u68",
          "fullname": "Jessica Green",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=8"
        },
        "rating": 4.8,
        "comment": "Perfect music that elevated the emotion of my video."
      }
    ]
  }
  ,
  {
    "_id": "g135",
    "title": "I will provide expert business consulting to improve your strategy",
    "description": "I offer strategic business consulting to help you optimize operations, increase revenue, and develop sustainable growth plans.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=9" },
      { "src": "https://picsum.photos/550/250?random=10" },
      { "src": "https://picsum.photos/550/250?random=11" },
      { "src": "https://picsum.photos/550/250?random=12" }
    ],
    "rating": 4.9,
    "category": ["business"],
    "owner": {
      "_id": "u69",
      "fullname": "Grace Thompson",
      "imgUrl": "https://picsum.photos/550/250?random=13",
      "level": 3
    },
    "purchasePlan": {
      "price": 200,
      "deliveryDay": 7,
      "revisions": 2,
      "content": "Business strategy review with detailed report and action plan.",
      "includes": ["Market analysis", "Growth strategies", "Financial review"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u70",
          "fullname": "Henry Clark",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=14"
        },
        "rating": 5.0,
        "comment": "The consulting advice was clear and actionable, helped our growth a lot."
      }
    ]
  },
  {
    "_id": "g136",
    "title": "I will create professional explainer videos that engage your audience",
    "description": "I produce high-quality explainer videos with clear messaging and engaging visuals to effectively communicate your brand or product.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=15" },
      { "src": "https://picsum.photos/550/250?random=16" },
      { "src": "https://picsum.photos/550/250?random=17" },
      { "src": "https://picsum.photos/550/250?random=18" }
    ],
    "rating": 4.9,
    "category": ["video-animation"],
    "owner": {
      "_id": "u71",
      "fullname": "Liam Scott",
      "imgUrl": "https://picsum.photos/550/250?random=19",
      "level": 2
    },
    "purchasePlan": {
      "price": 150,
      "deliveryDay": 5,
      "revisions": 3,
      "content": "A 60-second animated explainer video with professional voiceover and music.",
      "includes": ["Storyboard", "Voiceover", "HD video"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u72",
          "fullname": "Emily Davis",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=20"
        },
        "rating": 5.0,
        "comment": "The video perfectly explained my service and boosted customer interest."
      }
    ]
  }
  ,
  {
    "_id": "g137",
    "title": "I will perform advanced SEO optimization for your website",
    "description": "I will audit and optimize your website to improve search engine rankings and increase organic traffic.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=1" },
      { "src": "https://picsum.photos/550/250?random=2" },
      { "src": "https://picsum.photos/550/250?random=3" },
      { "src": "https://picsum.photos/550/250?random=4" }
    ],
    "rating": 4.8,
    "category": ["digital-marketing"],
    "owner": {
      "_id": "u73",
      "fullname": "Maya Patel",
      "imgUrl": "https://picsum.photos/550/250?random=5",
      "level": 3
    },
    "purchasePlan": {
      "price": 175,
      "deliveryDay": 7,
      "revisions": 2,
      "content": "Complete SEO audit, keyword research, and on-page/off-page optimization.",
      "includes": ["Keyword research", "Backlink building", "Technical SEO"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u74",
          "fullname": "David Lee",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=6"
        },
        "rating": 4.9,
        "comment": "My website ranking improved significantly thanks to this SEO work."
      }
    ]
  }
  ,
  {
    "_id": "g138",
    "title": "I will translate your documents accurately between English and Spanish",
    "description": "Professional document translation services to ensure accurate and culturally appropriate translations between English and Spanish.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=7" },
      { "src": "https://picsum.photos/550/250?random=8" },
      { "src": "https://picsum.photos/550/250?random=9" },
      { "src": "https://picsum.photos/550/250?random=10" }
    ],
    "rating": 4.7,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u75",
      "fullname": "Carlos Ramirez",
      "imgUrl": "https://picsum.photos/550/250?random=11",
      "level": 1
    },
    "purchasePlan": {
      "price": 60,
      "deliveryDay": 4,
      "revisions": 2,
      "content": "Accurate translation of documents up to 2000 words with attention to nuance.",
      "includes": ["Proofreading", "Formatting", "Cultural localization"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u76",
          "fullname": "Anna Kim",
          "loc": "South Korea",
          "imgUrl": "https://picsum.photos/550/250?random=12"
        },
        "rating": 4.8,
        "comment": "The translation was precise and delivered on time."
      }
    ]
  }
  ,
  {
    "_id": "g139",
    "title": "I will build AI-powered chatbots for your website or app",
    "description": "I design and deploy AI chatbots tailored to your business needs to automate customer support and enhance engagement.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=13" },
      { "src": "https://picsum.photos/550/250?random=14" },
      { "src": "https://picsum.photos/550/250?random=15" },
      { "src": "https://picsum.photos/550/250?random=16" }
    ],
    "rating": 4.9,
    "category": ["ai-services"],
    "owner": {
      "_id": "u77",
      "fullname": "Zara Ahmed",
      "imgUrl": "https://picsum.photos/550/250?random=17",
      "level": 2
    },
    "purchasePlan": {
      "price": 220,
      "deliveryDay": 8,
      "revisions": 3,
      "content": "Custom AI chatbot with natural language processing and integration with your platform.",
      "includes": ["Custom scripts", "Analytics dashboard", "24/7 support"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u78",
          "fullname": "Tom Harris",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=18"
        },
        "rating": 5.0,
        "comment": "The chatbot improved my customer service response time tremendously."
      }
    ]
  }
  ,
  {
    "_id": "g140",
    "title": "I will prepare detailed financial analysis and forecasting reports",
    "description": "Professional financial analysis and forecasting to help you make informed business decisions and plan for future growth.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=19" },
      { "src": "https://picsum.photos/550/250?random=20" },
      { "src": "https://picsum.photos/550/250?random=1" },
      { "src": "https://picsum.photos/550/250?random=2" }
    ],
    "rating": 4.8,
    "category": ["finance"],
    "owner": {
      "_id": "u79",
      "fullname": "Michael Chen",
      "imgUrl": "https://picsum.photos/550/250?random=3",
      "level": 3
    },
    "purchasePlan": {
      "price": 250,
      "deliveryDay": 7,
      "revisions": 2,
      "content": "Comprehensive financial reports with forecasting models and actionable insights.",
      "includes": ["Budgeting", "Cash flow analysis", "Risk assessment"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u80",
          "fullname": "Sara Martinez",
          "loc": "Spain",
          "imgUrl": "https://picsum.photos/550/250?random=4"
        },
        "rating": 4.9,
        "comment": "Excellent financial insights that helped us avoid costly mistakes."
      }
    ]
  },
  {
    "_id": "g149",
    "title": "I will design a professional brand logo that stands out",
    "description": "Professional logo design tailored to reflect your brand identity and values.",
    "imgUrl": [
      { "src": logoImg9 },
      { "src": logoImg10 },
      { "src": logoImg11 },
      { "src": logoImg12 }
    ],
    "rating": 4.9,
    "category": ["graphics-design", "logo"],
    "owner": {
      "_id": "u97",
      "fullname": "Mia Roberts",
      "imgUrl": "https://picsum.photos/550/250?random=23",
      "level": 3
    },
    "purchasePlan": {
      "price": 60,
      "deliveryDay": 4,
      "revisions": 3,
      "content": "High-quality logo design with unlimited revisions and source files.",
      "includes": ["Source files", "High resolution", "Vector files"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u98",
          "fullname": "Ethan Scott",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=24"
        },
        "rating": 5.0,
        "comment": "Fantastic logo that perfectly represents my brand!"
      }
    ]
  }
  ,
  {
    "_id": "g150",
    "title": "I will create minimalist logo designs for startups and small businesses",
    "description": "Simple yet impactful minimalist logos that make your brand memorable.",
    "imgUrl": [
      { "src": logoImg11 },
      { "src": logoImg12 },
      { "src": logoImg13 },
      { "src": logoImg14 },
    ],
    "rating": 4.8,
    "category": ["graphics-design", "logo"],
    "owner": {
      "_id": "u99",
      "fullname": "Liam Johnson",
      "imgUrl": "https://picsum.photos/550/250?random=27",
      "level": 3
    },
    "purchasePlan": {
      "price": 50,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "Minimalist logo with unlimited revisions and multiple file formats.",
      "includes": ["PNG", "SVG", "Vector files"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u100",
          "fullname": "Grace Evans",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=28"
        },
        "rating": 4.7,
        "comment": "Clean and professional design. Loved working with Liam!"
      }
    ]
  }
  ,
  {
    "_id": "g151",
    "title": "I will create animated logo intros for your YouTube channel",
    "description": "Bring your logo to life with animated intros perfect for video branding.",
    "imgUrl": [
      { "src": logoImg10 },
      { "src": logoImg11 },
      { "src": logoImg12 },
      { "src": logoImg13 },
    ],
    "rating": 4.9,
    "category": ["graphics-design", "logo"],
    "owner": {
      "_id": "u101",
      "fullname": "Sophia Carter",
      "imgUrl": "https://picsum.photos/550/250?random=31",
      "level": 3
    },
    "purchasePlan": {
      "price": 80,
      "deliveryDay": 5,
      "revisions": 3,
      "content": "Animated logo intros in Full HD with multiple formats.",
      "includes": ["HD animation", "Loopable", "Source files"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u102",
          "fullname": "Noah Brown",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=32"
        },
        "rating": 5.0,
        "comment": "Awesome intro animation, really professional."
      }
    ]
  }
  ,
  {
    "_id": "g152",
    "title": "I will build custom Shopify stores with responsive design",
    "description": "Fully functional Shopify stores tailored to your product and brand with responsive design.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=33" },
      { "src": "https://picsum.photos/550/250?random=34" }
    ],
    "rating": 4.7,
    "category": ["programming-tech"],
    "owner": {
      "_id": "u103",
      "fullname": "David Wilson",
      "imgUrl": "https://picsum.photos/550/250?random=35",
      "level": 2
    },
    "purchasePlan": {
      "price": 400,
      "deliveryDay": 14,
      "revisions": 3,
      "content": "Custom Shopify store with responsive layout and payment gateway setup.",
      "includes": ["Responsive design", "Payment integration", "SEO basics"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u104",
          "fullname": "Emily Davis",
          "loc": "Australia",
          "imgUrl": "https://picsum.photos/550/250?random=36"
        },
        "rating": 4.8,
        "comment": "Great store build, smooth communication."
      }
    ]
  }
  ,
  {
    "_id": "g153",
    "title": "I will translate your documents from English to Spanish",
    "description": "Accurate and culturally appropriate English to Spanish translation services for your documents.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=37" }
    ],
    "rating": 4.9,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u105",
      "fullname": "Isabella Martinez",
      "imgUrl": "https://picsum.photos/550/250?random=38",
      "level": 2
    },
    "purchasePlan": {
      "price": 60,
      "deliveryDay": 3,
      "revisions": 1,
      "content": "Precise and fluent English to Spanish translations with proofreading.",
      "includes": ["Proofreading", "Native speaker", "Fast delivery"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u106",
          "fullname": "Michael Garcia",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=39"
        },
        "rating": 4.8,
        "comment": "Very professional and timely translation."
      }
    ]
  }
  ,
  {
    "_id": "g154",
    "title": "I will create catchy social media ads to boost your engagement",
    "description": "Creative social media ads designed to increase engagement and followers on your platforms.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=40" }
    ],
    "rating": 4.6,
    "category": ["digital-marketing"],
    "owner": {
      "_id": "u107",
      "fullname": "James Taylor",
      "imgUrl": "https://picsum.photos/550/250?random=41",
      "level": 1
    },
    "purchasePlan": {
      "price": 70,
      "deliveryDay": 4,
      "revisions": 2,
      "content": "Social media ads crafted to target your ideal audience and boost your brand.",
      "includes": ["Targeted ads", "Multiple formats", "Performance report"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u108",
          "fullname": "Sophia Hernandez",
          "loc": "Mexico",
          "imgUrl": "https://picsum.photos/550/250?random=42"
        },
        "rating": 4.7,
        "comment": "My engagement grew significantly after these ads."
      }
    ]
  }
  ,
  {
    "_id": "g155",
    "title": "I will create AI-powered chatbots for your website",
    "description": "Intelligent AI chatbots designed to enhance customer interaction and automate support.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=43" }
    ],
    "rating": 4.8,
    "category": ["ai-services", "programming-tech"],
    "owner": {
      "_id": "u109",
      "fullname": "Alexander King",
      "imgUrl": "https://picsum.photos/550/250?random=44",
      "level": 3
    },
    "purchasePlan": {
      "price": 250,
      "deliveryDay": 7,
      "revisions": 3,
      "content": "Custom AI chatbot integrated into your website with natural language processing.",
      "includes": ["AI integration", "Chat interface", "Support"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u110",
          "fullname": "Mia Collins",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=45"
        },
        "rating": 5.0,
        "comment": "The chatbot works flawlessly and increased customer satisfaction."
      }
    ]
  }
  ,
  {
    "_id": "g156",
    "title": "I will compose custom royalty-free music for your videos",
    "description": "Original royalty-free music composed to fit the mood and style of your video projects.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=46" }
    ],
    "rating": 4.7,
    "category": ["music-audio"],
    "owner": {
      "_id": "u111",
      "fullname": "Ella Wright",
      "imgUrl": "https://picsum.photos/550/250?random=47",
      "level": 2
    },
    "purchasePlan": {
      "price": 90,
      "deliveryDay": 6,
      "revisions": 2,
      "content": "Custom composed music with full rights for commercial use.",
      "includes": ["Royalty-free", "High quality", "Multiple formats"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u112",
          "fullname": "Oliver Scott",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=48"
        },
        "rating": 4.8,
        "comment": "Perfect soundtrack for my documentary!"
      }
    ]
  }
  ,
  {
    "_id": "g157",
    "title": "I will proofread and edit your academic papers professionally",
    "description": "Detailed proofreading and editing to ensure clarity, grammar, and style compliance for academic papers.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=49" }
    ],
    "rating": 4.9,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u113",
      "fullname": "Chloe Evans",
      "imgUrl": "https://picsum.photos/550/250?random=50",
      "level": 2
    },
    "purchasePlan": {
      "price": 40,
      "deliveryDay": 2,
      "revisions": 1,
      "content": "Academic proofreading and editing with attention to detail and formatting.",
      "includes": ["Grammar check", "Style editing", "Formatting"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u114",
          "fullname": "Daniel Martin",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=51"
        },
        "rating": 4.7,
        "comment": "Helped me get my paper published!"
      }
    ]
  }
  ,
  {
    "_id": "g158",
    "title": "I will design custom business cards and stationery",
    "description": "Creative and professional business card and stationery design tailored to your brand.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=52" }
    ],
    "rating": 4.7,
    "category": ["graphics-design"],
    "owner": {
      "_id": "u115",
      "fullname": "Ava Moore",
      "imgUrl": "https://picsum.photos/550/250?random=53",
      "level": 1
    },
    "purchasePlan": {
      "price": 55,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "Business cards and stationery with source files and print-ready designs.",
      "includes": ["Source files", "Print-ready", "Unlimited revisions"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u116",
          "fullname": "Henry Lee",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=54"
        },
        "rating": 4.6,
        "comment": "Excellent design, delivered quickly."
      }
    ]
  },
  {
    "_id": "g165",
    "title": "I will design a professional business card to impress clients",
    "description": "Custom business card design that stands out and leaves a lasting impression.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=10" },
      { "src": "https://picsum.photos/550/250?random=14" },
      { "src": "https://picsum.photos/550/250?random=19" },
      { "src": "https://picsum.photos/550/250?random=3" }
    ],
    "rating": 4.7,
    "category": ["graphics-design"],
    "owner": {
      "_id": "u129",
      "fullname": "Grace Wilson",
      "imgUrl": "https://picsum.photos/550/250?random=5",
      "level": 2
    },
    "purchasePlan": {
      "price": 30,
      "deliveryDay": 2,
      "revisions": 3,
      "content": "Eye-catching business card with print-ready files and customizable templates.",
      "includes": ["Print-ready files", "Custom design", "Unlimited revisions"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u130",
          "fullname": "Henry Clark",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=6"
        },
        "rating": 4.8,
        "comment": "Perfect design that helped me stand out at networking events."
      }
    ]
  }
  ,
  {
    "_id": "g166",
    "title": "I will build a fast and secure e-commerce website",
    "description": "Create a secure, fast-loading e-commerce site tailored to your products and audience.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=8" },
      { "src": "https://picsum.photos/550/250?random=20" },
      { "src": "https://picsum.photos/550/250?random=15" },
      { "src": "https://picsum.photos/550/250?random=2" }
    ],
    "rating": 4.9,
    "category": ["programming-tech"],
    "owner": {
      "_id": "u131",
      "fullname": "Benjamin Lee",
      "imgUrl": "https://picsum.photos/550/250?random=7",
      "level": 3
    },
    "purchasePlan": {
      "price": 450,
      "deliveryDay": 14,
      "revisions": 4,
      "content": "A high-performing e-commerce platform with secure payment gateways and analytics.",
      "includes": ["Payment integration", "Fast loading", "Security features"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u132",
          "fullname": "Samantha Miller",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=9"
        },
        "rating": 4.9,
        "comment": "My shop runs smoothly and customers love the experience."
      }
    ]
  }
  ,
  {
    "_id": "g167",
    "title": "I will write engaging SEO blog posts that boost traffic",
    "description": "Well-researched, SEO-friendly blog posts designed to increase your website traffic.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=4" },
      { "src": "https://picsum.photos/550/250?random=13" },
      { "src": "https://picsum.photos/550/250?random=12" },
      { "src": "https://picsum.photos/550/250?random=18" }
    ],
    "rating": 4.8,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u133",
      "fullname": "Charlotte Davis",
      "imgUrl": "https://picsum.photos/550/250?random=11",
      "level": 2
    },
    "purchasePlan": {
      "price": 70,
      "deliveryDay": 5,
      "revisions": 3,
      "content": "SEO optimized blog posts that attract readers and improve search rankings.",
      "includes": ["SEO keywords", "Engaging content", "Plagiarism free"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u134",
          "fullname": "Ryan Harris",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=14"
        },
        "rating": 4.7,
        "comment": "Helped increase organic traffic significantly."
      }
    ]
  },
  {
    "_id": "g168",
    "title": "I will produce professional voiceovers for your project",
    "description": "Clear and expressive voiceovers tailored to match the tone and style of your project.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=16" },
      { "src": "https://picsum.photos/550/250?random=9" },
      { "src": "https://picsum.photos/550/250?random=3" },
      { "src": "https://picsum.photos/550/250?random=20" }
    ],
    "rating": 4.9,
    "category": ["music-audio"],
    "owner": {
      "_id": "u135",
      "fullname": "Lucas Thompson",
      "imgUrl": "https://picsum.photos/550/250?random=5",
      "level": 3
    },
    "purchasePlan": {
      "price": 80,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "High-quality voice recordings with professional equipment and editing.",
      "includes": ["Studio quality", "Multiple tones", "Background noise removal"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u136",
          "fullname": "Amelia White",
          "loc": "New Zealand",
          "imgUrl": "https://picsum.photos/550/250?random=7"
        },
        "rating": 5.0,
        "comment": "Voiceover was perfect and delivered ahead of schedule."
      }
    ]
  }
  ,
  {
    "_id": "g169",
    "title": "I will optimize your website for maximum speed and performance",
    "description": "Boost your website's loading speed and enhance user experience with expert optimization.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=8" },
      { "src": "https://picsum.photos/550/250?random=15" },
      { "src": "https://picsum.photos/550/250?random=4" },
      { "src": "https://picsum.photos/550/250?random=19" }
    ],
    "rating": 4.8,
    "category": ["programming-tech"],
    "owner": {
      "_id": "u137",
      "fullname": "Evelyn Garcia",
      "imgUrl": "https://picsum.photos/550/250?random=12",
      "level": 3
    },
    "purchasePlan": {
      "price": 120,
      "deliveryDay": 4,
      "revisions": 3,
      "content": "Comprehensive website speed optimization including caching, image compression, and minification.",
      "includes": ["Speed boost", "SEO improvements", "Mobile optimization"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u138",
          "fullname": "James Wilson",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=11"
        },
        "rating": 4.9,
        "comment": "Significant speed improvements and better search rankings."
      }
    ]
  }
  ,
  {
    "_id": "g170",
    "title": "I will craft compelling LinkedIn profiles to get you noticed",
    "description": "Professional LinkedIn profile optimization that highlights your strengths and attracts recruiters.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=6" },
      { "src": "https://picsum.photos/550/250?random=13" },
      { "src": "https://picsum.photos/550/250?random=7" },
      { "src": "https://picsum.photos/550/250?random=2" }
    ],
    "rating": 4.8,
    "category": ["business"],
    "owner": {
      "_id": "u139",
      "fullname": "Mia Roberts",
      "imgUrl": "https://picsum.photos/550/250?random=14",
      "level": 2
    },
    "purchasePlan": {
      "price": 60,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "Optimized LinkedIn profiles tailored to your career goals and industry standards.",
      "includes": ["Headline optimization", "Summary rewrite", "Keyword targeting"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u140",
          "fullname": "Olivia King",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=8"
        },
        "rating": 4.7,
        "comment": "Helped me get more profile views and interview requests."
      }
    ]
  },
  {
    "_id": "g171",
    "title": "I will design a sleek minimalist logo for your brand",
    "description": "A clean, modern minimalist logo designed to perfectly capture your brand's identity and values.",
    "imgUrl": [
      { "src": logoImg12 },
      { "src": logoImg13 },
      { "src": logoImg14 },
      { "src": logoImg15 },
    ],
    "rating": 4.9,
    "category": ["graphics-design", "logo"],
    "owner": {
      "_id": "u141",
      "fullname": "Ella Martin",
      "imgUrl": "https://picsum.photos/550/250?random=3",
      "level": 3
    },
    "purchasePlan": {
      "price": 55,
      "deliveryDay": 3,
      "revisions": 3,
      "content": "Minimalist logo tailored for versatility and brand recognition.",
      "includes": ["Vector files", "Transparent background", "Full ownership rights"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u142",
          "fullname": "Jack Turner",
          "loc": "Australia",
          "imgUrl": "https://picsum.photos/550/250?random=8"
        },
        "rating": 4.8,
        "comment": "Perfect simplicity, exactly what I wanted!"
      }
    ]
  }
  ,
  {
    "_id": "g172",
    "title": "I will create a custom WordPress website for your business",
    "description": "A fully responsive, SEO-friendly WordPress website tailored to your business needs.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=6" },
      { "src": "https://picsum.photos/550/250?random=12" },
      { "src": "https://picsum.photos/550/250?random=18" },
      { "src": "https://picsum.photos/550/250?random=20" }
    ],
    "rating": 4.9,
    "category": ["programming-tech"],
    "owner": {
      "_id": "u143",
      "fullname": "Nathan Scott",
      "imgUrl": "https://picsum.photos/550/250?random=10",
      "level": 3
    },
    "purchasePlan": {
      "price": 400,
      "deliveryDay": 10,
      "revisions": 4,
      "content": "Custom WordPress site optimized for performance and user experience.",
      "includes": ["Responsive design", "SEO optimization", "Easy CMS"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u144",
          "fullname": "Laura Bennett",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=5"
        },
        "rating": 5.0,
        "comment": "Professional and fast delivery, highly recommend!"
      }
    ]
  }
  ,
  {
    "_id": "g173",
    "title": "I will write compelling product descriptions that sell",
    "description": "Engaging and persuasive product descriptions crafted to boost sales and conversions.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=2" },
      { "src": "https://picsum.photos/550/250?random=14" },
      { "src": "https://picsum.photos/550/250?random=17" },
      { "src": "https://picsum.photos/550/250?random=13" }
    ],
    "rating": 4.8,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u145",
      "fullname": "Sophia Brown",
      "imgUrl": "https://picsum.photos/550/250?random=9",
      "level": 2
    },
    "purchasePlan": {
      "price": 65,
      "deliveryDay": 4,
      "revisions": 3,
      "content": "SEO-friendly descriptions that highlight product benefits and features.",
      "includes": ["SEO keywords", "Unique content", "Conversion focus"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u146",
          "fullname": "Ethan Green",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=11"
        },
        "rating": 4.7,
        "comment": "Descriptions helped improve my sales significantly."
      }
    ]
  }
  ,
  {
    "_id": "g174",
    "title": "I will animate your logo with smooth 2D motion graphics",
    "description": gigDescriptions.g101()
    ,
    "imgUrl": [
      { "src": logoDiver2 },
      { "src": logoDiver3 },
      { "src": logoDiver4 },
      { "src": logoDiver1 },
      { "src": logoImg1 },
      { "src": logoImg2 },
      { "src": logoImg4 },
      { "src": logoImg5 },
    ],
    "rating": 4.9,
    "category": ["video-animation", "graphics-design", "logo"],
    "owner": {
      "_id": "u147",
      "fullname": "Eden Tenenbaum",
      "imgUrl": sellerPfp,
      "level": 3
    },
    "purchasePlan": {
      "price": 120,
      "deliveryDay": 3,
      "revisions": 3,
      "content": "High-quality 2D logo animation for your brand videos and presentations.",
      "includes": ["HD video", "Transparent background", "Custom animation"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u148",
          "fullname": "Isabella Wright",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=3"
        },
        "rating": 4.9,
        "comment": "My logo animation exceeded my expectations!"
      },
      {
        "reviewer": {
          "_id": "u149",
          "fullname": "Noa Cohen",
          "loc": "Israel",
          "imgUrl": "https://picsum.photos/550/250?random=4"
        },
        "rating": 5,
        "comment": "Absolutely loved the design. Quick turnaround too!"
      },
      {
        "reviewer": {
          "_id": "u150",
          "fullname": "Ethan Levy",
          "loc": "Israel",
          "imgUrl": "https://picsum.photos/550/250?random=5"
        },
        "rating": 4.8,
        "comment": "Great communication and a clean, modern look."
      },
      {
        "reviewer": {
          "_id": "u151",
          "fullname": "Maya Ben-David",
          "loc": "Israel",
          "imgUrl": "https://picsum.photos/550/250?random=6"
        },
        "rating": 5,
        "comment": "Perfect result. I’ll definitely be coming back!"
      },
      {
        "reviewer": {
          "_id": "u152",
          "fullname": "Liam Smith",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=7"
        },
        "rating": 4.7,
        "comment": "Seller was super helpful and made edits quickly."
      },
      {
        "reviewer": {
          "_id": "u153",
          "fullname": "Tamar Azulay",
          "loc": "Israel",
          "imgUrl": "https://picsum.photos/550/250?random=8"
        },
        "rating": 5,
        "comment": "So creative! The animation was exactly what I needed."
      },
      {
        "reviewer": {
          "_id": "u154",
          "fullname": "Daniel Green",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=9"
        },
        "rating": 4.6,
        "comment": "High-quality work and very professional."
      },
      {
        "reviewer": {
          "_id": "u155",
          "fullname": "Yael Shapira",
          "loc": "Israel",
          "imgUrl": "https://picsum.photos/550/250?random=10"
        },
        "rating": 4.9,
        "comment": "Very responsive and talented designer. Highly recommend!"
      },
      {
        "reviewer": {
          "_id": "u156",
          "fullname": "Emily Johnson",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=11"
        },
        "rating": 4.8,
        "comment": "Exceeded expectations. Delivered ahead of schedule!"
      },
      {
        "reviewer": {
          "_id": "u157",
          "fullname": "Oren Mizrahi",
          "loc": "Israel",
          "imgUrl": "https://picsum.photos/550/250?random=12"
        },
        "rating": 5,
        "comment": "Amazing quality. Will definitely order again!"
      },
      {
        "reviewer": {
          "_id": "u158",
          "fullname": "Fatima Al Mansoori",
          "loc": "United Arab Emirates",
          "imgUrl": "https://picsum.photos/550/250?random=13"
        },
        "rating": 4.7,
        "comment": "Professional and very detailed work. Thank you!"
      },
      {
        "reviewer": {
          "_id": "u159",
          "fullname": "Jacob Rosen",
          "loc": "Israel",
          "imgUrl": "https://picsum.photos/550/250?random=14"
        },
        "rating": 4.9,
        "comment": "Exactly what I envisioned. Fantastic experience!"
      },
      {
        "reviewer": {
          "_id": "u160",
          "fullname": "Charlotte Thompson",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=15"
        },
        "rating": 5,
        "comment": "Flawless service. Super happy with the outcome."
      },
      {
        "reviewer": {
          "_id": "u161",
          "fullname": "Zoe Martinez",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=16"
        },
        "rating": 4.5,
        "comment": "Great value for money. Will hire again."
      },
      {
        "reviewer": {
          "_id": "u162",
          "fullname": "Hannah Lee",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=17"
        },
        "rating": 4.8,
        "comment": "Very happy with the results. Exactly what I needed."
      },
      {
        "reviewer": {
          "_id": "u163",
          "fullname": "Tom Harel",
          "loc": "Israel",
          "imgUrl": "https://picsum.photos/550/250?random=18"
        },
        "rating": 5,
        "comment": "Quick, creative, and spot-on. Great job!"
      }
    ]


  }
  ,
  {
    "_id": "g175",
    "title": "I will provide expert AI chatbot development for your website",
    "description": "Build smart AI chatbots that improve customer engagement and automate support.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=14" },
      { "src": "https://picsum.photos/550/250?random=19" },
      { "src": "https://picsum.photos/550/250?random=6" },
      { "src": "https://picsum.photos/550/250?random=2" }
    ],
    "rating": 4.8,
    "category": ["programming-tech", "ai-services"],
    "owner": {
      "_id": "u149",
      "fullname": "Liam Walker",
      "imgUrl": "https://picsum.photos/550/250?random=5",
      "level": 3
    },
    "purchasePlan": {
      "price": 500,
      "deliveryDay": 15,
      "revisions": 4,
      "content": "Custom AI chatbot solutions to automate your customer service efficiently.",
      "includes": ["AI integration", "Multi-platform support", "Custom workflows"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u150",
          "fullname": "Ava Mitchell",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=9"
        },
        "rating": 4.9,
        "comment": "My website now handles customer queries automatically."
      }
    ]
  }
  ,
  {
    "_id": "g176",
    "title": "I will compose original background music for videos and games",
    "description": "Custom background music tracks tailored to fit your project’s mood and style.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=1" },
      { "src": "https://picsum.photos/550/250?random=8" },
      { "src": "https://picsum.photos/550/250?random=13" },
      { "src": "https://picsum.photos/550/250?random=11" }
    ],
    "rating": 4.9,
    "category": ["music-audio"],
    "owner": {
      "_id": "u151",
      "fullname": "Emma Carter",
      "imgUrl": "https://picsum.photos/550/250?random=4",
      "level": 3
    },
    "purchasePlan": {
      "price": 100,
      "deliveryDay": 7,
      "revisions": 3,
      "content": "Professional compositions that enhance your videos, games, or presentations.",
      "includes": ["Royalty-free", "Multiple formats", "Custom style"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u152",
          "fullname": "Oliver Davis",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=10"
        },
        "rating": 5.0,
        "comment": "The music added great atmosphere to my game."
      }
    ]
  }
  ,
  {
    "_id": "g177",
    "title": "I will create compelling email marketing campaigns that convert",
    "description": "Effective email campaign design and copywriting to engage your audience and increase sales.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=17" },
      { "src": "https://picsum.photos/550/250?random=5" },
      { "src": "https://picsum.photos/550/250?random=20" },
      { "src": "https://picsum.photos/550/250?random=15" }
    ],
    "rating": 4.7,
    "category": ["digital-marketing"],
    "owner": {
      "_id": "u153",
      "fullname": "Mia Wilson",
      "imgUrl": "https://picsum.photos/550/250?random=7",
      "level": 2
    },
    "purchasePlan": {
      "price": 150,
      "deliveryDay": 6,
      "revisions": 3,
      "content": "Crafted email marketing campaigns designed to increase open rates and sales.",
      "includes": ["Copywriting", "Design", "Automation setup"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u154",
          "fullname": "Benjamin Young",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=14"
        },
        "rating": 4.8,
        "comment": "Our email open rates have improved dramatically."
      }
    ]
  }
  ,
  {
    "_id": "g178",
    "title": "I will perform professional voice over for your project",
    "description": "Clear and engaging voice overs for commercials, audiobooks, and videos.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=3" },
      { "src": "https://picsum.photos/550/250?random=6" },
      { "src": "https://picsum.photos/550/250?random=19" },
      { "src": "https://picsum.photos/550/250?random=2" }
    ],
    "rating": 4.9,
    "category": ["music-audio"],
    "owner": {
      "_id": "u155",
      "fullname": "Lucas Thompson",
      "imgUrl": "https://picsum.photos/550/250?random=12",
      "level": 2
    },
    "purchasePlan": {
      "price": 90,
      "deliveryDay": 5,
      "revisions": 2,
      "content": "Professional voice recordings with clear diction and emotion.",
      "includes": ["Multiple formats", "Commercial use rights", "Script proofreading"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u156",
          "fullname": "Zoe Carter",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=11"
        },
        "rating": 4.9,
        "comment": "Excellent voice work delivered quickly!"
      }
    ]
  }
  ,
  {
    "_id": "g179",
    "title": "I will build custom eCommerce solutions with Shopify",
    "description": "Complete Shopify stores customized to your brand, optimized for sales and user experience.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=9" },
      { "src": "https://picsum.photos/550/250?random=16" },
      { "src": "https://picsum.photos/550/250?random=14" },
      { "src": "https://picsum.photos/550/250?random=20" }
    ],
    "rating": 4.8,
    "category": ["programming-tech", "business"],
    "owner": {
      "_id": "u157",
      "fullname": "Grace Evans",
      "imgUrl": "https://picsum.photos/550/250?random=13",
      "level": 3
    },
    "purchasePlan": {
      "price": 600,
      "deliveryDay": 14,
      "revisions": 5,
      "content": "Full Shopify eCommerce setup with custom theme and apps installation.",
      "includes": ["Custom theme", "Payment integration", "SEO setup"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u158",
          "fullname": "Jackie Morgan",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=10"
        },
        "rating": 4.7,
        "comment": "Shopify store built with great attention to detail."
      }
    ]
  },
  {
    "_id": "g180",
    "title": "I will design a professional business card and stationery",
    "description": "Elegant business card and branded stationery designs that make a lasting impression.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=21" },
      { "src": "https://picsum.photos/550/250?random=22" },
      { "src": "https://picsum.photos/550/250?random=23" },
      { "src": "https://picsum.photos/550/250?random=24" }
    ],
    "rating": 4.8,
    "category": ["graphics-design"],
    "owner": {
      "_id": "u159",
      "fullname": "Noah Bennett",
      "imgUrl": "https://picsum.photos/550/250?random=25",
      "level": 2
    },
    "purchasePlan": {
      "price": 45,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Custom business card and letterhead design for your brand.",
      "includes": ["Print-ready files", "Source files", "Double-sided card"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u160",
          "fullname": "Chloe Adams",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=26"
        },
        "rating": 4.9,
        "comment": "Loved the clean and professional design!"
      }
    ]
  }
  ,
  {
    "_id": "g181",
    "title": "I will translate your document from English to Spanish",
    "description": "Accurate and culturally appropriate English to Spanish translations delivered fast.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=27" },
      { "src": "https://picsum.photos/550/250?random=28" },
      { "src": "https://picsum.photos/550/250?random=29" },
      { "src": "https://picsum.photos/550/250?random=30" }
    ],
    "rating": 4.7,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u161",
      "fullname": "Carlos Ramirez",
      "imgUrl": "https://picsum.photos/550/250?random=31",
      "level": 2
    },
    "purchasePlan": {
      "price": 30,
      "deliveryDay": 1,
      "revisions": 2,
      "content": "Manual document translation with context and tone in mind.",
      "includes": ["Proofreading", "Grammar check", "Localization"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u162",
          "fullname": "Emily Harris",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=32"
        },
        "rating": 4.6,
        "comment": "Quick turnaround and very accurate translation."
      }
    ]
  }
  ,
  {
    "_id": "g182",
    "title": "I will develop a responsive landing page with HTML, CSS, and JS",
    "description": "Responsive and modern landing pages built from scratch using clean code and best practices.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=33" },
      { "src": "https://picsum.photos/550/250?random=34" },
      { "src": "https://picsum.photos/550/250?random=35" },
      { "src": "https://picsum.photos/550/250?random=36" }
    ],
    "rating": 4.9,
    "category": ["programming-tech"],
    "owner": {
      "_id": "u163",
      "fullname": "Amelia Foster",
      "imgUrl": "https://picsum.photos/550/250?random=37",
      "level": 3
    },
    "purchasePlan": {
      "price": 150,
      "deliveryDay": 4,
      "revisions": 3,
      "content": "Custom landing page optimized for performance and UX.",
      "includes": ["Fully responsive", "Clean code", "SEO-ready"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u164",
          "fullname": "Daniel Wood",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=38"
        },
        "rating": 5.0,
        "comment": "Exactly what I needed for my campaign!"
      }
    ]
  }
  ,
  {
    "_id": "g183",
    "title": "I will record a female American voiceover for your script",
    "description": "Professional voiceovers delivered with clarity and warmth for any type of media.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=39" },
      { "src": "https://picsum.photos/550/250?random=40" },
      { "src": "https://picsum.photos/550/250?random=41" },
      { "src": "https://picsum.photos/550/250?random=42" }
    ],
    "rating": 4.9,
    "category": ["music-audio"],
    "owner": {
      "_id": "u165",
      "fullname": "Hannah Reed",
      "imgUrl": "https://picsum.photos/550/250?random=43",
      "level": 3
    },
    "purchasePlan": {
      "price": 85,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Engaging voiceover with professional tone and delivery.",
      "includes": ["High-quality WAV/MP3", "Commercial rights", "Noise removal"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u166",
          "fullname": "Logan Brooks",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=44"
        },
        "rating": 5.0,
        "comment": "Very clear and professional delivery!"
      }
    ]
  }
  ,
  {
    "_id": "g184",
    "title": "I will design custom Twitch overlays and stream assets",
    "description": "Eye-catching overlays and stream packages tailored to your brand and channel vibe.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=45" },
      { "src": "https://picsum.photos/550/250?random=46" },
      { "src": "https://picsum.photos/550/250?random=47" },
      { "src": "https://picsum.photos/550/250?random=48" }
    ],
    "rating": 4.8,
    "category": ["graphics-design"],
    "owner": {
      "_id": "u167",
      "fullname": "Ryan Steele",
      "imgUrl": "https://picsum.photos/550/250?random=49",
      "level": 2
    },
    "purchasePlan": {
      "price": 95,
      "deliveryDay": 5,
      "revisions": 3,
      "content": "Complete streaming overlay kit including alerts, panels, and webcam frames.",
      "includes": ["Animated alerts", "Custom colors", "Stream labels"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u168",
          "fullname": "Samantha Cruz",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=50"
        },
        "rating": 4.9,
        "comment": "My stream looks so professional now!"
      }
    ]
  }
  ,
  {
    "_id": "g185",
    "title": "I will create a modern pitch deck for your startup",
    "description": "Investor-ready pitch decks designed to convey your startup vision clearly and effectively.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=51" },
      { "src": "https://picsum.photos/550/250?random=52" },
      { "src": "https://picsum.photos/550/250?random=53" },
      { "src": "https://picsum.photos/550/250?random=54" }
    ],
    "rating": 4.9,
    "category": ["business"],
    "owner": {
      "_id": "u169",
      "fullname": "Jasmine Parker",
      "imgUrl": "https://picsum.photos/550/250?random=55",
      "level": 3
    },
    "purchasePlan": {
      "price": 200,
      "deliveryDay": 5,
      "revisions": 3,
      "content": "Professional slides, storytelling, and design focused on investors.",
      "includes": ["Editable PPT", "Charts and graphs", "Branded design"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u170",
          "fullname": "Henry Lopez",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=56"
        },
        "rating": 4.9,
        "comment": "Got compliments from investors on the visuals."
      }
    ]
  },
  {
    "_id": "g190",
    "title": "I will design minimalist business cards",
    "description": "Sleek, modern business card designs tailored to your brand’s identity.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=81" },
      { "src": "https://picsum.photos/550/250?random=82" },
      { "src": "https://picsum.photos/550/250?random=83" },
      { "src": "https://picsum.photos/550/250?random=84" }
    ],
    "rating": 4.8,
    "category": ["graphics-design"],
    "owner": {
      "_id": "u179",
      "fullname": "Jade Armstrong",
      "imgUrl": "https://picsum.photos/550/250?random=85",
      "level": 2
    },
    "purchasePlan": {
      "price": 45,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Double-sided design with print-ready files.",
      "includes": ["PDF + PNG", "Source file", "3 design concepts"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u180",
          "fullname": "Samir Desai",
          "loc": "India",
          "imgUrl": "https://picsum.photos/550/250?random=86"
        },
        "rating": 4.8,
        "comment": "Very clean and professional design!"
      }
    ]
  }
  ,
  {
    "_id": "g191",
    "title": "I will translate English to Spanish accurately",
    "description": "Native-level Spanish translations with attention to tone and cultural nuance.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=87" },
      { "src": "https://picsum.photos/550/250?random=88" },
      { "src": "https://picsum.photos/550/250?random=89" },
      { "src": "https://picsum.photos/550/250?random=90" }
    ],
    "rating": 4.7,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u181",
      "fullname": "Mateo Rojas",
      "imgUrl": "https://picsum.photos/550/250?random=91",
      "level": 1
    },
    "purchasePlan": {
      "price": 40,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Manual translations of up to 1000 words per order.",
      "includes": ["Proofreading", "Native Spanish", "Localization"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u182",
          "fullname": "Amira Yusuf",
          "loc": "United Arab Emirates",
          "imgUrl": "https://picsum.photos/550/250?random=92"
        },
        "rating": 4.6,
        "comment": "Fast and highly accurate translations."
      }
    ]
  }
  ,
  {
    "_id": "g192",
    "title": "I will create 3D mockups for your product",
    "description": "Realistic 3D product mockups to showcase your designs with professional quality.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=93" },
      { "src": "https://picsum.photos/550/250?random=94" },
      { "src": "https://picsum.photos/550/250?random=95" },
      { "src": "https://picsum.photos/550/250?random=96" }
    ],
    "rating": 4.9,
    "category": ["graphics-design"],
    "owner": {
      "_id": "u183",
      "fullname": "Darius Morgan",
      "imgUrl": "https://picsum.photos/550/250?random=97",
      "level": 2
    },
    "purchasePlan": {
      "price": 85,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "One custom mockup with high resolution and 3D visualization.",
      "includes": ["PSD + PNG", "3 angles", "Background removal"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u184",
          "fullname": "Gianna Park",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=98"
        },
        "rating": 4.9,
        "comment": "Stunning 3D rendering. Looks real!"
      }
    ]
  }
  ,
  {
    "_id": "g193",
    "title": "I will proofread and edit your document professionally",
    "description": "Grammar, structure, and tone corrections to make your document sharp and polished.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=99" },
      { "src": "https://picsum.photos/550/250?random=100" },
      { "src": "https://picsum.photos/550/250?random=101" },
      { "src": "https://picsum.photos/550/250?random=102" }
    ],
    "rating": 4.8,
    "category": ["writing-translation"],
    "owner": {
      "_id": "u185",
      "fullname": "Kelsey Graham",
      "imgUrl": "https://picsum.photos/550/250?random=103",
      "level": 1
    },
    "purchasePlan": {
      "price": 30,
      "deliveryDay": 1,
      "revisions": 1,
      "content": "Proofreading of up to 1500 words.",
      "includes": ["Tracked changes", "Suggestions for improvement", "Grammar fix"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u186",
          "fullname": "Oscar Jensen",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=104"
        },
        "rating": 4.8,
        "comment": "My academic paper came out flawless!"
      }
    ]
  }
  ,
  {
    "_id": "g194",
    "title": "I will mix and master your song with industry quality",
    "description": "Professional audio mixing and mastering to make your music radio-ready.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=105" },
      { "src": "https://picsum.photos/550/250?random=106" },
      { "src": "https://picsum.photos/550/250?random=107" },
      { "src": "https://picsum.photos/550/250?random=108" }
    ],
    "rating": 5.0,
    "category": ["music-audio"],
    "owner": {
      "_id": "u187",
      "fullname": "Lucia Rivera",
      "imgUrl": "https://picsum.photos/550/250?random=109",
      "level": 3
    },
    "purchasePlan": {
      "price": 150,
      "deliveryDay": 4,
      "revisions": 2,
      "content": "Mixing and mastering of one full-length track.",
      "includes": ["HQ WAV/MP3", "Noise reduction", "Stereo imaging"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u188",
          "fullname": "Jayden Wells",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=110"
        },
        "rating": 5.0,
        "comment": "Sounds like it was done in a top studio!"
      }
    ]
  },
  {
    "_id": "g195",
    "title": "I will design a responsive landing page with HTML, CSS, and JS",
    "description": "Custom-built landing pages optimized for speed, responsiveness, and conversions.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=111" },
      { "src": "https://picsum.photos/550/250?random=112" },
      { "src": "https://picsum.photos/550/250?random=113" },
      { "src": "https://picsum.photos/550/250?random=114" }
    ],
    "rating": 4.9,
    "category": ["programming-tech"],
    "owner": {
      "_id": "u189",
      "fullname": "Ahmed Nour",
      "imgUrl": "https://picsum.photos/550/250?random=115",
      "level": 2
    },
    "purchasePlan": {
      "price": 120,
      "deliveryDay": 4,
      "revisions": 2,
      "content": "One fully responsive landing page with smooth animations.",
      "includes": ["HTML/CSS/JS", "Mobile optimized", "Contact form integration"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u190",
          "fullname": "Elise Tran",
          "loc": "Australia",
          "imgUrl": "https://picsum.photos/550/250?random=116"
        },
        "rating": 4.9,
        "comment": "Fast, beautiful, and exactly what I needed!"
      }
    ]
  }
  ,
  {
    "_id": "g196",
    "title": "I will create professional logo animations for your brand",
    "description": "Engaging animated logos for your intros, social media, or website.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=117" },
      { "src": "https://picsum.photos/550/250?random=118" },
      { "src": "https://picsum.photos/550/250?random=119" },
      { "src": "https://picsum.photos/550/250?random=120" }
    ],
    "rating": 4.9,
    "category": ["video-animation", "graphics-design"],
    "owner": {
      "_id": "u191",
      "fullname": "Mina Petrov",
      "imgUrl": "https://picsum.photos/550/250?random=121",
      "level": 2
    },
    "purchasePlan": {
      "price": 70,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "One animated logo with sound design and transparency.",
      "includes": ["MP4 + MOV", "Transparent background", "Sound FX"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u192",
          "fullname": "Tariq Benson",
          "loc": "Nigeria",
          "imgUrl": "https://picsum.photos/550/250?random=122"
        },
        "rating": 5.0,
        "comment": "Awesome logo animation with a cool vibe!"
      }
    ]
  }
  ,
  {
    "_id": "g197",
    "title": "I will write SEO blog posts that drive traffic",
    "description": "Well-researched, SEO-optimized blog articles to grow your online presence and rank higher.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=123" },
      { "src": "https://picsum.photos/550/250?random=124" },
      { "src": "https://picsum.photos/550/250?random=125" },
      { "src": "https://picsum.photos/550/250?random=126" }
    ],
    "rating": 4.7,
    "category": ["writing-translation", "digital-marketing"],
    "owner": {
      "_id": "u193",
      "fullname": "Sandra Ng",
      "imgUrl": "https://picsum.photos/550/250?random=127",
      "level": 1
    },
    "purchasePlan": {
      "price": 55,
      "deliveryDay": 2,
      "revisions": 1,
      "content": "One 1000-word blog post with keyword optimization and internal linking.",
      "includes": ["SEO keywords", "Meta description", "Original content"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u194",
          "fullname": "Pavel Dimitrov",
          "loc": "Bulgaria",
          "imgUrl": "https://picsum.photos/550/250?random=128"
        },
        "rating": 4.7,
        "comment": "Great content and SEO friendly. I saw a traffic boost!"
      }
    ]
  }
  ,
  {
    "_id": "g198",
    "title": "I will build your AI chatbot with GPT integration",
    "description": "Custom AI chatbot solutions for websites, apps, or customer service, using GPT or other LLMs.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=129" },
      { "src": "https://picsum.photos/550/250?random=130" },
      { "src": "https://picsum.photos/550/250?random=131" },
      { "src": "https://picsum.photos/550/250?random=132" }
    ],
    "rating": 4.9,
    "category": ["ai-services", "programming-tech"],
    "owner": {
      "_id": "u195",
      "fullname": "Victor Hale",
      "imgUrl": "https://picsum.photos/550/250?random=133",
      "level": 3
    },
    "purchasePlan": {
      "price": 200,
      "deliveryDay": 5,
      "revisions": 2,
      "content": "GPT chatbot integrated with your web or app interface.",
      "includes": ["Custom prompts", "Integration help", "UI support"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u196",
          "fullname": "Freya Collins",
          "loc": "Ireland",
          "imgUrl": "https://picsum.photos/550/250?random=134"
        },
        "rating": 5.0,
        "comment": "Exactly what I needed for my SaaS support page!"
      }
    ]
  }
  ,
  {
    "_id": "g199",
    "title": "I will consult you on startup financial planning",
    "description": "Get expert financial advice tailored to your startup’s growth, investment strategy, and budgeting.",
    "imgUrl": [
      { "src": "https://picsum.photos/550/250?random=135" },
      { "src": "https://picsum.photos/550/250?random=136" },
      { "src": "https://picsum.photos/550/250?random=137" },
      { "src": "https://picsum.photos/550/250?random=138" }
    ],
    "rating": 4.8,
    "category": ["consulting", "finance"],
    "owner": {
      "_id": "u197",
      "fullname": "Nina Foster",
      "imgUrl": "https://picsum.photos/550/250?random=139",
      "level": 3
    },
    "purchasePlan": {
      "price": 180,
      "deliveryDay": 3,
      "revisions": 1,
      "content": "One-hour consultation with written plan and growth forecast.",
      "includes": ["1-on-1 video call", "Investment roadmap", "Budget breakdown"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u198",
          "fullname": "Youssef El-Baz",
          "loc": "Morocco",
          "imgUrl": "https://picsum.photos/550/250?random=140"
        },
        "rating": 4.8,
        "comment": "Very clear and actionable advice. Highly recommend."
      }
    ]
  },
  {
    "_id": "g200",
    "title": "I will design a minimalist logo that defines your brand",
    "description": "Clean, modern, and scalable logos that make a lasting impression.",
    "imgUrl": [
      { "src": logoImg39 },
      { "src": logoImg14 },
      { "src": logoImg15 },
      { "src": logoImg36 },
    ],
    "rating": 5.0,
    "category": ["logo", "graphics-design"],
    "owner": {
      "_id": "u199",
      "fullname": "Sophie Lambert",
      "imgUrl": "https://picsum.photos/550/250?random=145",
      "level": 2
    },
    "purchasePlan": {
      "price": 90,
      "deliveryDay": 3,
      "revisions": 3,
      "content": "1 custom minimalist logo with source files and 3 revisions.",
      "includes": ["High-res PNG", "Vector file", "Brand guidelines"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u200",
          "fullname": "Matt Harlow",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=146"
        },
        "rating": 5.0,
        "comment": "Elegant design, exactly what I envisioned for my brand!"
      }
    ]
  }
  ,
  {
    "_id": "g201",
    "title": "I will redesign your outdated logo for modern appeal",
    "description": "Breathing new life into old logos while keeping brand recognition intact.",
    "imgUrl": [
      { "src": logoImg14 },
      { "src": logoImg15 },
      { "src": logoImg37 },
      { "src": logoImg38 },
    ],
    "rating": 4.8,
    "category": ["logo"],
    "owner": {
      "_id": "u201",
      "fullname": "Jared Singh",
      "imgUrl": "https://picsum.photos/550/250?random=151",
      "level": 2
    },
    "purchasePlan": {
      "price": 60,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Logo refresh with multiple concepts and final source file delivery.",
      "includes": ["Updated style", "Modern typography", "Color palette update"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u202",
          "fullname": "Chiara Russo",
          "loc": "Italy",
          "imgUrl": "https://picsum.photos/550/250?random=152"
        },
        "rating": 4.8,
        "comment": "Loved the refreshed look — more professional and modern!"
      }
    ]
  }
  ,
  {
    "_id": "g202",
    "title": "I will create animated logos for video intros and YouTube",
    "description": "Eye-catching logo animations tailored for video content creators.",
    "imgUrl": [
      { "src": logoImg15 },
      { "src": logoImg36 },
      { "src": logoImg37 },
      { "src": logoImg18 },
    ],
    "rating": 4.9,
    "category": ["logo", "video-animation", "graphics-design"],
    "owner": {
      "_id": "u203",
      "fullname": "Jin Park",
      "imgUrl": "https://picsum.photos/550/250?random=157",
      "level": 2
    },
    "purchasePlan": {
      "price": 75,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "1 animated logo in MP4 and GIF formats with transparency.",
      "includes": ["Intro/outro format", "Sound FX", "Transparent background"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u204",
          "fullname": "Lucas Meyer",
          "loc": "Germany",
          "imgUrl": "https://picsum.photos/550/250?random=158"
        },
        "rating": 5.0,
        "comment": "Perfect for my YouTube channel – slick and professional."
      }
    ]
  }
  ,
  {
    "_id": "g203",
    "title": "I will design luxury logos with elegant typography",
    "description": "Luxury brand logos with refined aesthetics and timeless style.",
    "imgUrl": [
      { "src": logoImg27 },
      { "src": logoImg18 },
      { "src": logoImg19 },
      { "src": logoImg20 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u205",
      "fullname": "Zara Malik",
      "imgUrl": "https://picsum.photos/550/250?random=163",
      "level": 3
    },
    "purchasePlan": {
      "price": 150,
      "deliveryDay": 4,
      "revisions": 3,
      "content": "Elegant logo design tailored for luxury brands and boutiques.",
      "includes": ["Typography logo", "Gold foil effect", "Business card preview"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u206",
          "fullname": "Abby Jenkins",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=164"
        },
        "rating": 5.0,
        "comment": "It screams luxury — premium design and amazing quality!"
      }
    ]
  }
  ,
  {
    "_id": "g204",
    "title": "I will create mascot logos for eSports and Twitch streamers",
    "description": "Bold, custom mascot logos to make your gaming identity stand out.",
    "imgUrl": [
      { "src": logoImg18 },
      { "src": logoImg19 },
      { "src": logoImg20 },
      { "src": logoImg21 },
    ],
    "rating": 4.9,
    "category": ["logo", "graphics-design"],
    "owner": {
      "_id": "u207",
      "fullname": "Diego Rivas",
      "imgUrl": "https://picsum.photos/550/250?random=169",
      "level": 2
    },
    "purchasePlan": {
      "price": 110,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "1 fierce mascot logo with color and grayscale versions included.",
      "includes": ["Detailed vector", "Gaming style", "Multiple file formats"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u208",
          "fullname": "Kai Nguyen",
          "loc": "Vietnam",
          "imgUrl": "https://picsum.photos/550/250?random=170"
        },
        "rating": 4.9,
        "comment": "Totally nailed the character and vibe for my stream!"
      }
    ]
  },
  {
    "_id": "g205",
    "title": "I will craft a modern minimalist logo for your brand",
    "description": "Sleek, timeless logos that communicate your vision clearly.",
    "imgUrl": [
      { "src": logoImg19 },
      { "src": logoImg20 },
      { "src": logoImg21 },
      { "src": logoImg22 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19205",
      "fullname": "Yuki Tanaka",
      "imgUrl": "https://picsum.photos/550/250?random=1205",
      "level": 2
    },
    "purchasePlan": {
      "price": 75,
      "deliveryDay": 3,
      "revisions": 3,
      "content": "1 clean minimalist logo with full branding assets.",
      "includes": ["High-res PNG", "Vector file", "Brand guidelines"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30205",
          "fullname": "Elias Johansson",
          "loc": "Sweden",
          "imgUrl": "https://picsum.photos/550/250?random=1305"
        },
        "rating": 5.0,
        "comment": "Clean and professional work. Highly recommended!"
      }
    ]
  },
  {
    "_id": "g206",
    "title": "I will design a vintage logo with character",
    "description": "Retro-styled logo designs that evoke nostalgia and charm.",
    "imgUrl": [
      { "src": logoImg20 },
      { "src": logoImg21 },
      { "src": logoImg22 },
      { "src": logoImg23 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19206",
      "fullname": "Lina Abdallah",
      "imgUrl": "https://picsum.photos/550/250?random=1206",
      "level": 1
    },
    "purchasePlan": {
      "price": 60,
      "deliveryDay": 4,
      "revisions": 2,
      "content": "A hand-crafted vintage logo design with a timeless vibe.",
      "includes": ["High-res PNG", "Vector file"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30206",
          "fullname": "Noah Kim",
          "loc": "South Korea",
          "imgUrl": "https://picsum.photos/550/250?random=1306"
        },
        "rating": 5.0,
        "comment": "Captured the retro aesthetic perfectly!"
      }
    ]
  },
  {
    "_id": "g207",
    "title": "I will design a handwritten logo for personal brands",
    "description": "Elegant handwritten logos ideal for influencers, coaches, and creatives.",
    "imgUrl": [
      { "src": logoImg21 },
      { "src": logoImg22 },
      { "src": logoImg23 },
      { "src": logoImg24 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19207",
      "fullname": "Mateo Silva",
      "imgUrl": "https://picsum.photos/550/250?random=1207",
      "level": 2
    },
    "purchasePlan": {
      "price": 85,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "1 custom handwritten logo with transparent and vector formats.",
      "includes": ["High-res PNG", "Vector file"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30207",
          "fullname": "Chloe Dubois",
          "loc": "France",
          "imgUrl": "https://picsum.photos/550/250?random=1307"
        },
        "rating": 5.0,
        "comment": "Soft, stylish, and elegant design—just what I needed!"
      }
    ]
  },
  {
    "_id": "g208",
    "title": "I will create a monogram logo with sophistication",
    "description": "Premium monogram designs tailored for luxury brands and professionals.",
    "imgUrl": [
      { "src": logoImg22 },
      { "src": logoImg23 },
      { "src": logoImg24 },
      { "src": logoImg25 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19208",
      "fullname": "Rajeev Mishra",
      "imgUrl": "https://picsum.photos/550/250?random=1208",
      "level": 3
    },
    "purchasePlan": {
      "price": 95,
      "deliveryDay": 3,
      "revisions": 3,
      "content": "A sleek, branded monogram logo with polished visuals.",
      "includes": ["High-res PNG", "Vector file", "Brand guidelines"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30208",
          "fullname": "Anna Petrova",
          "loc": "Russia",
          "imgUrl": "https://picsum.photos/550/250?random=1308"
        },
        "rating": 5.0,
        "comment": "Sophisticated and clean. Nailed the brief!"
      }
    ]
  },
  {
    "_id": "g209",
    "title": "I will deliver a luxury logo that elevates your brand",
    "description": "High-end designs for premium businesses that need a refined touch.",
    "imgUrl": [
      { "src": logoImg23 },
      { "src": logoImg24 },
      { "src": logoImg25 },
      { "src": logoImg26 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19209",
      "fullname": "Isabelle Laurent",
      "imgUrl": "https://picsum.photos/550/250?random=1209",
      "level": 2
    },
    "purchasePlan": {
      "price": 120,
      "deliveryDay": 4,
      "revisions": 4,
      "content": "A luxury-style logo with gold accents and full branding pack.",
      "includes": ["High-res PNG", "Vector file", "Brand guidelines"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30209",
          "fullname": "Ahmed Al-Mansoori",
          "loc": "United Arab Emirates",
          "imgUrl": "https://picsum.photos/550/250?random=1309"
        },
        "rating": 5.0,
        "comment": "Exactly what we envisioned for our boutique. Stunning!"
      }
    ]
  },
  {
    "_id": "g210",
    "title": "I will make a tech startup logo with a future-ready look",
    "description": "Clean and innovative logo design to position your tech brand ahead.",
    "imgUrl": [
      { "src": logoImg24 },
      { "src": logoImg25 },
      { "src": logoImg26 },
      { "src": logoImg27 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19210",
      "fullname": "Oliver Becker",
      "imgUrl": "https://picsum.photos/550/250?random=1210",
      "level": 1
    },
    "purchasePlan": {
      "price": 100,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Startup-inspired logo that works across modern platforms.",
      "includes": ["High-res PNG", "Vector file", "Brand guidelines"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30210",
          "fullname": "Fatima Zohra",
          "loc": "Morocco",
          "imgUrl": "https://picsum.photos/550/250?random=1310"
        },
        "rating": 5.0,
        "comment": "Very crisp and innovative. Great for digital platforms."
      }
    ]
  },
  {
    "_id": "g211",
    "title": "I will create a fashion-forward logo design",
    "description": "Logo design crafted for apparel, fashion, and lifestyle brands.",
    "imgUrl": [
      { "src": logoImg25 },
      { "src": logoImg26 },
      { "src": logoImg27 },
      { "src": logoImg28 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19211",
      "fullname": "Amina Diallo",
      "imgUrl": "https://picsum.photos/550/250?random=1211",
      "level": 2
    },
    "purchasePlan": {
      "price": 90,
      "deliveryDay": 3,
      "revisions": 3,
      "content": "Trendy, bold logo design for your fashion label.",
      "includes": ["High-res PNG", "Vector file", "Brand guidelines"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30211",
          "fullname": "Jonathan Blake",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=1311"
        },
        "rating": 5.0,
        "comment": "Perfectly matched the vibe of our streetwear brand."
      }
    ]
  },
  {
    "_id": "g212",
    "title": "I will design a logo for your gaming or esports brand",
    "description": "Bold and high-energy logos tailored for gaming clans, streamers, and tournaments.",
    "imgUrl": [
      { "src": logoImg26 },
      { "src": logoImg27 },
      { "src": logoImg28 },
      { "src": logoImg29 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19212",
      "fullname": "Carlos Menéndez",
      "imgUrl": "https://picsum.photos/550/250?random=1212",
      "level": 3
    },
    "purchasePlan": {
      "price": 70,
      "deliveryDay": 2,
      "revisions": 3,
      "content": "1 esports-themed logo with energetic style and source files.",
      "includes": ["High-res PNG", "Vector file"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30212",
          "fullname": "Emily Chen",
          "loc": "Canada",
          "imgUrl": "https://picsum.photos/550/250?random=1312"
        },
        "rating": 5.0,
        "comment": "Captured our team's identity perfectly. Fast and pro work!"
      }
    ]
  },
  {
    "_id": "g213",
    "title": "I will make a minimalist black and white logo",
    "description": "Aesthetic black and white logo ideal for clean, modern branding.",
    "imgUrl": [
      { "src": logoImg27 },
      { "src": logoImg28 },
      { "src": logoImg29 },
      { "src": logoImg30 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19213",
      "fullname": "Noura El-Sayed",
      "imgUrl": "https://picsum.photos/550/250?random=1213",
      "level": 2
    },
    "purchasePlan": {
      "price": 65,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "Modern minimalist logo in black and white with vector delivery.",
      "includes": ["High-res PNG", "Vector file"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30213",
          "fullname": "Lars Müller",
          "loc": "Germany",
          "imgUrl": "https://picsum.photos/550/250?random=1313"
        },
        "rating": 5.0,
        "comment": "Classy and versatile design. Works beautifully everywhere!"
      }
    ]
  },
  {
    "_id": "g214",
    "title": "I will create a bold logo for sportswear and fitness brands",
    "description": "Energetic and sharp logos crafted to inspire action and strength.",
    "imgUrl": [
      { "src": logoImg28 },
      { "src": logoImg29 },
      { "src": logoImg30 },
      { "src": logoImg31 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19214",
      "fullname": "Tariq Jabari",
      "imgUrl": "https://picsum.photos/550/250?random=1214",
      "level": 1
    },
    "purchasePlan": {
      "price": 80,
      "deliveryDay": 2,
      "revisions": 3,
      "content": "1 impactful logo tailored for athletic and fitness markets.",
      "includes": ["High-res PNG", "Vector file", "Brand guidelines"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30214",
          "fullname": "Grace Okafor",
          "loc": "Nigeria",
          "imgUrl": "https://picsum.photos/550/250?random=1314"
        },
        "rating": 5.0,
        "comment": "Strong visual energy. Gave our fitness brand real punch!"
      }
    ]
  },
  {
    "_id": "g215",
    "title": "I will design a playful logo for kids or toy brands",
    "description": "Fun and colorful logos with whimsical illustrations for children's brands.",
    "imgUrl": [
      { "src": logoImg29 },
      { "src": logoImg30 },
      { "src": logoImg31 },
      { "src": logoImg32 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19215",
      "fullname": "Ines Costa",
      "imgUrl": "https://picsum.photos/550/250?random=1215",
      "level": 2
    },
    "purchasePlan": {
      "price": 70,
      "deliveryDay": 3,
      "revisions": 2,
      "content": "A cheerful logo design with playful shapes and bold colors.",
      "includes": ["High-res PNG", "Vector file"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30215",
          "fullname": "Jasper Lee",
          "loc": "Singapore",
          "imgUrl": "https://picsum.photos/550/250?random=1315"
        },
        "rating": 5.0,
        "comment": "Colorful, adorable, and instantly memorable!"
      }
    ]
  },
  {
    "_id": "g216",
    "title": "I will design a script-style logo for beauty or lifestyle brands",
    "description": "Soft and flowing script logo designs tailored for salons and influencers.",
    "imgUrl": [
      { "src": logoImg30 },
      { "src": logoImg31 },
      { "src": logoImg32 },
      { "src": logoImg33 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19216",
      "fullname": "Katerina Nikitina",
      "imgUrl": "https://picsum.photos/550/250?random=1216",
      "level": 3
    },
    "purchasePlan": {
      "price": 85,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Feminine and elegant script logo with branding delivery.",
      "includes": ["High-res PNG", "Vector file", "Brand guidelines"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30216",
          "fullname": "Daniel Whitehorse",
          "loc": "United States",
          "imgUrl": "https://picsum.photos/550/250?random=1316"
        },
        "rating": 5.0,
        "comment": "Exactly the elegant style I needed for my salon!"
      }
    ]
  },
  {
    "_id": "g217",
    "title": "I will create a futuristic logo for sci-fi and tech brands",
    "description": "Logos inspired by science fiction, digital aesthetics, and cyber themes.",
    "imgUrl": [
      { "src": logoImg31 },
      { "src": logoImg32 },
      { "src": logoImg33 },
      { "src": logoImg34 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19217",
      "fullname": "Ali Rezai",
      "imgUrl": "https://picsum.photos/550/250?random=1217",
      "level": 2
    },
    "purchasePlan": {
      "price": 95,
      "deliveryDay": 3,
      "revisions": 3,
      "content": "Tech-forward logo design with bold forms and sharp contrast.",
      "includes": ["High-res PNG", "Vector file", "Brand guidelines"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30217",
          "fullname": "Sophia Nguyen",
          "loc": "Vietnam",
          "imgUrl": "https://picsum.photos/550/250?random=1317"
        },
        "rating": 5.0,
        "comment": "The digital vibe was spot on. Clean and powerful!"
      }
    ]
  },
  {
    "_id": "g218",
    "title": "I will make a calligraphy-based logo for high-end products",
    "description": "Graceful calligraphy-style logos perfect for packaging and luxury items.",
    "imgUrl": [
      { "src": logoImg32 },
      { "src": logoImg33 },
      { "src": logoImg34 },
      { "src": logoImg35 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19218",
      "fullname": "Fatemeh Hosseini",
      "imgUrl": "https://picsum.photos/550/250?random=1218",
      "level": 2
    },
    "purchasePlan": {
      "price": 110,
      "deliveryDay": 4,
      "revisions": 2,
      "content": "Elegant logo with stylized lettering and high-end finish.",
      "includes": ["High-res PNG", "Vector file", "Brand guidelines"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30218",
          "fullname": "Antonio Romero",
          "loc": "Mexico",
          "imgUrl": "https://picsum.photos/550/250?random=1318"
        },
        "rating": 5.0,
        "comment": "Beautiful script and very premium look."
      }
    ]
  },
  {
    "_id": "g219",
    "title": "I will design a geometric logo with minimalist shapes",
    "description": "Mathematical precision meets modern style in these geometric designs.",
    "imgUrl": [
      { "src": logoImg33 },
      { "src": logoImg34 },
      { "src": logoImg35 },
      { "src": logoImg36 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19219",
      "fullname": "Dimitri Volkov",
      "imgUrl": "https://picsum.photos/550/250?random=1219",
      "level": 1
    },
    "purchasePlan": {
      "price": 70,
      "deliveryDay": 2,
      "revisions": 2,
      "content": "Crisp geometric logo design delivered in full resolution.",
      "includes": ["High-res PNG", "Vector file"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30219",
          "fullname": "Isla Thompson",
          "loc": "United Kingdom",
          "imgUrl": "https://picsum.photos/550/250?random=1319"
        },
        "rating": 5.0,
        "comment": "Really clean lines, fit our architecture firm perfectly!"
      }
    ]
  },
  {
    "_id": "g220",
    "title": "I will create a cultural-inspired logo for niche markets",
    "description": "Logos that embrace tradition, identity, and unique cultural elements.",
    "imgUrl": [
      { "src": logoImg34 },
      { "src": logoImg35 },
      { "src": logoImg36 },
      { "src": logoImg37 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19220",
      "fullname": "Nhlanhla Dube",
      "imgUrl": "https://picsum.photos/550/250?random=1220",
      "level": 2
    },
    "purchasePlan": {
      "price": 85,
      "deliveryDay": 3,
      "revisions": 3,
      "content": "A unique logo design inspired by cultural motifs and heritage.",
      "includes": ["High-res PNG", "Vector file"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30220",
          "fullname": "Mila Russo",
          "loc": "Italy",
          "imgUrl": "https://picsum.photos/550/250?random=1320"
        },
        "rating": 5.0,
        "comment": "Really thoughtful and respectful use of traditional forms."
      }
    ]
  },
  {
    "_id": "g221",
    "title": "I will deliver a strong brand identity logo with extras",
    "description": "Powerful logos built as the foundation for your entire brand system.",
    "imgUrl": [
      { "src": logoImg35 },
      { "src": logoImg36 },
      { "src": logoImg37 },
      { "src": logoImg38 }
    ],
    "rating": 5.0,
    "category": ["logo"],
    "owner": {
      "_id": "u19221",
      "fullname": "Sakura Hayashi",
      "imgUrl": "https://picsum.photos/550/250?random=1221",
      "level": 3
    },
    "purchasePlan": {
      "price": 130,
      "deliveryDay": 5,
      "revisions": 4,
      "content": "Strategic brand identity logo with branding collateral.",
      "includes": ["High-res PNG", "Vector file", "Brand guidelines"]
    },
    "reviews": [
      {
        "reviewer": {
          "_id": "u30221",
          "fullname": "Jacob Fitzgerald",
          "loc": "Australia",
          "imgUrl": "https://picsum.photos/550/250?random=1321"
        },
        "rating": 5.0,
        "comment": "Professional and cohesive. Our brand looks incredible!"
      }
    ]
  }
]
