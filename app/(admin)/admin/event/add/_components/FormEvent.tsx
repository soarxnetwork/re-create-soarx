"use client";
import React, { useRef, useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ImageUpload from "@/app/(admin)/_components/ImageUpload";
import { createEvent } from "@/actions/event";
import { usePathname, useRouter } from "next/navigation";
import { Toast } from "primereact/toast";
import {
  EventSchema,
  eventFormResolver,
  eventInitialValues,
} from "@/schema/event";
import { Event } from "@prisma/client";
import { toast } from "react-toastify";

interface FormEventProps {
  creatorId?: string;
  event?: EventSchema;
  action: (data: EventSchema) => Promise<void>;
}

const FormEvent = ({ creatorId, event, action }: FormEventProps) => {
  const pahname = usePathname();
  const editPath = pahname.includes("edit");
  const optToast = editPath
    ? "Succesfully updated Event"
    : "Succesfully add Event";
  const optInitialValues = editPath ? event : eventInitialValues;

  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, reset, formState, watch, setValue } =
    useForm<EventSchema>({
      resolver: eventFormResolver,
      defaultValues: {
        ...optInitialValues,
        creatorId: creatorId || event?.creatorId,
      },
      mode: "onChange",
    });

  const onSubmit = (data: EventSchema) => {
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
      <h2 className="text-2xl font-medium">Add Event</h2>

      <form
        className="flex flex-col gap-5 pt-9"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full gap-5 e-nfg">
          <input placeholder="Event Title" {...register("title")} />
          {errors.title && (
            <span className="text-sm text-red-500">{errors.title.message}</span>
          )}
          <Calendar
            className="w-full"
            placeholder="Event Date"
            {...register("date")}
          />
        </div>
        <div className="flex w-full e-nfg  gap-5">
          <input placeholder="Event Location" {...register("location")} />
          {errors.location && (
            <span className="text-sm text-red-500">
              {errors.location.message}
            </span>
          )}
          <input placeholder="Event Slug" {...register("slug")} />
          {errors.slug && (
            <span className="text-sm text-red-500">{errors.slug.message}</span>
          )}
        </div>

        <div className="flex w-full e-nfg  gap-5">
          <div
            className={cn("grid grid-cols-2 gap-5", {
              "grid-cols-1": !imageUrl,
            })}
          >
            {imageUrl !== "" ? (
              <Image
                src={imageUrl}
                alt="event image"
                width={240}
                height={240}
                className="w-full rounded-md object-contain"
              />
            ) : (
              <ImageUpload setImageUrl={setValue} />
            )}
            {errors.imageUrl && (
              <span className="text-sm text-red-500">
                {errors.imageUrl.message}
              </span>
            )}
          </div>
          {/* <Dropdown
            value={eventAvailability}
            onChange={(e) => setEventAvailability(e.value)}
            options={availableOptions}
            optionLabel="name"
            placeholder="Availability"
            className="w-full md:w-14rem"
          /> */}
        </div>
        <InputTextarea
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

export default FormEvent;
