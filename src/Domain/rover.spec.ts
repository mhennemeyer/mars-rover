import { Command, requestCommand } from "./command"
import { Direction } from "./direction"
import { createRover, x, y, direction, access, Value } from "./rover"

describe('Rover', () => {
    
    const sut = (d: Direction) => (c: Command) => (s: Symbol) => {
        const moved = requestCommand(createRover({direction: d}), c)
        return access(moved, s)
    }

    const should = (d: Direction, c: Command, s: Symbol, n: Value) => 
        `Given: Rover facing ${d}\n      When ${c}\n      Then: ${s.description} = ${n}`

    type Example = [Direction, Command, Symbol, Value]
    const examples: Example[] = [ 
        ['North', 'Stand', x, 0],
        ['North', 'Stand', y, 0],
        ['North', 'MoveForward', y, 1],
        ['South', 'MoveForward', y, -1],
        ['East',  'MoveForward', x, 1],
        ['West',  'MoveForward', x, -1],
        ['North', 'MoveBackward', y, -1],
        ['South', 'MoveBackward', y, 1],
        ['East',  'MoveBackward', x, -1],
        ['West',  'MoveBackward', x, 1],
        ['North', 'TurnLeft', direction, 'West'],
        ['South', 'TurnLeft', direction, 'East'],
        ['East',  'TurnLeft', direction, 'North'],
        ['West',  'TurnLeft', direction, 'South'],
        ['North', 'TurnRight', direction, 'East'],
        ['South', 'TurnRight', direction, 'West'],
        ['East',  'TurnRight', direction, 'South'],
        ['West',  'TurnRight', direction, 'North']
    ]
    examples.forEach(([d,c,s,n]) => 
        it(should(d,c,s,n) , () => 
            expect(sut(d)(c)(s)).toBe(n)))
})