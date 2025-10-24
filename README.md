# 🚀 Modul: Membangun Portofolio Pribadi dengan React, GitHub, dan Vercel

Modul ini membimbing kamu membuat website portofolio profesional menggunakan **React**, **TailwindCSS**, **GitHub**, dan **Vercel** — dari nol sampai online.

## 📱 Preview Website

![Portfolio Preview](https://private-user-images.githubusercontent.com/174270943/505235080-40359668-ba49-42b2-af69-8cd5bd593c1f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjEzMDQyNzEsIm5iZiI6MTc2MTMwMzk3MSwicGF0aCI6Ii8xNzQyNzA5NDMvNTA1MjM1MDgwLTQwMzU5NjY4LWJhNDktNDJiMi1hZjY5LThjZDViZDU5M2MxZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMDI0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTAyNFQxMTA2MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MGI1MmNiMDA0ODBjY2VkMTVkZDQxZGMxZjZkYjIzYjVjZWFkMmM4ZjFmMzYxYjI5YTJkNTU1NjJjYzI3MDk2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.X4RkV8B2dZcIUydTv-EL6pbn2kGIdkg5SXuf9-TJmAo)

---

## 🎯 Tujuan Akhir
Website portofolio online dengan domain:
```
https://namamu.vercel.app
```

---

## 🧱 1. Persiapan Awal

### 🔧 Install yang Dibutuhkan
Pastikan sudah terpasang:
- [Node.js](https://nodejs.org) (versi LTS)
- [Git](https://git-scm.com)
- Text editor seperti VS Code

Cek versi:
```bash
node -v
git --version
```

---

## ⚙️ 2. Membuat Project React

### A. Buat Project Baru
```bash
npx create-react-app my-portfolio
```

Masuk ke folder project:
```bash
cd my-portfolio
```

Jalankan:
```bash
npm start
```

> Browser akan terbuka di `http://localhost:3000`

---

## 🎨 3. Menambahkan TailwindCSS

### A. Install Tailwind
```bash
npm install -D tailwindcss
npx tailwindcss init
```

### B. Konfigurasi File
Edit file `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Edit file `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-white text-gray-800;
}
```

---

## 🧩 4. Struktur Komponen

Buat folder:
```
src/components/
```

Tambahkan file berikut:

### 🧭 Navbar.js
```jsx
export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Bro's Portfolio</h1>
        <ul className="flex gap-6">
          <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
```

### 💫 Hero.js
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

### 💼 Projects.js
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

### 📬 Contact.js
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

### ⚓ Footer.js
```jsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <p>© {new Date().getFullYear()} Bro's Portfolio — Dibangun dengan ❤️ + React</p>
    </footer>
  );
}
```

---

## 🧩 5. Gabungkan di `App.js`

Edit file `src/App.js`:
```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
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

export default App;
```

---

## 💾 6. Simpan ke GitHub

```bash
git init
git add .
git commit -m "first commit - portfolio"
git branch -M main
git remote add origin https://github.com/username/my-portfolio.git
git push -u origin main
```

---

## ☁️ 7. Deploy ke Vercel

1. Login ke [Vercel](https://vercel.com)
2. Klik **Add New → Project**
3. Pilih repo `my-portfolio`
4. Klik **Deploy**

🎉 Selesai!  
Portofoliomu online di:
```
https://my-portfolio.vercel.app
```

---

## ✨ 8. Bonus Tambahan
- Ubah title & favicon di `/public/index.html`
- Tambahkan foto profil & link GitHub, LinkedIn
- Bisa tambahkan animasi pakai [Framer Motion](https://www.framer.com/motion/)
- Custom domain bisa diatur di **Vercel → Settings → Domains**

---

## 📂 Struktur Akhir Folder

```
my-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

---

## 🏁 Hasil Akhir
Website portofolio modern, cepat, dan gratis sudah siap😎
