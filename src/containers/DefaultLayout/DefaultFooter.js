import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span className="ml-1"><a href="https://www.economist.com/legal/terms-of-use">Terms of use</a></span>
        <span className="ml-2"><a href="http://www.economistgroup.com/results_and_governance/governance/privacy/">Privacy</a>  </span>
        <span className="ml-2"><a href="https://www.economistgroup.com/results_and_governance/governance/Cookies_information.html">Cookies</a>  </span>
        <span className="ml-2"><a href="https://www.economist.com/help/accessibilitypolicy">Accesibility</a></span>
        <span className="ml-auto">Powered by <a href="https://exigenservices.com/">Exigen Services</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
