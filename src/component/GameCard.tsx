import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import IconPlatform from "./IconPlatform";
import ReleaseDate from "./ReleaseDate";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.thumbnail} />
      <CardBody>
        <Heading fontSize="xl">{game.title}</Heading>
        <HStack marginY={1} justifyContent="space-between">
          <IconPlatform platform={game.platform} />
          <ReleaseDate releaseDate={game.release_date} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
