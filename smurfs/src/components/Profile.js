import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import smurf1 from "./smurf1.jpeg";
import smurf2 from "./smurf2.png";
import smurf3 from "./smurf3.jpeg";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
	container: {
        display: "flex",
        flexDirection: "column",
		alignItems: "center",
    },
    item: {
        margin: "20px",
    }
}));

function Profile(props) {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<h1>THE SMURF VILLAGE!!!</h1>
			<div className={classes.item}>
				<Card className={classes.root}>
					<CardHeader
						title="LUMBERJACK SMURF"
						subheader="AGE: 200 HEIGHT: 20inches"
					/>
					<CardMedia
						className={classes.media}
						image={smurf1}
						title="Paella dish"
					/>
				</Card>
			</div>
			<div className={classes.item}>
				<Card className={classes.root}>
					<CardHeader
						title="EATEY SMURF"
						subheader="AGE: 250 HEIGHT: 22inches"
					/>
					<CardMedia
						className={classes.media}
						image={smurf2}
						title="Paella dish"
					/>
				</Card>
			</div>
			<div className={classes.item}>
				<Card className={classes.root}>
					<CardHeader
						title="REGULAR SMURF"
						subheader="AGE: 100 HEIGHT: 25inches"
					/>
					<CardMedia
						className={classes.media}
						image={smurf3}
						title="Paella dish"
					/>
				</Card>
			</div>
			<Button className={classes.item} variant="contained" color="secondary">
				<Link to="/">SEE SMURF PROFILES</Link>
			</Button>
		</div>
	);
}

export default Profile;
