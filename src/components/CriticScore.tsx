import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  // concise way of appling if-else via ternary conditional expression
  const color = score > 90 ? "green" : score > 80 ? "yellow" : "";

  return (
    <Badge colorScheme={color} variant="solid">
      {score}
    </Badge>
  );
  /* Here, color attribute only changing the foreground 
  whereas colorscheme changes foreground background boarder etc which are related */
};

export default CriticScore;
