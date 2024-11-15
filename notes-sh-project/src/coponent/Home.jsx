import React, { useState } from "react";
import { useSearchParams } from "react-router-dom"; // Ensure you have this import if using react-router-dom

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  //const [searchParams, setSearchParams] = useState("");
  const [searchParams] = useSearchParams(); //useSearchParams hook
  const pastId = searchParams.get("pasteId");
  return (
    <div className="flex flex-row gap-7">
      <input
        className="p-2 rounded-2xl mt-2"
        type="text"
        placeholder="Enter your paste Name!"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="p-2 rounded-2xl mt-2 text-white">
        {pastId ? "Update" : "Create"}
      </button>
    </div>
  );
};

export default Home;
