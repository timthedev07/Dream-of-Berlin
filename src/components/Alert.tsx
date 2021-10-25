import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  setActive: Dispatch<SetStateAction<boolean>>;
  active: boolean;
  text: string;
  type?: string;
}
export const Alert: FC<Props> = (props) => {
  const handleClick = () => {
    props.setActive(false);
  };

  return (
    <div
      className={`custom-alert custom-alert-${props.type} ${
        props.active ? "alert-active" : "alert-inactive"
      }`}
    >
      <p>{props.text}</p>
      <img
        src="/images/icons/close.svg"
        alt=""
        onClick={handleClick}
        className="close-icon"
      />
    </div>
  );
};
