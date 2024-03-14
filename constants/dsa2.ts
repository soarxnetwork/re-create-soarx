export const yearsDsa2 = [2023, 2024, 2025, 2026];

export const formDataDsa2 = [
  {
    label: "Fullname",
    inputProps: {
      type: "text",
      id: "fullname",
      className: "w-full p-2",
    },
  },
  {
    label: "College email ID",
    subLabel: "(if unavailable, please tell the alternate email address)",
    inputProps: {
      type: "text",
      id: "collegeEmailID",
      className: "w-full p-2",
    },
  },
  {
    label: "Name of the college",
    inputProps: {
      type: "text",
      id: "collegeName",
      className: "w-full p-2",
    },
  },
  {
    label: "Location (State) of your college",
    inputProps: {
      type: "text",
      id: "collegeLocation",
      className: "w-full p-2",
    },
  },
  {
    label: "Stream",
    inputProps: {
      type: "text",
      id: "stream",
      className: "w-full p-2",
    },
  },
  {
    label: "Graduation year",
    selectOptions: yearsDsa2.map((year) => ({
      key: year,
      value: year,
    })),
  },
  {
    label: "Are you a part of any coding club in your college?",
    subLabel: "If yes, please mention which ones.",
    inputProps: {
      type: "text",
      id: "codingClub",
      className: "w-full p-2",
    },
  },
  {
    label: "What is the strength of STEM students in your college?",
    inputProps: {
      type: "text",
      id: "stemStudents",
      className: "w-full p-2",
    },
  },
];

export const advantageDsa2 = [
  {
    icon: "😀",
    title: "Certificate of Appreciation",
    color: "#fca5a5",
  },
  {
    icon: "🥰",
    title: "Mentorship from engineering leaders at HackerEarth",
    color: "#fcd34d",
  },
  {
    icon: "😊",
    title: "Certificate of Appreciation",
    color: "#bef264",
  },
  {
    icon: "🤩",
    title: "Certificate of Appreciation",
    color: "#7dd3fc",
  },
  {
    icon: "😏",
    title: "Certificate of Appreciation",
    color: "#d8b4fe",
  },
];

export const responsibilityDsa2 = [
  "Lead the HackerEarth community within your campus",
  "Conduct Hackathons and assessment tests or/and plug in with existing events",
  "Establish communication between HackerEarth & the coding communities",
  "Network with the HackerEarth Campus Ambassador community by sharing resources, training material and feedback",
  "Drive registrations for ongoing client hackathons, coding events and practice sessions",
];

export const itemsFaqDsa2 = [
  {
    id: "1",
    question: "What is HackerEarth and what does it do?",
    answer:
      "HackerEarth is an organization that is committed to matching developers to the right opportunities across the globe. The mission of HackerEarth is to measure and organize the world’s technical skill data and to change the landscape of technical hiring across the globe. HackerEarth provides learning resources, practice questions, and interview preparation material so that the right candidate meets with the right opportunity. It also provides companies with technical recruitment tools and helps them to find the most suitable candidate for their requirements.",
  },
  {
    id: "2",
    question: "What is the HackerEarth Campus Ambassador Program?",
    answer:
      "HackerEarth Campus Ambassadors (HECAs) is a community of students from campuses across the globe who act as liaisons in connecting their peers to numerous opportunities available through HackerEarth. It is an interactive program where an individual learns management, leadership, and marketing skills from the industry’s best and gets a chance to work along with our team.",
  },
  {
    id: "3",
    question: "Why should I join the HackerEarth Campus Ambassador program?",
    answer:
      "You should join the HackerEarth Campus Ambassador program because you get to work along with the coolest team in the tech industry. You will get the much-needed exposure that will enhance your communication, management, and technical skills by managing events, and using your communications skills to effectively spread awareness about the platform within your campus.\n\nAs a HECA, you will be loaded with perks like a Certificate of Appreciation/Letter of recommendation, mentorship from the leaders at HackerEarth, networking opportunities, recognition of active Campus ambassadors on the company’s website, corporate mock interviews.",
  },
  {
    id: "4",
    question: "Who is eligible to participate?",
    answer:
      "If you are a coder by heart, would love to meet all our coding wizards across the globe, have good connections within the student fraternity, and want to enhance your leadership skills, you’ve come to the right place!\n\nStudents who have technical acumen and come from relevant academic backgrounds are welcome to participate.",
  },
  {
    id: "5",
    question: "How do I apply?",
    answer:
      "Just 2 simple steps!\n1. Fill the details in the form\n2. If you meet our eligibility criteria, there will be an assessment test to get to know you better.\n\nVoila! As soon as you pass our assessment test, give yourself a pat on your back for officially becoming a HackerEarth Campus Ambassador!",
  },
];
