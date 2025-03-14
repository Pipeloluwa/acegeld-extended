export interface ISubMenu{
    navValueLocal: string;
    menu: string;
    urlPath: string;
    subMenus: {
        subMenu: string;
        id: string;
    }[]
}