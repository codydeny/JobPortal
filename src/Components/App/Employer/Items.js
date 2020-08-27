import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentLateRoundedIcon from '@material-ui/icons/AssignmentLateRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import PageviewRoundedIcon from '@material-ui/icons/PageviewRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import ComputerRoundedIcon from '@material-ui/icons/ComputerRounded';
import FeedbackRoundedIcon from '@material-ui/icons/FeedbackRounded';

export const mainListItems = (
  <div>
   <ListSubheader inset>Navigation</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={{'color' : '#8A2BE2'}}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{'color' : '#8A2BE2'}}/>
      </ListItemIcon>
      <ListItemText primary="Resume" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon style={{'color' : '#8A2BE2'}}/>
      </ListItemIcon>
      <ListItemText primary="Interviews" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentLateRoundedIcon style={{'color' : '#8A2BE2'}}/>
      </ListItemIcon>
      <ListItemText primary="Offers" />
    </ListItem>
   
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Jobs</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <WorkRoundedIcon style={{'color' : '#8A2BE2'}}/>
      </ListItemIcon >
      <ListItemText primary="Applied Jobs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PageviewRoundedIcon style={{'color' : '#8A2BE2'}}/>
      </ListItemIcon>
      <ListItemText primary="Map Jobs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TimelineRoundedIcon style={{'color' : '#8A2BE2'}}/>
      </ListItemIcon>
      <ListItemText primary="Live Jobs" />
    </ListItem>
  </div>
);

export const OtherListItems = (
  <div>
    <ListSubheader inset>Support</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <HelpRoundedIcon style={{'color' : '#8A2BE2'}}/>
      </ListItemIcon>
      <ListItemText primary="Help Desk" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ComputerRoundedIcon style={{'color' : '#8A2BE2'}}/>
      </ListItemIcon>
      <ListItemText primary="Tutorials" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FeedbackRoundedIcon style={{'color' : '#8A2BE2'}}/>
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItem>
  </div>
);