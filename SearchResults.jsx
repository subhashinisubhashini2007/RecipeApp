import React from 'react'
import useFetch from '../hooks/useFetch'
import SearchBar from '../components/SearchBar'
import RecipeCards from '../components/RecipeCards'
import { useSearchParams } from 'react-router-dom'
function SearchResults() {

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const url = query ? `https://dummyjson.com/recipes/search?q=${query}` : "https://dummyjson.com/recipes?limit=10";
  const { data,loading,error } = useFetch(url);

  const handleSearch = (search) => {
    setSearchParams({ q:search });

  };

  if(loading) {
    return <p>Loading...</p>
  } 
  if(error) {
    return <p>Error:{error}</p>
  }

 
  return (
    <div>
      <h1> Search Results  </h1>

    <SearchBar onSearch={handleSearch} />
    {query && <h2>Results for "{query}"</h2>}
    {
      data.recipes.length === 0 && (
        <p>No recipes found. </p>

      )
    }
    <div>
      {
        data.recipes.map((recipe) =>(
          <RecipeCards key={recipe.id} recipe={recipe} />
        ))
      }
    </div>
    </div>
  );
}

export default SearchResults;