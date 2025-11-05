import { useEffect, useMemo, useState } from 'react';
import { Download, Mail, Phone, MapPin, Calendar, Play, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PastelCard from './components/PastelCard';
import Gallery from './components/Gallery';

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const setFromHash = () => {
      const h = window.location.hash.replace('#', '') || 'home';
      setPage(h);
    };
    setFromHash();
    window.addEventListener('hashchange', setFromHash);
    return () => window.removeEventListener('hashchange', setFromHash);
  }, []);

  const navigate = (p) => {
    window.location.hash = p;
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_circle_at_10%_10%,#fce7f3_0%,transparent_40%),radial-gradient(1000px_circle_at_90%_10%,#d1fae5_0%,transparent_40%)]">
      <Navbar currentPage={page} onNavigate={navigate} />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'cv' && <CV />}
        {page === 'portfolio' && <Portfolio />}
        {page === 'photos' && <Photos />}
        {page === 'media' && <MediaBlog />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

function Home({ onNavigate }) {
  return (
    <section className="relative">
      <div className="absolute -top-8 right-6 w-24 h-24 bg-pink-100 rounded-full blur-2xl opacity-70" />
      <div className="absolute top-20 left-4 w-28 h-28 bg-green-100 rounded-full blur-2xl opacity-70" />

      <div className="grid md:grid-cols-2 items-center gap-8">
        <PastelCard className="p-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-4xl md:text-5xl text-gray-800 leading-tight">
              안녕하세요! I'm Hana Kim
            </h1>
            <p className="text-gray-600 leading-relaxed">
              A university student passionate about human-centered design, friendly AI, and
              elegant interfaces. This space is my soft pastel corner — a Korean magazine-inspired
              showcase of my work, journey, and inspirations.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => onNavigate('cv')} className="px-4 py-2 rounded-full bg-pink-200 text-pink-900 hover:bg-pink-300 inline-flex items-center gap-2 transition">
                <Download className="w-4 h-4" /> View CV
              </button>
              <button onClick={() => onNavigate('portfolio')} className="px-4 py-2 rounded-full bg-green-200 text-green-900 hover:bg-green-300 transition">
                Portfolio
              </button>
              <button onClick={() => onNavigate('photos')} className="px-4 py-2 rounded-full bg-white text-gray-700 border border-pink-100 hover:bg-pink-50 transition">
                Photo Album
              </button>
              <button onClick={() => onNavigate('contact')} className="px-4 py-2 rounded-full bg-white text-gray-700 border border-green-100 hover:bg-green-50 transition">
                Contact
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> hana@example.com</span>
              <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> +82 10-1234-5678</span>
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> Seoul, KR</span>
            </div>
          </div>
        </PastelCard>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 via-white to-green-100 rounded-[2.5rem]" />
          <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-pink-100 shadow-[0_20px_40px_-20px_rgba(16,185,129,0.3)]">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
              alt="Student portrait"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CV() {
  return (
    <section className="space-y-8">
      <header className="text-center">
        <h2 className="font-serif text-4xl text-gray-800">Curriculum Vitae</h2>
        <p className="text-gray-600 mt-2">A concise overview of my background</p>
        <div className="mt-4">
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-200 text-pink-900 hover:bg-pink-300 transition">
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </div>
      </header>
      <div className="grid md:grid-cols-2 gap-6">
        <PastelCard className="p-6 space-y-3">
          <h3 className="font-serif text-2xl text-gray-800">Education</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <div className="font-semibold">B.S. in Computer Science</div>
              <div className="text-sm text-gray-500">Seoul National University • 2021 – Present</div>
            </li>
            <li>
              <div className="font-semibold">Exchange Program</div>
              <div className="text-sm text-gray-500">University of Tokyo • Spring 2023</div>
            </li>
          </ul>
        </PastelCard>
        <PastelCard className="p-6 space-y-3">
          <h3 className="font-serif text-2xl text-gray-800">Experience</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <div className="font-semibold">UX Research Intern • Naver</div>
              <div className="text-sm text-gray-500">2024 Summer</div>
              <p className="text-sm">Studied onboarding patterns and improved app retention with user-centered flows.</p>
            </li>
            <li>
              <div className="font-semibold">Frontend Developer • Startup Club</div>
              <div className="text-sm text-gray-500">2022 – 2023</div>
              <p className="text-sm">Built pastel-themed design systems and React components for student projects.</p>
            </li>
          </ul>
        </PastelCard>
        <PastelCard className="p-6 space-y-3">
          <h3 className="font-serif text-2xl text-gray-800">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['React','TypeScript','Tailwind','Figma','Python','FastAPI','MongoDB','UX Research'].map((s) => (
              <span key={s} className="px-3 py-1 rounded-full bg-green-100 text-green-900 text-sm">{s}</span>
            ))}
          </div>
        </PastelCard>
        <PastelCard className="p-6 space-y-3">
          <h3 className="font-serif text-2xl text-gray-800">Certificates</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Google UX Design Professional Certificate</li>
            <li>TensorFlow Developer Certificate</li>
            <li>JLPT N2</li>
          </ul>
        </PastelCard>
        <PastelCard className="md:col-span-2 p-6 space-y-3">
          <h3 className="font-serif text-2xl text-gray-800">Projects</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="rounded-2xl border border-pink-100 p-4 bg-white/70">
                <div className="flex items-start gap-3">
                  <img src={`https://images.unsplash.com/photo-15${i}0000000-000000000000?q=80&w=400&auto=format&fit=crop`} alt="Project" className="w-20 h-20 rounded-xl object-cover" />
                  <div>
                    <div className="font-semibold text-gray-800">Project Title {i}</div>
                    <p className="text-sm text-gray-600">A brief description of the project with a focus on impact and role.</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['React','Design','AI'].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-full bg-pink-100 text-pink-900 text-xs">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PastelCard>
      </div>
    </section>
  );
}

function Portfolio() {
  const items = useMemo(() => [
    {
      img: 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=800&auto=format&fit=crop',
      title: 'Bloom App',
      desc: 'Mindfulness app with soft gradients and floral micro-interactions.',
      tags: ['React Native','Motion','Design'],
      link: '#'
    },
    {
      img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop',
      title: 'Campus Map',
      desc: 'Wayfinding web app for freshmen with accessible UI.',
      tags: ['Maps','Accessibility','UX'],
      link: '#'
    },
    {
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
      title: 'Hackathon Winner',
      desc: 'Built a study buddy using GPT and spaced repetition.',
      tags: ['AI','Education','FastAPI'],
      link: '#'
    },
    {
      img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop',
      title: 'K-Magazine Layouts',
      desc: 'A collection of editorial designs inspired by Korean magazines.',
      tags: ['Figma','Editorial','Typography'],
      link: '#'
    }
  ], []);

  return (
    <section className="space-y-8">
      <header className="text-center">
        <h2 className="font-serif text-4xl text-gray-800">Portfolio & Projects</h2>
        <p className="text-gray-600 mt-2">A selection of apps, designs, and hackathon work</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <a key={i} href={item.link} className="group block rounded-3xl overflow-hidden border border-green-100 bg-white/70 shadow-sm hover:shadow-lg transition">
            <div className="overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-44 object-cover transform transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <div className="font-semibold text-gray-800 flex items-center gap-2">
                {item.title}
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
              </div>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-pink-100 text-pink-900 text-xs">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <PastelCard className="p-6">
        <h3 className="font-serif text-2xl text-gray-800 mb-2">Hackathons & Highlights</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Winner — Spring 2024 Uni Hack: Study Buddy AI</li>
          <li>Top 5 — Designathon: Editorial aesthetics for a wellness app</li>
          <li>Open-source contributor — UI library with soft components</li>
        </ul>
      </PastelCard>
    </section>
  );
}

function Photos() {
  const images = [
    'https://images.unsplash.com/photo-1520975682031-ae6f8b0f1f58?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975922324-c7e3b2f42f95?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531877263254-c1f3646c8f2c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop'
  ];

  return (
    <section className="space-y-6">
      <header className="text-center">
        <h2 className="font-serif text-4xl text-gray-800">Photo Album</h2>
        <p className="text-gray-600 mt-2">Soft memories in pastel frames</p>
      </header>
      <PastelCard className="p-4">
        <Gallery images={images} />
      </PastelCard>
    </section>
  );
}

function MediaBlog() {
  return (
    <section className="space-y-8">
      <header className="text-center">
        <h2 className="font-serif text-4xl text-gray-800">Multimedia & Blog</h2>
        <p className="text-gray-600 mt-2">Videos, maps, events, and links</p>
      </header>
      <div className="grid md:grid-cols-2 gap-6">
        <PastelCard className="p-4">
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black/5">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </PastelCard>
        <PastelCard className="p-4">
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black/5">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps?q=Seoul%20National%20University&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />
          </div>
        </PastelCard>
        <PastelCard className="p-4">
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black/5">
            <iframe
              className="w-full h-full"
              src="https://calendar.google.com/calendar/embed?src=en.south_korea%23holiday%40group.v.calendar.google.com&ctz=Asia%2FSeoul"
              title="Calendar"
            />
          </div>
        </PastelCard>
        <PastelCard className="p-6">
          <h3 className="font-serif text-2xl text-gray-800 mb-3">Useful Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a className="underline decoration-pink-300 hover:text-pink-700" href="#">Design inspiration board</a></li>
            <li><a className="underline decoration-green-300 hover:text-green-700" href="#">GitHub repositories</a></li>
            <li><a className="underline hover:text-gray-800" href="#">Reading list</a></li>
          </ul>
        </PastelCard>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {["Soft minds bloom in gentle routines.","Design is care, made visible.","A quiet day can be the loudest inspiration."].map((q) => (
          <PastelCard key={q} className="p-6">
            <p className="font-serif text-xl text-gray-800">“{q}”</p>
          </PastelCard>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onReset = (e) => {
    e.target.form.reset();
    setSubmitted(false);
  };

  return (
    <section className="space-y-6">
      <header className="text-center">
        <h2 className="font-serif text-4xl text-gray-800">Contact</h2>
        <p className="text-gray-600 mt-2">I'd love to hear from you</p>
      </header>
      <PastelCard className="p-6">
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
          <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full name</label>
              <input required type="text" className="w-full rounded-2xl bg-pink-50 border border-pink-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input required type="email" className="w-full rounded-2xl bg-green-50 border border-green-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone number</label>
              <input required type="tel" className="w-full rounded-2xl bg-pink-50 border border-pink-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300" />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Reason for contacting</label>
              <select className="w-full rounded-2xl bg-green-50 border border-green-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300">
                <option>Project collaboration</option>
                <option>Internship opportunity</option>
                <option>Design feedback</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Preferences</label>
            <div className="flex flex-wrap gap-4 bg-white/60 p-4 rounded-2xl border border-pink-100">
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="contactPref" defaultChecked className="text-pink-500" />
                <span className="text-sm text-gray-700">Email</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name="contactPref" className="text-pink-500" />
                <span className="text-sm text-gray-700">Phone</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" defaultChecked className="text-green-500" />
                <span className="text-sm text-gray-700">Send updates</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="text-green-500" />
                <span className="text-sm text-gray-700">Share newsletter</span>
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Message</label>
            <textarea required rows="5" className="w-full rounded-2xl bg-white border border-green-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Attachment (PDF or image)</label>
            <input type="file" accept=".pdf,.png,.jpg,.jpeg" className="w-full rounded-2xl bg-white border border-pink-200 px-4 py-2" />
          </div>

          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" className="px-5 py-2 rounded-full bg-green-200 text-green-900 hover:bg-green-300 inline-flex items-center gap-2">
              <Play className="w-4 h-4" /> Submit
            </button>
            <button type="reset" onClick={onReset} className="px-5 py-2 rounded-full bg-white border border-pink-200 text-gray-700 hover:bg-pink-50">Reset</button>
            {submitted && <span className="text-sm text-green-700">Thanks! Your message is ready to be processed.</span>}
          </div>
        </form>
      </PastelCard>
    </section>
  );
}

export default App;
