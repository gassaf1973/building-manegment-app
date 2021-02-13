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

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cpassword: "",
      emailRequiredError: false,
      passwordRequiredError: false,
      passowrdError: false,
      showPassword: false,
      showCPassword: false,
      error204: false,
    }
    this.handleChange.bind(this);
    this.send.bind(this);
    this.handleError204.bind(this);
  }
  send = event => {
    if (!this.state.email || !this.state.password) {
      this.setState({
        error204: false,
        passowrdError: false,
        emailRequiredError: this.state.email ? false : true,
        passwordRequiredError: this.state.password ? false : true,
      });
    } else if (this.state.password !== this.state.cpassword) {
      this.setState({
        error204: false,
        passowrdError: true,
        emailRequiredError: false,
        passwordRequiredError: false,
      });
    } else {
      var _send = {
        email: this.state.email,
        password: this.state.password
      }
      loginAPI.signup(_send).then((data) => {
        if (data.status !== 204) {
          localStorage.setItem('token', data.data.token);
          window.location = "/";
        } else {
          this.handleError204();
        }
      }).catch((error) => {
        console.log(error);
        return;
      });
    }
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickShowCPassword = () => {
    this.setState(state => ({ showCPassword: !state.showCPassword }));
  };

  handleError204 = () => {
    this.setState({
      error204: true,
      passowrdError: false,
      emailRequiredError: false,
      passwordRequiredError: false,
    });
  };

  render() {
    const { classes } = this.props;
    
    let emailErrorMsg;
    let errorEmail;
    if (this.state.emailRequiredError) {
      emailErrorMsg = "Please complete this field";
      errorEmail = true;
    } else if (this.state.error204) {
      emailErrorMsg = "The email address already exists";
      errorEmail = true;
    }

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
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
                error={errorEmail}
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
                error={this.state.passwordRequiredError ? true : false}
                helperText={this.state.passwordRequiredError ? "Please complete this field" : ""}
            />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                required
                id="cpassword"
                name="cpassword"
                label="Confirm Password"
                defaultValue={this.state.cpassword}
                className={classes.textField}
                margin="normal"
                type={this.state.showCPassword ? 'text' : 'password'}
                onChange={this.handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowCPassword}
                      >
                        {this.state.showCPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={this.state.passowrdError ? true : false}
                helperText={this.state.passowrdError ? "Passwords must match" : " "}
            />
            </FormControl>

            <Button
              onClick={this.send}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Inscription
          </Button>
        </Paper>
      </main>
    );
  }
}
Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);