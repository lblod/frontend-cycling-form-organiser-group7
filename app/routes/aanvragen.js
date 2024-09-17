import Route from '@ember/routing/route';

import { service } from '@ember/service';
import { getFormFrom } from 'frontend-lmb/utils/get-form';

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
    const form = await getFormFrom(this.store, 'aanvrager');
    return { form };
  }
}
