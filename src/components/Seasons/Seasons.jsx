import Button from '../Button/Button'
import EpisodeCard from '../EpisodeCard'
import Icon from '../Icon'
import './Seasons.scss' 

const Seasons = (props) => {
    const {
        seasons,
    
    } = props

    return (
        <div className="seasons">
            {seasons.map((season,index) => {
                const {
        seasonNumber,
        episodeCount,
        eposodes,

                } = season
                return (
                    <div className="season">
                    <details className='season-details' key={index}>
                        <summary className='season-details__title'>
                            <div className='season-details__title-inner'> 
                                <h4> Season {seasonNumber}</h4>
                                <span>{episodeCount} Episodes</span>
                            </div>
                            <div className="season-details__title-button">
                                <Icon  className ='season-details__title-icon' name='arrow-bottom'></Icon>
                            </div>
                        </summary>
                        </details>
                        <div className="season-details__content">
                        <div className="season-details__content-inner">
                            <div className="season-details__body">
                       {eposodes.map((episode,index) => {
                        const {
                            title,
                            video,
                            description,
                            timekeeping
                        } = episode

                        return (
                            <EpisodeCard key={index}  title ={title}
                            description = {description} video = {video}
                            timekeeping={timekeeping}
                            />
                        )
                       })}
                        </div>
                        </div>
                        </div>
                        </div>
                   
                )

            })}
        </div>
    )
}

export default Seasons            