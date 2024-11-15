import { Classrooms, ClassroomTypes } from "../typesClassrooms";

const images = {
    general: {
        campus: require('../../assets/images/general/campus/campus.gif'),
        biblio: require('../../assets/images/general/campus/biblio.gif'),
        central: require('../../assets/images/general/campus/central.gif'),
        ciencias: require('../../assets/images/general/campus/ciencias.gif'),
        ese: require('../../assets/images/general/campus/ese.gif'),
        humanidades: require('../../assets/images/general/campus/humanidades.gif'),
        ingenieria: require('../../assets/images/general/campus/ingenieria.gif'),
        reloj: require('../../assets/images/general/campus/reloj.gif')
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
                type: "general", 
                resources: [
                    images.general.campus
                ]
            },
            {
                type: "ciencias", 
                resources: [
                    images.general.ciencias
                ]
            },
            {
                type: "ESE", 
                resources: [
                    images.general.ese
                ]
            },
            {
                type: "reloj", 
                resources: [
                    images.general.reloj
                ]
            },
            {
                type: "central", 
                resources: [
                    images.general.central
                ]
            },
            {
                type: "humanidades", 
                resources: [
                    images.general.humanidades
                ]
            },
            {
                type: "Ingeniería", 
                resources: [
                    images.general.ingenieria
                ]
            },
            {
                type: "Biblioteca / Punto Unico", 
                resources: [
                    images.general.biblio
                ]
            }
        ]
    },
}