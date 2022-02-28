import React, {useState} from 'react';
import './App.css';
import Counters from "./components/Counters";
import NavBar from "./components/navBar";

export type CountersType = {
    _id: number
    value: number
    name: string
}

function App() {

    const initialState: CountersType[] = [
        {_id: 1, value: 0, name: "Ложка"},
        {_id: 2, value: 0, name: "Вилка"},
        {_id: 3, value: 0, name: "Тарелка"},
        {_id: 4, value: 0, name: "Стартовый набор минималиста"},
        {_id: 5, value: 0, name: "Ненужные веши"},
    ]

    const [counters, setCounters] = useState<CountersType[]>(initialState)
    const deleteHandler = (counterId: number) => {
        setCounters(counters.filter((counter) => counter._id !== counterId));
    }
    const handleReset = () => {
        setCounters(initialState)
    }
    const handleIncrement = (counterId: number) => {
        setCounters(counters.map(counter => counter._id === counterId ? {...counter, value: counter.value +=1 } : counter))
    }
    const handleDecrement = (counterId: number) => {
        setCounters(counters.map(counter => counter._id === counterId ? {...counter, value: counter.value > 0 ? counter.value -=1 : counter.value } : counter))
    }

    return (
        <div className="col-lg-8 mx-auto p-3 py-md-5">
            <main>
                <NavBar
                    totalItems = {counters.reduce((a, c) => a + c.value, 0)}
                />
                <Counters
                    onDelete={deleteHandler}
                    onReset={handleReset}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    counters={counters}
                />
            </main>

        </div>
    );
};

export default App;
