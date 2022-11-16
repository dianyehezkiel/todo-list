import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TitleBar from '../components/TitleBar'
import Head from 'next/head'
import StateProvider from '../reducer'
import { reducer } from '../reducer/reducer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider reducer={reducer}>
      <Head>
        <title>To Do List App</title>
        <meta
          name="description"
          content="To do list app is a web based application to list all your task and group it based on your activity."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleBar />
      <main>
        <Component {...pageProps} />
      </main>
    </StateProvider>
  ) 
}
