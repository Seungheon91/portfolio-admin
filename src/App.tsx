import './App.css'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <h1>메인 콘텐츠</h1>
      </main>
    </div>
  )
}

export default App
