import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  утверждение: DS.attr('i-i-s-dokumentooborot7-утверждение'),
  авПользователи: DS.belongsTo('i-i-s-dokumentooborot7-ав-пользователи', { inverse: null, async: false }),
  формаДокумента: DS.belongsTo('i-i-s-dokumentooborot7-форма-документа', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-утверждение-док.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  утверждение: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-утверждение-док.validations.утверждение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  авПользователи: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-утверждение-док.validations.авПользователи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  формаДокумента: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-утверждение-док.validations.формаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УтверждениеДокE', 'i-i-s-dokumentooborot7-утверждение-док', {
    дата: attr('Дата', { index: 0 }),
    утверждение: attr('Утверждение', { index: 1 }),
    формаДокумента: belongsTo('i-i-s-dokumentooborot7-форма-документа', 'Форма документа', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' }),
    авПользователи: belongsTo('i-i-s-dokumentooborot7-ав-пользователи', 'Ав пользователи', {
      логин: attr('Логин', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'логин' })
  });

  modelClass.defineProjection('УтверждениеДокL', 'i-i-s-dokumentooborot7-утверждение-док', {
    дата: attr('Дата', { index: 0 }),
    утверждение: attr('Утверждение', { index: 1 }),
    формаДокумента: belongsTo('i-i-s-dokumentooborot7-форма-документа', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true }),
    авПользователи: belongsTo('i-i-s-dokumentooborot7-ав-пользователи', '', {
      сотрудники: belongsTo('i-i-s-dokumentooborot7-сотрудники', '', {
        фИОСотрудника: attr('', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
