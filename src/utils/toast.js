import { toast } from "sonner";

export const notify = (message, description = "") => {
  toast(message, {
    description: description,
    action: {
      label: "Close",
      onClick: () => console.log("closed"),
    },
  });
};
