import { Classrooms, ClassroomTypes } from "../typesClassrooms";

const images = {
    R10: {
        normal1: require('../../assets/images/reloj/R10/normal1.gif'),
    },
    R11: {
        normal1: require('../../assets/images/reloj/R11/normal1.gif'),
    },
    R12: {
        normal1: require('../../assets/images/reloj/R12/normal1.gif'),
    },
    R13: {
        normal1: require('../../assets/images/reloj/R13/normal1.gif'),
    },
    R14: {
        normal1: require('../../assets/images/reloj/R14/normal1.gif'),
    },
    R20: {
        normal1: require('../../assets/images/reloj/R20/normal1.gif'),
    },
    R21: {
        normal1: require('../../assets/images/reloj/R21/normal1.gif'),
    },
    R22: {
        normal1: require('../../assets/images/reloj/R22/normal1.gif'),
    },
    R23: {
        normal1: require('../../assets/images/reloj/R23/normal1.gif'),
    },
    R24: {
        normal1: require('../../assets/images/reloj/R24/normal1.gif'),
    },
    R25: {
        normal1: require('../../assets/images/reloj/R25/normal1.gif'),
    },
    R26: {
        normal1: require('../../assets/images/reloj/R26/normal1.gif'),
    },
    R27: {
        normal1: require('../../assets/images/reloj/R27/normal1.gif'),
    },
    R28: {
        normal1: require('../../assets/images/reloj/R28/normal1.gif'),
    },
    R29: {
        normal1: require('../../assets/images/reloj/R29/normal1.gif'),
    },
    R30: {
        normal1: require('../../assets/images/reloj/R30/normal1.gif'),
    },
    RWC1: {
        normalM1: require('../../assets/images/reloj/RWC1/normalM1.gif'),
        normalW1: require('../../assets/images/reloj/RWC1/normalW1.gif'),
    },
    RWC2: {
        normalM1: require('../../assets/images/reloj/RWC2/normalM1.gif'),
        normalW1: require('../../assets/images/reloj/RWC2/normalW1.gif'),
    },
    misc: {
        ladder: require('../../assets/images/reloj/misc/ladder.gif'),
    }
};

export const reloj: Classrooms = {
    R10: {
        id: "R10",
        build: "reloj",
        floor: "1",
        number: "10",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.R10.normal1],
            },
        ],
    },
    R11: {
        id: "R11",
        build: "reloj",
        floor: "1",
        number: "11",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.R11.normal1],
            },
        ],
    },
    R12: {
        id: "R12",
        build: "reloj",
        floor: "1",
        number: "12",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.R12.normal1],
            },
        ],
    },
    R13: {
        id: "R13",
        build: "reloj",
        floor: "1",
        number: "13",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.R13.normal1],
            },
        ],
    },
    R14: {
        id: "R14",
        build: "reloj",
        floor: "1",
        number: "14",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.R14.normal1],
            },
        ],
    },
    RWC1: {
        id: "RWC1",
        build: "reloj",
        floor: "1",
        number: "RWC1",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "normalM1",
                resources: [images.RWC1.normalM1],
            },
            {
                type: "normalW1",
                resources: [images.RWC1.normalW1],
            },
        ],
    },
    RWC2: {
        id: "RWC2",
        build: "reloj",
        floor: "12",
        number: "RWC2",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "normalM1",
                resources: [images.misc.ladder, images.RWC2.normalM1],
            },
            {
                type: "normalW1",
                resources: [images.misc.ladder, images.RWC2.normalW1],
            },
        ],
    },
    R20: {
        id: "R20",
        build: "reloj",
        floor: "2",
        number: "20",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.R20.normal1],
            },
        ],
    },
    R21: {
        id: "R21",
        build: "reloj",
        floor: "2",
        number: "21",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.R21.normal1],
            },
        ],
    },
    R22: {
        id: "R22",
        build: "reloj",
        floor: "2",
        number: "22",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.R22.normal1],
            },
        ],
    },
    R23: {
        id: "R23",
        build: "reloj",
        floor: "2",
        number: "23",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.R23.normal1],
            },
        ],
    },
    R24: {
        id: "R24",
        build: "reloj",
        floor: "2",
        number: "24",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.R24.normal1],
            },
        ],
    },
    R25: {
        id: "R25",
        build: "reloj",
        floor: "2",
        number: "25",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.R25.normal1],
            },
        ],
    },
    R26: {
        id: "R26",
        build: "reloj",
        floor: "2",
        number: "26",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.R26.normal1],
            },
        ],
    },
    R27: {
        id: "R27",
        build: "reloj",
        floor: "2",
        number: "27",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.R27.normal1],
            },
        ],
    },
    R28: {
        id: "R28",
        build: "reloj",
        floor: "2",
        number: "28",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.R28.normal1],
            },
        ],
    },
    R29: {
        id: "R29",
        build: "reloj",
        floor: "2",
        number: "29",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.R29.normal1],
            },
        ],
    },
    R30: {
        id: "R30",
        build: "reloj",
        floor: "2",
        number: "30",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.R30.normal1],
            },
        ],
    },
};
