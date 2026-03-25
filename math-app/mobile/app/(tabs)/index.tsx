import { View, Button, Text, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [solution, setSolution] = useState("");

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const solve = async () => {
    if (!image) return;

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

      setSolution(res.data.solution);
    } catch (err) {
      console.log(err);
      setSolution("Error connecting to backend");
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Button title="Take Photo" onPress={takePhoto} />

      {image && (
        <>
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 200, marginVertical: 10 }}
          />
          <Button title="Solve" onPress={solve} />
        </>
      )}

      <Text style={{ marginTop: 20 }}>{solution}</Text>
    </View>
  );
}