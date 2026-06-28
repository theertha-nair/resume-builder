'use client'

import { ResumeData, WorkExperience, Education } from '@/types/resume'
import { Plus, Trash2, Briefcase, GraduationCap, User, Phone, Mail, Linkedin, FileText, Wrench } from 'lucide-react'

interface ResumeFormProps {
  data: ResumeData
  onChange: (data: ResumeData) => void
}

const generateId = () => Math.random().toString(36).substring(2, 9)

export default function ResumeForm({ data, onChange }: ResumeFormProps) {
  // ─── Handlers: personal info ───────────────────────────────────────────────
  const handleField = (field: keyof ResumeData, value: string) => {
    onChange({ ...data, [field]: value })
  }

  // ─── Handlers: work experience ─────────────────────────────────────────────
  const addWork = () => {
    const entry: WorkExperience = {
      id: generateId(),
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
    }
    onChange({ ...data, workExperience: [...data.workExperience, entry] })
  }

  const updateWork = (id: string, field: keyof WorkExperience, value: string) => {
    onChange({
      ...data,
      workExperience: data.workExperience.map(w =>
        w.id === id ? { ...w, [field]: value } : w
      ),
    })
  }

  const removeWork = (id: string) => {
    onChange({ ...data, workExperience: data.workExperience.filter(w => w.id !== id) })
  }

  // ─── Handlers: education ──────────────────────────────────────────────────
  const addEducation = () => {
    const entry: Education = {
      id: generateId(),
      degree: '',
      institution: '',
      year: '',
    }
    onChange({ ...data, education: [...data.education, entry] })
  }

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    onChange({
      ...data,
      education: data.education.map(e =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    })
  }

  const removeEducation = (id: string) => {
    onChange({ ...data, education: data.education.filter(e => e.id !== id) })
  }

  return (
    <div className="space-y-6">
      {/* ── Personal Info ────────────────────────────────────────────────── */}
      <section>
        <h3 className="section-title">
          <User className="w-4 h-4 text-violet-400" />
          Personal Information
        </h3>
        <div className="space-y-3">
          <div>
            <label className="form-label" htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              type="text"
              className="form-input"
              placeholder="Jane Doe"
              value={data.fullName}
              onChange={e => handleField('fullName', e.target.value)}
              aria-label="Full name"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="form-label" htmlFor="email">
                <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> Email</span>
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="jane@example.com"
                value={data.email}
                onChange={e => handleField('email', e.target.value)}
                aria-label="Email address"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="phone">
                <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> Phone</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="form-input"
                placeholder="+1 234 567 8900"
                value={data.phone}
                onChange={e => handleField('phone', e.target.value)}
                aria-label="Phone number"
              />
            </div>
          </div>

          <div>
            <label className="form-label" htmlFor="linkedin">
              <span className="flex items-center gap-1"><Linkedin className="w-3 h-3" /> LinkedIn URL</span>
            </label>
            <input
              id="linkedin"
              type="url"
              className="form-input"
              placeholder="https://linkedin.com/in/janedoe"
              value={data.linkedin}
              onChange={e => handleField('linkedin', e.target.value)}
              aria-label="LinkedIn URL"
            />
          </div>
        </div>
      </section>

      {/* ── Summary ──────────────────────────────────────────────────────── */}
      <section className="section-divider">
        <h3 className="section-title">
          <FileText className="w-4 h-4 text-blue-400" />
          Professional Summary
        </h3>
        <textarea
          id="summary"
          className="form-textarea"
          rows={4}
          placeholder="A brief overview of your professional background, key skills, and career goals..."
          value={data.summary}
          onChange={e => handleField('summary', e.target.value)}
          aria-label="Professional summary"
        />
      </section>

      {/* ── Work Experience ───────────────────────────────────────────────── */}
      <section className="section-divider">
        <h3 className="section-title">
          <Briefcase className="w-4 h-4 text-emerald-400" />
          Work Experience
        </h3>

        <div className="space-y-3">
          {data.workExperience.map((work, idx) => (
            <div key={work.id} className="entry-card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/50 text-xs font-medium uppercase tracking-wider">
                  Position {idx + 1}
                </span>
                <button
                  onClick={() => removeWork(work.id)}
                  className="btn-danger flex items-center gap-1"
                  aria-label={`Remove work experience ${idx + 1}`}
                  id={`remove-work-${work.id}`}
                >
                  <Trash2 className="w-3 h-3" />
                  Remove
                </button>
              </div>

              <div className="space-y-2.5">
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="form-label" htmlFor={`jobTitle-${work.id}`}>Job Title</label>
                    <input
                      id={`jobTitle-${work.id}`}
                      type="text"
                      className="form-input"
                      placeholder="Software Engineer"
                      value={work.jobTitle}
                      onChange={e => updateWork(work.id, 'jobTitle', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor={`company-${work.id}`}>Company</label>
                    <input
                      id={`company-${work.id}`}
                      type="text"
                      className="form-input"
                      placeholder="Acme Corp"
                      value={work.company}
                      onChange={e => updateWork(work.id, 'company', e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="form-label" htmlFor={`startDate-${work.id}`}>Start Date</label>
                    <input
                      id={`startDate-${work.id}`}
                      type="text"
                      className="form-input"
                      placeholder="Jan 2022"
                      value={work.startDate}
                      onChange={e => updateWork(work.id, 'startDate', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor={`endDate-${work.id}`}>End Date</label>
                    <input
                      id={`endDate-${work.id}`}
                      type="text"
                      className="form-input"
                      placeholder="Present"
                      value={work.endDate}
                      onChange={e => updateWork(work.id, 'endDate', e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label" htmlFor={`workDesc-${work.id}`}>Description</label>
                  <textarea
                    id={`workDesc-${work.id}`}
                    className="form-textarea"
                    rows={3}
                    placeholder="• Led development of...&#10;• Collaborated with...&#10;• Improved performance by..."
                    value={work.description}
                    onChange={e => updateWork(work.id, 'description', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            id="add-work-btn"
            onClick={addWork}
            className="btn-add w-full justify-center"
            aria-label="Add work experience entry"
          >
            <Plus className="w-4 h-4" />
            Add Work Experience
          </button>
        </div>
      </section>

      {/* ── Education ─────────────────────────────────────────────────────── */}
      <section className="section-divider">
        <h3 className="section-title">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          Education
        </h3>

        <div className="space-y-3">
          {data.education.map((edu, idx) => (
            <div key={edu.id} className="entry-card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/50 text-xs font-medium uppercase tracking-wider">
                  Entry {idx + 1}
                </span>
                <button
                  onClick={() => removeEducation(edu.id)}
                  className="btn-danger flex items-center gap-1"
                  aria-label={`Remove education entry ${idx + 1}`}
                  id={`remove-edu-${edu.id}`}
                >
                  <Trash2 className="w-3 h-3" />
                  Remove
                </button>
              </div>

              <div className="space-y-2.5">
                <div>
                  <label className="form-label" htmlFor={`degree-${edu.id}`}>Degree / Qualification</label>
                  <input
                    id={`degree-${edu.id}`}
                    type="text"
                    className="form-input"
                    placeholder="B.Sc. Computer Science"
                    value={edu.degree}
                    onChange={e => updateEducation(edu.id, 'degree', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="form-label" htmlFor={`institution-${edu.id}`}>Institution</label>
                    <input
                      id={`institution-${edu.id}`}
                      type="text"
                      className="form-input"
                      placeholder="MIT"
                      value={edu.institution}
                      onChange={e => updateEducation(edu.id, 'institution', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor={`year-${edu.id}`}>Year</label>
                    <input
                      id={`year-${edu.id}`}
                      type="text"
                      className="form-input"
                      placeholder="2020"
                      value={edu.year}
                      onChange={e => updateEducation(edu.id, 'year', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            id="add-edu-btn"
            onClick={addEducation}
            className="btn-add w-full justify-center"
            aria-label="Add education entry"
          >
            <Plus className="w-4 h-4" />
            Add Education
          </button>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────────────────── */}
      <section className="section-divider">
        <h3 className="section-title">
          <Wrench className="w-4 h-4 text-pink-400" />
          Skills
        </h3>
        <div>
          <label className="form-label" htmlFor="skills">Skills (comma-separated)</label>
          <textarea
            id="skills"
            className="form-textarea"
            rows={3}
            placeholder="React, TypeScript, Node.js, Figma, SQL, Python..."
            value={data.skills}
            onChange={e => handleField('skills', e.target.value)}
            aria-label="Skills, comma-separated"
          />
          {data.skills && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {data.skills.split(',').map((skill, i) => {
                const s = skill.trim()
                return s ? (
                  <span
                    key={i}
                    className="bg-violet-500/20 text-violet-300 text-xs px-2.5 py-1 rounded-full border border-violet-500/30"
                  >
                    {s}
                  </span>
                ) : null
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
