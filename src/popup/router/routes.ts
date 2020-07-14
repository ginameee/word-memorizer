import Word from '@popup/pages/Word.vue';
import Information from '@popup/pages/Information.vue';
import Notification from '@popup/pages/Notification.vue';
import Setting from '@popup/pages/Setting.vue';

export default [
  {
    path: '/',
    redirect: 'word'
  },
  {
    path: '/word',
    component: Word
  },
  {
    path: '/information',
    component: Information
  },
  {
    path: '/notification',
    component: Notification
  },
  {
    path: '/setting',
    component: Setting
  }
];
