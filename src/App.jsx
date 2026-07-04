import { useEffect, useMemo, useRef, useState } from 'react';

const GUIDES = [
  { id: 'stoic', name: 'The Stoic Sage', symbol: '🏛️', chamber: 'The Mirror of Inner Citadel', ambient: 'Distant waves against stone' },
  { id: 'nurturing', name: 'The Nurturing Mother', symbol: '🔥', chamber: 'The Mirror of Infinite Embrace', ambient: 'A crackling fire, a lullaby' },
  { id: 'coach', name: 'The Bold Coach', symbol: '⚡', chamber: 'The Mirror of Sacred Fire', ambient: 'The clang of hammer on iron' },
  { id: 'astrologer', name: 'The Cosmic Astrologer', symbol: '✦', chamber: 'The Mirror of Starlight', ambient: 'The music of the spheres' },
  { id: 'alchemist', name: 'The Shadow Alchemist', symbol: '🗝', chamber: 'The Mirror of Black Gold', ambient: 'Water dripping in a deep cave' },
  { id: 'poet', name: 'The Mystic Poet', symbol: '🌹', chamber: 'The Mirror of the Beloved', ambient: 'Nightingales in a garden at dusk' },
];

const ZODIAC_WISDOM = {
  aries: 'You are the spark that ignites the cosmos. Honor it, but do not let it consume you.',
  taurus: 'You are the earth that holds the roots. Build sanctuaries of beauty and stability.',
  gemini: 'You are the wind that carries stories from one village to another.',
  cancer: 'You are the tide pulled by the Moon. Protect your inner world.',
  leo: 'You are the Sun that makes all things grow. Shine without losing your center.',
  virgo: 'You are the sacred order within chaos. Mend what is broken with discernment.',
  libra: 'You are the harmony between extremes. Seek beauty and truth.',
  scorpio: 'You are the phoenix who knows the underworld intimately.',
  sagittarius: 'You are the arrow aimed at wisdom. Seek horizons without forgetting home.',
  capricorn: 'You are the mountain that touches the sky. Build with softness.',
  aquarius: 'You are the lightning that changes the world. Be intimate as well as visionary.',
  pisces: 'You are the dream from which all things are born. Return to your body.',
};

function getSunSign(dateStr) {
  const d = new Date(dateStr);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'aquarius';
  return 'pisces';
}

