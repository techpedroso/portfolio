import "./ContainerContent.css";

import Button from "../Button/Button";

import phoneIcon from "../../assets/phone-call.png";
import emailIcon from "../../assets/mail.png";


type ContainerContent = {
    title: string;
    content: React.ReactNode;
    image: string;
    altImage?: string;
    reverse: boolean;
}

export default function ContainerContent({ title, content, image, altImage, reverse }: ContainerContent) {
    return (
        <div className={`container own-css-container ${reverse ? "reverse" : ""}`}>
            <div className="own-css-container__content">
                <h2>{title}</h2>
                <p>{content}</p>
                <div>
                    <Button label="LinkedIn" className="blue" href="http://www.linkedin.com/in/yasmincardoso"/>
                </div>
            </div>
            <div className="own-css-container__image">
                <img src={image} alt={altImage} />
            </div>
        </div>
    );
}