import { Metadata } from "next";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Stone Bakery Website - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function page() {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center gap-10 px-5">
      <section className="pt-20 w-full md:max-w-5xl">
        <Breadcrumb />
        <h1 className="text-center font-light  md:text-3xl mb-5 ">
          Crafting Delights Online:
        </h1>
        <h1 className="text-center font-bold text-2xl md:text-6xl md:leading-tight mb-5">
          The Stone Bakery's Digital Rise with E-Commerce Website
        </h1>
        <p className="md:text-xl text-center">
          Mobile First website for a local Dublin based bakery to help them
          enter the home-baking market by selling products online
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-cover.jpg"
        width="1920"
        height="1080"
        alt="Ana Website Hero"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-cover.jpg"
        className="mb-10 w-full 2xl:max-w-7xl"
      />

      <section className="max-w-3xl">
        <h3>Overview </h3>
        <h2 className="font-semibold text-3xl mb-5">
          Revitalising Traditions: The Stone Bakery's Journey into Home Baking
          with a Modern Web Presence
        </h2>
        <p>
          The Stone Bakery, a renowned business specialising in authentic breads
          and pastries, aims to tap into the home baking market by redesigning
          its web presence. Focused on a Dublin and national customer base, the
          initiative targets 55 to 70-year-olds who shop with mobile devices and
          have disposable income. <br />
          <br />
          The solution was to create a user-friendly website for bread
          enthusiasts to build trust and engage with the authentic bakery.
          Offering insights into the bakery's history, bakers, and reviews, the
          website enables users to purchase bakery products, access home baking
          guides, and book classes. Prioritising accessibility for all users,
          including the elderly, the site will be responsive on all devices,
          with a mobile-first approach. Useful tools like a Unit Converter and
          Shopping List will assist users in home baking.
        </p>

        <a
          href="https://the-stone-bakery.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          View Live <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      {/* <iframe
      width="900"
      height="506"
      src="https://www.youtube.com/embed/-v5KsE6YOis?si=MEbmL06hPEpg6smS"
      title="YouTube video player"
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      className="w-full h-full md:max-w-3xl md:h-[506px]"
    ></iframe> */}

      <div className="w-full lg:max-w-4xl xl:max-w-5xl mb-10 overflow-y-scroll h-[600px] bg-base-200 border-2">
        <Image
          src="/assets/ana-website/ana-hero.jpeg"
          width="1280"
          height="720"
          alt="ANA Project Case Study"
          className="w-full lg:max-w-4xl xl:max-w-5xl overflow-scroll"
          placeholder="blur"
          blurDataURL="/assets/ana-website/ana-hero.jpeg"
        />
      </div>
      <section className="max-w-3xl">
        <h3>Brand Design</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Creating a style guide helped us communicate brand values & maintain
          visual consistency
        </h2>
        <p>
          The bakery website design features a warm color palette, representing
          the bakery's warmth, with diverse colors reflecting product variety.
          High-contrast text and large UI elements enhance accessibility, while
          a friendly tone of voice communicates a welcoming atmosphere. Signika
          Negative, a familiar signage typeface, ensures readability, and
          rounded corners convey the softness of the bakery products.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-social.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-social.jpg"
      />

      <section className="max-w-3xl">
        <h3>Mobile-First Approach</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Developing it mobile-first allowed us to focus on touch interactions,
          accessibility and app-like feel
        </h2>
        <p>
          The website adopts a mobile-first approach, catering to its target
          audience of home bakers who predominantly use mobile devices. The
          design process began with mobile devices and then scaled up for larger
          screens, incorporating CSS media queries to ensure responsiveness.
          This strategy resulted in an app-like user experience.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-style.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-style.jpg"
      />

      <section className="max-w-3xl">
        <h3>Wireframe Sketching</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Time and budget constraints forced us to sketch website structure for
          quicker development
        </h2>
        <p>
          Rapid ideation and concept iteration began with dynamic paper
          wireframes, laying the foundation for a mobile-first design approach.
          This method facilitated the clear articulation of website content and
          structure, ensuring user-friendly navigation. The sketches served as a
          pivotal guide during the website design, providing a decisive
          direction. Prior to development, meticulous sketches were crafted for
          both mobile and desktop screens, ensuring a seamless transition from
          concept to execution.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-projects.jpg"
        width="1280"
        height="720"
        alt="ANA Project Case Study"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-projects.jpg"
      />
      <div className="w-full lg:max-w-4xl xl:max-w-5xl mb-10 overflow-y-scroll h-[600px] bg-base-200 border-2">
        <Image
          src="/assets/ana-website/ana-case-study.jpeg"
          width="1280"
          height="720"
          alt="ANA Project Case Study"
          className="w-full lg:max-w-4xl xl:max-w-5xl overflow-scroll"
          placeholder="blur"
          blurDataURL="/assets/ana-website/ana-case-study.jpeg"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>Home Baking Feature</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Bakery Unit Convertor was developed to help home-bakers convert baking
          units instantly
        </h2>
        <p>
          Encountering measurement challenges in home baking? Introducing the
          Bakery Unit Converter – a game-changer for home bakers. Seamlessly
          developed, this feature empowers bakers to effortlessly convert baking
          units, providing instant precision in every culinary creation. Elevate
          your baking experience with this essential tool designed for
          perfection in the heart of your kitchen.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-services.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-services.jpg"
      />

      <div className="w-full lg:max-w-4xl xl:max-w-5xl mb-10 overflow-y-scroll h-[600px] bg-base-200 border-2">
        <Image
          src="/assets/ana-website/ana-engineering.jpeg"
          width="1280"
          height="720"
          alt="ANA Project Case Study"
          className="w-full lg:max-w-4xl xl:max-w-5xl overflow-scroll"
          placeholder="blur"
          blurDataURL="/assets/ana-website/ana-engineering.jpeg"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>Bakery Shopping Feature</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Bakery Shopping List allows bakers to quickly add items they wish to
          shop for their baking needs
        </h2>
        <p>
          Ever find yourself forgetting key ingredients for your baking
          endeavours? The Bakery Shopping Feature is the solution. Recognizing
          the common problem of overlooked items, I designed the Bakery Shopping
          List to empower bakers to effortlessly compile and manage their
          shopping needs. Now, with a simple click, users can add essential
          items, ensuring a stress-free and organised baking experience.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-photos.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-photos.jpg"
      />

      <section className="max-w-3xl ">
        <h3>Shopping Cart Feature</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Fully functional & responsive bakery shop & cart helps bakers order
          items from home
        </h2>
        <p>
          A functional shopping cart was developed for the bakery shop. The cart
          was developed using Vanilla JavaScript and CSS. The cart allows users
          to add items to the cart, remove items from the cart, and update the
          quantity of items in the cart. The cart also calculates the total
          price of the items in the cart. The cart was designed to be responsive
          and works on all screen sizes. An empty state for the cart was also
          designed to ensure that the user is made aware when the cart is empty
          and to encourage them to add items to the cart by navigating to the
          shop page.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-about.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-about.jpg"
      />

      <section className="max-w-3xl ">
        <h3>Social Proof</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Testimonials, clients, journey, causes, & culture helps the brand
          establish trust with their customers
        </h2>
        <p>
          Building trust with customers is crucial, and that's where the Social
          Proof elements come in. Recognizing the challenge of establishing
          credibility, I incorporated elements such as testimonials, client
          stories, the brand's journey, causes it supports, and its culture to
          create a compelling narrative. This not only adds authenticity but
          also resonates with the audience, fostering trust in the brand.
          Explore how I've strategically woven these elements into the website
          to showcase the power of Social Proof in building meaningful
          connections.
        </p>
      </section>

      <div className="w-full lg:max-w-4xl xl:max-w-5xl mb-10 overflow-y-scroll h-[600px] bg-base-200 border-2">
        <Image
          src="/assets/ana-website/ana-blog.jpeg"
          width="1280"
          height="720"
          alt="ANA Project Case Study"
          className="w-full lg:max-w-4xl xl:max-w-5xl overflow-scroll"
          placeholder="blur"
          blurDataURL="/assets/ana-website/ana-blog.jpeg"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>Imagery</h3>
        <h2 className="font-semibold text-3xl mb-5">
          High-quality photographs of bakers in action and bakery products
          attracts more customers
        </h2>
        <p>
          Faced with the challenge of capturing customer attention, the High
          Quality Imagery emerged as a strategic solution. Acknowledging the
          significance of visual appeal, I addressed this issue by incorporating
          high-quality photographs showcasing bakers in action and the
          delectable range of bakery products. The result? An engaging and
          visually enticing platform that not only attracts but captivates
          customers.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-impact.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-impact.jpg"
      />

      <section className="max-w-3xl ">
        <h3>Logo Design</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Play of initials and bakery products create a memorable & impactful
          brand logo
        </h2>
        <p>
          The logo is a monogram featuring the initials 'S' and 'B' in a
          traditional stamp-like layout, with the brand name radially written
          around them. The 'S' is represented by two bread loaves brought
          together, while the 'B' resembles a bread slice with a bite taken out.
          The colour palette, inspired by earthy tones of bread, includes
          primary colours of yellow and ruby red. Signika Negative from Google
          Fonts is the chosen typeface for its clarity. Additionally, a
          simplified version is created for favicon and small screens, featuring
          only the monogram without radial text.
        </p>
      </section>

      <div className="w-full lg:max-w-4xl xl:max-w-5xl mb-10 overflow-y-scroll h-[600px] bg-base-200 border-2">
        <Image
          src="/assets/ana-website/ana-work.jpeg"
          width="1280"
          height="720"
          alt="ANA Project Case Study"
          className="w-full lg:max-w-4xl xl:max-w-5xl overflow-scroll"
          placeholder="blur"
          blurDataURL="/assets/ana-website/ana-work.jpeg"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>Web Development</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Exploring possibilities with HTML5, CSS3, & Vanilla JavaScript in
          frontend development
        </h2>
        <p>
          In web development, I navigate possibilities using HTML5, CSS3, and
          Vanilla JavaScript to craft seamless and dynamic frontend experiences.
          From enhancing user interfaces to ensuring responsive designs, my
          approach involves harnessing the power of these core technologies to
          create engaging and user-friendly components and features.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-impact.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-impact.jpg"
      />
      <section className="max-w-3xl ">
        <h3>HTML Forms</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Handling user input validation in forms to enhance user experience
        </h2>
        <p>
          Encountering challenges with user input validation in HTML forms can
          disrupt the seamless flow of a website. Recognizing this issue, I've
          dedicated attention to developing effective solutions that enhance the
          overall user experience. By implementing robust strategies for
          handling input validation, my approach ensures real time input
          feedback, providing users with a smooth and frustration-free
          interaction.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-impact.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-impact.jpg"
      />
      <section className="max-w-3xl ">
        <h3>Challenges & Lessons</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Balancing brand consistency, complexity of e-commerce and
          accessibility for all users
        </h2>
        <p>
          Navigating the interplay of brand consistency, the intricacies of
          e-commerce, and ensuring accessibility for elder users presented
          notable challenges. However, these challenges have been invaluable
          lessons in striking a harmonious balance. Through meticulous design
          choices, I've learned to maintain brand identity while simplifying
          e-commerce complexities, ensuring a seamless experience for users of
          all ages.
        </p>
      </section>

      <Image
        src="/assets/ana-website/ana-impact.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/ana-website/ana-impact.jpg"
      />
    </main>
  );
}

export default page;
