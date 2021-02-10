import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native'

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTfReady: false,
    };
  }
 
  async componentDidMount() {
    // Wait for tf to be ready.
    await tf.ready();
    // Signal to the app that tensorflow.js can now be used.
    this.setState({
      isTfReady: true,
    });


    const modelJSON = require('./assets/models/flat_u_seg_nn/model.json');
    const modelWeights = require('./assets/models/flat_u_seg_nn/weights.bin');
    
    const model = await tf.loadLayersModel(bundleResourceIO(modelJSON, modelWeights));
    model.summary();
    this.setState({ model })
  }
 
 
  render() {
    return <Text>I am Ready!!!</Text>
  }
}


export default function App() {
  return (
    <View style={styles.container}>
      <TestComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
