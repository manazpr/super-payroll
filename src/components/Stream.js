import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import { calculateStream } from "../config";
import "./StreamList.css";

class Stream extends Component {
    constructor(props) {
        super(props);

        this.toggleEditModal = this.toggleEditModal.bind(this);
        this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    }  


    toggleEditModal() {
        this.props.handleEditing(this.props.address)
    }

    toggleDeleteModal() {
        this.props.handleDeleting(this.props.address)
    }


    render() {
     
        const streamObject = {
            address: this.props.address,
            amount: `$${calculateStream(this.props.flowRate)}/month`, 
        }

            let result;
            result = (
      
            <tr>
                <td>{streamObject.address}</td>
                <td>{streamObject.amount}</td>
                <td><Button classname= "editbutton" variant="primary" onClick={this.toggleEditModal}>Edit</Button></td>
            </tr>
        )

        return result;
        
    }
}

export default Stream;