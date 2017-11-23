import * as React from "react";
import NavLoginBar from './navbar.js'
import SideNav from './sideNav.js'
import TableContained from './locations.js'
import AllParkingTable from './viewallParking.js'
import Feedback from './feedback.js'





// import {Router ,Route ,browserHistory } from 'react-router'

import * as firebase from 'firebase'


class Booking extends React.Component{
    constructor (){
        super();

        this.state={
            location:'',
            currentDate:'',
            bookedDate:'',
            bookTime:'',
            endTime:'',
            name:'',
            selectedslot:'',
            updateDiv:'',

            objKey:[],
            objVal:[],
            obj:{},

            booleanLocation:false,
            booleanDate : false,

            arryThatTrueDate : [],
            arryThatTrueTime : []
        }


        this.settingState = this.settingState.bind(this)
        this.handleChangeLocation=this.handleChangeLocation.bind(this)
        this.addlocation = this.addlocation.bind(this)
        this.checkLocation= this.checkLocation.bind(this)
        this.checkDate=this.checkDate.bind(this)
        this.checkStartTime=this.checkStartTime.bind(this)
    }
    
    // handleClick = function() {
    //       this.setState({
    //         name : "bob"
    //       });
    //     console.log(this.state.name)
    //     }

    handleChangeLocation(ev){
    //    console.log(ev.target.value)

        (ev.target.value==="Zamzama")
            ?
                this.setState({
                    updateDiv:
                    <div className="">
                    <label htmlFor="endtime">Slots:</label>
                    <div className="btn-group allSlots Zamama">
                            <button value={ev.target.value+0} type="button" onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">0</button>
                            <button value={ev.target.value+1} type="button"  onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">1</button>
                            <button value={ev.target.value+2} type="button" onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">2</button>
                            <button  value={ev.target.value+3} type="button" onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">3</button>
                            <button value={ev.target.value+4} type="button" onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">4</button>
                    </div>
                    </div>

                },()=>{})
            : ev.target.value==="Saddar"?
                this.setState({
                    updateDiv:
                    <div className="">
                    <label htmlFor="endtime">Slots:</label>
                <div className="btn-group allSlots Saddar">
                <button value={ev.target.value+0} type="button" onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">0</button>
                <button value={ev.target.value+1} type="button"  onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">1</button>
                <button value={ev.target.value+2} type="button"  onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">2</button>
                <button value={ev.target.value+3} type="button" onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">3</button>
                
                </div>
                </div>
                },()=>{})
            : ev.target.value==="Empress Market"?
                this.setState({
                    updateDiv:
                    <div className="">
                    <label htmlFor="endtime">Slots:</label>
                <div className="btn-group allSlots EmpressMarket">
                <button type="button" value={ev.target.value+0} onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">0</button>
                <button type="button" value={ev.target.value+1} onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">1</button>
                <button type="button" value={ev.target.value+2} onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">2</button>
                <button type="button" value={ev.target.value+3}onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">3</button>
                </div></div>
                },()=>{})
            : ev.target.value==="Clifton"?
                this.setState({
                    updateDiv:<div className="">
                    <label htmlFor="endtime">Slots:</label>
                <div className="btn-group allSlots Clifton">
                <button type="button"value={ev.target.value+0} onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">0</button>
                <button type="button" value={ev.target.value+1} onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">1</button>
                <button type="button" value={ev.target.value+2} onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">2</button>
                <button type="button"value={ev.target.value+3} onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">3</button>
                <button type="button" value={ev.target.value+4} onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">4</button>
                <button type="button" value={ev.target.value+5} onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">5</button>
                <button type="button" value={ev.target.value+6} onClick={(e)=>{this.addlocation(e)}} className="btn btn-primary">6</button>
                </div></div>
                },()=>{})
            :
                this.setState({
                    updateDiv:''
                },()=>{})
            
            
        // this.componentDidMount(ev.target.value)
        // this.renderDiv()

    }

    // componentDidMount(ev){
    //       if(ev=="Zamzama"){
    //         for(let i = 0 ;i<5;i++){
    //             this.state.obj.push(
    //             <button key={this.props.location+i} type="button"  className="btn btn-primary">{i}</button>
    //             )
    //         }
    //         }
    //     console.log(this.state.obj.length)

    // }
    
   

    
        
