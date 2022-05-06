import { useEffect, useState } from "react";
import childService from "../services/child.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



const ViewFollowups = () => {

  const [followups, setFollowups] =  useState([]);

  useEffect(() =>{
    init();
   
  }, [])


  const init = () => {
    childService.getAllDischarged()
    .then(response => {
      console.log('Printing children data',response.data);
      setFollowups(response.data);
    })
    .catch(error => {
      console.log('Something went wrong',error);
    })
  }

     const notify = (e) =>{
       e.preventDefault();

       
    }


  return ( 
      <div>
        <h3>List of Follow Ups</h3>
        <hr/>
        <div>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
            <tr>
            <td>Follow Up ID</td>
            <td>Follow up date</td>
            <td>Status</td>
            

          </tr>
            </thead>
            <tbody>
          {
            followups.map(d => (
              <tr key={d.followUpId}>
                <td>{d.followUpId}</td>
                <td>{d.followupDate}</td>
                <td>{d.isAttempted}</td>
  <td>
                  <Link className="btn btn-info" onClick={(e) => notify(e)}>Notifiy AWW</ Link>  
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
       
export default ViewFollowups;
