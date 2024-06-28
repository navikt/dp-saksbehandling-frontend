import type { PropsWithChildren } from "react";
import classnames from "classnames";
import styles from "./InfoCard.module.css";

interface IProps {
  className?: string;
}

export function InfoCard(props: PropsWithChildren<IProps>) {
  return <div className={classnames(styles.container, props.className)}>{props.children}</div>;
}
