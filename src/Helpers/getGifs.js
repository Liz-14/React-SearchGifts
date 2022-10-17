export const getGigfs = async (category) => {
      
   const url = `https://api.giphy.com/v1/gifs/search?api_key=t6HKlRtfB6KVKHvGxiRhmkCm5Cfe8Wxd&q=${category}&limit=20`
   const resp = await fetch(url);
   const {data = []} = await resp.json();

   const gifs = data.map(({id, title, images:{ downsized_medium }}) => ({
      id: id,
      title: title,
      url: downsized_medium.url
   }));
   
   return gifs;
}