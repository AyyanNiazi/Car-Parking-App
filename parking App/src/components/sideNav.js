import * as React from "react";
// import { Link} from "react-router"
import Feedback from "./feedback.js"
import './../App.css';



class  SideNav extends React.Component{

       constructor(){
        super();
          this.state = {
              sidebar : 'close'
          }

          this.closeNav=this.closeNav.bind(this)
          this.openNav=this.openNav.bind(this)
          
       }
        

        /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
        openNav() {
            document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("hiddenDiv").style.display="block"
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    // document.body.style.zIndex=3000;
        }

        /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "lightgoldenrodyellow";
    document.getElementById("hiddenDiv").style.display="none"
    
        }
        closeFeedBack(){
            document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "lightgoldenrodyellow";
    document.getElementById("hiddenDiv").style.display="none"
        }
 
 
 
 // MenuIcon Work
            menuAnim() {
                //  ev.classList.toggle("change");
                   let d= document.querySelector(".containerAnimatedMenuIcon")
                   d.classList.toggle("change")
                   if (this.state.sidebar === "close"){
                       console.log("open")
                        this.setState({
                            sidebar:"open"
                        })
                        this.openNav()
                    }else if(this.state.sidebar === "open")
                        {
                            console.log("close")
                        this.setState({
                            sidebar:"close"
                        })
                        this.closeNav()
                    }
                


            }
            changeOnHover(){
                var d=document.querySelectorAll(".hov")
                for (let i = 0; i<d.length;i++){
                d[i].style.backgroundColor= "white";

                }
                // let d=document.getElementById("hov")

                
            }
            changeOnHoverOut(){
                var d=document.querySelectorAll(".hov");
                // console.log(d.length);

                for (let i = 0; i<d.length;i++){
                d[i].style.backgroundColor = "white";
                // let d=document.getElementById("hov")
                // d.classList.remove('blackColor')
                }
            }



    render(){
        return(
                <div>

                    <div className="mainContainer">
                     <div className="containerAnimatedMenuIcon" onMouseOver={this.changeOnHover.bind(this)} onMouseOut={this.changeOnHoverOut.bind(this)} onClick={this.menuAnim.bind(this)}>
                        <div className="bar1 hov "></div>
                        <div className="bar2 hov"></div>
                        <div className="bar3 hov"></div>
                    </div>
                    </div>


                    
                    <div id="mySidenav" className="sidenav">
                        <br/><br/>
                    {/*<a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>*/}
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Clients</a>
                    <a href="">Contact</a>
                    </div>

                    {/*Use any element to open the sidenav*/}
                    {/*<span onClick={this.openNav}>open</span>*/}

                   {/*Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page*/}
                    <div id="main">
                    
                    </div>
                    {/* <div className="App2">
                        
                    <div className="feedboxDiv">
                        <button type="button" className="close" onClick={closeFeedBack} aria-label="Close">
                         <span aria-hidden="true">&times;</span> 
                        </button>
                        <Feedback/>
                    </div>
                    </div> */}
                    {/*hidden div for lock*/}
                    <div id ="hiddenDiv" className="App">
                        sdjafhsjdfhsdjhfjka
                    </div>
                     
                </div>
        )
    }

}
export default SideNav;