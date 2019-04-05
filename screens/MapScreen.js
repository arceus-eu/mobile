import React from "react";
import { StyleSheet, WebView, View, Text } from "react-native";

export default class MapScreen extends React.Component {
  state = {
    someProp: 0
  };

  static navigationOptions = {
    title: "Map"
  };

  // Get data from front-end
  _onMessage(e) {
    let { data } = e.nativeEvent;
    const { doPost } = JSON.parse(data);

    // Setting some property which should go to WebView later
    this.setState({
      someProp: Date.now()  // TODO:  for some reason for the first time, 
                            //        we get 0, instead of a proper timestamp
    });

    // This is just some 'trigger' I set in Map.html, 
    // so POST is being triggered when we press GET button
    // in Map. html 
    if (doPost === true) {
      this._postMessage();
    }

    console.log('Data from WebView: ', data);
  }

  // Post data to front-end
  _postMessage() {
    console.log('POST has Started!');
    // A bit dirty, but it works hehe
    const func = `(function () {
    setSomethingOnFrontEnd(${this.state.someProp});
  })();`;

    this.webview.postMessage(func);
    console.log('POST has Finished!');
  }

  render() {
    // Static html
    const mapHTML = require('./Map.html');

    return (
      <View style={styles.container}>
        <WebView
          ref={(x) => { this.webview = x; }}

          source={mapHTML}
          onMessage={this._onMessage.bind(this)}
          
          originWhitelist={['*']}
          setJavaScriptEnabled={true}
          javaScriptEnabledAndroid={true}
          startInLoadingState={true}
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
