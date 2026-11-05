export function getTypeColor(type: string): string {
    if (type === "fire") return "bg-red-400 text-slate-900";
    if (type === "grass") return "bg-green-300 text-slate-900";
    if (type === "water") return "bg-blue-300 text-slate-900";
    if (type === "normal") return "bg-gray-300 text-slate-900";
    if (type === "ghost") return "bg-indigo-300 text-slate-900";
    if (type === "rock") return "bg-stone-300 text-slate-900";
    if (type === "ground") return "bg-amber-200 text-slate-900";
    if (type === "flying") return "bg-cyan-300 text-slate-900";
    if (type === "bug") return "bg-[#9dae11] text-slate-900";
    if (type === "poison") return "bg-purple-300 text-slate-900";
    if (type === "fighting") return "bg-[#bf0000] text-slate-900";
    if (type === "psychic") return "bg-rose-300 text-slate-900";
    if (type === "electric") return "bg-yellow-300 text-slate-900";
    if (type === "steel") return "bg-[#adb5bd] text-slate-900";
    if (type === "dragon") return "bg-indigo-500 text-slate-900";
    if (type === "fairy") return "bg-pink-500 text-slate-900";
    if (type === "ice") return "bg-cyan-500 text-slate-900";
    if (type === "dark") return "bg-[#252422] text-white";
    
    


    return "bg-slate-100 text-slate-900";

}