// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("@fortawesome/fontawesome-free/js/all")

//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "css/application";

import 'bootstrap';

import "@fortawesome/fontawesome-free/js/all";
import "@fortawesome/fontawesome-free/css/all";

$(document).scroll(function() {
 if ($(document).scrollTop() > 50) {
 $('nav').addClass('shrink');
 } else {
 $('nav').removeClass('shrink');
 }
});
