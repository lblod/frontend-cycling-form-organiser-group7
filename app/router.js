import EmberRouter from '@ember/routing/router';
import config from 'frontend-lmb/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('switch-login');
  this.route('mock-login');

  this.route('auth', { path: '/authorization' }, function () {
    this.route('callback');
    this.route('login');
    this.route('logout');
    this.route('switch');
  });

  this.route('contact');

  this.route('legaal', function () {
    this.route('disclaimer');
    this.route('cookieverklaring');
    this.route('toegankelijkheidsverklaring');
  });

  this.route('aanvragen', function () {
    this.route('aanvraag', { path: '/:id/aanvraag' }, function () {
      this.route('page2');
    });
  });

  this.route('under-construction');

  this.route('error/404', {
    path: '/*wildcard',
  });
});
