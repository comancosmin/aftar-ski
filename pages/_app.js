import "@/styles/globals.css";
import Layout from "../components/layout";

export default function App({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component key={router.pathname} {...pageProps} />
    </Layout>
  );
}
