import React, { useEffect, useState } from 'react';
import type { Address } from '../types/Address';

const AddressPage = () => {
    const [data, setData] = useState<Address[]>([]);
    const [form, setForm] = useState<Address>({
        firstName: "",
        lastName: "",
        phone: "",
        city: "",
        district: "",
        doorNumber: "",
        addressDetail: ""
    });

    const getDataFromLocalStorage = () => {
        const storedData = localStorage.getItem("addressData");
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    };

    useEffect(() => {
        getDataFromLocalStorage();
    }, []);

    const saveInfo = () => {
        if (!form.firstName || !form.lastName || !form.phone || !form.city || !form.district || !form.addressDetail) {
            alert("Lütfen tüm zorunlu alanları doldurun.");
            return;
        }

        setData([...data, form]);
        localStorage.setItem("addressData", JSON.stringify([...data, form]));

        setForm({
            firstName: "",
            lastName: "",
            phone: "",
            city: "",
            district: "",
            doorNumber: "",
            addressDetail: ""
        });
    };

    const removeAddress = (index: number) => {
        data.splice(index, 1);
        localStorage.setItem("addressData", JSON.stringify([...data]));
        setData([...data]);
    }

    return (
        <div className="address-page-container">
            <h2 className="address-section-title">Teslimat Bilgileri</h2>

            <form className="address-form">
                <div className="form-group">
                    <label>Ad *</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={form.firstName} 
                        onChange={(e) => setForm({...form, firstName: e.target.value})} 
                    />
                </div>

                <div className="form-group">
                    <label>Soyad *</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={form.lastName} 
                        onChange={(e) => setForm({...form, lastName: e.target.value})} 
                    />
                </div>

                <div className="form-group">
                    <label>Telefon Numarası *</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={form.phone} 
                        onChange={(e) => setForm({...form, phone: e.target.value})} 
                    />
                </div>

                <div className="form-group">
                    <label>Şehir *</label>
                    <input 
                        type="text" 
                        name="city" 
                        value={form.city} 
                        onChange={(e) => setForm({...form, city: e.target.value})} 
                    />
                </div>

                <div className="form-group">
                    <label>İlçe *</label>
                    <input 
                        type="text" 
                        name="district" 
                        value={form.district} 
                        onChange={(e) => setForm({...form, district: e.target.value})} 
                    />
                </div>

                <div className="form-group">
                    <label>Kapı Numarası (Opsiyonel)</label>
                    <input 
                        type="text" 
                        name="doorNumber" 
                        value={form.doorNumber} 
                        onChange={(e) => setForm({...form, doorNumber: e.target.value})} 
                    />
                </div>

                <div className="form-group full-width">
                    <label>Açık Adres *</label>
                    <textarea 
                        rows={3} 
                        placeholder="Mahalle, sokak ve cadde bilgilerini giriniz..." 
                        name="addressDetail"
                        value={form.addressDetail}
                        onChange={(e) => setForm({...form, addressDetail: e.target.value})}
                    ></textarea>
                </div>

                <button type="button" className="btn-save-address" onClick={saveInfo}>
                    ADRESİ KAYDET
                </button>
            </form>

            <h2 className="address-section-title">Kayıtlı Adreslerim</h2>
            
            <div className="saved-addresses-grid">
                {data.length > 0 ? data.map((address, index) => (
                    <div className="address-card" key={index}>
                        <span className="address-tag">Adres {index + 1}</span>
                        <h4>{address.firstName} {address.lastName}</h4>
                        <p>{address.district}, {address.city}</p>
                        <p>{address.addressDetail} {address.doorNumber && `No: ${address.doorNumber}`}</p>
                        <p className="phone">📞 {address.phone}</p>
                        <button className="btn-remove-address" onClick={() => removeAddress(index)}>
                            Adresi Sil
                        </button>
                    </div>
                )) : (
                    <p>Henüz kayıtlı bir adres yok.</p>
                )}
            </div>
        </div>
    );
};

export default AddressPage;