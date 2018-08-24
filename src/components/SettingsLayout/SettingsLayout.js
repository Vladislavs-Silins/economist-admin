import React from 'react';
import { Col, Row, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom';
import OfferCategories from './components/OfferCategories';
import PaymentTypes from './components/PaymentTypes';
import OfferTerms from './components/OfferTerms';
import Countries from './components/Countries';

class SettingsLayout extends React.Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    const currentRoute = this.props.location.pathname.split('/').pop();
    this.props.history.listen((location, action) => {
      const currentRoute = location.pathname.split('/').pop();
      this.setState((prevState) => {
        return {
          activeTab: currentRoute,
          redirect: false
        };
      });
    });

    this.state = {
      activeTab: currentRoute,
      redirect: false
    };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        redirect: true
      });
    }
  }
  render = () => {
    if (this.state.redirect) {
      return (<Redirect push to={`/settings/${this.state.activeTab}`} />);
    } else {
      return (
        <div>
          <Row>
            <Col>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === 'categories' })}
                    onClick={() => { this.toggle('categories'); }}
                  >
                    Offer Categories
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === 'payment-types' })}
                    onClick={() => { this.toggle('payment-types'); }}
                  >
                    Payment Types
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === 'terms' })}
                    onClick={() => { this.toggle('terms'); }}
                  >
                    Terms
                </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === 'countries' })}
                    onClick={() => { this.toggle('countries'); }}
                  >
                    Countries
                </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="categories">
                  <OfferCategories />
                </TabPane>
                <TabPane tabId="payment-types">
                  <PaymentTypes />
                </TabPane>
                <TabPane tabId="terms">
                  <OfferTerms />
                </TabPane>
                <TabPane tabId="countries">
                  <Countries />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </div>)
    }
  }

}

SettingsLayout.propTypes = {

};

export default SettingsLayout;
