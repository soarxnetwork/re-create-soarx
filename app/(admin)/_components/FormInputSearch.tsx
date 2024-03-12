"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const FormInputSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/admin/events/${search}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <form action="" className="relative" onSubmit={onSubmit}>
      <input
        placeholder="Search..."
        className=" p-2 pl-4"
        onChange={handleChange}
        value={search}
      />
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2"
        type="submit"
      >
        <BsSearch />
      </button>
    </form>
  );
};

export default FormInputSearch;
