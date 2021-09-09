import React, { useState } from "react";
import { View, Text } from "react-native";

export default function Role({ title, description, projects, duration }) {
  return (
    <View style={{ marginVertical: 5 }}>
      <Text style={{ fontWeight: "600", fontSize: 12 }}>{title}</Text>
      <Text style={{ marginTop: 5 }}>{duration}</Text>
      <Text style={{ marginTop: 5 }}>{description}</Text>
    </View>
  );
}
