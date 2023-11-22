interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="pb-4 md:pb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-marine-blue">
        {title}
      </h1>
      <p className="text-light-gray pt-4">{subtitle}</p>
    </div>
  );
};

export default Heading;
