import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {children}
        <button type="button" className="btn-close" onClick = {onClose} data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"></span>
        </button>
    </div>
  )
}

export default Alert