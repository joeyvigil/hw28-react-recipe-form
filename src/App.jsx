import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* nav start */}
      <nav className='navbar'>
        <div className='container'>
          <h1>React Recipe Book</h1>
        </div>
      </nav>
      {/* nav end */}

      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='my-container'>
              {/* form start */}
              <h2>Submission Form</h2>
              <p>form Here</p>
              {/* form end */}
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='my-container'>
              {/* recipe book start */}
              <h2>Recipe Book</h2>
              <p>Here you will find a collection of my favorite recipes.</p>
              {/* recipe book end */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
