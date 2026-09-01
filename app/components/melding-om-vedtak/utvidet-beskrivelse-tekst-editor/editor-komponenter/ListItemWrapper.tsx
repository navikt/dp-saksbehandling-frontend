import { Path, PortableTextTextBlock } from "@portabletext/editor";
import { useListIndex } from "@portabletext/plugin-list-index";

export function ListItemWrapper({
  node,
  path,
  children,
}: {
  node: PortableTextTextBlock;
  path: Path;
  children: React.ReactNode;
}) {
  const listIndex = useListIndex(path);

  return (
    <span data-list-index={listIndex} data-level={node.level} data-list-item={node.listItem}>
      {children}
    </span>
  );
}
