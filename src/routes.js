import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Charts = Loadable({
  loader: () => import('./views/Charts'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Widgets = Loadable({
  loader: () => import('./views/Widgets/Widgets'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // My router pages
  // { path: '/campaigns', name: 'Campaigns', component: CampaignLayout },
  // { path: '/promotions', name: 'Promotions', component: PromotionLayout },
  // { path: '/offers', name: 'Offers', component: OfferLayout },
  // { path: '/offer-items', name: 'Offer Items', component: OfferItemLayout },
  // { path: '/premia', name: 'Premias', component: PremiaLayout },
  // { path: '/product', name: 'Products', component: ProductLayout },
  // { path: '/settings', name: 'Settings', component: SettingsLayout },
  // { path: '/settings/categories', name: 'Offer Categories', component: CategoryLayout },
  // { path: '/settings/payment-type', name: 'Payment Types', component: PaymentTypeLayout },
  // { path: '/settings/terms', name: 'Offer Terms', component: TermsLayout },
  // My router pages end

  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
