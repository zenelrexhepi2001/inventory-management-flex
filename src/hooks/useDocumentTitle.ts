import { useState, useLayoutEffect } from "react"

export const useDocumentTitle = (title: string) => {
  const [documentValue, setDocumentValue] = useState<string>(title);

  useLayoutEffect(() => {
    if (documentValue !== undefined) {
      document.title = documentValue;
    }
  }, [documentValue]);

  return [documentValue, setDocumentValue];
}