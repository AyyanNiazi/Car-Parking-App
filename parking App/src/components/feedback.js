import * as React from "react";
// import { Link} from "react-router"
import './../App.css';
// import SideNav from './sideNav.js'
// import {Router ,Route ,browserHistory } from 'react-router'


import * as firebase from 'firebase'

class Feedback extends React.Component{
    constructor(){
        super()

        this.state={
            userType :''
        }
    }

    


   
     componentWillMount(){
              
            var uids =""
     firebase.auth().onAuthStateChanged((user)=>{
        if(user){
        uids = firebase.auth().currentUser.uid;
        
            // console.log(uids)
    
        if(uids ==="XBFNdUWRYKdpKzOKmXwCerToX4S2"){
            this.setState({
                userType : "admin"
            },()=>{
                // console.log(this.state.userType)
            })
        } 
        if(uids ==="quTpHMl3y6Ptw1stRl5u29QD4fr2") {
            this.setState({
                userType:'user'
            },()=>{
                // console.log(this.state.userType)
            })
                }
    
        }
        // console.log(this.state.userType)
    })

        

     }






       updatingstate(){

       }






    render(){
        return(
            <div>
                {this.state.userType==="user"?
                <div>
                    <input type="text" placeholder="Type subject....."/><br/>
                    <textarea name="" id="" cols="50" placeholder="Type feedback......" rows="10"></textarea>
                </div>
                :
                
                <div>
                        {/* <h3>All Booking <span> Total no. Booking = {this.state.Parkings.length}</span> </h3>
                        <div className="tableDiv">
                        <table className="table table-sm overflow">
                            <tbody> 
                                <tr>
                                    <th>Location</th>
                                    <th>Slots</th>
                                    <th>Book Date</th>
                                    <th>BooK Time</th>
                                    <th>End Time</th>
                                    <th></th>
                                    
                                </tr>
                                {this.state.Parkings.map((parking,ind)=>(
                                    <tr key={ind}>
                                    <td>{parking.location}</td>
                                    <td>{parking.slot}</td>
                                    <td>{parking.bookedDate}</td>
                                    <td>{parking.bookTime}</td>
                                    <td>{parking.endTime}</td>
                                    <th><button>Remove</button></th>
                                    
                                    </tr>
                                    
                                ))} 

                            </tbody> 
                        </table>
                        </div>  */}
                </div>
                }

            </div>
        )
    }
}

export default Feedback