export interface Industry {
  title: string;
  route: string;
  info: string;
  categories: Category[];
}

interface Category {
  title: string;
  subcategories: Category[];
}