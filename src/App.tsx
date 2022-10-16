import Calendar from "./components/Calendar";

function App() {

    return (
        <div className={"flex flex-col bg-neutral-50"}>
            <h1 className={"m-20 text-4xl tracking-widest font-thin"}>calre.js Showcase</h1>
            <div className={"m-10 p-5 shadow bg-white"}>
                <h2 className={"my-5 text-2xl tracking-wide font-thin"}>Calendar View</h2>
                <Calendar />
            </div>
        </div>
    )
}

export default App