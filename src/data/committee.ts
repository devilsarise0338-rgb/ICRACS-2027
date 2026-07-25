export interface CommitteeMember {
  id: string;
  name: string;
  designation: string;
  institution?: string;
  country?: string;
  image?: string | null;
  email?: string;
  linkedin?: string;
  biography?: string;
  initials: string;
}

export interface CommitteeSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  members: CommitteeMember[];
}

function getInitials(name: string): string {
  const parts = name.replace(/^(Mr\.|Dr\.|Prof\.|Mrs\.)\s*/i, '').split(' ').filter(Boolean);
  if (parts.length === 0) return 'IC';
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const honorarypatronMembers: CommitteeMember[] = [
  {
    id: "mrharisinghdirector-0",
    name: "Mr. Hari Singh Director",
    designation: "Director",
    institution: "Poornima Group",
    country: "Jaipur",
    image: null,
    initials: getInitials("Mr. Hari Singh Director")
  },
  {
    id: "mrmkmshahdirector-1",
    name: "Mr. MKM Shah Director",
    designation: "Director",
    institution: "Poornima Group",
    country: "Jaipur",
    image: null,
    initials: getInitials("Mr. MKM Shah Director")
  }
];

export const honorarychairMembers: CommitteeMember[] = [
  {
    id: "drbrijbhushangupta-0",
    name: "Dr. Brij Bhushan Gupta",
    designation: "Board of governors",
    institution: "IEEE CT Society",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Brij Bhushan Gupta")
  }
];

export const generalchairMembers: CommitteeMember[] = [
  {
    id: "drdharamsingh-0",
    name: "Dr. Dharam Singh",
    designation: "Professor of Computer Science",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Dr. Dharam Singh")
  }
];

export const conferencechairMembers: CommitteeMember[] = [
  {
    id: "profdrdineshgoyal-0",
    name: "Prof. (Dr.) Dinesh Goyal",
    designation: "Professor and Prinicipal",
    institution: "PIET",
    country: undefined,
    image: null,
    initials: getInitials("Prof. (Dr.) Dinesh Goyal")
  }
];

export const programchairMembers: CommitteeMember[] = [
  {
    id: "drbudeshkanwar-0",
    name: "Dr. Budesh Kanwar",
    designation: "HOD",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Budesh Kanwar")
  }
];

export const organizingchairMembers: CommitteeMember[] = [
  {
    id: "drshiprabhatia-0",
    name: "Dr. Shipra Bhatia",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Shipra Bhatia")
  },
  {
    id: "dradityapundir-1",
    name: "Dr. Aditya Pundir",
    designation: "Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Aditya Pundir")
  }
];

export const organizingcommitteeMembers: CommitteeMember[] = [
  {
    id: "drajaymaurya-0",
    name: "Dr. Ajay Maurya",
    designation: "Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Ajay Maurya")
  },
  {
    id: "drumeshkumar-1",
    name: "Dr. Umesh Kumar",
    designation: "Associate Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Umesh Kumar")
  },
  {
    id: "drpriyamathur-2",
    name: "Dr. Priya Mathur",
    designation: "Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Priya Mathur")
  },
  {
    id: "drebtasamahmadsiddiqui-3",
    name: "Dr. Ebtasam Ahmad Siddiqui",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Dr. Ebtasam Ahmad Siddiqui")
  },
  {
    id: "mrkamalsaini-4",
    name: "Mr. Kamal Saini",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Kamal Saini")
  },
  {
    id: "mrpunitkumar-5",
    name: "Mr. Punit Kumar",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Punit Kumar")
  },
  {
    id: "mrmohnishsachdeva-6",
    name: "Mr. Mohnish Sachdeva",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Mohnish Sachdeva")
  },
  {
    id: "msbhawanapurohit-7",
    name: "Ms. Bhawana Purohit",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Ms. Bhawana Purohit")
  },
  {
    id: "mskrishnagupta-8",
    name: "Ms. Krishna Gupta",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Ms. Krishna Gupta")
  },
  {
    id: "mrvaibhavshekhawat-9",
    name: "Mr. Vaibhav Shekhawat",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Vaibhav Shekhawat")
  },
  {
    id: "mrvikaskumar-10",
    name: "Mr. Vikas Kumar",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Vikas Kumar")
  },
  {
    id: "msbhawanakumari-11",
    name: "Ms. Bhawana Kumari",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Ms. Bhawana Kumari")
  },
  {
    id: "mranuragananddubey-12",
    name: "Mr. Anurag Anand Dubey",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Anurag Anand Dubey")
  },
  {
    id: "mrbharatthathera-13",
    name: "Mr. Bharat Thathera",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Bharat Thathera")
  },
  {
    id: "mrrohitkumar-14",
    name: "Mr. Rohit Kumar",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Rohit Kumar")
  },
  {
    id: "mrgirdharilal-15",
    name: "Mr. Girdhari Lal",
    designation: "Assistant Professor",
    institution: "Dept. of AI&DS",
    country: "PIET",
    image: null,
    initials: getInitials("Mr. Girdhari Lal")
  }
];

