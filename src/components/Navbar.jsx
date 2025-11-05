import { Instagram, Linkedin, Github, Sparkles } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const linkClass = (page) =>
    `px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      currentPage === page
        ? 'bg-pink-200/80 text-pink-800 shadow-sm'
        : 'text-gray-700 hover:bg-green-200/60 hover:text-green-900'
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-pink-100/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-pink-500" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full" />
            </div>
            <span className="font-serif text-xl text-gray-800">Pastel Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            <button className={linkClass('home')} onClick={() => onNavigate('home')}>Home</button>
            <button className={linkClass('cv')} onClick={() => onNavigate('cv')}>CV</button>
            <button className={linkClass('portfolio')} onClick={() => onNavigate('portfolio')}>Portfolio</button>
            <button className={linkClass('photos')} onClick={() => onNavigate('photos')}>Photo Album</button>
            <button className={linkClass('media')} onClick={() => onNavigate('media')}>Multimedia & Blog</button>
            <button className={linkClass('contact')} onClick={() => onNavigate('contact')}>Contact</button>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" aria-label="Instagram" className="p-2 rounded-full hover:bg-pink-100 text-pink-600" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-green-100 text-green-600" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" aria-label="GitHub" className="p-2 rounded-full hover:bg-gray-100 text-gray-700" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="md:hidden pb-3 flex flex-wrap gap-2">
          <button className={linkClass('home')} onClick={() => onNavigate('home')}>Home</button>
          <button className={linkClass('cv')} onClick={() => onNavigate('cv')}>CV</button>
          <button className={linkClass('portfolio')} onClick={() => onNavigate('portfolio')}>Portfolio</button>
          <button className={linkClass('photos')} onClick={() => onNavigate('photos')}>Photos</button>
          <button className={linkClass('media')} onClick={() => onNavigate('media')}>Media</button>
          <button className={linkClass('contact')} onClick={() => onNavigate('contact')}>Contact</button>
        </div>
      </div>
    </header>
  );
}
