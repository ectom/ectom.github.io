import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import CustomCard from '../components/CustomCard';
import Project from '../components/Project';
import theme from '../styles';
import data from '../data/projects.json';

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
	panel: {
		flexGrow: 1,
		backgroundColor: '#adb5bd',
		display: 'flex',
		height: '224',
	},
	tabs: {
		borderRight: '1px solid #fca311',
	},
});

const Projects = () => {
	const classes = useStyles();

	return (
		<>
			<Typography id="Projects" style={{ color: '#f8f8ff' }} variant="h3">Projects</Typography>
			<Grid
				container
				justify="center"
				className={classes.grid}
			>
				<Project />
				{data.projects.map((project) => {
					return (
						<CustomCard
							key={project.title}
							title={project.title}
							description={project.description}
							button1Text={project.button1Text}
							button1Link={project.button1Link}
							button2Text={project.button2Text}
							button2Link={project.button2Link}
							skills={project.skills}
						/>
					)
				})}
			</Grid>
		</>
	);
};

export default Projects;
