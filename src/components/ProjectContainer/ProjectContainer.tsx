import "./ProjectContainer.css";

type ProjectContainerProps = {
    category: string;
    title: string;
    content: string;
    image: string;
}

export default function ProjectContainer({ category, title, content, image }: ProjectContainerProps) {
    return (
        <div className="own-css-projectContainer">
            <div>
                <span className="own-css-projectContainer__category">{category}</span>
                <h2 className="own-css-projectContainer__title">{title}</h2>
                <p className="own-css-projectContainer__content">{content}</p>
            </div>
            <div>
                {image && <img src={image} className="own-css-projectContainer__image"/>}
            </div>
        </div>
    );
}

