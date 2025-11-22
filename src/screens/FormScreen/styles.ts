import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },

  input: {
    backgroundColor: "#f8f8f8",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  textarea: {
    height: 80,
  },

  btnSalvar: {
    backgroundColor: "#4b7bec",
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  btnSecundario: {
    marginTop: 12,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#e6e9ef",
  },

  btnSecundarioText: {
    color: "#333",
    textAlign: "center",
    fontSize: 15,
  },
});
