import {useState} from 'react'

const Toggle = () => {
  const [isClicked, setClick] = useState(false)
  return (
    <div>
      <button className='bg-blue-300 rounded' onClick={()=>setClick(!isClicked)}>{isClicked? "Hide Details" : "Show Details"}</button>
      {isClicked && <p>Button is clicked!....</p>}
    </div>
  )
}

export default Toggle