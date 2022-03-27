import { useEffect, useState } from "react";
import childService from "../services/child.service";
import 'bootstrap/dist/css/bootstrap.min.css';
const ChildrenList = () => {

  const [children, setChildren] =  useState([]);

  useEffect(() =>{
    childService.getAll()
    .then(response => {
      console.log('Printing children data',response.data);
      setChildren(response.data);
    })
    .catch(error => {
      console.log('Something went wrong',error);
    })
   
  }, [])

  return ( 
      <div className="container">
        <h3>List of Admitted Children</h3>
        <hr/>
        <div>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
            <td>SAM ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Gender</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Height</td>
            <td>Weight</td>
          </tr>
          </thead>
          <tbody>
          {
            children.map(child => (
              <tr key={child.samId}>
                <td>{child.samId}</td>
                <td>{child.name}</td>
                <td>{child.age}</td>
                <td>{child.gender}</td>
                <td>{child.address}</td>
                <td>{child.contactNumber}</td>
                <td>{child.height}</td>
                <td>{child.weight}</td>
              </tr>
            ))
          }
            </tbody> 
        </table>
        </div>
      </div>
   );
}
       
export default ChildrenList;