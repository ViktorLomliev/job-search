import { nextTick } from 'vue'
import { render, screen } from '@testing-library/vue'

import TheHeadLine from '@/components/job_search/TheHeadline.vue'
import { beforeEach } from 'vitest'

describe('TheHeadline', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('displays introductory actoin verb', () => {
    render(TheHeadLine)

    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i
    })
    expect(actionPhrase).toBeInTheDocument()
  })
  it('changes action verb at a consistent interval', () => {
    const mock = vi.fn()
    vi.stubGlobal('setInterval', mock)
    render(TheHeadLine)
    expect(mock).toHaveBeenCalled()
  })
  it('swaps action verb after interval', async () => {
    render(TheHeadLine)
    vi.advanceTimersToNextTimer()

    await nextTick()
    const actionPhrase = screen.getByRole('heading', {
      name: /create for everyone/i
    })

    expect(actionPhrase).toBeInTheDocument()
  })
  it('removes interval when component disappears', () => {
    const clearInterval = vi.fn()
    vi.stubGlobal('clearInterval', clearInterval)

    const { unmount } = render(TheHeadLine)
    unmount()
    expect(clearInterval).toHaveBeenCalled()
    vi.unstubAllGlobals()
  })
})
