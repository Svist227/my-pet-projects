import { Children } from 'react'
import './Content.scss'

const Content = (probs) => {
    const {children} = probs
    return (
        <main className='content'>{children}</main>
    )
}

export default Content