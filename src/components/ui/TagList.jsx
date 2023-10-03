import { Tag } from "@chakra-ui/react";

export const TagList = ({ labels, ...props }) => {
  return (
    <>
      {labels.map((label) => (
        <Tag color="purple.900" key={label} {...props}>
          {label}
        </Tag>
      ))}
    </>
  );
};
