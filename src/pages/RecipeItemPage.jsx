import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { TagList } from "../components/ui/TagList";
import { Ingredients } from "../components/Ingredients";
import { Nutrients } from "../components/Nutrients";

export const RecipeItempage = ({ item }) => {
  return (
    <Flex
      flexDir="column"
      minH="50vh"
      w={["80%", "80%", "80%", "60%"]}
      m="auto"
      overflow="visible"
      bgGradient={[
        "linear(to-tr, pink.300, teal.400)",
        "linear(to-t, purple.200, teal.500)",
        "linear(to-b, purple.500, orange.200)",
      ]}
    >
      <Image
        w="100vw"
        h="40vw"
        objectFit="cover"
        src={item.recipe.image}
        alt={item.recipe.label}
      />

      <Flex flexDir="column" gap="0.5rem" w="100%" p="1.5rem">
        <Flex>
          <TagList
            labels={item.recipe.mealType}
            size={["sm", "md", "lg"]}
            colorScheme="green"
          />
        </Flex>

        <Heading size={["sm", "md", "lg"]} w="100%" color="purple.700">
          {item.recipe.label}
        </Heading>

        <Text fontSize={["xs", "sm", "md"]} mb="0.5rem">
          Total cooking time: {item.recipe.totalTime} minutes <br />
          Servings: {item.recipe.yield}
        </Text>
      </Flex>

      <Flex wrap="wrap" justify="space-between">
        <Flex direction="column" w={["100%", "50%"]} p="0 2rem 2rem">
          <Heading size={["xs", "sm", "md"]} mb="0.5rem" color="purple.900">
            Ingredients:
          </Heading>
          <Ingredients ingredientLines={item.recipe.ingredientLines} />
        </Flex>

        <Flex w={["100%", "50%"]} direction="column" padding="0 2rem 2rem">
          <Heading size={["xs", "sm", "md"]} mb="0.5rem" color="purple.900">
            Health Labels:
          </Heading>

          <Flex direction="row" wrap="wrap" gap="10px">
            <TagList
              labels={item.recipe.healthLabels}
              size={["sm", "sm", "md"]}
              colorScheme="yellow"
            />
          </Flex>
          {item.recipe.dietLabels.length > 0 && (
            <>
              <Heading
                size={["xs", "sm", "md"]}
                mt="1.5rem"
                mb="0.5rem"
                color="purple.900"
              >
                Diet:
              </Heading>
              <Flex direction="row" wrap="wrap" gap="10px">
                <TagList
                  labels={item.recipe.dietLabels}
                  size={["sm", "sm", "md"]}
                  colorScheme="blue"
                />
              </Flex>
            </>
          )}
          {item.recipe.cautions.length > 0 && (
            <>
              <Heading
                size={["xs", "sm", "md"]}
                mt="1.5rem"
                mb="0.5rem"
                color="purple.900"
              >
                Cautions:
              </Heading>
              <Flex direction="row" wrap="wrap" gap="10px">
                <TagList
                  labels={item.recipe.cautions}
                  size={["sm", "sm", "md"]}
                  colorScheme="pink"
                />
              </Flex>
            </>
          )}

          <Heading
            size={["xs", "sm", "md"]}
            mt="1.5rem"
            mb="0.5rem"
            color="purple.900"
          >
            Total nutrients:
          </Heading>

          <Nutrients item={item} />
        </Flex>
      </Flex>
    </Flex>
  );
};
