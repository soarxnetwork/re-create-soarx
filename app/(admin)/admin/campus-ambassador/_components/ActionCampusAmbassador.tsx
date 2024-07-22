"use client";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useRef, useTransition } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { deleteCampusAmbassador } from "@/actions/campus";
import { toast } from "react-toastify";

interface ActionCampusAmbassadorProps {
  id: string;
}
const ActionCampusAmbassador = ({ id }: ActionCampusAmbassadorProps) => {
  const [isPending, startTransition] = useTransition();

  const deleteCa = (id: string) => {
    startTransition(() => {
      deleteCampusAmbassador(id)
        .then(() => {
          toast.success("Succesfully deleted Campus Ambassador");
        })
        .catch((err : any) => {
          toast.error("Error deleting Campus Ambassador");
        });
    });
  };

  return (
    <>
      <ConfirmDialog />
      <button
        className="btn-primary red mt-4 disabled-btn"
        onClick={() => deleteCa(id)}
        disabled={isPending}
      >
        {isPending ? "Deleting..." : "Delete"}
      </button>
    </>
  );
};

export default ActionCampusAmbassador;
