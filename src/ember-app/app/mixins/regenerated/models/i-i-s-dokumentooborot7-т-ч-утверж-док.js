import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  утверждениеДок: DS.belongsTo('i-i-s-dokumentooborot7-утверждение-док', { inverse: null, async: false }),
  документСох: DS.belongsTo('i-i-s-dokumentooborot7-документ-сох', { inverse: 'тЧУтвержДок', async: false })
});

export let ValidationRules = {
  утверждениеДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-т-ч-утверж-док.validations.утверждениеДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  документСох: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-т-ч-утверж-док.validations.документСох.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧУтвержДокE', 'i-i-s-dokumentooborot7-т-ч-утверж-док', {
    утверждениеДок: belongsTo('i-i-s-dokumentooborot7-утверждение-док', 'Утверждение док', {
      дата: attr('Дата', { index: 1, hidden: true }),
      утверждение: attr('', { index: 2 }),
      авПользователи: belongsTo('i-i-s-dokumentooborot7-ав-пользователи', '', {
        сотрудники: belongsTo('i-i-s-dokumentooborot7-сотрудники', '', {
          фИОСотрудника: attr('', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'дата' })
  });
};
