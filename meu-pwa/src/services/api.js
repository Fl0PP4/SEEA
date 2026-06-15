// Dados simulados (Mock API)
const products = [
  {
    id: 1,
    name: "Camarão Rosa Grande",
    category: "Camarões",
    price: 89.90,
    unit: "kg",
    origin: "Florianópolis - SC",
    image: "https://source.unsplash.com/random/600x400/?shrimp",
    rating: 4.8,
    stock: 45,
    certifications: ["MSC", "ASC"]
  },
  {
    id: 2,
    name: "Filé de Merluza Fresco",
    category: "Peixes",
    price: 45.90,
    unit: "kg",
    origin: "Rio Grande do Sul",
    image: "https://source.unsplash.com/random/600x400/?fish",
    rating: 4.6,
    stock: 28,
    certifications: ["MSC"]
  },
  {
    id: 3,
    name: "Ostras Frescas",
    category: "Moluscos",
    price: 68.00,
    unit: "dúzia",
    origin: "Florianópolis",
    image: "https://source.unsplash.com/random/600x400/?oysters",
    rating: 4.9,
    stock: 95,
    certifications: ["ASC", "CSI"]
  },
  {
    id: 4,
    name: "Lagosta ao Vivo",
    category: "Crustáceos",
    price: 135.00,
    unit: "unidade",
    origin: "Santa Catarina",
    image: "https://source.unsplash.com/random/600x400/?lobster",
    rating: 4.7,
    stock: 12,
    certifications: ["MSC"]
  }
];

const sellers = [
  {
    id: 1,
    name: "Pescado do Zé",
    position: [-27.5952, -48.5482],
    distance: "1.8 km",
    rating: 4.8,
    reviews: 124,
    products: "Camarão, Peixe, Ostras",
    address: "Rua das Pescadoras, 234 - Lagoa da Conceição",
    image: "https://source.unsplash.com/random/600x300/?fisherman,boat",
  },
  {
    id: 2,
    name: "Mar Azul Pescados",
    position: [-27.5795, -48.5450],
    distance: "3.2 km",
    rating: 4.6,
    reviews: 89,
    products: "Lagostas, Merluza, Polvo",
    address: "Rua dos Açores, 567 - João Paulo",
    image: "https://source.unsplash.com/random/600x300/?seafood,market",
  },
  {
    id: 3,
    name: "Ostras Frescas",
    position: [-27.5801, -48.5450],
    distance: "4.7 km",
    rating: 4.9,
    reviews: 203,
    products: "Ostras, Mexilhões, Vieira",
    address: "Praia da Armação, 89 - Armação",
    image: "https://source.unsplash.com/random/600x300/?oysters",
  },
  {
    id: 4,
    name: "Pesca Artesanal SC",
    position: [-27.5965, -48.5540],
    distance: "2.1 km",
    rating: 4.7,
    reviews: 156,
    products: "Peixes variados, Camarão, Siri",
    address: "Rua João Pio Duarte, 450 - Centro",
    image: "https://source.unsplash.com/random/600x300/?fishing,traditional",
  },
  {
    id: 5,
    name: "Frutos do Mar Premium",
    position: [-27.5900, -48.5580],
    distance: "2.9 km",
    rating: 4.9,
    reviews: 267,
    products: "Lagosta, Camarão Rosa, Polvo",
    address: "Av. Hercílio Luz, 890 - Centro",
    image: "https://source.unsplash.com/random/600x300/?luxury,seafood",
  }
];

// Funções da API
export const getProducts = async (category = null, search = null) => {
  // Simula delay de rede
  await new Promise(resolve => setTimeout(resolve, 400));
  
  let filtered = products;
  
  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }
  if (search) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  return filtered;
};

export const getProductById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return products.find(p => p.id === Number(id));
};

export const getSellers = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return sellers;
};

export const getCategories = () => {
  return ["Camarões", "Peixes", "Moluscos", "Crustáceos", "Congelados"];
};
