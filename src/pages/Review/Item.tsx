export interface ItemProps {
  title: string;
  price: string;
  stocked: boolean;
}

export default function Item({ stocked, title, price }: ItemProps) {
  return (
    <div>
      <span style={{ margin: "10px", color: !stocked ? "red" : "unset" }}>
        {title}
      </span>
      <span style={{ margin: "10px" }}>{price}</span>
    </div>
  );
}
