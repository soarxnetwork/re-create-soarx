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
    title: "Mentorship from engineering leaders at SoarX",
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
  "Lead the SoarX community within your campus",
  "Conduct Hackathons and assessment tests or/and plug in with existing events",
  "Establish communication between SoarX & the coding communities",
  "Network with the SoarX Campus Ambassador community by sharing resources, training material and feedback",
  "Drive registrations for ongoing client hackathons, coding events and practice sessions",
];

export const itemsFaqDsa2 = [
  {
    id: "1",
    question: "What is SoarX and what does it do?",
    answer:
      "SoarX is an organization that is committed to matching developers to the right opportunities across the globe. The mission of SoarX is to measure and organize the world’s technical skill data and to change the landscape of technical hiring across the globe. SoarX provides learning resources, practice questions, and interview preparation material so that the right candidate meets with the right opportunity. It also provides companies with technical recruitment tools and helps them to find the most suitable candidate for their requirements.",
  },
  {
    id: "2",
    question: "What is the SoarX Campus Ambassador Program?",
    answer:
      "SoarX Campus Ambassadors (HECAs) is a community of students from campuses across the globe who act as liaisons in connecting their peers to numerous opportunities available through SoarX. It is an interactive program where an individual learns management, leadership, and marketing skills from the industry’s best and gets a chance to work along with our team.",
  },
  {
    id: "3",
    question: "Why should I join the SoarX Campus Ambassador program?",
    answer:
      "You should join the SoarX Campus Ambassador program because you get to work along with the coolest team in the tech industry. You will get the much-needed exposure that will enhance your communication, management, and technical skills by managing events, and using your communications skills to effectively spread awareness about the platform within your campus.\n\nAs a HECA, you will be loaded with perks like a Certificate of Appreciation/Letter of recommendation, mentorship from the leaders at SoarX, networking opportunities, recognition of active Campus ambassadors on the company’s website, corporate mock interviews.",
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
      "Just 2 simple steps!\n1. Fill the details in the form\n2. If you meet our eligibility criteria, there will be an assessment test to get to know you better.\n\nVoila! As soon as you pass our assessment test, give yourself a pat on your back for officially becoming a SoarX Campus Ambassador!",
  },
  {
    id: "6",
    question:
      "How many hours do I need to spend per week to be a successful HECA?",
    answer:
      "We expect you to spend 2-3 hours per week to be a successful HECA and to be able to derive maximum benefit from this program.",
  },
  {
    id: "7",
    question: "What will be my responsibilities as a HECA?",
    answer:
      "1. Be the face of HackerEarth and create awareness about HackerEarth in your campus.\n2. Be a part of the HECA community for networking, sharing resources, training, and feedback.\n3. Lead a HackerEarth community within your campus (e.g., HackerEarth chapter or HackerEarth club) and use that channel as a digital tool for HackerEarth awareness and promotion.\n4. Help establish communication between HackerEarth & your college's coding communities, clubs, and faculties/TPOs.\n5. Onboard as many peers as possible for hackathons, coding events, leaderboard and practice sessions. You can even conduct a full-fledged programming challenge on the HackerEarth platform.\n6. Plug in HackerEarth as an associate in any technical fest that your college conducts or/and conduct your own pre-placement challenge on your campus through HackerEarth.",
  },
  {
    id: "8",
    question:
      "Do I get a certificate at the end of my tenure with HackerEarth?",
    answer:
      "Yes, after successfully completing your tenure with us, you will get a certificate from HackerEarth. If you perform well, we will also give you a letter of recommendation.",
  },
  {
    id: "9",
    question: "What is the duration of the HECA program?",
    answer: "The duration of the HECA program is 6 months.",
  },
  {
    id: "10",
    question: "Are there any cash incentives? Will I get paid?",
    answer:
      "No, we do not have any cash incentives, however, you will be loaded with perks like a Certificate of Appreciation/Letter of recommendation, mentorship from the leaders at HackerEarth, networking opportunities, recognition of active Campus ambassadors on the company’s website, corporate mock interviews.",
  },
  {
    id: "11",
    question:
      "As some universities and colleges are proceeding with their academic courses in an online mode, how will the activities provided to the HECA be carried out?",
    answer:
      "All the HECAs will be given a responsibility sheet where they will map and update their progress against each responsibility. All these responsibilities can be carried out online as well.",
  },
  {
    id: "12",
    question: "Who can I contact if I have more questions?",
    answer:
      "Be it questions or new ideas, we would love to work together. You can write to us at: heca@hackerearth.com",
  },
];
