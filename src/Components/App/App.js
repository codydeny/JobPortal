import React from 'react';
import {Switch, Route,  withRouter, Redirect} from "react-router-dom";
import SignIn from './Login/Login';
import Home from './Home/Home';
import Nav from './Navbar/Nav';
import Client from './Register/Client';
import HandleRegister from './Register/HandleRegister';
import Candidate from './Register/Candidate';
import CandidateDash from './Candidate/Entry';
import AcceptedJobs from './Candidate/AcceptedJobs';
import RecievedJobs from './Candidate/RecievedJobs';
import RejectedJobs from './Candidate/RejectedJobs';
import OpenJobs from './Employer/Entry';
import PostJobs from './Employer/PostJob';


function App() {
  return (
    <div className="App">
     <Switch>
       {/*<Route exact path="/" component={Home} />*/}
             <Route exact path="/" component={CandidateDash} />
      <Route exact path="/Login" component={SignIn} />
       <Route exact path="/register" component={HandleRegister} />
       <Route exact path="/register/client" component={Client} />
       <Route exact path="/register/Candidate" component={Candidate} />

       <Route exact path="/AcceptedJobs" component={CandidateDash} />
       <Route exact path="/RecievedJobs" component={CandidateDash} />
       <Route exact path="/RejectedJobs" component={CandidateDash} />
       

       <Route exact path="/employer" component={OpenJobs} />
       <Route exact path="/employer/PostJobs" component={PostJobs} />
       
      
     
     

          {/* <Route path="*" component={PageNotFound} status={404}/>*/}
        
       
        </Switch>

    </div>
  );
}

export default withRouter(App);
