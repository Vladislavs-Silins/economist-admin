import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css';
import { connect } from 'react-redux';

// Containers
import { DefaultLayout } from './containers';
// Pages
import { Page404 } from './views/Pages';
import { CAMPAIGNMAP, PROMOTIONMAP, PREMIAMAP, PRODUCTMAP, OFFERCATEGORYMAP } from 'mock-data';
import { setCampaigns } from './store/actions/campaigns';
import { setPromotions } from './store/actions/promotions';
import { setPremias } from './store/actions/premias';
import { setProducts } from './store/actions/products';
import { setOfferCategories } from './store/actions/offerCategories';

class App extends Component {

  componentDidMount = () => {
    this.getMockData();
  }
  getMockData() {
    this.props.dispatch(setCampaigns({ campaigns: Array.from(CAMPAIGNMAP.values()) }));
    this.props.dispatch(setPromotions({ promotions: Array.from(PROMOTIONMAP.values()) }));
    this.props.dispatch(setPremias({ premias: Array.from(PREMIAMAP.values()) }));
    this.props.dispatch(setProducts({ products: Array.from(PRODUCTMAP.values()) }));
    this.props.dispatch(setOfferCategories({ offerCategories: Array.from(OFFERCATEGORYMAP.values()) }));
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default connect()(App)
