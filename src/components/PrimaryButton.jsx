const PrimaryButton = ({ className, label, onClick }) => {
  return (
    <button
      className={`rounded-[16px] bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] ${className} `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
