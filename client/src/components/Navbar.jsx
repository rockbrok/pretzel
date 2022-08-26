import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ query, handleChange }) {

  const location = useLocation();
  const pathname = location.pathname;
  
  const storeHandler = () => {
    if (pathname === "/store") {
      window.location.reload(false)
    } else {
      return null
    }
  }

  return (
    <div className="flex flex-row container justify-between p-8 items-center">
      <Link to="/">
        home
      </Link>
      <Link to="/about">
        about
      </Link>
      <Link to="/store" onClick={() => storeHandler()}>
        store
      </Link>
      <Link to="/cart">
        cart
      </Link>
      <Link to="/login">
        login
      </Link>
      <Link to="/register">
        register
      </Link>
    </div>
  )
}