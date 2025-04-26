import Badge from '../Badge'
import RatingView from '../RatingView/RatingView'
import './ReviewCard.scss'
const ReviewCard = (props) => {
    const {
      name,
      from,
      description,
      rating,
    } = props
    return (
        <div className="review-card ">
         <div className="review-card__inner">
          <div className="review-card__title">
            <div className="review-card__title-left">
            <div className="review-card__title-name">
                <p className='h6'>{name}</p>
              </div>
              <div className="review-card__title-from">
                <p>{from}</p>
              </div>
              </div>
            
            <div className="review-card__title-right">
             
           <Badge>
           <RatingView label = {rating} value = {rating}/>
           </Badge>
             
            </div>
            </div>
          

          <div className="review-card__description">
            <p>{description}</p>
          </div>
          </div>
         </div>
    

    )
}

export default ReviewCard