import DashboardLayout from "@/components/sharedComponents/DashboardLayout";
import MainLayout from "@/components/sharedComponents/MainLayout";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.startsWith("/dashboard")) {
    return (
      <>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </>
    );
  } else {
    return (
      <>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </>
    );
  }
}
