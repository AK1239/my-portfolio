import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import {
  PiMagnifyingGlassDuotone,
  PiMapPinAreaDuotone,
  PiChatCircleDuotone,
  PiHouseLineDuotone,
  PiCalendarCheckDuotone,
  PiShieldCheckDuotone,
} from "react-icons/pi";
import StoreButtons from "../components/StoreButtons";
import { NDOTONI_FEATURES, NDOTONI_LINKS } from "../data/ndotoni";

const FEATURE_ICONS = {
  search: PiMagnifyingGlassDuotone,
  map: PiMapPinAreaDuotone,
  chat: PiChatCircleDuotone,
  listing: PiHouseLineDuotone,
  calendar: PiCalendarCheckDuotone,
  shield: PiShieldCheckDuotone,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const NdotoniPage = () => {
  useEffect(() => {
    document.title = "Ndotoni | Find Your Dream Home in Tanzania";
    return () => {
      document.title = "Akil Khatri | Full Stack Software Developer";
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-[#0c1210] text-white overflow-x-hidden"
      style={{ fontFamily: "'Figtree', sans-serif" }}
    >
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-400/8 rounded-full blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            Back to portfolio
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-green-400/80 font-medium">
            Web & Mobile
          </span>
        </div>
      </header>

      <main className="relative z-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-4">
                Find. Book. Stay.
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Ndotoni
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                A mobile-first property rental platform built for Tanzania — find verified rentals,
                browse on a map, and connect with landlords directly.
              </p>
              <StoreButtons
                playStore={NDOTONI_LINKS.playStore}
                appStore={NDOTONI_LINKS.appStore}
                size="large"
              />
              <div className="flex flex-wrap gap-2 mt-8">
                {["React", "TypeScript", "AWS Lambda", "iOS & Android"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-2xl scale-95" />
              <img
                src="/images/ndotoni.jpg"
                alt="Ndotoni platform preview"
                className="relative w-full rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10"
              />
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-white/2">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
            <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Rental made simple for Tanzania
              </h2>
              <p className="text-white/60">
                Whether you are looking for a long-term apartment or a short-term stay, Ndotoni
                connects tenants and landlords in one seamless platform.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {NDOTONI_FEATURES.map((feature, index) => {
                const Icon = FEATURE_ICONS[feature.icon];
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="group p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-green-400/30 hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-green-500/10 text-green-400 mb-4 group-hover:bg-green-500/15 transition-colors duration-300">
                      <Icon className="text-2xl" aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>Ndotoni — built by Akil Khatri</p>
          <Link to="/" className="hover:text-white/70 transition-colors">
            akilkhatri.com
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default NdotoniPage;
