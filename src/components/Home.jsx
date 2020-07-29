import React, { useState } from 'react';
import { Notes } from './Notes';

export const Home = () => {
  const [value, setValue] = useState('')
  return(
    <form>
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Type your task"
        onChange={e => setValue(e.target.value)}
        value={value}
      />        
      <hr/>
      <Notes />
    </form>
  )
}