import css from "./MoviesPage.module.css";
const MoviesPage = () => {
  return (
    <form className={css.form}>
      <input
        className={css.input}
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default MoviesPage;
