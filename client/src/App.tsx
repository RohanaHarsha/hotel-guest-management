
import { Link, Outlet } from 'react-router-dom';  
import './App.css';


const App = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/" className='text-blue-500 hover:underline'>Home</Link>
        </li>
        <li>
          <Link to="/GuestRegistration" className='text-blue-500 hover:underline'>Guest Registration</Link>
        </li>
        <li>
          <Link to="/GuestList" className='text-blue-500 hover:underline'>Guest List</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default App;
