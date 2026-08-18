import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/armory">Shop</Link>
        <Link to="/warriors">Inventory</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
