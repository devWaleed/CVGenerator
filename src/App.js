import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import JobCard from "./JobCard";

export default function App() {
  const [jobs, setJobs] = useState([1]);

  return (
    <View style={{ paddingHorizontal: "10%" }}>
      <View style={{ flexDirection: "row", paddingVertical: 20 }}>
        <View
          style={{
            flex: 0.8,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 45 }}>Your Name Here</Text>
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>+12345 6789101</Text>
          <Text>devwaleed@gmail.com</Text>
        </View>
      </View>
      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      {jobs.map((item, index) => (
        <JobCard key={index} />
      ))}
    </View>
  );
}
