'use client'

import { ResumeData } from '@/types/resume'
import { Mail, Phone, Linkedin } from 'lucide-react'

interface ResumePreviewProps {
  data: ResumeData
}

export default function ResumePreview({ data: d }: ResumePreviewProps) {
  const skills = d.skills
    ? d.skills.split(',').map(s => s.trim()).filter(Boolean)
    : []

  const isEmpty =
    !d.fullName &&
    !d.email &&
    !d.phone &&
    !d.linkedin &&
    !d.summary &&
    d.workExperience.length === 0 &&
    d.education.length === 0 &&
    !d.skills

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
          <span className="text-3xl">📄</span>
        </div>
        <p className="text-white/40 text-sm font-medium">Your resume preview will appear here</p>
        <p className="text-white/25 text-xs mt-1">Start filling in the form on the left</p>
      </div>
    )
  }

  return (
    <div
      id="resume-preview"
      className="resume-preview bg-white shadow-2xl mx-auto"
      style={{
        width: '210mm',
        minHeight: '297mm',
        padding: '15mm 18mm',
        fontSize: '10pt',
        lineHeight: '1.5',
        maxWidth: '100%',
      }}
    >
      {/* ── Header ──────────────────────────────────────────────────── */}
      <header style={{ borderBottom: '2.5px solid #1e3a8a', paddingBottom: '10px', marginBottom: '14px' }}>
        {d.fullName && (
          <h1
            style={{
              fontFamily: 'Merriweather, serif',
              fontSize: '22pt',
              fontWeight: 700,
              color: '#1e3a8a',
              margin: 0,
              letterSpacing: '-0.5px',
            }}
          >
            {d.fullName}
          </h1>
        )}

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginTop: '6px',
          }}
        >
          {d.email && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '9pt', color: '#374151' }}>
              <Mail style={{ width: 11, height: 11, color: '#2563eb' }} />
              {d.email}
            </span>
          )}
          {d.phone && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '9pt', color: '#374151' }}>
              <Phone style={{ width: 11, height: 11, color: '#2563eb' }} />
              {d.phone}
            </span>
          )}
          {d.linkedin && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '9pt', color: '#2563eb' }}>
              <Linkedin style={{ width: 11, height: 11, color: '#2563eb' }} />
              {d.linkedin.replace(/^https?:\/\//, '')}
            </span>
          )}
        </div>
      </header>

      {/* ── Summary ─────────────────────────────────────────────────── */}
      {d.summary && (
        <section style={{ marginBottom: '14px' }}>
          <SectionHeading>Professional Summary</SectionHeading>
          <p style={{ color: '#374151', fontSize: '9.5pt', lineHeight: 1.6, margin: 0 }}>
            {d.summary}
          </p>
        </section>
      )}

      {/* ── Work Experience ──────────────────────────────────────────── */}
      {d.workExperience.length > 0 && (
        <section style={{ marginBottom: '14px' }}>
          <SectionHeading>Work Experience</SectionHeading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {d.workExperience.map(work => (
              <div key={work.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    {work.jobTitle && (
                      <p style={{ fontWeight: 700, fontSize: '10.5pt', color: '#111827', margin: 0 }}>
                        {work.jobTitle}
                      </p>
                    )}
                    {work.company && (
                      <p style={{ fontSize: '9.5pt', color: '#2563eb', margin: '1px 0 0' }}>
                        {work.company}
                      </p>
                    )}
                  </div>
                  {(work.startDate || work.endDate) && (
                    <span
                      style={{
                        fontSize: '8.5pt',
                        color: '#6b7280',
                        whiteSpace: 'nowrap',
                        background: '#f3f4f6',
                        padding: '2px 8px',
                        borderRadius: '999px',
                        marginLeft: '8px',
                      }}
                    >
                      {[work.startDate, work.endDate].filter(Boolean).join(' – ')}
                    </span>
                  )}
                </div>
                {work.description && (
                  <div style={{ marginTop: '5px' }}>
                    {work.description.split('\n').map((line, i) => (
                      <p key={i} style={{ color: '#374151', fontSize: '9pt', margin: '2px 0', lineHeight: 1.55 }}>
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Education ───────────────────────────────────────────────── */}
      {d.education.length > 0 && (
        <section style={{ marginBottom: '14px' }}>
          <SectionHeading>Education</SectionHeading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {d.education.map(edu => (
              <div key={edu.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  {edu.degree && (
                    <p style={{ fontWeight: 700, fontSize: '10.5pt', color: '#111827', margin: 0 }}>
                      {edu.degree}
                    </p>
                  )}
                  {edu.institution && (
                    <p style={{ fontSize: '9.5pt', color: '#2563eb', margin: '1px 0 0' }}>
                      {edu.institution}
                    </p>
                  )}
                </div>
                {edu.year && (
                  <span
                    style={{
                      fontSize: '8.5pt',
                      color: '#6b7280',
                      background: '#f3f4f6',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      whiteSpace: 'nowrap',
                      marginLeft: '8px',
                    }}
                  >
                    {edu.year}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Skills ──────────────────────────────────────────────────── */}
      {skills.length > 0 && (
        <section>
          <SectionHeading>Skills</SectionHeading>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {skills.map((skill, i) => (
              <span
                key={i}
                style={{
                  fontSize: '8.5pt',
                  color: '#1e40af',
                  background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontWeight: 500,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '8px' }}>
      <h2
        style={{
          fontFamily: 'Merriweather, serif',
          fontSize: '11pt',
          fontWeight: 700,
          color: '#1e3a8a',
          margin: 0,
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        {children}
      </h2>
      <div style={{ height: '1.5px', background: 'linear-gradient(to right, #2563eb, transparent)', marginTop: '3px' }} />
    </div>
  )
}
