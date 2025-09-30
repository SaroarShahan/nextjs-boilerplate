type Product = {
  id: number;
  title: string;
  description: string | null;
  price: number;
  image: string | null;
};

type ProductPayload = {
  title: string;
  description?: string;
  price: number;
  image?: string;
};
