export interface WorkExperience {
  id: string
  jobTitle: string
  company: string
  startDate: string
  endDate: string
  description: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  year: string
}

export interface ResumeData {
  fullName: string
  email: string
  phone: string
  linkedin: string
  summary: string
  workExperience: WorkExperience[]
  education: Education[]
  skills: string
}
