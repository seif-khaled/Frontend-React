import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/inventory">Inventory</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
