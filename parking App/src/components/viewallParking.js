import * as React from "react";
// import { Link} from "react-router"
import './../App.css';
// import SideNav from './sideNav.js'
// import {Router ,Route ,browserHistory } from 'react-router'


import * as firebase from 'firebase'

class AllParkingTable  extends React.Component{
        constructor(props){
            super(props)

            this.state={
                Parkings : [],
            ParkingObj:{},
            ParkingKeys : [],
            }
        }

        componentWillMount(){
              
            
     firebase.auth().onAuthStateChanged((user)=>{
        if(user){
        var uids = firebase.auth().currentUser.uid;
        


            firebase.database().ref("Booking")
           .on('child_added',(snap)=>{


             
            // console.log(snap.val())

            var snapval = snap.val();
            // var snapVals = [];
            // var snapKeys = [];
                    // for(let key in snapval){
                    //     snapVals.push((snapval[key]))
                    //     snapKeys.push(key)
                    // }
                    this.setState({
                        Parkings : [...this.state.Parkings,snapval],
                        // ParkingKeys : snapKeys,
                        // ParkingObj: snapval,
                        
                    })
                    // console.log(this.state.Parkings)

           })



        }})
    



        }
        
   

    render(){
        return(
            <div>
                <h3>All Booking <span> Total no. Booking = {this.state.Parkings.length}</span> </h3>
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
                </div>
            </div>
        )
    }


}
export default AllParkingTable