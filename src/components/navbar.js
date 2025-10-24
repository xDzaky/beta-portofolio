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