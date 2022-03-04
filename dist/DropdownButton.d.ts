import { default as React } from 'react';
import type { Tag, Role, SemanticTag, SemanticRole } from '@nodestrap/element';
import { TogglerActiveProps } from '@nodestrap/indicator';
import { ButtonIconProps } from '@nodestrap/button-icon';
import { PopupPlacement, PopupMiddleware, PopupStrategy, OrientationName, OrientationVariant, DropdownCloseType, DropdownProps } from '@nodestrap/dropdown';
export type { DropdownCloseType };
export interface DropdownButtonProps<TCloseType = DropdownCloseType> extends Omit<ButtonIconProps, 'size'>, TogglerActiveProps<TCloseType>, DropdownProps<HTMLButtonElement, TCloseType> {
    buttonOrientation?: OrientationName;
    label?: string;
    buttonChildren?: React.ReactNode;
    dropdownTag?: Tag;
    dropdownRole?: Role;
    dropdownSemanticTag?: SemanticTag;
    dropdownSemanticRole?: SemanticRole;
}
export declare function DropdownButton<TCloseType = DropdownCloseType>(props: DropdownButtonProps<TCloseType>): JSX.Element;
export declare namespace DropdownButton {
    var prototype: any;
}
export { DropdownButton as default };
export type { OrientationName, OrientationVariant };
export type { PopupPlacement, PopupMiddleware, PopupStrategy };
