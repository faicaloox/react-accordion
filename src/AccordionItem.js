import React from 'react'

const AccordionItem = ({num, title, text, currentOpen, onOpen}) => {
  const isOpen = num === currentOpen;
  const handleToggle = () => {
    if (num !== currentOpen) onOpen(num)
    else onOpen(null)
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <p className="number">{num < 9 ? `0${num+1}` : num+1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? '-' : '+'}</p>
        {isOpen && (
          <div className="content-box">{text}</div>
        )}
    </div>
  )
}

export default AccordionItem