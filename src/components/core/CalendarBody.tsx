import {useEffect, useState} from "react";
import {buildFields} from "../../util/dates";

interface CalendarBodyProps {
    month: number,
    year: number,
}

function CalendarBody(props: CalendarBodyProps) {

    const [fields, setFields] = useState<JSX.Element[][]>([])

    useEffect(() => {
        setFields(buildFields(props.month, props.year))
    }, [props.month, props.year])

    return (
        <>
            {fields.map(row => (
                <div className={"flex flex-row"}>
                    {row}
                </div>
            ))}
        </>
    )
}

export default CalendarBody