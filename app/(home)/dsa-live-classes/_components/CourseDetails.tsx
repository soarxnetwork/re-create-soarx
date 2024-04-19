import { BsCameraReels } from "react-icons/bs";
import { LuAirplay } from "react-icons/lu";
import { ImPause } from "react-icons/im";
import { LuArrowUp01 } from "react-icons/lu";
import { ImEmbed2 } from "react-icons/im";
import { PiNumberTwoBold } from "react-icons/pi";
import { ImFileText2 } from "react-icons/im";
import { ImFeed } from "react-icons/im";
import { FaJava } from "react-icons/fa";
import { BsFillDiagram3Fill } from "react-icons/bs";
import { RiMiniProgramFill } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { MdQuiz } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { ImTicket } from "react-icons/im";

export const courseDetails1 = [
  {
    icon: <BsCameraReels />,
    description: "LIVE Doubt Class Every Saturday [9-11pm]",
  },
  {
    icon: <LuAirplay />,
    description: "Mode of the Course Hybrid mode [LIVE + REC]",
  },
  {
    icon: <LuArrowUp01 />,
    description: "No. Of Lectures 50+",
  },
  {
    icon: <ImPause />,
    description: "Class Recording Provided Yes",
  },
  {
    icon: <ImEmbed2 />,
    description: "Doubt & Revision Classes 24+ Sessions",
  },
  {
    icon: <PiNumberTwoBold />,
    description: "Course Validity 2 Year",
  },
  {
    icon: <ImFileText2 />,
    description: "Programming Language Used: C++/Java",
  },
  {
    icon: <ImFeed />,
    description: "LIVE Revision Class Every Tuesday [9-11pm]",
  },
];
export const courseDetails2 = [
  {
    icon: <FaJava />,
    description: "Learn C++/Java from Scratch",
  },
  {
    icon: <BsFillDiagram3Fill />,
    description:
      "C++/Java OOPS Concept: Inheritance, Polymorphism, Encapsulation & Abstraction",
  },
  {
    icon: <BsFillDiagram3Fill />,
    description: "UML Diagrams in Depth",
  },
  {
    icon: <RiMiniProgramFill />,
    description: "SOLID Principles [An Interview Perspective]",
  },
  {
    icon: <BsPersonWorkspace />,
    description: "Introduction to Design Patterns",
  },
  {
    icon: <MdDesignServices />,
    description: "Creational Design Patterns [With Examples]",
  },
  {
    icon: <SiMaterialdesignicons />,
    description: "Structural Design Patterns [With Examples]",
  },
  {
    icon: <ImTicket />,
    description: "Behavioural Design Patterns [With Examples]",
  },
  {
    icon: <MdQuiz />,
    description: "Quizzes, Exercise for Assessment",
  },
  {
    icon: <FaQuestionCircle />,
    description: "Solving Real World Design Problems",
  },
];
export const coursesModules = [
  {
    name: "C++ Crash Course",
    topics: [{ name: "Basics of C++ Programming", duration: "3 hr" }],
  },
  {
    name: "Java Crash Course",
    topics: [{ name: "Basics of Java Programming", duration: "3 hours" }],
  },
  {
    name: "OOPS Concepts",
    topics: [
      { name: "Encapsulation", duration: "30 mins" },
      { name: "Polymorphism", duration: "30 mins" },
      { name: "Inheritance", duration: "30 mins" },
      { name: "Abstraction", duration: "30 mins" },
    ],
  },
  {
    name: "Object Oriented Design",
    topics: [
      { name: "Introduction to OOD", duration: "10 mins" },
      { name: "Introduction to UML", duration: "10 mins" },
      { name: "Types of UML", duration: "10 mins" },
      { name: "UseCase Diagram", duration: "1 hour" },
      { name: "Class Diagram", duration: "1 hour" },
      { name: "Sequence Diagram", duration: "1 hour" },
      { name: "Activity Diagram", duration: "1 hour" },
    ],
  },
  {
    name: "Object Oriented Design Principles",
    topics: [
      { name: "Introduction to SOLID Principles", duration: "10 min" },
      { name: "SRP, OCP, LSP, ISP & DIP", duration: "2.5 hours" },
    ],
  },
  {
    name: "Design Patterns",
    topics: [
      { name: "Basics of Deisgn Patterns", duration: "10 min" },
      { name: "Classification of Design Patterns", duration: "10 mins" },
      { name: "Creational Design patterns", duration: "6 hours" },
      { name: "Structural Design patterns", duration: "6 hours" },
      { name: "Behavioural Design patterns", duration: "6 hours" },
    ],
  },
  {
    name: "Real World Design Problems",
    topics: [{ name: "Solving Multiple LLD Problems", duration: "6 hours" }],
  },
];
