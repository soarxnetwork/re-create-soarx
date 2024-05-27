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
    question: "What is SoarX Network and What does it do?",
    answer:
      "SoarX Network is a nationwide tech community of college students dedicated to igniting the potential of students through engaging events, sessions, and hackathons.",
  },
  {
    id: "2",
    question: "How can I become a part of SoarX?",
    answer:
      "You can become a part of SoarX by applying for our Campus Lead or Community Ambassador programs.",
  },
  {
    id: "3",
    question: "What are the benefits of joining SoarX?",
    answer:
      "Joining SoarX offers opportunities for networking with industry professionals, skill development, recognition, rewards, and more..",
  },
  {
    id: "4",
    question: "What is the Community Ambassador Program?",
    answer:
      "The Community Ambassador Program is designed for students who want to represent SoarX at their college or university. Ambassadors organize events, engage with the community, and promote SoarX initiatives on campus.",
  },
  {
    id: "5",
    question: "What is the Chapter Leader Program?",
    answer:
      "The Chapter Leader Program is for students who want to establish and lead a SoarX chapter at their college or university. Leaders coordinate events, manage a team, and drive the growth of the SoarX community on campus.",
  },
  {
    id: "6",
    question:
      "What is the duration of the programs?",
    answer:
      "The duration varies for different programs. The Chapter Lead program is typically for one year, while the Community Ambassador program is for six months.",
  },
  {
    id: "7",
    question: "Who is eligible to participate?",
    answer:
      "Students enrolled in college or university are eligible to apply for our programs.",
  },
  {
    id: "8",
    question:
      "How can I contact SoarX for further inquiries?",
    answer:
      "You can contact us via email at team@soarx.tech or drop a WhatsApp message at +91 87086 86261.",
  },
  
];
