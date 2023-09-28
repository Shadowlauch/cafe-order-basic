import {Product} from './Product';
import {useState} from 'react';
import './Shop.css';

interface IProduct {
  id: string;
  name: string;
  price: number;
}

const PRODUCT_DATA: IProduct[] = [
  {
    id: 'coffee',
    name: 'コーヒー',
    price: 480
  },
  {
    id: 'tea',
    name: '紅茶',
    price: 280
  },
  {
    id: 'milk',
    name: 'ミルク',
    price: 180
  },
  {
    id: 'coke',
    name: 'コーラ',
    price: 190
  },
  {
    id: 'beer',
    name: 'ビール',
    price: 580
  },
];

export const Shop = () => {
  const [cart, setCart] = useState<Record<string, number>>({});

  const handleAddToCart = (id: string) => {
    const newCart = {...cart};
    newCart[id] = (newCart?.[id] ?? 0) + 1;
    setCart(newCart);
  };

  const totalQty = Object.values(cart).reduce((acc, qty) => acc + qty, 0);
  const totalPrice = Object.entries(cart).reduce((acc, [id, qty]) => {
    const product = PRODUCT_DATA.find(p => p.id === id)!;
    return acc + (product.price * qty);
  }, 0);


  return (
    <div className={'shop'}>
      <div className={'catalogue'}>
        {PRODUCT_DATA.map((product) => {
          return <Product name={product.name} id={product.id} price={product.price} qty={cart?.[product.id] ?? 0} key={product.id}
                          onAddToCart={() => handleAddToCart(product.id)}></Product>;
        })}
      </div>
      <div className={'cart'}>
        <div>
          <div>お会計</div>
          <hr/>
          <div>商品数: <span id={'count'}>{totalQty}</span> 個</div>
          <div>合計金額: <span id={'price'}>{totalPrice}</span> 円</div>
        </div>
      </div>
    </div>
  );
};
