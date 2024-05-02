import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/common/Layout"
import { Layout2 } from "./components/common/Layout2"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Courses } from "./pages/Program"
import { Offices } from "./pages/Offices"
import { Partners } from "./pages/Partners"
import { Overview } from "./pages/Vocational Education/Overview"
import { AboutJRV } from "./pages/Vocational Education/AboutJRV"
import { Program } from "./pages/Vocational Education/Program"
import { CampusLife } from "./pages/Vocational Education/CampusLife"
import { Apply } from "./pages/Vocational Education/Apply"
import { TCenter } from "./pages/TestCenter"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/about'
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path='/courses'
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path='/partners'
            element={
              <Layout>
                <Partners />
              </Layout>
            }
          />
          <Route
            path='/offices'
            element={
              <Layout>
                <Offices />
              </Layout>
            }
          />
          <Route
            path='/vocationaleducation/*'
            element={
              <Layout2>
                <Routes>
                  <Route path='/overview' element={<Overview />} />
                  <Route path='/about' element={<AboutJRV />} />
                  <Route path='/program' element={<Program />} />
                  <Route path='/campuslife' element={<CampusLife />} />
                  <Route path='/apply' element={<Apply />} />
                </Routes>
              </Layout2>
            }
          />
          <Route
            path='/testcenter'
            element={
              <Layout>
                <TCenter />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
