// src/layouts/AppFrame.tsx
import { Outlet } from "react-router-dom";

export default function AppFrame() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <header style={{ height: 56, flexShrink: 0, borderBottom: "1px solid #eee", background:"#fff" }} />
      {/* 핵심: main이 남은 높이를 갖도록 */}
      <main style={{ flex: 1, minHeight: 0 /* 자식이 overflow 가능 */ }}>
        <Outlet />
      </main>
    </div>
  );
}

