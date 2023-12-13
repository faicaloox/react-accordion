import Accordion from './Accordion'

const faqs = [
    {
        title: "Where are these chairs assembled?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur recusandae " +
                "dignissimos fuga voluptas undo optio..."
    }, {
        title: "How long do i have to return my chair?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur recusandae " +
                "dignissimos fuga voluptas undo optio..."
    }, {
        title: "Do you ship to countries outside the EU?",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur recusandae " +
                "dignissimos fuga voluptas undo optio..."
    }
]

const App = () => {
    return (
        <Accordion data={faqs} /> 
    )
}

export default App