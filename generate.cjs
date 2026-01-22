const fs = require("fs");

const projects = [];

for (let i = 1; i <= 500; i++) {
  projects.push({
    id: i,
    name: `Project ${i}`,
    lat: +(20 + Math.random() * 10).toFixed(4),
    lng: +(70 + Math.random() * 10).toFixed(4),
    status: i % 2 === 0 ? "Active" : "Inactive",
    updatedAt: `2024-04-${(i % 28) + 1}`
  });
}

fs.writeFileSync(
  "db.json",
  JSON.stringify({ projects }, null, 2)
);

console.log("✅ 500 fake projects created");
