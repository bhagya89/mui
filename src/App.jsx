
import { useState } from 'react'
import './App.css'
import { Button } from '@material-ui/core'
import Delete from '@material-ui/icons/Delete'


function App() {
const [color, setColor] = useState("primary"); 
const [disableBtn, setDisableBtn] = useState(false);

function customColor(){
  setDisableBtn(true)
}

  return (
    <>
    <div className='App'>
      <h1>React-MUI</h1>
      <button>click me</button>
      <Button color={color}
      disabled={disableBtn}
      variant='contained'
      size='large'
      onClick={()=>customColor()}
      startIcon={<Delete/>}
      >MUI Button </Button>
      
      </div>
        
    </>
  )
}

export default App
