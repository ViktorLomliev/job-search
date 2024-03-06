import { render, screen } from '@testing-library/vue'
import axios from 'axios'
import JobListings from '@/components/JobResults/JobListings.vue'
import { RouterLinkStub } from '@vue/test-utils'

vi.mock('axios')

describe('JobListings', () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: '5',
      ...queryParams
    }
  })
  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
        mocks: {
          $route
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
  }
  it('fetches jobs', () => {
    axios.get.mockResolvedValue({ data: [] })
    const $route = createRoute()
    renderJobListings($route)
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/jobs')
  })
  it('displays maximum of 10 jobs', async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })
    const $route = createRoute({ page: '1' })
    renderJobListings($route)
    const jobListings = await screen.findAllByRole('listitem')
    expect(jobListings).toHaveLength(10)
  })
})