export const technicalprogramcommitteeMembers: CommitteeMember[] = [
  {
    id: "drvalentinaebalas-0",
    name: "Dr. Valentina E. Balas",
    designation: "Full Professor",
    institution: "Department of Automatics",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Valentina E. Balas")
  },
  {
    id: "drjoaquimjorge-1",
    name: "Dr. Joaquim Jorge",
    designation: "UNESCO Chair on AI & XR",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Dr. Joaquim Jorge")
  },
  {
    id: "profseeramramakrishna-2",
    name: "Prof. Seeram Ramakrishna",
    designation: "Vice president research strategy",
    institution: "Professor",
    country: undefined,
    image: null,
    initials: getInitials("Prof. Seeram Ramakrishna")
  },
  {
    id: "profsanmurugesan-3",
    name: "Prof. San Murugesan",
    designation: "Adjunct professor",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Prof. San Murugesan")
  },
  {
    id: "proframanmunnikrishnan-4",
    name: "Prof. Raman M. Unnikrishnan",
    designation: "Dean professor Fellow IEEE",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Prof. Raman M. Unnikrishnan")
  },
  {
    id: "drnaveensharma-5",
    name: "Dr. Naveen Sharma",
    designation: "Professor",
    institution: "SE department",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Naveen Sharma")
  },
  {
    id: "profrkjoshi-6",
    name: "Prof. R.K. Joshi",
    designation: "Department of CSE",
    institution: "IIT Bombay",
    country: undefined,
    image: null,
    initials: getInitials("Prof. R.K. Joshi")
  },
  {
    id: "drpuneetgoyal-7",
    name: "Dr. Puneet Goyal",
    designation: "Assistant Professor",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Dr. Puneet Goyal")
  },
  {
    id: "drmauroconti-8",
    name: "Dr. Mauro Conti",
    designation: "Professor",
    institution: "university of Padua",
    country: "Italy",
    image: null,
    initials: getInitials("Dr. Mauro Conti")
  },
  {
    id: "profalbertdipanda-9",
    name: "Prof. Albert Dipanda",
    designation: "Professor",
    institution: "university of Bourgogne",
    country: "France",
    image: null,
    initials: getInitials("Prof. Albert Dipanda")
  },
  {
    id: "profkokouyetongnon-10",
    name: "Prof. Kokou Yetongnon",
    designation: "Professor",
    institution: "university of Bourgogne",
    country: "France",
    image: null,
    initials: getInitials("Prof. Kokou Yetongnon")
  },
  {
    id: "drxiaozhigao-11",
    name: "Dr. Xiao Zhi Gao",
    designation: "Professor",
    institution: "LUT University",
    country: "Finland",
    image: null,
    initials: getInitials("Dr. Xiao Zhi Gao")
  },
  {
    id: "drghasiramverma-12",
    name: "Dr. Ghasi Ram Verma",
    designation: "Professor",
    institution: "University of Rhode Island",
    country: "USA",
    image: null,
    initials: getInitials("Dr. Ghasi Ram Verma")
  },
  {
    id: "drvaibhavkatewa-13",
    name: "Dr. Vaibhav Katewa",
    designation: "University of California",
    institution: undefined,
    country: "USA",
    image: null,
    initials: getInitials("Dr. Vaibhav Katewa")
  },
  {
    id: "drsugamsharma-14",
    name: "Dr. Sugam Sharma",
    designation: "Iowa State University",
    institution: undefined,
    country: "USA",
    image: null,
    initials: getInitials("Dr. Sugam Sharma")
  },
  {
    id: "drsoujanyaporia-15",
    name: "Dr. Soujanya Poria",
    designation: "NT University",
    institution: undefined,
    country: "Singapore",
    image: null,
    initials: getInitials("Dr. Soujanya Poria")
  },
  {
    id: "profksubramanian-16",
    name: "Prof. K. Subramanian",
    designation: "IEEE Delhi Section",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Prof. K. Subramanian")
  },
  {
    id: "profarunsharma-17",
    name: "Prof. Arun Sharma",
    designation: "Managing Director - IGDTUW",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Prof. Arun Sharma")
  }
];

