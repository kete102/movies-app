export const Filters = ({ handleSort }: { handleSort: () => void }) => {
  const handleChecked = () => {
    handleSort()
  }
  return (
    <div className="d-flex flex-column gap-3 p-3 bg-dark rounded">
      <div className="form-check">
        <input
          onChange={handleChecked}
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <label className="form-check-label text-white">
          Filter alphabetically
        </label>
      </div>
    </div>
  )
}
