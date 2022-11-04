import "../styles/globals.css"
import { store } from "../store/store"
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/header"
import Footer from "../components/footer"

function MyApp({ Component, pageProps }) {
  return <>
    <ToastContainer position={'bottom-center'} />
    <Provider store={store}>
      {/*<Header />*/}
      <div className={`bg-white h-12`}>

      </div>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  </>
}

export default MyApp
