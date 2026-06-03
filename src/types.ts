export interface Procedimento {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  duration: string;
  image: string;
  alt: string;
  benefits: string[];
}

export interface Diferencial {
  iconName: string;
  title: string;
  description: string;
}

export interface Depoimento {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
