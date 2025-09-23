import "./IntrocutionContainer.css";

import downloadImg from "../../assets/black-download.png";

import Button from "../Button/Button";

type IntroductionContainer = {
    id?: string;
    title: React.ReactNode;
    content: React.ReactNode;
}

export default function IntroductionContainer({ title, content }: IntroductionContainer) {
    return (
        <div className="container own-css-introductionContainer">
            <h2>{title}</h2>
            <p>{content}</p>

            <div className="own-css-introductionContainer__buttons">
                {/* <Button image={arrowDownImg} label="View My Projects" className="black" width="w15"/> */}
                <Button image={downloadImg} label="Download Resume" className="white" width="w15" href="./public/YasminCardosoResume.pdf" download/>
            </div>
        </div>
    );
}

export function TitleContentContainer({ title, content, id }: IntroductionContainer) {
    return (
        <div className="container own-css-introductionContainer own-css-titleContentContainer">
            <h2 id={id}>{title}</h2>
            <p>{content}</p>
        </div>
    );
}