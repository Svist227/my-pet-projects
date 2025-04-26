    import { Image } from 'minista'
    import './Support.scss'
    import Field from '@/components/Field'
    import Button from '@/components/Button/Button'
import Select from '@/components/Select'


    const Support = (props) => {
        const {
        title,
        description,
        } = props
        return (
            <section className="support container">
                <div className="support__info">
                    <div className="support__info-header">
                        <div className="support__info-title">
                            <h1 className='h2'> {title}</h1>
                        </div>
                        <div className="support__info-description">
                        <p> {description}</p>
                        </div>
                    </div>
                    <div className="support__info-image">
                        <Image src='/src/assets/images/Support/Banner.png'  className= 'ds'alt='' height={477} width={533}/>
                    </div>
                </div>
                <form className="support__form">
                    
                    <Field id='Name' isRequared placeholder='Roma'/>
                    <Field id='Surname' placeholder='Danilov'/>
                    <Field id='Email' isRequared placeholder='id@gmail.com'/>
                    <Field id='Phone Number'mode='select' 
                    mask = '(000) 000-00-00' renderBefore={(buttonClassName) => (
                        <Select 
                        label = 'Phone number prefix'
                        buttonClassName = {buttonClassName}
                        options= {[
                            {value: '+7', isSelected: true},
                            {value: '+1'},
                            {value: '+2'},
                            {value: '+3'},
                        ]}
                        />
                    )}
                    placeholder='+79176628871' inputMode='tel'/>
                    <Field id='Message' textarea className='support__form-grow' isRequared placeholder='My message'/>
                    <div className="support__form-terms" >
                        <div className="support__form-checkbox">
                        
                            <p> 
                                <input type='checkbox' id='checkbox'/>
                            <label htmlFor="checkbox">I agree with Terms of Use and Privacy Policy</label>
                            </p>
                        </div>
                        <Button className="support__form-button" label='Send Message'/>
                    </div>

                </form>
            </section>
        )
    }

    export default Support