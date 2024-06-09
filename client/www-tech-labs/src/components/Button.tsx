import React from 'react';

interface Props {
    label: string;
    handleClick: (event: React.MouseEvent) => void;
}

export default function Button({ label, handleClick }: Props) {
    return (
        <button onClick={handleClick}>{label}</button>
    );
}