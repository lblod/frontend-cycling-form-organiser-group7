import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class AanvragenAanvraagIndexController extends Controller {
  @service store;

  @action
  async onCreate() {
    this.router.transitionTo('aanvragen.aanvraag.page2');
  }
}
