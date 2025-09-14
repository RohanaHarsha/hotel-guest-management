
import { Link, Outlet } from 'react-router-dom';  

const App = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/GuestRegistration">Guest Registration</Link>
        </li>
        <li>
          <Link to="/GuestList">Guest List</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default App;
