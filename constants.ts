import { Product, BlogPost, NewsItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Nexus A100 Workstation",
    description: "The world's most powerful AI workstation for data science and deep learning.",
    image: "https://picsum.photos/400/300?random=1",
    category: "Compute"
  },
  {
    id: 2,
    name: "Edge AI Gateway",
    description: "Secure, scalable edge computing for industrial IoT applications.",
    image: "https://picsum.photos/400/300?random=2",
    category: "Embedded"
  },
  {
    id: 3,
    name: "Enterprise Data Center GPU",
    description: "Accelerate your most demanding HPC and AI workloads.",
    image: "https://picsum.photos/400/300?random=3",
    category: "Server"
  },
  {
    id: 4,
    name: "Professional Visualization Hub",
    description: "Real-time ray tracing and advanced graphics for professional studios.",
    image: "https://picsum.photos/400/300?random=4",
    category: "Visualization"
  },
  {
    id: 5,
    name: "Autonomous Drive Unit",
    description: "The brain of the self-driving car, processing sensor data in real-time.",
    image: "https://picsum.photos/400/300?random=5",
    category: "Automotive"
  },
  {
    id: 6,
    name: "Quantum Simulation Kit",
    description: "Bridging classical and quantum computing for research breakthroughs.",
    image: "https://picsum.photos/400/300?random=6",
    category: "Research"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Advancing Industrial Digital Twins",
    excerpt: "How Nexus Omniverse is reshaping manufacturing simulation and efficiency.",
    date: "Oct 12, 2024",
    author: "Dr. Elena Ray",
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    id: 2,
    title: "The Next Leap in Generative AI",
    excerpt: "Large Language Models are evolving. See how our stack supports the next trillion parameters.",
    date: "Sep 28, 2024",
    author: "Marcus Chen",
    image: "https://picsum.photos/600/400?random=11"
  },
  {
    id: 3,
    title: "Sustainable Data Centers",
    excerpt: "New cooling technologies reducing carbon footprint in hyperscale facilities.",
    date: "Aug 15, 2024",
    author: "Sarah Jenkings",
    image: "https://picsum.photos/600/400?random=12"
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "Nexus and TechCorp Expand AI Partnership",
    summary: "Full-stack collaboration powers AI Superfactories and enterprise agents.",
    date: "Nov 01, 2024",
    source: "Press Release"
  },
  {
    id: 2,
    title: "Q3 Enterprise Earnings Report",
    summary: "Data center revenue grows 150% year-over-year driven by AI demand.",
    date: "Oct 25, 2024",
    source: "Financial News"
  },
  {
    id: 3,
    title: "New Healthcare Computing Initiative",
    summary: "Accelerating drug discovery with Nexus Bio-Compute platforms.",
    date: "Oct 10, 2024",
    source: "Industry Update"
  }
];