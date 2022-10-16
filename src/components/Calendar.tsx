import {useState} from "react";
import CalendarHeader from "./core/CalendarHeader";
import CalendarBody from "./core/CalendarBody";
import CalendarControls from "./controls/CalendarControls";

interface CalendarProps {}

function Calendar(props: CalendarProps) {

    const [year, setYear] = useState<number>(new Date().getFullYear())
    const [month, setMonth] = useState<number>(new Date().getMonth())

    function increase() {
        if (month == 11) {
            setMonth(0)
            setYear(year + 1)
        } else {
            setMonth(month + 1)
        }
    }

    function decrease() {
        if (month == 0) {
            setMonth(11)
            setYear(year - 1)
        } else {
            setMonth(month - 1)
        }
    }

    return (
        <div className={"flex flex-col"}>
            <CalendarControls increase={increase} decrease={decrease} month={month} year={year} />
            <CalendarHeader />
            <CalendarBody month={month} year={year} />
        </div>
    )
}

export default Calendar