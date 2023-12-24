import { Metadata } from "next";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectFooter from "@/components/ProjectFooter";

export const metadata: Metadata = {
  title: "OneBill Website - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function page() {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center gap-10 px-5">
      <section className="pt-20 w-full md:max-w-5xl">
        <Breadcrumb />
        <h1 className="text-center font-light  md:text-3xl mb-5 ">
          Simplifying Finances:
        </h1>
        <h1 className="text-center font-bold text-2xl md:text-6xl md:leading-tight mb-5">
          Presenting OneBill's Digital Solution for Utility Bills with Business
          Website
        </h1>
        <p className="md:text-xl text-center">
          Mobile Responsive business website for Dublin based startup helping
          them communicate their services & designing a seamless onboarding
          process for new subscribers
        </p>
      </section>

      <Image
        src="/assets/onebill-website/onebill-hero.jpg"
        width="1920"
        height="1080"
        alt="OneBill Website Hero"
        placeholder="blur"
        blurDataURL="/assets/onebill-website/onebill-hero.jpg"
        className="mb-10 w-full 2xl:max-w-7xl"
        loading="eager"
      />

      <section className="max-w-3xl">
        <h3>Overview </h3>
        <h2 className="font-semibold text-3xl mb-5">
          Helping an Early-Stage utility tech startup attract and onboard new
          customers
        </h2>
        <p>
          OneBill Utilities Ltd. approached me to design and develop their
          business website and customer onboarding journey. Being an early-stage
          startup, while they had created the CRM dashboard to help customers
          consolidate and switch utility bill plans based on Machine Learning &
          Data Analytics, they were struggling to attract new customers. So, I
          decided to build their website to enhance their brand awareness and
          communicate their value proposition to the right audience with
          impactful content, SEO, and seamless onboarding.
        </p>

        <a
          href="https://one-bill-website.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          View Live <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/onebill-website/onebill-overview.jpg"
        width="1280"
        height="720"
        alt="OneBill Website Overview"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/onebill-website/onebill-overview.jpg"
      />
      <section className="max-w-3xl">
        <h3>Testimonial</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Appreciation by the founder of OneBill Utilities Ltd. for design &
          development work
        </h2>
        <p>
          Karan was instrumental in helping us create a clean and smooth
          customer journey for our website. Very creative and self motivated. We
          highly recommend his services and look forward to working with him
          again. - By Adem Ergen
        </p>
      </section>

      <section className="max-w-3xl">
        <h3>Information Source</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Overcoming the challenge of no social proof with information & trust
          building
        </h2>
        <p>
          One of the biggest challenges for initiating startups is the lack of
          any social proof in the form of testimonials, numbers, reviews, or
          recognition. To tackle this issue, we decided to elaborate on the
          information to guide new visitors about the business values, services,
          plans, pricing, FAQs, and ways to contact. This strategy to serve the
          website as an information source helped build trust with potential
          customers without much social proof.
        </p>
      </section>

      <Image
        src="/assets/onebill-website/onebill-social.jpg"
        width="1280"
        height="720"
        alt="OneBill Website Social Proof"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/onebill-website/onebill-social.jpg"
      />

      <section className="max-w-3xl">
        <h3>Constraints</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Tackling time & budget constraints with responsive Bootstrap UI
          Library
        </h2>
        <p>
          My client had a severe shortage of time and budget to spend any of it
          on UX research or multiple wireframe iterations. Still we conducted a
          brief competitor analysis to understand how similar products
          communicate their value and onboard customers. Ultimately we decided
          to sketch and develop the complete website leveraging plain HTML,
          Vanilla JavaScript and the Bootstrap UI library that allowed quick
          development with minimal style code & responsive behaviour.
        </p>

        <a
          href="https://github.com/gupta-karan1/OneBill-website"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          GitHub Repository{" "}
          <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/onebill-website/onebill-ui.jpg"
        width="1280"
        height="720"
        alt="OneBill Website UI"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/onebill-website/onebill-ui.jpg"
      />

      <section className="max-w-3xl ">
        <h3>Onboarding</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Seamless customer onboarding form to increase conversion rates &
          subscriptions
        </h2>
        <p>
          Understanding the urgency of attracting new customers, we designed an
          intuitive onboarding form that streamlines the subscription process.
          By leveraging user-friendly interfaces and strategically placed
          calls-to-action, we aimed to reduce friction and enhance user
          engagement. The goal was to provide a hassle-free experience, ensuring
          that potential customers could effortlessly navigate through the
          onboarding process and swiftly subscribe to the utility plans offered
          by the startup. This approach was pivotal in maximising conversion
          rates and fostering a user-friendly environment that encourages
          subscriptions.
        </p>
      </section>
      <Image
        src="/assets/onebill-website/onebill-onboarding.jpg"
        width="1280"
        height="720"
        alt="OneBill Website Onboarding"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/onebill-website/onebill-onboarding.jpg"
      />

      <section className="max-w-3xl">
        <h3>Mobile First</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Responsive across multiple screen sizes to maintain consistent user
          experience
        </h2>
        <p>
          Adhering to a "Mobile First" approach, we ensured that the website
          remained responsive across various screen sizes, guaranteeing a
          consistent and seamless user experience. By prioritising mobile
          responsiveness, we aimed to accommodate users accessing the site on
          diverse devices, from smartphones to tablets and desktops. This
          strategy not only enhances accessibility but also aligns with
          contemporary user preferences, enabling OneBill Utilities Ltd.'s
          audience to engage with the platform effortlessly, regardless of the
          device they choose.
        </p>
      </section>

      <Image
        src="/assets/onebill-website/onebill-mobile.jpg"
        width="1280"
        height="720"
        alt="Stone Bakery Branding"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/onebill-website/onebill-mobile.jpg"
      />

      <section className="max-w-3xl ">
        <h3>Simplicity</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Minimalist, simple and impactful layout to effectively communicate
          value to customers
        </h2>
        <p>
          The design focused on clarity and conciseness, ensuring that essential
          information about services, plans, and benefits was easily digestible
          for visitors. By adopting a straightforward and uncluttered approach,
          we aimed to create a user-friendly environment that resonates with the
          target audience. The minimalist design with modern Bento UI grid not
          only enhances aesthetic appeal but also facilitates a more engaging
          and memorable user experience, emphasising the core value that OneBill
          Utilities Ltd. brings to its customers.
        </p>
      </section>

      <div className="w-full lg:max-w-4xl xl:max-w-5xl mb-10 overflow-y-scroll h-[600px] bg-base-200 border-2">
        <Image
          src="/assets/onebill-website/onebill-home.jpeg"
          width="1280"
          height="720"
          alt="OneBill Website Home Page"
          className="w-full lg:max-w-4xl xl:max-w-5xl overflow-scroll"
          placeholder="blur"
          blurDataURL="/assets/onebill-website/onebill-home.jpeg"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>Imagery</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Cheerful and relatable imagery to establish an emotional connection
          with visitors
        </h2>
        <p>
          Incorporating cheerful and relatable imagery was a key strategy to
          establish an emotional connection with visitors on the OneBill
          Utilities Ltd. website. By selecting visuals that evoke positive
          emotions and resonate with the target audience, we aimed to create an
          inviting and friendly atmosphere. The imagery not only served an
          aesthetic purpose but also played a crucial role in conveying the
          brand's personality and values. This intentional use of visuals helped
          forge a more profound and memorable connection with visitors,
          fostering a positive perception of the utility startup and enhancing
          overall user engagement.
        </p>
      </section>

      <Image
        src="/assets/onebill-website/onebill-images.jpg"
        width="1280"
        height="720"
        alt="OneBill Website Images"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/onebill-website/onebill-images.jpg"
      />
      <section className="max-w-3xl ">
        <h3>Challenges & Lessons</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Making quick, efficient and effective decisions can help overcome
          project constraints
        </h2>
        <p>
          With tight time and budget limitations, we prioritised decisive
          actions over prolonged deliberations. This approach allowed us to
          swiftly address issues, such as the absence of social proof, and
          implement solutions that proved instrumental in achieving project
          goals. The experience emphasised the importance of adaptability and
          strategic decision-making in the face of constraints, highlighting
          that a proactive and streamlined approach can lead to successful
          project outcomes even within challenging circumstances.
        </p>
      </section>

      <Image
        src="/assets/onebill-website/onebill-hero.jpg"
        width="1280"
        height="720"
        alt="OneBill Website Hero"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/onebill-website/onebill-hero.jpg"
      />

      <ProjectFooter />
    </main>
  );
}

export default page;
