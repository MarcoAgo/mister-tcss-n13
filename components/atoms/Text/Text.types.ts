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
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    PARAGRAPH = 'paragraph',
}

export type TextProps = {
    type: TextTypeEnum
    children: ReactNode
    color?: TextColorEnum
    as?: keyof HTMLElementTagNameMap
}