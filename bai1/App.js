import * as React from 'react';
import { Text, View, StyleSheet ,TextInput , Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [text, onChangeText] = React.useState('');
  const [showText, onShowTextChange] = React.useState(false);
  return (
    <View style={styles.container}>
      <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text: string) => {
            onChangeText(text);
            onShowTextChange(false);
          }}
          placeholder='Input name'
        ></TextInput>
        <Button
          title="Show name"
          onPress={() => onShowTextChange(!showText)}
        ></Button>
        <Text style={styles.text}>
            {showText ? 'Hello: ' + text : ''}
          </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 10,
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#FAF4B7'
  },
  button: {
    padding: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    backgroundColor: '#c4c4c4'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center'
  }
});
