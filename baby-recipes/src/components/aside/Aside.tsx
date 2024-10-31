import "../aside/AsideStyle.css";

interface SideProps {
  onFilterChange: (filter: string) => void;
}


const Aside = ({onFilterChange}:SideProps) => {
  const categories = ['All', 'Category A', 'Category B', 'Category C'];


  return (
    <div className="main-container-aside">
      <ul className="list-group">
        {categories.map((category) =>(
          <li className="list-group-item"
            key={category}
            onClick={() => onFilterChange(category === 'All'? '': category)}
          >{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Aside;
