import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../stores/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;     


// Ne İş Yapar: TypeScript kullanırken useSelector ve useDispatch bazen "Bu verinin tipi ne? Ben bunu tanımıyorum" diye ağlar. 
// hooks.ts içinde biz bu araçları önceden "eğitiriz".
// Neden Var: useAppSelector dediğinde TypeScript otomatik olarak senin RootState'ine (yani deponun içindeki tüm çekmecelere) bakar ve 
// sana hata yaptırmaz.

// Hook	Ne yapar
// useAppSelector	state okur
// useAppDispatch	action gönderir