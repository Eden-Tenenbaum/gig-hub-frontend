// src/services/gig/mockGigs.js
// Demo data for local development (mock gigs)
export const mockGigs = [
  {
    _id: 'g101',
    title: 'Minimalist Logo Design',
    description: 'I will create a clean, modern minimalist logo tailored to your brand identity and vision.',
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.9,
    tags: ['design', 'logo', 'minimalist'],
    owner: { _id: 'u1', fullname: 'Alice Johnson', imgUrl: 'https://picsum.photos/550/250?random=2', level: 1 },
    purchasePlan: {
      price: 45,
      deliveryDay: 2,
      revisions: 3,
      content: 'A clean, timeless logo that reflects your brand’s core values with modern simplicity.',
      includes: ['Logo transparency', 'Vector file', 'Printable file']
    },
    reviews: [{
      commenter: { _id: 'u2', fullname: 'Bob Smith', imgUrl: 'https://picsum.photos/550/250?random=4' },
      rating: 4.8,
      comment: 'Really captured my brand’s essence. Quick turnaround and great communication!'
    }]
  },
  {
    _id: 'g102',
    title: 'Custom WordPress Website',
    description: 'Full setup and customization of a responsive WordPress website with your choice of theme.',
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.7,
    tags: ['wordpress', 'web', 'development'],
    owner: { _id: 'u2', fullname: 'Bob Smith', imgUrl: 'https://picsum.photos/550/250?random=4', level: 2 },
    purchasePlan: {
      price: 250,
      deliveryDay: 5,
      revisions: 2,
      content: 'Fully responsive and SEO-friendly WordPress site tailored to your business goals.',
      includes: ['Responsive design', 'SEO setup', 'Plugin installation']
    },
    reviews: [{
      commenter: { _id: 'u3', fullname: 'Carla Mills', imgUrl: 'https://picsum.photos?random=6' },
      rating: 4.6,
      comment: 'Beautiful site, professional delivery, and very helpful with customizations!'
    }]
  },
  {
    _id: 'g103',
    title: 'SEO Content Writing',
    description: 'High-quality SEO blog posts and website content to help you rank higher on search engines.',
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.8,
    tags: ['writing', 'seo', 'content'],
    owner: { _id: 'u3', fullname: 'Carla Mills', imgUrl: 'https://picsum.photos?random=6', level: 3 },
    purchasePlan: {
      price: 80,
      deliveryDay: 3,
      revisions: 3,
      content: 'Optimized articles designed to improve search visibility and engage your target audience',
      includes: ['SEO optimization', 'Keyword research', 'Meta descriptions']
    },
    reviews: [{
      commenter: { _id: 'u4', fullname: 'Daniel Lee', imgUrl: 'https://picsum.photos/?random=7' },
      rating: 4.9,
      comment: 'Top-tier writing! SEO improved almost immediately after publishing.'
    }]
  },
  {
    _id: 'g104',
    title: 'Social Media Management',
    description: 'Complete social media strategy, posting schedule, and community engagement for your brand.',
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.6,
    tags: ['marketing', 'social media', 'management'],
    owner: { _id: 'u4', fullname: 'Daniel Lee', imgUrl: 'https://picsum.photos/?random=7', level: 1 },
    purchasePlan: {
      price: 150,
      deliveryDay: 7,
      revisions: 1,
      content: 'Strategic content and community management to grow your brand’s online presence.',
      includes: ['Content calendar', 'Engagement tracking', 'Hashtag strategy']
    },
    reviews: [{
      commenter: { _id: 'u5', fullname: 'Ella White', imgUrl: 'https://picsum.photos/550/250?random=9' },
      rating: 4.7,
      comment: 'Helped grow our audience steadily. Very responsive to feedback.'
    }]
  },
  {
    _id: 'g105',
    title: 'E-commerce Product Photography',
    description: 'Professional product photos with white background, ready for Shopify, Amazon, and more.',
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.9,
    tags: ['photography', 'e-commerce', 'product'],
    owner: { _id: 'u5', fullname: 'Ella White', imgUrl: 'https://picsum.photos/550/250?random=9', level: 1 },
    purchasePlan: {
      price: 100,
      deliveryDay: 4,
      revisions: 2,
      content: 'High-quality product images perfect for marketplaces like Amazon, Etsy, and Shopify.',
      includes: ['10 product shots', 'White background', 'High-res images']
    },
    reviews: [{
      commenter: { _id: 'u6', fullname: 'Frank Zhao', imgUrl: 'https://picsum.photos/550/250?random=11' },
      rating: 5.0,
      comment: 'Crisp photos, fast delivery. Will definitely use again for future launches.'
    }]
  },
  {
    _id: 'g106',
    title: 'Mobile App UI/UX Design',
    description: 'Design engaging and user-friendly mobile app interfaces using Figma or Sketch.',
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.8,
    tags: ['ui', 'ux', 'mobile'],
    owner: { _id: 'u6', fullname: 'Frank Zhao', imgUrl: 'https://picsum.photos/550/250?random=11', level: 1 },
    purchasePlan: {
      price: 300,
      deliveryDay: 6,
      revisions: 3,
      content: 'User-focused design that enhances usability and aligns with current mobile trends.',
      includes: ['Prototype design', 'User flow', 'UI kit']
    },
    reviews: [{
      commenter: { _id: 'u7', fullname: 'Grace Kim', imgUrl: 'https://picsum.photos/550/250?random=12' },
      rating: 4.9,
      comment: 'Super clean and intuitive designs. Improved our user feedback immediately.'
    }]
  },
  {
    _id: 'g107',
    title: 'Explainer Video Animation',
    description: '2D animated explainer video (up to 60 seconds) with script, voiceover, and background music.',
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.7,
    tags: ['video', 'animation', 'explainer'],
    owner: { _id: 'u7', fullname: 'Grace Kim', imgUrl: 'https://picsum.photos/550/250?random=12', level: 1 },
    purchasePlan: {
      price: 200,
      deliveryDay: 5,
      revisions: 2,
      content: 'A captivating animated video that clearly communicates your message in 60 seconds.',
      includes: ['Voiceover', 'Script writing', 'Background music']
    },
    reviews: [{
      commenter: { _id: 'u8', fullname: 'Hector Ramirez', imgUrl: 'https://picsum.photos/550/250?random=14' },
      rating: 4.6,
      comment: 'Engaging video that helped us explain our product clearly on social media.'
    }]
  },
  {
    _id: 'g108',
    title: 'Professional Voice Over',
    description: 'Clear, emotive voiceover in English or Spanish for videos, ads, and presentations.',
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.5,
    tags: ['voiceover', 'audio', 'voice'],
    owner: { _id: 'u8', fullname: 'Hector Ramirez', imgUrl: 'https://picsum.photos/550/250?random=14', level: 1 },
    purchasePlan: {
      price: 60,
      deliveryDay: 2,
      revisions: 2,
      content: 'Crisp and expressive voiceover recorded in a professional studio environment.',
      includes: ['English & Spanish', 'Commercial rights', 'Studio-quality audio']
    },
    reviews: [{
      commenter: { _id: 'u9', fullname: 'Isabel Gomez', imgUrl: 'https://picsum.photos/550/250?random=18' },
      rating: 4.5,
      comment: 'Versatile voice with excellent timing. Fit our ad perfectly!'
    }]
  },
  {
    _id: 'g109',
    title: 'English to Spanish Translation',
    description: 'Accurate and culturally adapted translation of documents, websites, or marketing materials.',
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.8,
    tags: ['translation', 'english', 'spanish'],
    owner: { _id: 'u9', fullname: 'Isabel Gomez', ownerUrl: 'https://picsum.photos/550/250?random=18', level: 1 },
    purchasePlan: {
      price: 90,
      deliveryDay: 3,
      revisions: 1,
      content: 'Human translation that respects cultural nuance and maintains original intent.',
      includes: ['Manual translation', 'Proofreading', 'Localized content']
    },
    reviews: [{
      commenter: { _id: 'u10', fullname: 'Jack Wilson', ownerUrl: 'https://picsum.photos/550/250?random=15' },
      rating: 4.9,
      comment: 'Flawless translation. Very professional and easy to work with!'
    }]
  },
  {
    _id: 'g110',
    title: 'Digital Marketing Strategy',
    description: 'Custom digital marketing plan including SEO, PPC, and social media tactics.',
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.6,
    tags: ['marketing', 'strategy', 'digital'],
    owner: { _id: 'u10', fullname: 'Jack Wilson', ownerUrl: 'https://picsum.photos/550/250?random=15', level: 1 },
    purchasePlan: {
      price: 180,
      deliveryDay: 5,
      revisions: 2,
      content: 'A customized plan combining SEO, PPC, and social media to drive traffic and conversions.',
      includes: ['SEO audit', 'PPC strategy', 'Social calendar']
    },
    reviews: [{
      commenter: { _id: 'u1', fullname: 'Alice Johnson', ownerUrl: 'https://picsum.photos/550/250?random=2' },
      rating: 4.7,
      comment: 'Smart strategy that’s already improving ROI. Clear and actionable plans!'
    }]
  }
]
