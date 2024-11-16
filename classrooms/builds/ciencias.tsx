import { Classrooms, ClassroomTypes } from "../typesClassrooms";

// const images = {
//     C105: {
//         normal1: require('../../assets/images/ciencias/C105/normal1.gif')
//     }
// }

// export const ciencias: Classrooms = {
//     C105: { 
//         id: "C105", 
//         build: "ciencias", 
//         floor: "1", 
//         number: "05",
//         show: true, 
//         type: ClassroomTypes.CLASS,
//         resources: [
//             {
//                 type: "Normal", 
//                 resources: [
//                     images.C105.normal1
//                 ]
//             }
//         ]
//     },
// }

export const images = {
    C101: {
        normal1: require("../../assets/images/ciencias/C101/normal1.gif"),
    },
    C104: {
        normal1: require("../../assets/images/ciencias/C104/normal1.gif"),
    },
    C109: {
        normal1: require("../../assets/images/ciencias/C109/normal1.gif"),
    },
    C114: {
        normal1: require("../../assets/images/ciencias/C114/normal1.gif"),
    },
    C116: {
        normal1: require("../../assets/images/ciencias/C116/normal1.gif"),
    },
    C117: {
        normal1: require("../../assets/images/ciencias/C117/normal1.gif"),
    },
    C118: {
        normal1: require("../../assets/images/ciencias/C118/normal1.gif"),
    },
    C119: {
        normal1: require("../../assets/images/ciencias/C119/normal1.gif"),
    },
    C120: {
        normal1: require("../../assets/images/ciencias/C120/normal1.gif"),
    },

    CWC1: {
        M1: require('../../assets/images/ciencias/CWC1/M1.gif'),
        W1: require('../../assets/images/ciencias/CWC1/W1.gif'),
        M2: require('../../assets/images/ciencias/CWC1/M2.gif'),
        W2: require('../../assets/images/ciencias/CWC1/W2.gif'),
    },

    COFFEE: {
        COFFEE: require('../../assets/images/ciencias/COFFEE/coffee.gif'),
    },
};




export const ciencias: Classrooms = {
    C101: {
        id: "C101",
        build: "ciencias",
        floor: "1",
        number: "101",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C101.normal1],
            },
        ],
    },
    C104: {
        id: "C104",
        build: "ciencias",
        floor: "1",
        number: "104",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C104.normal1],
            },
        ],
    },
    C109: {
        id: "C109",
        build: "ciencias",
        floor: "1",
        number: "109",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C109.normal1],
            },
        ],
    },
    C114: {
        id: "C114",
        build: "ciencias",
        floor: "1",
        number: "114",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C114.normal1],
            },
        ],
    },
    C116: {
        id: "C116",
        build: "ciencias",
        floor: "1",
        number: "116",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C116.normal1],
            },
        ],
    },
    C117: {
        id: "C117",
        build: "ciencias",
        floor: "1",
        number: "117",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C117.normal1],
            },
        ],
    },
    C118: {
        id: "C118",
        build: "ciencias",
        floor: "1",
        number: "118",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C118.normal1],
            },
        ],
    },
    C119: {
        id: "C119",
        build: "ciencias",
        floor: "1",
        number: "119",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C119.normal1],
            },
        ],
    },
    C120: {
        id: "C120",
        build: "ciencias",
        floor: "1",
        number: "120",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C120.normal1],
            },
        ],
    },


    CWC1: {
        id: "CWC1",
        build: "ciencias",
        floor: "1",
        number: "WC-1",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "M1",
                resources: [images.CWC1.M1],
            },
            {
                type: "M2",
                resources: [
                    images.CWC1.M2
                ]
            },
            {
                type: "W1",
                resources: [images.CWC1.W1],
            },
            {
                type: "W2",
                resources: [
                    images.CWC1.W2
                ]
            },
        ],
    },


    CCAFE: {
        id: "CCAFE",
        build: "ciencias",
        floor: "1",
        number: "COFFEE",
        show: true,
        type: ClassroomTypes.CAFE,
        resources: [
            {
                type: "COFFEE",
                resources: [images.COFFEE.COFFEE],
            },

        ],
    },




};

