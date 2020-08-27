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

export default function Client() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up as Client
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
               <Grid item xs={12}>
             <FormControl fullWidth  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Company Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
           
            
            
            labelWidth={110}
            type='text'
          />
        </FormControl>
         </Grid>
          <Grid item xs={12}>
             <FormControl fullWidth  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">About Company</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            multiline
            rows= {4}
            
            
            labelWidth={110}
            type='text'
          />
        </FormControl>
         </Grid>

          <Grid item xs={12}>
             <FormControl fullWidth  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Company Headquater</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
           
            startAdornment={<InputAdornment position="start"><LocationOnIcon style={{color : 'slategrey'}}/></InputAdornment>}
            multiline
            labelWidth={155}
            type='text'
          />
        </FormControl>
         </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive Mails from JobPortal"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
            disableElevation
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account? Sign in
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