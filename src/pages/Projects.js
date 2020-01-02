import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import CustomCard from "../components/CustomCard";
import theme from "../styles";
import Spacer from '../components/Spacer';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flexGrow: 1,
    overflow: 'hidden',
  },
  grid: {
    margin: `${theme.spacing(1)}px auto`,
    maxWidth: '900px',
  },
  paper: {
    padding: theme.spacing(5),
    backgroundColor: '#FAFAFA',
    maxWidth: '900px',
    minWidth: '500px',
    textAlign: 'left',
    fontSize: '18px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  subtitle1: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
  subtitle2: {
    fontSize: '22px',
    color: '',
  },
});

export default function Projects() {
  
  const classes = useStyles();
  
  return (
  <>
    <h1>Projects</h1>
    <Grid
    container
    justify="center"
    className={classes.grid}
    >
      <CustomCard
      title={'PyTron'}
      description={'Attendance app that helps manage flow of students.\n' +
      '            Logs when students check in and out. Notifies parents\n' +
      '            when students have checked out via email or text'}
      button1Text={'GitHub'}
      button1Link={'https://www.github.com/ectom/PyTron'}
      button2Text={'Live Demo'}
      button2Link={'https://ectom.github.io//404'}
      />
      <CustomCard
      title={'Portfolio Website'}
      description={'My personal website to display the various projects and places I\'ve worked. This is webpage built with React from the Create React App template and Material UI. I self-taught myself React and this is my first React project, and through it, I am learning the usefulness and importance of reusable and custom components.'}
      button1Text={'Github'}
      button1Link={'https://www.github.com/ectom/site'}
      button2Text={'Live Demo'}
      button2Link={'https://ectom.github.io/site'}
      skills={['Javascript', 'React', 'Material UI', 'Node', 'Create React App', 'gh-pages']}
      />
    </Grid>
  </>
  )
}
