import React from "react";
import Counter from "./Counter";
import {CountersType} from "../App";

type PropsType = {
    onDelete: (counterId: number) => void
    onReset: () => void
    onIncrement: (counterId: number) => void
    onDecrement: (counterId: number) => void
    counters: Array<CountersType>
}

const Counters: React.FC<PropsType> = ({onDelete, counters, onDecrement, onIncrement, onReset}) => {

    return (
        <React.Fragment>
            <button className={"btn-primary btn-small m-2"} onClick={onReset}>Reset</button>
            {counters.map((counter) => (
                <Counter
                    key={counter._id}
                    counter={counter}
                    onDelete={onDelete}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                />
            ))}
        </React.Fragment>
    )
}

export default Counters;