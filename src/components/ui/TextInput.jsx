import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn }) => {
  return (
    <Input
      onChange={changeFn}
      bg="pink.50"
      focusBorderColor="purple.900"
      placeholder="search for recipes"
      color="pink.900"
      _placeholder={{ color: "purple" }}
      htmlSize={40}
      width="auto"
    />
  );
};
