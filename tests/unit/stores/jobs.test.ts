import type { Mock } from 'vitest'
import axios from 'axios'
import { createPinia, setActivePinia } from 'pinia'
import type { Job } from '@/api/types'
import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'

vi.mock('axios')
const axiosGetMock = axios.get as Mock

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('stores job listings', () => {
    const store = useJobsStore()
    expect(store.jobs).toEqual([])
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('FETCH_JOBS', () => {
    it('makes API request and stores received jobs', async () => {
      axiosGetMock.mockResolvedValue({ data: ['Job 1', 'Job 2'] })
      const store = useJobsStore()
      await store.FETCH_JOBS()
      expect(store.jobs).toEqual(['Job 1', 'Job 2'])
    })
  })
})

describe('getter', () => {
  const createJob = (job: Partial<Job> = {}): Job => ({
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

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('UNIQUE_ORGANIZATIONS', () => {
    it('finds unique organizations from list of jobs', () => {
      const store = useJobsStore()
      store.jobs = [
        createJob({ organization: 'Google' }),
        createJob({ organization: 'Amazon' }),
        createJob({ organization: 'Google' })
      ]

      const result = store.UNIQUE_ORGANIZATIONS
      expect(result).toEqual(new Set(['Google', 'Amazon']))
    })
  })
  describe('UNIQUE_JOB_TYPES', () => {
    it('finds unique job types from list of jobs', () => {
      const store = useJobsStore()
      store.jobs = [
        createJob({ jobType: 'Full-time' }),
        createJob({ jobType: 'Temporary' }),
        createJob({ jobType: 'Full-time' })
      ]

      const result = store.UNIQUE_JOB_TYPES
      expect(result).toEqual(new Set(['Full-time', 'Temporary']))
    })
  })
  describe('INCLUDE_JOB_BY_ORGANIZATION', () => {
    describe('when the user has not selected any organization', () => {
      it('it includes job', () => {
        const userStore = useUserStore()
        userStore.selectedOrganizations = []
        const store = useJobsStore()
        const job = createJob({ organization: 'Google' })

        const result = store.INCLUDE_JOB_BY_ORGANIZATION(job)

        expect(result).toBe(true)
      })
    })
    it('identifies if job is associated with given organizations', () => {
      const userStore = useUserStore()
      userStore.selectedOrganizations = ['Google', 'Microsoft']
      const store = useJobsStore()
      const job = createJob({ organization: 'Google' })

      const result = store.INCLUDE_JOB_BY_ORGANIZATION(job)

      expect(result).toBe(true)
    })
  })
  describe('INCLUDE_JOB_BY_JOB_TYPE', () => {
    describe('when the user has not selected any job types', () => {
      it('it includes job', () => {
        const userStore = useUserStore()
        userStore.selectedJobTypes = []
        const store = useJobsStore()
        const job = createJob({ jobType: 'Full-time' })

        const result = store.INCLUDE_JOB_BY_JOB_TYPE(job)

        expect(result).toBe(true)
      })
    })
    it('identifies if job is associated with given job types', () => {
      const userStore = useUserStore()
      userStore.selectedJobTypes = ['Full-time', 'Part-time']
      const store = useJobsStore()
      const job = createJob({ jobType: 'Part-time' })

      const result = store.INCLUDE_JOB_BY_JOB_TYPE(job)

      expect(result).toBe(true)
    })
  })
})
