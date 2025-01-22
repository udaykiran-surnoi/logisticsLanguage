import React, { useContext, useTransition } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LanguageContext } from "../LanguageContext";

const WelcomeScreen = () => {

  const {t}=useTransition();
  const{ language } = useContext(LanguageContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("welcome")}</Text>
      <Text style={styles.message}>{t("message")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    color: "#666",
  },
});

export default WelcomeScreen;