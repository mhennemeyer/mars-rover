import { Command, requestCommand } from "../Domain/command";
import { Rover } from "../Domain/rover";


const formatRover = (r: Rover) => 
    `Rover is at (${r.x}, ${r.y}) facing ${r.direction}`

export const prompt = (r: Rover) => 
    formatRover(r) + "\nChoose a Command: f, b, l, r\n"

const map = new Map<string, Command>([
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
])

export type Convert = (input: string) => Command
export const convert: Convert = (input: string) => 
    map.get(input.trim()) ?? 'Unknown'

export type IO = [In, Out]
export type Out = {log: (message: string) => void, clear: () => void}
export type In = (message: string) => Promise<string>

export async function uiLoop(rover: Rover, c: Command, deps: [IO]) {
    if (c === 'Quit') {
        return
    }

    // Destructure Dependencies (just i/o for now)
    const [[i,o]] = deps 
    o.clear()
    const userCommand = convert(await i(prompt(rover)))
    o.log(userCommand)

    uiLoop(requestCommand(rover, userCommand), userCommand, deps)
    
}