export const publicitychairMembers: CommitteeMember[] = [
  {
    id: "drmarcinpaprzycki-0",
    name: "Dr. Marcin Paprzycki",
    designation: "Polish Academy of Science",
    institution: undefined,
    country: "Poland",
    image: null,
    initials: getInitials("Dr. Marcin Paprzycki")
  },
  {
    id: "drankitagarwal-1",
    name: "Dr. Ankit Agarwal",
    designation: "Northernwest University",
    institution: "U.S.",
    country: "USA",
    image: null,
    initials: getInitials("Dr. Ankit Agarwal")
  },
  {
    id: "msalkarani-2",
    name: "Ms. Alka Rani",
    designation: "PIET",
    institution: "Jaipur",
    country: undefined,
    image: null,
    initials: getInitials("Ms. Alka Rani")
  },
  {
    id: "drhiteshmehta-3",
    name: "Dr. Hitesh Mehta",
    designation: "Founder Director.",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Dr. Hitesh Mehta")
  },
  {
    id: "gajendradeshpande-4",
    name: "Gajendra Deshpande",
    designation: "Founder And Managing Director",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Gajendra Deshpande")
  }
];

export const financechairMembers: CommitteeMember[] = [
  {
    id: "drudaypratapsingh-0",
    name: "Dr. Uday Pratap Singh",
    designation: "Associate Professor Department of AI & DS",
    institution: "PIET",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Uday Pratap Singh")
  },
  {
    id: "drpradeepsinghbhati-1",
    name: "Dr. Pradeep Singh Bhati",
    designation: "Lecturer Selection Grade",
    institution: "GPC Kota",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Pradeep Singh Bhati")
  }
];

export const internationaladvisorycommitteeMembers: CommitteeMember[] = [
  {
    id: "manfredfredschindler-0",
    name: "Manfred (Fred) Schindler",
    designation: "2024 IEEE Fellow",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Manfred (Fred) Schindler")
  },
  {
    id: "ravikumararya-1",
    name: "Ravi Kumar Arya",
    designation: "Director",
    institution: "Xiangshan Laboratory Wireless Group",
    country: undefined,
    image: null,
    initials: getInitials("Ravi Kumar Arya")
  },
  {
    id: "drwitoldpedrycz-2",
    name: "Dr. Witold Pedrycz",
    designation: "Professor",
    institution: "University of Alberta",
    country: "Canada",
    image: null,
    initials: getInitials("Dr. Witold Pedrycz")
  },
  {
    id: "drjanuszkacprzyk-3",
    name: "Dr. Janusz Kacprzyk",
    designation: "Professor",
    institution: "Warsaw",
    country: "Poland",
    image: null,
    initials: getInitials("Dr. Janusz Kacprzyk")
  },
  {
    id: "drpieropbonissone-4",
    name: "Dr. Piero P. Bonissone",
    designation: "IEEE Life Fellow",
    institution: undefined,
    country: undefined,
    image: null,
    initials: getInitials("Dr. Piero P. Bonissone")
  },
  {
    id: "drbadrulhishamahmad-5",
    name: "Dr. Badrul Hisham Ahmad",
    designation: "Professor",
    institution: "UTeM",
    country: "Malaysia",
    image: null,
    initials: getInitials("Dr. Badrul Hisham Ahmad")
  },
  {
    id: "drjeduardolugo-6",
    name: "Dr. J. Eduardo Lugo",
    designation: "Universit\u00e9 de Montreal",
    institution: undefined,
    country: "Canada",
    image: null,
    initials: getInitials("Dr. J. Eduardo Lugo")
  }
];

