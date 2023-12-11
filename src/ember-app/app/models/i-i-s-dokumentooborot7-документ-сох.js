import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокументСохMixin
} from '../mixins/regenerated/models/i-i-s-dokumentooborot7-документ-сох';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокументСохMixin, Validations, {
});

defineProjections(Model);

export default Model;
