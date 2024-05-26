import { useForm } from "react-hook-form";
import CustomizationCard from "./CustomizationCard";

export default function ProfileCustomization() {
    const {handleSubmit, register, formState: {errors}} = useForm();
  return (
    <CustomizationCard
      title={"Profile Details"}
      body={"Add your details to create a personal touch to your profile."}
    >
    </CustomizationCard>
  );
}
