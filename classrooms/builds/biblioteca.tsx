import { Classrooms, ClassroomTypes } from "../typesClassrooms";
import { misc } from "./misc";

export const images = {
    //B20-22, 24-25, 30-35
    B20: {
        normal1: require("../../assets/images/biblioteca/B20/normal1.gif"),
    },
    B21: {
        normal1: require("../../assets/images/biblioteca/B21/normal1.gif"),
    },
    B22: {
        normal1: require("../../assets/images/biblioteca/B22/normal1.gif"),
    },
    B24: {
        normal1: require("../../assets/images/biblioteca/B24/normal1.gif"),
    },
    B25: {
        normal1: require("../../assets/images/biblioteca/B25/normal1.gif"),
    },
    B30: {
        normal1: require("../../assets/images/biblioteca/B30/normal1.gif"),
    },
    B31: {
        normal1: require("../../assets/images/biblioteca/B31/normal1.gif"),
    },
    B32: {
        normal1: require("../../assets/images/biblioteca/B32/normal1.gif"),
    },
    B33: {
        normal1: require("../../assets/images/biblioteca/B33/normal1.gif"),
    },
    B34: {
        normal1: require("../../assets/images/biblioteca/B34/normal1.gif"),
    },
    B35: {
        normal1: require("../../assets/images/biblioteca/B35/normal1.gif"),
    },
    misc: {
        ladder1: require("../../assets/images/biblioteca/misc/ladder1.gif"),
        ladder2: require("../../assets/images/biblioteca/misc/ladder2.gif"),
        ladder3: require("../../assets/images/biblioteca/misc/ladder3.gif"),
    }

}    


export const biblioteca: Classrooms = {

    B20: {
        id: "B20",
        build: "biblioteca",
        floor: "2",
        number: "20",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder1, images.B20.normal1
                ]
            }
        ]
    },
    B21: {
        id: "B21",
        build: "biblioteca",
        floor: "2",
        number: "21",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder1, images.B21.normal1
                ]
            }
        ]
    },
    B22: {
        id: "B22",
        build: "biblioteca",
        floor: "2",
        number: "22",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder1, images.B22.normal1
                ]
            }
        ]
    },
    B24: {
        id: "B24",
        build: "biblioteca",
        floor: "2",
        number: "24",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder1, images.B24.normal1
                ]
            }
        ]
    },
    B25: {
        id: "B25",
        build: "biblioteca",
        floor: "2",
        number: "25",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder1, images.B25.normal1
                ]
            }
        ]
    },
    B30: {
        id: "B30",
        build: "biblioteca",
        floor: "3",
        number: "30",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder1, images.misc.ladder3, images.B30.normal1
                ]
            }
        ]
    },
    B31: {
        id: "B31",
        build: "biblioteca",
        floor: "3",
        number: "31",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder1, images.misc.ladder3, images.B31.normal1
                ]
            }
        ]
    },
    B32: {
        id: "B32",
        build: "biblioteca",
        floor: "3",
        number: "32",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder1, images.misc.ladder3, images.B32.normal1
                ]
            }
        ]
    },
    B33: {
        id: "B33",
        build: "biblioteca",
        floor: "3",
        number: "33",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder1, images.misc.ladder2, images.B33.normal1
                ]
            }
        ]
    },
    B34: {
        id: "B34",
        build: "biblioteca",
        floor: "3",
        number: "34",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder1, images.misc.ladder3, images.B34.normal1
                ]
            }
        ]
    },
    B35: {
        id: "B35",
        build: "biblioteca",
        floor: "3",
        number: "35",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder1,  images.misc.ladder3, images.B35.normal1
                ]
            }
        ]
    },




}
