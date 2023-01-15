import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import Login from "../pages/login";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <>
      {session ? (
        <>
          <Navbar />
          <main>{children}</main>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
