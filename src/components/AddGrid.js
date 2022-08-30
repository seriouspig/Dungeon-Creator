import React from 'react'

const AddGrid = () => {
  return (
    <div>
        <form >
            <div>
                <label >Number of Rows</label>
                <input type="number" name="" id="" />
            </div>
            <div>
                 <label >Number of Columns</label>  
                 <input type="number" name="" id="" />           
            </div>
            <input type="submit" value='Save Grid' className='btn btn-block'/>
        </form>
    </div>
  )
}

export default AddGrid