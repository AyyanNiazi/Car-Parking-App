import * as React from "react";
import NavLoginBar from './navbar.js'
import SideNav from './sideNav.js'
import TableContained from './locations.js'
import AllParkingTable from './viewallParking.js'
import Feedback from './feedback.js'

import * as firebase from 'firebase'

class Admin  extends React.Component{
    constructor(){
        super()

        this.state={
            bolleanList :false,
            bolleanFeedBack:false,

        }


    }


    handeltoggle(ev){
            // this.state.bolleanList =!this.state.bolleanList

       if(ev.target.value === "booking"){
           
           this.setState({
               bolleanList :!this.state.bolleanList
           })
            // console.log(this.state.bolleanList)

       }
         if(ev.target.value === "feedback"){
           this.setState({
               bolleanFeedBack :!this.state.bolleanFeedBack
           })

       }
        

    }

    render(){
        return(
            <div>
                <NavLoginBar/>
                <SideNav/>
                <nav className="sidebar">
        
                <div className="side-container">
                    <div className="container side-container ">
                        <div className=".page-header">
                        <h1>Admin Panel</h1>
                        {/*<hr/>*/}
                        </div>
                        <div>
                            <div className="row">
                                <button value="booking" onClick={this.handeltoggle.bind(this)}>List of Booking</button>
                            </div>
                            <div className="row">    
                                <button value="feedback" onClick={this.handeltoggle.bind(this)}>FeedBack</button>
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="col-xs-2">
                                 
                                 {/* {this.state.updateDiv}   */}
                            </div>
                        </div> 
                            <div className="detailDiv" >  
                                     {this.state.bolleanList?
                                            <div className=".container">
                                                <AllParkingTable {...this.state}/>
                                            </div>
                                    : 
                                    ""
                                     }   
                                     {this.state.bolleanFeedBack?
                                    <div className=".container">
                                         <Feedback {...this.state}/> 
                                    </div>
                                    :
                                    "" 
                                     }
                        </div>
                    </div>
                </div>
            </nav>
               

            </div>
        )
    }


}
export default Admin