export const nationaladvisorycommitteeMembers: CommitteeMember[] = [
  {
    id: "drveerpratapmeena-0",
    name: "Dr. Veerpratap Meena",
    designation: "Assistant Professor",
    institution: "NIT Jamshedpur",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Veerpratap Meena")
  },
  {
    id: "drnilanjandey-1",
    name: "Dr. Nilanjan Dey",
    designation: "Professor",
    institution: "Techno International New Town",
    country: "Kolkata",
    image: null,
    initials: getInitials("Dr. Nilanjan Dey")
  },
  {
    id: "drdeepakgarg-2",
    name: "Dr. Deepak Garg",
    designation: "Professor and Vice Chancellor",
    institution: "SR University",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Deepak Garg")
  },
  {
    id: "drakashsaxena-3",
    name: "Dr. Akash Saxena",
    designation: "Professor and Data Scientist",
    institution: "Stanford University",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Akash Saxena")
  },
  {
    id: "drghanshyamsingh-4",
    name: "Dr. Ghanshyam Singh",
    designation: "Professor",
    institution: "MNIT Jaipur",
    country: undefined,
    image: null,
    initials: getInitials("Dr. Ghanshyam Singh")
  }
];

export const committeeSections: CommitteeSection[] = [
  {
    id: "honorarypatron",
    title: "Honorary Patron",
    description: "Members of the Honorary Patron.",
    icon: "Crown",
    members: honorarypatronMembers
  },
  {
    id: "honorarychair",
    title: "Honorary Chair",
    description: "Members of the Honorary Chair.",
    icon: "Star",
    members: honorarychairMembers
  },
  {
    id: "generalchair",
    title: "General Chair",
    description: "Members of the General Chair.",
    icon: "Users",
    members: generalchairMembers
  },
  {
    id: "conferencechair",
    title: "Conference Chair",
    description: "Members of the Conference Chair.",
    icon: "Layers",
    members: conferencechairMembers
  },
  {
    id: "programchair",
    title: "Program Chair",
    description: "Members of the Program Chair.",
    icon: "BookOpen",
    members: programchairMembers
  },
  {
    id: "organizingchair",
    title: "Organizing Chair",
    description: "Members of the Organizing Chair.",
    icon: "Settings",
    members: organizingchairMembers
  },
  {
    id: "organizingcommittee",
    title: "Organizing Committee",
    description: "Members of the Organizing Committee.",
    icon: "Users",
    members: organizingcommitteeMembers
  },
  {
    id: "technicalprogramcommittee",
    title: "Technical Program Committee",
    description: "Members of the Technical Program Committee.",
    icon: "Layers",
    members: technicalprogramcommitteeMembers
  },
  {
    id: "publicitychair",
    title: "Publicity Chair",
    description: "Members of the Publicity Chair.",
    icon: "Globe",
    members: publicitychairMembers
  },
  {
    id: "financechair",
    title: "Finance Chair",
    description: "Members of the Finance Chair.",
    icon: "Building2",
    members: financechairMembers
  },
  {
    id: "internationaladvisorycommittee",
    title: "International Advisory Committee",
    description: "Members of the International Advisory Committee.",
    icon: "Globe2",
    members: internationaladvisorycommitteeMembers
  },
  {
    id: "nationaladvisorycommittee",
    title: "National Advisory Committee",
    description: "Members of the National Advisory Committee.",
    icon: "MapPin",
    members: nationaladvisorycommitteeMembers
  }
];

export const getAllMembers = () => committeeSections.flatMap(s => s.members);
