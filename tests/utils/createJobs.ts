import type { Job } from '@/api/types'

export const createJob = (job: Partial<Job> = {}): Job => ({
  id: 2,
  title: 'Java Coder',
  organization: 'VueTube',
  degree: "Bachelor's",
  jobType: 'Part-time',
  locations: ['Buenos Aires', 'Oslo'],
  minimumQualifications: [
    'Redefine ubiquitous supply-chains, whiteboard 24/365 channels, and repurpose dynamic action-items'
  ],
  preferredQualifications: [
    'Synergize real-time infrastructures, matrix e-business e-tailers, and redefine customized action-items'
  ],
  description: [
    'Form wind put day inside. Say stand apply full boy speak. Memory remain room finish phone. Nation movement place.'
  ],
  dateAdded: '2021-06-19',
  ...job
})
