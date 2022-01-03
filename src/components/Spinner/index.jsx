import { FaSpinner } from "react-icons/fa";
import style from "./Spinner.module.css";
export const Spinner = () => {
  return (
    <div className={`${style.spinner}`}>
      <FaSpinner size="20rem" className={style.spinning} />
    </div>
  );
};
