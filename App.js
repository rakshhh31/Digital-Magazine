import { useEffect, useState } from "react";

function App() {
  const [magazines, setMagazines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/magazines")
      .then((res) => res.json())
      .then((data) => setMagazines(data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Digital Magazine</h1>
      <div className="grid grid-cols-3 gap-4">
        {magazines.map((mag) => (
          <div key={mag._id} className="border p-3">
            <img src={mag.coverImage} alt={mag.title} className="w-full h-40 object-cover" />
            <h2 className="text-xl">{mag.title}</h2>
            <p>{mag.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

