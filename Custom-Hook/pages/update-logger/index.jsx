import useUpdateLogger from "@/components/hooks/useUpdateLogger";
import React from "react";

export default function Index() {
  //hook useUpdateLogger
  const [value, setValue] = useUpdateLogger("");

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
