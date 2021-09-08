import React, { useState } from "react";
import { View, Text } from "react-native";

export default function JobCard() {
  const [projects, setProjects] = useState([
    {
      name: "JazzCash",
      link: "1234",
      description: 1234,
    },
  ]);

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Aciano Technologies
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 13 }}>
        Team Lead Mobile Apps Division (React Native)
      </Text>
      <Text style={{ marginTop: 5 }}>Feb 2020 - December 2021 (2 years)</Text>
      <Text style={{ marginTop: 5 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Projects</Text>
        {projects.map((item, index) => (
          <Project key={index} {...item} />
        ))}
      </View>
    </View>
  );
}

export function Project({ name, link, description }) {
  return (
    <View style={{ marginTop: 5 }}>
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
      <Text>{link}</Text>
      <Text>{description}</Text>
    </View>
  );
}
