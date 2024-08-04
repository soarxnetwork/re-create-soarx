import { UploadDropzone } from "@/lib/utils";
import React from "react";

const HostImageUpload = ({ setImageUrl }: any) => {
  return (
    <>
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => setImageUrl("hostImage", res[0].url)}
        appearance={{
          container: {
            padding: "0.5rem 0",
          },
        }}
      />
    </>
  );
};

export default HostImageUpload;
