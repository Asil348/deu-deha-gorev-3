# DEU DEHA GÖREV 3

## Kurulum

---

1. Projeyi klonlayın.
1. `android/app/google-services.json` dosyasını ekleyin.
1. `pages/App.tsx` dosyasında 12. satırı kendi google webClientId'niz ile değiştirin.
1. `yarn install`
1. `yarn start`
1. Başka bir konsolda: `yarn android` veya `yarn ios`
1. `cd android && ./gradlew assembleRelease` komutuyla production build oluşturabilirsiniz. (android/app/build/outputs/apk/release/app-release.apk)
1. `cd android && ./gradlew assembleDebug` komutuyla debug build oluşturabilirsiniz. (android/app/build/outputs/apk/debug/app-debug.apk)
---

## Mantık
Kullanıcıyı giriş sayfası karşılar. Giriş yapmak için kullanıcı adı ve şifre girmelidir, ya da Google ile kayıt ol / giriş yap butonuna basılmalıdır. Giriş başarılı olursa kullanıcı profil sayfasına yönlendirilir. Profil sayfasında kullanıcıya ait profil bilgileri görünür. Profil sayfasından giriş ve kayıt sayfalarına erişilemez. Kullanıcı profil sayfasından çıkış yapabilir. Çıkış yapmak için kullanıcı profil sayfasında bulunan çıkış butonuna tıklamalıdır. Çıkış yapıldığında kullanıcı giriş sayfasına yönlendirilir.