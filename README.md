# E-Market-App-Project (React + TypeScript)

Bu proje, modern web geliştirme standartları kullanılarak hazırlanmış bir e-ticaret arayüzü uygulamasıdır. 

## 🚀 Bugün Tamamlanan Özellikler (Gün 1)
- **Proje Kurulumu:** Vite/CRA kullanılarak TypeScript şablonu ile temel yapı oluşturuldu.
- **Klasör Mimarisi:** Sektör standartlarına uygun `services`, `types`, `pages` ve `styles` klasörleme yapısı kuruldu.
- **TypeScript Entegrasyonu:** API'den dönecek veriler için `Product` interface tanımlamaları yapıldı ve tip güvenliği sağlandı.
- **API Servisi:** `Axios` kütüphanesi kullanılarak `dummyjson.com` üzerinden ürün verilerini çeken asenkron servis katmanı yazıldı.
- **Veri Listeleme Hazırlığı:** `useState` ve `useEffect` hook'ları ile API verilerini yönetme mantığı kuruldu.

## 🛠️ Kullanılan Teknolojiler
- **React** (Functional Components)
- **TypeScript** (Strict Type Checking)
- **Axios** (API Requests)
- **SCSS** (Styling - Hazırlık aşamasında)

## 🏗️ Klasör Yapısı
```text
src/
├── services/   # API istekleri
├── types/      # TypeScript interface tanımları
├── pages/      # Sayfa bileşenleri
└── App.tsx     # Ana uygulama bileşeni
