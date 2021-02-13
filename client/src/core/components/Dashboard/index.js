import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import EnhancedTable from '../EnhancedTable/index';
import AppBar from '../AppBar/index';
import LeftArea from '../LeftArea/index';
import Properties from '../Properties/index';
import Profile from '../Profile/index';
import { getApplicationConfig } from '../../services/specific-getters';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        height: '100vh',
        overflow: 'auto',
    },
    chartContainer: {
        marginLeft: -22,
    },
    tableContainer: {
        height: 320,
    },
});

function getContent(component, listName, propsFileName) {
    console.log('getContent : propsFileName', propsFileName);
    if (component) {
        return (
            <Properties 
                listName={listName}
                propsFileName={propsFileName}
            />
        );
    }
    return null;
}

class Dashboard extends React.Component {
    state = {
        open: true,
        columnsList: getApplicationConfig().DEFAULT_COMPONENT_LIST,
        listName: undefined,
        component: undefined,
        menuMyAccount: false,
        propsFileName: getApplicationConfig().DEFAULT_PROPS_NAME,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleClickList = (columnsList, listName, propsFileName) => {
        console.log('handleClickList', columnsList, listName, propsFileName);
        this.setState({
            menuMyAccount: false,
            columnsList,
            listName,
            component: undefined,
            propsFileName,
        });
    };
    
    handleMenuMyAccount = () => {
        this.setState({
            menuMyAccount: true,
            component: undefined,
            columnsList: undefined,
            listName: '',
            propsFileName: '',
        });
    };
    
    handleProperties = (listName, propsFileName) => {
        console.log('handleProperties propsFileName', propsFileName, 'listName', listName);
        this.setState({
            menuMyAccount: false,
            component: Properties,
            columnsList: undefined,
            listName,
            propsFileName,
        });
    };    

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    open={!this.state.open}
                    handleDrawerOpen={this.handleDrawerOpen}
                    handleMenuMyAccount={this.handleMenuMyAccount}
                />
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <LeftArea 
                        open={this.state.open}
                        handleDrawerClose={this.handleDrawerClose}
                        handleClickList={this.handleClickList}
                    />
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <div className={classes.tableContainer}>
                        {this.state.component ?
                            getContent(
                                this.state.component,
                                this.state.listName,
                                this.state.propsFileName
                            )
                            : null
                        }
                        {this.state.menuMyAccount ?
                            <Profile />
                            : null
                        }
                        {this.state.columnsList ?
                            <EnhancedTable
                                columnsList={this.state.columnsList}
                                handleProperties={this.handleProperties}
                                listName={this.state.listName}
                                propsFileName={this.state.propsFileName}
                            />
                            : null
                        }
                    </div>
                </main>
            </div>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);