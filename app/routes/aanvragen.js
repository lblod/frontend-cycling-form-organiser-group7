import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class AanvragenRoute extends Route {
  @service currentSession;
  @service session;
  @service router;
  @service store;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');

    if (!this.currentSession.canAccessMandaat) {
      this.router.transitionTo('index');
    }
  }

  async model() {
    return {};
  }
}
