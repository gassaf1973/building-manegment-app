import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { getLeftAreaConfig } from '../../services/specific-getters';

const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class LeftArea extends React.Component {
    state = {
        open: true,
        value: '',
    };

    handleDrawerClose = () => {
        this.props.handleDrawerClose();
    }

    handleClick = (columnListName, hasSubList, label, propsFileName, listName = undefined) => {
        if (hasSubList) {
            this.setState(state => ({
                open: !state.open,
                value: label
            }));
        } else {
            console.log('LeftArea handleClick', columnListName, listName, propsFileName);
            this.props.handleClickList(columnListName, listName, propsFileName);
        }
    }

    render() {
        const { classes } = this.props;
        const listItems = getLeftAreaConfig().listItems;
        return (
            <List>
                <div>
                    {
                        listItems.map((item) => {
                            console.log(item)
                            const Icon = item.icon;
                            let hasSubList;
                            let subLists;
                            if (item.hasSubList) {
                                hasSubList = item.hasSubList;
                                subLists = item.subLists;
                            }
                            if (!hasSubList) {
                                return (
                                    <ListItem button
                                        key={item.id}
                                        onClick={() => this.handleClick(
                                            item.columnListName,
                                            hasSubList,
                                            item.label,
                                            item.propsFileName
                                        )}
                                    >
                                        <Tooltip title={item.label}>
                                            <ListItemIcon><Icon /></ListItemIcon>
                                        </Tooltip>
                                        <ListItemText primary={item.label} />
                                    </ListItem>
                                );
                            } else{
                                return (
                                    <div>
                                        <ListItem button
                                            key={item.id}
                                            onClick={() => this.handleClick(
                                                item.columnListName,
                                                hasSubList,
                                                item.label,
                                                item.propsFileName
                                            )}
                                        >
                                            <Tooltip title={item.label}>
                                                <ListItemIcon><Icon /></ListItemIcon>
                                            </Tooltip>
                                            <ListItemText primary={item.label} />
                                            {this.state.open && this.state.value === item.label ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Collapse in={this.state.open && this.state.value === item.label} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                            {
                                                subLists.map((subItem) => {
                                                    const SubIcon = subItem.icon;
                                                    return (
                                                        <ListItem button
                                                            className={classes.nested}
                                                            key={subItem.id}
                                                            onClick={() => this.handleClick(
                                                                subItem.columnListName,
                                                                false,
                                                                subItem.label,
                                                                subItem.propsFileName,
                                                                subItem.label,
                                                            )}
                                                        >
                                                            <Tooltip title={subItem.label}>
                                                                <ListItemIcon><SubIcon /></ListItemIcon>
                                                            </Tooltip>
                                                            <ListItemText primary={subItem.label} />
                                                        </ListItem>
                                                    );
                                                })
                                            }
                                            </List>
                                        </Collapse>                                    
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </List>
        );
    }
}

LeftArea.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
    handleClickList: PropTypes.func.isRequired,
};

export default withStyles(styles)(LeftArea);