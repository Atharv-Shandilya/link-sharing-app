export default function AuthHeader({ primary, secondary }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-text-primary">{primary}</h2>
      <p className="text-text-secondary mt-2 mb-10">{secondary}</p>
    </>
  );
}
