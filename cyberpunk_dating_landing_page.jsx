import { motion } from 'framer-motion';
import { Heart, MessageCircle, Zap, Shield, Sparkles } from 'lucide-react';

export default function CyberpunkDatingLanding() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,0,170,0.18),transparent_30%)]" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 backdrop-blur-xl bg-white/5 border-b border-cyan-500/20">
        <div>
          <h1 className="text-3xl font-black tracking-[0.3em] text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
            NEONPULSE
          </h1>
          <p className="text-xs text-cyan-200/70 tracking-[0.25em] mt-1">
            FIND YOUR SIGNAL
          </p>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-cyan-300 transition-all">Features</a>
          <a href="#experience" className="hover:text-cyan-300 transition-all">Experience</a>
          <a href="#join" className="hover:text-cyan-300 transition-all">Join</a>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105 transition-all">
          Enter City
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-8 lg:px-16 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm backdrop-blur-xl mb-8">
              <Sparkles size={16} />
              AI Powered Matchmaking
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-none tracking-tight">
              DATE IN THE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 drop-shadow-[0_0_25px_rgba(255,0,170,0.7)]">
                CYBER ERA
              </span>
            </h1>

            <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl">
              A futuristic dating platform where AI, neon nightlife, and human connection merge into one immersive cyberpunk experience.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-black text-lg shadow-[0_0_40px_rgba(0,255,255,0.5)] hover:scale-105 transition-all">
                Start Matching
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:border-cyan-400/40 hover:text-cyan-300 transition-all">
                Explore City
              </button>
            </div>

            <div className="flex gap-10 mt-14 text-sm">
              <div>
                <h3 className="text-4xl font-black text-cyan-400">12M+</h3>
                <p className="text-white/50 mt-1">Neon Citizens</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-pink-400">88%</h3>
                <p className="text-white/50 mt-1">AI Match Accuracy</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-400">24/7</h3>
                <p className="text-white/50 mt-1">Realtime Sync</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* App Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[340px] h-[700px] rounded-[40px] border border-cyan-400/30 bg-black/40 backdrop-blur-2xl overflow-hidden shadow-[0_0_60px_rgba(0,255,255,0.25)]">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/40 border border-cyan-400/30 backdrop-blur-xl text-cyan-300 text-sm shadow-[0_0_15px_rgba(0,255,255,0.5)]">
              Compatibility 96%
            </div>

            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/40 border border-pink-500/30 flex items-center justify-center backdrop-blur-xl shadow-[0_0_15px_rgba(255,0,170,0.5)]">
              ⚡
            </div>

            <div className="absolute bottom-0 p-7 w-full">
              <h2 className="text-5xl font-black">
                Nova
                <span className="text-cyan-300 text-2xl ml-2">24</span>
              </h2>

              <p className="text-white/75 mt-3 leading-relaxed">
                Synthwave DJ • VR artist • Night district explorer.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {['VR', 'Synthwave', 'AI', 'Nightlife'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-5 mt-10">
                <button className="w-20 h-20 rounded-full bg-black/50 border border-pink-500/40 text-3xl shadow-[0_0_25px_rgba(255,0,170,0.5)] hover:scale-110 transition-all">
                  ✕
                </button>

                <button className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-pink-500 text-black text-4xl font-black shadow-[0_0_40px_rgba(0,255,255,0.6)] hover:scale-110 transition-all">
                  ♥
                </button>

                <button className="w-20 h-20 rounded-full bg-black/50 border border-cyan-400/40 text-3xl shadow-[0_0_25px_rgba(0,255,255,0.5)] hover:scale-110 transition-all">
                  ⚡
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-8 lg:px-16 py-24">
        <div className="text-center mb-16">
          <p className="text-cyan-300 tracking-[0.3em] uppercase text-sm">Features</p>
          <h2 className="text-5xl font-black mt-4">The Future of Dating</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Heart size={32} />,
              title: 'Smart Matching',
              desc: 'AI-driven compatibility engine learns your energy patterns.',
            },
            {
              icon: <MessageCircle size={32} />,
              title: 'Realtime Chat',
              desc: 'Immersive neon messaging with holographic reactions.',
            },
            {
              icon: <Zap size={32} />,
              title: 'Swipe Dynamics',
              desc: 'Smooth futuristic swipe interactions with cyber effects.',
            },
            {
              icon: <Shield size={32} />,
              title: 'Trust Layer',
              desc: 'Advanced identity verification and reputation systems.',
            },
          ].map((feature) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-cyan-400/40 transition-all"
            >
              <div className="text-cyan-400 mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="text-white/60 mt-4 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="relative z-10 px-8 lg:px-16 py-28">
        <div className="rounded-[40px] overflow-hidden border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 backdrop-blur-2xl p-12 lg:p-20 text-center shadow-[0_0_50px_rgba(0,255,255,0.15)]">
          <p className="tracking-[0.3em] uppercase text-cyan-300 text-sm">
            Enter The Grid
          </p>

          <h2 className="text-5xl lg:text-7xl font-black mt-6 leading-tight">
            Your Match Exists
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Somewhere In Neon City
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-white/65 text-lg mt-8 leading-relaxed">
            Join millions of digital citizens discovering love through AI-powered compatibility and immersive cyber experiences.
          </p>

          <div className="flex justify-center gap-5 mt-12 flex-wrap">
            <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-black text-lg shadow-[0_0_35px_rgba(0,255,255,0.5)] hover:scale-105 transition-all">
              Download App
            </button>

            <button className="px-10 py-5 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl hover:border-pink-500/40 transition-all">
              Watch Preview
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
