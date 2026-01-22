export default function Table({ data, selected, onSelect }) {
  return (
    <table className="w-full  text-sm">
      <thead className="sticky top-0 bg-slate-900/80 backdrop-blur">
        <tr className="text-left text-gray-300">
          <th className="p-3">Name</th>
          <th className="p-3">Lat</th>
          <th className="p-3">Lng</th>
          <th className="p-3">Status</th>
          <th className="p-3">Updated</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            onClick={() => onSelect(item)}
            className={`
              cursor-pointer transition-all duration-200
              ${
                selected?.id === item.id
                  ? "bg-blue-500/20 scale-[1.01]"
                  : "hover:bg-white/10"
              }
            `}
          >
            <td className="p-3">{item.name}</td>
            <td className="p-3">{item.lat}</td>
            <td className="p-3">{item.lng}</td>
            <td
              className={`p-3 font-medium ${
                item.status === "Active"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {item.status}
            </td>
            <td className="p-3">{item.updatedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
