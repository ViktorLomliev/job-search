import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import MainNav from '@/components/navigation/MainNav.vue'
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router'

vi.mock('vue-router')
const useRouteMock = useRoute as Mock

describe('MainNav', () => {
  const renderMainNav = () => {
    useRouteMock.mockReturnValue({ name: 'Home' })
    const pinia = createTestingPinia()

    render(MainNav, {
      global: {
        plugins: [pinia],
        stubs: {
          fontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })
  }
  it('displays company name', () => {
    renderMainNav()
    const companyName = screen.getByText('JobHive')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    renderMainNav()
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at JobHive',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav()
      const userStore = useUserStore()

      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })

      userStore.isLoggedIn = true
      await userEvent.click(loginButton)

      profileImage = screen.getByRole('img', {
        name: /user profile image/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})