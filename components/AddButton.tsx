interface AddButtonProps {
  onClick?: () => void;
  dataCy: string;
}

export default function AddButton({ onClick, dataCy }: AddButtonProps) {
  return (
    <button
      data-cy={dataCy}
      onClick={onClick}
      className="btn h-9 min-h-[2.25rem] md:h-12 md:min-h-12 lg:h-14 lg:min-h-[3.5rem] lg:px-5 btn-primary rounded-full gap-1 capitalize"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="w-4 h-4 md:w-5 md:h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      Tambah
    </button>
  );
}
