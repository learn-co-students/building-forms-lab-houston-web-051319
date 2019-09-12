import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  render() {
    console.log(this.props,"BandsContainer props")
    console.log(this.props.bands,"bands")
    console.log(this.props.addBand,"addBand prop")
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/> 
      </div>
    )
  }
}

const mapStateToProps = ({bands})=> {
  console.log(bands,"inside mapstate")
  return {bands}
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch,"inside mapdispatch")
  return{ addBand: band => dispatch({type: 'ADD_BAND', band}) }
}



export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
