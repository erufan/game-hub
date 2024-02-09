import { Badge } from "@chakra-ui/react";

const ReleaseDate = ({ releaseDate }: { releaseDate: string }) => {
  const dateArray = releaseDate.split("-"); //[y,,m,d]
  let year = parseInt(dateArray[0]);
  let color = year > 2018 ? "green" : year > 2013 ? "yellow" : "red";

  return (
    <Badge borderRadius={1} fontSize="12px" colorScheme={color} paddingX={3}>
      {releaseDate.split("-")[0]}
    </Badge>
  );
};

export default ReleaseDate;
