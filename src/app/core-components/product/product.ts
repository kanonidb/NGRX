export interface IProduct {
  map(arg0: (product: any) => void): any;
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity:number;
}

export interface IRating{
  rate:number;
  count:number;
}