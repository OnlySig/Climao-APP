import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <Image source={require("../assets/images/LogoClima.png")} />
      <Image source={require("../assets/images/lpImage.png")} />
      <Text style={styles.title}>Boas-vindas!</Text>
      <TouchableOpacity style={styles.btnJoin}>
        <Text style={styles.txtJoin}>Entrar</Text>
        <Ionicons name="arrow-forward" size={20} color={"#01080E"} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 64,
    padding: 32,
  },
  title: {
    fontSize: 25,
    color: "#fff",
    fontFamily: "Montserrat_400Regular",
  },
  btnJoin: {
    backgroundColor: "#7693FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 8,
    paddingVertical: 8,
    borderRadius: 32,
  },
  txtJoin: {
    color: "#01080E",
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "Montserrat_600SemiBold",
  },
});
