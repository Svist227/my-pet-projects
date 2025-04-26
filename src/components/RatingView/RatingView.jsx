import './RatingView.scss'

const RatingView = (props) => {
    const {
        value = 5, 
        label

    } = props
    const  ariaLabel = `Rating: ${value} stars`
    return (
        <div className="rating-view"
        aria-label={ariaLabel}
        title={ariaLabel}
        style= {{
            '--ratingViewValue': value, // напрямую передача значения в стили
        }}>
            <div className="rating-view__stars">
            <img className='rating-view__stars-filled' 
            src='/src/assets/icons/Rating/stars_filled.svg'  
            width={98}
            height={18}
            alt=''    // выгрузка незаполненного слоя
            />
            <img className='rating-view__stars-unfilled' 
            src='/src/assets/icons/Rating/stars_unfilled.svg'  
            width={98}
            height={18}
            alt=''    // выгрузка незаполненного слоя
            />

            </div>
            {label && (
                <div className='rating-view__label'>
                    {label}
                 </div>
            )}
        </div>
    )
}

export default RatingView