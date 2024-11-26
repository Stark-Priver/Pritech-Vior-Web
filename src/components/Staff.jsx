// Staff.jsx
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Define staff members
const staffMembers = [
  {
    name: "Privertus Cosmas",
    role: "Founder & CEO",
    bio: "Priver is the visionary behind Pritech Vior Camp.",
    image: "src/assets/Screenshot from 2024-11-26 21-04-15.png", // Add the image path here
  },
  {
    name: "Balamu Mariwa",
    role: "Lead Developer",
    bio: "Balamu is a highly skilled developer leading our tech team.",
    image: "src/assets/Screenshot from 2024-11-26 21-04-15.png", // Add the image path here
  },
  {
    name: "Gilberth Mariwa",
    role: "Project Manager",
    bio: "Gilberth ensures everything runs smoothly at the camp.",
    image: "src/assets/gilbert.jpg", // Add the image path here
  },
  // Add more staff members here...
];

const StaffCard = ({ index, name, role, bio, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)} // Animation effect
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full group relative overflow-hidden"
  >
    {/* Content with Glassmorphism Effect on Hover */}
    <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 bg-[rgba(255, 255, 255, 0.2)] backdrop-blur-lg p-6 rounded-xl z-10 group-hover:z-20">
      <img
        src={image} // Display the image here
        alt={`staff_by-${name}`}
        className="w-24 h-24 rounded-full object-cover mb-4 transition-all duration-300 group-hover:scale-110" // Add scale on hover
      />
      <p className="text-white text-lg font-medium">{name}</p>
      <p className="text-secondary text-sm">{role}</p>
    </div>

    {/* Bio with reduced opacity on hover */}
    <p className="text-white tracking-wider text-[18px] transition-opacity duration-300 group-hover:opacity-50">
      {bio}
    </p>
  </motion.div>
);

const Staff = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Meet the Team</p>
          <h2 className={styles.sectionHeadText}>Our Staff</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {staffMembers.map((staff, index) => (
          <StaffCard
            key={staff.name} // Ensure you use a unique key
            index={index} // Pass the index to StaffCard
            {...staff} // Spread the remaining staff details
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Staff, "staff");
