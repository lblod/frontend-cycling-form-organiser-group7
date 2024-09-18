import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class AanvragenAanvraagIndexRoute extends Route {
  @service router;
  @service store;

  async model(params) {
    const activiteit = await this.store.findRecord('activiteit', params.id);
    return { activiteit };
  }
}
