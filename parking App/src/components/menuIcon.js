import * as React from "react";
import { Link} from "react-router"
import './../App.css';


class  MenuIcon extends React.Component{

        // MenuIcon Work
            menuAnim() {
                //  ev.classList.toggle("change");
                   let d= document.querySelector(".container")
                   d.classList.toggle("change")
                   this.props.openNav()
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
                d[i].style.backgroundColor = "#BFBFBF";
                // let d=document.getElementById("hov")
                // d.classList.remove('blackColor')
                }
            }
            

    render(){
        return(
                    <div className="container" onMouseOver={this.changeOnHover.bind(this)} onMouseOut={this.changeOnHoverOut.bind(this)} onClick={this.menuAnim.bind(this)}>
                        <div className="bar1 hov "></div>
                        <div className="bar2 hov"></div>
                        <div className="bar3 hov"></div>
                    </div>
        )
    }
}
export default MenuIcon