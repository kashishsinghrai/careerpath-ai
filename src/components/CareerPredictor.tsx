"use client";

import React, { useState } from "react";
import {
  Sparkles,
  MapPin,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Building2,
  DollarSign,
  Award,
  BookOpen,
  RefreshCw,
  Share2,
  Target,
  Zap,
  Globe2,
  ChevronRight,
  ShieldCheck,
  Download,
} from "lucide-react";

interface JobRole {
  id: string;
  title: string;
  matchPercentage: number;
  salaryRange: string;
  workMode: "Local Hub" | "Remote Friendly" | "Hybrid (Tier-2/3)";
  hiringLocations: string[];
  description: string;
  topCompanies: string[];
  matchedSkills: string[];
  recommendedToLearn: string[];
  growthScore: string;
  sdgTarget: string;
}

interface LearningStep {
  stepNumber: number;
  title: string;
  timeframe: string;
  focus: string;
  actionItems: string[];
  recommendedPlatforms: { name: string; type: "Free" | "Govt Sponsored" | "Community" }[];
}

interface PredictionResponse {
  location: string;
  detectedSkills: string[];
  summary: string;
  jobRoles: [JobRole, JobRole, JobRole];
  learningPath: [LearningStep, LearningStep, LearningStep];
  localEconomyInsight: {
    tierCategory: string;
    averagePlacementTime: string;
    keyGrowthClusters: string[];
    sdgImpactNote: string;
  };
}

const SAMPLE_PRESETS = [
  { label: "Frontend Dev (React)", skills: "React, JavaScript, Tailwind, Git", location: "Kanpur" },
  { label: "Data & Office", skills: "Data Entry, Advanced Excel, Tally, Billing", location: "Fatehpur" },
  { label: "Python & Analytics", skills: "Python, SQL, Data Cleaning, Automation", location: "Lucknow" },
  { label: "Creative Design", skills: "Graphic Design, Canva, Photoshop, Social Media", location: "Indore" },
];

const QUICK_LOCATIONS = ["Kanpur", "Fatehpur", "Lucknow", "Varanasi", "Indore", "Jaipur"];

