# AI Portfolio

O‘zbek tilidagi AI mutaxassisi portfoliysi. Kodni GitHub repozitoriysiga joylash uchun ZIP arxivini ochib, ichidagi fayllarni repozitoriyga yuklang.

## GitHub Pages

Admin paneldagi **HTML nusxani yuklash** orqali joriy profilning ko‘rish uchun tayyor versiyasini oling. Fayl nomini `index.html` qilib o‘zgartiring, repozitoriyning asosiy papkasiga joylang va GitHub’dagi **Settings → Pages** bo‘limidan shu papkani tanlang. Profil yangilanganda HTML nusxani qayta yuklang.

## Admin panel bilan ishlatish

Node.js, Bash, zip va base64 mavjud muhitda `npm run check` va `npm run build` buyruqlarini bajaring. Worker fayli `dist/server/index.js` da hosil bo‘ladi.

Host `BUCKET` nomli Cloudflare R2 binding va `PORTFOLIO_ADMIN_EMAIL` nomli maxfiy muhit qiymatini ta’minlashi kerak. OpenAI Sites shaxsni tekshiradi va Worker’ga ishonchli identifikatsiya sarlavhalarini beradi. Boshqa hostda admin panelni yoqishdan avval ishonchli autentifikatsiya qatlami bu sarlavhalarni o‘zi o‘rnatishi va tashqi so‘rovdagi nusxalarini olib tashlashi kerak. GitHub Pages Worker va admin panelni ishga tushirmaydi.

Arxivga saqlangan profil ma’lumotlari, sertifikatlar va maxfiy qiymatlar kiritilmaydi.
