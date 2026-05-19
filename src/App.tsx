import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

const FAQPage = lazy(() => import('./pages/FAQ'))

function PageSkeleton() {
  return <div aria-hidden className="min-h-[80vh] w-full" />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <FAQPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
