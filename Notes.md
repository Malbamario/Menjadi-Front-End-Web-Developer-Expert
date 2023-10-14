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

## JavaScript Clean Code

### Style Guide

Alasan style guide penting: konsistensi, membantu dalam proses onboarding pada tim baru, menambah wawasan, dan membantu proses code review.

### Code Conventions

merupakan style guide yang telash disepakati dan direkomendasi oleh banyak developer. Misalnya AirBnB, Google, dan Standard.

### ESLint

sebuah package yang dapat membantu dalam menentukan sebuah style guide yang akan digunakan. ESLint juga dapat diintegrasikan dengan text editor yang sedang digunakan. Pastikan versi nodejs yang digunakan 12.0.0 ke atas. Berikut beberapa perintah yang dapat dijalankan untuk menggunakan ESLint.

```shell
npm install eslint --save-dev
npx eslint --init
npm run lint
```

Perintah ketiaga tersebut dilakukan setelah memuat sebuah perintah `"lint": "eslint ./src"` pada script di file package.json. Namun hal tersebut cukup merepotkan maka dengan integrasi dengan text editor kita tidak perlu menjalankan perintah tersebut.

### Clean Code

#### Prinsip Membuat Variables

terdapat beberapa prinsip yang digunakan saat mebuat sebuah variabel, seperti:

- Bersungguh-sungguh (niat)
- Memiliki arti
- mudah diucap
- mudah dicari
- Ekplisit (Avoid Mental Mapping)
- Hindari penambahan kata yang tidak perlu
- Gunakan default argument

#### Membuat function dengan baik

terdapat beberapa hal yang perlu diperhatikan dalam membuat sebuah fungsi yaitu:

- kurangi jumlah parameter yang banyak setidaknya menjadi 2 atau 3 parameter saja. Hal tersebut dapat diatasi dengan destructuring object
- usahakan setiap fungsi menjalankan satu hal saja
- nama yang digunakan merepresentasikan tujuannya
- memiliki satu tingkatan abstraksi karena jika tidak maka akan melakukan lebih dari satu hal
- Usahakan functional programming daripada imperative programming
- Enkapsulasikan Kondisional
- Hindari Negasi Kondisional
- Minimalisir Kondisional
- Hindari Duplikasi Kode

### Objek dan Struktur Data

Dalam membuat struktur data pada js maka kita perlu menerapkan setter getter, pastikan menggunakan ES6 class daripada ES5 function, method chaining (memberikan return this pada setiap method). Selain itu terdapat sebuah prinsip yaitu SOLID yang dapat memudahkan pengembang untuk mengembangkan aplikasi yang dibangun kedepannya.

#### SOLID

- Single Responsibility Principle (SRP)
  Pada dasarnya prinsip ini menentukan setiap class menangani satu tanggung jawab.
- Open/Closed Principle (OCP)
  Menentukan bagian mana yang dapat diubah maupun tidak supaya tidak ada kebergantungan misalnya terdapat salah satu diubah maka bagian lainnya harus diubah juga.
- Liskov Substitution Principle (LSP)
  intinya adalah prinsip yang digunakan untuk memastikan setiap abstraksi yang dibentuk dapat disubstitusikan ke dalam kelas turunannya sepenuhnya, tidak hanya sebagian.
- Interface Segregation Principle (ISP)
  Prinsipnya kita perlu meminimalisir interface atau class yang tidak selalu diperlukan sehingga kita perlu menyusun sebuah metode agar tidak selalu dipanggil atau dikirimkan oleh pengguna.
- Dependencies Inversion Principle (DIP)
  terdapat 2 hal penting yang perlu diperhatikan dalam prinsip ini yaitu
  - Modul high-level tidak boleh memiliki ketergantungan terhadap modul low-level. Keduanya harus bergantung pada abstractions.
  - Abstractions tidak boleh bergantung terhadap detail. Detail harus bergantung pada abstractions.
  intinya jangan menerapkan ketergantungan terhadap low class pada high class.

### Concurrency

Program tidak selalu bekerja secara sinkronus sehingga perlu pemahaman yang baik agar dapat menangani proses yang memerlukan penyelesaian secara asinkronus. Pada Js terdapat beberapa hal yang dapat dilakukan untuk memaksimalkan proses asinkronus tersebut yaitu dengan mengutamakan penggunaan async/await dibandingkan dengan promise atau bahkan dibandingkan dengan callback.

### Error Handling

penanganan error tidak hanya sekedar menampilkannya pada console, namun juga dapat menyediakan ruang bagi pengguna untuk menyampaikan detail dari error yang teleah terjadi, termasuk ketika terjadi penolakan promise.

### Comments

Pengoptimalisasi komen dilakukan agar dapat membantu proses pemahaman sebuah kode pemrograman yang sifatnya kompleks, bukan untuk menjelaskan sesuatu yang sudah pasti maknanya dan "menghapus" sebuah kode.

## Progresive Web Apps

PWAs merupakan sebuah konsep dari sebuah web yang dapat bekerja seolah seperti sebuah native app, seperti penempatan pada home screen, berjalan di kala offline, hingga fitur notifikasi. Terdapat beberapa karakteristik dari PWAs seperti:

- Progresif - Dapat berjalan untuk setiap pengguna.
- Responsif - Menyesuaikan di berbagai perangkat.
- Konektivitas Independen - kualitas load time yang baik meski internet dengan kualitas yang rendah, bahkan offline dengan service worker.
- Menyerupai aplikasi native - website terasa seperti native app dengan bantuan application shell.
- Aman - wajib dengan ssl alias https
- dapat ditemukan - rate SEO yang tinggi dan terdefinisi sebagai "aplikasi" dengan app manifest dan service worker.
- re-engageable - dapat menarik kembali perhatian pengguna melalui notifikasi.
- dapat dipasang - terpasang di homescreen tanpa melalui aplication store.
- bisa ditautkan - mudah dibagikan melalui URL.

Dari beberapa karakteristik tersebut terdapat beberapa kelebihan serta kekurangan yang dimiliki dalam konsep ini seperti:

- tidak perlu menggunakan toko aplikasi.
- pengguna tidak perlu melakukan update.
- mudah untuk disebarkan.
- mengurangi penggunaan data.
- tidak semua fitur native dapat digunakan.
- tidak dapat didukung browser versi lama.

contoh web dengan konsep WPAs yaitu twitter, tokopedia, bookmyshow, google developer, dan YT. Terdapat beberapa komponen yang diperlukan dalam membangun seubah web secara PWAs, yaitu Application Shell, Web App Manifest, Service Worker, Cache API, Fetch API, IndexedDB, Web Socket, Notification.

### Web Architecture

terdapat 2 jenis arsitektur berdasarkan bagaimana server mengembalikan konten halaman yaitu SSR (Server Side Rendering) dan CSR (Client Side Rendering). dan juga terdapat pola yang terbagi menjadi 2 yaitu MPA (Multi-Page App) dan SPA (Single-Page App). Pada penggunaan PWAs sangat disarankan menggunakan kombinasi CSR + SPA untuk mengurangi beban server dalam menangani request dan mengurangi jumlah file statis yang perlu disimpan pada cache API.

### Application Shell
