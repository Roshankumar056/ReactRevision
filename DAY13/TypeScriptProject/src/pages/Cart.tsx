type CartProps = {
  open: boolean;
  onClose: () => void;
};

const Cart = ({
  open,
  onClose,
}: CartProps) => {
  return (
    <div>
      {open && <h1>Cart Open</h1>}

      <button onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Cart;