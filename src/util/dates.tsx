import CalendarField from "../components/fields/CalendarField";
import CalendarFieldDummy from "../components/fields/CalendarFieldDummy";

export const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function calculateDaysOfMonth(month: number, year: number): Date[] {
    let pointer: Date = new Date(year, month, 1)
    const days: Date[] = []
    while (pointer.getMonth() === month) {
        days.push(new Date(pointer))
        pointer.setDate(pointer.getDate() + 1)
    }
    return days
}

function partitionFields(fields: JSX.Element[]) : JSX.Element[][] {
    const partitionSize = 7
    const numberOfPartitions = Math.ceil(fields.length / partitionSize)
    const partitions: JSX.Element[][] = []
    for (let i = 0; i < numberOfPartitions; i++) {
        partitions[i] = []
    }
    for (let i = 0; i < fields.length; i++) {
        const partitionIndex = Math.floor(i / partitionSize)
        const index = i - (partitionIndex * partitionSize)
        partitions[partitionIndex][index] = fields[i]
    }
    return partitions
}

export function buildFields(month: number, year: number): JSX.Element[][] {
    const dates = calculateDaysOfMonth(month, year)
    const elements: JSX.Element[] = []
    let pointer: number = 0;
    for (const date of dates) {
        const day = date.getDay()
        while (pointer < day) {
            elements.push(<CalendarFieldDummy />)
            pointer += 1;
        }
        elements.push(<CalendarField date={date} />)
        pointer += 1;
    }
    for(let i = 0; i < (elements.length % weekDays.length); i++) {
        elements.push(<CalendarFieldDummy />)
    }
    return partitionFields(elements)
}