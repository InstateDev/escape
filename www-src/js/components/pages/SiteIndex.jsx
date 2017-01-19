import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import _ from 'lodash'
import { push } from 'react-router-redux';
import actions from '../../actions'
import EthereumAddress from '../common/EthereumAddress'
import BSCard from '../bootstrap/BSCard'

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(React.createClass({
  handleLookupByAddressSubmit(formData) {
    this.props.dispatch(push(`addresses/${formData.tokenOwnerAddress}`))
  },
  render() {
    return (
      <div className='row'>
        <div className='col-sm-7'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <BSCard>
                  <BSCard.Header>
                    Ethereum Smart Contract and Package Index
                  </BSCard.Header>
                  <BSCard.Block>
                    <BSCard.Text>Stub</BSCard.Text>
                    <BSCard.Text>Stub</BSCard.Text>
                  </BSCard.Block>
                </BSCard>
              </div>
              <div className='col-sm-12'>
                <BSCard>
                  <BSCard.Header>
                    Another Header
                  </BSCard.Header>
                  <BSCard.Block>
                    <BSCard.Text>Stub</BSCard.Text>
                  </BSCard.Block>
                </BSCard>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-5'>
          <BSCard>
            <BSCard.Header>Another Header</BSCard.Header>
            <BSCard.Block>
              <BSCard.Text>Stub</BSCard.Text>
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
              </ol>
              <BSCard.Text>Another Stub</BSCard.Text>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </BSCard.Block>
          </BSCard>
        </div>
      </div>
    )
  },
}))
