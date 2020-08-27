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
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Software Engineer"
        subheader={<div style={{'display' : 'flex', marginTop : '5px'}}><span style={{color : '#8A2BE2'}}><LocationOnIcon/> </span> <span>New Delhi </span></div>}
      />
      <div style={{marginTop : '-75px',marginRight: '50px', float : 'right'}}> 27 August 2020</div>
      <CardContent>
       <div style={{'display' : 'flex', marginTop : '-25px'}}>
      <span> <NextWeekIcon style={{color : '#8A2BE2'}}/></span>
        <span style={{'marginTop' : '5px','marginLeft' : '3px', color : 'green'}}> Available </span>
        </div>
        <div style={{'display' : 'flex', marginTop : '5px'}}>
      <span> <NotInterestedIcon style={{color : 'orange'}}/></span>
    
        <span style={{'marginTop' : '2px','marginLeft' : '3px'}}> Not Interested </span>
       <span style={{marginLeft : '5px'}}><Chip color="primary" label="8" size="small" /> </span>
        </div>
        <div style={{'display' : 'flex', marginTop : '5px'}}>
      <span> <LocalOfferIcon style={{color : 'green'}}/></span>
        <span style={{'marginTop' : '2px','marginLeft' : '3px'}}> <b>₹</b> 50,000 </span>
      
        </div>

         <div style={{'display' : 'flex', marginTop : '5px'}}>
      <span> <PeopleAltIcon style={{color : '#8A2BE2'}}/></span>
        <span style={{'marginTop' : '2px','marginLeft' : '3px'}}> Candidates </span>
       <span style={{marginLeft : '5px'}}><Chip color="primary" label="25" size="small" /> </span>
        </div>

      </CardContent>
      <CardActions disableSpacing>
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
      </CardActions>
    </Card>
  );
}