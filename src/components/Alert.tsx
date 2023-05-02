import { ReactNode } from "react";

interface Props {
  alertInfo: string[];
  onClose: () => void;
}

const Alert = ({ onClose, alertInfo }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {alertInfo}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
