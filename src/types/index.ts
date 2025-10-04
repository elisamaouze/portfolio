export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}