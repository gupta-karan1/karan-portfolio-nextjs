import {
  BriefcaseIcon,
  ClockIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const objectiveData = [
  {
    title: "User Objectives",
    content:
      "To know more about the firm, their work, process, team, and culture to make an informed decision about hiring them for projects.",
    icon: <UserGroupIcon className="w-10 h-10" />,
  },
  {
    title: "Business Objectives",
    content:
      "To attract more clients, establish themselves as a thought leaders in the industry, and attract more skilled employees.",
    icon: <BriefcaseIcon className="w-10 h-10" />,
  },
  {
    title: "Time-Bound Goals",
    content:
      "To deploy the first version of the website within 5 weeks and the final version within 6 weeks after brand revamp. ",
    icon: <ClockIcon className="w-10 h-10" />,
  },
  {
    title: "Success Metrics",
    content:
      " Increased client acquisition, improved brand awareness, and established as a thought leader.",
    icon: <PresentationChartLineIcon className="w-10 h-10" />,
  },
];

function Objectives() {
  return (
    <section className="min-h-screen bg-base-100 flex flex-col items-center justify-center py-10 lg:py-20 px-10 lg:px-20">
      <h1 className="text-6xl mb-10">Objectives</h1>

      <div className="grid lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-10">
        {objectiveData.map((data, index) => (
          <div
            className="card w-80 h-80 bg-primary text-primary-content shadow-lg shadow-primary-focus"
            key={index}
          >
            <div className="card-body">
              {data.icon}
              <h2 className="card-title">{data.title}</h2>
              <p className="text-lg">{data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Objectives;
