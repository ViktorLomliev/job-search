import { render, screen } from '@testing-library/vue'

import TheSubNav from '@/components/navigation/TheSubNav.vue'

describe('TheSubNav', () => {
  const renderTheSubNav = (routeName) => {
    render(TheSubNav, {
      global: {
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
  }
  describe('when user is on jobs page', () => {
    it('displays job count', () => {
      const routeName = 'JobResults'

      renderTheSubNav(routeName)

      const jobCount = screen.getByText('1653')

      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('when user is not on jobs page', () => {
    it('does not display job count', () => {
      const routeName = 'Home'

      renderTheSubNav(routeName)
      const jobCount = screen.queryByText('1653')

      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
