import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

function Doubler(): JSX.Element {
    const [value, setValue] = useState<number>(10);

    const handleDoubleClick = () => {
        setValue(2 * value);
    };

    return <Button onClick={handleDoubleClick}>Double</Button>;
}

function Halver(): JSX.Element {
    return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
        </div>
    );
}
