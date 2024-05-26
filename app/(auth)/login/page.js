"use client";
import Input from "@/components/Input";
import emailSvg from "/public/icons/email.svg";
import passwordSvg from "/public/icons/lock.svg";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import AuthHeader from "@/components/AuthHeader";

export default function login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    clearErrors,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <AuthHeader
        primary={"Login"}
        secondary={"Add your details below to get back into the app"}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          icon={emailSvg}
          placeholder={"e.g. alex@email.com"}
          type={"text"}
          label={"Email Address"}
          register={register}
          errors={errors}
          clearErrors={clearErrors}
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
          placeholder={"Enter your Password"}
          type={"password"}
          label={"Password"}
          register={register}
          errors={errors}
          clearErrors={clearErrors}
          requirements={{
            required: "Can't be empty",
            min: {
              value: 8,
              message: "Too short",
            },
          }}
        />
        
        <Button isValid={isValid}>Login</Button>
      </form>

      <p className=" text-center text-text-secondary mt-6 ">
        Don’t have an account?{" "}
        <a href="\signup" className="text-accent">
          Create account
        </a>
      </p>
    </>
  );
}
