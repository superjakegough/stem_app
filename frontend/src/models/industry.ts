export interface Industry {
  title: string;
  info: string;
  categories: Category[];
}

interface Category {
  title: string;
  subcategories?: Category[];
}