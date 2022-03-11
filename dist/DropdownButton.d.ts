import { default as React } from 'react';
import type { ElementProps } from '@nodestrap/element';
import { TogglerActiveProps } from '@nodestrap/indicator';
import { ButtonIconProps } from '@nodestrap/button-icon';
import { PopupPlacement, PopupMiddleware, PopupStrategy, OrientationName, OrientationVariant, DropdownCloseType, DropdownProps } from '@nodestrap/dropdown';
export type { DropdownCloseType };
export declare type BasicButtonIconProps = Pick<ButtonIconProps, 'icon' | 'iconPosition' | 'onClick' | 'label' | 'tabIndex'>;
export interface DropdownButtonProps<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownCloseType> extends BasicButtonIconProps, TogglerActiveProps<TCloseType>, Omit<DropdownProps<TElement, TCloseType>, 'onClick'> {
    buttonRef?: React.Ref<HTMLButtonElement>;
    buttonOrientation?: OrientationName;
    button?: React.ReactComponentElement<any, ElementProps>;
    buttonChildren?: React.ReactNode;
}
export declare function DropdownButton<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownCloseType>(props: DropdownButtonProps<TElement, TCloseType>): JSX.Element;
export declare namespace DropdownButton {
    var prototype: any;
}
export { DropdownButton as default };
export type { OrientationName, OrientationVariant };
export type { PopupPlacement, PopupMiddleware, PopupStrategy };
