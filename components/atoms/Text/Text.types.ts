import { ReactNode } from 'react';
export enum TextTypeEnum {
    HEADING1 = 'heading1',
    HEADING2 = 'heading2',
    HEADING3 = 'heading3',
    HEADING4 = 'heading4',
    HEADING5 = 'heading5',
    SUBTITLE = 'subtitle',
    BODY = 'body'
}

export enum TextColorEnum {
    LIGHT = 'light',
    DARK = 'dark',
    TEXT = 'TEXT',
}

export type TextProps = {
    type: TextTypeEnum
    children: ReactNode
    color?: TextColorEnum
    as?: keyof HTMLElementTagNameMap
    className?: string
}