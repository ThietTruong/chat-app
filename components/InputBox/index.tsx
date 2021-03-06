import React, { useState } from "react";
import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
const InputBox = () => {
  const [message, setMessage] = useState();
  const onMicrophonePress = () => {
    console.warn("On Microphone");
  };
  const onSendPress = () => {
    console.warn(`Sending: ${message} `);
  };
  const onPress = () => {
    if (!message) {
      onMicrophonePress();
    } else {
      onSendPress();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          placeholder={"Type a message"}
          style={styles.textIput}
          multiline
          numberOfLines={3}
          value={message}
          onChangeText={(message) => setMessage(message)}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
        {!message && (
          <Fontisto name="camera" size={24} color="grey" style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={24} color="grey" />
          ) : (
            <MaterialIcons name="send" size={24} color="gray" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default InputBox;
