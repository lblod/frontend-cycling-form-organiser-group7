import Route from '@ember/routing/route';

import { service } from '@ember/service';
import { getFormFrom } from 'frontend-lmb/utils/get-form';

export default class AanvragenIndexRoute extends Route {
  @service router;
  @service store;

  async model() {
    const projecten = await this.store.findAll('activiteit');
    const newProjectForm = await getFormFrom(this.store, 'project');
    return {
      newProjectForm,
      projecten,
    };
  }
}
