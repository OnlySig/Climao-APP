import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import mockCities from "../../data/cities.json";

export default function SearchCities() {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState(mockCities);

  useEffect(() => {
    if (!search.length) return setCities(mockCities);
    setCities((prevItem) => {
      return prevItem.filter((city) =>
        city.city.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search]);

  const handleClick = () => {};
  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          placeholder="Digite a cidade"
          placeholderTextColor="#fff"
        />
        <Ionicons name="search" color="#fff" size={24} onPress={handleClick} />
      </View>
      <FlatList
        data={cities}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cardContainer}>
            <Image
              source={require("../../assets/images/cloud.png")}
              width={27}
              height={24}
            />
            <Text style={styles.txtCard}>{item.city.replace(", ", " - ")}</Text>
            <Text style={styles.txtTempCard}>{item.temp}º</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.city}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  inputContainer: {
    boxSizing: "border-box",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ffffff30",
    paddingHorizontal: 16,
    marginBottom: 40,
    height: 40,
    borderRadius: 24,
  },
  input: {
    width: "90%",
    color: "#fff",
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffffff30",
    borderRadius: 16,
  },
  txtCard: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: 400,
    fontFamily: "Montserrat_400Regular",
  },
  txtTempCard: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: 800,
    fontFamily: "Montserrat_700Bold",
  },
});
