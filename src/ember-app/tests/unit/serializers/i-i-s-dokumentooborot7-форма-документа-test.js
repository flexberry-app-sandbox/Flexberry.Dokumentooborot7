import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dokumentooborot7-форма-документа', 'Unit | Serializer | i-i-s-dokumentooborot7-форма-документа', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dokumentooborot7-форма-документа',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-dokumentooborot7-отделы',
    'transform:i-i-s-dokumentooborot7-пол',
    'transform:i-i-s-dokumentooborot7-права-пол',
    'transform:i-i-s-dokumentooborot7-утверждение',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