export default function CareerPredictor() {
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState("Graduate / Diploma");
  const [loading, setLoading] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState("");
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"roles" | "learning">("roles");
  const [copiedLink, setCopiedLink] = useState(false);

  const handlePredict = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!skills.trim()) {
      setError("Please enter at least one skill (e.g., React, Python, Data Entry).");
      return;
    }

    setError(null);
    setLoading(true);

    // Dynamic loading status messages for high-tech feel
    const phases = [
      "Analyzing skill graph & Tier-2/3 local labor indices...",
      `Scanning demand patterns in ${location.trim() || "Kanpur"} & hybrid remote sectors...`,
      "Mapping Decent Work pathways aligned with UN SDG 8...",
      "Generating personalized 3-step actionable roadmap...",
    ];

    let phaseIndex = 0;
    setLoadingPhase(phases[0]);
    const interval = setInterval(() => {
      phaseIndex = (phaseIndex + 1) % phases.length;
      setLoadingPhase(phases[phaseIndex]);
    }, 700);

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          skills: skills.trim(),
          location: location.trim() || "Kanpur",
          education,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to fetch career prediction. Please try again.");
      }

      const data = await response.json();
      setResult(data);
      // Auto-scroll to results
      setTimeout(() => {
        const resultsEl = document.getElementById("predictor-results");
        if (resultsEl) {
          resultsEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } catch (err: any) {
      setError(err?.message || "Something went wrong while connecting to the predictor.");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const handlePresetClick = (presetSkills: string, presetLocation: string) => {
    setSkills(presetSkills);
    setLocation(presetLocation);
    setError(null);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="career-predictor" className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6">
      {/* Container Box */}
      <div className="relative rounded-3xl bg-white border border-slate-200/80 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Top Accent Bar representing SDG 8 Green / Gold */}
        <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500" />

        {/* Component Header */}
        <div className="p-6 sm:p-10 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                Interactive Career AI Model
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Skill & Location-Based Career Predictor
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1.5 max-w-2xl">
                Trained on Tier-2 and Tier-3 localized job indexes. Get instant job role alignments,
                salary benchmarks, and a 3-step learning pathway to decent work.
              </p>
            </div>

            {/* SDG 8 Badge */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-900 text-white shadow-md self-start md:self-center">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center font-black text-white text-lg">
                8
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-semibold">
                  UN SDG 8 Initiative
                </p>
                <p className="text-xs font-bold text-white">Decent Work & Economic Growth</p>
              </div>
            </div>
          </div>

          {/* Preset Buttons for Quick Demo */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5 mr-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              Try Popular Profiles:
            </span>
            {SAMPLE_PRESETS.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePresetClick(preset.skills, preset.location)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 border border-slate-200/80 transition-all duration-200"
              >
                {preset.label} ({preset.location})
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handlePredict} className="p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Skills Input */}
            <div className="md:col-span-6 space-y-2">
              <label htmlFor="skills" className="block text-sm font-bold text-slate-800">
                Your Skills & Abilities <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="skills"
                  type="text"
                  placeholder="e.g., React, Python, Data Entry, Excel, Graphic Design"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 placeholder:text-slate-400 text-sm transition-all shadow-sm"
                  required
                />
                <Briefcase className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
              <p className="text-xs text-slate-500">
                Separate multiple skills with commas. Both technical and non-technical skills supported.
              </p>
            </div>

            {/* Location Input */}
            <div className="md:col-span-3 space-y-2">
              <label htmlFor="location" className="block text-sm font-bold text-slate-800">
                Target City / District <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="location"
                  type="text"
                  placeholder="e.g., Kanpur, Fatehpur"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 placeholder:text-slate-400 text-sm transition-all shadow-sm"
                  required
                />
                <MapPin className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
              {/* Quick location tag pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {QUICK_LOCATIONS.slice(0, 4).map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setLocation(loc)}
                    className="text-[11px] px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Education / Background */}
            <div className="md:col-span-3 space-y-2">
              <label htmlFor="education" className="block text-sm font-bold text-slate-800">
                Education / Level
              </label>
              <div className="relative">
                <select
                  id="education"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 text-sm transition-all shadow-sm appearance-none bg-white"
                >
                  <option value="10th / 12th Pass">10th / 12th Pass</option>
                  <option value="ITI / Polytechnic Diploma">ITI / Polytechnic Diploma</option>
                  <option value="Graduate / Diploma">Graduate / General Degree</option>
                  <option value="B.Tech / BCA / MCA">B.Tech / BCA / Computer Science</option>
                  <option value="Self-Taught / Freelancer">Self-Taught / Informal Experience</option>
                </select>
                <GraduationCap className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
              <p className="text-xs text-slate-500">Helps customize apprenticeship vs direct hire.</p>
            </div>
          </div>

          {/* Validation Alert */}
          {error && (
            <div className="mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-2">
              <span className="font-semibold">Notice:</span> {error}
            </div>
          )}

          {/* Submit Action */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Instant mock execution &bull; No API keys or credit card required
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white text-base shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 ${
                loading
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
              }`}
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin text-white" />
                  Generating Roadmap...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Predict 3 Job Roles & Learning Path
                  <ArrowRight className="w-5 h-5 ml-1" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Loading Overlay / Progress Indicator */}
        {loading && (
          <div className="px-6 py-12 sm:p-14 bg-slate-50/90 border-t border-slate-100 flex flex-col items-center justify-center text-center">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-100 animate-ping opacity-75"></div>
              <div className="w-16 h-16 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-800">Processing Skills Profile</h3>
            <p className="text-sm text-emerald-700 font-medium mt-1 animate-pulse">{loadingPhase}</p>
            <div className="w-64 h-1.5 bg-slate-200 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-2/3 animate-pulse"></div>
            </div>
          </div>
        )}

        {/* Results Showcase Section */}
        {result && !loading && (
          <div id="predictor-results" className="border-t border-slate-200 bg-slate-50/50 p-6 sm:p-10">
            {/* Summary Header */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Prediction Ready
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Location: <strong className="text-slate-800">{result.location}</strong>
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Curated Career Trajectory for {result.location}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 max-w-3xl">{result.summary}</p>
                </div>

                {/* Actions: Print / Share */}
                <div className="flex items-center gap-2 pt-2 lg:pt-0">
                  <button
                    onClick={handleShare}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors shadow-sm"
                  >
                    <Share2 className="w-4 h-4 text-slate-500" />
                    {copiedLink ? "Link Copied!" : "Share Link"}
                  </button>
                  <button
                    onClick={handlePrint}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4 text-slate-500" />
                    Print / Export
                  </button>
                </div>
              </div>

              {/* Local Market KPI Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-5 border-t border-slate-100">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Regional Economic Cluster
                  </p>
                  <p className="text-sm font-bold text-slate-800 mt-0.5">
                    {result.localEconomyInsight.tierCategory}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                    Estimated Time to Placement
                  </p>
                  <p className="text-sm font-bold text-emerald-900 mt-0.5">
                    {result.localEconomyInsight.averagePlacementTime} with active roadmap
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-100">
                  <p className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
                    SDG 8 Dignified Work Goal
                  </p>
                  <p className="text-xs font-medium text-amber-900 mt-0.5 line-clamp-2">
                    {result.localEconomyInsight.sdgImpactNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Tab Switcher: 3 Tailored Job Roles vs 3-Step Learning Path */}
            <div className="flex border-b border-slate-200 mb-8">
              <button
                type="button"
                onClick={() => setActiveTab("roles")}
                className={`flex items-center gap-2 py-3.5 px-5 font-bold text-sm border-b-2 transition-all ${
                  activeTab === "roles"
                    ? "border-emerald-600 text-emerald-700"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                3 Tailored Job Roles
                <span className="ml-1.5 px-2 py-0.5 text-xs rounded-full bg-emerald-100 text-emerald-800 font-extrabold">
                  3
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("learning")}
                className={`flex items-center gap-2 py-3.5 px-5 font-bold text-sm border-b-2 transition-all ${
                  activeTab === "learning"
                    ? "border-emerald-600 text-emerald-700"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                3-Step Learning Path
                <span className="ml-1.5 px-2 py-0.5 text-xs rounded-full bg-emerald-100 text-emerald-800 font-extrabold">
                  Roadmap
                </span>
              </button>
            </div>

            {/* TAB 1: 3 TAILORED JOB ROLES */}
            {activeTab === "roles" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {result.jobRoles.map((role, index) => (
                    <div
                      key={role.id}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between overflow-hidden"
                    >
                      {/* Top Role Header */}
                      <div className="p-6">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wide ${
                              role.workMode === "Remote Friendly"
                                ? "bg-indigo-50 text-indigo-700 border border-indigo-200"
                                : role.workMode === "Hybrid (Tier-2/3)"
                                ? "bg-amber-50 text-amber-800 border border-amber-200"
                                : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                            }`}
                          >
                            {role.workMode}
                          </span>

                          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold">
                            <Sparkles className="w-3.5 h-3.5" />
                            {role.matchPercentage}% Match
                          </div>
                        </div>

                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 leading-snug">
                          {role.title}
                        </h4>

                        <div className="mt-3 flex items-baseline gap-1.5">
                          <DollarSign className="w-4 h-4 text-emerald-600 self-center" />
                          <span className="text-base font-extrabold text-slate-900">
                            {role.salaryRange}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">estimated</span>
                        </div>

                        <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                          {role.description}
                        </p>

                        {/* Locations */}
                        <div className="mt-4 pt-3 border-t border-slate-100">
                          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            Hiring Corridors:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {role.hiringLocations.map((loc, i) => (
                              <span
                                key={i}
                                className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                              >
                                {loc}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Top Hiring Employers */}
                        <div className="mt-3">
                          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <Building2 className="w-3 h-3 text-slate-400" />
                            Key Recruiters & MSMEs:
                          </p>
                          <p className="text-xs text-slate-700 font-medium">
                            {role.topCompanies.join(" • ")}
                          </p>
                        </div>

                        {/* Skills bridge */}
                        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                          <div>
                            <span className="text-[11px] font-semibold text-emerald-700 block">
                              Matched from your profile:
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {role.matchedSkills.map((sk, i) => (
                                <span
                                  key={i}
                                  className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/60"
                                >
                                  ✓ {sk}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <span className="text-[11px] font-semibold text-amber-700 block">
                              Bridge skills to learn:
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {role.recommendedToLearn.map((sk, i) => (
                                <span
                                  key={i}
                                  className="text-[11px] font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/60"
                                >
                                  + {sk}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer with SDG Alignment */}
                      <div className="p-4 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-600 flex items-center justify-between">
                        <span className="flex items-center gap-1 font-semibold text-emerald-700">
                          <TrendingUp className="w-3.5 h-3.5" />
                          {role.growthScore}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium truncate max-w-[170px]" title={role.sdgTarget}>
                          {role.sdgTarget.split(":")[0]}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
                  <div className="flex items-center gap-2.5 text-emerald-900">
                    <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>
                      Ready to build the exact skills required for these roles? Switch to the
                      learning path.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("learning")}
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors whitespace-nowrap"
                  >
                    View 3-Step Learning Roadmap &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: 3-STEP LEARNING PATH */}
            {activeTab === "learning" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                  {result.learningPath.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between relative overflow-hidden"
                    >
                      {/* Step Number Top Badge */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center shadow-md shadow-emerald-500/20">
                            0{step.stepNumber}
                          </div>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                            {step.timeframe}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {step.title}
                        </h4>

                        <p className="text-xs text-slate-600 mt-2 font-medium bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          {step.focus}
                        </p>

                        {/* Action Checklist */}
                        <div className="mt-4 space-y-2">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Action Milestones:
                          </p>
                          {step.actionItems.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recommended Platforms */}
                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1">
                          <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                          Recommended Free Curricula:
                        </p>
                        <div className="space-y-1.5">
                          {step.recommendedPlatforms.map((plat, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-50 border border-slate-100"
                            >
                              <span className="font-semibold text-slate-800">{plat.name}</span>
                              <span
                                className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                                  plat.type === "Govt Sponsored"
                                    ? "bg-amber-100 text-amber-800"
                                    : plat.type === "Free"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {plat.type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* SDG 8 Impact Callout */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-semibold">
                      <Target className="w-3.5 h-3.5 text-emerald-400" />
                      UN SDG Target 8.6 & 8.5
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Inclusive Economic Growth in Tier-2/3 Communities
                    </h4>
                    <p className="text-xs text-emerald-200 max-w-2xl leading-relaxed">
                      CareerPath AI promotes equal access to productive employment and reduces youth
                      unemployment in emerging cities like {result.location}, ensuring economic dignity
                      and digital skills inclusion.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setResult(null);
                      setSkills("");
                      setLocation("");
                      window.scrollTo({ top: 300, behavior: "smooth" });
                    }}
                    className="px-5 py-3 rounded-xl bg-white text-emerald-950 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-md whitespace-nowrap flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4 text-emerald-700" />
                    Test Another Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
