import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.dokumentooborot7.caption'),
          title: i18n.t('forms.application.sitemap.dokumentooborot7.title'),
          children: [{
            link: 'i-i-s-dokumentooborot7-вход-в-систему-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-вход-в-систему-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-вход-в-систему-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot7-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-сотрудники-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot7-форма-документа-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-форма-документа-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-форма-документа-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot7-документ-сох-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-документ-сох-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-документ-сох-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot7-должность-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-должность-l.title'),
            children: null
          }, {
            link: 'i-i-s-dokumentooborot7-утверждение-док-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-утверждение-док-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-утверждение-док-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-dokumentooborot7-ав-пользователи-l',
            caption: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-ав-пользователи-l.caption'),
            title: i18n.t('forms.application.sitemap.dokumentooborot7.i-i-s-dokumentooborot7-ав-пользователи-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})