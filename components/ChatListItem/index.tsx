import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChatRoom } from "../../types";
import styles from "./style";
import chatRooms from "../../data/ChatRooms";
import moment from "moment";

function ChatListItem({ chatRoom }) {
  // return (
  //   <View>
  //     <Text>{chatRoom.lastMessage.content}</Text>
  //   </View>
  // );
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.lefContainer}>
          <Image
            source={{ uri: chatRoom.users.imageUri }}
            style={styles.avatar}
          />

          <View style={styles.midContainer}>
            <Text style={styles.username}>{chatRoom.users.name}</Text>
            <Text numberOfLines={2} style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>

        <Text style={styles.time}>
          {chatRoom.lastMessage &&
            moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default ChatListItem;
