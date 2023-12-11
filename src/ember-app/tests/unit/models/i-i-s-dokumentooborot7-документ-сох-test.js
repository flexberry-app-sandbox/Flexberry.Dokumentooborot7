import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot7-документ-сох', 'Unit | Model | i-i-s-dokumentooborot7-документ-сох', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-dokumentooborot7-ав-пользователи',
    'model:i-i-s-dokumentooborot7-вход-в-систему',
    'model:i-i-s-dokumentooborot7-документ-сох',
    'model:i-i-s-dokumentooborot7-должность',
    'model:i-i-s-dokumentooborot7-сотрудники',
    'model:i-i-s-dokumentooborot7-т-ч-пользователь',
    'model:i-i-s-dokumentooborot7-т-ч-права',
    'model:i-i-s-dokumentooborot7-т-ч-созд-док',
    'model:i-i-s-dokumentooborot7-т-ч-утверж-док',
    'model:i-i-s-dokumentooborot7-утверждение-док',
    'model:i-i-s-dokumentooborot7-форма-документа',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
