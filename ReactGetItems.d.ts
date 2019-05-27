/// <reference types="react" />
import * as React from 'react';
import { IReactGetItemsProps } from './IReactGetItemsProps';
import { IReactGetItemsState } from './IReactGetItemsState';
export default class ReactGetItems extends React.Component<IReactGetItemsProps, IReactGetItemsState> {
    constructor(props: IReactGetItemsProps, state: IReactGetItemsState);
    componentDidMount(): void;
    render(): React.ReactElement<IReactGetItemsProps>;
}
