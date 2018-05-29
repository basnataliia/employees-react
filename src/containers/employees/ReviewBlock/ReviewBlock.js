import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './styles.scss'

class ReviewBlock extends React.Component {
   constructor(props) {
    super(props)

    this.state = {
        reviewerName: '',
        review: ''
     }
   }

   handleChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value
     })
   }

   handleSave = () => {
     const date = new Date().toLocaleDateString()
     const data = {
       employeeId: this.props.employeeId,
       reviewerName: this.state.reviewerName,
       review: this.state.review,
       date
     }
     this.setState({
       reviewerName: '',
       review: ''
     })
     this.props.handleSave(data)
   }

  render() {
    return (
        <React.Fragment>
          <Card className={styles.card}>
            <CardContent>
              <TextField
                name="reviewerName"
                label="Name"
                placeholder="Your name"
                className={styles.textField}
                value={this.state.reviewerName}
                onChange={this.handleChange}
              />
              <TextField
                name="review"
                label="Leave your review"
                multiline
                rows={2}
                rowsMax={4}
                placeholder="Perfomance review"
                className={styles.textField}
                value={this.state.review}
                onChange={this.handleChange}
              />
              <Button
                variant="raised"
                color="primary"
                onClick={() => this.handleSave()}
                className={styles.button}>
                Submit
              </Button>
            </CardContent>
        </Card>
        </React.Fragment>
      )
    }
}

export default ReviewBlock
