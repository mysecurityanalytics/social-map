*[English](README.md), [Türkçe](README.tr.md)*

# social-map

Bu proje My Security Analytics 2020 yaz staj programı kapsamında [Sena Erdoğan](https://github.com/senaerdogan) tarafından oluşturulmuştur. Projenin amacı belirli bir bölgedeki sosyal aktivitelerin harita üzerinde görüntülenmesini sağlamaktır. Bu kapsamda başlangıç olarak [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key) kullanılarak seçilen kategoriye göre mekanlar haritada gösterilmiştir. Daha sonra [Twitter API](https://developer.twitter.com/en/docs/twitter-api) kullanılarak içinde, belirlenen anahtar kelime geçen `tweetler` harita üzerine yerleştirilmiştir.

Projede geliştiricinin ufkunu genişletmek amacıyla farklı teknolojiler kullanılmıştır. Sunucu işlemleri için [node.js](https://nodejs.org/en/), arayüz için [React](https://reactjs.org/) ve loglama için [mongoDB](https://www.mongodb.com/) kullanılarak en üst seviyede fayda sağlanması amaçlanmıştır.

## Gereksinimler

Ortam değişkenleri `example.env` dosyasında tanımlanmıştır, `.env` olarak değiştirilerek değişkenler doldurulmalıdır. İhtiyaç duyulan bu değişkenler arasında Google Maps verileri içinde arama yapabilmek için bir `API Key`, Twitter verilerini kullanabilmek için `Authorization Token` ve kullanıcı loglarını kaydetmek için `mongoDB` bağlantı değişkenleri bulunmaktadır.

## Yükleme

Proje kodlarını indirdikten ve yukarıda bahsedilen ortam değişkenlerini girdikten sonra ilgili dosyanın içine girilip `docker-compose up -d` komutunu çalıştırmak yeterlidir. Sonrasında `locahost:8080` adresinden uygulamaya erişilebilir.