import * as React from 'react';
import { Text, View, StyleSheet , Button , TextInput} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
export default function App() {
const [username, onChangeUsername] = React.useState('')
const [password, onChangePassword] = React.useState('')
  return (
    <View style={styles.content}>
      <View style={styles.contentBox}>
        <Text style={styles.textTitle}>Login</Text>
        <TextInput placeholder='Username' style={styles.textInput} value={username} onChangeText={onChangeUsername}></TextInput>
        <TextInput placeholder='Password' style={styles.textInput} value={password} onChangeText={onChangePassword} secureTextEntry={true}></TextInput>
        <Button title='Login' onPress={() => alert('Success')}></Button>
      </View>
    </View>
  );
}
const getFormValue = (username: string, password: string) => {
  const formValue = {
    username,
    password
  }
  console.log(formValue);
}
const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBox: {
    width: 350,
    height: 400,
    backgroundColor: '#B7C4CF',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    backgroundColor: '#EEE3CB',
    borderRadius: 5,
    width: 250,
    height: 50,
    marginVertical: 20,
    paddingHorizontal: 10
  }
});
