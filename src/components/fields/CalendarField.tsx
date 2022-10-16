interface CalendarFieldProps {
    date: Date
}

function CalendarField(props: CalendarFieldProps) {

    return (
        <div className={"overflow-scroll flex items-center flex-1 bg-neutral-100 p-2 md:p-5 shadow m-1 hover:bg-blue-500 hover:text-white cursor-pointer flex-col"}>
            <span>{props.date?.getDate()}</span>
        </div>
    )
}

export default CalendarField