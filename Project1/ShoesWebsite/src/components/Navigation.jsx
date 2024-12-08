import './Navigation.css'

const Navigation = () => {
  return (
    <nav className='nav_container'>
        <img src="./images/brand_logo.svg" alt="nike-logo" />
        <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <button>Login</button>
    </nav>
  )
}

export default Navigation