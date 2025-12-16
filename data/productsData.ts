import hpLogo from "../public/Home/hpLogo.png"

export const products = [
  {
    "id": "prod-001",
    "name": "هاتف ذكي سامسونج Galaxy S23",
    "description": "هاتف ذكي بشاشة AMOLED ومعالج قوي وكاميرا عالية الدقة",
    "price": "900",
    "priceAfterDiscount": "820",
    "stock": "25",
    "category": {
      "id": "1",
      "name": "الكترونيات"
    },
    "subcategory": {
      "id": "1",
      "name": "هواتف ذكية",
      "category": {
        "id": "1",
        "name": "إلكترونيات"
      }
    },
    "brand": {
      "id": "1",
      "name": "Samsung",
      "image": "https://example.com/brands/samsung.png"
    },
    "images": [
      hpLogo,
      
    ],
    "mainImage": hpLogo,
    "isFeatured": true,
    "createdAt": "2024-05-10",
    "updatedAt": "2024-05-12"
  },
  {
    "id": "prod-002",
    "name": "لابتوب Dell XPS 13",
    "description": "لابتوب خفيف الوزن مناسب للعمل والبرمجة",
    "price": "1500",
    "priceAfterDiscount": "1400",
    "stock": "10",
    "category": {
      "id": "1",
      "name": "الكترونيات"
    },
    "subcategory": {
      "id": "1",
      "name": "لابتوبات",
      "category": {
        "id": "1",
        "name": "إلكترونيات"
      }
    },
    "brand": {
      "id": "1",
      "name": "Dell",
      "image": "https://example.com/brands/dell.png"
    },
    "images": [
      hpLogo
    ],
    "mainImage": hpLogo,
    "isFeatured": false,
    "createdAt": "2024-06-01",
    "updatedAt": "2024-06-02"
  }
]
