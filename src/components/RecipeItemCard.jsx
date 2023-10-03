import { AspectRatio, Center, Flex, Heading, Image } from "@chakra-ui/react";
import { TagList } from "./ui/TagList";

export const RecipeItemCard = ({ item, clickFn, ...props }) => {
  const filteredHealthLabels = item.recipe.healthLabels.filter(
    (healthLabel) =>
      healthLabel.toLowerCase() === "vegan" ||
      healthLabel.toLowerCase() === "vegetarian"
  );

  const recipeTags =
    item.recipe.dietLabels.length > 0 || item.recipe.cautions.length > 0;

  return (
    <Flex {...props} onClick={() => clickFn(item)} cursor="pointer">
      <AspectRatio maxWidth="500px" ratio={4 / 3}>
        <Image
          borderRadius="md"
          objectFit="cover"
          h="10rem"
          w="md"
          src={item.recipe.image}
          alt={item.recipe.label}
        />
      </AspectRatio>

      <Flex h="60px" justify="space-evenly" align="center" gap="0.5rem">
        <TagList labels={item.recipe.mealType} size="sm" colorScheme="orange" />
        <TagList labels={item.recipe.dishType} size="sm" colorScheme="pink" />
      </Flex>

      <Center h="40px">
        <Heading fontSize="md" textAlign="center">
          {item.recipe.label}
        </Heading>
      </Center>

      <Flex wrap="wrap" h="60px">
        {filteredHealthLabels.length > 0 && (
          <Flex w="100%" justify="space-evenly" align="center">
            <TagList
              labels={filteredHealthLabels}
              size="sm"
              colorScheme="green"
            />
          </Flex>
        )}

        {recipeTags && (
          <Flex
            w="100%"
            justify="space-evenly"
            align="center"
            wrap="wrap"
            gap="5px"
          >
            {item.recipe.dietLabels.lenght > 0 && (
              <Flex justify="space-evenly" wrap="wrap" gap="5px">
                <TagList
                  labels={item.recipe.dietLabels}
                  colorScheme="blue"
                  size="sm"
                />
              </Flex>
            )}

            {item.recipe.cautions.lenght > 0 && (
              <Flex justify="space-evenly" wrap="wrap" gap="5px">
                <TagList
                  labels={item.recipe.cautions}
                  colorScheme="red"
                  size="sm"
                />
              </Flex>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
