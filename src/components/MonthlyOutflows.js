import "./StreamList.css";
import Card from "react-bootstrap/esm/Card";

function MonthlyOutflows(props) {
    return (
        <div>
            <h3><strong>Total Monthly Outflows</strong></h3>
            <Card className="outflowNumber"> 
            <h3>{`$${props.outflows.toFixed(2)}`}</h3></Card>
            
           <br></br> <h5><strong>Your balance will run out on:</strong></h5>
               <div classname= "date"><h6>{props.endDate}</h6></div>
          
            </div>
        )
    }

export default MonthlyOutflows;