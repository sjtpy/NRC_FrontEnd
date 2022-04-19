import childService from "../services/child.service";

import { useNavigate,useParams } from "react-router";
const Discharge = () => {
    const {samId} = useParams();
    
    return ( 
        <div>
            <h3>
                The child {samId} will be discharged
            </h3>
        </div>
     );
}
 
export default Discharge;