import AddGrid from './AddGrid'
import React from 'react'


const Form = ({onAdd}) => {
  return (
    <div>
        <AddGrid onAdd={onAdd}/>
    </div>
  )
}

export default Form