import React, { Component } from 'react';
import { Button, View } from '@blankapp/ui';
import SliceScreen from '../../components/SliceScreen';

class ButtonTypesOutline extends Component {
  static navigationOptions = {
    title: 'Slice',
    header: null,
  };

  render() {
    const buttonPanelStyle = {
      flexWrap: 'wrap',
      flexDirection: 'row',
    };
    const buttonMarginStyle = {
      marginRight: 4,
    };
    return (
      <SliceScreen>
        <View style={buttonPanelStyle}>
          <Button style={buttonMarginStyle} styleName="outline-primary" text="Button" />
          <Button style={buttonMarginStyle} styleName="outline-accent" text="Button" />
        </View>
      </SliceScreen>
    );
  }
}

export default ButtonTypesOutline;
