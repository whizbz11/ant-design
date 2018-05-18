import * as React from 'react';
import RcDrawer from 'rc-drawer-menu';
import { isNull, isNumber } from 'util';

export interface IDrawerProps {
  className: string;
  bodyStyle: string;
  mask: boolean;
  maskClosable: boolean;
  visible: boolean;
  getContainer: () => HTMLElement;
  width: number | string;
  placement?: 'left' | 'right';
  destroyOnClose: boolean;
  onCancel: () => void;
}
export interface IDrawerState {
  visible?: boolean;
  width?: number | string;
  placement?: 'left' | 'right';
}

export default class Drawer extends React.Component<
  IDrawerProps,
  IDrawerState
> {
  static getDerivedStateFromProps(
    nextProps: IDrawerProps,
    prevState: IDrawerState,
  ) {
    const nextState: IDrawerState = {};
    if (nextProps.visible && nextProps.visible !== prevState.visible) {
      nextState.visible = nextProps.visible;
    }
    if (nextProps.width && nextProps.width !== prevState.width) {
      if (isNumber(nextProps.width)) {
        nextState.width = `${nextProps.width}px`;
      } else {
        nextState.width = nextProps.width;
      }
    }
    if (nextProps.placement && nextProps.placement !== prevState.placement) {
      nextState.placement = nextProps.placement;
    }
    return nextState;
  }
  constructor(props: IDrawerProps) {
    super(props);
    this.state = {
      visible: false,
      width: '400px',
      placement: 'right',
    };
  }
  public onMaskClick = () => {
    if (isNull(this.props.visible)) {
      this.props.onCancel();
      return;
    }
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <RcDrawer
        iconChild={false}
        open={this.state.visible}
        width={this.state.width}
        onMaskClick={this.onMaskClick}
        placement={this.state.placement}
      >
        {this.props.children}
      </RcDrawer>
    );
  }
}
