interface IMenu {
    id: string;
    title: string;
    path: string;
    iconClassName?: string;
}

export const menuList: IMenu[] = [
    { id: 'word', title: '나의단어', path: '/word', iconClassName: 'el-icon-edit' },
    { id: 'notification', title: '공지사항', path: '/notification', iconClassName: 'el-icon-bell' },
    { id: 'setting', title: '설정', path: '/setting', iconClassName: 'el-icon-setting' },
    { id: 'infomation', title: '정보', path: '/information', iconClassName: 'el-icon-info' },
];