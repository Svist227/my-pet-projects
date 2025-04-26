import classNames from 'classnames'
import './Specifications.scss'

const Specifications = (props) => {
    const {
        items = [],
    } = props
    return (
        <div className="specifications">
            <dl className="specifications__list">
                {items.map(({key,value, isWide},index) => (
                    <div key={index}
                    className={classNames('specifications__item',{
                        'specifications__item-wide': isWide
                    })}>
                        <dt className="specifications__key">
                            {key}
                        </dt>
                        <dd className="specifications__value">
                            {value}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}

export default Specifications