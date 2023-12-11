import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаВхода: DS.attr('date', { defaultValue() { return new Date(); } }),
  тЧПользователь: DS.hasMany('i-i-s-dokumentooborot7-т-ч-пользователь', { inverse: 'входВСистему', async: false })
});

export let ValidationRules = {
  датаВхода: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-вход-в-систему.validations.датаВхода.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  тЧПользователь: {
    descriptionKey: 'models.i-i-s-dokumentooborot7-вход-в-систему.validations.тЧПользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВходВСистемуE', 'i-i-s-dokumentooborot7-вход-в-систему', {
    датаВхода: attr('Дата входа', { index: 0 }),
    тЧПользователь: hasMany('i-i-s-dokumentooborot7-т-ч-пользователь', 'Т ч пользователь', {
      авПользователи: belongsTo('i-i-s-dokumentooborot7-ав-пользователи', 'Ав пользователи', {
        логин: attr('Логин', { index: 1, hidden: true }),
        пароль: attr('', { index: 2 })
      }, { index: 0, displayMemberPath: 'логин' })
    })
  });

  modelClass.defineProjection('ВходВСистемуL', 'i-i-s-dokumentooborot7-вход-в-систему', {
    датаВхода: attr('Дата входа', { index: 0 })
  });
};