function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      drift: Math.random() * 0.3 + 0.1,
    }));

    let frame = 0;
    const render = () => {
      frame += 1;
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.y += star.drift;
        if (star.y > height) {
          star.y = -2;
          star.x = Math.random() * width;
        }
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${star.alpha + Math.sin(frame / 40 + star.x / 200) * 0.15})`;
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(render);
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', onResize);
    render();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}

function Arrival({ onEnter }) {
  return (
    <section className="min-h-screen bg-[#03040a] text-amber-50 flex items-center justify-center px-6 relative overflow-hidden">
      <Starfield />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.22),_transparent_55%)]" />
      <div className="relative z-10 max-w-3xl text-center">
        <p className="uppercase tracking-[0.35em] text-amber-200/70 text-sm mb-6">The Realm awaits</p>
        <h1 className="text-5xl md:text-8xl font-serif tracking-[0.3em] mb-6">SOULMIRROR</h1>
        <p className="text-xl md:text-2xl text-amber-100/90 font-serif italic mb-5">Welcome, seeker. You have been expected.</p>
        <p className="text-amber-200/70 max-w-2xl mx-auto mb-12">A sanctuary of reflection, guidance, and self-reclamation.</p>
        <button onClick={onEnter} className="px-8 py-3 rounded-full border border-amber-300/40 hover:bg-amber-300/10 transition">Enter the Realm</button>
      </div>
    </section>
  );
}

function Onboarding({ onComplete }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ birthDate: '', soulSeason: '', burningQuestion: '' });

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = () => {
    const sunSign = data.birthDate ? getSunSign(data.birthDate) : 'aries';
    onComplete({ ...data, sunSign });
  };

  return (
    <section className="min-h-screen bg-[#05070d] text-amber-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl rounded-3xl border border-amber-400/20 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_80px_rgba(212,175,55,0.12)]">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/70 mb-4">Step {step} of 3</p>
        <h2 className="text-3xl font-serif mb-6">Begin your mirror.</h2>

        {step === 1 && (
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm text-amber-200/70">Birth date</span>
              <input type="date" value={data.birthDate} onChange={(e) => setData({ ...data, birthDate: e.target.value })} className="mt-2 w-full rounded-xl bg-black/30 border border-amber-400/20 px-4 py-3" />
            </label>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm text-amber-200/70">Current soul season</span>
              <select value={data.soulSeason} onChange={(e) => setData({ ...data, soulSeason: e.target.value })} className="mt-2 w-full rounded-xl bg-black/30 border border-amber-400/20 px-4 py-3">
                <option value="">Choose one</option>
                <option value="initiation">The Initiation</option>
                <option value="dark_night">The Dark Night</option>
                <option value="return">The Return</option>
                <option value="blooming">The Blooming</option>
              </select>
            </label>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm text-amber-200/70">Burning question</span>
              <textarea value={data.burningQuestion} onChange={(e) => setData({ ...data, burningQuestion: e.target.value })} className="mt-2 w-full min-h-32 rounded-xl bg-black/30 border border-amber-400/20 px-4 py-3" placeholder="What is asking to be seen?" />
            </label>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <button onClick={prev} disabled={step === 1} className="px-5 py-2 rounded-full border border-amber-400/20 disabled:opacity-40">Back</button>
          {step < 3 ? <button onClick={next} className="px-5 py-2 rounded-full bg-amber-400/20 border border-amber-400/30">Next</button> : <button onClick={handleSubmit} className="px-5 py-2 rounded-full bg-amber-400/30 border border-amber-400/40">Enter</button>}
        </div>
      </div>
    </section>
  );
}

function Hall({ profile, onEnterGuide, onOpenJournal }) {
  return (
    <section className="min-h-screen bg-[#05070d] text-amber-50 px-6 py-16 relative overflow-hidden">
      <Starfield />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-amber-300/70 text-sm">The Great Hall</p>
            <h2 className="text-3xl md:text-4xl font-serif">Choose a chamber.</h2>
          </div>
          <button onClick={onOpenJournal} className="px-5 py-2 rounded-full border border-amber-400/20">Open Journal</button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((guide) => (
            <button key={guide.id} onClick={() => onEnterGuide(guide.id)} className="rounded-3xl border border-amber-400/20 bg-white/5 p-6 text-left hover:border-amber-300/50 hover:bg-amber-300/10 transition">
              <div className="text-4xl mb-3">{guide.symbol}</div>
              <h3 className="text-xl font-serif mb-2">{guide.name}</h3>
              <p className="text-sm text-amber-100/70">{guide.chamber}</p>
              <p className="text-sm text-amber-200/60 mt-2">{guide.ambient}</p>
            </button>
          ))}
        </div>

        {profile?.sunSign && (
          <div className="mt-10 rounded-3xl border border-amber-400/20 bg-amber-400/10 p-6 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300/70">Your sigil</p>
            <p className="text-xl font-serif mt-2">{profile.sunSign.toUpperCase()}</p>
            <p className="text-amber-100/70 mt-3">{ZODIAC_WISDOM[profile.sunSign] || ZODIAC_WISDOM.aries}</p>
          </div>
        )}
      </div>
    </section>
  );
}

function GuideChamber({ guideId, profile, onBack, onSave }) {
  const guide = GUIDES.find((item) => item.id === guideId);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalized = input.trim();
    if (!normalized) return;

    const seed = `${guide.name}: ${normalized}`;
    const reply = `You have entered the chamber of ${guide.name}.\n\nThe mirror reflects this truth: ${normalized}\n\nFor a ${profile?.sunSign || 'seeker'} soul, the path is to hold this feeling without surrendering to it. Let this be your practice today.`;
    setResponse(reply);
    onSave({ guideId, prompt: normalized, reply, emotionalWeather: 'reflective' });
  };

  return (
    <section className="min-h-screen bg-[#05070d] text-amber-50 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="mb-6 px-4 py-2 rounded-full border border-amber-400/20">← Back</button>
        <div className="rounded-3xl border border-amber-400/20 bg-white/5 p-8 shadow-[0_0_80px_rgba(212,175,55,0.12)]">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300/70">{guide?.chamber}</p>
          <h2 className="text-3xl font-serif mt-2">{guide?.name}</h2>
          <p className="text-amber-200/70 mt-3">{guide?.ambient}</p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Speak to the mirror..." className="w-full min-h-32 rounded-2xl border border-amber-400/20 bg-black/30 px-4 py-3" />
            <button type="submit" className="px-6 py-3 rounded-full bg-amber-400/20 border border-amber-400/30">Receive counsel</button>
          </form>
          {response && <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5 whitespace-pre-line">{response}</div>}
        </div>
      </div>
    </section>
  );
}

function Journal({ entries, onClose }) {
  return (
    <section className="min-h-screen bg-[#05070d] text-amber-50 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <button onClick={onClose} className="mb-6 px-4 py-2 rounded-full border border-amber-400/20">← Back</button>
        <div className="rounded-3xl border border-amber-400/20 bg-white/5 p-8">
          <h2 className="text-3xl font-serif mb-6">Soul Journal</h2>
          {entries.length === 0 ? (
            <p className="text-amber-200/70">No entries yet. Return to a chamber and speak to the mirror.</p>
          ) : (
            <div className="space-y-4">
              {entries.map((entry) => (
                <article key={entry.id} className="rounded-2xl border border-amber-400/20 bg-black/20 p-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300/70">{new Date(entry.date).toLocaleString()}</p>
                  <p className="mt-2 text-amber-100/90">{entry.reply}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [scene, setScene] = useState('arrival');
  const [profile, setProfile] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('soulmirror_profile') || '{}');
    } catch {
      return {};
    }
  });
  const [journal, setJournal] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('soulmirror_journal') || '[]');
    } catch {
      return [];
    }
  });
  const [guideId, setGuideId] = useState(null);

  const saveProfile = (data) => {
    const final = { ...data, sunSign: data.birthDate ? getSunSign(data.birthDate) : 'aries' };
    setProfile(final);
    localStorage.setItem('soulmirror_profile', JSON.stringify(final));
    setScene('hall');
  };

  const saveEntry = (entry) => {
    const next = [{ id: Date.now(), date: new Date().toISOString(), ...entry }, ...journal];
    setJournal(next);
    localStorage.setItem('soulmirror_journal', JSON.stringify(next));
  };

  if (scene === 'arrival') return <Arrival onEnter={() => setScene('onboarding')} />;
  if (scene === 'onboarding') return <Onboarding onComplete={saveProfile} />;
  if (scene === 'hall') return <Hall profile={profile} onEnterGuide={(id) => { setGuideId(id); setScene('chamber'); }} onOpenJournal={() => setScene('journal')} />;
  if (scene === 'chamber') return <GuideChamber guideId={guideId} profile={profile} onBack={() => setScene('hall')} onSave={saveEntry} />;
  if (scene === 'journal') return <Journal entries={journal} onClose={() => setScene('hall')} />;
  return null;
}
