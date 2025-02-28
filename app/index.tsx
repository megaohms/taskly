import { StyleSheet, View } from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/counter" style={styles.link}>
        Go to /Counter
      </Link>
      <ShoppingListItem name={"Coffee"} />
      <ShoppingListItem name={"Tea"} isCompleted />
      <ShoppingListItem name={"Milk"} isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  link: {
    textAlign: "center",
    marginBottom: 18,
    fontSize: 24,
  },
});
