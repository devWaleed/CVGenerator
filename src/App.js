import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Project } from "./Project";
import Role from "./Role";
import data from "./data";

export default function App() {
  return (
    <View style={{ marginHorizontal: "10%" }}>
      <View style={{ flexDirection: "row", paddingVertical: 20 }}>
        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 45 }}>Waleed Baig</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ fontSize: 14 }}>(+92) 334 3954568</Text>
          <Text style={{ fontSize: 14 }}>devwaleed@gmail.com</Text>
          <a
            style={{ color: "#000", fontSize: 14 }}
            href="https://www.linkedin.com/in/waleed-baig-992620bb"
          >
            in/waleed-baig-992620bb
          </a>
        </View>
      </View>
      <View>
        <Text style={{ marginVertical: 10 }}>
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
        {data.jobs.map((item, index) => (
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <Text
              style={{ marginVertical: 5, fontSize: 14, fontWeight: "bold" }}
            >
              {item.organization}
            </Text>
            {item.roles.map((item2, index) => (
              <View
                style={{
                  marginLeft: 10,
                  marginTop: 0,
                }}
              >
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
        {data.jobs.map((item, index) => (
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
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
          Education
        </Text>
        <View style={{ marginLeft: 10, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>
            PAF - Karachi Institute of Economics and Technology
          </Text>
          <Text style={{}}>Bachelor of Science (BS), Computer Science</Text>
          <Text>2014 - 2020</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
          Honors & Awards
        </Text>
        <View style={{ marginLeft: 10 }}>
          <ul style={{ padding: 0, paddingLeft: 20 }}>
            <li>
              <Text>
                Director's Honor Award - Director Computer Science Department,
                PAF KIET
              </Text>
            </li>
            <li>
              <Text>
                Best Performance Award - Fhahroz Iqbal, CEO Avolox Pvt Ltd
              </Text>
            </li>
            <li>
              <Text>
                Best project award for OOP & DBMS - Director Computer Science
                department, PAF KIET
              </Text>
            </li>
          </ul>
        </View>
      </View>
    </View>
  );
}
