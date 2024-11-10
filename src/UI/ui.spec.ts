import { Command } from "../Domain/command"
import { Convert, convert } from "./ui"

describe('Convert', () => {
    const gwt = (input: string, expected: Command) => 
        `Given ${input}\n      When Convert\n      Then ${expected}`
    const sut = convert
    type Example = [string, Command]
    const examples: Example[] = [
        ['f', 'MoveForward'],
        ['F', 'MoveForward'],
        ['b', 'MoveBackward'],
        ['B', 'MoveBackward'],
        ['l', 'TurnLeft'],
        ['L', 'TurnLeft'],
        ['r', 'TurnRight'],
        ['R', 'TurnRight'],
        ['q', 'Quit'],
        ['Q', 'Quit'],
        ['asdgwer', 'Unknown'],
        ['X', 'Unknown'],
        ['z', 'Unknown'],
        ['ä', 'Unknown'],
    ]

    examples.forEach(([input, expected]) => 
        it(gwt(input, expected), () => 
            expect(sut(input)).toBe(expected)))
})