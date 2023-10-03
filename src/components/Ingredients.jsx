import { ListItem, UnorderedList } from "@chakra-ui/react";

export const Ingredients = ({ ingredientLines }) => {
  return (
    <UnorderedList fontSize={["xs", "sm", "md"]} ml="1.5rem">
      {ingredientLines.map((ingredientLines) => (
        <ListItem key={ingredientLines}>{ingredientLines}</ListItem>
      ))}
    </UnorderedList>
  );
};
