import { faCopy, faLink, faUpDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Role, evilRoleNames, goodRoleNames, roles } from "~/utils/roles";
import { capitlizeWords } from "~/utils/string";

type RoleModalProps = {
    isVisible?: boolean;
    roleFocus?: string;
    onClose: () => void;
};

export default function RoleModal({
    isVisible,
    roleFocus,
    onClose,
}: RoleModalProps) {
    const [roleColor, setRoleColor] = useState(
        goodRoleNames.includes(roleFocus ?? "")
            ? "green"
            : evilRoleNames.includes(roleFocus ?? "")
            ? "red"
            : "gray"
    );

    useEffect(() => {
        setRoleColor(
            goodRoleNames.includes(roleFocus ?? "")
                ? "green"
                : evilRoleNames.includes(roleFocus ?? "")
                ? "red"
                : "gray"
        );
    }, [roleFocus]);

    if (isVisible === false || undefined) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
            <div className={`flex w-[600px] flex-col`}>
                <button
                    className="place-self-end text-xl text-white"
                    onClick={onClose}
                >
                    X
                </button>
                <div
                    className={`rounded-md border-l-8 bg-white p-2 border-l-${roleColor}-400 bg-${roleColor}-400 p-4`}
                >
                    <RoleData role={roles[roleFocus ?? ""]} />
                </div>
            </div>
        </div>
    );
}

type RoleModalChildProps = {
    role?: Role;
};
function RoleData({ role }: RoleModalChildProps) {
    if (!role) return <div>Role not found</div>;
    return (
        <>
            <h1 className="text-2xl">
                {capitlizeWords(role.name)} - {role.alignment.toUpperCase()}
            </h1>
            <p>{role.flavour}</p>
            <h3 className="text-xl font-extrabold">Abilities</h3>
            <ul>
                {role.abilities.map((ability) => (
                    <Ability
                        name={ability.name}
                        charges={ability.charges}
                        effect={ability.effect}
                        key={ability.name}
                    />
                ))}
            </ul>
            <h3 className="text-xl font-extrabold">Perks</h3>
            <ul>
                {role.perks.map((perk) => (
                    <li
                        key={perk.name}
                        className="mb-4 ml-2 border-l-4 border-l-gray-400 pl-4"
                    >
                        <h4 className="font-extrabold">{perk.name}</h4>
                        <p>{perk.effect}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

type AbilityProps = {
    name: string;
    effect: string;
    charges?: number;
};

function Ability({ name, effect, charges }: AbilityProps) {
    const [isFocused, setIsFocused] = useState(false);

    const copyRoleToClipboard = async () => {
        const text = `${name} [x${charges ?? "inf"}] - ${effect}`;
        await navigator.clipboard.writeText(text);
    };

    return (
        <li
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => setIsFocused(false)}
            className="mb-4 ml-2 flex flex-row border-l-4 border-l-gray-400 p-2 pl-4 hover:bg-gray-200"
        >
            <div className="w-full grow">
                <h4 className="font-extrabold">
                    {name} [x{charges ?? "inf"}]
                </h4>
                <p>{effect}</p>
                <p className={`text-sm text-gray-500`}>Positive · Is an AA</p>
            </div>
            <div
                className={`flex flex-col items-center justify-evenly px-2 align-middle ${
                    isFocused ? "block" : "hidden"
                }`}
            >
                <FontAwesomeIcon
                    icon={faCopy}
                    className="text-lg text-gray-500 hover:cursor-pointer hover:text-gray-700"
                    onClick={() => {
                        void copyRoleToClipboard();
                        return;
                    }}
                />
                <FontAwesomeIcon
                    icon={faLink}
                    className="text-lg text-gray-500 hover:cursor-pointer hover:text-gray-700"
                />
                <FontAwesomeIcon
                    icon={faUpDown}
                    className="text-lg text-gray-500 hover:cursor-pointer hover:text-gray-700"
                />
            </div>
        </li>
    );
}
