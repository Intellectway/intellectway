export type ServiceCategory = "student" | "professional" | "corporate";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
};

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

