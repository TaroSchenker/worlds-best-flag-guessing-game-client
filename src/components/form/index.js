import React from 'react';
import { Button, Form } from 'react-bootstrap';

export const MyForm = ({ onSubmit, setDisplayName }) => {

  return (
         <form >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input onChange={(e)=>setDisplayName(e.target.value)} className="form-control" id="name" placeholder='Enter your name here...' />
      </div>
      <div className="d-flex justify-content-center">
        <Button  onClick={onSubmit} className="my-2 button" variant="outline-primary" type="submit">
          Submit
        </Button>
      </div>
    </form> 
    //    <Form onSubmit={onSubmit}>
    //   <Form.Group className="mb-3 mx-auto text-light" controlId="name">
    //     <Form.Label className="d-flex justify-content-center text-warning">Enter your name below for high score entry!</Form.Label>
    //     <Form.Control className="text-center text-warning bg-transparent" type="text" id="name" onChange={(e)=>setDisplayName(e.target.value)}placeholder="Enter Your Name" />
    //     <Form.Text className="d-flex justify-content-center text-muted">
    //       Try to choose something unique for yourself!
    //     </Form.Text>
    //   </Form.Group>
    //   <div className="d-flex">
    //        <Button className="button mx-auto text-muted" variant="outline-info" type="submit">
    //     Submit
    //   </Button>
    //   </div>
   
    // </Form>
    // <Form onSubmit={onSubmit}>
    // <Form.Group className="mb-3" controlId="name">
    //   <Form.Label>Name</Form.Label>
    //   <Form.Control type="text" placeholder="Enter Your Name" />
    //   <Form.Text className="text-muted">
    //     Try to choose something unique for you!
    //   </Form.Text>
    //   <Button  className="my-2 button" variant="outline-info" type="submit">
    //       Submit
    //     </Button>
    // </Form.Group>
    // </Form>

  );
};
export default Form;

    // {/* <form onSubmit={onSubmit}>
    //   <div className="form-group">
    //     <label htmlFor="name">Name</label>
    //     <input onChange={(e)=>setDisplayName(e.target.value)} className="form-control" id="name" placeholder='Enter your name here...' />
    //   </div>
    //   <div className="d-flex justify-content-center">
    //     <Button  className="my-2 button" variant="outline-info" type="submit">
    //       Submit
    //     </Button>
    //   </div>
    // </form> */}
