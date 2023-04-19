import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import RoleModal from "~/components/RoleModal";
import { evilRoleNames, goodRoleNames, neutralRoleNames } from "~/utils/roles";
import { capitlizeWords } from "~/utils/string";

type RoleProps = {
    name: string;
    alignment: "good" | "evil" | "neutral";
    onClick?: (name: string) => void;
};

export function RoleLink({ name, alignment, onClick }: RoleProps) {
    return (
        <div
            className={`flex h-64 flex-col items-center justify-center text-center hover:cursor-pointer ${
                alignment === "good"
                    ? "bg-green-400 hover:bg-green-500"
                    : alignment === "evil"
                    ? "bg-red-400 hover:bg-red-500"
                    : `bg-gray-400 hover:bg-gray-500`
            }`}
            onClick={() => {
                if (onClick) onClick(name);
            }}
        >
            <span className="font-sedgewick text-2xl font-extrabold">
                {capitlizeWords(name)}
            </span>
        </div>
    );
}

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [currentFocus, setCurrentFocus] = useState(goodRoleNames[0]);

    const onRoleClick = (name: string) => {
        setCurrentFocus(name);
        setShowModal(true);
    };

    const onModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="flex h-screen w-screen flex-col items-center justify-start bg-zinc-900 p-32">
                <RoleModal
                    isVisible={showModal}
                    roleFocus={currentFocus}
                    onClose={onModalClose}
                />
                <h1 className="pb-4 font-sedgewick text-6xl text-white">
                    Betrayal Information
                </h1>
                <div className="mb-4 flex flex-row items-center justify-center">
                    <span className="m-2 rounded-2xl border-2 border-gray-400 bg-gray-400 px-2 text-center text-black hover:cursor-pointer">
                        Roles
                    </span>

                    <span className="m-2 rounded-2xl border-2 border-gray-400 px-2 text-center text-white hover:cursor-pointer">
                        Items
                    </span>

                    <span className="m-2 rounded-2xl border-2 border-gray-400 px-2 text-center text-white hover:cursor-pointer">
                        Luck/Coins
                    </span>
                </div>
                <main className="align-center flex h-full w-3/4 grow flex-row justify-center gap-2 overflow-y-scroll px-2">
                    <div className="align-center  flex grow flex-col justify-start gap-2">
                        {goodRoleNames.map((v, i) => (
                            <RoleLink
                                name={v}
                                alignment="good"
                                key={v}
                                onClick={onRoleClick}
                            />
                        ))}
                    </div>
                    <div className="align-center  flex grow flex-col justify-start gap-2">
                        {neutralRoleNames.map((v, i) => (
                            <RoleLink
                                name={v}
                                alignment="neutral"
                                key={v}
                                onClick={onRoleClick}
                            />
                        ))}
                    </div>
                    <div className="align-center  flex grow flex-col justify-start gap-2">
                        {evilRoleNames.map((v, i) => (
                            <RoleLink
                                name={v}
                                alignment="evil"
                                key={v}
                                onClick={onRoleClick}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}
