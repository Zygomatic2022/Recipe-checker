import { ArrowBackIcon } from "@chakra-ui/icons";
import { Grid, GridItem, Heading, IconButton } from "@chakra-ui/react";

export const Header = ({ clickFn, item }) => {
  return (
    <Grid
      bgGradient={[
        "linear(to-tr, pink.300, teal.400)",
        "linear(to-t, purple.200, teal.500)",
        "linear(to-b, purple.500, orange.200)",
      ]}
      h="90px"
      templateColumns={{
        base: "100px 1fr 100px",
        md: "1rem 90px 1fr 90px 0.5rem",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <GridItem colStart={["3", "3", "4"]} colEnd={["2", "2", "3"]}>
        <Heading
          color="purple.700"
          fontWeight="800"
          textAlign="center"
          size={["md", "lg"]}
        >
          Tasty Recipe Checker
        </Heading>
      </GridItem>

      <GridItem colStart={["2", "2", "3"]} colEnd={["3", "4"]}>
        {item && (
          <IconButton
            onClick={() => clickFn()}
            aria-label="Back"
            icon={<ArrowBackIcon />}
            bg="purple.700"
            color="orange"
            border="solid"
          />
        )}
      </GridItem>
    </Grid>
  );
};
