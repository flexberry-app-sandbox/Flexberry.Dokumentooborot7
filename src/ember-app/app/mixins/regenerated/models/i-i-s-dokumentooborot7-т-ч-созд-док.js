import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  формаДокумента: DS.belongsTo('i-i-s-dokumentooborot7-форма-документа', { inverse: null, async: false }),
  документСох: DS.belongsTo('i-i-s-dokumentooborot7-документ-сох', { inverse: 'тЧСоздДок', async: false })
});

export let ValidationRules = {
  формаДокумента: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-т-ч-созд-док.validations.формаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  документСох: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-т-ч-созд-док.validations.документСох.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСоздДокE', 'i-i-s-dokumentooborot7-т-ч-созд-док', {
    формаДокумента: belongsTo('i-i-s-dokumentooborot7-форма-документа', 'Форма документа', {
      дата: attr('', { index: 1 }),
      наименование: attr('Наименование', { index: 2, hidden: true }),
      авПользователи: belongsTo('i-i-s-dokumentooborot7-ав-пользователи', '', {
        сотрудники: belongsTo('i-i-s-dokumentooborot7-сотрудники', '', {
          фИОСотрудника: attr('', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' })
  });
};
