import React from 'react'
import { useNavigate } from 'react-router-dom'

import SearchBar from '../components/SearchBar'
import useFetch from '../hooks/useFetch'
import RecipeCards from '../components/RecipeCards'

function Home() {

  const navigate = useNavigate();
  const url='https://dummyjson.com/recipes?limit=10';

  const { data, loading, error} = useFetch(url);

  const handleSearch = (search) => {
    navigate(`/search?query=${search}`);

  };

  if(loading) {
    return <p>Loading...</p>
  } 
  if(error) {
    return <p>Error:{error}</p>
  }

  
  return (
    <div>
      <h1> Recipe Finder </h1>
      <p> Discover delicious recipes and cooking ideas. </p>
      
      <SearchBar onSearch={handleSearch} />
        <h2>Featured Recipes</h2>
        
           
            <div>
              {
                data.recipes.map((recipe)=> (
                  <RecipeCards key={recipe.id} recipe={recipe} />

                ))
              }
            </div>
    </div>
  );
}

export default Home;