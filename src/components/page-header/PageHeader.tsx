import "./page-header.css";

type PageHeaderProps = {
  label: string;
};
const PageHeader: React.FC<PageHeaderProps> = ({ label }) => {
  return <h1 className="page-header">{label}</h1>;
};

export default PageHeader;
