import Section from '@/layouts/Section'
import './Questions.scss'
import Button from '@/components/Button/Button'
import AccordionGroup from '@/components/AccordionGroup'

const Questions = () => {

    const questionItems = [ 
        {title:'What is StreamVibe?',
         description:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'} ,
         {title:'How much does StreamVibe cost?', 
            description:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'} ,
         {title:'What content is available on StreamVibe?',
            description:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'} ,
         {title: 'How can I watch StreamVibe?',
            description:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'} ,
         {title:'How do I sign up for StreamVibe??',
            description:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'} ,
         {title:'What is the StreamVibe free trial?',
            description:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'} ,
         {title:'How do I contact StreamVibe customer support?',
            description:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'} ,
         {title:'What are the StreamVibe payment methods?',
            description:'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'},
    ]

    return (
        <Section 
        title = 'Frequently Asked Questions'
        description = "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        flexPosition = 'end'
        actions = {(
            <Button  label = 'Ask a Question' > </Button>

        )}>
            <AccordionGroup columns = {2}>
               {questionItems}
            </AccordionGroup>
        
        </Section>
    )
}
export default Questions