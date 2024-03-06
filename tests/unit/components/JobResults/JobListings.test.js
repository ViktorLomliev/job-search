import { render, screen } from '@testing-library/vue'
import axios from 'axios'
import JobListings from '@/components/JobResults/JobListings.vue'
import { RouterLinkStub } from '@vue/test-utils'

vi.mock('axios')

describe('JobListings', () => {
  it('fetches jobs', () => {
    axios.get.mockResolvedValue({ data: [] })
    render(JobListings)
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/jobs')
  })
  it('displayes maximum of 10 jobs', async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })
    render(JobListings, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
    const jobListings = await screen.findAllByRole('listitem')
    expect(jobListings).toHaveLength(10)
  })
})
