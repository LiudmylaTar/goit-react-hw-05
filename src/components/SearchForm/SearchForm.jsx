import css from "./SearchForm.module.css";
import { FiSearch } from "react-icons/fi";
const SearchForm = ({ onSubmit, onChange, query }) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <input
        className={css.input}
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search film"
        value={query}
        onChange={onChange}
      />
      <button className={css.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
};

export default SearchForm;
