// src/services/gig/mockGigs.js
// Demo data for local development (mock gigs)
import { gigDescriptions } from "./MockDesc";

export const mockGigs = [
  {
    _id: 'g101',
    category: 'graphics-design',
    title: 'Minimalist Logo Design',
    description: gigDescriptions.g101(),
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
    reviews: [
      {
        commenter: { _id: 'u2', fullname: 'Bob Smith', imgUrl: 'https://picsum.photos/550/250?random=4' },
        rating: 4.8,
        comment: 'Really captured my brand’s essence. Quick turnaround and great communication!'
      }
    ]
  },
  {
    _id: 'g102',
    category: 'programming-tech',
    title: 'Custom WordPress Website',
    description: gigDescriptions.g102(),
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
    reviews: [
      {
        commenter: { _id: 'u3', fullname: 'Carla Mills', imgUrl: 'https://picsum.photos/550/250?random=6' },
        rating: 4.6,
        comment: 'Beautiful site, professional delivery, and very helpful with customizations!'
      }
    ]
  },
  {
    _id: 'g103',
    category: 'digital-marketing',
    title: 'SEO Content Writing',
    description: gigDescriptions.g103(),
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.8,
    tags: ['writing', 'seo', 'content'],
    owner: { _id: 'u3', fullname: 'Carla Mills', imgUrl: 'https://picsum.photos/550/250?random=6', level: 3 },
    purchasePlan: {
      price: 80,
      deliveryDay: 3,
      revisions: 3,
      content: 'Optimized articles designed to improve search visibility and engage your target audience',
      includes: ['SEO optimization', 'Keyword research', 'Meta descriptions']
    },
    reviews: [
      {
        commenter: { _id: 'u4', fullname: 'Daniel Lee', imgUrl: 'https://picsum.photos/550/250?random=7' },
        rating: 4.9,
        comment: 'Top-tier writing! SEO improved almost immediately after publishing.'
      }
    ]
  },
  {
    _id: 'g104',
    category: 'digital-marketing',
    title: 'Social Media Management',
    description: gigDescriptions.g104(),
    imgUrl: [
      { src: 'https://picsum.photos/550/250?random=1' },
      { src: 'https://picsum.photos/550/250?random=3' },
      { src: 'https://picsum.photos/550/250?random=12' },
      { src: 'https://picsum.photos/550/250?random=8' }
    ],
    rating: 4.6,
    tags: ['marketing', 'social media', 'management'],
    owner: { _id: 'u4', fullname: 'Daniel Lee', imgUrl: 'https://picsum.photos/550/250?random=7', level: 1 },
    purchasePlan: {
      price: 150,
      deliveryDay: 7,
      revisions: 1,
      content: 'Strategic content and community management to grow your brand’s online presence.',
      includes: ['Content calendar', 'Engagement tracking', 'Hashtag strategy']
    },
    reviews: [
      {
        commenter: { _id: 'u5', fullname: 'Ella White', imgUrl: 'https://picsum.photos/550/250?random=9' },
        rating: 4.7,
        comment: 'Helped grow our audience steadily. Very responsive to feedback.'
      }
    ]
  },
  {
    _id: 'g105',
    category: 'business',
    title: 'E-commerce Product Photography',
    description: gigDescriptions.g105(),
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
    reviews: [
      {
        commenter: { _id: 'u6', fullname: 'Frank Zhao', imgUrl: 'https://picsum.photos/550/250?random=11' },
        rating: 5.0,
        comment: 'Crisp photos, fast delivery. Will definitely use again for future launches.'
      }
    ]
  },
]