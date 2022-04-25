import { useEffect, useState } from "react";
import childService from "../services/child.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const DischargedList = () => {

  const [discharged, setDischarged] =  useState([]);

  useEffect(() =>{
    init();
   
  }, [])


  const init = () => {
    childService.getAllDischarged()
    .then(response => {
      console.log('Printing children data',response.data);
      setDischarged(response.data);
    })
    .catch(error => {
      console.log('Something went wrong',error);
    })
  }


  return ( 
      <div>
        <h3>List of Recently Discharged Children</h3>
        <hr/>
        <div>

          
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
            <tr>
            <td>DISCHARGE ID</td>
            <td>DISCHARGED AT</td>
            <td>WEIGHT</td>
         
            <td>OUTCOME</td>
            <td>TREATMENT PROTOCOL</td>

          </tr>
            </thead>
            <tbody>
          {
            discharged.map(d => (
              <tr key={d.dsId}>
                <td>{d.dsId}</td>
                <td>{d.dischargedAt}</td>
                <td>{d.weight}</td>
                <td>{d.outcome}</td>
                <td>{d.treatmentProtocol}</td>

              </tr>
            ))
          }
            </tbody> 
          </table>
        </div>
      </div>
   );
}
       
export default DischargedList;
