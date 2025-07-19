import Nav from "../components/Sidebar"
import Header from "../components/Header"
import { Outlet, useSearchParams } from "react-router-dom"

const Layout = () => {

  const [searchParams] = useSearchParams();

  const page = searchParams.get('page')
  const tab = searchParams.get('tab')



  return (
    <div className="relative flex">
        <section className="fixed w-1/9">
            <Nav />
        </section>
        <section className="w-8/9 absolute left-1/9">
            <Header />
            <main className="">
                <Outlet />
            </main>
        </section>
    </div>
  )
}

export default Layout