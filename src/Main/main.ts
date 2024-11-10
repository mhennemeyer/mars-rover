import { startApp } from "./app";
import { input } from '@inquirer/prompts'

startApp([[
    (s: string) => input({message: s}), 
    console
]])