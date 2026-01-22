

export async function fetchProjects(page, limit, status = "") {
  const start = (page - 1) * limit;

  let url = `http://localhost:5000/projects?_start=${start}&_limit=${limit}&_sort=id&_order=asc`;

  if (status) {
    url += `&status=${status === "active" ? "Active" : "Inactive"}`;
  }

  const res = await fetch(url);
  return res.json();
}



