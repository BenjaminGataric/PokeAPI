"use client";
// import { useState } from "react";
import { getTypeColor } from "@/data/type-colors";
interface PokemonTypeProps {
  type1: string;
}

export default function PokemonType({ type1 }: PokemonTypeProps) {
  return <span className={`capitalize ${getTypeColor(type1)}`}>{type1}</span>;
}
