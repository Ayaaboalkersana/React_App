import { useState } from "react";
import CardComp from "./card";

function Favorites(){

let favorites = JSON.parse(localStorage.getItem("Favorites"))

let [FavoriteState,setFavoriteState] = useState(favorites)

function RemoveFromFavorites(index){
    favorites.splice(index,1 )
    let favoritesCopy = [...favorites]
    setFavoriteState(favoritesCopy)
    let stringData = JSON.stringify(favoritesCopy) 
    localStorage.setItem("Favorites",stringData)} 

    return(
        <>
<div id = "cardsFavorites" >
    {FavoriteState.map(function(item,index){
        return(
            <CardComp image_url={item.image_url} title={item.title} description={item.description} showFavorites={false} index={index}
            RemoveFromFavorites={() => RemoveFromFavorites(index)} showRemove={true}
            />

)})}
</div>
        </>
    )
}
export default Favorites;
