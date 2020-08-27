import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './candidate.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding : '5px',
    margin : '10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined" fullWidth>
      <CardContent>
      <div className='flexJobDiv'>
      <div className='date'> Posted 28th July 2020</div>
      <div className='flexJobDiv' style={{'marginTop' : '25px'}}>
       <div className='Logo'>
       <img src="https://logo.clearbit.com/google.com" width={40}/>
       </div>
       <div className='JobProfile'>
       <div className='JobTitle'>
       <b>Software Engineer</b>
       </div>
       <div className='CompanyInfo'>
       <div className='CompanyName'>
       Google
       </div>
       <div className='CompanyLoc'>
       Noida, India
       </div>
       </div>
       </div>
       </div>
       <div className='StatusFeedBack'>
        <div className='Status'>
          <div className='statusLabel'>
          <b> Status</b>
          </div>
           <div className='statusText'>
         You Rejected on 29 July 2020
            
           </div>
         </div>

         <div className='FeedBack'>
          <div className='FeedBackLabel'>
            <b> Feedback</b>
          </div>
           <div className='FeedbackText'>
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            </p>
           </div>
         </div>
       </div>
       </div>
      </CardContent>
     
    </Card>
  );
}
