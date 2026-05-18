import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

const WhatWeBuild = lazy(() => import('./pages/WhatWeBuild'))
const FAQPage = lazy(() => import('./pages/FAQ'))
const Restaurants = lazy(() => import('./pages/whatwebuild/Restaurants'))
const SpaWellness = lazy(() => import('./pages/whatwebuild/SpaWellness'))
const Hotels = lazy(() => import('./pages/whatwebuild/Hotels'))
const Entrepreneurs = lazy(() => import('./pages/whatwebuild/Entrepreneurs'))
const AgencyServices = lazy(() => import('./pages/whatwebuild/AgencyServices'))

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
            path="/whatwebuild"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <WhatWeBuild />
              </Suspense>
            }
          />
          <Route
            path="/faq"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <FAQPage />
              </Suspense>
            }
          />
          <Route
            path="/whatwebuild/restaurants"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <Restaurants />
              </Suspense>
            }
          />
          <Route
            path="/whatwebuild/spa-wellness"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <SpaWellness />
              </Suspense>
            }
          />
          <Route
            path="/whatwebuild/hotels"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <Hotels />
              </Suspense>
            }
          />
          <Route
            path="/whatwebuild/entrepreneurs"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <Entrepreneurs />
              </Suspense>
            }
          />
          <Route
            path="/whatwebuild/agency-services"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <AgencyServices />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
