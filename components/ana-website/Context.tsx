import React from "react";
const contextData = [
  {
    title: "How it all started?",
    content:
      "ANA Design Studio is 26 year old Delhi-based Architecture, Engineering & Construction Consultancy firm with a mid size team of highly skilled architects and engineers working on large scale commercial projects. They were known in the industry for provided integrated design and construction services unlike conventional firms of the same size. I was working as a Project Architect there since 2020. I took the initiative to revamp their brand website after several unsuccessful attempts by external agencies. ",
  },
  {
    title: "Why was it necessary?",
    content:
      "It was the COVID-10 pandemic that motivated ANA to focus on their digital presence to attract more clients and to hire skilled employees for future projects. The existing website was outdated and did not reflect the firm's current capabilities. It was also not optimized for mobile devices. The website was not generating any leads and was not helping in brand awareness. They wanted to establish themselves as a thought leader in the industry and wanted to showcase their work to attract more clients.",
  },
  {
    title: "Who were the stakeholders?",
    content:
      "Management, Clients & Employees. Primarily it was the founder Amin Nayyar who vested most interest in the project along with partners. They wanted to increase the number of clients and to establish themselves as a thought leader in the industry. Then there were their most loyal & regular high-valued clients, mostly directors & CEOs of large organizations. The clients wanted to know more about the firm and the potential clients wanted to know more about the firm's capabilities and expertise. Lastly, there were the highly skilled employees who wanted to showcase their work and to attract more skilled employees.",
  },
  {
    title: "What were the constraints?",
    content:
      "The biggest constraint was the budget. The firm was not willing to invest a lot of money in the project. They had already spent a lot of money on the previous website and with design agencies without any outcome. The second constraint was the time. The firm wanted to launch the website as soon as possible. The third constraint was the availability of the team. The team was already working on multiple projects and it was difficult to allocate time for the website. The fourth constraint was the lack of content. They wanted to showcase their work but they did not have a lot of documentation of their projects or process.",
  },
  {
    title: "What was I responsible for?",
    content:
      "Initially there were several unsuccessful attempts by external agencies who weren't able to understand the business goals and gave standards cookie cutter designs. I was the sole designer on the project. I was responsible for the entire design process from research to development; the content creation and management; project management and coordination with the employees for content; and testing and deployment of the website.",
  },
  {
    title: "What was the time frame?",
    content:
      "The first version of the website had to be deployed within a time frame of 5 weeks (March-April 2020) which included content design, layout and wordpress development. The second and final version was developed after 3 months of intensive brand revamp and content creation where the website took 6 weeks of work from design to development. The final version was deployed in March 2021.",
  },
];

function Context() {
  return (
    <section className=" min-h-screen bg-base-100 py-10 lg:py-20  px-10 lg:px-20 flex flex-col items-center justify-center gap-5  ">
      <h1 className="text-6xl mb-10">Context</h1>

      {contextData.map((data, index) => (
        <div
          key={index}
          className="collapse collapse-plus bg-neutral px-2 shadow-sm  hover:shadow-lg transition-shadow duration-300 ease-in-out "
        >
          <input type="checkbox" placeholder="collapse" />
          <div className="collapse-title text-4xl ">{data.title}</div>
          <div className="collapse-content flex gap-5 items-center justify-center">
            <p className="text-xl">{data.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Context;
