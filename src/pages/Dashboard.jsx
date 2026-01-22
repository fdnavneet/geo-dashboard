import { useEffect, useMemo, useState } from "react";
import { fetchProjects } from "../api/projectApi";
import Table from "../components/Table";
import Pagination from "../components/Pegination";
import MapView from "../components/MapView";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const text = searchText.trim().toLowerCase();

    
    let status = "";

    if (text.length >= 2 && "active".startsWith(text)) {
      status = "active";
    }

    if (text.length >= 2 && "inactive".startsWith(text)) {
      status = "inactive";
    }

    const PAGE_SIZE = 20;
    fetchProjects(page, PAGE_SIZE, status).then(setProjects);
  }, [page, searchText]);

  const filteredProjects = useMemo(() => {
    const text = searchText.trim().toLowerCase();

    if (!text) return projects;

    if (
      (text.length >= 2 && "active".startsWith(text)) ||
      (text.length >= 2 && "inactive".startsWith(text))
    ) {
      return projects; 
    }

    return projects.filter((item) => item.name.toLowerCase().includes(text));
  }, [projects, searchText]);

  const sortedProjects = useMemo(() => {
    if (!sortBy) return filteredProjects;

    const sorted = [...filteredProjects];

    if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "status") {
      sorted.sort((a, b) => a.status.localeCompare(b.status));
    }

    if (sortBy === "date") {
      sorted.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }

    return sorted;
  }, [filteredProjects, sortBy]);

  return (
    <div className="flex h-screen  overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
  
  <div className="w-1/2 p-6 border-r rounded-2xl shadow-2xl border-white/10 backdrop-blur-md bg-white/5">
    
    <h1 className="text-2xl font-semibold mb-4 tracking-wide">
      Geo  Dashboard
    </h1>

    <input
      type="text"
      placeholder="Search (active, inactive, solar...)"
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
        setPage(1);
      }}
      className="
        w-full mb-4 px-4 py-3 rounded-xl
        bg-white/10 border border-white/20
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition-all
      "
    />

    <div className="flex gap-2 mb-4">
      {[
        { key: "name", label: "Name" },
        { key: "status", label: "Status" },
        { key: "date", label: "Date" },
      ].map((btn) => (
        <button
          key={btn.key}
          onClick={() => setSortBy(btn.key)}
          className={`
            px-4 py-2 rounded-lg text-sm
            transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer
            ${
              sortBy === btn.key
                ? "bg-blue-600 scale-105"
                : "bg-white/10 hover:bg-white/20"
            }
          `}
        >
          Sort by {btn.label}
        </button>
      ))}
    </div>

    <div className="max-h-[65vh] overflow-auto rounded-xl">
      <Table
        data={sortedProjects}
        selected={selected}
        onSelect={setSelected}
      />
    </div>

    <Pagination
      page={page}
      hasNext={projects.length === 20}
      onPrev={() => setPage((p) => Math.max(p - 1, 1))}
      onNext={() => setPage((p) => p + 1)}
    />
  </div>

  <div className="w-1/2 h-screen">
    <MapView
      data={sortedProjects}
      selected={selected}
      onSelect={setSelected}
    />
  </div>
</div>

  );
}
