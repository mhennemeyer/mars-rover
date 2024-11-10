import { Rover } from "./rover"
import { Movement, moveForward, moveBackward, turnLeft, turnRight, standStill } from "./movement"

 // Command = Move Forward/Backward Turn Left/Right
 export type Command = 
    | 'Stand'
    | 'Unknown'
    | 'Quit'
    | 'MoveForward' 
    | 'MoveBackward' 
    | 'TurnLeft' 
    | 'TurnRight'

type Action = (c: Command) => Movement
const action: Action = (c: Command) => {
    switch (c) {
        case 'MoveForward':
            return moveForward
        case 'MoveBackward':
            return moveBackward
        case 'TurnLeft':
            return turnLeft
        case 'TurnRight':
            return turnRight
        case 'Quit':
            return standStill
        case 'Stand':
            return standStill
         case 'Unknown':
            return standStill
    }
}

type CommandRequest = (r: Rover, c: Command) => Rover
export const requestCommand: CommandRequest = 
   (r: Rover, c: Command) => action(c)(r)