import { Link } from "react-router-dom";

const Product = ({ image, text, property }) => {
  return (
    <Link
      to="/products"
      className="flex flex-col items-center gap-1.5 p-6 cursor-pointer"
    >
      <div className="w-36 h-36 transform hover:scale-110 transition-transform duration-150 ease-out">
        <img
          draggable="false"
          className="w-full h-full object-contain"
          src={image}
          alt={text}
        />
      </div>
      <h2 className="font-medium text-sm mt-2">{text}</h2>
    </Link>
  );
};

export default Product;
