"use client";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useRef, useTransition } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { deleteCampusAmbassador } from "@/actions/campus";

interface ActionCampusAmbassadorProps {
  id: string;
}
const ActionCampusAmbassador = ({ id }: ActionCampusAmbassadorProps) => {
  const [isPending, startTransition] = useTransition();
  const toast = useRef<any>(null);

  const deleteCa = (id: string) => {
    startTransition(() => {
      deleteCampusAmbassador(id)
        .then(() => {})
        .catch((err) => {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Something went wrong",
            life: 3000,
          });
        });
    });
  };

  return (
    <>
      <Toast ref={toast} />
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
