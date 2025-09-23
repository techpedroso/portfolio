import "./Logo.css";

type LogoProps = {
    label: string;
}

export default function Logo({label}: LogoProps) {
    return <span className="own-css-logo">{label}</span>
}