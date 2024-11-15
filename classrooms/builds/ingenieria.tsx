import { Classrooms, ClassroomTypes } from "../typesClassrooms";

const images = {
    misc: {
        elevator: require('../../assets/images/ingenieria/misc/elevator.png'),
        totwo: require('../../assets/images/ingenieria/misc/totwo.png')
    },
    I204: {
        alt1: require('../../assets/images/ingenieria/I204/alt1.png'),
        normal1: require('../../assets/images/ingenieria/I204/normal1.png')
    }
}

export const ingenieria: Classrooms = {
    I204: { 
        id: "I204", 
        build: "ingenieria", 
        floor: "2", 
        number: "04", 
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            { 
                type: "Normal", 
                resources: [
                    images.misc.totwo,
                    images.I204.normal1
                ]
            }, 
            { 
                type: "Alt.", 
                resources: [
                    images.misc.elevator,
                    images.I204.alt1
                ]
            }
        ]
    }
}