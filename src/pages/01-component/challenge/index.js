import "./index.css";

export const ProductCard = () => {
  return (
    <div className="product-card" data-testid="card">
      <div className="product-card-image-item">
        <img
          data-testid="card-img"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="red nike shoes"
        />
      </div>
      <div className="product-card-content-item">
        <h1 data-testid="title">Nike</h1>
        <h2 data-testid="subtitle">Red Nike Shoes</h2>
      </div>
    </div>
  );
};
