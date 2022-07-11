export interface BaseType {
  name: string;
  price: number;
}

export type TypeProductType = "physical" | "virtual";

export interface ProductType extends BaseType {
  src: string;
  type: TypeProductType;
  quantity?: number;
}

export interface ProductsSelectorType {
  products: {
    products: ProductType[];
    loading: boolean;
    hasErrors: boolean;
  };
}

export interface CartType extends BaseType {
  _id: string;
  src: string;
  quantity: number;
  type?: TypeProductType;
  gift?: number;
}

export interface ProductAndGiftsType {
  product: ProductType;
  gifts: BaseType[];
}

export interface TaxesAndTotalType {
  taxes: BaseType[];
  total: number;
}

export interface TaxesSelectorType {
  taxes: {
    taxes: BaseType[];
  };
}

export interface GiftsSelectorType {
  gifts: {
    gifts: BaseType[];
  };
}

export interface CartSelectorType {
  cart: {
    items: CartType[];
  };
}

export interface ProductSelectorType {
  product: {
    product: ProductType;
  };
}

export interface ReactChildren {
  children: ReactNode;
}

export interface CartSetType {
  setIsCart: (data: boolean) => void;
}
