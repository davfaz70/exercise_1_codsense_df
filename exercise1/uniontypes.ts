/* Union and Intersection Types */

interface BaseProduct {
    name: string;
    price: number;
    description: string;
}

interface ProductSizeVar {
    variationType: 'size';
    size: string;
}

interface ProductColorVar {
    variationType: 'color';
    color: string;
}

interface ProductMaterialVar {
    variationType: 'material';
    material: string;
}

type VariationProduct = BaseProduct & (ProductSizeVar | ProductColorVar | ProductMaterialVar);
type Product = BaseProduct | VariationProduct;

const product: Product = { 
    name: 'T-Shirt', 
    price: 29.99, 
    description: 'A comfortable and stylish T-shirt.', 
}; 
 
const sizeVariation: Product = { 
    name: 'T-Shirt', 
    price: 34.99, 
    description: 'A comfortable and stylish T-shirt.', 
    variationType: 'size', 
    size: 'L', 
}; 
 
const colorVariation: Product = { 
    name: 'T-Shirt', 
    price: 39.99, 
    description: 'A comfortable and stylish T-shirt.', 
    variationType: 'color', 
    color: 'blue', 
}; 
 
const materialVariation: Product = { 
    name: 'T-Shirt', 
    price: 44.99, 
    description: 'A comfortable and stylish T-shirt.', 
    variationType: 'material', 
    material: 'cotton', 
};

/*
const illegalVariation: Product = {
    name: 'T-shirt',
    price: 33.66,
    description: 'An illegal type',
    variationType: 'color',
    size: 'XL'
} 
*/