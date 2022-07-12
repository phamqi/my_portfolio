import { useEffect, useState } from "react";

export const useResize = () => {
  const data = "alo alo, alo. blo blo . clo clo";
  const results = data.replaceAll(".", ".<br>");

  return { results };
};
