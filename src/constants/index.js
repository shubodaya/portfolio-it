import {
  mobile,
  backend,
  creator,
  web,
  reactjs,
  javascript,
  git,
  docker,
  siem,
  fire,
  azure,
  pen,
  itarmi,
  sonic,
  owasp,
  senti,
  log,
  ccna,
  net,
  sec,
  az900,
  cc,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "IT Service Desk & ITSM",
    icon: web,
  },
  {
    title: "Endpoint & M365 Support",
    icon: mobile,
  },
  {
    title: "Identity & Access (AD/RBAC)",
    icon: backend,
  },
  {
    title: "Network Troubleshooting",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Azure Fundamentals",
    icon: azure,
  },
  {
    name: "SIEM & Monitoring",
    icon: siem,
  },
  {
    name: "Firewall Operations",
    icon: fire,
  },
  {
    name: "VPN & Connectivity",
    icon: pen,
  },
  {
    name: "Automation (Python)",
    icon: javascript,
  },
  {
    name: "Case Management",
    icon: git,
  },
];

const experiences = [
  {
    title: "IT Support Engineer (Freelance)",
    company_name: "Itarmi IT Services",
    icon: itarmi,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Provided onsite and remote support for 25+ incidents, restoring services within SLA.",
      "Deployed and configured routers, switches, and access points; verified cabling, ports, and stability.",
      "Troubleshot LAN/WAN connectivity and device issues and validated post-change health.",
      "Maintained technical documentation and change records for audits and stakeholders.",
    ],
  },
  {
    title: "Technical Support Engineer",
    company_name: "SonicWall Technologies",
    icon: sonic,
    iconBg: "#E6DEDD",
    date: "May 2021 - Aug 2023",
    points: [
      "Delivered 2nd/3rd line support for P1-P3 incidents in a 24x7 enterprise environment within SLA.",
      "Managed cases in Salesforce and partnered with engineering via Jira to reproduce issues and deliver fixes.",
      "Integrated AD/Azure AD via LDAP/RADIUS and implemented MFA across LAN, VLANs, and SSL VPN.",
      "Configured IPSec VPNs, SD-WAN, and HA; troubleshot failovers using logs and traffic analysis.",
      "Investigated hardware/firmware issues, coordinated hotfixes, and processed RMAs.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "CCNA (200-301)",
    name: "CCNA",
    designation: "Cisco",
    company: "Issued Dec 2025",
    image: ccna,
  },
  {
    testimonial: "CompTIA Network+ (N10-009)",
    name: "Network+",
    designation: "CompTIA",
    company: "Issued Mar 2025",
    image: net,
  },
  {
    testimonial: "CompTIA Security+ (SY0-701)",
    name: "Security+",
    designation: "CompTIA",
    company: "Issued Feb 2025",
    image: sec,
  },
  {
    testimonial: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    name: "AZ-900",
    designation: "Microsoft",
    company: "Issued Mar 2025",
    image: az900,
  },
  {
    testimonial: "(ISC)2 Certified in Cybersecurity (CC)",
    name: "CC",
    designation: "(ISC)2",
    company: "Issued Oct 2024",
    image: cc,
  },
];

const projects = [
  {
    name: "Enterprise Home Lab Services",
    description:
      "Deployed Windows and Linux servers for DNS, DHCP, AD, file, and web services in a controlled lab environment.",
    tags: [
      {
        name: "windows",
        color: "blue-text-gradient",
      },
      {
        name: "active-directory",
        color: "green-text-gradient",
      },
      {
        name: "linux",
        color: "pink-text-gradient",
      },
    ],
    image: owasp,
    source_code_link: "https://github.com/shubodaya",
  },
  {
    name: "Azure Sentinel Attack Lab",
    description:
      "Built Azure networks and VMs to capture attack traffic and analyze alerts in Microsoft Sentinel.",
    tags: [
      {
        name: "azure",
        color: "blue-text-gradient",
      },
      {
        name: "sentinel",
        color: "green-text-gradient",
      },
      {
        name: "monitoring",
        color: "pink-text-gradient",
      },
    ],
    image: senti,
    source_code_link: "https://github.com/shubodaya",
  },
  {
    name: "Python Log Analyzer",
    description:
      "Parsed logs to detect security events and trigger real-time alerts with reporting and notifications.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "automation",
        color: "green-text-gradient",
      },
      {
        name: "alerting",
        color: "pink-text-gradient",
      },
    ],
    image: log,
    source_code_link: "https://github.com/shubodaya",
  },
];

export { services, technologies, experiences, testimonials, projects };
