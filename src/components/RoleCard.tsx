type Ability = {
    name: string;
    charges: number | "infinite";
    effect: string;
};

type Perk = {
    name: string;
    effect: string;
};

type Alignment = "Good" | "Neutral" | "Evil" | "Unique";

interface RoleCard {
    name: string;
    alignment: Alignment;
    flavour?: string;
    abilities: Ability[];
    perks: Perk[];
}

interface RoleCardProps {
    role: RoleCard;
}

export default function DisplayRoleCard({ role }: RoleCardProps) {
    return (
        <div className="flex w-full flex-col border-l-8 border-l-green-500 bg-green-100 bg-opacity-75 pl-2">
            <div className="w-full shrink  text-lg font-extrabold underline">
                {role.name}
            </div>
            <div className="font-extrabold">{role.alignment.toUpperCase()}</div>
            <div className="italic">{role.flavour}</div>
        </div>
    );
}
