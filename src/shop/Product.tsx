export interface ProductProps {
  name: string;
  id: string;
  price: number;
  qty: number;
  onAddToCart: () => void;
}

export const Product = ({id, name, price, qty, onAddToCart}: ProductProps) => {
  return (
    <div className={'product'}>
      <button onClick={onAddToCart} id={`${id}`}>
        {name} {price} 円
        <div id={`${id}-count`}>{qty}</div>
      </button>

    </div>
  );
};
