import useUpdateLogger from "@/components/hooks/useUpdateLogger";
import React, { useState } from "react";

export default function Index() {
  const [value, setValue] = useState("");
  //pass value to custom hook useUpdateLogger
  useUpdateLogger(value);
  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
