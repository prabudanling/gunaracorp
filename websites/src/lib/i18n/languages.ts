// ------------------------------------------------------------
// Gunara.web.id — Registry 195 Bahasa Dunia
// Satu entri per negara berdaulat: 193 anggota PBB + Tahta Suci
// (Vatikan) + Negara Palestina = 195.
// Setiap entri membawa bahasa resmi/pengantar utama negara itu,
// ditulis dalam aksara aslinya (native), plus kode dasar (base)
// untuk pengelompokan cache terjemahan AI.
// ------------------------------------------------------------

export type Region =
  | "Asia"
  | "Eropa"
  | "Afrika"
  | "Amerika"
  | "Oseania";

export type WorldLanguage = {
  /** Kode locale lengkap, mis. "ar-SA" */
  code: string;
  /** Kode bahasa dasar untuk cache terjemahan, mis. "ar" */
  base: string;
  /** Nama negara (Indonesia) */
  country: string;
  /** Nama negara (Inggris) */
  countryEn: string;
  /** Nama bahasa dalam aksara aslinya */
  native: string;
  /** Nama bahasa dalam bahasa Inggris (dipakai AI untuk menentukan target) */
  english: string;
  region: Region;
  /** Teks berjalan kanan-ke-kiri */
  rtl?: boolean;
};

