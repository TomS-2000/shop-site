import { useEffect, useState } from "react";
import { type Product, type ProductResponse } from "@/types/product";

export const useFetch = (url: string) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [total, setTotal] = useState<number>(-1);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        console.log(url)
        const fetchData = async() => {
            try {
                const response = await fetch(url);
                if(response.ok) {
                    const result: ProductResponse = await response.json();
                    setTotal(result.total);
                    setProducts(result.products);
                    setError(null);
                } else {
                    setProducts([]);
                    setTotal(-1);
                    setError('No products found.');
                }
                
            } catch (e) {
                console.error(e);
                setProducts([]);
                setTotal(-1);
                setError(e instanceof Error ? e.message : String(e));
            }
        }

        fetchData();
        
    }, [url]);

    return {products, error, total};
}

export const useFetchProduct = (url: string) => {
    const [product, setProducts] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        console.log(url)
        const fetchData = async() => {
            try {
                const response = await fetch(url);
                if(response.ok) {
                    const result: Product = await response.json();
                    setProducts(result);
                    setError(null);
                } else {
                    setProducts(null);
                    setError('No products found.');
                }
                
            } catch (e) {
                console.error(e);
                setProducts(null);
                setError(e instanceof Error ? e.message : String(e));
            }
        }

        fetchData();
        
    }, [url]);

    return {product, error};
}