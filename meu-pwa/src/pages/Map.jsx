import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

export default function Map() {
  const [selectedSeller, setSelectedSeller] = useState(null);

  const sellers = [
    {
      id: 1,
      name: "Pescado do Zé",
      position: [-27.5952, -48.5482],
      distance: "1.8 km",
      rating: 4.8,
      reviews: 124,
      products: "Camarão, Peixe, Ostras",
      address: "Rua das Pescadoras, 234 - Florianópolis",
      image: "https://source.unsplash.com/random/600x300/?fisherman,boat",
    },
    {
      id: 2,
      name: "Mar Azul Pescados",
      position: [-27.6123, -48.5351],
      distance: "3.2 km",
      rating: 4.6,
      reviews: 89,
      products: "Lagostas, Merluza, Polvo",
      address: "Av. Beira Mar, 567 - Florianópolis",
      image: "https://source.unsplash.com/random/600x300/?seafood,market",
    },
    {
      id: 3,
      name: "Ostras Frescas",
      position: [-27.5801, -48.5623],
      distance: "4.7 km",
      rating: 4.9,
      reviews: 203,
      products: "Ostras, Mexilhões, Vieira",
      address: "Praia da Armação, 89 - Florianópolis",
      image: "https://source.unsplash.com/random/600x300/?oysters",
    },
  ];

  return (
    <div className="map-page">
      <header className="map-header">
        <h2>Vencedores Próximos</h2>
        <p>14 pontos de venda em Florianópolis, SC</p>
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
