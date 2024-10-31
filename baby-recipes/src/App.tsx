import Navigation from "../src/components/navi/Navi";
import Aside from "../src/components/aside/Aside";
import Recipes from "./components/recipesGrid/Recipes";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../src/App.css"
import { useState } from "react";


// Sample card data
const cardData = [
  { id: 1, title: 'Card 1', category: 'Category A' },
  { id: 2, title: 'Card 2', category: 'Category B' },
  { id: 3, title: 'Card 3', category: 'Category A' },
  { id: 4, title: 'Card 4', category: 'Category C' },
];





function App() {
  const [filter, setFilter] = useState<string>(''); // Holds filter value
  
  // Filter the cards based on the filter state
  const filteredCards = cardData.filter((card) =>
    filter ? card.category === filter : true
  );

  return (
    <div className="main-container-app">
      <Navigation />
      <br />
      <div className="main-container">
        <div className="aside-container">
          <Aside onFilterChange={setFilter}/>
        </div>
        <div className="recipies-container">
          <Recipes cards={filteredCards}/>
        </div>
      </div>
    </div>
  );
}

export default App;
