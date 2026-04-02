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
```

## 🚀 Bugün Tamamlanan Özellikler (Gün 2)

- **Redux Toolkit Mimarisi:** Uygulamanın merkezi veri deposu (`store`) ve ürün yönetimi için `productSlice` yapısı kuruldu.
- **Global State Yönetimi:** `useAppDispatch` ve `useAppSelector` özel hook'ları tanımlanarak bileşenler arası veri akışı sağlandı.
- **Modern UI Tasarımı:** Saf CSS kullanılarak Vite/Docusaurus estetiğinde, teknik ve ferah bir arayüz geliştirildi.
- **Gelişmiş Ürün Kartları:** Dinamik görseller için `object-fit: contain` optimizasyonu ve interaktif "Favori" (Kalp) butonları entegre edildi.
- **Sepet (Cart) Prototipi:** Ürün listesi ve "Order Summary" (Sipariş Özeti) alanlarını içeren profesyonel sepet sayfası iskeleti oluşturuldu.

### 🛠️ Kullanılan Teknolojiler (Gün 2)

- **Redux Toolkit** (Global State Management)
- **React-Redux** (Provider & Connectors)
- **CSS3** (Grid & Flexbox Architecture)
- **SVG Icons** (Interaktif Favori Sistemi)

### 🏗️ Güncel Klasör Yapısı

```text
src/
├── app/          # Redux Store & Hooks
├── features/     # Slices (Logic & Actions)
├── services/     # Axios API requests
├── types/        # TypeScript interfaces
├── pages/        # Products & Cart pages
└── App.css       # Saf CSS (Vite Theme)
```
