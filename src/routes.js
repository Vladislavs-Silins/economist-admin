import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const CampaignLayout = Loadable({
  loader: () => import('./components/CampaignLayout'),
  loading: Loading,
});

const PromotionLayout = Loadable({
  loader: () => import('./components/PromotionLayout'),
  loading: Loading,
});

const CampaignLayout = Loadable({
  loader: () => import('./components/CampaignLayout'),
  loading: Loading,
});

const CampaignLayout = Loadable({
  loader: () => import('./components/CampaignLayout'),
  loading: Loading,
});


const CampaignLayout = Loadable({
  loader: () => import('./components/CampaignLayout'),
  loading: Loading,
});

const CampaignLayout = Loadable({
  loader: () => import('./components/CampaignLayout'),
  loading: Loading,
});

const CampaignLayout = Loadable({
  loader: () => import('./components/CampaignLayout'),
  loading: Loading,
});

const CampaignLayout = Loadable({
  loader: () => import('./components/CampaignLayout'),
  loading: Loading,
});

const CampaignLayout = Loadable({
  loader: () => import('./components/CampaignLayout'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // My router pages
  { path: '/campaigns', name: 'Campaigns', component: CampaignLayout },
  // { path: '/promotions', name: 'Promotions', component: PromotionLayout },
  // { path: '/offers', name: 'Offers', component: OfferLayout },  
  // { path: '/premia', name: 'Premias', component: PremiaLayout },
  // { path: '/product', name: 'Products', component: ProductLayout },
  // { path: '/settings', name: 'Settings', component: SettingsLayout },
  // { path: '/settings/categories', name: 'Offer Categories', component: SettingsLayout },
  // { path: '/settings/payment-type', name: 'Payment Types', component: SettingsLayout },
  // { path: '/settings/terms', name: 'Offer Terms', component: SettingsLayout },
  // { path: '/ux-journey', name: 'UX Journey', component: UXJourneyLayout },
  // My router pages end  
];

export default routes;
