import { useLayoutEffect, useState } from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import type { Product } from '@/types/product';
import logo from '../../assets/logo_transparent.png'
import { Button } from '../ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const ImageSelector = ({product} : {product: Product}) => {

    const [currentImg, setCurrentImg] = useState<string | undefined>(product && product.images[0] ? product.images[0] : logo);
    const [showBigImage, setShowBigImage] = useState<boolean>(false);

    useLayoutEffect(() => {
        setCurrentImg(product?.images[0] ?? logo);
    }, [product]);

    const getNextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const nextImgIndex = getNextImageIndex();
        if(nextImgIndex) {
            setCurrentImg(nextImgIndex);
        } 
    }

    const getPreviousImage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const prevImgIndex = getPreviousImageIndex();
        if(prevImgIndex) {
            setCurrentImg(prevImgIndex);
        }  
    }

    const getNextImageIndex = () => {
        const currentIndex = product.images.indexOf(currentImg ?? '');
        if(product.images[currentIndex + 1]) {
            return product.images[currentIndex + 1];
        }
        return undefined;
    }

    const getPreviousImageIndex = () => {
        const currentIndex = product.images.indexOf(currentImg ?? '');
        if(product.images[currentIndex - 1]) {
            return product.images[currentIndex - 1];
        }
        return undefined;
    }

    return (
    <section className='flex max-sm:flex-col gap-1 sm:items-start'>
        
        <ScrollArea className='p-2 border rounded-md' viewportClassName='max-h-[60vh]'>
            <div className='max-sm:flex gap-2'>
                {product.images.map((img, index) => (
                    <img key={index} src={img} alt={'photo' + index} onClick={() => setCurrentImg(img)} 
                        className='max-h-32 rounded-md cursor-pointer hover:bg-neutral-200/90 dark:hover:bg-neutral-800/50'
                    />
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div>
            <img src={currentImg} alt="preview" className='border p-2 max-h-[60vh] cursor-zoom-in' onClick={() => setShowBigImage(true)}/>
        </div>

        {showBigImage && (
            <div className='fixed top-0 left-0 h-[100vh] w-[100vw] bg-neutral-200/70 dark:bg-neutral-700/70' onClick={() => setShowBigImage(false)}>
                <div className='fixed bottom-0 flex items-center justify-around h-[100vh] w-full z-20'>
                    <div onClick={(e) => e.stopPropagation()}>
                        <Button className='cursor-pointer rounded-full' disabled={!getPreviousImageIndex()} onClick={(e) => getPreviousImage(e)}>
                            <ChevronLeft />
                        </Button>
                    </div>

                    <div onClick={(e) => e.stopPropagation()}>
                        <img src={currentImg} alt="preview" className='max-h-[90vh]'/>
                    </div>

                    <div onClick={(e) => e.stopPropagation()}>
                        <Button className='cursor-pointer rounded-full' disabled={!getNextImageIndex()} onClick={(e) => getNextImage(e)}>
                            <ChevronRight />
                        </Button>
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default ImageSelector