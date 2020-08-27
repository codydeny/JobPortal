import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from './../Footer/Copyright';
import WorkIcon from '@material-ui/icons/Work';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#8A2BE2",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color : "white",
    backgroundColor: "#8A2BE2",
    color : 'white',
    '&:hover': {
       background: "white",
       border : '1px solid #8A2BE2',
       color : '#8A2BE2'
    },
  },
}));

export default function Candidate() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" style={{marginTop : '-40px'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <WorkIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
       Post A Job
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                
                fullWidth
                id="firstName"
                label="Post Title"
                autoFocus
              />
            </Grid>
           
            <Grid item xs={12}>
             <FormControl fullWidth  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">About Job</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            multiline
          rows={5}
            
            
            labelWidth={100}
            type='text'
          />
        </FormControl>
         </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
               
                fullWidth
                id="email"
                label="Contact Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
             <Grid item xs={12}>
             <FormControl fullWidth  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Qualifications</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            multiline
          rows={3}
            
            
            labelWidth={100}
            type='text'
          />
        </FormControl>
         </Grid>
          <Grid item xs={12}>
             <FormControl fullWidth  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Location</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
           
            
            startAdornment={<InputAdornment position="start"><LocationOnIcon style={{color : 'slategrey'}}/></InputAdornment>}
            labelWidth={70}
            type='text'
          />
        </FormControl>
         </Grid>

              <Grid item xs={12}>
             <FormControl fullWidth  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Offer</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
           
            
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            labelWidth={40}
            type='number'
          />
        </FormControl>
         </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Give Early Applications more Importance"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            disableElevation
            className={classes.submit}
          >
            Post Job
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/#" variant="body2">
                Edit a previous Post?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}