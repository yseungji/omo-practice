import { Routes, Route } from 'react-router-dom'
import * as Sentry from '@sentry/react'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>탐색 페이지</div>} />
      <Route path="/home" element={<div>내 홈 페이지</div>} />
    </Routes>
  )
}

export default Sentry.withErrorBoundary(App, {
  fallback: <div>오류가 발생했습니다. 잠시 후 다시 시도해주세요.</div>,
})