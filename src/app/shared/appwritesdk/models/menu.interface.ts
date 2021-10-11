export interface IMenu {
    $id?: string,
    text: string,
    link: string,
    icon?: string,
    heading?: boolean,
    submenus?: []
}