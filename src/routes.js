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

const CampaignItemLayout = Loadable({
  loader: () => import('./components/CampaignItemLayout'),
  loading: Loading,
});

const PromotionLayout = Loadable({
  loader: () => import('./components/PromotionLayout'),
  loading: Loading,
});

const PromotionItemLayout = Loadable({
  loader: () => import('./components/PromotionItemLayout'),
  loading: Loading,
});

const OfferLayout = Loadable({
  loader: () => import('./components/OfferLayout'),
  loading: Loading,
});

const PremiaLayout = Loadable({
  loader: () => import('./components/PremiaLayout'),
  loading: Loading,
});


const ProductLayout = Loadable({
  loader: () => import('./components/ProductLayout'),
  loading: Loading,
});

const SettingsLayout = Loadable({
  loader: () => import('./components/SettingsLayout'),
  loading: Loading,
});

const UXJourneyLayout = Loadable({
  loader: () => import('./components/UXJourneyLayout'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // My router pages
  { path: '/campaigns', name: 'Campaigns', component: CampaignLayout },
  { path: '/campaign/:code?', name: 'Campaign Item', component: CampaignItemLayout },
  { path: '/promotions', name: 'Promotions', component: PromotionLayout },
  { path: '/promotion/:code?', name: 'Promotion Item', component: PromotionItemLayout },
  { path: '/offers', name: 'Offers', component: OfferLayout },
  { path: '/premias', name: 'Premias', component: PremiaLayout },
  { path: '/products', name: 'Products', component: ProductLayout },
  { path: '/settings/:type?', name: 'Settings', component: SettingsLayout },
  { path: '/settings', name: 'Offer Categories', component: SettingsLayout },
  { path: '/settings/payment-type', name: 'Payment Types', component: SettingsLayout },
  { path: '/settings/terms', name: 'Offer Terms', component: SettingsLayout },
  { path: '/settings/countries', name: 'Countries', component: SettingsLayout },
  { path: '/ux-journey', name: 'UX Journey', component: UXJourneyLayout },
  // My router pages end  
];

export default routes;
