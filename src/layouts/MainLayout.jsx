import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <div className="app-bg">
      <Header />
      <main className="app-content">{children}</main>
    </div>
  );
}
