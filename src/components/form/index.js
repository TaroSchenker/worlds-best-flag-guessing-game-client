import React from 'react';
import { Button } from 'react-bootstrap';

export const Form = ({ onSubmit, setDisplayName }) => {

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input onChange={(e)=>setDisplayName(e.target.value)} className="form-control" id="name" placeholder='Enter your name here...' />
      </div>
      <div className="d-flex justify-content-center">
        <Button  className="my-2 button" variant="outline-info" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
export default Form;
