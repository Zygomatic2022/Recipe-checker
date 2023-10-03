import { Flex } from "@chakra-ui/react";
import { RecipeItemCard } from "./RecipeItemCard";

export const RecipeList = ({ clickFn, recipes }) => {
  return (
    <Flex
      flexDir={["column", "row"]}
      justify="center"
      alignItems="center"
      wrap={["nowrap", "wrap"]}
      gap="2rem"
      w="100%"
    >
      {recipes.map((item) => (
        <RecipeItemCard
          clickFn={clickFn}
          key={item.recipe.label}
          item={item}
          direction="column"
          w={["100%", "45%", "30%", "20%", "16%"]}
          bg="purple.200"
          borderRadius="20px"
          overflow="hidden"
        />
      ))}
    </Flex>
  );
};
