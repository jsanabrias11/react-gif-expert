
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QHguckvB4Ml6fGju0TbhtulDy62vML6Z&q=${ category }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const imageData = data.map(({id, images, title}) => ({
        id : id,
        title : title,
        url : images.downsized_medium.url
    }))

    return imageData;
}