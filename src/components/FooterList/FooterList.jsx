import './FooterList.scss'

const FooterList = (probs) => {
    const {
        heading,
        listmap,
        social
    } = probs

     const label = social != undefined ? social.map((element) => { return element + '.svg'}) : undefined
  
    return (
        <>
            <div className="nav__element">
                <div className='nav__element-heading h6'><a href="">{heading}</a></div>
            <div className='nav__element-menu'>
                <ul className='nav__element-item'>
                    { listmap != undefined  && (listmap.map((sub,index) => { return (
                    <li className='nav__element-link' key={index}>
                        <a href="/" className='nav__element-list'>{sub}</a>
                    </li>)}))}
                    { label != undefined  && (label.map((sub,index) => { return (
                    <li className='nav__element-link' key={index}>
                        <a href="/" className='nav__element-list'>{sub}</a>
                    </li>)}))}
                </ul>
            </div>

            </div>
        </>
    )
}



export default FooterList