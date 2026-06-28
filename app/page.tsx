'use client'

import { useState, useCallback } from 'react'
import ResumeForm from '@/components/ResumeForm'
import ResumePreview from '@/components/ResumePreview'
import { ResumeData } from '@/types/resume'
import { Printer, Sparkles, ExternalLink } from 'lucide-react'

const defaultData: ResumeData = {
  fullName: '',
  email: '',
  phone: '',
  linkedin: '',
  summary: '',
  workExperience: [],
  education: [],
  skills: '',
}

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultData)

  const handleUpdate = useCallback((data: ResumeData) => {
    setResumeData(data)
  }, [])

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="no-print glass-card mx-4 mt-4 rounded-2xl border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-4 z-50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="gradient-text text-xl font-bold leading-tight">ResumeForge</h1>
            <p className="text-white/40 text-xs">Craft your professional story</p>
          </div>
        </div>
        <button
          id="print-download-btn"
          onClick={handlePrint}
          className="btn-primary flex items-center gap-2"
          aria-label="Print or download resume"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Download</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex gap-4 p-4 mt-4 overflow-hidden max-h-[calc(100vh-120px)]">
        {/* Left Panel — Form */}
        <div className="no-print w-[45%] flex-shrink-0 glass-card overflow-y-auto">
          <div className="p-6">
            <h2 className="text-white/80 font-semibold text-sm uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-gradient-to-b from-violet-500 to-blue-500 rounded-full inline-block"></span>
              Your Information
            </h2>
            <ResumeForm data={resumeData} onChange={handleUpdate} />
          </div>
        </div>

        {/* Right Panel — Preview */}
        <div className="flex-1 flex flex-col glass-card overflow-hidden">
          <div className="no-print flex items-center justify-between px-6 py-3 border-b border-white/10">
            <p className="text-white/60 text-xs font-medium uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
              Live Preview
            </p>
            <span className="text-white/30 text-xs">A4 Format</span>
          </div>
          {/* Print target */}
          <div className="flex-1 overflow-y-auto p-4 print-area" id="preview-container">
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print mt-4 pb-6 px-4 flex flex-col items-center gap-4">
        {/* Brand Button */}
        <a
          id="digital-heroes-btn"
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-brand-btn"
          aria-label="Visit Digital Heroes Co"
        >
          <Sparkles className="w-4 h-4" />
          <span>Built for Digital Heroes</span>
          <ExternalLink className="w-4 h-4" />
        </a>

        {/* Author info */}
        <div className="text-center">
          <p className="text-white/50 text-sm">
            Made with ❤️ by{' '}
            <span className="gradient-text font-semibold">Theertha P Nair</span>
          </p>
          <a
            href="mailto:theerthapnair06@gmail.com"
            className="text-white/30 hover:text-violet-400 text-xs transition-colors duration-200"
          >
            theerthapnair06@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}
