import React from 'react'
import Button from 'react-bootstrap/Button';

const Btn = ({title}) => {
  return (
    <div>
       <Button style={{width:"10rem",padding:"1rem"}} variant="warning">{title}</Button>
    </div>
  )
}

export default Btn;
