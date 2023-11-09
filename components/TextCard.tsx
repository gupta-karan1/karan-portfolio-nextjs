function TextCard({
  title,
  description,
  styles,
  icon,
}: {
  title: string;
  description: string;
  styles?: string;
  icon?: string;
}) {
  return (
    <div className={`card ${styles}`}>
      <div className="card-body  text-neutral-content">
        {icon && (
          <img src={icon} alt="icon" className="w-16 h-16 mb-2 text-white" />
        )}
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TextCard;
