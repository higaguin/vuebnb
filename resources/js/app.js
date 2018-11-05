import "core-js/fn/object/assign";
import Vue from 'vue';
import App from '../components/App.vue';

import { populateAmenitiesAndPrices } from './helpers';

import ListingPage from '../components/ListingPage.vue';
import HomePage from '../components/HomePage.vue';
import router from './router';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

var app = new Vue({
    el: '#app',
    render: h => h(App),
    router, 
    routes: [
      { path: '/', component: HomePage, name: 'home' },
      { path: '/listing/:listing', component: ListingPage, name: 'listing' }
    ]
  });