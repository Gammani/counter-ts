import React from "react";
import {CountersType} from "../App";

type PropsType = {
    counter: CountersType
    onDelete: (id: number) => void
    onIncrement: (id: number) => void
    onDecrement: (id: number) => void
}

const Counter: React.FC<PropsType> = ({counter, onDelete, onIncrement, onDecrement}) => {

    const formCount = () => {
        return counter.value === 0 ? "Ноль" : counter.value;
    }

    const getBadgeClasses = () => {
        let classes = "badge bg-";
        classes += counter.value > 0 ? "primary m-2" : "danger m-2";
        return classes;
    }
    const deleteHandler = (counterId: number) => {
        onDelete(counterId);
    }

    return (
        <React.Fragment>
            <h4>{counter.name}</h4>
            <span
                className={getBadgeClasses()}
                style={{fontSize: "20px", fontWeight: "bold", borderRadius: "20px", marginBottom: "5px"}}
            >
                {formCount()}
            </span>
            <button className={"btn btn-secondary btn-sm m-2"} onClick={() => onIncrement(counter._id)}>increment</button>
            <button className={"btn btn-secondary btn-sm"} onClick={() => onDecrement(counter._id)}>decrement</button>
            <button className={"btn-danger btn-sm m-2"} onClick={() => deleteHandler(counter._id)}>Delete</button>
        </React.Fragment>
    )
};

export default Counter;
