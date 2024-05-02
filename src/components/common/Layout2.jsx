import React from "react"
import { Header } from "./Header"
import { Header2 } from "./Header2"
import { Footer } from "./Footer"

export const Layout2 = ({ children }) => {
  return (
    <>
      <Header />
      <Header2/>
      <main>{children}</main>
      <Footer />
    </>
  )
}
