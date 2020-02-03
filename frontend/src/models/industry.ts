export interface Industry {
  title: string;
  subtitle: string;
  path: string;
  info: string;
  categories: Category[];
}

interface Category {
  title: string;
  subcategories?: Category[];
}