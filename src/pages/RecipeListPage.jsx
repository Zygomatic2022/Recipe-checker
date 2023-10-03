import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeList } from "../components/RecipeList";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((hit) => {
    return (
      hit.recipe.label.toLowerCase().includes(searchField.toLowerCase()) ||
      hit.recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(searchField.toLowerCase())
      )
    );
  });

  const handleChange = (event) => setSearchField(event.target.value);

  return (
    <Flex
      direction="column"
      align="center"
      bgGradient={[
        "linear(to-tr, pink.300, teal.400)",
        "linear(to-t, purple.200, teal.500)",
        "linear(to-b, purple.500, orange.200)",
      ]}
      padding="10px 2 rem 2 rem 2 rem"
      minHeight="100vh"
    >
      <TextInput changeFn={handleChange} />;
      <RecipeList clickFn={clickFn} recipes={matchedRecipes} />
    </Flex>
  );
};
