import Accordion from "../components/Accordion"
function AccordionPage() {
  
const items = [
  {
    id: 1,
    label: 'Can I use React in VS code?',
    content: 'Yes you can use React in VS code.Yes you can use React in VS code.Yes you can use React in VS code.Yes you can use React in VS code.Yes you can use React in VS code'
  },
  {
    id: 2,
    label: 'Can I use Javascript in vs code?',
    content: 'Yes you can use React in VS code.Yes you can use React in VS code.Yes you can use React in VS code.Yes you can use React in VS code.Yes you can use React in VS code'
  },
  {
    id: 3,
    label: 'Can I use Java on vs code?',
    content: 'Yes you can use React in VS code.Yes you can use React in VS code.Yes you can use React in VS code.Yes you can use React in VS code.Yes you can use React in VS code'
  },
]
   return <Accordion items={items} />
}
export default AccordionPage;