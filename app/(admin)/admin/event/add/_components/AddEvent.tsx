"use client";
import React, { useState, useTransition } from "react";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Image from "next/image";
import { cn } from "@/lib/utils";
import ImageUpload from "@/app/(admin)/_components/ImageUpload";
import { createEvent } from "@/actions/event";
import { useRouter } from "next/navigation";
const AddEvent = ({ creatorId }: { creatorId: string }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState({} as Date);
  const [location, setLocation] = useState("");
  const [slug, setSlug] = useState("");

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();

    const eventData = {
      title,
      description,
      imageUrl,
      date,
      location,
      creatorId,
      slug,
      // eventAvailability,
    };
    startTransition(() =>
      createEvent(eventData)
        .then(() => {
          router.push("/admin/events");
        })
        .catch((err) => console.log(err))
    );
  };

  return (
    <>
      <h2 className="text-2xl font-medium">Add Event</h2>

      <form className="flex flex-col gap-5 pt-9" onSubmit={handleSubmit}>
        <div className="flex w-full gap-5 e-nfg">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event Title"
          />
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value!)}
            className="w-full"
            placeholder="Event Date"
          />
        </div>
        <div className="flex w-full e-nfg  gap-5">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Event Location"
          />

          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Event Slug"
          />
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
              <ImageUpload setImageUrl={setImageUrl} />
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          cols={30}
          placeholder="Event Description"
        />

        <button className="btn-primary" type="submit" disabled={isPending}>
          Submit
        </button>
      </form>
    </>
  );
};

export default AddEvent;
