const { createContext, useState } = require("react");

export const FavoritesContext = createContext({
  ids:[],
  addFavorite:(id)=>{},
  removeFavorite:(id)=>{}
})

function FavoritesContextProvider({children}) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  const addFavorite = (id) => {
    setFavoriteMealIds((favIds)=>[...favIds, id])
  }

  const removeFavorite = (id) => {
    setFavoriteMealIds((favIds)=>favIds.filter((favId)=>favId !== id))
  }

  const value ={
    ids:favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }
  return(
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  )  
}

export default FavoritesContextProvider;