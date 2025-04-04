import { AlertTriangle } from "lucide-react";

type PageErrorProps = {
  message?: string;
};

export const PageError = ({
  message = "Something went wrong",
}: PageErrorProps) => {
  return (
    <div>
      <AlertTriangle />
      <p>{message}</p>
    </div>
  );
};
