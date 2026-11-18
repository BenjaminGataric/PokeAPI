"use client";

import Image from "next/image";
import { useState } from "react";

interface PokemonSpriteProps {
  name: string;
  officialArtwork: string | null;
  gen1: string | null;
  gen2: string | null;
  gen2Shiny: string | null;
  gen3: string | null;
  gen4: string | null;
  gen5: string | null;
}

export default function PokemonSprite({
  name,
  officialArtwork,
  gen1,
  gen2,
  gen2Shiny,
  gen3,
  gen4,
  gen5,
}: PokemonSpriteProps) {
  const [sprite, setSprite] = useState(officialArtwork);

  const buttons = [
    { label: "Gen 1 Sprite", sprite: gen1 },
    { label: "Gen 2 Sprite", sprite: gen2 },
    { label: "Gen 2 Shiny", sprite: gen2Shiny },
    { label: "Gen 3 Sprite", sprite: gen3 },
    { label: "Gen 4 Sprite", sprite: gen4 },
    { label: "Gen 5 Sprite", sprite: gen5 },
    { label: "Official Artwork", sprite: officialArtwork },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 items-center">
      {sprite && (
        <Image src={sprite} alt={`${name} sprite`} width={200} height={200} />
      )}
      <div>
        {buttons.map((button) => (
          <button
            key={button.label}
            type="button"
            className="text-slate-900 bg-slate-300 rounded-full px-3 py-1 mx-1 my-1 hover:bg-blue-400"
            onClick={() => button.sprite && setSprite(button.sprite)}
            disabled={!button.sprite}
            title={
              !button.sprite ? `${button.label} is unavailable` : undefined
            }
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
