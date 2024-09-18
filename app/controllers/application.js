import Controller from '@ember/controller';

import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service session;
  @service currentSession;
  @service router;
  @service store;

  appTitle = 'Koersaanvraag';

  get isIndex() {
    return this.router.currentRouteName === 'index';
  }
}
