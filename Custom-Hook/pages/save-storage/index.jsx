import UseLocalStorage from "@/components/hooks/useLocalStorage";
import React, { useState } from "react";

export default function Index() {
  const [value, setValue] = UseLocalStorage("lorenzoItem", "");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
