import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// dil verilerini alır
export const getLanguages = createAsyncThunk(
  "language/getLanguages",
  async () => {
    // api isteği atıyoruz
    const res = await api.get("/getLanguages");

    // fulfilled aksiyonunun payload'ını belirliyoruz.
    return res.data.data.languages;
  }
);

// api'dan çeviri sonucunu alır
export const translateText = createAsyncThunk(
  "translate/translateText",
  async (arg, { getState }) => {
    // store'da tutulan state'e erişmeye yarar
    const { translate } = getState();

    // api'a gönderilecek parametreleri ayarla
    const params = new URLSearchParams();
    params.set("source_language", translate.sourceLang.value);
    params.set("target_language", translate.targetLang.value);
    params.set("text", translate.textToTranslate);

    // api 'a istek at
    const res = await api.post("/translate", params);

    // aksiyonun payload'ını belirle
    return res.data.data.translatedText;
  }
);
