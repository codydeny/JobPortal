import * as React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a  href="https://about.me/puneetbhatt">
       Puneet Bhatt
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}