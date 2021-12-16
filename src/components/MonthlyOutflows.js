function MonthlyOutflows(props) {
    return (
        <div>
            <h2><strong>Total Monthly Outflows</strong></h2>
            <h3>{`$${props.outflows.toFixed(2)}`}</h3>
            
            <h5><strong>Your balance will run out on:</strong></h5>
            <div classname= "date"><h6>{props.endDate}</h6></div>
          
            </div>
        )
    }

export default MonthlyOutflows;