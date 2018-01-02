import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder
} from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        position.setValue({ x: gestureState.dx, y:gestureState.dy });
      },
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder, position };
  }

  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.state.position.getLayout() }
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        )
      }
      // return this.props.renderCard(item);
    });
  }

  render() {
    // debugger
    // console.log(...this.state.panResponder.panHandlers);

    return(
      <View>
        { this.renderCards() }
      </View>
    );
  }
}


export default Deck;
