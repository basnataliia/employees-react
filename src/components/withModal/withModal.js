import React from 'react';
import Modal from 'components/Modal/Modal'

export const withModal = (WrappedComponent, CustomModal, isNew) => {

   class HOC extends React.Component {
    constructor(props) {
     super(props)
     this.state = {
       open: false
     }
   }

   openModal = () => {
     this.setState({
       open: true
     })
   }

   closeModal = () => {
     this.setState({
       open: false
     })
   }

    render() {
      return (
        <React.Fragment>
            <WrappedComponent
              openModal={this.openModal}
              closeModal={this.closeModal}
            {...this.props}
          />
          <Modal open={this.state.open} handleClose={this.closeModal}>
            <CustomModal handleClose={this.closeModal} item={this.props.item} isNew={isNew}/>
          </Modal>
        </React.Fragment>
      )
    }
  }

  return HOC
}
