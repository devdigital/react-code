import React from "react";

export interface CodeProps {
  language?: string;
  code: string;
}

export const Code: React.FC<CodeProps> = ({ language, code }) => (
  <div>
    {language}
    {code}
  </div>
);
