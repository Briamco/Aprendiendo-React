import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Router } from "./components/Router";
import { Route } from "./components/Route";
import { getCurrentPath } from "./utils";
import { Link } from "./components/Link";

vi.mock('./utils', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that match', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      { 
        path: '/', 
        Component: () => <h1>Home</h1> 
      },
      { 
        path: '/about', 
        Component: () => <h1>About</h1> 
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using link', async () => {
    getCurrentPath.mockReturnValueOnce('/')
    
    render(
      <Router>
        <Route path="/" Component={() => (
          <>
            <h1>Home</h1>
            <Link to="/about">About us</Link>
          </>
          )}
        />
        <Route path="/about" Component={() => <h1>About</h1>} />
      </Router>
    )

    const anchor = screen.getByText(/About us/)
    fireEvent.click(anchor)
    
    const aboutTitle = await screen.findByText('About')
    expect(aboutTitle).toBeTruthy()
  })
})