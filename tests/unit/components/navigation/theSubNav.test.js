import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'
import TheSubNav from '@/components/navigation/TheSubNav.vue'
import { useJobsStore } from '@/stores/jobs'

describe('TheSubNav', () => {
  const renderTheSubNav = (routeName) => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()

    render(TheSubNav, {
      global: {
        plugins: [pinia],
        mocks: {
          $route: {
            name: routeName
          }
        },
        stubs: {
          fontAwesomeIcon: true
        }
      }
    })

    return { jobsStore }
  }
  describe('when user is on jobs page', () => {
    it('displays job count', async () => {
      const routeName = 'JobResults'

      const { jobsStore } = renderTheSubNav(routeName)
      const numberOfJobs = 16
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

      const jobCount = await screen.findByText(numberOfJobs)

      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('when user is not on jobs page', () => {
    it('does not display job count', () => {
      const routeName = 'Home'

      const { jobsStore } = renderTheSubNav(routeName)
      const numberOfJobs = 16
      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

      const jobCount = screen.queryByText(numberOfJobs)
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
