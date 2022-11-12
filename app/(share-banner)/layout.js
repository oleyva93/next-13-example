export default function RootLayout({ children, ...others }) {
  return (
    <div>
      <p>Home &bull; Post</p>
      {children}
    </div>
  );
}
