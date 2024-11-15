import { Classrooms } from "./typesClassrooms";
import { ciencias } from "./builds/ciencias";
import { ingenieria } from "./builds/ingenieria";
import { humanidades } from "./builds/humanidades";
import { misc } from "./builds/misc"

export const classrooms: Classrooms = {
    ...ciencias,
    ...ingenieria,
    ...humanidades,
    ...misc
}
