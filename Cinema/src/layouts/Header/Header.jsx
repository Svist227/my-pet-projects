
import { Head } from "minista"
import './Header.scss'
import Logo from '@/components/Logo/Logo'
import Button from '@/components/Button/Button'
import { Search } from 'minista'
import BurgerButton from "@/components/BurgerButton"
import Nav from '@/components/Nav'
import classNames from "classnames"
const Header = (probs) => {
    const 
    {
        url,
        isFixed
    } = probs
    const menuItems = [ {
        label: 'Home',
        href : '/'
    },
    {
        label: 'Movies & Shows',
        href : '/movies'
    },
    {
        label: 'Support',
        href : 'Support'
    },
    {
        label: 'Subscriptions',
        href : '/subscriptions'
    }
]
    return (
        <header data-js-overlay-menu='' className = {classNames('header',{'is-fixed': true})}>
            <div className='header__inner container'>
                    
                        <Logo className='nologo'></Logo>
                        {/* <Nav></Nav> */}
                        <dialog className="header__overlay-menu-dialog" data-js-overlay-menu-dialog=''>  
                        <nav className="header__menu">
                            <ul className="header__menu-list">
                                {menuItems.map(({label,href},index) => (
                                    <li className="header__menu-item" key = {index}>
                                        <a className = {classNames('header__menu-link', {
                                            'is-active': href ===  url 
                                        })}
                                        href={href}>
                                            {label}
                                        </a>
                                    </li>
                                )) }

                            </ul>
                        </nav>
                        <div className='header__actions'>
                            <Button className = 'header__button' 
                            label='Search'
                            isLabelHidden 
                            mode = 'transparent'
                            iconName='search'

                            ></Button>
                            <Button className = 'header__button'
                            label = 'Notifications' 
                            isLabelHidden
                            mode = 'transparent'
                            iconName='notification'>
                            </Button>
                            </div>
                           </dialog>
                            <BurgerButton className='header__burger-button visible-tablet'
                            extraAttrs = {{'data-js-overlay-menu-dialog-burgerbutton': '',
                                
                            }} />
                        </div>

                    
            
        </header>
    )
}
export default Header