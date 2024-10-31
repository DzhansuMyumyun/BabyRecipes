
interface CardProps {
    title: string;
    category: string;
}
  

const Recipe = ({ title, category }:CardProps) => {
    return (
      <div>
        <h3 className="card-title">{title}</h3>
        <p className="card-category">{category}</p>
      </div>
    );
};


export default Recipe;
