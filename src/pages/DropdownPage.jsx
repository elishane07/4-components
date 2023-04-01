import {useState} from 'react'
import Dropdown from '../components/Dropdown'


function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Not spicy', value: 'mild' },
    { label: 'A little spicy', value: 'spicy' },
    { label: 'Really spicy', value: 'extra_spicy' }, 
  ]
  return (
    <div>
      <Dropdown options={options}  value={selection} onChange={handleSelect} />  
      
    </div>
  )
}

export default DropdownPage