const ASIA: WorldLanguage[] = [
  { code: "id-ID", base: "id", country: "Indonesia", countryEn: "Indonesia", native: "Bahasa Indonesia", english: "Indonesian", region: "Asia" },
  { code: "ms-MY", base: "ms", country: "Malaysia", countryEn: "Malaysia", native: "Bahasa Melayu", english: "Malay", region: "Asia" },
  { code: "ms-BN", base: "ms", country: "Brunei", countryEn: "Brunei", native: "Bahasa Melayu Brunei", english: "Malay (Brunei)", region: "Asia" },
  { code: "en-SG", base: "en", country: "Singapura", countryEn: "Singapore", native: "English", english: "English", region: "Asia" },
  { code: "tet-TL", base: "tet", country: "Timor-Leste", countryEn: "Timor-Leste", native: "Tetun", english: "Tetum", region: "Asia" },
  { code: "fil-PH", base: "fil", country: "Filipina", countryEn: "Philippines", native: "Filipino", english: "Filipino", region: "Asia" },
  { code: "th-TH", base: "th", country: "Thailand", countryEn: "Thailand", native: "ไทย", english: "Thai", region: "Asia" },
  { code: "vi-VN", base: "vi", country: "Vietnam", countryEn: "Vietnam", native: "Tiếng Việt", english: "Vietnamese", region: "Asia" },
  { code: "km-KH", base: "km", country: "Kamboja", countryEn: "Cambodia", native: "ខ្មែរ", english: "Khmer", region: "Asia" },
  { code: "lo-LA", base: "lo", country: "Laos", countryEn: "Laos", native: "ລາວ", english: "Lao", region: "Asia" },
  { code: "my-MM", base: "my", country: "Myanmar", countryEn: "Myanmar", native: "ဗမာစာ", english: "Burmese", region: "Asia" },
  { code: "zh-CN", base: "zh", country: "Tiongkok", countryEn: "China", native: "简体中文", english: "Chinese (Mandarin, Simplified)", region: "Asia" },
  { code: "ja-JP", base: "ja", country: "Jepang", countryEn: "Japan", native: "日本語", english: "Japanese", region: "Asia" },
  { code: "ko-KR", base: "ko", country: "Korea Selatan", countryEn: "South Korea", native: "한국어", english: "Korean", region: "Asia" },
  { code: "ko-KP", base: "ko", country: "Korea Utara", countryEn: "North Korea", native: "문화어", english: "Korean (Munhwaŏ)", region: "Asia" },
  { code: "mn-MN", base: "mn", country: "Mongolia", countryEn: "Mongolia", native: "Монгол", english: "Mongolian", region: "Asia" },
  { code: "kk-KZ", base: "kk", country: "Kazakhstan", countryEn: "Kazakhstan", native: "Қазақша", english: "Kazakh", region: "Asia" },
  { code: "uz-UZ", base: "uz", country: "Uzbekistan", countryEn: "Uzbekistan", native: "Oʻzbekcha", english: "Uzbek", region: "Asia" },
  { code: "tk-TM", base: "tk", country: "Turkmenistan", countryEn: "Turkmenistan", native: "Türkmençe", english: "Turkmen", region: "Asia" },
  { code: "ky-KG", base: "ky", country: "Kirgizstan", countryEn: "Kyrgyzstan", native: "Кыргызча", english: "Kyrgyz", region: "Asia" },
  { code: "tg-TJ", base: "tg", country: "Tajikistan", countryEn: "Tajikistan", native: "Тоҷикӣ", english: "Tajik", region: "Asia" },
  { code: "fa-AF", base: "fa", country: "Afganistan", countryEn: "Afghanistan", native: "دری", english: "Dari", region: "Asia", rtl: true },
  { code: "hi-IN", base: "hi", country: "India", countryEn: "India", native: "हिन्दी", english: "Hindi", region: "Asia" },
  { code: "ur-PK", base: "ur", country: "Pakistan", countryEn: "Pakistan", native: "اردو", english: "Urdu", region: "Asia", rtl: true },
  { code: "bn-BD", base: "bn", country: "Bangladesh", countryEn: "Bangladesh", native: "বাংলা", english: "Bengali", region: "Asia" },
  { code: "ne-NP", base: "ne", country: "Nepal", countryEn: "Nepal", native: "नेपाली", english: "Nepali", region: "Asia" },
  { code: "dz-BT", base: "dz", country: "Bhutan", countryEn: "Bhutan", native: "རྫོང་ཁ", english: "Dzongkha", region: "Asia" },
  { code: "si-LK", base: "si", country: "Sri Lanka", countryEn: "Sri Lanka", native: "සිංහල", english: "Sinhala", region: "Asia" },
  { code: "dv-MV", base: "dv", country: "Maladewa", countryEn: "Maldives", native: "ދިވެހި", english: "Dhivehi", region: "Asia", rtl: true },
  { code: "fa-IR", base: "fa", country: "Iran", countryEn: "Iran", native: "فارسی", english: "Persian", region: "Asia", rtl: true },
  { code: "ar-SA", base: "ar", country: "Arab Saudi", countryEn: "Saudi Arabia", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "ar-AE", base: "ar", country: "Uni Emirat Arab", countryEn: "United Arab Emirates", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "ar-QA", base: "ar", country: "Qatar", countryEn: "Qatar", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "ar-KW", base: "ar", country: "Kuwait", countryEn: "Kuwait", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "ar-BH", base: "ar", country: "Bahrain", countryEn: "Bahrain", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "ar-OM", base: "ar", country: "Oman", countryEn: "Oman", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "ar-YE", base: "ar", country: "Yaman", countryEn: "Yemen", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "ar-IQ", base: "ar", country: "Irak", countryEn: "Iraq", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "ar-SY", base: "ar", country: "Suriah", countryEn: "Syria", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "ar-JO", base: "ar", country: "Yordania", countryEn: "Jordan", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "ar-LB", base: "ar", country: "Lebanon", countryEn: "Lebanon", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "ar-PS", base: "ar", country: "Palestina", countryEn: "State of Palestine", native: "العربية", english: "Arabic", region: "Asia", rtl: true },
  { code: "he-IL", base: "he", country: "Israel", countryEn: "Israel", native: "עברית", english: "Hebrew", region: "Asia", rtl: true },
  { code: "tr-TR", base: "tr", country: "Turki", countryEn: "Türkiye", native: "Türkçe", english: "Turkish", region: "Asia" },
  { code: "hy-AM", base: "hy", country: "Armenia", countryEn: "Armenia", native: "Հայերեն", english: "Armenian", region: "Asia" },
  { code: "az-AZ", base: "az", country: "Azerbaijan", countryEn: "Azerbaijan", native: "Azərbaycan", english: "Azerbaijani", region: "Asia" },
  { code: "ka-GE", base: "ka", country: "Georgia", countryEn: "Georgia", native: "ქართული", english: "Georgian", region: "Asia" },
  { code: "el-CY", base: "el", country: "Siprus", countryEn: "Cyprus", native: "Ελληνικά", english: "Greek", region: "Asia" },
];

