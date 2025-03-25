import "./App.css";
import MenuList from "./menu-list";

function App({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}

export default App;
