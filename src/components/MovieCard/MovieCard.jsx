import Badge from '../Badge'
import RatingView from '../RatingView/RatingView'
import './MovieCard.scss'
import { Image } from 'minista'
const MovieCard = (props) => {
    const {
        title,
        imgSrc,
        duration,
        views,
        released,
        href = '/move',
        rating,
        season
    } = props 

    return (
        <>
        <a 
        className='movie-card'
        href = {href}
        title={title}>
            <h3 className="visually-hidden">{title}</h3>
            <Image src={imgSrc} className='movie-card__image'></Image>
            <div className="movie-card__body"> 
                {duration && (
                    <Badge 
                    iconName='time'
                    iconArialLabel='Duration'
                    hasFillIcon
                    >
                        {duration}
                    </Badge>
                )}
                {season && (
                    <Badge 
                    iconName='catalog'
                    iconArialLabel='catalog'
                    hasFillIcon    
                    >
                        {season}
                    </Badge>
                )}
                 {views && (
                    <Badge 
                    iconName='eye'
                    iconArialLabel='Eye'
                    hasFillIcon    
                    >
                        {views}
                    </Badge>
                )}
                {released && (
                    <Badge 
                    className='movie-card__released-badge'

                    >
                        Released of <time className='movie-card__released-badge-label'datetime={released.time}>{released.label}</time>
                    </Badge>
                )}
                {rating && (
                    <Badge 
                    className='movie-card__rating-badge'
                    >
                        <RatingView  {...rating} />
                    </Badge>
                )}
            </div>

        </a>
        </>
    )
}

export default MovieCard