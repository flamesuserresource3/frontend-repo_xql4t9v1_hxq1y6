import { Instagram, Linkedin, Github, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-green-100 bg-gradient-to-b from-white to-pink-50/40">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span className="text-sm">© {new Date().getFullYear()} Pastel Portfolio. All rights reserved.</span>
        </div>
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
    </footer>
  );
}
