import React from 'react'

function About() {
  return (
    <div>
      <h1>ℹ️ About Recipe Finder</h1>

      <p>
        Recipe Finder is a React application that helps
        users search and discover delicious recipes.
      </p>

      <h2>Features</h2>

      <ul>
        <li>Search recipes</li>
        <li>View recipe details</li>
        <li>View ingredients</li>
        <li>View cooking instructions</li>
        <li>Save favorite recipes</li>
      </ul>

      <h2>Technologies</h2>

      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Axios</li>
        <li>Custom useFetch Hook</li>
        <li>DummyJSON API</li>
      </ul>
    </div>
  );
}

export default About;