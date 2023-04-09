import "./App.scss"

import { Route, Routes } from "react-router-dom"

import Home from "./components/Home/Home"

export default function App() {
  return (
    <Routes>
      <Route path="/index.php" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}