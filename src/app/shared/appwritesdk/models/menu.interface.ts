export interface IMenu {
    $id?: string,
    text: string,
    link: string,
    icon?: string,
    heading?: boolean,
    submenus?: [],
    nr_rend?: number,
}

export function compareMenus(m1: IMenu, m2: IMenu) {
    const compare = m1.nr_rend! - m2.nr_rend!
    if (compare > 0) {
        return 1;
    } else if(compare < 0) {
        return -1
    } else {
        return 0
    }
}