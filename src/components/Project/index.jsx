import ProjectCSS from "./index.module.scss";
import { AiOutlineSearch, GoPrimitiveDot } from "react-icons/all";

export default function Project() {
  return (
    <div className={ProjectCSS._project_container}>
      <div className={ProjectCSS._wrap_project}>
        <div className={ProjectCSS._title}>Project List</div>
        <div className={ProjectCSS._wrap_search}>
          <div className={ProjectCSS._search_icon}>
            <AiOutlineSearch size={20} color="#b4b4b4" />
          </div>
          <div className={ProjectCSS._input}>
            <input type="text" placeholder="Search" autoComplete="off" />
          </div>
        </div>
        <div className={ProjectCSS._wrap_table}>
          <table className={ProjectCSS._wrap_project_table}>
            <thead className={ProjectCSS._wrap_table_head}>
              <tr>
                <th
                  className={`${ProjectCSS._wrap_head} ${ProjectCSS._min_table_width}`}
                >
                  Title
                </th>
                <th className={ProjectCSS._wrap_head}>Status</th>
                <th className={ProjectCSS._wrap_head}>author</th>
                <th className={ProjectCSS._wrap_head}>Tag</th>
                <th className={ProjectCSS._wrap_head}>Tasks</th>
                <th className={ProjectCSS._wrap_head}>Date</th>
              </tr>
            </thead>
            <tbody className={ProjectCSS._wrap_table_data}>
              <tr className={ProjectCSS._wrap_tr}>
                <td className={ProjectCSS._wrap_data}>
                  <div className={ProjectCSS._wrap_title}>
                    Optimize Bot Commands
                  </div>
                </td>
                <td className={ProjectCSS._wrap_data}>
                  <div className={ProjectCSS._status}>
                    <GoPrimitiveDot color="#9ADD6D" size={12} />
                    <span>Complete</span>
                  </div>
                </td>
                <td className={ProjectCSS._wrap_data}>
                  <div className={ProjectCSS._wrap_author}>
                    James Robert Aldave Salud
                  </div>
                </td>
                <td className={ProjectCSS._wrap_data}>
                  <div className={ProjectCSS._tag}>Discord Bot</div>
                </td>
                <td className={ProjectCSS._wrap_data}>183</td>
                <td className={ProjectCSS._wrap_data}>Oct 11, 2022</td>
              </tr>
              <tr className={ProjectCSS._wrap_tr}>
                <td className={ProjectCSS._wrap_data}>
                  <div className={ProjectCSS._wrap_title}>
                    NFT Crazy Antonio Assets
                  </div>
                </td>
                <td className={ProjectCSS._wrap_data}>
                  <div className={ProjectCSS._status}>
                    <GoPrimitiveDot color="#51ACFA" size={12} />
                    <span>Progress</span>
                  </div>
                </td>
                <td className={ProjectCSS._wrap_data}>
                  <div className={ProjectCSS._wrap_author}>
                    Lance Ivan Salud
                  </div>
                </td>
                <td className={ProjectCSS._wrap_data}>
                  <div className={ProjectCSS._tag}>NFT</div>
                </td>
                <td className={ProjectCSS._wrap_data}>351</td>
                <td className={ProjectCSS._wrap_data}>Oct 11, 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
