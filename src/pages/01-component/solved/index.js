import "./index.css";

export const ProductCard = () => {
  return (
    <div data-testid="product-card" className="product-card">
      <div className="product-card-image-item">
        <img
          className="product-card-image"
          data-testid="product-card-image"
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="chairs by the pool facing the open sea"
        />
      </div>
      <div className="product-card-content-item">
        <h1 data-testid="product-card-title">Hilton Hotel</h1>
        <h2 data-testid="product-card-sub-title">Manchester</h2>
      </div>
    </div>
  );
};
