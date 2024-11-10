import { Direction } from "./direction"

// Rover = has an X and Y and a Direction
export type Rover = {
    readonly x: number,
    readonly y: number,
    readonly direction: Direction
}
const zeroRover: Rover = {
    x:  0, 
    y:  0, 
    direction: 'North'
}

export function createRover(pr: Partial<Rover> = zeroRover): Rover {
    const r = {...zeroRover, ...pr} as Rover
    return {x: r.x, y: r.y, direction: r.direction}
}

export const y = Symbol('y')
export const x = Symbol('x')
export const direction = Symbol('direction')
export type Value = number | Direction

type Access = (r: Rover, s: Symbol) => Value
export const access: Access = (r: Rover, s: Symbol) => {
    if (s === y) {
        return r.y
    }

    if (s === x) {
        return r.x
    }

    if (s === direction) {
        return r.direction
    }

    return 0
}