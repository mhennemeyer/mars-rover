import { createRover } from "../Domain/rover";
import { IO, uiLoop } from "../UI/ui";

export type AppDependencies = [IO]
export const startApp = (deps: AppDependencies) => {
    uiLoop(createRover(), 'Unknown', deps)
}