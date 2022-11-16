interface DeleteModalProps {
  type: 'Activity' | 'Todo';
  itemName: string;
  show: boolean;
  onDelete: () => void;
  onCancel: () => void;
}

export default function DeleteModal({
  type,
  itemName,
  show,
  onDelete,
  onCancel,
}: DeleteModalProps) {
  const text =
    type === 'Activity' ? (
      <p className="text-sm md:text-lg text-center">
        Apakah anda yakin menghapus activity
        <span className="font-bold">{` "${itemName}"`}</span>?
      </p>
    ) : (
      <p className="text-sm md:text-lg text-center">
        Apakah anda yakin menghapus list item
        <span className="font-bold">{` "${itemName}"`}</span>?
      </p>
    );

  return show ? (
    <div onClick={onCancel} className="fixed inset-0 backdrop-blur-sm flex justify-center items-center p-4 z-20">
      <div data-cy='modal-delete' className="w-full max-w-xs md:max-w-lg p-9 md:p-11 flex flex-col gap-10 md:gap-12 shadow-[0_6px_10px_0px_rgba(0,0,0,0.15)] bg-base-100 rounded-xl">
        <div data-cy='modal-delete-icon' className="text-error flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 md:w-16 md:h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <div data-cy='modal-delete-title'>{text}</div>
        <div className="flex gap-2 md:gap-4 justify-center">
          <button
            data-cy='modal-delete-cancel-button'
            onClick={onCancel}
            className="btn basis-1/2 max-w-[7rem] md:max-w-[10rem] h-12 min-h-12 md:h-14 md:min-h-[3.5rem] md:px-5 rounded-full capitalize"
          >
            Batal
          </button>
          <button
            data-cy='modal-delete-confirm-button'
            onClick={onDelete}
            className="btn basis-1/2 max-w-[7rem] md:max-w-[10rem] h-12 min-h-12 md:h-14 md:min-h-[3.5rem] md:px-5 btn-error bg-error/90 hover:bg-error rounded-full capitalize"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
