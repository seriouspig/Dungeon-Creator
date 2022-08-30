import React from 'react'
import {useState} from 'react'

const AddGrid = ({onAdd}) => {

    const [numberOfRows, setNumberOfRows] = useState(0)
    const [numberOfColumns, setNumberOfColumns] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({numberOfRows, numberOfColumns})

        // setNumberOfRows(0)
        // setNumberOfColumns(0)

    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <div>
                <label >Number of Rows</label>
                <input type="number" placeholder='Rows' value={numberOfRows} onChange={(e) => setNumberOfRows(e.target.value)} />
            </div>
            <div>
                 <label >Number of Columns</label>  
                 <input type="number" placeholder='Columns' value={numberOfColumns} onChange={(e) => setNumberOfColumns(e.target.value)} />       
            </div>
            <input type="submit" value='Generate Board' className='btn btn-block'/>
        </form>
    </div>
  )
}

export default AddGrid