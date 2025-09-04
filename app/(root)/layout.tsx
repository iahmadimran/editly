import MobileNav from "@/components/shared/MobileNav"
import Sidebar from "@/components/shared/Sidebar"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

const Layout = async ({ children }: { children: ReactNode }) => {
  const user  = await currentUser()

  if(!user) {
    redirect('/sign-in')
  }
  return (
    <main className="root">
      <Sidebar />
      <MobileNav />

      <div className="root-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout
