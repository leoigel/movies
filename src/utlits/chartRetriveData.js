export const retriveCategories = (obj) => {
    const { results } = obj;
   return results.map(categorie => categorie.popularity)
  }
export  const retriveData = (obj) => {
    const { results } = obj;
    return results.map(categorie => categorie.title)
  }