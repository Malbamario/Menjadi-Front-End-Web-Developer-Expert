# Notes of Menjadi Front-End Web Developer Expert

## Mobile First Approach

Pendekatan ini dilakukan dengan alasan bahwa penggunaan perangkat mobile lebih masif dibandingkan dengan perangkat desktop yang berbeda dengan awal kemunculannya web. Untuk itu terdapat berapa hal yang perlu diperhatikan seperti pengaturan viewport, relative unit, ukuran elemen dan lain-lain. Berikut berbagai hal tersebut.

### Viewport, Relative Unit, dan Ukuran Elemen

viewport dapat diatur dalam tag meta (`<meta>`). Dengan pengaturan viewport kita dapat mengatur viewport dengan mengikuti ukuran layar perangkat dan mengatur zoom levelnya ke nilai defultnya yaitu 1. Berikut contohnya.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Selain itu penggunaan relative unit sangat membantu dalam penentuan ukuran elemen agar dapat menyesuaikan patokan yang digunakan seperti font, parent ataupun viewport. Contoh dari relative unit adalah %, em, ex, ch, rem, vw, vh, vmin, vmax. Tidak hanya menggunakan relative unit tetapi kita juga perlu menentukan ukuran minimal yang boleh dimiliki suatu elemen agar tetap mudah disentuh khususnya pada sebuah elemen tombol yang harus berukuran minimal 44px baik lebar maupun tingginya.

### Responsive Layout

Dalam menentukan layout yang responsive terdapat 2 pendekatan yaitu Desktop dan Mobile First approach. Jika 80% pengguna menggunakan desktop dan kaya akan fitur sehingga membutuhkan layar yang lebar, maka sebaiknya menggunakan pendekatan desktop first approach, meskipun nantinya harus memangkas atau mengatur ulang layout yang sudah ada. Namun jika kriteria tersebut tidak terpenuhi sebaiknya menggunakan mobile fisrt approach. Saat ini pendekatan tersebut lebih diutamakan karena telah didukung dengan berbagai teknologi serta membantu peningkatan peringkat SEO pada pencarin Google.

### Media Query

media query digunakan agar dapat menjalankan sekumpulan aturan styling sesuai ukuran viewport. Berikut beberapa cara penerapannya.

#### tag link (`<link>`)

```html
<link href="medium.css" rel="stylesheet" media="screen and (min-width: 480px)"/>
```

#### menggunakan `@media`

```css
@media screen and (min-width: 480px) {
  h1 {
    color: blue;
  }
}
```

### Breakpoint

untuk menentukan breakpoint tidak tepat jika berdasarkan ukuran tipe berbagai device, melainkan harus disesuaikan dengan web yang sedang dibuat dengan bantuan devtools.

### Grid Layout

Grid layout merupakan sebuah teknologi yang dapat memudahkan dalam mengelola sebuah layout dibandingkan hanya memanfaatkan flexbox.

#### grid tracks

grid track adalah sebuah tata letak yang diatur pada sebuah container. Berikut properti yang digunakan untuk membentuk sebuah grid-tracks.

```css
.element{
    display:grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 100px 100px;
}
```

#### fraction unit

fraction unit (`fr`) merupakan sebuah satuan yang merepresentasikan pecahan ruang kosong yang tersisa pada grid. Dengan satuan ini maka ukuran kolom yang ditentukan sesuai dengan rasio yang diberikan dan untuk memudahan dalam penulisan ukuran yang berulang dapat dibantu dengan fungsi `repeat()`. Berikut contoh penggungannnya.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
```

#### grid line

grid line yang menyusun kolom diurutkan sesuai arah penulisan bahasa yang digunakan. grid line dapat menjadi panduan dalam menentukan lebar dari masing-masing elemen yang terdapat pada sebuah container dengan display grid. Nilai yang ditetapkan pada sebuah elemen pun disesuaikan kembali dengan ukuran yang telah diatur menggunakan fraction unit pada kolom. Berikut contoh penggunaan grid line.

```css
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
.item2 {
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.item3 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

#### gutter

Kita dapat menentukan gap antar elemennya baik antar baris dan kolom. Berikut merupakan contoh penggunaannya.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.625em 0.75em; /* baris kolom */
}
```
