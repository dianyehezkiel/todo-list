import { ESortType } from '../lib/types';
import { useGlobalState } from '../reducer';
import { setSort } from '../reducer/reducer';

export default function SortButton() {
  const [{ sort }, dispatch] = useGlobalState();

  const SortIcon = (sortType: ESortType) => {
    switch (sortType) {
      case ESortType.NEWEST:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 md:w-5 md:h-5 fill-primary"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
          </svg>
        );
      case ESortType.OLDEST:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 md:w-5 md:h-5 fill-primary"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
          </svg>
        );
      case ESortType.AZ:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 md:w-5 md:h-5 fill-primary"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
            />
            <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
          </svg>
        );
      case ESortType.ZA:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 md:w-5 md:h-5 fill-primary"
            viewBox="0 0 16 16"
          >
            <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z" />
            <path
              fill-rule="evenodd"
              d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"
            />
            <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-4 h-4 md:w-5 md:h-5 fill-primary"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        );
    }
  };

  return (
    <div data-cy='todo-sort-button' className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-sm md:btn-md btn-circle border border-secondary-black text-secondary-black btn-ghost"
      >
        {SortIcon(sort)}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <div onClick={() => dispatch(setSort(ESortType.NEWEST))} className="flex items-center">
            {SortIcon(ESortType.NEWEST)}
            <p className="text-sm">Terbaru</p>
          </div>
        </li>
        <li>
          <div onClick={() => dispatch(setSort(ESortType.OLDEST))} className="flex items-center">
            {SortIcon(ESortType.OLDEST)}
            <p className="text-sm">Terlama</p>
          </div>
        </li>
        <li>
          <div onClick={() => dispatch(setSort(ESortType.AZ))} className="flex items-center">
            {SortIcon(ESortType.AZ)}
            <p className="text-sm">A-Z</p>
          </div>
        </li>
        <li>
          <div onClick={() => dispatch(setSort(ESortType.ZA))} className="flex items-center">
            {SortIcon(ESortType.ZA)}
            <p className="text-sm">Z-A</p>
          </div>
        </li>
        <li>
          <div onClick={() => dispatch(setSort(ESortType.ACTIVE))} className="flex items-center">
            {SortIcon(ESortType.ACTIVE)}
            <p className="text-sm">Belum Selesai</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
