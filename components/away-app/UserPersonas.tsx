import Image from "next/image";

const personaData = [
  {
    Title: "Primary Persona - Trip Organizer",
    Bio: "Busy marketing manager who arranges group travel, balancing work with at least two yearly trips. Aims for unique group experiences.",
    Influences:
      "Influenced by friends, family, social media, travel blogs, and peer advice on travel destinations.",
    Motivations:
      "Motivated by disconnecting from work, quality time with loved ones, discovering new cultures, and sharing experiences.",
    Interests:
      "Hiking, exploring neighborhoods, trying new foods, visiting cultural landmarks, and supporting eco-tourism and sustainable travel.",
    Pain: "Struggles with coordinating group travel, planning, communication breakdowns, and itinerary disagreements.",
    Needs:
      "Requires a user-friendly, reliable, and secure platform to simplify group travel planning, improve communication, manage preferences, and suggest unique experiences.",
    Quote:
      "I love planning trips with my friends, but it can be stressful. I wish there was an app that could simplify the process and help me create the perfect itinerary for everyone.",
    Image: "/assets/away-app/persona1.jpg",
  },

  {
    Title: "Secondary Persona - Trip Member",

    Bio: "Software engineer who adores travel but detests trip logistics. Prefers letting others lead planning while actively contributing ideas to enhance group experiences. Enjoys decision-making participation via chatting or polling.",
    Influences:
      "Influenced by friends, colleagues, travel blogs, and Instagram influencers for trip ideas and inspiration.",
    Motivations:
      "Driven by escapism, quality time with friends, culinary explorations, and cultural immersion.",
    Interests:
      "Passionate about hiking, skiing, gastronomy, cultural landmarks, and tech-related experiences.",
    Pain: "Stressed by trip planning, especially scheduling, budgeting, and accommodation. Desires involvement without planning burden.",
    Needs:
      "Seeks a user-friendly platform to offer feedback and suggestions, communicate with the organizer, and engage in decision-making through chatting or polling. Prioritizes reliability and security.",
    Quote:
      "Love group trips but hate planning. I want a platform for input without the stress. Chatting and polling make it perfect.",
    Image: "/assets/away-app/persona2.jpg",
  },
  {
    Title: "Tertiary Persona - Solo Traveler",

    Bio: "Freelance writer who craves solo adventures, seeking an efficient app to uncover hidden gems during her travels and share her unique experiences.",
    Influences:
      "Inspired by fellow solo travelers, travel bloggers, and reputable travel magazines, with a love for social media inspiration.",
    Motivations:
      "Motivated by cultural exploration, culinary delights, and writing opportunities. Thrives on pushing her comfort zone's boundaries.",
    Interests:
      "Enjoys hiking, photography, writing, and culinary adventures, exploring historic sites and off-the-beaten-path destinations.",
    Pain: "Struggles with planning safe and budget-friendly solo trips. Seeks accurate, up-to-date destination information.",
    Needs:
      "Requires an app featuring trustworthy editorial content, detailed destination info, and recommendations. Prefers solo traveler-specific planning tools.",
    Quote:
      "Solo travel is my passion, but planning is daunting. An app with trusted content and solo traveler planning features is a game-changer.",
    Image: "/assets/away-app/persona3.jpg",
  },
];

function UserPersonas() {
  return (
    <div className="collapse collapse-plus bg-neutral px-2 shadow-sm  hover:shadow-lg transition-shadow duration-300 ease-in-out ">
      <input type="checkbox" placeholder="collapse" />
      <div className="collapse-title text-4xl ">User Personas</div>
      <div className="collapse-content ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {personaData.map((data, index) => (
            <div
              key={index}
              className="card bg-neutral-focus shadow-xl w-full rounded-t-none"
            >
              <figure className="px-10 pt-5 ">
                <Image
                  src={data.Image}
                  width={150}
                  height={150}
                  alt="stage1"
                  className="rounded-full avatar shadow-xl "
                />
              </figure>

              <div className="card-body ">
                <h2 className="card-title">{data.Title}</h2>
                <p>{data.Bio}</p>
                <h2 className="card-title">Influences</h2>
                <p>{data.Influences}</p>

                <h2 className="card-title">Motivations</h2>
                <p>{data.Motivations}</p>

                <h2 className="card-title">Interests</h2>
                <p>{data.Interests}</p>

                <h2 className="card-title">Pain</h2>
                <p>{data.Pain}</p>

                <h2 className="card-title">Needs</h2>
                <p>{data.Needs}</p>

                <h2 className="card-title">Quote</h2>
                <p>{data.Quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserPersonas;
