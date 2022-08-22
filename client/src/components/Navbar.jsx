import { Link } from 'react-router-dom';

export default function Navbar({ query, handleChange }) {
  return (
    <div className="flex flex-row container justify-between p-8">
      <Link to="/">
        <span className="material-symbols-outlined">store</span>
      </Link>
      <Link to="/login">
        login
      </Link>
      <Link to="/register">
        register
      </Link>
      <button>
        cart
      </button>
      <input
        onChange={handleChange}
        value={query}
        placeholder="Search.."
        type="search"
      />
    </div>
  )
}