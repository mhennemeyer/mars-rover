import { Rover } from "./rover"

export type Movement = (r: Rover) => Rover

export const standStill: Movement = r => r

export const moveForward: Movement = r => {
    switch (r.direction) {
        case "North": 
            return {...r, y: r.y+1}
        case "South":
            return {...r, y: r.y-1}
        case "East":
            return {...r, x: r.x+1}
        case "West":
            return {...r, x: r.x-1}
    }
}

export const moveBackward: Movement = r => {
    switch (r.direction) {
        case "North": 
            return {...r, y: r.y-1}
        case "South":
            return {...r, y: r.y+1}
        case "East":
            return {...r, x: r.x-1}
        case "West":
            return {...r, x: r.x+1}
    }
}

export const turnLeft: Movement = r => {
    switch (r.direction) {
        case "North": 
            return {...r, direction: 'West'}
        case "South":
            return {...r, direction: 'East'}
        case "East":
            return {...r, direction: 'North'}
        case "West":
            return {...r, direction: 'South'}
    }
}


const right = ['North', 'East', 'South', 'West']

export const turnRight: Movement = r => {
    switch (r.direction) {
        case "North": 
            return {...r, direction: 'East'}
        case "South":
            return {...r, direction: 'West'}
        case "East":
            return {...r, direction: 'South'}
        case "West":
            return {...r, direction: 'North'}
    }
}