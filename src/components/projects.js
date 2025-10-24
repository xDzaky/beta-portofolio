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