import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  form: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  errorText: {
    color: "#ff3b30",
    fontSize: 12.5,
    marginTop: 4,
    marginBottom: 8,
    marginLeft: 4,
    opacity: 0.85,
  },

  btnSalvar: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 18,
    shadowColor: "#007AFF",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
  },

  btnSecundario: {
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1.5,
    borderColor: "#C7C7CC",
  },

  btnSecundarioText: {
    color: "#007AFF",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
  },
});
