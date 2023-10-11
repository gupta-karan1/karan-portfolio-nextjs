import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const designData = [
  {
    title: "Style Guide",
    content:
      "Brand colors and typography were selected based on the brand values. Everything had to be geometrical, clean, and convey growth. The style guide was created to maintain consistency in the design. Further this allowed us to create a design system that helped in creating the website faster.",
    image: "/assets/ana-style.png",
  },
  {
    title: "Social Proof",
    content:
      "Research phase allowed us to collect several client testimonials, numerical data, project locations, recognitions, publications, awards, and company's history. This helped in creating a strong social proof that was used throughout the website to build trust with potential clients.",
    image: "/assets/ana-socialProof.png",
  },
  {
    title: "Projects & Case Studies",
    content:
      "Documenting 100 + projects was the most challenging task. Photos, drawings, diagrams were refined. Facts and figures were collected. Case studies were created. This helped in attracting more clients and employees by establishing the firm as a thought leader in the industry.",
    image: "/assets/ana-projects.png",
  },
  {
    title: "Media & Publications",
    content:
      "Blog was included to regularly post content about the firm's work, process, and culture. This would keep the website fresh and help in SEO. It would also help in establishing the firm as a thought leader in the industry. Latest news and publications were also showcased on the website.",
    image: "/assets/ana-media.png",
  },
  {
    title: "Process & Services",
    content:
      "Firm's services were documented and showcased. This helped in educating the potential clients. ANA was known for providing integrated design, engineering and construction services unlike conventional firms. This helped in differentiating the firm from its competitors.",
    image: "/assets/ana-services.png",
  },
];

function Design() {
  return (
    <section className="min-h-screen bg-base-100 flex flex-col items-center justify-center py-10 lg:py-20 px-10 lg:px-20">
      <h1 className="text-6xl mb-10">Design</h1>

      <div className="carousel carousel-center p-10 space-x-4 max-w-full bg-neutral rounded-3xl">
        {designData.map((data, index) => (
          <div
            className="carousel-item bg-transparent flex flex-col gap-2"
            key={index}
            id={`carousel-item-${index}`}
          >
            <Image
              src={data.image}
              alt={data.title}
              width={900}
              height={506}
              className="rounded-box "
            />
            <div className="max-w-3xl">
              <h2 className="text-2xl">{data.title}</h2>
              <p>{data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Design;
