import { useEffect, useState } from "react";
import childService from "../services/child.service";
import { useNavigate,useParams } from "react-router";
import {Button,Card,Row,Col,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css"
import DatePicker from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css';

const CreateFollowUp = () => {
 
    const [height, setHeight]=useState('');
    const [weight, setWeight]=useState('');
    const [muac, setMuac] = useState();
    const [growthStatus, setGrowthStatus]=useState('');
    const [symptoms, setSymptoms]=useState('');
    const [createdAt, setCreatedAt]=useState('');
    const [followupDate, setFollowupDate]=useState('');
    const [isAttempted, setIsAttempted]=useState('');
    const [attemptedDate, setAttemptedDate]=useState('');
    
    //react hook used to navigate back to child list 
    //page once form is submitted
    const navigate = useNavigate();
    
    const saveFollowup = (e) => {
        e.preventDefault();
        //this is because we dont want to reload the page after submitting form 
        
        //samId is getting passed from useParams() hook
        const followup = {height,weight,muac,growthStatus,symptoms,createdAt,followupDate,isAttempted,attemptedDate};
    
        console.log('enter',followup);
        childService.createfollowup(followup)
        .then(response => {
        
        console.log('Child data added successfully', response.data);
        navigate('/children');
        })
        .catch(error =>{
        console.log('Something rr went wrong',  error);
        });
    }
    

    return (  
        <div className="childrenlist" >
            <h3>Create Follow Up</h3>
            <hr/>
            <Container>
            <form>
            <Row>
            
                 <Col>
                  <label>Height</label> 
                    <input type="text" className="form-control col-4" id="height" value={height} onChange={(e)=>setHeight(e.target.value)} placeholder="Enter Height(cm)"/>
                
                </Col>
                 <Col>
             <label> Weight</label> 
                    <input type="text" className="form-control col-4" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder="Enter Weight(Kg)"/>
             
                </Col>
                 <Col>
                <label>Enter MUAC</label> 
                    <input type="text" className="form-control col-4" id="muac" value={muac} onChange={(e)=>setMuac(e.target.value)} placeholder="Enter Muac"/>
               
                </Col>
                 <Col>
                <label>Growth Status</label> 
                    <input type="text" className="form-control col-4" id="growthStatus" value={growthStatus} onChange={(e)=>setGrowthStatus(e.target.value)} placeholder="Enter Growth Status"/>
               
                </Col>
                <Col>
                    <label>Symptoms (if any)</label> 
                    <input type="text" className="form-control col-4" id="symptoms" value={symptoms} onChange={(e)=>setSymptoms(e.target.value)} placeholder="Enter Symptoms"/>
             
                </Col>
            </Row>
            <Row>
                <Col>
                <label>Follow Up created at</label> 
                    <DatePicker placeholderText="DD/MM/YY" selected={createdAt} onChange={date => setCreatedAt(date)} id="createdAt" value={createdAt}/>
                </Col>
                <Col>
                <label>Follow Up Date</label> 
                    <DatePicker placeholderText="DD/MM/YY" selected={followupDate} onChange={date => setFollowupDate(date)} id="followupDate" value={followupDate}/>
                </Col>
                <Col>
                    <label>Attempted</label> 
                    <input type="text" className="form-control col-4" id="isAttempted" value={isAttempted} onChange={(e)=>setIsAttempted(e.target.value)} placeholder="y/n"/>
                </Col>
                  <Col>
                    <label>Attempted On</label> 
                    <DatePicker placeholderText="DD/MM/YY" selected={attemptedDate} onChange={date => setAttemptedDate(date)} id="attemptedDate" value={attemptedDate}/>
                </Col>
                

            </Row>

   
                    <Link to="/children">
                    <button className="btn btn-primary" onClick={(e) => saveFollowup(e)}>Save</button>
                    </Link>
                    {/*onclick -> anonymous function and savechild takes event e*/}
              

            </form>
            </Container>
           

        </div>
    );
}
 
export default CreateFollowUp;