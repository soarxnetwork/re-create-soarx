"use client";
import React, { useRef, useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Calendar } from "primereact/calendar";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ImageUpload from "@/app/(admin)/_components/ImageUpload";
import { usePathname, useRouter } from "next/navigation";
import {
  EventSchema,
  eventFormResolver,
  eventInitialValues,
} from "@/schema/event";
import { toast } from "react-toastify";
import { IoMdCloseCircleOutline } from "react-icons/io";
import HostImageUpload from "@/app/(admin)/_components/hostImageUrl";
import EditorTextarea from "@/components/CustomEditor";
import { InputTextarea } from "primereact/inputtextarea";

interface FormEventProps {
  creatorId?: string;
  event?: EventSchema;
  action: (data: EventSchema) => Promise<void>;
}
interface LocationData {
  location: "Online" | "Offline";
  meetingLink?: string;
  venueAddress?: string;
}

const FormEvent = ({ creatorId, event, action }: FormEventProps) => {
  const pahname = usePathname();
  const editPath = pahname.includes("edit");
  const optToast = editPath
    ? "Succesfully updated Event"
    : "Succesfully added Event";
  const optInitialValues = editPath ? event : eventInitialValues;

  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, reset, formState, watch, setValue } =
    useForm<EventSchema>({
      resolver: eventFormResolver,
      defaultValues: {
        id: event?.id,
        creatorId: creatorId || event?.creatorId,
        home_description: event?.home_description || "",
        description: event?.description || "",
        meeturl: event?.meeturl || "",
        venue: event?.venue || "",
        imageUrl: event?.imageUrl || "",
        hostImage: event?.hostImage || "",
        hostName: event?.hostName || "",
        hostLinkedinId: event?.hostLinkedinId || "",
        hostInstgramId: event?.hostInstgramId || "",
        redirectionwhileRegister: event?.redirectionwhileRegister || false,
        RedirectionLink: event?.RedirectionLink || "",
        slug: event?.slug || "",
        title: event?.title || "",
        date: event?.date || new Date(),
        startTime: event?.startTime || "",
        endTime: event?.endTime || "",
        location: event?.location || "Online",
        
      },
      mode: "onChange",
    });

  const onSubmit = (data: EventSchema) => {
   
    if (Location.location === "Online" && !data.meeturl) {
      toast.error("Meeting Link is required");
      return;
    } else if (Location.location === "Offline" && !data.venue) {
      toast.error("Venue Address is required");
      return;
    }
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
  const [Location, setLocation] = useState<LocationData>({
    location: "Online",
    meetingLink: "",
    venueAddress: "",
  });
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setLocation({ ...Location, location: value as LocationData["location"] });
  };

  const imageUrl = watch("imageUrl");
  const hostImage = watch("hostImage");
  const errors = formState.errors;
  // console.log("HostImage is: ", hostImage);
  // console.log(imageUrl);
  // console.log("Set value is: ", setValue)
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
          <label htmlFor="location">Event Location:</label>
          <select
            id="location"
            value={Location.location}
            {...register("location")}
            onChange={handleLocationChange}
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>

          {/* Conditional rendering based on formData.location */}
          {Location.location === "Online" ? (
            <div>
              <label htmlFor="meetingLink">Meeting Link:</label>
              <input
                type="text"
                id="meetingLink"
                placeholder="Enter meeting link"
                {...register("meeturl")}
              />
            </div>
          ) : (
            <div>
              <label htmlFor="venueAddress">Venue Address:</label>
              <input
                type="text"
                id="venueAddress"
                placeholder="Enter venue address"
                {...register("venue")}
              />
            </div>
          )}

          <input placeholder="Event Slug" {...register("slug")} />
          {errors.slug && (
            <span className="text-sm text-red-500">{errors.slug.message}</span>
          )}
        </div>
        <div className="flex w-full e-nfg  gap-5">
          Start Time
          <input type="time" id="timeInput" {...register("startTime")} />{" "}
          {errors.startTime && (
            <span className="text-sm text-red-500">
              {errors.startTime.message}
            </span>
          )}
          End Time
          <input type="time" id="timeInput" {...register("endTime")} />
          {errors.endTime && (
            <span className="text-sm text-red-500">
              {errors.endTime.message}
            </span>
          )}
        </div>

        <div>
          Host image smaller
          <div
            className={cn("grid grid-cols-2 gap-5", {
              "grid-cols-1": !hostImage,
            })}
          >
            {hostImage !== "" ? (
              <div className="relative">
                <Image
                  src={hostImage as string}
                  alt="event image"
                  width={240}
                  height={240}
                  className="w-full rounded-md object-contain"
                />
                <button
                  onClick={() => setValue("hostImage", "")}
                  className=" absolute right-4 top-4 hover:opacity-50 opacity-100 transition-all duration-300 ease-in-out"
                >
                  <IoMdCloseCircleOutline color="red" size={24} />
                </button>
              </div>
            ) : (
              <HostImageUpload setImageUrl={setValue} />
            )}
            {/* {errors.imageUrl && (
              <span className="text-sm text-red-500">
                {errors.imageUrl.message}
              </span>
            )} */}
          </div>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Host name"
              className="p-2"
              {...register("hostName")}
            />
            <input
              type="text"
              placeholder="host Linkedin"
              className="p-2"
              {...register("hostLinkedinId")}
            />
            <input
              type="text"
              placeholder="host Instagram"
              className="p-2"
              {...register("hostInstgramId")}
            />
            
            <div className="flex">
            <label htmlFor="Any Redirection">Registeration on another website</label>
            <input
              type="checkbox"
              id="redirectionwhileRegister"
              {...register("redirectionwhileRegister")}
            />
            </div>

            <input
              type="text"
              placeholder="Redirection Link"
              className="p-2"
              {...register("RedirectionLink")}
            />

          </div>
        </div>

        <div className="flex w-full e-nfg  gap-5">
          <div
            className={cn("grid grid-cols-2 gap-5", {
              "grid-cols-1": !imageUrl,
            })}
          >
            {imageUrl !== "" ? (
              <div className="relative">
                <Image
                  src={imageUrl}
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
          {...register("home_description")}
        />
        <EditorTextarea setValue={setValue} />

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
