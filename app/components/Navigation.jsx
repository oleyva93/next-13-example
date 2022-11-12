// import "../public/globals.css";
import Link from "next/link";
import styles from "./Navigation.module.css";

const link = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
  { label: "Posts", route: "/posts" },
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {link.map(({ label, route }) => (
            <li key={label}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
