import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder
} from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {
      },
      onPanResponderRelease: () => {
        // console.log('two');
      }
    });

    this.state = { panResponder }
  }
  renderCards() {
    return this.props.data.map(item => {
      // console.log('yo');
      return this.props.renderCard(item);
    });
  }

  render() {
    // debugger
    // console.log(...this.state.panResponder.panHandlers);

    return(
      <View {...this.state.panResponder.panHandlers}>
        { this.renderCards() }
      </View>
    );
  }
}


export default Deck;
