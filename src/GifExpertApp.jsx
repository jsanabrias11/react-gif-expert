import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (catego) => {
        if( categories.includes(catego)) return;
        setCategories([catego, ...categories])
    }

  return (
    <>
        {/* Título */}
        <h1>Gif Expert App</h1>

        {/*  Input */}
        <AddCategory onNewCategory={ onAddCategory } />
        
        
        {
            categories.map(category => (
                <GifGrid key={ category } category={category}/>
            )) 
        }        
    </>
  )
}
