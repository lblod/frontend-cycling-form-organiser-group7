import Model, { attr, belongsTo } from '@ember-data/model';

export default class ActiviteitModel extends Model {
  @attr name;
  @attr('date') date;

  @belongsTo('persoon', { async: false, inverse: 'activiteiten' }) organisator;
}
