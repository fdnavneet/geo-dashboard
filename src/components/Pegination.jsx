export default function Pagination({ page, onPrev, onNext, hasNext, }) {
  return (
    <div className="flex justify-between items-center mt-4">
      {page > 1 ? (
        <button
          onClick={onPrev}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg transition
          ${
            page === 1
              ? "bg-white/5 text-gray-500 cursor-not-allowed"
              : "bg-white/10 hover:bg-white/20"
          }
        `}
        >
          ← Prev
        </button>
      ) : (
        <div />
      )}

      <span className="text-gray-300">Page {page}</span>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`
          px-4 py-2 rounded-lg
          transition-all
          ${
            hasNext
              ? "bg-white/10 hover:bg-white/20 cursor-pointer"
              : "bg-white/5 text-gray-500 cursor-not-allowed"
          }
        `}
      >
        Next →
      </button>
    </div>
  );
}
