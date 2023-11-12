import Item, { ItemProps } from "./Item";

interface GroupProps {
  title: string;
  data: ItemProps[];
}
export default function Group({ title, data }: GroupProps) {
  return (
    <div>
      <div style={{ fontWeight: "bold", textAlign: "center" }}>{title}</div>
      {data.map(({ title, price, stocked }) => (
        <Item title={title} price={price} stocked={stocked} />
      ))}
    </div>
  );
}
