import React from 'react'

import { useState } from 'react'

    function SearchBar({ onSearch }) {

      const [search, setSearch] = useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (search.trim()) {
          onSearch(search);
        }
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search by recipe name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
    
          <button type="submit">Search</button>
        </form>
      );
    }
    
    export default SearchBar;

  