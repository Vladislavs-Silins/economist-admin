export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      // badge: {
      //   variant: 'info',
      //   text: 'NEW',
      // },
    },
    {
      title: true,
      name: 'Strategy',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Campaigns',
      url: '/campaigns',
      icon: 'icon-globe',
    },
    {
      name: 'Promotions',
      url: '/promotions',
      icon: 'icon-badge',
    },
    {
      name: 'Offers',
      url: '/offers',
      icon: 'icon-basket-loaded',
    },
    {
      title: true,
      name: 'Items',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Premias',
      url: '/premias',
      icon: 'icon-star',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Products',
      url: '/products',
      icon: 'icon-puzzle',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Settings',
      url: '/settings',
      icon: 'icon-settings',
      children: [
        {
          name: 'Offer Categories',
          url: '/settings/categories',
          icon: 'icon-list',
        },
        {
          name: 'Payment Types',
          url: '/settings/payment-types',
          icon: 'cui-british-pound',
        },
        {
          name: 'Terms',
          url: '/settings/terms',
          icon: 'icon-calendar',
        },

      ],
    },
  ],
};
