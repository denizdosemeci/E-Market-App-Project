import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";

export const store=configureStore({
    reducer:{
        products: productsReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



// Ne İş Yapar: Uygulamanın her köşesinden erişilebilen devasa bir "State" (durum) havuzudur. 
// Sepette ne var? Ürünler geldi mi? Kullanıcı ne arattı? Hepsi burada tutulur.
// Neden Var: React'ta veriyi "anneden çocuğa" (Props) aktarmak çok yorucudur. 
// Store sayesinde en alttaki buton bile en üstteki veriye "Hop, ben geldim!" diyerek erişebilir.

//store.ts dosyasında yaptığın şey, aslında uygulamanın sahip olduğu tüm bilgileri tek bir büyük nesne (object) içinde toplamaktır.
// configureStore: Bu komut, Redux'a "Bana bir depo kur" talimatıdır.
// reducer: Deponun içindeki çekmecelerdir. Mesela products: productReducer yazdığında, depoda "products" adında bir çekmece açarsın ve bu çekmecenin içindeki kuralları productSlice belirler.
// RootState ve AppDispatch: Bunlar TypeScript için "etiketleme" işlemidir. Deponun içinde ne kadar veri olduğunu ve hangi komutların (dispatch) çalışabileceğini sisteme tanıtır.