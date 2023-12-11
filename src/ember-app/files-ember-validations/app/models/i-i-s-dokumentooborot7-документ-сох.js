import {
  defineNamespace,
  defineProjections,
  Model as ДокументСохMixin
} from '../mixins/regenerated/models/i-i-s-dokumentooborot7-документ-сох';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДокументСохMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
