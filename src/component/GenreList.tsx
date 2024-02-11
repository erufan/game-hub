import { Badge, VStack } from "@chakra-ui/react";

const GenreList = ({
  onSelect,
  boldGenre,
}: {
  onSelect: (value: string | null) => void;
  boldGenre: string | null;
}) => {
  let uniqueGenre = [
    "mmorpg",
    "shooter",
    "strategy",
    "moba",
    "racing",
    "sports",
    "social",
    "sandbox",
    "open-world",
    "survival",
    "pvp",
    "pve",
    "pixel",
    "voxel",
    "zombie",
    "turn-based",
    "first-person",
    "third-Person",
    "top-down",
    "tank",
    "space",
    "sailing",
    "side-scroller",
    "superhero",
    "permadeath",
    "card",
    "battle-royale",
    "mmo",
    "mmofps",
    "mmotps",
    "3d",
    "2d",
    "anime",
    "fantasy",
    "sci-fi",
    "fighting",
    "action-rpg",
    "action",
    "military",
    "martial-arts",
    "flight",
    "low-spec",
    "tower-defense",
    "horror",
    "mmorts",
  ];

  return (
    <>
      <VStack paddingX={2} marginY={3} alignItems="flex-start">
        <Badge
          _hover={{ color: "gray.500" }}
          marginY={0.4}
          cursor="pointer"
          onClick={() => onSelect(null)}
        >
          clear
        </Badge>
        {...uniqueGenre.map((value) => (
          <Badge
            _hover={{ color: "gray.500" }}
            marginY={0.4}
            key={value}
            cursor="pointer"
            onClick={() => onSelect(value)}
            fontWeight={boldGenre === value ? "bold" : "normal"}
          >
            {value}
          </Badge>
        ))}
      </VStack>
    </>
  );
};

export default GenreList;
