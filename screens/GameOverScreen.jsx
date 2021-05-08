import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={{ ...styles.text, fontWeight: "bold" }}>
        The Game is Over!
      </Text>
      <Text style={{ ...styles.text, fontStyle: "italic" }}>
        Your phone guessed it in{" "}
        <Text style={{ color: "red" }}>{props.guessRounds}</Text> times
      </Text>
      <View style={styles.homeButton}>
        <Button
          title="NEW GAME"
          onPress={() => props.startGameHandler(null)}
          color="blue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeButton: {
    marginTop: 20,
  },
  text: { marginVertical: 10, fontSize: 20 },
});
export default GameOverScreen;
