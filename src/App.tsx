import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

const WhatWeBuild = lazy(() => import('./pages/WhatWeBuild'))
const Restaurants = lazy(() => import('./pages/whatwebuild/Restaurants'))
const SpaWellness = lazy(() => import('./pages/whatwebuild/SpaWellness'))
const Hotels = lazy(() => import('./pages/whatwebuild/Hotels'))
const Creators = lazy(() => import('./pages/whatwebuild/Creators'))
const TradesServices = lazy(() => import('./pages/whatwebuild/TradesServices'))

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
            path="/whatwebuild/creators"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <Creators />
              </Suspense>
            }
          />
          <Route
            path="/whatwebuild/trades-services"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <TradesServices />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
