import { Flex, Text } from "@chakra-ui/react";

export const Nutrients = ({ item }) => {
  const {
    calories,
    totalNutrients: {
      CHOCDF: { quantity: carbs },
      PROCNT: { quantity: protein },
      FAT: { quantity: fat },
      CHOLE: { quantity: cholesterol },
      NA: { quantity: sodium },
    },
  } = item.recipe;

  const fontSize = ["xs", "sm", "md"];

  return (
    <Flex direction="row" wrap="wrap" gap="1rem">
      <Text fontSize={fontSize}>
        {Math.round(calories)}
        <br />
        Calories
      </Text>

      <Text fontSize={fontSize}>
        {" "}
        {Math.round(carbs)} g <br /> Carbs
      </Text>

      <Text fontSize={fontSize}>
        {" "}
        {Math.round(protein)} g <br /> Protein{" "}
      </Text>

      <Text fontSize={fontSize}>
        {" "}
        {Math.round(fat)} g <br /> Fat
      </Text>
      <Text fontSize={fontSize}>
        {" "}
        {Math.round(cholesterol)} mg <br />
        Cholesterol
      </Text>

      <Text fontSize={fontSize}>
        {Math.round(sodium)} mg <br /> Sodium
      </Text>
    </Flex>
  );
};
