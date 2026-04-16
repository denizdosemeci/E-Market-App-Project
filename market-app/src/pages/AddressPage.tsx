import React from 'react';

const AddressPage = () => {

  return (
    <div className="address-page-container">
      <h2 className="address-section-title">Teslimat Bilgileri</h2>

      {/* --- ADRES EKLEME FORMU --- */}
      <form className="address-form">
        <div className="form-group">
          <label>Ad *</label>
          <input type="text" name="firstName" />
          {/* <span className="error-message">Ad en az 2 karakter olmalıdır</span> */}
        </div>

        <div className="form-group">
          <label>Soyad *</label>
          <input type="text" name="lastName" />
        </div>

        <div className="form-group">
          <label>Telefon Numarası *</label>
          <input type="tel" name="phone" />
        </div>

        <div className="form-group">
          <label>Şehir *</label>
          <input type="text" name="city" />
        </div>

        <div className="form-group">
          <label>İlçe *</label>
          <input type="text" name="district" />
        </div>

        <div className="form-group">
          <label>Kapı Numarası (Opsiyonel)</label>
          <input type="text" name="doorNumber" />
        </div>

        <div className="form-group full-width">
          <label>Açık Adres *</label>
          <textarea 
            rows={3} 
            placeholder="Mahalle, sokak ve cadde bilgilerini giriniz..." 
            name="addressDetail"
          ></textarea>
        </div>

        <button type="button" className="btn-save-address">
          ADRESİ KAYDET
        </button>
      </form>

      {/* --- KAYITLI ADRESLER LİSTESİ --- */}
      <h2 className="address-section-title">Kayıtlı Adreslerim</h2>
      
      <div className="saved-addresses-grid">
        {/* Örnek bir kayıtlı adres kartı */}
        <div className="address-card">
          <span className="address-tag">Ev</span>
          <h4>Deniz Döşemeci</h4>
          <p>Beşiktaş, İstanbul</p>
          <p>Barbaros Bulvarı No:123 Kapı: 5A</p>
          <p className="phone">📞 0555 123 45 67</p>
        </div>

        {/* İkinci bir örnek kart */}
        <div className="address-card">
          <span className="address-tag">İş</span>
          <h4>Deniz Döşemeci</h4>
          <p>Kadıköy, İstanbul</p>
          <p>Moda Caddesi No:10 Daire: 2</p>
          <p className="phone">📞 0555 987 65 43</p>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;