export default function Button({ children, variant, type, action }) {
  return (
    <button
      type={type}
      onClick={action}
      className={`py-3 px-6 rounded-lg cursor-pointer w-full ${
        variant
          ? "border-accent border text-accent font-semibold hover:bg-hover2"
          : "bg-accent text-white  hover:bg-hover"
      } `}
    >
      {children}
    </button>
  );
}
