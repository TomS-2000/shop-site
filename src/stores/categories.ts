type CategoryType = {
    category: string;
    url: string;
}

type MainCategoryType = {
    category: 'Home' | 'Beauty' | 'Electronics' | 'Sports' | 'Vehicles' | 'Food' | 'Clothes';
    subCategories: CategoryType[];
}



export const mainCategories: MainCategoryType[] = [
    {
        category: 'Home',
        subCategories: [
            { category: 'Furniture', url: 'https://dummyjson.com/products/category/furniture' },
            { category: 'Home Decoration', url: 'https://dummyjson.com/products/category/home-decoration' },
            { category: 'Kitchen Accessories', url: 'https://dummyjson.com/products/category/kitchen-accessories' },
        ]
    },
    {
        category: 'Beauty',
        subCategories: [
            { category: 'Beauty', url: 'https://dummyjson.com/products/category/beauty' },
            { category: 'Skin Care', url: 'https://dummyjson.com/products/category/skin-care' },
            { category: 'Fragrances', url: 'https://dummyjson.com/products/category/fragrances' },
        ]
    },
    {
        category: 'Electronics',
        subCategories: [
            { category: 'Laptops', url: 'https://dummyjson.com/products/category/laptops' },
            { category: 'Tablets', url: 'https://dummyjson.com/products/category/tablets' },
            { category: 'Phones', url: 'https://dummyjson.com/products/category/smartphones' },
            { category: 'Mobile Accessories', url: 'https://dummyjson.com/products/category/mobile-accessories' },
        ]
    },
    {
        category: 'Sports',
        subCategories: [
            { category: 'Sports Accessories', url: 'https://dummyjson.com/products/category/sports-accessories' },
        ]
    },
    {
        category: 'Vehicles',
        subCategories: [
            { category: 'Vehicle', url: 'https://dummyjson.com/products/category/vehicle' },
            { category: 'Motorcycle', url: 'https://dummyjson.com/products/category/motorcycle' },
        ]
    },
    {
        category: 'Food',
        subCategories: [
            { category: 'Groceries', url: 'https://dummyjson.com/products/category/groceries' },
        ]
    },
    {
        category: 'Clothes',
        subCategories: [
            { category: 'Mens Shirts', url: 'https://dummyjson.com/products/category/mens-shirts' },
            { category: 'Mens Shoes', url: 'https://dummyjson.com/products/category/mens-shoes' },
            { category: 'Mens Watches', url: 'https://dummyjson.com/products/category/mens-watches' },
            { category: 'Womens Bags', url: 'https://dummyjson.com/products/category/womens-bags' },
            { category: 'Womens Dresses', url: 'https://dummyjson.com/products/category/womens-dresses' },
            { category: 'Womens Jewellery', url: 'https://dummyjson.com/products/category/womens-jewellery' },
            { category: 'Womens Shoes', url: 'https://dummyjson.com/products/category/womens-shoes' },
            { category: 'Womens Watches', url: 'https://dummyjson.com/products/category/womens-watches' },
            { category: 'Tops', url: 'https://dummyjson.com/products/category/tops' },
            { category: 'Sunglasses', url: 'https://dummyjson.com/products/category/sunglasses' },
        ]
    }
];

export const categories: CategoryType[] = [
    { category: 'Furniture', url: 'https://dummyjson.com/products/category/furniture' },
    { category: 'Home Decoration', url: 'https://dummyjson.com/products/category/home-decoration' },
    { category: 'Kitchen Accessories', url: 'https://dummyjson.com/products/category/kitchen-accessories' },
    { category: 'Beauty', url: 'https://dummyjson.com/products/category/beauty' },
    { category: 'Skin Care', url: 'https://dummyjson.com/products/category/skin-care' },
    { category: 'Fragrances', url: 'https://dummyjson.com/products/category/fragrances' },
    { category: 'Laptops', url: 'https://dummyjson.com/products/category/laptops' },
    { category: 'Tablets', url: 'https://dummyjson.com/products/category/tablets' },
    { category: 'Phones', url: 'https://dummyjson.com/products/category/smartphones' },
    { category: 'Mobile Accessories', url: 'https://dummyjson.com/products/category/mobile-accessories' },
    { category: 'Sports Accessories', url: 'https://dummyjson.com/products/category/sports-accessories' },
    { category: 'Vehicle', url: 'https://dummyjson.com/products/category/vehicle' },
    { category: 'Motorcycle', url: 'https://dummyjson.com/products/category/motorcycle' },
    { category: 'Groceries', url: 'https://dummyjson.com/products/category/groceries' },
    { category: 'Mens Shirts', url: 'https://dummyjson.com/products/category/mens-shirts' },
    { category: 'Mens Shoes', url: 'https://dummyjson.com/products/category/mens-shoes' },
    { category: 'Mens Watches', url: 'https://dummyjson.com/products/category/mens-watches' },
    { category: 'Womens Bags', url: 'https://dummyjson.com/products/category/womens-bags' },
    { category: 'Womens Dresses', url: 'https://dummyjson.com/products/category/womens-dresses' },
    { category: 'Womens Jewellery', url: 'https://dummyjson.com/products/category/womens-jewellery' },
    { category: 'Womens Shoes', url: 'https://dummyjson.com/products/category/womens-shoes' },
    { category: 'Womens Watches', url: 'https://dummyjson.com/products/category/womens-watches' },
    { category: 'Tops', url: 'https://dummyjson.com/products/category/tops' },
    { category: 'Sunglasses', url: 'https://dummyjson.com/products/category/sunglasses' },
];