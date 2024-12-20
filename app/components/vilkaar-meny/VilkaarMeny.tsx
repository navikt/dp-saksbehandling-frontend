import { CircleFillIcon } from "@navikt/aksel-icons";
import { List } from "@navikt/ds-react";
import classNames from "classnames";

import styles from "./VilkaarMeny.module.css";

interface IProps {
  kategori: string;
  onChange: (kategori: string) => void;
  kategorier: {
    [key: string]: {
      title: string;
    };
  };
}

export function VilkaarMeny({ kategori, onChange, kategorier }: IProps) {
  const items = [];

  for (const key in kategorier) {
    items.push(
      <List.Item
        key={key}
        onClick={() => onChange(key)}
        className={classNames(styles.listItem, {
          [styles.listItemSelected]: key === kategori,
        })}
        icon={<CircleFillIcon className={styles.circleIcon} fontSize="0.5em" />}
      >
        <span>{kategorier[key].title}</span>
      </List.Item>,
    );
  }

  return (
    <List as="ul" className={styles.vilkaarMeny}>
      {items}
    </List>
  );
}
