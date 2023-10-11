import Image from "next/image";

export default function ContextCard({
  title,
  description,
  image,
  classes,
  width,
  height,
}: {
  title: string;
  description: string;
  image: string;
  classes?: string;
  width: number;
  height: number;
}) {
  return (
    <div className={`card lg:card-side shadow-2xl  ${classes}`}>
      <figure>
        <Image src={image} width={width} height={height} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title lg:text-4xl">{title}</h2>
        <p className="lg:text-xl font-light">{description}</p>
      </div>
    </div>
  );
}
