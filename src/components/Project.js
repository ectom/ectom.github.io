import {
	Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

	card: {
		maxWidth: '800px',
		textAlign: 'left',
		background: '#fca311',
		color: 'white',
		marginBottom: 50,
		display: 'block',
	},
	media: {
		height: 300,
	},
	description: {
		color: 'white',
	},
	button: {
		background: '#495057',
		color: 'white',
	},
	skills: {
		columnCount: 4,
	},
});

function Project(props) {
	const classes = useStyles();

	const skills = () => {
		if (props.skills) {
			const { skills } = props;
			const listSkills = skills.map((skill, index) => <li key={`${props.title}-${skill}-${index}`}>{skill}</li>);
			return (
				<>
					<br />
					<Typography variant="h6">Relevant Technologies:</Typography>
					<ul className={classes.skills}>{listSkills}</ul>
				</>
			);
		}
	};

	const renderButton = (buttonLink, buttonText) => {
		if (buttonLink && buttonText) {
			return (
				<Button
					size="small"
					className={classes.button}
					href={buttonLink}
					target="_blank"
				>
					{buttonText}
				</Button>
			);
		}
	};

	return (
		<>
			<div className={classes.card} elevation={3}>
				<Typography
					className={classes.description}
					gutterBottom
					variant="h5"
					component="h2"
				>
					Title
				</Typography>
				<div>
					<img src='../code.svg' alt='image'/>
					{renderButton('https://google.com', 'Github')}
					{renderButton('https://google.com', 'Live')}
				</div>
			</div>
		</>
	);
}

export default Project;
