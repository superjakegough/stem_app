export interface Industry {
  title: string;
  path: string;
  info: string;
  image: string;
  categories: Category[];
}

interface Category {
  title: string;
  subcategories?: Category[];
}