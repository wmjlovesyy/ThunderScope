import React from 'react';
import { IAdjustChannelBlockProps, IBlockState, IBlockProps } from '../../../../interfaces/sidebar/widgets/blockInterfaces';
import './adjustChannelBlock.css';

class AdjustChannelBlock extends React.Component<IBlockProps, IBlockState> {
  constructor(props: IBlockProps) {
    super(props);
    this.state = {
      data: this.props.data as IAdjustChannelBlockProps
    }
   }

  handlePlusButtonClick() {
    this.setState({
      data: {
        channel: this.state.data.channel + 1
      }
    });
    this.forceUpdate();
  }

  handleMinusButtonClick() {
    this.setState({
      data: {
        channel: this.state.data.channel - 1
      }
    });
    this.forceUpdate();
  }

  // TODO: Change color based on which channel is active, only allow channels 1-4 and loop around otherwise
  render() {
    return (
      <div className="AdjustChannelBlockComponent">
        <button 
          className="MinusButton"
          onClick={() => this.handleMinusButtonClick()}>
          -
        </button>
        <label 
          className="AdjustChannelBlockValue"
          style={{color: this.state.data.color}}
        >
          CH{this.state.data.channel}
        </label>
        <button 
          className="PlusButton"
          onClick={() => this.handlePlusButtonClick()}>
          +
        </button>
      </div>
    )
  }
}

export default AdjustChannelBlock;