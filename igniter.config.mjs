import { ExecTask, TaskOfTasks } from "@flybywiresim/igniter";
export default new TaskOfTasks("all", [
    // A32NX Task
    new TaskOfTasks("BlipBlop 787-9", [
        new TaskOfTasks("Preparation",[
            new ExecTask("Copy files", "npm run prep-BB789:copy-base-package")
        ], false),
        new TaskOfTasks("Build", [
            new ExecTask("Model", "npm run build-BB789:model", ["BlipBlop-789/src/models", "BlipBlop-789/build/blipblop-aircraft-787-9/SimObjects/AirPlanes/BlipBlop_B787_9/model"])
        ],true),
    ], false),    
]);