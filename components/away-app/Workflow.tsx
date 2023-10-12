import {
  ArrowUpRightIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/20/solid";

const workData = [
  {
    title: "Workflow",
    content:
      "We followed an Agile methodology, emphasizing flexibility and collaboration throughout the project. The process incorporated Scrum and Kanban principles to manage tasks and priorities. A Trello board was utilized to visualize and track project progress, while GitHub served as the central repository for version control, code collaboration, and issue tracking. Real-time collaboration was enabled using Microsoft Live Share within Visual Studio Code, allowing team members to work together seamlessly. Regular user testing was conducted for feedback. This workflow ensured that the travel app was developed iteratively.",
    link: "https://trello.com/b/sS5guq2q/away-travel-planning-app-project-schedule",
    linkText: "Trello Board",
    icon: <WrenchScrewdriverIcon className="h-10 w-10 text-neutral-focus" />,
  },
  {
    title: "Usability Testing",
    content:
      "Usability testing was an integral part of the development process to ensure that the app was intuitive and easy to use. The testing was conducted in-person and remotely. We conducted small user flow tests with multiple users at various stages of the development cycle, even before diving into the styling phase. Their feedback and insights were meticulously recorded in a Google Docs document. This approach allowed us to address issues promptly, prioritizing them based on significance and user impact. By consistently incorporating user feedback into the app's design and functionality, we ensured a user-centric and highly usable final product.",
    link: "https://docs.google.com/document/d/1u1THDx9E_ZneU6OW0oKZ05nDtSly_qtvmDVQoXnPWoU/edit?usp=sharing",
    linkText: "Testing Doc",
    icon: <UsersIcon className="h-10 w-10 text-neutral-focus" />,
  },
];

function Workflow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 ">
      {workData.map((item, index) => (
        <div
          className="card w-full bg-secondary text-primary-content"
          key={index}
        >
          <div className="card-body">
            {item.icon}
            <h2 className="card-title text-3xl">{item.title}</h2>
            <p>{item.content}</p>
            <div className="card-actions justify-end">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-neutral shadow-xl"
              >
                {item.linkText}
                <ArrowUpRightIcon className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Workflow;
