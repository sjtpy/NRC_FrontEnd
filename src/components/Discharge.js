import childService from "../services/child.service";
import { useNavigate,useParams } from "react-router";
import { useEffect, useState } from "react";


const Discharge = () => {
    const {samId} = useParams();
    const [dischargeAt, setDischargeAt]=useState('');
    const [outcome, setOutcome]=useState('');
    const [treatmentProtocol, setTreatmentProtocol]=useState('');
    const [weight, setWeight]=useState('');
    const [admission_admission_id, setAdmissionId]=useState('');
    const [aww_aww_id, setAww]=useState('');


    const navigate = useNavigate();

    const dischargeChild = (e) =>{
       e.preventDefault();

       const dischargeSummary = {dischargeAt,outcome,treatmentProtocol,weight};

       childService.discharge(dischargeSummary)
            .then(response => {
                console.log('Child Discharged',response.data);
                navigate('/');
            })
            .catch(error => {
                console.log('This is',dischargeSummary);
                console.log('Something went wrong',error);
            })
    }


    return ( 
     <div className="container">
            <h3>Discharge child</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="dischargeAt" value={dischargeAt} onChange={(e)=>setDischargeAt(e.target.value)} placeholder="Enter Discharge Time"/>
                </div>
            

                <div className="form-group">
                    <input type="text" className="form-control col-4"   id="treatmentProtocol" value={treatmentProtocol} onChange={(e)=>setTreatmentProtocol(e.target.value)}  placeholder="Enter Treatment protocol"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4"   id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}  placeholder="Enter Weight"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4"   id="outcome" value={outcome} onChange={(e)=>setOutcome(e.target.value)}  placeholder="Enter Outcome"/>
                </div>
                 
              
              <div>
                    <button className="btn btn-primary" onClick={(e) => dischargeChild(e)}>Discharge</button>
                    {/*onclick -> anonymous function and savechild takes event e*/}
                </div>
            </form>
                
        </div>
    );
}
 
export default Discharge;