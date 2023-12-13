import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const Accordion = ({data}) => {
    const [currentOpen, setCurrentOpen] = useState(null);
    return (
        <div className="accordion">
            {data.map((el, index) => (
                <AccordionItem 
                    currentOpen={currentOpen} 
                    onOpen={setCurrentOpen} 
                    title={el.title} 
                    text={el.text} 
                    num={index} 
                    key={el.title} 
                />
            ))}
        </div>
    )
}

export default Accordion