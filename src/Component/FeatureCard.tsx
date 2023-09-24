interface propsType {
  title: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<propsType> = ({ title, icon }) => {
  return (
    <div className="Flex items-center gap-4">
      <div className="bg-gray-300 w-[80px] h-[80px] text-accentDark text-[40px] grid place-items-center rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-accent font-medium text-x1">{title}</h3>

        <p className="text-black-500 text-[20px]">Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};
export default FeatureCard;
