import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		display: 'flex',
		height: '100%'
	},
	blueSide: {
		backgroundColor: '#1DA1f2'
	},
	loginSide: {}
}));

function SignIn() {
	const classes = useStyles();
	return (
		<div>
			<div></div>
		</div>
	);
}

export default SignIn;
