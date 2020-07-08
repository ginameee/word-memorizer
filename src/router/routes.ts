import Word from '@/pages/Word.vue';
import Information from '@/pages/Information.vue';
import Notification from '@/pages/Notification.vue';
import Setting from '@/pages/Setting.vue';

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
