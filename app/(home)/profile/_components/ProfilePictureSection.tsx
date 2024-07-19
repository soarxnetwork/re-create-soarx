import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfileForm from "./_sub_components/ProfileForm";
import { useSession } from "next-auth/react";
import { UploadDropzone } from "@/lib/utils";
import { toast } from "react-toastify";
import { userSchemaProps } from "@/schema/user";
import { updateUser, fetchUser } from "@/actions/user";
import { FaPenToSquare } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

function ProfilePictureSection() {
  const { data: session } = useSession();

  const [showForm, setShowForm] = useState(false);
  const [image, setImage] = useState<string | null | undefined>(null);
  const [bgImage, setBgImage] = useState<string | null | undefined>(null);
  const [uploadForm, setUploadForm] = useState(false);
  const [uploadBgForm, setUploadBgForm] = useState(false);

  const uploadImage = (e: any) => {
    const image = e[0].url;
    console.log(image);
    updateUser(session?.user.id!, {
      image,
      email: session?.user.email,
    } as userSchemaProps);
    toast.success("Image Uploaded Successfully");
  };

  const uploadBgImage = (e: any) => {
    const bgImage = e[0].url;
    updateUser(session?.user.id!, {
      bgImage,
      email: session?.user.email,
    } as userSchemaProps);
    toast.success("Background Image Uploaded Successfully");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await fetchUser(session?.user.id!);
      setImage(data?.image);
      setBgImage(data?.bgImage);
    };
    fetchData();
  }, [image]);

  const handleBgImageUploadFrom = () => {
    setUploadBgForm(!uploadBgForm);
  };

  const handleProfileImageUploadFrom = () => {
    setUploadForm(!uploadForm);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  console.log(bgImage);
  console.log(image);
  return (
    <section className="pb-16">
      <div className="relative">
        {/* Background Image */}
        <div className="h-[200px] md:h-[260px] overflow-hidden bg-gray-600 relative">
          <Image
            src={bgImage || "/placeholder.jpg"}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <button
            onClick={handleBgImageUploadFrom}
            className="absolute bottom-2 md:bottom-4 right-3 md:right-9 p-2 text-black text-xl"
          >
            <FaPenToSquare />
          </button>
          {uploadForm && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto z-50">
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg p-4"
              >
                <UploadDropzone
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => uploadBgImage(res)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Profile Image */}
        <div className="absolute left-5 md:left-10">
          <div className="relative -top-14 md:-top-32 ">
            <button
              className="absolute md:right-7 right-2 p-2 bottom-1 rounded-full shadow-md z-10"
              onClick={handleProfileImageUploadFrom}
            >
              {uploadBgForm && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 overflow-auto z-50">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-lg p-4"
                  >
                    <UploadDropzone
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => uploadImage(res)}
                    />
                  </div>
                </div>
              )}
              <FaPenToSquare className="text-gray-500" />
            </button>
            <img
              src={image || "/placeholder.jpg"}
              alt="Profile Picture"
              className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full border-gray-300 border-3 object-cover"
            />
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="flex md:flex-row justify-between items-center mt-20 px-4 md:px-10">
        <section>
          <h2 className="text-2xl md:text-3xl pl-2 md:pl-0 font-medium">
            {session?.user.username}
          </h2>
          <h2 className="text-2xl md:text-3xl font-medium">
            {session?.user.profession}
          </h2>
        </section>
        <button
          className="text-purple-500 text-lg md:text-xl md:mt-4"
          onClick={handleShowForm}
        >
          <FaPenToSquare />
        </button>
      </div>
      <hr className="my-6 border-gray-500" />

      {/* User Details */}
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-10">
        <section className="mb-6">
          <p className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-600">
              Email ID <span className="text-gray-400">(Private to you)</span>
            </h2>
            <h3>{session?.user.emailVerified ? "Verified" : null}</h3>
          </p>
          <h3 className="pt-2">{session?.user.email}</h3>
        </section>

        <section className="mb-6">
          <p className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-600">
              Mobile Number{" "}
              <span className="text-gray-400">(Private to you)</span>
            </h2>
            <h3>{session?.user.emailVerified ? "Verified" : null}</h3>
          </p>
          <h3 className="pt-2">{session?.user.phone}</h3>
        </section>
      </div>
      <hr className="md:hidden border-1 border-gray-400 dark:border-gray-600"/>

      {/* Profile Form */}
      {showForm && (
        <ProfileForm
          handleShowForm={handleShowForm}
          profession={session?.user.profession}
          email={session?.user.email!}
          id={session?.user.id!}
          gender={session?.user?.gender}
          username={session?.user.username!}
          phone={session?.user.phone}
          city={session?.user.city}
          country={session?.user.country}
          pincode={session?.user.pincode}
        />
      )}
    </section>
  );
}

export default ProfilePictureSection;
