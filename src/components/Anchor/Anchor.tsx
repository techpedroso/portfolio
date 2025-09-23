import "./Anchor.css";

type AnchorProps = {
    label: string;
    href: string;
}

export default function Anchor({label, href}: AnchorProps) {
    return <a href={href} className="own-css-anchor">{label}</a>
}