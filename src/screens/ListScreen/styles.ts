import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eef2f7",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },

  inputPesquisa: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  itemContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },

  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  itemSubtitle: {
    fontSize: 14,
    color: "#555",
  },

  itemObs: {
    marginTop: 5,
    fontSize: 13,
    fontStyle: "italic",
    color: "#666",
  },
});
