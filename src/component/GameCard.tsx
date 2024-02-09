import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import IconPlatform from "./IconPlatform";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.thumbnail} />
      <CardBody>
        <Heading fontSize="2xl">{game.title}</Heading>
        <HStack marginY={1}>
          <IconPlatform platform={game.platform} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
