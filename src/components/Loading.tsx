import { FC } from "react";

interface LoadingProps {
  display: string;
}

export const Loading: FC<LoadingProps> = (props) => {
  return (
    <div
      className={
        props.display === "block" ? `loading loading-active` : "loading"
      }
      style={{
        display: props.display,
      }}
    >
      <img src="/images/loading.svg" alt="" />
    </div>
  );
};
