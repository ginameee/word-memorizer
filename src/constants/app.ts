import * as manifest from '@/manifest.json';

export const MENU_LIST: IMenu[] = [
    { id: 'word', title: '단어장', path: '/word', iconClassName: 'el-icon-edit' },
    { id: 'notification', title: '공지사항', path: '/notification', iconClassName: 'el-icon-bell' },
    { id: 'setting', title: '설정', path: '/setting', iconClassName: 'el-icon-setting' },
    { id: 'infomation', title: '정보', path: '/information', iconClassName: 'el-icon-info' },
];

export const APP_NAME = manifest.name;