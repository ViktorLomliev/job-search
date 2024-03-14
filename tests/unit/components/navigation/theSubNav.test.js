import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import TheSubNav from '@/components/navigation/TheSubNav.vue'
import { useJobsStore } from '@/stores/jobs'
import { useRoute } from 'vue-router'

vi.mock('vue-router')

describe('TheSubNav', () => {
  const renderTheSubNav = () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()

    render(TheSubNav, {
      global: {
        plugins: [pinia],
        stubs: {
          fontAwesomeIcon: true
        }
      }
    })

    return { jobsStore }
  }
  describe('when user is on jobs page', () => {
    it('displays job count', async () => {
      useRoute.mockReturnValue({ name: 'JobResults' })

      const { jobsStore } = renderTheSubNav()
      const numberOfJobs = 16
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

      const jobCount = await screen.findByText(numberOfJobs)

      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('when user is not on jobs page', () => {
    it('does not display job count', () => {
      useRoute.mockReturnValue({ name: 'JobResults' })

      const { jobsStore } = renderTheSubNav()
      const numberOfJobs = 16
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

      const jobCount = screen.queryByText(numberOfJobs)
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
