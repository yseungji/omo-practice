import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>탐색 페이지</div>} />
      <Route path="/home" element={<div>내 홈 페이지</div>} />
    </Routes>
  )
}

export default App