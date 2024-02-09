import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card
      width={{
        sm: "400px",
        md: "350px",
        lg: "290px",
        xl: "316px",
        "2xl": "420px",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      <Skeleton height="150px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
