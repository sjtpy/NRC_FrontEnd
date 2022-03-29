import { useState } from "react";
import childService from "../services/child.service";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const AddChild = () => {
    const [uhid, setUhid]=useState('');
    const [rchId, setRchid]=useState('');
    const [name, setName]=useState('');
    const [age, setAge]=useState('');
    const [dob, setDob]=useState('');
    const [gender, setGender]=useState('');
    const [address, setAddress]=useState('');
    const [contactNumber, setContact]=useState('');
    const [relationshipDetails, setRelationshipDetails]=useState('');
    const [caste, setCaste]=useState('');
    const [religion, setReligion]=useState('');
    const [bpl, setBpl]=useState('');
    const [height, setHeight]=useState('');
    const [weight, setWeight]=useState('');
    const [muac, setMuac] = useState();
    const [growthStatus, setGrowthStatus]=useState('');
    const [otherSymptoms, setOtherSymptoms]=useState('');


    //react hook used to navigate back to child list 
    //page once form is submitted
    const navigate = useNavigate();
    

    
    const saveChild = (e) => {
        e.preventDefault();
        //this is because we dont want to reload the page after submitting form 
        
        
        const child = {uhid,rchId,name,age,dob,gender,address,contactNumber,relationshipDetails,caste,religion,bpl,height,weight,muac,growthStatus,otherSymptoms};
        console.log('child is',JSON.stringify(child, null, 4));
        childService.create(child)
            .then(response => {
                console.log('Child data added successfully', response.data);
                navigate('/');
                //this hook is to navigate back to list after form submission
            })
            .catch(error =>{
                console.log('Something rr went wrong',  error);
            });
    }
    

    return (  
        <div className="container">
            <h3>Add new child</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="uhid" value={uhid} onChange={(e)=>setUhid(e.target.value)} placeholder="Enter UhId"/>
                </div>
               
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="rchId" value={rchId} onChange={(e)=>setRchid(e.target.value)} placeholder="Enter RchId"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
                </div>
               
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="age" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="dob" value={dob} onChange={(e)=>setDob(e.target.value)} placeholder="Enter Date of Birth"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="gender" value={gender} onChange={(e)=>setGender(e.target.value)} placeholder="Enter Gender"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="address" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Enter Address"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="contact" value={contactNumber} onChange={(e)=>setContact(e.target.value)} placeholder="Enter Contact"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="relationshipdetails" value={relationshipDetails} onChange={(e)=>setRelationshipDetails(e.target.value)} placeholder="Enter Relationship Details"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="caste" value={caste} onChange={(e)=>setCaste(e.target.value)} placeholder="Enter Caste"/>
                </div>


                <div className="form-group">
                    <input type="text" className="form-control col-4" id="religion" value={religion} onChange={(e)=>setReligion(e.target.value)} placeholder="Enter Religion"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="bpl" value={bpl} onChange={(e)=>setBpl(e.target.value)} placeholder="BPL?"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="height" value={height} onChange={(e)=>setHeight(e.target.value)} placeholder="Enter Height"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder="Enter Weight"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="muac" value={muac} onChange={(e)=>setMuac(e.target.value)} placeholder="Enter Muac"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="growthstatus" value={growthStatus} onChange={(e)=>setGrowthStatus(e.target.value)} placeholder="Enter Growth Status"/>
                </div>

                <div className="form-group">
                    <input type="text" className="form-control col-4" id="othersymptoms" value={otherSymptoms} onChange={(e)=>setOtherSymptoms(e.target.value)} placeholder="Enter Other Symptoms"/>
                </div>
                           
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveChild(e)}>Save</button>
                    {/*onclick -> anonymous function and savechild takes event e*/}
                </div>

            </form>
            <hr/>
            <Link to="/">Back to list</Link>
        </div>
    );
}
 
export default AddChild;