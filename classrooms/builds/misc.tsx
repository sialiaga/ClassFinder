import { Classrooms, ClassroomTypes } from "../typesClassrooms";

const images = {
    general: {
        campus: require('../../assets/images/general/mapa_campus.png')
    }
}

export const misc: Classrooms = {
    campus: { 
        id: "campus", 
        build: "general",
        title: {"es":"Mapa del Campus", "en":"Map Of Campus"}, 
        floor: "0", 
        number: "00",
        show: false, 
        type: ClassroomTypes.OTHER,
        resources: [
            {
                type: "normal", 
                resources: [
                    images.general.campus
                ]
            }
        ]
    },
}