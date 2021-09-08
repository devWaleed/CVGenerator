import React, { useState } from "react";
import { View, Text } from "react-native";

export default function JobCard({ title, description, projects, duration }) {
  return (
    <View style={{ marginVertical: 5 }}>
      <Text style={{ fontWeight: "bold", fontSize: 12 }}>{title}</Text>
      <Text style={{ marginTop: 5 }}>{duration}</Text>
      <Text style={{ marginTop: 5 }}>{description}</Text>
      {/* {projects?.length > 0 && (
        <View style={{ marginTop: 20, marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Projects</Text>
          {projects?.map((item, index) => (
            <View style={{ marginTop: 10, flexDirection: "row" }}>
              <Project key={index} {...item} />
            </View>
          ))}
        </View>
      )} */}
    </View>
  );
}

export function Project({ name, link, description, skills = [] }) {
  return (
    <View>
      <a
        target={"_blank"}
        style={{
          fontWeight: "bold",
          textDecoration: "none",
          color: "#000",
          fontSize: 15,
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
              backgroundColor: "#141414",
              color: "#fff",
              marginRight: 5,
              fontSize: 10,
              fontStyle: "italic",
              fontWeight: "bold",
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
