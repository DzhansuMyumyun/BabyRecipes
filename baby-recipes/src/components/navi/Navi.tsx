import "../navi/NaviStyle.css";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-main-div">
          <ul>
            <li>Baby Recipes</li>
          </ul>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
