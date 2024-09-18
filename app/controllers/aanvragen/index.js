import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AanvragenIndexController extends Controller {
  @service router;
  @service store;

  @service toaster;

  @tracked filter = '';
  @tracked page = 0;
  sort = 'name';
  size = 10;

  @tracked modalOpen = 0;

  @action
  openModal() {
    this.modalOpen = true;
  }

  @action
  closeModal() {
    this.modalOpen = false;
  }

  @action
  async onCreate({ instanceTtl, instanceId }) {
    this.router.transitionTo('aanvragen.aanvraag', instanceId);
  }
}
