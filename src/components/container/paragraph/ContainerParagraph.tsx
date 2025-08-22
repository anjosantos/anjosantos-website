type ContainerParagraphProps = {
  body: string;
};
const ContainerParagraph: React.FC<ContainerParagraphProps> = ({ body }) => {
  return (
    <p
      style={{
        margin: 20,
        fontFamily: "DsDigital",
        fontSize: 20,
        color: "#f9e9b6",
      }}
    >
      {body}
    </p>
  );
};

export default ContainerParagraph;
