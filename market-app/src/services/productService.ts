
import axios from 'axios'

export const getProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products")

    return response.data.products
}



// Ne İş Yapar: İnternetteki veriye gider, "Bana ürünleri ver" der ve o veriyi paketleyip getirir.
// Neden Var: Eğer fetch veya axios kodlarını her yerde ayrı ayrı yazarsan, 
// yarın öbür gün API adresi değiştiğinde 50 tane dosyayı düzeltmen gerekir. Ama burada tek bir yerden yönetirsin.