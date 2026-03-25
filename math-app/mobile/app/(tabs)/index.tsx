import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import * as Clipboard from "expo-clipboard";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [solution, setSolution] = useState("");
  const [loading, setLoading] = useState(false);

  // 📸 Take Photo
  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Permission Required", "Allow camera access");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setSolution("");
    }
  };

  // 🧠 Solve API
  const solve = async () => {
    if (!image) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", {
      uri: image,
      name: "photo.jpg",
      type: "image/jpeg",
    } as any);

    try {
      const res = await axios.post(
        "http://10.247.208.64:5000/solve",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (!res.data.solution) {
        setSolution("No solution found");
      } else {
        setSolution(res.data.solution);
      }
    } catch (err) {
      setSolution("❌ Connection failed. Check server & WiFi.");
    }

    setLoading(false);
  };

  // 📋 Copy Solution
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(solution);
    Alert.alert("Copied", "Solution copied");
  };

  // 🧹 Format Output
  const formatSolution = (text: string) => {
    const parts = text.split("Steps:");
    return {
      answer: parts[0],
      steps: parts[1] || "",
    };
  };

  const { answer, steps } = formatSolution(solution);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>📸 MathLens</Text>
        <Text style={styles.subtitle}>Solve with AI</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Upload */}
        {!image ? (
          <TouchableOpacity style={styles.uploadBox} onPress={takePhoto}>
            <Ionicons name="camera" size={40} color="#6366f1" />
            <Text style={styles.uploadText}>Tap to scan question</Text>
          </TouchableOpacity>
        ) : (
          <View>
            <Image source={{ uri: image }} style={styles.image} />

            <TouchableOpacity onPress={takePhoto}>
              <Text style={styles.retake}>Retake Photo</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Solve Button */}
        {image && !solution && (
          <TouchableOpacity
            style={styles.button}
            onPress={solve}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <Text style={styles.buttonText}>Solve</Text>
                <Ionicons name="sparkles" size={18} color="#fff" />
              </>
            )}
          </TouchableOpacity>
        )}

        {/* Result */}
        {solution !== "" && (
          <View style={styles.card}>
            <Text style={styles.resultTitle}>Final Answer</Text>
            <Text style={styles.answer}>{answer}</Text>

            {steps !== "" && (
              <>
                <Text style={styles.stepsTitle}>Steps</Text>
                <Text style={styles.steps}>{steps}</Text>
              </>
            )}

            <TouchableOpacity
              style={styles.copyBtn}
              onPress={copyToClipboard}
            >
              <Text style={styles.copyText}>Copy</Text>
              <Ionicons name="copy-outline" size={16} color="#6366f1" />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },

  header: {
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#64748b",
    fontSize: 12,
  },

  container: {
    padding: 20,
  },

  uploadBox: {
    height: 200,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#cbd5e1",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  uploadText: {
    marginTop: 10,
    color: "#64748b",
  },

  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },

  retake: {
    textAlign: "center",
    marginTop: 10,
    color: "#6366f1",
  },

  button: {
    backgroundColor: "#6366f1",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
  },

  resultTitle: {
    fontWeight: "bold",
  },

  answer: {
    fontSize: 18,
    marginTop: 5,
  },

  stepsTitle: {
    marginTop: 10,
    fontWeight: "bold",
  },

  steps: {
    marginTop: 5,
    color: "#334155",
    lineHeight: 22,
  },

  copyBtn: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },

  copyText: {
    color: "#6366f1",
  },
});