import Head from "next/head";
import Footer from "../layout/footer/Footer";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
      </Head>
      <CustomComponents />
      <Footer />
    </div>
  );
}
