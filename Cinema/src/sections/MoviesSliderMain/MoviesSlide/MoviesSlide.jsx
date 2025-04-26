import { Image } from 'minista'
import './MoviesSlide.scss'
import Button from '@/components/Button/Button'
import classNames from 'classnames'
const MoviesSlide = (props) => {

    const {
    titleId,
    title,
    description,
    imgMovies,
    TitleTag = 'h3',// пока не трогаем
    isSmallPaddingY = false,
} = props

   
    return (
        <section className='movies-slide' >
           <Image src={imgMovies} className='movies-slide__banner'></Image>
            <div className={classNames("movies-slide__inner", {
                'movies-slide__inner--small-padding-y': isSmallPaddingY,  
            })}
            >
            
            <div className="movies-slide__information">
                <div className="movies-slide__title h3" id={titleId}>
                    <p>{title}</p>
                </div>
                <div className="movies-slide__description hidden-mobile">
                    <p>{description}</p>
                </div>
            </div>
                <div className="movies-slide__actions">
                <Button className='play__button' 
            iconName='play' 
            label='Play Now'
            hasFill
            iconPosition = 'before'
            
            />
             <div className="movies-slide__actions-right">
             <Button className='Movie__button' 
            iconName='add' 
            mode = 'black-06'
            isLabelHidden
            />
              <Button className='Movie__button' 
            iconName='like'
            isLabelHidden
           
            mode = 'black-06'
            />
             <Button className='Movie__button' 
            iconName='volume' 
            mode = 'black-06'
            isLabelHidden
            />
             </div>
                </div>
           
           
            </div>
        </section>
    )
}
export default MoviesSlide