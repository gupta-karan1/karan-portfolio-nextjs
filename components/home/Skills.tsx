import React from "react";
const skills = [
  {
    title: "Technical Skills",
    list: [
      "Figma",
      "Adobe PhotoShop",
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe XD",
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Angular",
      "Ionic",
      "React",
      "React Native",
      "NextJS",
      "TailwindCSS",
      "MongoDB",
      "Firebase",
      "TypeScript",
      "DaisyUI",
      "Material UI",
      "Agile",
      "Scrum",
      "Git",
      "GitHub",
      "Trello",
    ],
  },
  {
    title: "Non-Technical Skills",
    list: [
      "User Research",
      "User Centred Design",
      "User Testing",
      "Wireframing",
      "Prototyping",
      "Information Architecture",
      "Interaction Design",
      "Visual Design",
      "Journey Mapping",
      "Content Writing",
      "Critical Thinking",
      "Problem Solving",
      "Communication",
      "Empathy",
      "Attention to Detail",
    ],
  },
];

function Skills() {
  return (
    <section>
      <div className=" min-h-screen flex flex-col justify-center items-center gap-10 py-10 px-5 ">
        <h2 className=" text-4xl lg:text-5xl font-semibold text-center ">
          Professional Skills
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-20">
          {skills.map((item, index) => (
            <div className="bg-base-100 border p-10 lg:h-80" key={index}>
              <h2 className="lg:text-2xl mb-5">{item.title}</h2>

              <div className="flex  gap-2 flex-wrap">
                {item.list.map((item, index) => (
                  <span
                    className="badge badge-lg badge-secondary text-white p-3 "
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
