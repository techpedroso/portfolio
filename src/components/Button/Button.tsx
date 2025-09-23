import "./Button.css";

type ButtonProps = {
  label: string;
  className?: string;
  image?: string;
  width?: string;
  download?: boolean;
  href?: string;
};

export default function Button({ label, className, image, width, download, href }: ButtonProps) {
  if (download && href) {
    // botão como link de download
    return (
      <a
        href={href}
        download
        className={`own-css-button ${className ?? ""} ${width ?? ""}`}
      >
        {image && <img src={image} alt={label} />}
        {label}
      </a>
    );
  } else if (href) {
    // apenas link
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`own-css-button ${className ?? ""} ${width ?? ""}`}
      >
        {image && <img src={image} alt={label} />}
        {label}
      </a>
    );
  }

  // botão normal
  return (
    <button className={`own-css-button ${className ?? ""} ${width ?? ""}`}>
      {image && <img src={image} alt={label} />}
      {label}
    </button>
  );
}
