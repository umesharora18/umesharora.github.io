import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import cineplexImg from "../assets/company/cineplex.png";
import stempoweredImg from "../assets/company/stempowered.png";


const experiences = [
    
    {
        title: "IT Intern",
        company_name: "STEMPowered",
        date: "Internship | Sep 2023- April 2024",
        iconBg: "#E6DEDD",
        icon: stempoweredImg,
        points: [
            "Resolved technical issues for remote users, achieving a 40% reduction in reported incidents, highlighting problem - solving and troubleshooting abilities.",
        " Provided dedicated technical support to educators and students in STEM programs, addressingover 50 inquiries weekly with a customer - centric approach.",
            " Contributed to a 20 % improvement in website performance through proactive maintenance and optimization efforts, demonstrating initiative and strategic thinking.",
            " Collaborated on a project resulting in a 15 % growth in program enrollment through effectivemarketing strategies.",
            " Utilized ServiceNow for incident ticket tracking and resolution, demonstrating proficiency in IT service management platforms.",
            " Provided technical support for various mobile devices, including Android and iOS, ensuring smooth functioning of IT systems and applications.",
            " Demonstrated proficiency in troubleshooting issues related to Windows 10 to maintain operational efficiency.",
          
        ],
    },
    {
        title: "Cast Member",
        company_name: "Cineplex",
        date: "Part-time | 2023 - current",
        iconBg: "#383E56",
        icon: cineplexImg,
        points:
            [
            "Provided exceptional customer service through various channels, including in-person interactions and customer inquiries.",
            "Managed multiple tasks efficiently, including ticketing, concessions, and customer service, demonstrating adaptability in a dynamic cinema environment.",
            "Processed over 150 ticketing transactions per shift during peak hours, showcasing operational efficiency and accuracy.",
            "Collaborated within a large team to achieve operational goals and maintain a positive work environment, emphasizing teamwork and cooperation.",
            "Utilized problem - solving skills to address issues and ensure smooth operations during shifts.",
            "Demonstrated strong organizational skills in managing tasks independently and ensuring effective operations during busy periods.",
        ],
    },
];

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[70%] h-[70%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};
export default SectionWrapper(Experience, "work");
