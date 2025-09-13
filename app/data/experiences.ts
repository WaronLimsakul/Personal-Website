import { Experience } from "@/components/custom/experience";

// Example experience data - you can move this to a separate file
export const experiences: Experience[] = [
  {
    companyName: "Urban Mobility Tech Co. Ltd.",
    position: "Software Engineer",
    description:
      "Architected centralized ad-service microservice using Elysia.js and Bun to consolidate 4 distinct ad types from MongoDB, expanding from 5 to 20+ endpoints and handling 120K+ daily requests. Engineered full-stack internal console with Next.js and Ant Design, reducing campaign deployment time from 2 weeks to 5 minutes. Implemented automated ETL pipeline using Apache Spark and Databricks to process 200K+ daily ad engagement records.",
    location: "Bangkok, Thailand", // You can update this if you know the specific location
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-08-31"),
    skills: [
      "Elysia.js",
      "Bun",
      "Next.js",
      "MongoDB",
      "Apache Spark",
      "Databricks",
      "Metabase",
      "SQL",
    ],
  },
  {
    companyName: "Bangkok Youth Opera",
    position: "Full-Stack Developer",
    description:
      "Developed responsive React.js interface and architected Node.js backend, supporting 200K+ requests/hour. Integrated PostgreSQL database management and implemented Thai QR payment system using Omise API to enhance user experience and payment processing capabilities.",
    location: "Bangkok, Thailand",
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-10-31"),
    skills: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Omise API",
      "Payment Integration",
    ],
  },
];
