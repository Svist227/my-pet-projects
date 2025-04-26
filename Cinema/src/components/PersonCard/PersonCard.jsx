import { Image } from 'minista'
import './PersonCard.scss'

const PersonCard = (props) => {
    const {
       name,
       imgSrc,
       from
    } = props
    return (
            <div className="person-card">
              
               
                    <Image className = 'person-card__img'src={imgSrc} alt="" />
            
                <div className="person-card__info">
                    <h4 className="person-card__info-title">
                        <p>{name}</p>
                    </h4>
                    <div className="person-card__info-from">
                        <p> From {from}</p>
                    </div>
                </div>
              
            </div>
    )
}

export default PersonCard