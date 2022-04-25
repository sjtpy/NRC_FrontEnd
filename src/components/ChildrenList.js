import { useEffect, useState } from "react";
import childService from "../services/child.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const ChildrenList = () => {

  const [children, setChildren] =  useState([]);

  useEffect(() =>{
    init();
   
  }, [])


  const init = () => {
    childService.getAll()
    .then(response => {
      console.log('Printing children data',response.data);
      setChildren(response.data);
    })
    .catch(error => {
      console.log('Something went wrong',error);
    })
  }

  const handleDelete = id => {
    childService.remove(id)
      .then(response =>{
        console.log('Child deleted succesfully', response.data);
        init();
      }).catch(error => {
        console.log('Something went werong', error);
      })
  }

  const handleDischarge = id => {
      childService.discharge()
      .then(response => {
        console.log('Child Discharged Successfully', response.data);
      })
      .catch(error=> {
        console.log('Something went wrong',error);
      })

  }
  return ( 
      <div>
        <h3>List of Admitted Children</h3>
        <hr/>
        <div>
          <Link to="/add" className="btn btn-primary mb-2">Add Child</Link>
          <Link to="/children/discharged" className="btn btn-primary mb-2">View discharged Patients</Link>
          
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
            <tr>
            <td>SAM ID</td>
            <td>UHID</td>
            <td>RCH ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>D.O.B</td>
            <td>Gender</td>
            <td>Address</td>
            <td>Contact</td>
            <td>Relationship Details</td>
            <td>Caste</td>
            <td>Religion</td>
            <td>BPL</td>
            <td>Height</td>
            <td>Weight</td>
            <td>MUAC</td>
            <td>Growth Status</td>
            <td>Other symptoms</td>
            <td>Actions</td>

          </tr>
            </thead>
            <tbody>
          {
            children.map(child => (
              <tr key={child.samId}>
                <td>{child.samId}</td>
                <td>{child.uhid}</td>
                <td>{child.rchId}</td>
                <td>{child.name}</td>
                <td>{child.age}</td>
                <td>{child.dob}</td>
                <td>{child.gender}</td>
                <td>{child.address}</td>
                <td>{child.contactNumber}</td>
                <td>{child.relationshipDetails}</td>
                <td>{child.caste}</td>
                <td>{child.religion}</td>
                <td>{child.bpl}</td>
                <td>{child.height}</td>
                <td>{child.weight}</td>
                <td>{child.muac}</td>
                <td>{child.growthStatus}</td>
                <td>{child.otherSymptoms}</td>
                <td>
                  <Link className="btn btn-info" to={`/children/edit/${child.samId}`}>Update</ Link>
                  
                  <Link className="btn btn-info " onClick={(e)=>(handleDischarge(child.samId))} to={`/children/discharge/${child.samId}`}>Discharge</Link>
                </td>
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
