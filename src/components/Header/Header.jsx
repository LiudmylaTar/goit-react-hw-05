import css from "./Header.module.css";

import Navigation from "../Navigation/Navigation";

export default function AppHeader() {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
}
