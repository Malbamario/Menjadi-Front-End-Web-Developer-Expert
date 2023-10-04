# Notes of Menjadi Front-End Web Developer Expert

## Mobile First Approach

Pendekatan ini dilakukan dengan alasan bahwa penggunaan perangkat mobile lebih masif dibandingkan dengan perangkat desktop yang berbeda dengan awal kemunculannya web. Untuk itu terdapat berapa hal yang perlu diperhatikan seperti pengaturan viewport, relative unit, ukuran elemen dan lain-lain. Berikut berbagai hal tersebut.

### Viewport, Relative Unit, dan Ukuran Elemen

viewport dapat diatur dalam tag meta (`<meta>`). Dengan pengaturan viewport kita dapat mengatur viewport dengan mengikuti ukuran layar perangkat dan mengatur zoom levelnya ke nilai defultnya yaitu 1. Berikut contohnya.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Selain itu penggunaan relative unit sangat membantu dalam penentuan ukuran elemen agar dapat menyesuaikan patokan yang digunakan seperti font, parent ataupun viewport. Contoh dari relative unit adalah %, em, ex, ch, rem, vw, vh, vmin, vmax. Tidak hanya menggunakan relative unit tetapi kita juga perlu menentukan ukuran minimal yang boleh dimiliki suatu elemen agar tetap mudah disentuh khususnya pada sebuah elemen tombol yang harus berukuran minimal 44px baik lebar maupun tingginya.
