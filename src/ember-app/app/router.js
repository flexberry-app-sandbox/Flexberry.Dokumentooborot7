import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dokumentooborot7-ав-пользователи-l');
  this.route('i-i-s-dokumentooborot7-ав-пользователи-e',
  { path: 'i-i-s-dokumentooborot7-ав-пользователи-e/:id' });
  this.route('i-i-s-dokumentooborot7-ав-пользователи-e.new',
  { path: 'i-i-s-dokumentooborot7-ав-пользователи-e/new' });
  this.route('i-i-s-dokumentooborot7-вход-в-систему-l');
  this.route('i-i-s-dokumentooborot7-вход-в-систему-e',
  { path: 'i-i-s-dokumentooborot7-вход-в-систему-e/:id' });
  this.route('i-i-s-dokumentooborot7-вход-в-систему-e.new',
  { path: 'i-i-s-dokumentooborot7-вход-в-систему-e/new' });
  this.route('i-i-s-dokumentooborot7-документ-сох-l');
  this.route('i-i-s-dokumentooborot7-документ-сох-e',
  { path: 'i-i-s-dokumentooborot7-документ-сох-e/:id' });
  this.route('i-i-s-dokumentooborot7-документ-сох-e.new',
  { path: 'i-i-s-dokumentooborot7-документ-сох-e/new' });
  this.route('i-i-s-dokumentooborot7-должность-l');
  this.route('i-i-s-dokumentooborot7-должность-e',
  { path: 'i-i-s-dokumentooborot7-должность-e/:id' });
  this.route('i-i-s-dokumentooborot7-должность-e.new',
  { path: 'i-i-s-dokumentooborot7-должность-e/new' });
  this.route('i-i-s-dokumentooborot7-сотрудники-l');
  this.route('i-i-s-dokumentooborot7-сотрудники-e',
  { path: 'i-i-s-dokumentooborot7-сотрудники-e/:id' });
  this.route('i-i-s-dokumentooborot7-сотрудники-e.new',
  { path: 'i-i-s-dokumentooborot7-сотрудники-e/new' });
  this.route('i-i-s-dokumentooborot7-утверждение-док-l');
  this.route('i-i-s-dokumentooborot7-утверждение-док-e',
  { path: 'i-i-s-dokumentooborot7-утверждение-док-e/:id' });
  this.route('i-i-s-dokumentooborot7-утверждение-док-e.new',
  { path: 'i-i-s-dokumentooborot7-утверждение-док-e/new' });
  this.route('i-i-s-dokumentooborot7-форма-документа-l');
  this.route('i-i-s-dokumentooborot7-форма-документа-e',
  { path: 'i-i-s-dokumentooborot7-форма-документа-e/:id' });
  this.route('i-i-s-dokumentooborot7-форма-документа-e.new',
  { path: 'i-i-s-dokumentooborot7-форма-документа-e/new' });
});

export default Router;
