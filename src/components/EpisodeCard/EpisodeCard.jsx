import Icon from '../Icon'
import './EpisodeCard.scss'
import { Image } from 'minista'
const EpisodeCard = (props) => {
    const {
        title,
        description,
        timekeeping,
        video,
    } = props

    return (
        <div className="episode-card">
            <div className="episode-card__number">
                
            </div>
           <div className="episode-card__player" data-js-video-player=''>
           <video src={video.src} className="episode-card__video"
            poster = {video.imgEpisode} height={118} width={182} 
            data-js-video-player-video=''/>
            <button
            className='episode-card__play-button is-active'
            type='button'
            aria-label='Play video'
            title='Play video'
            data-js-video-player-play-button=''>
                <Icon name = 'play-circle' className='episode-card__play-button-icon'/>
            </button>
           </div>
            
        
            <div className="episode-card__info">
                    <div className="episode-card__info-header">
                        <div className="episode-card__title">
                            <h5> {title}</h5>
                        </div>
                        <div className="episode-card__timekeeping">
                            <Icon name='time' ariaLabel='Duration'></Icon>
                            <p className='episode-card__time'>{timekeeping} min</p>
                        </div>
                    </div>
                    <div className="episode-card__info-description">
                        <p>{description}</p>
                    </div>
            </div>
        </div>
    )
}

export default EpisodeCard