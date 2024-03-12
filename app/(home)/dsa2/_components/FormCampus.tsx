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

const FormCampus = () => {
  const toast = useRef<any>(null);

  const [isPending, startTransition] = useTransition();
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
    console.log(data);
    startTransition(() => {
      showSuccess();
      reset();
    });
  };

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Succesfully Registered!",
      life: 3000,
    });
  };

  return (
    <motion.form
      layout
      className=" space-y-8 bg-secondDsaWhite px-8 py-4 rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Toast ref={toast} position="bottom-right" />
      <div>
        <label htmlFor="fullname">Fullname</label>
        <input
          type="text"
          id="fullname"
          className="inputDsa2  "
          {...register("fullname")}
        />
        {errors.fullname && <ErrorFormDsa message={errors.fullname.message} />}
      </div>
      <div>
        <label htmlFor="College email ID">College email ID</label>
        <label
          htmlFor="College email ID"
          className="text-sm text-secondDsaBlack"
        >
          (if unavailable, please tell the alternate email address)
        </label>
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
        <label htmlFor="Are you a part of any coding club in your college?">
          Are you a part of any coding club in your college?
        </label>
        <label
          htmlFor="Are you a part of any coding club in your college?"
          className=" text-sm text-secondDsaBlack"
        >
          If yes, please mention which ones.
        </label>
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
        <label htmlFor="What is the strength of STEM students in your college?">
          What is the strength of STEM students in your college?
        </label>
        <input
          type="text"
          id="What is the strength of STEM students in your college?"
          className="inputDsa2  "
          {...register("strenghtStem")}
        />
        {errors.strenghtStem && (
          <ErrorFormDsa message={errors.strenghtStem.message} />
        )}
      </div>
      <div>
        <ButtonSecondDsa text="Register Now" />
      </div>
    </motion.form>
  );
};

export default FormCampus;
