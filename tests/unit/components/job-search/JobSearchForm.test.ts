import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import JobSearchForm from '@/components/job_search/JobSearchForm.vue'
import { useRouter } from 'vue-router'
vi.mock('vue-router')

const useRouterMock = useRouter as Mock

describe('JobSearchForm', () => {
  describe('when user submits form', () => {
    it('directs user to job results page with users search parameters', async () => {
      const push = vi.fn()
      useRouterMock.mockReturnValue({ push })
      render(JobSearchForm, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })
      const roleInput = screen.getByRole('textbox', {
        name: /role/i
      })
      await userEvent.type(roleInput, 'Vue Developer')

      const locationInput = screen.getByRole('textbox', {
        name: /where?/i
      })
      await userEvent.type(locationInput, 'Sofia')

      const submitButton = screen.getByRole('button', {
        name: /search/i
      })
      await userEvent.click(submitButton)

      expect(push).toHaveBeenCalledWith({
        name: 'JobResults',
        query: { role: 'Vue Developer', location: 'Sofia' }
      })
    })
  })
})
