import React, { useState } from "react";
import { useSearchParams } from "react-router-dom"; // Ensure you have this import if using react-router-dom

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  //const [searchParams, setSearchParams] = useState("");
  const [searchParams] = useSearchParams(); //useSearchParams hook
  const pastId = searchParams.get("pasteId");
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-2 rounded-2xl mt-2 w-[60%] pl-4"
          type="text"
          placeholder="Enter your paste Name!"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="p-1 rounded-2xl mt-2 text-white">
          {pastId ? "Update" : "Create"}
        </button>
      </div>
      <div className="mt-8">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] pl-4"
          value={value}
          placeholder="Enter content"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