    handleClick(ev){
            
        var d=new Date();
        // var currentDate=d.toDateString()
        var currentDate = d.toLocaleDateString();
        var currentTime = d.toLocaleTimeString();
        var location=this.refs.location.value;
        var slot =this.state.selectedslot;
        var bookedDate=this.refs.book_date.value;
        var bookTime=this.refs.booktime.value;
        var endTime=this.refs.endtime.value;
        let miliTimeBook = bookTime.split(':')[0]*3600+bookTime.split(':')[1]*60
        let miliEndTime = endTime.split(':')[0]*3600+endTime.split(':')[1]*60
        console.log(currentDate)

        let uids = firebase.auth().currentUser.uid;

        let bookedObj = {
            currentDate : currentDate,
            currentTime : currentTime,
            user:uids,
            location : location,
            slot:slot,
            bookedDate : bookedDate,
            bookTime : bookTime,
            endTime : endTime,
            miliTimeBook:miliTimeBook,
            miliEndTime:miliEndTime

        }


                
            firebase.database().ref("Booking").push(bookedObj).then(()=>{
                alert('posted');
            // var key = firebase.database().ref('Booking').push().key()
            //     console.log("key")
            })
            .catch((err)=>{
                console.log(err)
            })
            document.querySelector("select").value = "Please Select Location"
            var d = document.querySelectorAll("input").forEach((input)=>{
                input.value = ""
            })
            // console.log(d)

               document.querySelectorAll("button[value]").forEach((button)=>{
                button.classList.remove("disable")
            })

            // document.querySelectorAll("button[value=disable]").forEach.call(buttons,(button)=>{
            //     button.classList.remove("disable")
            // })
                
           

        //    firebase.database().ref("Booking").child(firebase.auth().currentUser.uid)
        //    .orderByChild('bookedDate').equalTo('2017-07-26')
        //    .on('child_added',(snap)=>{
        //     console.log(snap.val())
        //    })
                // var obj = []
                // var objkey = {}

            

        //  firebase.database().ref("Booking").child(firebase.auth().currentUser.uid)
        //    .on('child_added',(snap)=>{

             
        //     console.log(snap.val().location)
        //    })

        //    this.settingState(currentDate,location,bookedDate,bookTime,endTime)
        
    }

    //setting state after gettin data

    settingState(currentDate,location,bookedDate,bookTime,endTime){
        // set state by callback  directly
        this.setState({
                    currentDate,
                    location,
                    bookedDate,
                    bookTime,
                    endTime,
                },()=>{
                // console.log(this.state.currentDate,this.state.location,this.state.endTime)

                })
    }
        
        checkLocation(ev){
            let location = ev.target.value;
            let snapobj = {}
            let snapobjKey = []
            let snapobjVal = []
            // var bookedDate=this.refs.book_date.value;
            // console.log(bookedDate)
             console.log(ev.target.value)
             firebase.database().ref("Booking").orderByChild('location')
             .equalTo(location)
             .on('value',(snap)=>{
                 snapobj = snap.val()
                 for(let key in snapobj){
                     snapobjKey.push(key);
                     snapobjVal.push(snapobj[key]);
                 }

                //  for(let i = 0 ; i<objVal;i++){
                //      if(objVal[i].bookedDate=bookedDate
                //  }
                 this.setState({
                     obj :snapobj,
                     objKey : snapobjKey,
                    objVal : snapobjVal
                 },()=>{})
                 
            //    console.log(this.state.objKey)
            //    console.log(snapobjVal[0].bookedDate)
             })
            
            }

            checkDate(ev){
                 let arryThatTrueDate = []
                //validation 
                let datebook = ev.target.value
                // let currentDat = new Date().toISOString();
                let date = new Date();
                let currentDate = date.toISOString().slice(0,10);
                
                // console.log(currentDate,currentTime)
                // (datebook== currentDate)?console.log(true):console.log(false)
                let length = this.state.objVal.length
                for(let i=0; i<length;i++){
                    if(this.state.objVal[i].bookedDate===datebook){
                        arryThatTrueDate.push(this.state.objVal[i])
                        
                        
                    }
                }
                        this.setState({
                            arryThatTrueDate:arryThatTrueDate
                        },()=>{console.log(this.state.arryThatTrueDate)})
                        
                        // return this.arryThatTrueDate
            }


