"use client";
import React, { useRef, useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  JobFormInitialValues,
  JobFormResolver,
  JobSchema,
} from "@/schema/JobSchema";

import { InputTextarea } from "primereact/inputtextarea";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ImageUpload from "@/app/(admin)/_components/ImageUpload";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface FormEventProps {
  creatorId?: string;
  jobForm?: JobSchema;
  action: (data: JobSchema) => Promise<void>;
}

const JobAddAdminForm = ({ creatorId, jobForm, action }: FormEventProps) => {
  const pathname = usePathname();
  const editPath = pathname.includes("edit");
  const optToast = editPath
    ? "Succesfully updated Event"
    : "Succesfully added Event";
  const optInitialValues = JobFormInitialValues;

  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, reset, formState, watch, setValue } =
    useForm<JobSchema>({
      resolver: JobFormResolver,
      defaultValues: {
        ...optInitialValues,
        creatorId: creatorId,
      },
      mode: "onChange",
    });

  const onSubmit = (data: JobSchema) => {
    if (!data.imageUrl) {
      toast.error("Image URL is required");
      return;
    }
    startTransition(() =>
      action(data)
        .then(() => {
          toast.success(optToast);
          router.push("/admin/events");
        })
        .catch((err) => {
          console.log(err);
          return err.message;
        })
    );
  };

  const imageUrl = watch("imageUrl");
  const errors = formState.errors;

  return (
    <>
      <h2 className="text-2xl font-medium">Add Job</h2>

      <form
        className="flex flex-col gap-5 pt-9"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full gap-5 e-nfg">
          <input
            className="p-2"
            placeholder="Job Title"
            {...register("title")}
          />
          {errors.title && (
            <span className="text-sm text-red-500">{errors.title.message}</span>
          )}
        </div>

        <div>
          <input className="p-2" placeholder="Job Slug" {...register("slug")} />
          {errors.slug && (
            <span className="text-sm text-red-500">{errors.slug.message}</span>
          )}
        </div>

        <div>
          <input
            className="p-2"
            placeholder="Location"
            {...register("location")}
          />
          {errors.location && (
            <span className="text-sm text-red-500">
              {errors.location.message}
            </span>
          )}
        </div>

        <div>
          <input
            className="p-2"
            placeholder="About Company"
            {...register("aboutCompany")}
          />
          {errors.aboutCompany && (
            <span className="text-sm text-red-500">
              {errors.aboutCompany.message}
            </span>
          )}
        </div>

        <div>
          <input
            className="p-2"
            placeholder=" Company Name"
            {...register("companyName")}
          />
          {errors.companyName && (
            <span className="text-sm text-red-500">
              {errors.companyName.message}
            </span>
          )}
        </div>

        <div>
          <input
            className="p-2"
            placeholder="Application Link"
            {...register("applyLink")}
          />
          {errors.applyLink && (
            <span className="text-sm text-red-500">
              {errors.applyLink.message}
            </span>
          )}
        </div>

        <div>
          <input className="p-2" placeholder="Salary" {...register("salary")} />
          {errors.salary && (
            <span className="text-sm text-red-500">
              {errors.salary.message}
            </span>
          )}
        </div>

        <div>
          <input
            className="p-2"
            placeholder="Experience"
            {...register("experience")}
          />
          {errors.experience && (
            <span className="text-sm text-red-500">
              {errors.experience.message}
            </span>
          )}
        </div>

        <div>
          <input
            className="p-2"
            placeholder="Last Date to Apply"
            {...register("lastDateToApply")}
          />
          {errors.lastDateToApply && (
            <span className="text-sm text-red-500">
              {errors.lastDateToApply.message}
            </span>
          )}
        </div>

        <div>
          <select className="p-2" {...register("section")}>
            <option value="Trending">Trending</option>
            <option value="New">New</option>
            <option value="More chances">More chances</option>
          </select>
        </div>

        <div>
          <input className="p-2" placeholder="Skills" {...register("skills")} />
          {errors.skills && (
            <span className="text-sm text-red-500">
              {errors.skills.message}
            </span>
          )}
        </div>

        <div>
          <input
            className="p-2"
            placeholder="Qualification Required"
            {...register("qualificationRequired")}
          />
          {errors.qualificationRequired && (
            <span className="text-sm text-red-500">
              {errors.qualificationRequired.message}
            </span>
          )}
        </div>

        <div>
          <input
            className="p-2"
            placeholder="InterShip, Full Time Role"
            {...register("jobRole")}
          />
        </div>

        <div className="flex w-full e-nfg  gap-5">
          <div
            className={cn("grid grid-cols-2 gap-5", {
              "grid-cols-1": !imageUrl,
            })}
          >
            {imageUrl ? (
              <div className="relative">
                <Image
                  src={imageUrl as string}
                  alt="event image"
                  width={240}
                  height={240}
                  className="w-full rounded-md object-contain"
                />
                <button
                  onClick={() => setValue("imageUrl", "")}
                  className=" absolute right-4 top-4 hover:opacity-50 opacity-100 transition-all duration-300 ease-in-out"
                >
                  <IoMdCloseCircleOutline color="red" size={24} />
                </button>
              </div>
            ) : (
              <ImageUpload setImageUrl={setValue} />
            )}
            {errors.imageUrl && (
              <span className="text-sm text-red-500">
                {errors.imageUrl.message}
              </span>
            )}
          </div>
        </div>
        <InputTextarea
          className="dark:bg-black dark:text-white p-1 border-gray-400 border-1"
          rows={5}
          cols={30}
          placeholder="Event Description"
          {...register("description")}
        />
        {errors.description && (
          <span className="text-sm text-red-500">
            {errors.description.message}
          </span>
        )}

        <button className="btn-primary" type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default JobAddAdminForm;
