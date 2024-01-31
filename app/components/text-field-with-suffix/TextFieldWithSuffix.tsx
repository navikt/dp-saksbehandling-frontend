import React from "react";
import type { TextFieldProps } from "@navikt/ds-react";
import { TextField } from "@navikt/ds-react";
import classnames from "classnames";
import styles from "./TextFieldWithSuffix.module.css";

interface IProps extends TextFieldProps {
  suffix: string;
}

export function TextFieldWithSuffix(props: IProps) {
  const { suffix, className, ...rest } = props;
  return (
    <div className={classnames(styles.container, className)}>
      <TextField {...rest} />
      <span>{props.suffix}</span>
    </div>
  );
}
