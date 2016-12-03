import React, {Component, PropTypes} from 'react'

class Counter extends Component{
  static prooTypes = {
    value: PropTypes.string.isRequired,
    onIncClick: PropTypes.func.isRequired,
    onDecClick: PropTypes.func.isRequired
  }

  incOnOdd = () => {
    if(this.props.value % 2){
      this.props.onIncClick();
    }
  }

  onAsyncInc = () => {
    setTimeout(this.props.onIncClick, 1000);
  }

  render() {
    const {onIncClick, onDecClick, value} = this.props;

    return (
      <p>
        Clicked the button:
        <button onClick={onIncClick}>+</button>&nbsp;{value}&nbsp;
        <button onClick={onDecClick}>-</button> &nbsp;
        <button onClick={this.incOnOdd}>add if odd</button> &nbsp;
        <button onClick={this.onAsyncInc}>async add</button> &nbsp;
      </p>
    );
  }
}

export default Counter
