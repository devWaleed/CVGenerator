import React from "react";
import { View, Text } from "react-native";

export function Project({ name, link, description, skills = [] }) {
  return (
    <View>
      <a
        target={"_blank"}
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          color: "#000",
          fontSize: 16,
          fontFamily: "Georgia",
        }}
        href={link}
      >
        {name}
      </a>
      <Text style={{}}>{description}</Text>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        {skills.map((item, index) => (
          <Text
            style={{
              paddingVertical: 3,
              paddingHorizontal: 7,
              borderRadius: 5,
              backgroundColor: "orange",
              color: "#000",
              marginRight: 5,
              fontSize: 11,
              fontStyle: "italic",
              fontWeight: "600",
            }}
            key={index}
          >
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}
