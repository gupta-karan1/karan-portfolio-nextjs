import Image from "next/image";

const problemData = [
  {
    title: "Issues & their impact",
    content:
      "Been in business for 26 years and over 100+ projects across India, Africa, Middle East, with no documented proof. Relied on old regular clients for projects. As COVID-19 struck, they lost some loyal clients and revenue. Had difficulty attracting clients and employees. ",
    image: "/assets/ana-issues.jpg",
  },
  {
    title: "User's Pain Points",
    content:
      "Existing portfolio template website had some photos of their final buildings. Potential clients didn't understand their design process, service benefits, and what made them different. Potential employees couldn't find information about the firm's work culture.",
    image: "/assets/ana-pain-points.jpg",
  },
  {
    title: "Existing Solutions",
    content:
      "Relied on cold calling, emailing, randomly posting on social media, attending live meeting to pitch for projects to potential clients. It was unorganized, time consuming and not  effective. They also relied on word of mouth to attract new clients.",
    image: "/assets/ana-solution.jpg",
  },
];

function Problem() {
  return (
    <section className="min-h-screen bg-base-300 flex flex-col items-center justify-start py-10 lg:py-20 px-5 lg:px-10">
      <h1 className="text-6xl mb-10">Problem</h1>
      <div className="flex gap-10 flex-wrap justify-center items-start">
        {problemData.map((data, index) => (
          <div className="card w-full lg:w-96 bg-neutral " key={index}>
            <figure>
              {" "}
              <Image
                src={data.image}
                alt={data.title}
                width={500}
                height={500}
              />
            </figure>
            <div className="card-body h-full lg:h-80">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Problem;
