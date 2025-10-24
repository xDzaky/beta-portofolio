# Panduan Membuat dari awal

## 1. Pastikan Alat Dasar Terpasang
- Cek versi Node.js dan npm:
  ```bash
  node -v
  npm -v
  ```
  Bila perintah di atas gagal, unduh paket resmi dari https://nodejs.org dan install (npm sudah termasuk di dalamnya).
- Cek Git:
  ```bash
  git --version
  ```
  Jika belum ada, install dari https://git-scm.com/downloads sesuai sistem operasi kamu.

## 2. Menyiapkan Proyek React
🚀 **Modul: Membangun Portofolio Pribadi dengan React, GitHub, dan Vercel**  
Modul ini membimbing kamu membuat website portofolio profesional menggunakan React, TailwindCSS, GitHub, dan Vercel — dari nol sampai online.

🎯 **Tujuan Akhir**  
Website portofolio online dengan domain:

```
https://namamu.vercel.app
```

🧱 **1. Persiapan Awal**

🔧 **Install yang Dibutuhkan**  
Pastikan sudah terpasang:
- Node.js (versi LTS)
- Git
- Text editor seperti VS Code

Cek versi:

```bash
node -v
git --version
```

⚙️ **2. Membuat Project React**

**A. Buat Project Baru**
```bash
npx create-react-app my-portfolio
```

**B. Masuk ke folder project:**
```bash
cd my-portfolio
```

**C. Jalankan:**
```bash
npm start
```

Browser akan terbuka di http://localhost:3000

🎨 **3. Menghubungkan Tailwind CSS dengan React**  
Ikuti langkah berikut agar Tailwind aktif di project hasil `create-react-app`.

1. Tambahkan Tailwind CSS sebagai devDependency:
   ```bash
   npm install -D tailwindcss
   ```
2. Inisialisasi konfigurasi Tailwind:
   ```bash
   npx tailwindcss init
   ```
3. Sesuaikan `tailwind.config.js` agar Tailwind memindai seluruh file sumber React:
   ```js
   // tailwind.config.js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
4. Gunakan direktif Tailwind di `src/index.css`:
   ```css
   /* src/index.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   body {
     @apply bg-white text-gray-800;
   }
   ```
5. Restart `npm start` jika sempat dimatikan. Tailwind sekarang aktif di seluruh komponen.

## 4. Membuat Folder dan Komponen
Buat folder `src/components` (jika belum ada), lalu isi dengan komponen berikut.

- `src/components/navbar.js`
  ```jsx
  export default function Navbar() {
    return (
      <nav className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">Bro’s Portfolio</h1>
          <ul className="flex gap-6">
            <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  ```

- `src/components/hero.js`
  ```jsx
  export default function Hero() {
    return (
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Halo, Saya Bro 👋</h1>
        <p className="text-lg text-gray-600">Guru • Web Developer • Pembelajar Seumur Hidup</p>
        <a href="#projects" className="mt-6 inline-block bg-black text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
          Lihat Proyek Saya
        </a>
      </section>
    );
  }
  ```

- `src/components/projects.js`
  ```jsx
  export default function Projects() {
    const data = [
      { name: "GUMEL APP", desc: "Aplikasi manajemen nilai guru", link: "#" },
      { name: "AI Generate Text", desc: "Aplikasi AI berbasis PHP MVC", link: "#" },
      { name: "Kurikulum App", desc: "Sistem manajemen kurikulum sekolah", link: "#" },
    ];

    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">🧱 Proyek Saya</h2>
          <div className="grid md:grid-cols-3 gap-6 px-4">
            {data.map((p, i) => (
              <div key={i} className="border rounded-2xl shadow p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-4">{p.desc}</p>
                <a href={p.link} className="text-yellow-500 hover:text-black">Lihat Detail →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  ```

- `src/components/contact.js`
  ```jsx
  export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Hubungi Saya</h2>
        <p className="text-gray-600 mb-6">Tertarik bekerja sama atau diskusi santai?</p>
        <a href="mailto:emailkamu@gmail.com" className="bg-black text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
          Kirim Email
        </a>
      </section>
    );
  }
  ```

- `src/components/footer.js`
  ```jsx
  export default function Footer() {
    return (
      <footer className="bg-black text-white py-4 text-center">
        <p>© {new Date().getFullYear()} Bro’s Portfolio — Dibangun dengan ❤️ + React</p>
      </footer>
    );
  }
  ```

Terakhir, pastikan `src/App.js` mengimpor dan merangkai semua komponen:
```jsx
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
```

## 5. Menjalankan dan Membangun
- Pengembangan lokal:
  ```bash
  npm start
  ```
- Build produksi:
  ```bash
  npm run build
  ```
  Folder `build/` akan berisi aset siap deploy.

## 6. Menyimpan ke GitHub
1. Inisialisasi Git (jika belum):
   ```bash
   git init
   ```
2. Tambahkan seluruh perubahan dan commit:
   ```bash
   git add .
   git commit -m "Inisialisasi proyek portfolio"
   ```
3. Buat branch utama dan hubungkan ke repositori GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<username>/my-portfolio.git
   git push -u origin main
   ```
   Ganti `<username>` dengan milikmu sebelum menjalankan perintah push.

## 7. Deploy ke Vercel
1. Login ke https://vercel.com.
2. Klik **Add New → Project**.
3. Pilih repositori `my-portfolio`.
4. Klik **Deploy** dan tunggu hingga Vercel menampilkan URL produksi kamu.

Selamat! Kamu sudah berhasil menyiapkan, mengembangkan, dan menerbitkan portfolio React lengkap dengan Tailwind CSS. Terus eksplorasi dan ajak siswa untuk memodifikasi komponen agar karya mereka semakin menarik.
