import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap'

import SigninComponent from './components/signinForm.js'
import SignupComponent from './components/signupForm.js'
import Booking from './components/booking.js'
import Admin from './components/admin.js'
import Feedback from './components/feedback.js'
import AlertBox from './components/alertbox.js'




import {Router ,Route ,browserHistory } from 'react-router'
// import registerServiceWorker from './registerServiceWorker';




// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(  <Router history={browserHistory}>
                     
                    <Route path= "/" component={App}/>
                    {/*<Route path="/JobSeeker" component={JobSeeker}/>*/}
                    {/*<Route path="/SignUpForm" component={SignUpForm}/>*/}
                    {/*<Route path="/SignInForm" component={SignInForm}/>*/}
                    
                    {/*<Route path="/company" component={Company}/>*/}
                    {/*<Route path="/Resume" component={Resume}/>*/}

                    
                    <Route path="/" component={SigninComponent}/>
                    <Route path="/SignupComponent" component={SignupComponent}/>
                    <Route path="/Booking" component={Booking}/>
                    <Route path="/Admin" component={Admin}/> 
                    <Route path="/Feedback" component={Feedback}/> 
                    <Route path="/AlertBox" component={AlertBox}/>
                    {/* <Route path="/ViewAllJob" component={ViewAllJob}/> */}
                    {/*<Route path="/ViewAllCompany" component={ViewAllCompany}/>*/}
                    {/*<Route path="/ViewAllJobSeeker" component={ViewAllJobSeeker}/>*/}
                </Router>


      
    , document.getElementById('root'))
