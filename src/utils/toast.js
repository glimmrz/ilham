import { toast } from "sonner";

export const notify = (message, description) => {
  toast(message, {
    description: description,
    position: "bottom-left",
    dismissible: true,
    action: {
      label: "Close",
      onClick: () => console.log("Undo"),
    },
  });
};
