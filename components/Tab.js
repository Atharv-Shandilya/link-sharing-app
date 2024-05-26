export default function Tab({
  children,
  activeTab,
  tabNo,
  setActiveTab,
  image,
}) {
  return (
    <button
      className={`flex items-center px-6 py-3 rounded-lg first:mr-4 ${
        activeTab == tabNo
          ? "text-accent bg-light-accent"
          : "text-text-secondary"
      } hover:text-accent`}
      onClick={() => {
        setActiveTab(tabNo);
      }}
    >
      {image}
      <span className="ml-2 font-semibold">{children}</span>
    </button>
  );
}
