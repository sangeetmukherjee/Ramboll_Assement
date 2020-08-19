import { connect } from 'react-redux'
//import Hello from '../components/Hello'
import Landing from '../components/LandingTable'

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.landingData,
    pending: state.pending
  }
}

const ParentContainer = connect(
  mapStateToProps,
  //mapDispatchToProps
)(Landing)

export default ParentContainer
