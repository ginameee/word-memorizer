declare global {
    namespace NodeJS {
        interface Global {
            browser: any
        }
    }
}

interface IMenu {
    id: string;
    title: string;
    path: string;
    iconClassName?: string;
}

export { };