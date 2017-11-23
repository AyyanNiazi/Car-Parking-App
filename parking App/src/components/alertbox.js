import * as React from "react";
// import { Link} from "react-router"
import './../App.css';
// import SideNav from './sideNav.js'
// import {Router ,Route ,browserHistory } from 'react-router'


// import * as firebase from 'firebase'

class AlertBox extends React.Component{
    // constructor(){
    //     super()
    // }


    render(){
        return(
            <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default AlertBox