import "./container-paragraph.css";

type ContainerParagraphProps = {
  body: string;
};
const ContainerParagraph: React.FC<ContainerParagraphProps> = ({ body }) => {
  return <p className="container-paragraph">{body}</p>;
};

export default ContainerParagraph;
