import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import loginAPI from '../../utils/loginAPI';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailRequiredError: false,
      passwordRequiredError: false,
      userNotFound: false,
      showPassword: false,
      error204: false,
      error401: false,
    }
    this.handleChange.bind(this);
    this.send.bind(this);
    this.handleError401.bind(this);
    this.handleError204.bind(this);
  }
  send = event => {
    if (!this.state.email || !this.state.password) {
      this.setState({
        emailRequiredError: this.state.email ? false : true,
        passwordRequiredError: this.state.password ? false : true,
      });
    } else {
      loginAPI.login(this.state.email, this.state.password).then((data) => {
        if (data.status !== 204) {
          localStorage.setItem('token', data.data.token);
          window.location = "/dashboard"
        } else {
          this.handleError204();
        }
      }).catch(() => {
        this.handleError401();
      });
      }
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  }

  handleError401 = () => {
    this.setState({
      emailRequiredError: false,
      passwordRequiredError: false,
      error401: true,
      error204: false,
    });
  }

  handleError204 = () => {
    this.setState({
      emailRequiredError: false,
      passwordRequiredError: false,
      error401: false,
      error204: true,
    });
  }

  render() {
    const { classes } = this.props;
    
    const emailErrorMsg = this.state.emailRequiredError ? "Please complete this field" : (this.state.error204 ? "The user does not exist" : "");
    const passwordErrorMsg = this.state.passwordRequiredError ? "Please complete this field" : (this.state.error401 ? "Incorrect password" : "");

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <FormControl margin="normal" required fullWidth>
              <TextField
                required
                id="email"
                name="email"
                label="Email Address"
                defaultValue={this.state.email}
                className={classes.textField}
                margin="normal"
                type="text"
                onChange={this.handleChange}
                autoComplete="email"
                autoFocus
                error={emailErrorMsg ? true : false}
                helperText={emailErrorMsg}
            />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                defaultValue={this.state.password}
                className={classes.textField}
                margin="normal"
                type={this.state.showPassword ? 'text' : 'password'}
                onChange={this.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={passwordErrorMsg ? true : false}
                helperText={passwordErrorMsg}
            />
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.send}
            >
              Sign in
          </Button>
        </Paper>
      </main>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);