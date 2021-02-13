import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PropertiesForm from './PropertiesForm';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(1000 + theme.spacing.unit * 2 * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    overflowY: 'auto',
    // marginTop: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

class Properties extends React.Component {

  handleReset = () => {

  };

  render() {
    const { classes, listName, propsFileName } = this.props;
    console.log('listName', listName);
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <React.Fragment>
              <PropertiesForm
                listName={listName}
                propsFileName={propsFileName}
              />
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleReset}
                  className={classes.button}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleReset}
                  className={classes.button}
                >
                  Save
                </Button>
              </div>
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Properties.propTypes = {
  classes: PropTypes.object.isRequired,
  listName: PropTypes.string.isRequired,
  propsFileName: PropTypes.string.isRequired,
};

export default withStyles(styles)(Properties);