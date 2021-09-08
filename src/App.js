import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import JobCard, { Project } from "./JobCard";

export default function App() {
  const [jobs, setJobs] = useState([
    {
      organization: "Aciano Technologies",
      roles: [
        {
          title: "Team Lead Mobile Apps Division (React Native)",
          description:
            "Leading a team of React Native developers. I am responsible for management of my team which includes requirements discussion, task management, hiring new resources as needed and training each individual where necessary.",
          duration: "Oct 2020 - Present - 1 yr",
          projects: [],
        },
        {
          title: "Senior Software Engineer (JazzCash Mobile App division)",
          description:
            "As a senior software engineer in JazzCash team, I was assigned to migrate old code base of JazzCash app to latest stable version. We updated whole app to the latest version of Xamarin Forms for both Android and iOS platforms. I also contributed in the development of few new modules which were later deployed to production successfully.",
          duration: "Feb 2020 - Sep 2020 - 8 mos",
          projects: [
            {
              name: "JazzCash - Money Transfer, Mobile Load & Payments - Apps on Google Play",
              link: "https://play.google.com/store/apps/details?id=com.techlogix.mobilinkcustomer&hl=en_US&gl=US",
              description:
                "JazzCash is Pakistan’s #1 mobile account trusted by millions of Pakistanis. Download JazzCash app to transfer money to anyone anywhere, pay utility bills such as electricity, internet, gas & water, \n get mobile recharge and make payments to hundreds of companies and institutes all across Pakistan in just a few taps.",
              skills: ["C# .NET", "Xamarin Forms", "API Integration"],
            },
          ],
        },
      ],
    },
    {
      organization: "Avolox Pvt Ltd",
      roles: [
        {
          title: "Full Stack Team Lead (.NET, React, React Native)",
          description:
            "Led a team of multiple developers for web and mobile application development. I contributed as a full stack application developer mainly using .NET and React.js technologies. My other responsibilities included team building and product UX development.",
          duration: "Sep 2018 - Jan 2020 - 1 yr 5 mos",

          projects: [
            {
              name: "iTecknologi - App on Google Play",
              link: "https://play.google.com/store/apps/details?id=com.avolox.iteck&hl=en_US&gl=US",
              description:
                "iTecknologi Group is an innovation driven business group focuses on bringing leading technologies to rapidly developing customer base in Pakistan. The group consists of 6 member companies operating in six countries",
              skills: [
                "C# .NET",
                "ASP.NET Core Web API",
                "SignalR",
                "Google Maps",
                "React Native",
                "Lots of Maths",
              ],
            },
            {
              name: "Salaam Takaful - App on Google Play",
              link: "https://play.google.com/store/apps/details?id=com.avolox.salaamtakaful&hl=en_US&gl=US",
              description:
                "Does keeping track of your health feel unnecessary with life being so complicated and busy? Gone are the days! Now you can stay at the top of your health activities. Salaam Takaful Limited’s “Salaam App,” offers you some of the world's best hi-tech...                ",
              skills: [
                "C# .NET",
                "ASP.NET Core Web API",
                "SignalR",
                "React Native",
              ],
            },
            {
              name: "iTecknologi | Mobile Daily Report",
              link: "http://iteck.pk/d/rndmlnk1",
              description:
                "Does keeping track of your health feel unnecessary with life being so complicated and busy? Gone are the days! Now you can stay at the top of your health activities. Salaam Takaful Limited’s “Salaam App,” offers you some of the world's best hi-tech...                ",
              skills: [
                "C# .NET",
                "ASP.NET Core Web API",
                "SignalR",
                "Vue.js",
                "Google Maps",
                "Lots of Maths",
              ],
            },
          ],
        },
        {
          title: "Full Stack Developer (.NET & Vue.js)",
          description:
            "I contributed to the development of few web applications in this role which were mainly based on ASP .NET and other related technologies",
          duration: "Feb 2018 - Aug 2018 - 7 mos",
          projects: [
            {
              name: "Paperbucketmdb - Easy campaign management with analytics and AI",
              link: "https://www.paperbucketmdb.com/",
              description:
                "Was part of the early development cycle and contributed to some major parts of the product.",
              skills: [
                "C# .NET",
                "ASP.NET Core Web API",
                "SignalR",
                "Vue.js",
                "Google Maps",
                "Lots of Maths",
              ],
            },
          ],
        },
      ],
    },
  ]);

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
                <JobCard
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
