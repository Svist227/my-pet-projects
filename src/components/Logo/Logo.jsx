import './Logo.scss'
import classNames from 'classnames'

const Logo = (probs) => {
    const { className ,loading = 'lazy'} = probs    //по дефолту lazy
    return (
        <a href="/" className= {classNames(className, 'logo')}>
            <img src="./Logo.svg" alt="Logo" title='Logo' aria-label='Logo' loading={loading}
            />
        </a>
    )
}
export default Logo