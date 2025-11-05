import { useState } from 'react';

export default function Gallery({ images = [] }) {
  const [active, setActive] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(src)}
            className="group relative overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm"
          >
            <img
              src={src}
              alt="Gallery"
              className="w-full h-40 md:h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 pointer-events-none bg-gradient-to-t from-pink-200/20 to-transparent" />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full border border-pink-100 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <img src={active} alt="Preview" className="w-full h-[75vh] object-contain bg-black/5" />
            <div className="p-3 text-center">
              <button
                onClick={() => setActive(null)}
                className="px-4 py-2 rounded-full bg-pink-200 text-pink-900 hover:bg-pink-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
