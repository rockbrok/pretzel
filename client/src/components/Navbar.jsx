import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div className="flex flex-row container justify-between p-8">
      <Link to="/">
        <span className="material-symbols-outlined">store</span>
      </Link>
      <button>
        <span className="material-symbols-outlined">shopping_basket</span>
      </button>
    </div>
  )
}