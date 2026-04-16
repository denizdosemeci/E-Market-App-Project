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

### 🚀 Bugün Tamamlanan Özellikler (Gün 3-4)

- **Sepet Dinamikleri:** cartSlice üzerinden ürün ekleme, miktar artırma/azaltma ve sepetten çıkarma işlemleri dinamik hale getirildi.
- **Merkezi Veri Güncelleme:** Sepetteki ürün miktarı değiştikçe toplam fiyat (Total Price) alanının anlık güncellenmesi sağlandı.
- **Silme Onay Modalı:** Ürün silme işleminden önce kullanıcıdan onay alan ve alternatif olarak ürünü favorilere ekleme seçeneği sunan modal yapısı eklendi.
- **Koşullu Render Yapısı:** Sepet boş olduğunda “Sepetiniz Boş” mesajı gösterilecek şekilde ve modal içeriği favori durumuna göre değişecek şekilde yapı kuruldu.
- **Favori Sistemi:** Ürünlerin favorilere eklenmesi sağlandı ve sepet ile favori sistemi arasında bağlantı kuruldu.
- **UI İyileştirmeleri:** position: sticky ile sipariş özeti sabit tutuldu, position: fixed ile modal konumlandırıldı ve overlay + fadeIn animasyonları eklendi.

### 🛠️ Kullanılan Teknolojiler (Gün 3-4)

- **React Hooks:** useState ile modal ve UI state yönetimi sağlandı.
- **Redux Toolkit:** Global state yönetimi ve PayloadAction ile tip güvenli güncellemeler yapıldı.
- **CSS / SCSS:** Modal, overlay ve animasyonlar için stil yapısı oluşturuldu.

### 🚀 Bugün Tamamlanan Özellikler (Gün 5)

- **Akıllı Silme Onay Mekanizması:** Sepetten ürün kaldırılmadan önce kullanıcıya seçim yaptıran, profesyonel bir Modal (Onay Penceresi) sistemi entegre edildi.
- **Çift Yönlü Aksiyon Yapısı:** Modal içine "Sadece Sepetten Çıkar" ve "Çıkar ve Favorilere Ekle" olmak üzere iki farklı fonksiyonel seçenek tanımlandı.
- **Dinamik Favori Kontrolü:** favoriteItems state'i anlık olarak kontrol edilerek, ürün zaten favorilerdeyse kullanıcının karşısına mükerrer (gereksiz) butonların çıkması engellendi (Conditional Rendering).
- **Anlık Sepet Toplamı (Real-time Calculation):** reduce metodu kullanılarak ürün miktarı veya ürün silme işlemlerine bağlı olarak sepet tutarının anlık güncellenmesi sağlandı.
- **Modern Modal Arayüzü:** backdrop-filter (blur efekti) ve yumuşak geçişli animasyonlar kullanılarak, uygulamanın teknik duruşuyla uyumlu, ferah bir modal tasarımı yapıldı.

### 🛠️ Kullanılan Teknolojiler (Gün 5)

- **React Context & Local State:** Modalın açık/kapalı durumu ve seçili ürünün takibi için.
- **Advanced Redux Dispatch:** Birden fazla slice (Cart ve Favorite) arasındaki aksiyonların tek bir buton tetiklemesiyle yönetilmesi.
- **Glassmorphism CSS:** Arka planı bulanıklaştıran modern katman tasarımı.

### 🚀 Bugün Tamamlanan Özellikler (Gün 6)
- **Fiyat Filtrelemesi:** Ürünlerin fiyatına göre "Artan" ve "Azalan" şeklinde anlık olarak sıralanması sağlandı.
- **Dinamik UI:** Arama çubuğuyla entegre çalışan, kullanıcı dostu bir sıralama dropdown'ı eklendi.

### 📍 Adres ve Teslimat Yönetimi (Opsiyonel)
- **Kapsamlı Form Tasarımı:** Şehir, İlçe, Adres, Telefon ve Kişisel bilgilerin (Ad/Soyad) alındığı modern bir form iskeleti oluşturuldu.
- **Kayıtlı Adres Listesi:** Daha önce kaydedilen adreslerin şık bir kart yapısında (Card UI) sergilenmesi sağlandı.
- **Zorunluluk Kontrolleri:** Kapı numarası hariç tüm alanların doldurulmasını teşvik eden görsel işaretçiler eklendi.

### 🎨 Tasarım ve UX İyileştirmeleri
- **Modern Dropdown Stili:** Standart tarayıcı görünümü yerine, projenin temasına uygun özel ok işaretli ve gölgeli dropdown tasarımı yapıldı.
- **Responsive Düzen:** Adres formu ve ürün sıralama arayüzü oluşturuldu.
