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

### Optimasi Lainnya

optimalisasi dapat dilakukan pada teks yang terdapat pada halaman tersebut. Secara umum jumlah ideal karakter pada satu baris di antara 45 sampai 75, dan untuk website di sekitar 66 karakter. Kemudian kita dapat menerapkan teknik off canvas yang sering digunakan untuk membuat sebuah drop-down.

## Aksesibilitas

Sebagai pengembang kita juga perlu memahami aksesibilitas aplikasi yang sedang dibangun agar dapat memudahkan pengguna aplikasi yang memiliki keterbatasan tertentu. Terdapat 4 kategori dalam aksesibilitas yaitu penglihatan, motorik atau ketangkasan, pendengaran dan kognitif.

### Aksesibilitas keyboard

salah satu bentuk aksesibilitas menggunakan keyboard adalah kondisi fokus, yaitu ketika suatu elemen ditargetkan seperti sebuah tombol, anchor ataupun input. terdkadang terdapat beberapa kesalahan dalam pembuatan button. Ketika saat membuat custom button sebaiknya menggunakan tag `<button>`. Kemudian terkadang kita juga menggunakan natara anchor atau button. Sebaiknya untuk suatu navigasi menggunakan anchor sedangkan untuk sebuah aksi menggunakan button.

#### Focus Order & Tab Index

Ketika menentukan urutan fokus dari setiap elemen pada sebuah halaman ditentukan dari struktur DOM-nya sehinggua usahakan tempatkan dengan sewajarnya.  Nmun jika hal tersebut tak dapat dihindari maka dapat diatasi dengan tab index. namun hal tersebut tidak disarankan, melainkan atribut tab index jsustru lebih tepat digunakan untuk memberikan ataupun menghilangkan fokus pada suatu elemen. Jika suatu elemen yang tidak focusable ingin dapat difokuskan cukup memberikan atribut tab index dengan nilai 0, sedangkan untuk menghilangkan fokus pada elemen yang focusable dapat diberikan atribut tab index dengan nilai -1 meskipun tetap dapat difokuskan kembali melalui Js.

#### Styling Focus

styling tersebut dapat dilakukan pada setiap elemen yang focusable dan bagi elemen yang tidak focusable dengan atribut tab index bernilai 0, namun perlu ditambahkan dengan pseudo-class `:focus`.

### Aksesibilitas Konten

#### Affordances dan Semantics

affordances berarti sesuatu yang tidak memiliki makna yang khusus dibaliknya. Sehingga dengan penggunaan elemen HTML yang sesuai dan berarti (semantic) akan membantu pengguna yang menggunakan screen reader. Memang terdapat sebuah teknologi yaitu ARIA untuk memanipulasi sebuah elemen namun pada HTML5 mulai kurang diminati karena terdapat elemen yang sudah tepat. Terdapat beberapa hal yang dapat membuat sebuah elemen dikatakan semantic, yaitu role/type, name (content, label, title, placeholder), value & state (opsional).

### Skip to Content

fitur ini sangat membantu agar pengguna dapat langsung menuju konten dari halaman tersebut dengan bantuan sebauh navigasi. untuk membuatnya secara sederhana ketika pengguna menekan tab maka sebuah anchor akan ditampilkan dan ketika pengguna klik anchor tersebut maka akan diarahkan ke konten dari halaman tersebut.

### Heading & Landmark

Penggunaan heading dan landmark sangat membantu dalam penggunaan screen reader dalam memahami struktur halaman. Untuk itu terdapat beberapa hal yang perlu diperhatikan saat menggunakannya seperti jangan melewati tingkatan heading dan gunakan semantic HTML untuk landmarking dengan tepat (menggunakan elemen HTML yang tidak perlu dibentuk lebih dari satu).

### Label & Alt Text

Pemberian label pada sebuah elemen dapat membantu screen reader membaca accessibility name dari elemen tersebut. Terdapat beberapa cara untuk memberikan nilai accessibility name pada sebuah elemen, seperti memberi elemen label yang mengarah pada sebuah input, konten diisi dengan teks, atau jika tidak bisa dapat memberikan atribut `aria-label` pada elemen tersebut. Selain itu terdapat Alt text yang biasanya digunakan pada elemen gambar yang penting atau perlu dideskripsikan, bukan untuk gambar yang digunakan sekedar dekorasi. Selain itu Alt Text juga berguna untuk memberikan deskripsi pada suatu gambar yang tak sempat termuat pada halaman tersebut.
