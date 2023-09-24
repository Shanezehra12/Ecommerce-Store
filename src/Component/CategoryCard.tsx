interface propsType {
  img: string;
  name: string;
  count: string;
}
const CategoryCard: React.FC<propsType> = ({ img, name, count }) => {
  return (
    <div className="border border-gray-900 hover:border-gray-500  hover:scale-105 transition-transform rounded-lg">
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
          <h3 className="font-medium text-3xl">{name}</h3>
          <p className="text-gray-500 text-2xl">{count}</p>
        </div>
        <img className="w-[100px]" src={img} alt={name} />
      </div>
    </div>
  );
};

export default CategoryCard;
