import { Classrooms, ClassroomTypes } from "../typesClassrooms";

const images = {
    C105: {
        normal1: require('../../assets/images/ciencias/C105/normal1.gif')
    }
}

export const ciencias: Classrooms = {
    C105: { 
        id: "C105", 
        build: "ciencias", 
        floor: "1", 
        number: "05",
        show: true, 
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal", 
                resources: [
                    images.C105.normal1
                ]
            }
        ]
    },
}