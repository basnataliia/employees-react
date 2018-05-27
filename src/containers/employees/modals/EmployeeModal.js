import React from 'react';
import {connect} from 'react-redux'
import {saveEmployee} from 'actions/employees'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import noPicture from 'images/noPicture.png';
import styles from './styles.scss'

class EmployeeModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.isNew ? '' : props.item.id,
      fullName: props.isNew ? '' : props.item.fullName,
      position: props.isNew ? '' : props.item.position,
      profilePic: props.isNew ? noPicture : props.item.profilePic,
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  fileChangedHandler = (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

     reader.onloadend = () => {
       this.setState({
         profilePic: reader.result
       });
     }

     reader.readAsDataURL(file)
  }

  handleSave = () => {
    const employeeData = {
      id: this.state.id,
      fullName: this.state.fullName,
      position: this.state.position,
      profilePic: this.state.profilePic
    }

    if(this.props.isNew) {
      delete employeeData.id;
    }

    this.props.saveEmployee(employeeData)
    .then(res => this.props.handleClose())
    .catch(error => {
      this.props.handleClose()
      throw(error)
    })
  }

  render() {
    return (
      <React.Fragment>
          <DialogTitle id="responsive-dialog-title">{"Update employee's details"}</DialogTitle>
          <DialogContent className={styles.root}>
                <TextField
                  name="fullName"
                  label="Full Name"
                  className={styles.textField}
                  value={this.state.fullName}
                  onChange={this.handleChange}
                  margin="normal"
                  style={{display: 'block'}}
                />

                <TextField
                  name="position"
                  label="Job Title"
                  className={styles.textField}
                  value={this.state.position}
                  onChange={this.handleChange}
                  margin="normal"
                  style={{display: 'block'}}
                />

                <img className={styles.profilePic} src={this.state.profilePic} alt="profile picture" />
                <br/>
                <input type="file" onChange={this.fileChangedHandler} />
                <button onClick={this.uploadHandler}>Upload!</button>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.handleSave}
              color="primary" autoFocus>
              Save
            </Button>
          </DialogActions>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hasLoaded: state.employees.loaded,
    employees: state.employees.items ? state.employees.items : []
  };
}

const mapDispatchToProps = {
  saveEmployee
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeModal)
