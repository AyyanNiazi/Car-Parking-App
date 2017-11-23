import * as React from "react";
// import { Link} from "react-router"
import './../App.css';
// import SideNav from './sideNav.js'
// import {Router ,Route ,browserHistory } from 'react-router'


import * as firebase from 'firebase'

class TableContained  extends React.Component{
        constructor(props){
            super(props)

            this.state={
            Parkings : [],
            ParkingObj:{},
            ParkingKeys : [],
            }

            this.handleDelete = this.handleDelete.bind(this)
        }

        componentWillMount(){
              
            
     firebase.auth().onAuthStateChanged((user)=>{
        if(user){
        var uids = firebase.auth().currentUser.uid;


            // firebase.database().ref('Booking').on("child_added",(snap)=>{
            //     var snapObj = snap.val();
            //             console.log(snapObj)
            //     var snapVal = []
            //     var snapKeys = []

            //         for(let key in snapObj){
            //             snapKeys.push(key)
            //             snapVal.push(snapObj[key])
            //         }
            // })

        


            firebase.database().ref("Booking").orderByChild("user").equalTo(uids)
           .on('child_added',(snap)=>{


             
            // console.log(snap.key);
            // console.log(snap.val())

            var snapval = snap.val();
            // var snapVals = [];
            // var snapKeys = [];
                    // for(let key in snapval){
                    //     // snapVals.push((snapval[key]))
                        // snapKeys.push(snap.key)
                        // console.log(snapKeys)
                    // }
                    this.setState({
                        Parkings : [...this.state.Parkings,snapval],
                        ParkingKeys : [...this.state.ParkingKeys,snap.key]
                        // ParkingObj: snapval,
                        
                    },()=>{})

                    
        //    console.log(this.state.Parkings)
        //    console.log(this.state.ParkingKeys)

           })


        }})
    



        }


    handleDelete(ind){
        console.log(ind)
        var keytofind=this.state.ParkingKeys[ind]
        var delfilter = []
        var delfilterkey= []
        console.log(keytofind);
        firebase.database().ref("Booking").child(keytofind).remove((err)=>{console.log(err)})
                // firebase.database().ref("Booking").orderByChild("user").equalTo(firebase.auth().currentUser.uid)
        // .on('value',(snap)=>{
    //    console.log(this.state.ParkingKeys)
    //    console.log(this.state.Parkings[ind])
    //    console.log(ind);
    //    var snapValue = snap.val()
    //    console.log(snapValue[ind]);
    //    console.log(snapValue.key)
    //    this.state.Parkings.splice(ind,1)
        delfilter = this.state.Parkings
        delfilterkey = this.state.ParkingKeys
        
    delfilter.splice(ind, 1)
    delfilterkey.splice(ind,1)
       this.setState({
           Parkings : delfilter,
           ParkingKeys:delfilterkey
       })

        // })
    }
        
   

    render(){
        return(
            <div>
                <h3>My Booking</h3>
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
                            <td><button onClick={()=>{this.handleDelete(ind)}}>Remove</button></td>
                            {/* <td>{ind}</td> */}
                            </tr>
                            
                        ))} 

                     </tbody> 
                </table>
                </div>
            </div>
        )
    }


}
export default TableContained