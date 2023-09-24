interface propsType {
  img: string;
  title: string;
  date: string;
  comment: number;
  
}

const BlogCard: React.FC<propsType> = ({ img, title, date, comment }) => {
  return (
    <div className="space-y-4">
      <img
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt="post"
      />

      <div className="text-accent font-medium mt-2 text-2xl">
        <span>{date} /</span>
        <span>{comment} Comments</span>
      </div>

      <h3 className="font-bold text-gray-600 mt-2 text-2xl">{title}</h3>
    </div>
  );
};

export default BlogCard;
