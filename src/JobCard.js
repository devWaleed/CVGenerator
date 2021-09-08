import React, { useState } from "react";
import { View, Text } from "react-native";

export default function JobCard() {
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" +
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" +
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  );

  const [projects, setProjects] = useState([
    {
      name: "Example Project",
      link: "https://play.google.com/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      skills: ["C#", ".NET", "Xamarin Forms", "API Integration"],
    },
  ]);

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Organization Name Here
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 13 }}>Your Role Here</Text>
      <Text style={{ marginTop: 5 }}>Feb 2020 - December 2021 (2 years)</Text>
      <Text style={{ marginTop: 5 }}>{description}</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "bold" }}>Projects</Text>
        {projects.map((item, index) => (
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {index + 1}.{" "}
            </Text>
            <Project key={index} {...item} />
          </View>
        ))}
      </View>
    </View>
  );
}

export function Project({ name, link, description, skills = [] }) {
  return (
    <View>
      <a
        target={"_blank"}
        style={{ fontWeight: "bold", textDecoration: "none", color: "#000" }}
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
              borderRadius: 10,
              backgroundColor: "orange",
              color: "#000",
              marginRight: 5,
              fontSize: 12,
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
