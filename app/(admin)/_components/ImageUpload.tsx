import { UploadDropzone } from "@/lib/utils";
import React from "react";
interface ImageUploadProps {
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}
const ImageUpload = ({ setImageUrl }: ImageUploadProps) => {
  return (
    <>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => setImageUrl(res[0].url)}
        appearance={{
          container: {
            padding: "0.5rem 0",
          },
        }}
      />
    </>
  );
};

export default ImageUpload;
