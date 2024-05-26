import Image from "next/image";

export default function Input({
  icon,
  placeholder,
  type,
  label,
  register,
  requirements,
  errors,
}) {
  return (
    <label className={`text-xs ${errors[label] ? "text-alert" : ""}`}>
      {label}
      <div
        tabIndex="0"
        className={`flex px-4 py-3 bg-white border-solid border-[1px] rounded-lg mb-6 items-center justify-between has-[:focus]:border-accent has-[:focus]:shadow-focus ${
          errors[label] ? "border-alert" : "border-outline"
        }`}
      >
        <div className="flex flex-1">
          <Image src={icon} className="mr-3" />
          <input
            type={type}
            placeholder={placeholder}
            className="text-base flex-1 text-inherit bg-inherit"
            {...register(label, { ...requirements })}
          />
        </div>

        {errors[label] && (
          <p className=" text-xs text-alert">{errors[label].message}</p>
        )}
      </div>
    </label>
  );
}
