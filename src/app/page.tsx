import React from "react";
import CareerPredictor from "@/components/CareerPredictor";
import {
  Sparkles,
  TrendingUp,
  MapPin,
  Compass,
  Award,
  Users,
  Building,
  Target,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe2,
  CheckCircle,
  Briefcase,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Top Notification Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white text-xs sm:text-sm py-2.5 px-4 text-center font-medium shadow-inner flex items-center justify-center gap-2">
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-black bg-white/20 text-white uppercase tracking-wider">
          UN SDG 8 Initiative
        </span>
        <span>
          Promoting Decent Work, Skill Inclusion & Local Economic Growth in Tier-2 & Tier-3 Cities.
        </span>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30 font-black text-xl">
              CP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  CareerPath <span className="text-emerald-600">AI</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  SDG 8 Edition
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Democratizing Decent Work for Bharat&apos;s Youth
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">
              How It Works
            </a>
            <a href="#career-predictor" className="hover:text-emerald-600 transition-colors">
              Career Predictor
            </a>
            <a href="#sdg-alignment" className="hover:text-emerald-600 transition-colors">
              SDG 8 Goals
            </a>
            <a href="#tier-impact" className="hover:text-emerald-600 transition-colors">
              Tier-2/3 Impact
            </a>
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#career-predictor"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all duration-200 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Try Predictor
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        {/* Decorative Background Lighting Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-amber-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-bold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Empowering Youth in Tier-2 & Tier-3 Cities Across India
          </div>

          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Bridging Talent to <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2">Decent Work</span> in Tier-2 & 3 Cities
          </h1>

          {/* Hero Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Millions of ambitious youth in towns like <strong>Kanpur</strong>,{" "}
            <strong>Fatehpur</strong>, and <strong>Indore</strong> have high-potential skills but lack
            localized market pathways. CareerPath AI matches your real capabilities to tailored job roles
            and a 3-step learning roadmap—aligned with <strong>UN SDG 8</strong>.
          </p>

          {/* Hero Action CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#career-predictor"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-xl shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-5 h-5" />
              Start Free Career Prediction
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#sdg-alignment"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-base border border-slate-300 shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Target className="w-5 h-5 text-emerald-600" />
              Explore SDG 8 Alignment
            </a>
          </div>

          {/* Trust & Key Stats Strip */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">Tier 2 & 3</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Dedicated Focus Cities</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">3 Job Roles</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Hyper-Local & Hybrid</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">3-Step Path</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Free Curated Roadmaps</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-600">SDG Goal 8</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Decent Work for All</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE INTERACTIVE COMPONENT SECTION */}
      <section className="relative py-8 bg-slate-100/60 border-y border-slate-200/60">
        <CareerPredictor />
      </section>

      {/* The Challenge in Tier-2/3 Cities vs Our Solution */}
      <section id="tier-impact" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200">
            Regional Reality & Purpose
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Tier-2 & Tier-3 Cities Need Tailored Career Pathways
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Conventional job platforms cater exclusively to Tier-1 metros (Bengaluru, Mumbai, Delhi).
            Youth in smaller districts face unique obstacles that require intelligent intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: The Challenge */}
          <div className="p-8 rounded-3xl bg-rose-50/50 border border-rose-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xl mb-6">
              ⚠️
            </div>
            <h3 className="text-xl font-bold text-slate-900">The Prevalent Barriers in Tier-2/3</h3>
            <ul className="mt-5 space-y-3.5 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span>
                  <strong>Forced Distress Migration:</strong> Youth leave family and local roots for
                  minimum-wage survival jobs in congested Tier-1 metros.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span>
                  <strong>Informal & Vulnerable Labor:</strong> Many work without written contracts,
                  provident funds, or fair minimum wage protection.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span>
                  <strong>Information Asymmetry:</strong> Students in cities like Fatehpur don&apos;t know
                  what skills local MSMEs, agritech, and remote tech firms are actually seeking.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: The CareerPath AI Solution */}
          <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200/80 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl mb-6">
              🌱
            </div>
            <h3 className="text-xl font-bold text-slate-900">How CareerPath AI Solves This</h3>
            <ul className="mt-5 space-y-3.5 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Hyper-Local Opportunity Mapping:</strong> Uncovers regional industrial
                  corridors and verified work-from-home employers matching existing skills.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Decent Work & Fair Wages:</strong> Aligns youth with formal, productive
                  roles offering salary growth, upskilling, and workplace dignity.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero-Cost Skill Roadmaps:</strong> Recommends free, government-sponsored
                  (PMKVY, SWAYAM) and open-source platforms to bridge skill deficits.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200">
              Simple 3-Step Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From Raw Skills to a Confident Career Path
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              No complicated resumes needed. Just share what you can do and where you live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <span className="text-5xl font-black text-slate-200 absolute top-6 right-6">01</span>
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-6 shadow-md shadow-emerald-500/20">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Input Your Skills & City</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Whether you know React, basic Python, Tally, or high-speed data entry, tell the engine
                your capabilities and your Tier-2/3 home base.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <span className="text-5xl font-black text-slate-200 absolute top-6 right-6">02</span>
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-6 shadow-md shadow-emerald-500/20">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">AI Synthesizes 3 Job Roles</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                The predictor evaluates local market demands, hybrid corridors, and salary benchmarks
                to recommend 3 high-probability, dignifying roles.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <span className="text-5xl font-black text-slate-200 absolute top-6 right-6">03</span>
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-6 shadow-md shadow-emerald-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Execute 3-Step Learning Path</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Follow week-by-week actionable milestones with direct links to free curricula, portfolio
                templates, and verified hiring drives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UN SDG 8 Detailed Alignment Grid */}
      <section id="sdg-alignment" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-3">
            Global Agenda Alignment
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How CareerPath AI Advances UN SDG Goal 8
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            <strong>Target: Decent Work & Economic Growth.</strong> Promoting sustained, inclusive, and
            sustainable economic growth, full and productive employment, and decent work for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* SDG Target 8.5 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-black px-2.5 py-1 rounded bg-rose-100 text-rose-800 uppercase">
                Target 8.5
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-3">Full & Decent Employment</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Empowering all young women and men in Tier-2/3 cities to attain dignified,
                equal-pay work with clear upward economic mobility.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700">
              ✓ Fair wage benchmarking
            </div>
          </div>

          {/* SDG Target 8.6 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-black px-2.5 py-1 rounded bg-amber-100 text-amber-800 uppercase">
                Target 8.6
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-3">Reduce NEET Youth</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Substantially reducing the proportion of youth Not in Employment, Education, or
                Training through zero-cost vocational roadmaps.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700">
              ✓ Free government upskilling links
            </div>
          </div>

          {/* SDG Target 8.2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-black px-2.5 py-1 rounded bg-blue-100 text-blue-800 uppercase">
                Target 8.2
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-3">Productivity & Upgrading</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Achieving higher levels of economic productivity through technological upgrading and
                digital skills absorption in semi-urban hubs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700">
              ✓ Tech & AI literacy onboarding
            </div>
          </div>

          {/* SDG Target 8.3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-black px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 uppercase">
                Target 8.3
              </span>
              <h3 className="text-lg font-bold text-slate-900 mt-3">MSME Formalization</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Encouraging formal employment growth and skill-matching for regional micro-, small- and
                medium-sized enterprises (MSMEs).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-700">
              ✓ Local business talent pipeline
            </div>
          </div>
        </div>
      </section>

      {/* Youth Impact Stories / Testimonials */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              Real-World Potential
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Voices of Bharat&apos;s Skilled Youth
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Hypothetical journeys illustrating how AI-guided roadmaps unlock local economic dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <p className="text-xs text-slate-300 leading-relaxed italic">
                &ldquo;I knew basic Python from college in Kanpur, but had no idea how to get hired
                without relocating to Bengaluru. CareerPath AI showed me remote QA and local agritech
                roles and the exact GitHub projects I needed to build.&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Aman Verma</h4>
                  <p className="text-[11px] text-emerald-400">Junior QA Engineer &bull; Kanpur</p>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300 font-bold">
                  ₹28k/mo
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <p className="text-xs text-slate-300 leading-relaxed italic">
                &ldquo;Living in Fatehpur, I only knew about traditional clerical jobs. The predictor
                helped me transition my data entry speed into Tally GST billing for district suppliers,
                increasing my monthly income by 60%.&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Pooja Devi</h4>
                  <p className="text-[11px] text-emerald-400">GST Billing Specialist &bull; Fatehpur</p>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300 font-bold">
                  ₹22k/mo
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700">
              <p className="text-xs text-slate-300 leading-relaxed italic">
                &ldquo;With Canva and Photoshop basics in Indore, I didn&apos;t know how to pitch
                companies. The 3-step path showed me how to make client mockups and work as a hybrid
                social media designer.&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Rohit Sharma</h4>
                  <p className="text-[11px] text-emerald-400">Creative Designer &bull; Indore</p>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300 font-bold">
                  ₹32k/mo
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Submission Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center font-black text-white text-base">
                8
              </div>
              <div>
                <p className="text-sm font-bold text-white">CareerPath AI &bull; SDG 8 Initiative</p>
                <p className="text-xs text-slate-500">
                  Decent Work and Economic Growth | Next.js & Tailwind CSS Architecture
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs">
              <a href="#career-predictor" className="hover:text-emerald-400 transition-colors">
                Predictor Engine
              </a>
              <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">
                Methodology
              </a>
              <a href="#sdg-alignment" className="hover:text-emerald-400 transition-colors">
                SDG Targets
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>
              Built for Project Submission &bull; Powered by Next.js App Router, Tailwind CSS, &
              Mock Predictor API.
            </p>
            <p className="flex items-center gap-1">
              <span>Aligned with</span>
              <span className="text-emerald-400 font-semibold">United Nations Sustainable Development Goal 8</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