        checkStartTime(ev){
            let arryThatTrueTime = []
            // console.log(ev.target.value)
            let timebook = this.refs.booktime.value;
            // let startT = document.getElementById("bookTime").value
            let timeend = this.refs.endtime.value;
            let length = this.state.arryThatTrueDate.length
            let miliTimeBook = timebook.split(':')[0]*3600+timebook.split(':')[1]*60
            let miliEndTime = timeend.split(':')[0]*3600+timeend.split(':')[1]*60
            
            console.log(miliTimeBook)
            console.log(miliEndTime)
            // let stime=startT.split(':')
            // console.log(stime[0])
            
            for(let i =0;i<length;i++){
                let miligetbooktime = this.state.arryThatTrueDate[i].miliTimeBook
                // console.log(miligetbooktime);
                
                let miligetendtime = this.state.arryThatTrueDate[i].miliEndTime
                // console.log(miligetendtime);
                
                if(
                    (miliTimeBook >= miligetbooktime && miliTimeBook <= miligetendtime)// valid
                    || (miliEndTime<=miligetendtime && miliEndTime >= miligetbooktime)
                    ||  (miligetbooktime>=miliTimeBook&& miligetbooktime<=miliEndTime)
                    ||  (miligetendtime<= miliEndTime && miligetendtime>=miliTimeBook))//valid

                    //  miliTimeBook <= miligetendtime) 
                    // || miliEndTime <= miligetendtime && )
                     
                     
                {
                    arryThatTrueTime.push(this.state.arryThatTrueDate[i])
                    // console.log(arryThatTrueTime)
                    // console.log(Date.parse('01/01/2017'+toString(timebook))-Date.parse('01/01/2017'+timeend))
                    // let sepTime = timebook

                    // console.log(sepTime)
                }
            }
             this.setState({
                            arryThatTrueTime:arryThatTrueTime
                        },()=>{console.log(this.state.arryThatTrueTime)})

                 if(arryThatTrueTime){
                document.querySelectorAll("button[value]").forEach((button)=>{
                button.classList.remove("disable")
                 })
            for(let j = 0;j<arryThatTrueTime.length;j++){
                var val = arryThatTrueTime[j].slot
                console.log(val)
              document.querySelector("button[value="+val+"]").classList.add("disable")
            }

                 }else {
                     document.querySelectorAll("button[value]").forEach((button)=>{
                button.classList.remove("disable")
                 })
                 }
                


            //    doo.classList.add("disable")
                // .classList.add="disable"
                // console.log(dooo+ "disable")
            
                

        }


       addlocation(event){ 
        
         
        // console.log(event.target.value)
        this.setState({
            selectedslot:event.target.value
        },()=>{
            console.log(this.state.selectedslot)
        })
        
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
                        <h1>Book Your Parking</h1>
                        {/*<hr/>*/}
                        </div>
                        
                        <div className="row">
                            <div className="col-xs-3">
                                <label htmlFor="location">Please Select the Location:</label>
                                <select className="form-control" onChange={(ev)=>{this.handleChangeLocation(ev)}} onBlur={(ev)=>{this.checkLocation(ev)}} ref="location" id="location">
                                    <option value="Please Select Location">Please Select Location</option>
                                    <option value="Zamzama">Zamzama</option>
                                    <option value="Saddar">Saddar</option>
                                    <option value="Empress Market">Empress Market</option>
                                    <option value="Clifton">Clifton</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">    
                            <div className="col-xs-2">
                                <div className="">
                                <label htmlFor="date">Date:</label>
                                <input type="date" ref="book_date" onBlur={(ev)=>{this.checkDate(ev)}} className="form-control" id="date"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">      
                            <div className="col-xs-2">
                                <div className="">
                                <label htmlFor="bookTime">Book Time:</label>
                                <input type="time" ref="booktime"  className="form-control" id="bookTime"/>
                                </div>
                            </div>
                        </div>    
                        <div className="row"> 
                            <div className="col-xs-2">
                                <div className="">
                                <label htmlFor="endtime">End Time:</label>
                                <input type="time" ref="endtime" onBlur={(ev)=>{this.checkStartTime(ev)}}  className="form-control" id="endtime"/>
                                </div>
                            </div>
                        </div> 
                        <div className="row"> 
                            <div className="col-xs-2">
                                 
                                 {this.state.updateDiv}  
                            </div>
                        </div> 
                        <div className="row"><br/> 
                        <button type="button" onClick={this.handleClick.bind(this)} className="btn btn-info btn-lg submit">Reserve It</button>
                        {/* <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button> */}
                        </div>
                            <div className="detailDiv" >  

                                    <div className=".container">
                                        <TableContained {...this.state}/>
                                    </div>
                                    <div className="feedbackDiv">
                                        <AllParkingTable {...this.state}/>
                                    </div>
                            </div>
                    </div>
                </div>
            </nav>
        </div>


           
        )
    }

}
export default Booking