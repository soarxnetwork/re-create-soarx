"use client";
import React, { useRef, useState, useTransition } from "react";
import ButtonSecondDsa from "./ButtonSecondDsa";
import { yearsDsa2 } from "@/constants/dsa2";
import { useForm } from "react-hook-form";
import { Dsa2Schema, defaultValuesDsa2, dsa2Schema } from "@/schema/dsa2";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toast } from "primereact/toast";
import ErrorFormDsa from "./ErrorFormDsa";
import { motion } from "framer-motion";
import { createCampusAmbassador } from "@/actions/campus";
import { toast } from "react-toastify";

const FormCampus = () => {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Dsa2Schema>({
    defaultValues: {
      ...defaultValuesDsa2,
    },
    resolver: zodResolver(dsa2Schema),
    mode: "onChange",
  });

  const onSubmit = (data: Dsa2Schema) => {
    startTransition(() => {
      createCampusAmbassador(data)
        .then(() => {
          toast.success("Succesfully Registered wait for confirmation");
          reset();
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  return (
    <motion.form
      layout
      className=" space-y-8 px-8 py-4 rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="fullname">Full name</label>
        <input
          type="text"
          id="fullname"
          className="inputDsa2"
          {...register("fullname")}
        />
        {errors.fullname && <ErrorFormDsa message={errors.fullname.message} />}
      </div>
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="College email ID">College email ID</label>
          <label
            htmlFor="College email ID"
            className="text-sm"
          >
            (if unavailable, please tell the alternate email address)
          </label>
        </div>
        <input
          type="text"
          id="College email ID"
          className="inputDsa2  "
          {...register("collegeEmail")}
        />
        {errors.collegeEmail && (
          <ErrorFormDsa message={errors.collegeEmail.message} />
        )}
      </div>
      <div>
        <label htmlFor="Name of the college">Name of the college</label>
        <input
          type="text"
          id="Name of the college"
          className="inputDsa2  "
          {...register("collegeName")}
        />
        {errors.collegeName && (
          <ErrorFormDsa message={errors.collegeName.message} />
        )}
      </div>
      <div>
        <label htmlFor="Location (State) of your college">
          Location (State) of your college
        </label>
        <input
          type="text"
          id="Location (State) of your college
              "
          className="inputDsa2  "
          {...register("collegeLocation")}
        />
        {errors.collegeLocation && (
          <ErrorFormDsa message={errors.collegeLocation.message} />
        )}
      </div>
      <div className=" grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="Stream">Stream</label>
          <input
            type="text"
            id="Stream"
            className="inputDsa2  "
            {...register("stream")}
          />
          {errors.stream && <ErrorFormDsa message={errors.stream.message} />}
        </div>
        <div className="flex flex-col">
          <label htmlFor="Graduation year">Graduation</label>
          <select
            id="Graduation year"
            {...register("graduationYear")}
            className="inputDsa2"
          >
            {yearsDsa2.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.graduationYear && (
            <ErrorFormDsa message={errors.graduationYear.message} />
          )}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <label htmlFor="Are you a part of any coding club in your college?">
            Are you a part of any coding club in your college?
          </label>
          <label
            htmlFor="Are you a part of any coding club in your college?"
            className=" text-sm text-secondDsaBlack"
          >
            If yes, please mention which ones.
          </label>
        </div>

        <input
          type="text"
          id="Are you a part of any coding club in your college?"
          className="inputDsa2  "
          {...register("inCodingClub")}
        />
        {errors.inCodingClub && (
          <ErrorFormDsa message={errors.inCodingClub.message} />
        )}
      </div>
      <div>
        <label htmlFor="What is the strength of CSE/IT students in your college?">
          What is the strength of CSE/IT students in your college?
        </label>
        <input
          type="text"
          id="What is the strength of CSE/IT students in your college?"
          className="inputDsa2  "
          {...register("strenghtStem")}
        />
        {errors.strenghtStem && (
          <ErrorFormDsa message={errors.strenghtStem.message} />
        )}
      </div>
      <div>
        <button
          disabled={isPending}
          type="submit"
          className="px-8 font-bold py-3 signInbut rounded-xl text-lg"
        >
          {isPending ? "Loading..." : "Register Now"}
        </button>
      </div>
    </motion.form>
  );
};

export default FormCampus;
