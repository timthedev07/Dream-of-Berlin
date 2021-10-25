import { FC } from "react";

export const Highlight: FC = ({ children }) => {
  return <mark className="number-mark">{children}</mark>;
};
