import { createContext } from "react";

type FilterContextType = {
    minPrice: number | null;
    maxPrice: number | null;
    priceOrder: 'asc' | 'desc' | null;
    brands: { brand: string, checked: boolean }[];
    rating: number | null;
    available: boolean;
    setMinPrice: (price: number | null) => void;
    setMaxPrice: (price: number | null) => void;
    setPriceOrder: (order: 'asc' | 'desc' | null) => void;
    setBrands: (brands: { brand: string, checked: boolean }[]) => void;
    setRatings: (ratings: number | null) => void;
    setAvailable: (available: boolean) => void;
}

export const FilterContext = createContext<FilterContextType>(
    {
        minPrice: null,
        maxPrice: null,
        priceOrder: null,
        brands: [],
        rating: null,
        available: false,
        setMinPrice: () => { },
        setMaxPrice: () => { },
        setPriceOrder: () => { },
        setBrands: () => { },
        setRatings: () => { },
        setAvailable: () => { }
    }
);

