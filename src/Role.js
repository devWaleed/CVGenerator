import React, { useState } from "react";
import { View, Text } from "react-native";

import {
  Timeline,
  Content,
  ContentYear,
  ContentBody,
  Description,
} from "vertical-timeline-component-react";

export default function Role({ title, description, projects, duration }) {
  return (
    <View style={{ marginVertical: 5 }}>
      <Text
        style={{
          fontFamily: "Open Sans",
          fontWeight: "bold",
          fontSize: 12,
          color: "rgba(10, 102, 194, 1)",
        }}
      >
        {title}
      </Text>
      <Text style={{ marginTop: 5, fontWeight: "600" }}>{duration}</Text>
      <Text style={{ marginTop: 5 }}>{description}</Text>
    </View>
  );
}
