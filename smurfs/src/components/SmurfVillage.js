import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
	fetchSmurfData,
	fetchDataFailure,
	fetchDataSuccess,
	APICall,
	PostReq,
} from "../Redux/Actions";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

function SmurfVillage({ loading, data, error, APICall, PostReq }) {
	const defaultState = {
		name: "",
		height: "",
		age: "",
	};
    const [newSmurf, setNewSmurf] = useState(defaultState);
	const classes = useStyles();
	const getSmurf = () => {
		APICall();
	};
	const giveSmurf = (e) => {
        e.preventDefault();
        PostReq(newSmurf);
	};
	return loading ? (
		<h2> GETTING YOU YOUR SMURF</h2>
	) : error ? (
		<h2> {error} </h2>
	) : data ? (
		<Grid container className={classes.root}>
			<Grid item>
				{data.map((smurf) => (
					<Paper>
						<Typography variant="h5">Name: {smurf.name}</Typography>
						<Typography variant="h5">Age: {smurf.age}</Typography>
						<Typography variant="h5">Height: {smurf.height}</Typography>
					</Paper>
				))}
			</Grid>
			<Grid item>
				<form onSubmit={giveSmurf}>
					<TextField
						onChange={(event) =>
							setNewSmurf({ ...newSmurf, name: event.target.value })
						}
						id="outlined-basic"
						//value={defaultState.name}
						name="name"
						label="Name"
						variant="outlined"
					/>
					<TextField
						onChange={(event) =>
							setNewSmurf({ ...newSmurf, age: event.target.value })
						}
						id="outlined-basic"
						//value={defaultState.age}
						name="age"
						label="Age"
						variant="outlined"
					/>
					<TextField
						onChange={(event) =>
							setNewSmurf({ ...newSmurf, height: event.target.value })
						}
						id="outlined-basic"
						//value={defaultState.height}
						name="height"
						label="Height"
						variant="outlined"
					/>
					<Button variant="contained" color="primary" onClick={giveSmurf}>
						ADD SMURF
					</Button>
				</form>
			</Grid>
			<Button variant="contained" color="secondary">
				<Link to="/profile">SEE SMURF PROFILES</Link>
			</Button>
		</Grid>
	) : (
		<div>
			<Button onClick={getSmurf} variant="contained" color="secondary">GET SMURF</Button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = {
	fetchSmurfData,
	fetchDataFailure,
	fetchDataSuccess,
	APICall,
	PostReq,
};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfVillage);