const EUROPE: WorldLanguage[] = [
  { code: "en-GB", base: "en", country: "Inggris", countryEn: "United Kingdom", native: "English", english: "English", region: "Eropa" },
  { code: "fr-FR", base: "fr", country: "Prancis", countryEn: "France", native: "Français", english: "French", region: "Eropa" },
  { code: "de-DE", base: "de", country: "Jerman", countryEn: "Germany", native: "Deutsch", english: "German", region: "Eropa" },
  { code: "nl-NL", base: "nl", country: "Belanda", countryEn: "Netherlands", native: "Nederlands", english: "Dutch", region: "Eropa" },
  { code: "nl-BE", base: "nl", country: "Belgia", countryEn: "Belgium", native: "Nederlands (Vlaams)", english: "Dutch (Flemish)", region: "Eropa" },
  { code: "es-ES", base: "es", country: "Spanyol", countryEn: "Spain", native: "Español", english: "Spanish", region: "Eropa" },
  { code: "pt-PT", base: "pt", country: "Portugal", countryEn: "Portugal", native: "Português", english: "Portuguese", region: "Eropa" },
  { code: "it-IT", base: "it", country: "Italia", countryEn: "Italy", native: "Italiano", english: "Italian", region: "Eropa" },
  { code: "ca-AD", base: "ca", country: "Andorra", countryEn: "Andorra", native: "Català", english: "Catalan", region: "Eropa" },
  { code: "ro-RO", base: "ro", country: "Rumania", countryEn: "Romania", native: "Română", english: "Romanian", region: "Eropa" },
  { code: "ro-MD", base: "ro", country: "Moldova", countryEn: "Moldova", native: "Română (Moldova)", english: "Romanian (Moldova)", region: "Eropa" },
  { code: "pl-PL", base: "pl", country: "Polandia", countryEn: "Poland", native: "Polski", english: "Polish", region: "Eropa" },
  { code: "cs-CZ", base: "cs", country: "Ceko", countryEn: "Czechia", native: "Čeština", english: "Czech", region: "Eropa" },
  { code: "sk-SK", base: "sk", country: "Slovakia", countryEn: "Slovakia", native: "Slovenčina", english: "Slovak", region: "Eropa" },
  { code: "hu-HU", base: "hu", country: "Hungaria", countryEn: "Hungary", native: "Magyar", english: "Hungarian", region: "Eropa" },
  { code: "hr-HR", base: "hr", country: "Kroasia", countryEn: "Croatia", native: "Hrvatski", english: "Croatian", region: "Eropa" },
  { code: "sr-RS", base: "sr", country: "Serbia", countryEn: "Serbia", native: "Српски", english: "Serbian", region: "Eropa" },
  { code: "sr-ME", base: "sr", country: "Montenegro", countryEn: "Montenegro", native: "Crnogorski", english: "Montenegrin", region: "Eropa" },
  { code: "bs-BA", base: "bs", country: "Bosnia & Herzegovina", countryEn: "Bosnia and Herzegovina", native: "Bosanski", english: "Bosnian", region: "Eropa" },
  { code: "sl-SI", base: "sl", country: "Slovenia", countryEn: "Slovenia", native: "Slovenščina", english: "Slovenian", region: "Eropa" },
  { code: "mk-MK", base: "mk", country: "Makedonia Utara", countryEn: "North Macedonia", native: "Македонски", english: "Macedonian", region: "Eropa" },
  { code: "sq-AL", base: "sq", country: "Albania", countryEn: "Albania", native: "Shqip", english: "Albanian", region: "Eropa" },
  { code: "el-GR", base: "el", country: "Yunani", countryEn: "Greece", native: "Ελληνικά", english: "Greek", region: "Eropa" },
  { code: "bg-BG", base: "bg", country: "Bulgaria", countryEn: "Bulgaria", native: "Български", english: "Bulgarian", region: "Eropa" },
  { code: "ru-RU", base: "ru", country: "Rusia", countryEn: "Russia", native: "Русский", english: "Russian", region: "Eropa" },
  { code: "uk-UA", base: "uk", country: "Ukraina", countryEn: "Ukraine", native: "Українська", english: "Ukrainian", region: "Eropa" },
  { code: "be-BY", base: "be", country: "Belarus", countryEn: "Belarus", native: "Беларуская", english: "Belarusian", region: "Eropa" },
  { code: "lt-LT", base: "lt", country: "Lituania", countryEn: "Lithuania", native: "Lietuvių", english: "Lithuanian", region: "Eropa" },
  { code: "lv-LV", base: "lv", country: "Latvia", countryEn: "Latvia", native: "Latviešu", english: "Latvian", region: "Eropa" },
  { code: "et-EE", base: "et", country: "Estonia", countryEn: "Estonia", native: "Eesti", english: "Estonian", region: "Eropa" },
  { code: "fi-FI", base: "fi", country: "Finlandia", countryEn: "Finland", native: "Suomi", english: "Finnish", region: "Eropa" },
  { code: "sv-SE", base: "sv", country: "Swedia", countryEn: "Sweden", native: "Svenska", english: "Swedish", region: "Eropa" },
  { code: "nb-NO", base: "nb", country: "Norwegia", countryEn: "Norway", native: "Norsk Bokmål", english: "Norwegian (Bokmål)", region: "Eropa" },
  { code: "da-DK", base: "da", country: "Denmark", countryEn: "Denmark", native: "Dansk", english: "Danish", region: "Eropa" },
  { code: "is-IS", base: "is", country: "Islandia", countryEn: "Iceland", native: "Íslenska", english: "Icelandic", region: "Eropa" },
  { code: "ga-IE", base: "ga", country: "Irlandia", countryEn: "Ireland", native: "Gaeilge", english: "Irish", region: "Eropa" },
  { code: "de-AT", base: "de", country: "Austria", countryEn: "Austria", native: "Deutsch (Österreich)", english: "German (Austria)", region: "Eropa" },
  { code: "de-CH", base: "de", country: "Swiss", countryEn: "Switzerland", native: "Deutsch (Schweiz)", english: "German (Switzerland)", region: "Eropa" },
  { code: "de-LI", base: "de", country: "Liechtenstein", countryEn: "Liechtenstein", native: "Deutsch (Liechtenstein)", english: "German (Liechtenstein)", region: "Eropa" },
  { code: "lb-LU", base: "lb", country: "Luksemburg", countryEn: "Luxembourg", native: "Lëtzebuergesch", english: "Luxembourgish", region: "Eropa" },
  { code: "mt-MT", base: "mt", country: "Malta", countryEn: "Malta", native: "Malti", english: "Maltese", region: "Eropa" },
  { code: "fr-MC", base: "fr", country: "Monako", countryEn: "Monaco", native: "Français", english: "French", region: "Eropa" },
  { code: "it-SM", base: "it", country: "San Marino", countryEn: "San Marino", native: "Italiano", english: "Italian", region: "Eropa" },
  { code: "la-VA", base: "la", country: "Vatikan", countryEn: "Vatican City", native: "Latina", english: "Latin", region: "Eropa" },
];

