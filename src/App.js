import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Project } from "./Project";
import Role from "./Role";
import data from "./data";

export default function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  return (
    <View style={{ marginHorizontal: "10%" }}>
      <View style={{ flexDirection: "row", paddingVertical: 20 }}>
        <View
          style={{
            flex: 0.8,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 45 }}>Waleed Baig</Text>
        </View>
        <View
          style={{
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>0334 3954568</Text>
          <Text>devwaleed@gmail.com</Text>
        </View>
      </View>
      <View>
        <Text>
          Experienced individual with a background of startup team management
          and over 5 years of full stack software development. Seeking to
          leverage my leadership expertise in order to maximize development
          efficiency through agile methodologies.
        </Text>
      </View>

      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
          Experience
        </Text>
        {jobs.map((item, index) => (
          <View style={{ marginTop: 10 }}>
            <Text
              style={{ marginVertical: 5, fontSize: 14, fontWeight: "bold" }}
            >
              {item.organization}
            </Text>
            {item.roles.map((item2, index) => (
              <View style={{ marginLeft: 10, marginTop: 0 }}>
                <Role
                  key={index}
                  title={item2.title}
                  description={item2.description}
                  projects={item2.projects}
                  duration={item2.duration}
                />
              </View>
            ))}
          </View>
        ))}
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
          Projects
        </Text>
        {jobs.map((item, index) => (
          <View style={{ marginTop: 10 }}>
            {item.roles.map((item2, index) => (
              <View style={{ marginLeft: 10, marginTop: 0 }}>
                {item2.projects.map((item3, index) => (
                  <View style={{ marginVertical: 10 }}>
                    <Project
                      name={item3.name}
                      link={item3.link}
                      description={item3.description}
                      skills={item3.skills}
                    />
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}
