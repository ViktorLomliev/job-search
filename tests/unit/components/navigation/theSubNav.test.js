import { render, screen } from '@testing-library/vue'

import TheSubNav from '@/components/navigation/TheSubNav.vue'

describe('TheSubNav', () => {
  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      render(TheSubNav, {
        global: {
          stubs: {
            fontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: true
          }
        }
      })

      const jobCount = screen.getByText('1653')

      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('when user is not on jobs page', () => {
    it('does not display job count', () => {
      render(TheSubNav, {
        global: {
          stubs: {
            fontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: false
          }
        }
      })
      const jobCount = screen.queryByText('1653')

      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
