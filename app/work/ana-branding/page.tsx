import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ANA Branding - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function page() {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center gap-10 px-5">
      <section className="pt-20 w-full md:max-w-5xl">
        <Breadcrumb />
        <h1 className="text-center font-light  md:text-3xl mb-5 ">
          From Business To Brand:
        </h1>
        <h1 className="text-center font-bold text-2xl md:text-6xl md:leading-tight mb-5">
          Elevating ANA Design Studio into a Recognizable Brand Through
          Strategic Branding
        </h1>
        <p className="md:text-xl text-center">
          This project stands as a testament to the transformative power of a
          well-executed brand strategy. ANA Design Studio evolved from a
          successful business into a recognized brand, establishing a digital
          connection with its audience and fostering substantial business
          growth.
        </p>
      </section>

      <Image
        src="/assets/ana-branding/branding-1.png"
        width="1920"
        height="1080"
        alt="ANA Brand branding"
        placeholder="blur"
        blurDataURL="/assets/ana-branding/branding-1.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />

      <section className="max-w-3xl">
        <h3>Overview </h3>
        <h2 className="font-semibold text-3xl mb-5">
          Crafting a Digital Identity for ANA Design Studio's Architectural
          Excellence
        </h2>
        <p>
          In the vibrant city of Delhi, India, ANA Design Studio, a
          distinguished architecture consultancy, faced a pivotal challenge.
          While boasting a strong reputation among existing clients through word
          of mouth, the absence of a digital presence hindered its growth
          potential. Despite its business success, ANA Design Studio recognized
          the need for a robust brand strategy to align with the digital era.
          Skilled employees lacked the means to convey their narrative to
          potential clients. The company sought a comprehensive brand strategy
          to transition from a successful business to a recognized brand.
        </p>
      </section>

      <Image
        src="/assets/ana-branding/branding-2.png"
        width="1920"
        height="1080"
        alt="ANA Brand branding"
        placeholder="blur"
        blurDataURL="/assets/ana-branding/branding-2.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />

      <section className="max-w-3xl">
        <h3>The Problem</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Silent Success Seeking a Digital Voice to Amplify its Presence
        </h2>
        <p>
          ANA Design Studio's success relied on word of mouth, and the absence
          of a digital footprint hindered its growth potential. Despite skilled
          employees, the company struggled to digitally communicate its story to
          a broader audience. The absence of a brand strategy posed a challenge
          to growth in the digital age.
        </p>
      </section>

      <Image
        src="/assets/ana-branding/branding-3.png"
        width="1920"
        height="1080"
        alt="ANA Brand branding"
        placeholder="blur"
        blurDataURL="/assets/ana-branding/branding-3.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />
      <section className="max-w-3xl">
        <h3>The Solution</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Crafting a Brand Identity and Content Strategy to Establish a Digital
          Presence
        </h2>
        <p>
          Leveraging my expertise in architecture and branding, I undertook the
          mission to establish ANA Design Studio's brand identity and digital
          presence. The journey commenced with a thorough brand audit and
          competitor analysis. Subsequently, we developed brand strategy and
          guidelines to align team communications with brand values. A content
          strategy focused on meeting client needs, eschewing mere
          self-promotion, was meticulously crafted.
        </p>
      </section>

      <Image
        src="/assets/ana-branding/branding-4.png"
        width="1920"
        height="1080"
        alt="ANA Brand branding"
        placeholder="blur"
        blurDataURL="/assets/ana-branding/branding-4.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />
      <section className="max-w-3xl ">
        <h3>The Impact</h3>
        <h2 className="font-semibold text-3xl mb-5">
          ANA Design Studio's Digital Triumph and Business Growth
        </h2>
        <p>
          Within two years, ANA Design Studio achieved a robust digital
          presence, amassing over 4000+ followers on LinkedIn and 2000+ website
          visitors. The email newsletter garnered positive reception, and the
          company generated leads through strategic branding efforts. The
          implementation of the brand strategy propelled business growth by 30%
          in the first year, establishing ANA Design Studio not just as a
          business but as a brand. The connection between people and the brand's
          values became palpable.
        </p>
      </section>
      <Image
        src="/assets/ana-branding/branding-1.png"
        width="1920"
        height="1080"
        alt="ANA Brand branding"
        placeholder="blur"
        blurDataURL="/assets/ana-branding/branding-1.png"
        className="mb-10 w-full 2xl:max-w-7xl"
      />
    </main>
  );
}

export default page;
