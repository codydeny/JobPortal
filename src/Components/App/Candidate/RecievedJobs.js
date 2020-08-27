import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Badge from '@material-ui/core/Badge';
import Chip from '@material-ui/core/Chip';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import WorkIcon from '@material-ui/icons/Work';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    width: 380,
    margin : '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
       
        action={
         <div style={{'color' : 'green', paddingRight  :'10px', paddingTop : '10px'}}>
         <Typography variant="h5" component="h2">
 <b> ₹ 50k-60k</b>
</Typography>
         </div>
        }
        title="Software Engineer"
        subheader={<div style={{'display' : 'flex', marginTop : '5px'}}>

        <span>InfoTech, Information Technology </span>
        </div>}
      />

      <CardContent>
      <div style={{'display' : 'flex', marginTop : '-25px', marginBottom : '5px'}}>

        <span style={{color : '#8A2BE2'}}><LocationOnIcon/> </span> <span style={{marginTop : '1px'}}>New Delhi </span>
        </div>

         <Divider/>
       <div className='flexBox'>

        <div className='flexItem'>
       
       <div className='iconDiv' style={{'float' : 'left'}}>
        <div className='icon'>
        <ContactPhoneIcon/>
        </div>
        <div className='iconLabel'>
        +91 123456
        </div>
        </div>
         <div className='iconDiv' style={{'float' : 'right'}}>
        <div className='icon'>
        <WorkIcon/>
        </div>
        <div className='iconLabel'>
        7-8 yrs
        </div>
        </div>
       
        </div>
        
        <div className='flexItem'>
       
       <div className='iconDiv'>
        <div className='icon'>
        <CalendarTodayIcon/>
        </div>
        <div className='iconLabel'>
        Full Time
        </div>
        </div>
         <div className='iconDiv'>
        <div className='icon'>
        <QueryBuilderIcon/>
        </div>
        <div className='iconLabel'>
        Shift
        </div>
        </div>
       
        </div>
       </div>
      
      </CardContent>
       <Divider/>
      <CardActions style={{display : 'flex', flexDirection : 'column', flexWrap : 'nowrap'}}>

      <div style={{'display' : 'flex', flexDirection : 'row'}}>
      <div style={{'float' : 'left', marginRight : '20px'}}>
       <Button variant="contained" color="primary" disableElevation >
      Accept
    </Button>
    </div>
    <div style={{'float' : 'right', marginLeft : '20px'}}>
     <Button variant="contained" color="secondary" disableElevation >
      reject
    </Button>
    </div>
    </div>
  <Divider/>
    <div>
  
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}