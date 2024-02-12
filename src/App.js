import React, { useState, useEffect } from "react";
import Chatbot from "react-simple-chatbot";

export default function App() {
  const [jobInfo, setJobInfo] = useState({});
  useEffect(() => {
    // Log jobInfo to check the value
    console.log("jobInfo:", jobInfo);
  }, [jobInfo]);

  const steps = [
    {
      id: "Greet",
      message: "Hello! How can we assist you with your hiring process today?",
      trigger: "AskPosition",
    },
    {
      id: "AskPosition",
      message: "What position are you hiring for?",
      trigger: "GetPosition",
    },
    {
      id: "GetPosition",
      user: true,
      trigger: "AskSkills",
      validator: (value) => {
        setJobInfo((prevInfo) => ({ ...prevInfo, position: value }));
        return true;
      },
    },
    {
      id: "AskSkills",
      message: ({ previousValue }) =>
        `What specific skills are required for the ${previousValue}position?`,
      trigger: "GetSkills",
    },
    {
      id: "GetSkills",
      user: true,
      trigger: "AskExperience",
      validator: (value) => {
        setJobInfo((prevInfo) => ({ ...prevInfo, skills: value }));
        return true;
      },
    },
    {
      id: "AskExperience",
      message: "How many years of experience are needed ",
      trigger: "GetExperience",
    },
    {
      id: "GetExperience",
      user: true,
      trigger: "AskEducation",
      validator: (value) => {
        setJobInfo((prevInfo) => ({ ...prevInfo, experience: value }));
        return true;
      },
    },
    {
      id: "AskEducation",
      message: "What is the minimum education requirement for the position?",
      trigger: "GetEducation",
    },
    {
      id: "GetEducation",
      user: true,
      trigger: "AskLocation",
      validator: (value) => {
        setJobInfo((prevInfo) => ({ ...prevInfo, education: value }));
        return true;
      },
    },
    {
      id: "AskLocation",
      message: "What location is the position based in?",
      trigger: "GetLocation",
    },
    {
      id: "GetLocation",
      user: true,
      trigger: "AskRemote",
      validator: (value) => {
        setJobInfo((prevInfo) => ({ ...prevInfo, location: value }));
        return true;
      },
    },
    {
      id: "AskRemote",
      message: "Is the  position remote (yes/no)",
      trigger: "GetRemote",
    },
    {
      id: "GetRemote",
      user: true,
      // end: true,
      trigger: "End",
      validator: (value) => {
        setJobInfo((prevInfo) => ({ ...prevInfo, remote: value }));
        return true;
      },
    },
    {
      id: "End",
      message:
        "Thank you for providing the information. We'll get back to you!",
      trigger: "SaveRequirement",
    },
    {
      id: "SaveRequirement",
      message: "Your requirement has been saved successfully!",
      trigger: "Restart",
    },
    {
      id: "Restart",
      message: "Do you want to start over?",
      trigger: "RestartOptions",
    },
    {
      id: "RestartOptions",
      options: [
        { value: "yes", label: "Yes", trigger: "Greet" },
        { value: "no", label: "No", end: true },
      ],
    },
  ];

  return <Chatbot steps={steps} />;
}
