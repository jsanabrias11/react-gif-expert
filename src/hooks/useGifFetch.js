import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getFetchGifs";

export const useGifFetch = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const newGetImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
        newGetImages();
    }, [])

    return {
        images,
        isLoading 
    }
}
