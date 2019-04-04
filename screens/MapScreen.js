import React from 'react';
import { StyleSheet, WebView, View } from 'react-native';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ html: '<h1>Hello world</h1>' }}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
