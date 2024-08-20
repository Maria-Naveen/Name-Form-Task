const NameForm = ({ name, onChange }) => {
  return (
    <div className="w-64 h-32 py-12 overflow-hidden text-center m-4 border border-white">
      <input
        type="text"
        className="text-slate-900 text-center"
        onChange={onChange}
      />
      <p>Name: {name}</p>
    </div>
  );
};

export default NameForm;
