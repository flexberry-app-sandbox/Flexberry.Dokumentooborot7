import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаСохранения: DS.attr('date', { defaultValue() { return new Date(); } }),
  тЧУтвержДок: DS.hasMany('i-i-s-dokumentooborot7-т-ч-утверж-док', { inverse: 'документСох', async: false }),
  тЧСоздДок: DS.hasMany('i-i-s-dokumentooborot7-т-ч-созд-док', { inverse: 'документСох', async: false })
});

export let ValidationRules = {
  датаСохранения: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-документ-сох.validations.датаСохранения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тЧУтвержДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-документ-сох.validations.тЧУтвержДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧСоздДок: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-документ-сох.validations.тЧСоздДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокументСохE', 'i-i-s-dokumentooborot7-документ-сох', {
    датаСохранения: attr('Дата сохранения', { index: 0 }),
    тЧУтвержДок: hasMany('i-i-s-dokumentooborot7-т-ч-утверж-док', 'Т ч утверж док', {
      утверждениеДок: belongsTo('i-i-s-dokumentooborot7-утверждение-док', 'Утверждение док', {
        дата: attr('Дата', { index: 1, hidden: true }),
        утверждение: attr('', { index: 2 }),
        авПользователи: belongsTo('i-i-s-dokumentooborot7-ав-пользователи', '', {
          сотрудники: belongsTo('i-i-s-dokumentooborot7-сотрудники', '', {
            фИОСотрудника: attr('', { index: 3 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'дата' })
    }),
    тЧСоздДок: hasMany('i-i-s-dokumentooborot7-т-ч-созд-док', 'Т ч созд док', {
      формаДокумента: belongsTo('i-i-s-dokumentooborot7-форма-документа', 'Форма документа', {
        дата: attr('', { index: 1 }),
        наименование: attr('Наименование', { index: 2, hidden: true }),
        авПользователи: belongsTo('i-i-s-dokumentooborot7-ав-пользователи', '', {
          сотрудники: belongsTo('i-i-s-dokumentooborot7-сотрудники', '', {
            фИОСотрудника: attr('', { index: 3 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ДокументСохL', 'i-i-s-dokumentooborot7-документ-сох', {
    датаСохранения: attr('Дата сохранения', { index: 0 })
  });
};
