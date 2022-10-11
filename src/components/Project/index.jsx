import ProjectCSS from "./index.module.scss";
import { AiOutlineSearch } from "react-icons/ai";

export default function Project(params) {
  return (
    <div className={ProjectCSS._project_container}>
      <div className={ProjectCSS._wrap_project}>
        <div className={ProjectCSS.title}>Project List</div>
        <div className={ProjectCSS._wrap_search}>
          <div className={ProjectCSS._search_icon}>
            <AiOutlineSearch size={20} color="#b4b4b4" />
          </div>
          <div className={ProjectCSS._input}>
            <input type="text" placeholder="Search" autoComplete="off" />
          </div>
        </div>
      </div>
    </div>
  );
}
