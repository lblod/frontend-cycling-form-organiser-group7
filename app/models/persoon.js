import Model, { attr, hasMany } from '@ember-data/model';

export default class PersoonModel extends Model {
  @attr voornaam;
  @attr achternaam;
  @attr adres;
  @attr telefoon;
  @attr mobiel;
  @attr organisatie;

  @hasMany('activiteit', { async: false, inverse: 'organisator' }) activiteiten;
}
