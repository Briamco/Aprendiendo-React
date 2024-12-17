import { lazy, Suspense } from "react";

import Page404 from "./pages/404";
import SearchPage from "./pages/Search";

import { Router } from "./components/Router";
import { Route } from "./components/Route";

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))

const appRoutes = [
  {
    path: "/:lang/about",
    Component: AboutPage
  },
  {
    path: "/search/:query",
    Component: SearchPage
  }
]

function App() {
  
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
