import React from "react";
import { connect } from "react-redux";
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
} from "../Redux/Actions";

const useStyles = makeStyles((theme) => ({
	root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
	},
}));


function SmurfVillage({ loading, data, error, APICall }) {
    const classes = useStyles();
	const getSmurf = () => {
		APICall();
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
				<form noValidate autoComplete="off">
					<TextField id="outlined-basic" label="Name" variant="outlined" />
					<TextField id="outlined-basic" label="Age" variant="outlined" />
					<TextField id="outlined-basic" label="Height" variant="outlined" />
					<Button variant="contained" color="primary">
						ADD SMURF
					</Button>
				</form>
			</Grid>
		</Grid>
	) : (
		<div>
			<Button onClick={getSmurf} variant="contained" color="secondary">
				GET SMURF
			</Button>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfVillage);
