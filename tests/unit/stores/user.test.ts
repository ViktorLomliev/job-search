import { createPinia, setActivePinia } from 'pinia'
import { useUserStore } from '@/stores/user'

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('keeps track if user is logged in', () => {
    const store = useUserStore()
    expect(store.isLoggedIn).toBe(false)
  })
  it('stores organizations that the user would like to filter jobs by', () => {
    const store = useUserStore()
    expect(store.selectedOrganizations).toEqual([])
  })
  it('store job types that the user would like to filter jobs by', () => {
    const store = useUserStore()
    expect(store.selectedJobTypes).toEqual([])
  })
  it('store degrees that the user would like to filter jobs by', () => {
    const store = useUserStore()
    expect(store.selectedDegrees).toEqual([])
  })
  it('stores users search tearm for skills and qualifications', () => {
    const store = useUserStore()
    expect(store.skillsSearchTerm).toBe('')
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('LOGIN_USER', () => {
    it('logs the user in', () => {
      const store = useUserStore()
      store.LOGIN_USER()
      expect(store.isLoggedIn).toBe(true)
    })
  })

  describe('ADD_SELECTED_ORGANIZATION', () => {
    it('updates organizations the user has chosen to filter jobs by', () => {
      const store = useUserStore()
      store.ADD_SELECTED_ORGANIZATION(['Org1', 'Org2'])
      expect(store.selectedOrganizations).toEqual(['Org1', 'Org2'])
    })
  })
  describe('ADD_SELECTED_JOB_TYPES', () => {
    it('updates job types the user has chosen to filter jobs by', () => {
      const store = useUserStore()
      store.ADD_SELECTED_JOB_TYPES(['Full-time', 'Part-time'])
      expect(store.selectedJobTypes).toEqual(['Full-time', 'Part-time'])
    })
  })
  describe('ADD_SELECTED_DEGREES', () => {
    it('updates degrees the user has chosen to filter job by', () => {
      const store = useUserStore()
      store.ADD_SELECTED_DEGREES(["Bachelor's", "Master's"])
      expect(store.selectedDegrees).toEqual(["Bachelor's", "Master's"])
    })
  })
  describe('UPDATE_SKILLS_SEARCH_TERM', () => {
    it('receives search term for skills the user has entered', () => {
      const store = useUserStore()
      store.skillsSearchTerm = ''
      store.UPDATE_SKILLS_SEARCH_TERM('Vue')
      expect(store.skillsSearchTerm).toxBe('Vue')
    })
  })
  describe('CLEAR_USER_JOB_FILTER_SELECTION', () => {
    it('removes all job filters that user has chosen', () => {
      const store = useUserStore()
      store.selectedDegrees = ['Random degree']
      store.selectedJobTypes = ['Random job type']
      store.selectedOrganizations = ['Random organization']
      store.skillsSearchTerm = 'Vue Developer'

      store.CLEAR_USER_JOB_FILTER_SELECTION()

      expect(store.selectedDegrees).toEqual([])
      expect(store.selectedJobTypes).toEqual([])
      expect(store.selectedOrganizations).toEqual([])
      expect(store.skillsSearchTerm).toBe('')
    })
  })
})
