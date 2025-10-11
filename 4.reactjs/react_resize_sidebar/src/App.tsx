import React from "react";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex h-full gap-5 relative">
      <Sidebar />
      <main className="flex-1">
        <h2>Notion</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          quaerat hic ratione assumenda ea laboriosam! Dolor sint dolores atque,
          sequi quod quam! Natus minus laborum obcaecati ea perferendis sequi
          corrupti!
        </p>
      </main>
    </div>
  );
}
