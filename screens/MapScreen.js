import React from "react";
import { StyleSheet, WebView, View } from "react-native";

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  postMessage() {
    this.refs.webview.postMessage(“Hello from RN”);
  }

  onMessage(message) {
    console.log(JSON.parse(message.nativeEvent.data));
  }

  const mapHTML = require('../components/Map/Map.html'); 

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref="webview"
          source={{ html: this.mapHTML }}
          onMessage={this.onMessage}
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
    backgroundColor: "#fff"
  }
});
