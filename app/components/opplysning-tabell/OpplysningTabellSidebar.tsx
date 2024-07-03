import { List } from "@navikt/ds-react";
import styles from "./OpplysningTabell.module.css";
import { CircleFillIcon } from "@navikt/aksel-icons";
import classNames from "classnames";

interface IProps {
  kategori: string;
  onChange: (kategori: string) => void;
  kategorier: {
    [key: string]: {
      title: string;
    };
  };
}

export function OpplysningTabellSidebar({ kategori, onChange, kategorier }: IProps) {
  const items = [];

  for (const key in kategorier) {
    const itemClass = classNames(styles.listItem, {
      [styles.active]: key === kategori,
    });

    items.push(
      <List.Item
        key={key}
        onClick={() => onChange(key)}
        className={itemClass}
        icon={<CircleFillIcon className={styles.circleIcon} fontSize="0.5em" />}
      >
        <span>{kategorier[key].title}</span>
      </List.Item>,
    );
  }

  return (
    <div>
      <List as="ul" className={styles.categoryList}>
        {items}
      </List>
    </div>
  );
}
