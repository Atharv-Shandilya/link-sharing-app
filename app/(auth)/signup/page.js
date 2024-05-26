"use client";

import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import emailSvg from "@/public/icons/email.svg";
import passwordSvg from "@/public/icons/lock.svg";
import Button from "@/components/Button";
import AuthHeader from "@/components/AuthHeader";

export default function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  const watchCreatePassword = watch("Create Password");

  return (
    <>
      <AuthHeader
        primary={"Create account"}
        secondary={"Let’s get you started sharing your links!"}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          icon={emailSvg}
          placeholder={"e.g. alex@email.com"}
          type={"text"}
          label={"Email Address"}
          register={register}
          errors={errors}
          requirements={{
            required: "Can't be empty",
            pattern: {
              value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
              message: "Not valid",
            },
            min: {
              value: 3,
              message: "Too Short",
            },
            max: {
              value: 30,
              message: "Too Long",
            },
          }}
        />

        <Input
          icon={passwordSvg}
          placeholder={"At least 8 character"}
          type={"password"}
          label={"Create Password"}
          register={register}
          errors={errors}
          requirements={{
            required: "Can't be empty",
            min: {
              value: 8,
              message: "Too short",
            },
          }}
        />

        <Input
          icon={passwordSvg}
          placeholder={"At least 8 character"}
          type={"password"}
          label={"Confirm Password"}
          register={register}
          errors={errors}
          requirements={{
            required: "Can't be empty",
            validate: {
              match: (v) =>
                v == watchCreatePassword || "Password does not Match",
            },
            min: {
              value: 8,
              message: "Password too short",
            },
          }}
        />
        <p className="text-xs pb-6 text-text-secondary">
          Password must contains at least 8 characters
        </p>
        <Button isValid={isValid}>Create new account</Button>
      </form>

      <p className=" text-center text-text-secondary mt-6 ">
        Already have an account?{" "}
        <a href="\login" className="text-accent">
          Login
        </a>
      </p>
    </>
  );
}
