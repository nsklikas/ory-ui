
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { ToastContainer } from "react-toastify"


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <div data-testid="app-react">
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  )
}

export default MyApp