const AFRICA: WorldLanguage[] = [
  { code: "ar-EG", base: "ar", country: "Mesir", countryEn: "Egypt", native: "العربية", english: "Arabic", region: "Afrika", rtl: true },
  { code: "ar-LY", base: "ar", country: "Libya", countryEn: "Libya", native: "العربية", english: "Arabic", region: "Afrika", rtl: true },
  { code: "ar-TN", base: "ar", country: "Tunisia", countryEn: "Tunisia", native: "العربية", english: "Arabic", region: "Afrika", rtl: true },
  { code: "ar-DZ", base: "ar", country: "Aljazair", countryEn: "Algeria", native: "العربية", english: "Arabic", region: "Afrika", rtl: true },
  { code: "ar-MA", base: "ar", country: "Maroko", countryEn: "Morocco", native: "العربية", english: "Arabic", region: "Afrika", rtl: true },
  { code: "ar-MR", base: "ar", country: "Mauritania", countryEn: "Mauritania", native: "العربية", english: "Arabic", region: "Afrika", rtl: true },
  { code: "ar-SD", base: "ar", country: "Sudan", countryEn: "Sudan", native: "العربية", english: "Arabic", region: "Afrika", rtl: true },
  { code: "ar-DJ", base: "ar", country: "Jibuti", countryEn: "Djibouti", native: "العربية", english: "Arabic", region: "Afrika", rtl: true },
  { code: "en-SS", base: "en", country: "Sudan Selatan", countryEn: "South Sudan", native: "English", english: "English", region: "Afrika" },
  { code: "pt-AO", base: "pt", country: "Angola", countryEn: "Angola", native: "Português", english: "Portuguese", region: "Afrika" },
  { code: "pt-MZ", base: "pt", country: "Mozambik", countryEn: "Mozambique", native: "Português", english: "Portuguese", region: "Afrika" },
  { code: "pt-CV", base: "pt", country: "Tanjung Verde", countryEn: "Cabo Verde", native: "Português", english: "Portuguese", region: "Afrika" },
  { code: "pt-GW", base: "pt", country: "Guinea-Bissau", countryEn: "Guinea-Bissau", native: "Português", english: "Portuguese", region: "Afrika" },
  { code: "pt-ST", base: "pt", country: "Sao Tome & Principe", countryEn: "São Tomé and Príncipe", native: "Português", english: "Portuguese", region: "Afrika" },
  { code: "fr-BJ", base: "fr", country: "Benin", countryEn: "Benin", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-BF", base: "fr", country: "Burkina Faso", countryEn: "Burkina Faso", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-CM", base: "fr", country: "Kamerun", countryEn: "Cameroon", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-CF", base: "fr", country: "Republik Afrika Tengah", countryEn: "Central African Republic", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-TD", base: "fr", country: "Chad", countryEn: "Chad", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-CG", base: "fr", country: "Kongo", countryEn: "Republic of the Congo", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-CD", base: "fr", country: "Republik Demokratik Kongo", countryEn: "DR Congo", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-CI", base: "fr", country: "Pantai Gading", countryEn: "Côte d'Ivoire", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-GA", base: "fr", country: "Gabon", countryEn: "Gabon", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-GN", base: "fr", country: "Guinea", countryEn: "Guinea", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-NE", base: "fr", country: "Niger", countryEn: "Niger", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-SN", base: "fr", country: "Senegal", countryEn: "Senegal", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-TG", base: "fr", country: "Togo", countryEn: "Togo", native: "Français", english: "French", region: "Afrika" },
  { code: "fr-SC", base: "fr", country: "Seychelles", countryEn: "Seychelles", native: "Français", english: "French", region: "Afrika" },
  { code: "sw-KE", base: "sw", country: "Kenya", countryEn: "Kenya", native: "Kiswahili", english: "Swahili", region: "Afrika" },
  { code: "sw-TZ", base: "sw", country: "Tanzania", countryEn: "Tanzania", native: "Kiswahili", english: "Swahili", region: "Afrika" },
  { code: "rw-RW", base: "rw", country: "Rwanda", countryEn: "Rwanda", native: "Ikinyarwanda", english: "Kinyarwanda", region: "Afrika" },
  { code: "rn-BI", base: "rn", country: "Burundi", countryEn: "Burundi", native: "Ikirundi", english: "Kirundi", region: "Afrika" },
  { code: "so-SO", base: "so", country: "Somalia", countryEn: "Somalia", native: "Soomaali", english: "Somali", region: "Afrika" },
  { code: "am-ET", base: "am", country: "Etiopia", countryEn: "Ethiopia", native: "አማርኛ", english: "Amharic", region: "Afrika" },
  { code: "ti-ER", base: "ti", country: "Eritrea", countryEn: "Eritrea", native: "ትግርኛ", english: "Tigrinya", region: "Afrika" },
  { code: "mg-MG", base: "mg", country: "Madagaskar", countryEn: "Madagascar", native: "Malagasy", english: "Malagasy", region: "Afrika" },
  { code: "ny-MW", base: "ny", country: "Malawi", countryEn: "Malawi", native: "Chichewa", english: "Chichewa", region: "Afrika" },
  { code: "sn-ZW", base: "sn", country: "Zimbabwe", countryEn: "Zimbabwe", native: "chiShona", english: "Shona", region: "Afrika" },
  { code: "zu-ZA", base: "zu", country: "Afrika Selatan", countryEn: "South Africa", native: "isiZulu", english: "Zulu", region: "Afrika" },
  { code: "st-LS", base: "st", country: "Lesotho", countryEn: "Lesotho", native: "Sesotho", english: "Sesotho", region: "Afrika" },
  { code: "ss-SZ", base: "ss", country: "Eswatini", countryEn: "Eswatini", native: "siSwati", english: "Swazi", region: "Afrika" },
  { code: "tn-BW", base: "tn", country: "Botswana", countryEn: "Botswana", native: "Setswana", english: "Tswana", region: "Afrika" },
  { code: "bm-ML", base: "bm", country: "Mali", countryEn: "Mali", native: "Bamanankan", english: "Bambara", region: "Afrika" },
  { code: "wo-SN", base: "wo", country: "Senegal (Wolof)", countryEn: "Senegal", native: "Wolof", english: "Wolof", region: "Afrika" },
  { code: "swb-KM", base: "swb", country: "Komoro", countryEn: "Comoros", native: "Shikomori", english: "Comorian", region: "Afrika" },
  { code: "en-NG", base: "en", country: "Nigeria", countryEn: "Nigeria", native: "English", english: "English", region: "Afrika" },
  { code: "en-GH", base: "en", country: "Ghana", countryEn: "Ghana", native: "English", english: "English", region: "Afrika" },
  { code: "en-UG", base: "en", country: "Uganda", countryEn: "Uganda", native: "English", english: "English", region: "Afrika" },
  { code: "en-ZM", base: "en", country: "Zambia", countryEn: "Zambia", native: "English", english: "English", region: "Afrika" },
  { code: "en-BW", base: "en", country: "Botswana (English)", countryEn: "Botswana", native: "English", english: "English", region: "Afrika" },
  { code: "en-NA", base: "en", country: "Namibia", countryEn: "Namibia", native: "English", english: "English", region: "Afrika" },
  { code: "en-GM", base: "en", country: "Gambia", countryEn: "Gambia", native: "English", english: "English", region: "Afrika" },
  { code: "en-SL", base: "en", country: "Sierra Leone", countryEn: "Sierra Leone", native: "English", english: "English", region: "Afrika" },
  { code: "en-LR", base: "en", country: "Liberia", countryEn: "Liberia", native: "English", english: "English", region: "Afrika" },
];

const AMERICAS: WorldLanguage[] = [
  { code: "en-US", base: "en", country: "Amerika Serikat", countryEn: "United States", native: "English", english: "English", region: "Amerika" },
  { code: "en-CA", base: "en", country: "Kanada", countryEn: "Canada", native: "English (Canada)", english: "English (Canada)", region: "Amerika" },
  { code: "es-MX", base: "es", country: "Meksiko", countryEn: "Mexico", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-AR", base: "es", country: "Argentina", countryEn: "Argentina", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-CL", base: "es", country: "Chili", countryEn: "Chile", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-CO", base: "es", country: "Kolombia", countryEn: "Colombia", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-PE", base: "es", country: "Peru", countryEn: "Peru", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-VE", base: "es", country: "Venezuela", countryEn: "Venezuela", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-EC", base: "es", country: "Ekuador", countryEn: "Ecuador", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-BO", base: "es", country: "Bolivia", countryEn: "Bolivia", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-PY", base: "es", country: "Paraguay", countryEn: "Paraguay", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-UY", base: "es", country: "Uruguay", countryEn: "Uruguay", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-CU", base: "es", country: "Kuba", countryEn: "Cuba", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-GT", base: "es", country: "Guatemala", countryEn: "Guatemala", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-HN", base: "es", country: "Honduras", countryEn: "Honduras", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-SV", base: "es", country: "El Salvador", countryEn: "El Salvador", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-NI", base: "es", country: "Nikaragua", countryEn: "Nicaragua", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-CR", base: "es", country: "Kosta Rika", countryEn: "Costa Rica", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-PA", base: "es", country: "Panama", countryEn: "Panama", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "es-DO", base: "es", country: "Republik Dominika", countryEn: "Dominican Republic", native: "Español", english: "Spanish", region: "Amerika" },
  { code: "pt-BR", base: "pt", country: "Brasil", countryEn: "Brazil", native: "Português", english: "Portuguese", region: "Amerika" },
  { code: "ht-HT", base: "ht", country: "Haiti", countryEn: "Haiti", native: "Kreyòl Ayisyen", english: "Haitian Creole", region: "Amerika" },
  { code: "nl-SR", base: "nl", country: "Suriname", countryEn: "Suriname", native: "Nederlands", english: "Dutch", region: "Amerika" },
  { code: "en-BZ", base: "en", country: "Belize", countryEn: "Belize", native: "English", english: "English", region: "Amerika" },
  { code: "en-JM", base: "en", country: "Jamaika", countryEn: "Jamaica", native: "English", english: "English", region: "Amerika" },
  { code: "en-TT", base: "en", country: "Trinidad & Tobago", countryEn: "Trinidad and Tobago", native: "English", english: "English", region: "Amerika" },
  { code: "en-GY", base: "en", country: "Guyana", countryEn: "Guyana", native: "English", english: "English", region: "Amerika" },
  { code: "en-BS", base: "en", country: "Bahama", countryEn: "Bahamas", native: "English", english: "English", region: "Amerika" },
  { code: "en-BB", base: "en", country: "Barbados", countryEn: "Barbados", native: "English", english: "English", region: "Amerika" },
  { code: "en-AG", base: "en", country: "Antigua & Barbuda", countryEn: "Antigua and Barbuda", native: "English", english: "English", region: "Amerika" },
  { code: "en-DM", base: "en", country: "Dominika", countryEn: "Dominica", native: "English", english: "English", region: "Amerika" },
  { code: "en-GD", base: "en", country: "Grenada", countryEn: "Grenada", native: "English", english: "English", region: "Amerika" },
  { code: "en-KN", base: "en", country: "Saint Kitts & Nevis", countryEn: "Saint Kitts and Nevis", native: "English", english: "English", region: "Amerika" },
  { code: "en-LC", base: "en", country: "Saint Lucia", countryEn: "Saint Lucia", native: "English", english: "English", region: "Amerika" },
  { code: "en-VC", base: "en", country: "Saint Vincent & Grenadines", countryEn: "Saint Vincent and the Grenadines", native: "English", english: "English", region: "Amerika" },
];

const OCEANIA: WorldLanguage[] = [
  { code: "en-AU", base: "en", country: "Australia", countryEn: "Australia", native: "English", english: "English", region: "Oseania" },
  { code: "en-NZ", base: "en", country: "Selandia Baru", countryEn: "New Zealand", native: "English", english: "English", region: "Oseania" },
  { code: "mi-NZ", base: "mi", country: "Selandia Baru (Māori)", countryEn: "New Zealand", native: "Te Reo Māori", english: "Māori", region: "Oseania" },
  { code: "en-FJ", base: "en", country: "Fiji", countryEn: "Fiji", native: "English", english: "English", region: "Oseania" },
  { code: "sm-WS", base: "sm", country: "Samoa", countryEn: "Samoa", native: "Gagana Sāmoa", english: "Samoan", region: "Oseania" },
  { code: "to-TO", base: "to", country: "Tonga", countryEn: "Tonga", native: "Lea faka-Tonga", english: "Tongan", region: "Oseania" },
  { code: "tvl-TV", base: "tvl", country: "Tuvalu", countryEn: "Tuvalu", native: "Te Gagana Tuvalu", english: "Tuvaluan", region: "Oseania" },
  { code: "gil-KI", base: "gil", country: "Kiribati", countryEn: "Kiribati", native: "Taetae ni Kiribati", english: "Gilbertese", region: "Oseania" },
  { code: "mh-MH", base: "mh", country: "Kepulauan Marshall", countryEn: "Marshall Islands", native: "Kajin M̧ajeļ", english: "Marshallese", region: "Oseania" },
  { code: "pau-PW", base: "pau", country: "Palau", countryEn: "Palau", native: "a tekoi er a Belau", english: "Palauan", region: "Oseania" },
  { code: "na-NR", base: "na", country: "Nauru", countryEn: "Nauru", native: "Dorerin Naoero", english: "Nauruan", region: "Oseania" },
  { code: "tpi-PG", base: "tpi", country: "Papua Nugini", countryEn: "Papua New Guinea", native: "Tok Pisin", english: "Tok Pisin", region: "Oseania" },
  { code: "bi-VU", base: "bi", country: "Vanuatu", countryEn: "Vanuatu", native: "Bislama", english: "Bislama", region: "Oseania" },
  { code: "en-SB", base: "en", country: "Kepulauan Solomon", countryEn: "Solomon Islands", native: "English", english: "English", region: "Oseania" },
];

export const LANGUAGES: WorldLanguage[] = [
  ...ASIA,
  ...EUROPE,
  ...AFRICA,
  ...AMERICAS,
  ...OCEANIA,
];

export const REGIONS: Region[] = ["Asia", "Eropa", "Afrika", "Amerika", "Oseania"];

/** Total negara berdaulat yang didukung (harus 195) */
export const TOTAL_LANGUAGES = LANGUAGES.length;

export function getLanguage(code: string): WorldLanguage | undefined {
  if (!code) return undefined;
  const lower = code.toLowerCase();
  return (
    LANGUAGES.find((l) => l.code.toLowerCase() === lower) ??
    LANGUAGES.find((l) => l.base.toLowerCase() === lower.split("-")[0])
  );
}

/** Deteksi bahasa browser → entri registry (skip Indonesia agar default tetap ID) */
export function detectBrowserLanguage(): WorldLanguage | undefined {
  if (typeof navigator === "undefined") return undefined;
  const nav = (navigator.language || "").toLowerCase();
  if (!nav || nav.startsWith("id")) return undefined;
  return (
    LANGUAGES.find((l) => l.code.toLowerCase() === nav) ??
    LANGUAGES.find((l) => l.base === nav.split("-")[0])
  );
}

/** Jumlah bahasa dasar unik (untuk statistik cache) */
export const UNIQUE_BASE_LANGUAGES = new Set(LANGUAGES.map((l) => l.base)).size;
