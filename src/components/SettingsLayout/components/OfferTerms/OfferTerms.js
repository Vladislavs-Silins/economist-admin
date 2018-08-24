import React from 'react';
import { OFFERTERMMAP } from 'mock-data';

import uuid from 'uuid';
import OfferTermItem from './components/OfferTermItem';
import OfferTermEdit from './components/OfferTermEdit';
import { OfferTerm } from 'model/OfferTerm';

class OfferTerms extends React.Component {
  static propTypes = {

  }
  state = {
    terms: [],
    currentTerm: new OfferTerm(),
  }

  componentDidMount = () => {
    this.setState(() => {
      return {
        termsMap: OFFERTERMMAP,
        terms: Array.from(OFFERTERMMAP.keys())
      };
    });
  }
  handleChooseTerm = (code) => () => {
    this.setState((prevState) => {
      return {
        currentTerm: this.state.termsMap.get(code),
      };
    });
  }
  handleResetTerm = () => {

    this.setState((prevState) => {
      return {
        currentTerm: new OfferTerm(),
      };
    });
  }

  render = () => (
    <div className="animated fadeIn">
      <ul>
        {this.state.terms.map((termCode, index) => {
          return (
            <li key={uuid()}>
              <OfferTermItem click={this.handleChooseTerm(termCode)} term={this.state.termsMap.get(termCode)}></OfferTermItem>
            </li>
          )
        })
        }
      </ul>
      <OfferTermEdit term={this.state.currentTerm} reset={this.handleResetTerm} />
    </div>
  )
}

export default OfferTerms;
