import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { getSellers } from "../services/api";

export default function Map() {
  const navigate = useNavigate();
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    getSellers().then(data => setSellers(data || []));
  }, []);



  return (
    <div className="map-page">
      <header className="map-header">
        <div className="map-header-content">
          <button className="back-btn" onClick={() => navigate("/home")}>← Voltar</button>
          <div>
            <h2>Vendedores Próximos</h2>
            <p>14 pontos de venda em Florianópolis, SC</p>
          </div>
        </div>
      </header>

      <div className="map-container">
        <MapContainer
          center={[-27.5952, -48.5482]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {sellers.map((seller) => (
            <Marker
              key={seller.id}
              position={seller.position}
              eventHandlers={{
                click: () => setSelectedSeller(seller),
              }}
            >
              <Popup>
                <strong>{seller.name}</strong>
                <br />
                ⭐ {seller.rating} ({seller.reviews})
                <br />
                📍 {seller.distance}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {selectedSeller && (
        <div className="seller-detail-panel">
          <button className="close-panel" onClick={() => setSelectedSeller(null)}>
            ✕
          </button>

          <img
            src={selectedSeller.image}
            alt={selectedSeller.name}
            className="seller-image"
          />

          <h3>{selectedSeller.name}</h3>
          <p className="rating">
            ⭐ {selectedSeller.rating} • {selectedSeller.reviews} avaliações
          </p>
          <p className="address">
            📍 {selectedSeller.distance} — {selectedSeller.address}
          </p>

          <div className="products">
            <strong>Produtos:</strong> {selectedSeller.products}
          </div>

          <button className="contact-btn">Entrar em contato</button>
          <button className="buy-btn">Ver produtos e comprar</button>
        </div>
      )}
    </div>
  );
}
