import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISDokumentooborot7АвПользователиLForm from './forms/i-i-s-dokumentooborot7-ав-пользователи-l';
import IISDokumentooborot7ВходВСистемуLForm from './forms/i-i-s-dokumentooborot7-вход-в-систему-l';
import IISDokumentooborot7ДокументСохLForm from './forms/i-i-s-dokumentooborot7-документ-сох-l';
import IISDokumentooborot7ДолжностьLForm from './forms/i-i-s-dokumentooborot7-должность-l';
import IISDokumentooborot7СотрудникиLForm from './forms/i-i-s-dokumentooborot7-сотрудники-l';
import IISDokumentooborot7УтверждениеДокLForm from './forms/i-i-s-dokumentooborot7-утверждение-док-l';
import IISDokumentooborot7ФормаДокументаLForm from './forms/i-i-s-dokumentooborot7-форма-документа-l';
import IISDokumentooborot7АвПользователиEForm from './forms/i-i-s-dokumentooborot7-ав-пользователи-e';
import IISDokumentooborot7ВходВСистемуEForm from './forms/i-i-s-dokumentooborot7-вход-в-систему-e';
import IISDokumentooborot7ДокументСохEForm from './forms/i-i-s-dokumentooborot7-документ-сох-e';
import IISDokumentooborot7ДолжностьEForm from './forms/i-i-s-dokumentooborot7-должность-e';
import IISDokumentooborot7СотрудникиEForm from './forms/i-i-s-dokumentooborot7-сотрудники-e';
import IISDokumentooborot7УтверждениеДокEForm from './forms/i-i-s-dokumentooborot7-утверждение-док-e';
import IISDokumentooborot7ФормаДокументаEForm from './forms/i-i-s-dokumentooborot7-форма-документа-e';
import IISDokumentooborot7АвПользователиModel from './models/i-i-s-dokumentooborot7-ав-пользователи';
import IISDokumentooborot7ВходВСистемуModel from './models/i-i-s-dokumentooborot7-вход-в-систему';
import IISDokumentooborot7ДокументСохModel from './models/i-i-s-dokumentooborot7-документ-сох';
import IISDokumentooborot7ДолжностьModel from './models/i-i-s-dokumentooborot7-должность';
import IISDokumentooborot7СотрудникиModel from './models/i-i-s-dokumentooborot7-сотрудники';
import IISDokumentooborot7ТЧПользовательModel from './models/i-i-s-dokumentooborot7-т-ч-пользователь';
import IISDokumentooborot7ТЧПраваModel from './models/i-i-s-dokumentooborot7-т-ч-права';
import IISDokumentooborot7ТЧСоздДокModel from './models/i-i-s-dokumentooborot7-т-ч-созд-док';
import IISDokumentooborot7ТЧУтвержДокModel from './models/i-i-s-dokumentooborot7-т-ч-утверж-док';
import IISDokumentooborot7УтверждениеДокModel from './models/i-i-s-dokumentooborot7-утверждение-док';
import IISDokumentooborot7ФормаДокументаModel from './models/i-i-s-dokumentooborot7-форма-документа';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dokumentooborot7-ав-пользователи': IISDokumentooborot7АвПользователиModel,
    'i-i-s-dokumentooborot7-вход-в-систему': IISDokumentooborot7ВходВСистемуModel,
    'i-i-s-dokumentooborot7-документ-сох': IISDokumentooborot7ДокументСохModel,
    'i-i-s-dokumentooborot7-должность': IISDokumentooborot7ДолжностьModel,
    'i-i-s-dokumentooborot7-сотрудники': IISDokumentooborot7СотрудникиModel,
    'i-i-s-dokumentooborot7-т-ч-пользователь': IISDokumentooborot7ТЧПользовательModel,
    'i-i-s-dokumentooborot7-т-ч-права': IISDokumentooborot7ТЧПраваModel,
    'i-i-s-dokumentooborot7-т-ч-созд-док': IISDokumentooborot7ТЧСоздДокModel,
    'i-i-s-dokumentooborot7-т-ч-утверж-док': IISDokumentooborot7ТЧУтвержДокModel,
    'i-i-s-dokumentooborot7-утверждение-док': IISDokumentooborot7УтверждениеДокModel,
    'i-i-s-dokumentooborot7-форма-документа': IISDokumentooborot7ФормаДокументаModel
  },

  'application-name': 'Dokumentooborot7',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Dokumentooborot7',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dokumentooborot7',
          title: 'Dokumentooborot7'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        dokumentooborot7: {
          caption: 'Dokumentooborot7',
          title: 'Dokumentooborot7',
          'i-i-s-dokumentooborot7-вход-в-систему-l': {
            caption: 'Вход в систему',
            title: ''
          },
          'i-i-s-dokumentooborot7-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-dokumentooborot7-форма-документа-l': {
            caption: 'Форма документа',
            title: ''
          },
          'i-i-s-dokumentooborot7-документ-сох-l': {
            caption: 'Документ сох',
            title: ''
          },
          'i-i-s-dokumentooborot7-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-dokumentooborot7-утверждение-док-l': {
            caption: 'Утверждение док',
            title: ''
          },
          'i-i-s-dokumentooborot7-ав-пользователи-l': {
            caption: 'Ав пользователи',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-dokumentooborot7-ав-пользователи-l': IISDokumentooborot7АвПользователиLForm,
    'i-i-s-dokumentooborot7-вход-в-систему-l': IISDokumentooborot7ВходВСистемуLForm,
    'i-i-s-dokumentooborot7-документ-сох-l': IISDokumentooborot7ДокументСохLForm,
    'i-i-s-dokumentooborot7-должность-l': IISDokumentooborot7ДолжностьLForm,
    'i-i-s-dokumentooborot7-сотрудники-l': IISDokumentooborot7СотрудникиLForm,
    'i-i-s-dokumentooborot7-утверждение-док-l': IISDokumentooborot7УтверждениеДокLForm,
    'i-i-s-dokumentooborot7-форма-документа-l': IISDokumentooborot7ФормаДокументаLForm,
    'i-i-s-dokumentooborot7-ав-пользователи-e': IISDokumentooborot7АвПользователиEForm,
    'i-i-s-dokumentooborot7-вход-в-систему-e': IISDokumentooborot7ВходВСистемуEForm,
    'i-i-s-dokumentooborot7-документ-сох-e': IISDokumentooborot7ДокументСохEForm,
    'i-i-s-dokumentooborot7-должность-e': IISDokumentooborot7ДолжностьEForm,
    'i-i-s-dokumentooborot7-сотрудники-e': IISDokumentooborot7СотрудникиEForm,
    'i-i-s-dokumentooborot7-утверждение-док-e': IISDokumentooborot7УтверждениеДокEForm,
    'i-i-s-dokumentooborot7-форма-документа-e': IISDokumentooborot7ФормаДокументаEForm
  },

});

export default translations;
