import './Tags.scss';

const Tags = (props) => {
    const {
        tag,

    } = props
    return (
       
                <div  className="tags__item ">
                    <p className='tags__item__title'> {tag}</p>
                </div>
            
    )
}

export default Tags;