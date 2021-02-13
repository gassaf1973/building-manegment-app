import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { StyleSheet, css } from 'aphrodite';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import RichTextEditor from 'react-rte';
import DateFnsUtils from '@date-io/date-fns'
import { getPropertiesConfig } from '../../services/specific-getters';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formHalfControl: {
    margin: theme.spacing.unit,
    minWidth: 500 - 60,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 1000 - 60,
  },
  dateTimeFormControl: {
    margin: theme.spacing.unit * 2,
  },
});

class PropertiesForm extends React.Component {

  handleChange = (value) => {
    console.log('ttt');
  }

  handleBeforeInput = (chars) => {
    return 10;
  }

  render() {
    const toolbarConfig = {
      display: ['INLINE_STYLE_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        { label: 'Bold', style: 'BOLD' },
        { label: 'Italic', style: 'ITALIC' },
        { label: 'Strikethrough', style: 'STRIKETHROUGH' },
        { label: 'Underline', style: 'UNDERLINE' },
      ],
    };

    const reactRTE = {
      border: '1px solid #9197a3',
      fontFamily: 'Source Sans Pro, sans-serif',
      borderRadius: 0,
      minHeight: 180,
    };

    const styles = StyleSheet.create({
      reactRTE,
      editor: {
        fontSize: '12px',
        height: 161,
        lineHeight: '22px',
      },
      editorEnabled: {
        color: '3F5F80',
      },
      editorDisabled: {
        color: '5A5A5A',
      },
    });


    const { classes, propsFileName, listName } = this.props;
    const propertiesConfig = getPropertiesConfig()[propsFileName];
    const properties = propertiesConfig.properties;
    return (
      <React.Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              {listName !== undefined && listName.lenght !== 0 ? listName : propertiesConfig.titleLabel}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          {
            properties.map((field) => {
              let half = 6;
              if (field.fullWidth) {
                half = 12;
              }
              const visible = true; //field.visibleInMode.edition;
              // TODO ADD MODE : CREATE OR MODIFY OR VIEW
              switch (field.type) {
                case 'TextField': {
                  if (visible) {
                    console.log(field.maxLength);
                    return (
                      <Grid item xs={half}>
                        <FormControl
                          required={field.required}
                          disabled={field.disabled}
                          className={half === 12 ? classes.formControl : classes.formHalfControl}
                        >
                          <TextField
                            required={field.required}
                            disabled={field.disabled}
                            id={field.attribute}
                            name={field.attribute}
                            label={field.label}
                            inputProps={{
                              maxLength: field.maxLength
                            }}
                            {...field.autoFocus ? { autoFocus: true } : {}}
                          />
                        </FormControl>
                      </Grid>
                    )
                  }
                  return null;
                }
                case 'Number': {
                  if (visible) {
                    console.log(field.maxLength);
                    return (
                      <Grid item xs={half}>
                        <FormControl
                          required={field.required}
                          disabled={field.disabled}
                          className={half === 12 ? classes.formControl : classes.formHalfControl}
                        >
                          <TextField
                            type="number"
                            required={field.required}
                            disabled={field.disabled}
                            id={field.attribute}
                            name={field.attribute}
                            label={field.label}
                            inputProps={{
                              maxLength: field.maxLength
                            }}
                            {...field.autoFocus ? { autoFocus: true } : {}}
                          />
                        </FormControl>
                      </Grid>
                    )
                  }
                  return null;
                }
                case 'Selects':
                  return (
                    <Grid item xs={half}>
                      <FormControl
                        required={field.required}
                        disabled={field.disabled}
                        className={half === 12 ? classes.formControl : classes.formHalfControl}
                      >
                        <InputLabel htmlFor={field.attribute}>{field.label}</InputLabel>
                        <Select
                          native
                          inputProps={{
                            name: field.attribute,
                            id: field.attribute,
                          }}
                        >
                        </Select>
                      </FormControl>
                    </Grid>
                  );
                case 'DatePicker':
                  return (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid item xs={half}>
                        <FormControl
                          required={field.required}
                          disabled={field.disabled}
                          className={half === 12 ? classes.formControl : classes.formHalfControl}
                        >
                          <FormLabel component="legend">{field.label}</FormLabel>
                          <DatePicker
                            key={`datePicker.${field.attribute}`}
                            id={field.attribute}
                            name={field.attribute}
                            margin="normal"
                            disabled={field.disabled}
                          //value={selectedDate}
                          //onChange={this.handleDateChange}
                          />
                        </FormControl>
                      </Grid>
                    </MuiPickersUtilsProvider>
                  );
                case 'DateTimePicker':
                  return (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <FormControl
                        required={field.required}
                        disabled={field.disabled}
                        className={half === 12 ? classes.formControl : classes.formHalfControl}
                      >
                        <FormLabel component="legend">{field.label}</FormLabel>
                        <Grid container item xs={half}>
                          <Grid item xs={half === 12 ? 6 : 3}>
                            <DatePicker
                              key={`datePicker.${field.attribute}`}
                              id={field.attribute}
                              name={field.attribute}
                              margin="normal"
                              disabled={field.disabled}
                            //value={selectedDate}
                            //onChange={this.handleDateChange}
                            />
                          </Grid>
                          <Grid item xs={half === 12 ? 6 : 3}>
                            <TimePicker
                              margin="normal"
                            //value={selectedDate}
                            //onChange={this.handleDateChange}
                            />
                          </Grid>
                        </Grid>
                      </FormControl>
                    </MuiPickersUtilsProvider>
                  );
                case 'Checkbox':
                  return (
                    <Grid item xs={half}>
                      <FormControl
                        required={field.required}
                        disabled={field.disabled}
                        className={half === 12 ? classes.formControl : classes.formHalfControl}
                      >
                        <FormLabel component="legend">{field.label}</FormLabel>
                        <FormControlLabel
                          control={
                            <Checkbox
                              id={field.attribute}
                              name={field.attribute}
                              disabled={field.disabled}
                              value="yes"
                            />
                          }
                        />
                      </FormControl>
                    </Grid>
                  );
                case 'RichText':
                  return (
                    <Grid item xs={half}>
                      <FormControl
                        required={field.required}
                        disabled={field.disabled}
                        className={half === 12 ? classes.formControl : classes.formHalfControl}
                      >
                        <FormLabel component="legend">{field.label}</FormLabel>
                        <RichTextEditor
                          value={RichTextEditor.createValueFromString('', 'html')}
                          onChange={this.handleChange}
                          readOnly={field.disabled}
                          disabled={field.disabled}
                          toolbarConfig={toolbarConfig}
                          className={css(styles.reactRTE)}
                          handleBeforeInput={this.handleBeforeInput}
                          editorClassName={css(styles.editor, styles.editorEnabled)}
                        />
                      </FormControl>
                    </Grid>
                  );
                default:
                  return null;
              }
            })
          }
        </Grid>
      </React.Fragment>
    );
  }
}

PropertiesForm.propTypes = {
  classes: PropTypes.object.isRequired,
  listName: PropTypes.string.isRequired,
  propsFileName: PropTypes.string.isRequired,
};

export default withStyles(styles)(PropertiesForm);