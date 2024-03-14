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

  const deleteWithId = (id: string) => {
    deleteCampusAmbassador(id);
  };
  const accept = (id: string) => {
    startTransition(() => {
      deleteWithId(id);
      toast.current.show({
        severity: "warn",
        summary: "Confirmed",
        detail: "You have successfully deleted",
        life: 3000,
      });
    });
  };
  const reject = () => {
    toast.current.show({
      severity: "info",
      summary: "Rejected",
      detail: "You have cancelled",
      life: 3000,
    });
  };
  const confirm2 = (id: string) => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => accept(id),
      reject,
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
      <button className="btn-primary red mt-4" onClick={() => confirm2(id)}>
        Delete
      </button>
    </>
  );
};

export default ActionCampusAmbassador;
