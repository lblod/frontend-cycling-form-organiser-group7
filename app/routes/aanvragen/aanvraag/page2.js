import Route from '@ember/routing/route';

import { service } from '@ember/service';
import { getFormFrom } from 'frontend-lmb/utils/get-form';

export default class AanvragenAanvraagPage2Route extends Route {
  @service router;
  @service store;

  async model() {
    const parentModel = await this.modelFor('aanvragen.aanvraag');
    const form = await getFormFrom(this.store, 'persoon');
    return { activiteit: parentModel.activiteit, form };
  }
}
