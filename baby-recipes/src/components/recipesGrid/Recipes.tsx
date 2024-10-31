import "../recipesGrid/RecipesStyle.css"
import RecipeCard from "../recipe/RecipeCard"

interface CardData {
  id: number;
  title: string;
  category: string;
}

interface CardListProps {
  cards: CardData[];
}

const Recipes = ({ cards }:CardListProps) => {
  return (
    <div className="main-container-recipes">
      <ul className="list-group">
        {cards.map((card) => (
          <li className="list-group-item">
            <RecipeCard key={card.id} title={card.title} category={card.category}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
