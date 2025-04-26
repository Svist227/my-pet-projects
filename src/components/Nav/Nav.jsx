import './Nav.scss'

const Nav = () => {
    return (
        <nav className='header__nav'>
           <a href="/"> <div className='active'><p>Home</p></div></a>
           <a href="/"> <div>Movies & Shows</div></a>
           <a href="/"> <div>support</div></a> 
           <a href="/"><div>Subscriptions</div></a> 
        </nav>
    )
}

export default Nav