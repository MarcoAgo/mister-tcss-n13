export enum SidebarStatusEnum {
    NONE = 'none',
    HOVER = 'hover',
    CLICK = 'click'
}

export type SidebarStatus = SidebarStatusEnum

export type SidebarNavigationProps = {}

export type MenuButtonProps = {
    status: SidebarStatus
    handleMenuClick: () => void
    handleMouseEvent: (status: SidebarStatusEnum) => void 
}