import { Classrooms, ClassroomTypes } from "../typesClassrooms";

const images = {
    I010: {
        normal1: require('../../assets/images/ingenieria/I010/normal1.gif'),
        alt1: require('../../assets/images/ingenieria/I010/alt1.gif'),
    },
    I011: {
        normal1: require('../../assets/images/ingenieria/I011/normal1.gif'),
        alt1: require('../../assets/images/ingenieria/I011/alt1.gif'),
    },
    I013: {
        normal1: require('../../assets/images/ingenieria/I013/normal1.gif'),
        alt1: require('../../assets/images/ingenieria/I013/alt1.gif'),
    },
    I101: {
        normal1: require('../../assets/images/ingenieria/I101/normal1.gif'),
    },
    I103: {
        normal1: require('../../assets/images/ingenieria/I103/normal1.gif'),
    },
    I105: {
        normal1: require('../../assets/images/ingenieria/I105/normal1.gif'),
    },
    I107: {
        normal1: require('../../assets/images/ingenieria/I107/normal1.gif'),
    },
    I201: {
        normal1: require('../../assets/images/ingenieria/I201/normal1.gif'),
        alt1: require('../../assets/images/ingenieria/I201/alt1.gif'),
    },
    I203: {
        normal1: require('../../assets/images/ingenieria/I203/normal1.gif'),
        alt1: require('../../assets/images/ingenieria/I203/alt1.gif'),
    },
    I205: {
        normal1: require('../../assets/images/ingenieria/I205/normal1.gif'),
        alt1: require('../../assets/images/ingenieria/I205/alt1.gif'),
    },
    I207: {
        normal1: require('../../assets/images/ingenieria/I207/normal1.gif'),
        alt1: require('../../assets/images/ingenieria/I207/alt1.gif'),
    },
    I208: {
        normal1: require('../../assets/images/ingenieria/I208/normal1.gif'),
        alt1: require('../../assets/images/ingenieria/I208/alt1.gif'),
    },
    ICOMP1: {
        normal1: require('../../assets/images/ingenieria/ICOMP1/normal1.gif'),
        alt1: require('../../assets/images/ingenieria/ICOMP1/alt1.gif'),
    },
    ICOMP2: {
        normal1: require('../../assets/images/ingenieria/ICOMP2/normal1.gif'),
        alt1: require('../../assets/images/ingenieria/ICOMP2/alt1.gif'),
    },
    ILABE: {
        normal1: require('../../assets/images/ingenieria/ILABE/normal1.gif'),
    },
    ILABO: {
        normal1: require('../../assets/images/ingenieria/ILABO/normal1.gif'),
    },
    ILABP: {
        normal1: require('../../assets/images/ingenieria/ILABP/normal1.gif'),
    },
    IWC0: {
        NormalM1: require('../../assets/images/ingenieria/IWC0/NormalM1.gif'),
        NormalW1: require('../../assets/images/ingenieria/IWC0/NormalW1.gif'),
        altM1: require('../../assets/images/ingenieria/IWC0/altM1.gif'),
        altW1: require('../../assets/images/ingenieria/IWC0/altW1.gif'),
    },
    IWC1: {
        M1: require('../../assets/images/ingenieria/IWC1/M1.gif'),
        W1: require('../../assets/images/ingenieria/IWC1/W1.gif'),
    },
    IWC2: {
        normalM1: require('../../assets/images/ingenieria/IWC2/normalM1.gif'),
        normalW1: require('../../assets/images/ingenieria/IWC2/normalW1.gif'),
        altM1: require('../../assets/images/ingenieria/IWC2/altM1.gif'),
        altW1: require('../../assets/images/ingenieria/IWC2/altW1.gif'),
    },
    misc: {
        elevator: require('../../assets/images/ingenieria/misc/elevator.gif'),
        ladder: require('../../assets/images/ingenieria/misc/ladder.gif'),
    },
};

export const ingenieria: Classrooms = {
    I010: {
        id: "I010",
        build: "ingenieria",
        floor: "0",
        number: "10",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.I010.normal1],
            },
            {
                type: "alt",
                resources: [images.misc.elevator, images.I010.alt1],
            },
        ],
    },
    I011: {
        id: "I011",
        build: "ingenieria",
        floor: "0",
        number: "11",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.I011.normal1],
            },
            {
                type: "alt",
                resources: [images.misc.elevator, images.I011.alt1],
            },
        ],
    },
    I013: {
        id: "I013",
        build: "ingenieria",
        floor: "0",
        number: "13",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.I013.normal1],
            },
            {
                type: "alt",
                resources: [images.misc.elevator, images.I013.alt1],
            },
        ],
    },
    I101: {
        id: "I101",
        build: "ingenieria",
        floor: "1",
        number: "01",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.I101.normal1],
            },
        ],
    },
    I103: {
        id: "I103",
        build: "ingenieria",
        floor: "1",
        number: "03",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.I103.normal1],
            },
        ],
    },
    I105: {
        id: "I105",
        build: "ingenieria",
        floor: "1",
        number: "05",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.I105.normal1],
            },
        ],
    },
    I107: {
        id: "I107",
        build: "ingenieria",
        floor: "1",
        number: "07",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.I107.normal1],
            },
        ],
    },
    I201: {
        id: "I201",
        build: "ingenieria",
        floor: "2",
        number: "01",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.I201.normal1],
            },
            {
                type: "alt",
                resources: [images.misc.elevator, images.I201.alt1],
            },
        ],
    },
    I203: {
        id: "I203",
        build: "ingenieria",
        floor: "2",
        number: "03",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.I203.normal1],
            },
            {
                type: "alt",
                resources: [images.misc.elevator, images.I203.alt1],
            },
        ],
    },
    I205: {
        id: "I205",
        build: "ingenieria",
        floor: "2",
        number: "05",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.I205.normal1],
            },
            {
                type: "alt",
                resources: [images.misc.elevator, images.I205.alt1],
            },
        ],
    },
    I207: {
        id: "I207",
        build: "ingenieria",
        floor: "2",
        number: "07",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.I207.normal1],
            },
            {
                type: "alt",
                resources: [images.misc.elevator, images.I207.alt1],
            },
        ],
    },
    I208: {
        id: "I208",
        build: "ingenieria",
        floor: "2",
        number: "08",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.I208.normal1],
            },
            {
                type: "alt",
                resources: [images.misc.elevator, images.I208.alt1],
            },
        ],
    },
    ICOMP1: {
        id: "ICOMP1",
        build: "ingenieria",
        floor: "2",
        number: "COMP1",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.ICOMP1.normal1],
            },
            {
                type: "alt",
                resources: [images.misc.elevator, images.ICOMP1.alt1],
            },
        ],
    },
    ICOMP2: {
        id: "ICOMP2",
        build: "ingenieria",
        floor: "2",
        number: "COMP2",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [images.misc.ladder, images.ICOMP2.normal1],
            },
            {
                type: "alt",
                resources: [images.misc.elevator, images.ICOMP2.alt1],
            },
        ],
    },
    ILABE: {
        id: "ILABE",
        build: "ingenieria",
        floor: "1",
        number: "LAB-ELECTRICA",
        show: true,
        type: ClassroomTypes.LAB,
        resources: [
            {
                type: "normal",
                resources: [images.ILABE.normal1],
            },
        ],
    },
    ILABO: {
        id: "ILABO",
        build: "ingenieria",
        floor: "1",
        number: "LAB-OBRAS",
        show: true,
        type: ClassroomTypes.LAB,
        resources: [
            {
                type: "normal",
                resources: [images.ILABO.normal1],
            },
        ],
    },
    ILABP: {
        id: "ILABP",
        build: "ingenieria",
        floor: "1",
        number: "LAB-PROTO",
        show: true,
        type: ClassroomTypes.LAB,
        resources: [
            {
                type: "normal",
                resources: [images.ILABP.normal1],
            },
        ],
    },
    IWC0: {
        id: "IWC0",
        build: "ingenieria",
        floor: "0",
        number: "WC-0",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "normalM1",
                resources: [images.misc.ladder, images.IWC0.NormalM1],
            },
            {
                type: "normalW1",
                resources: [images.misc.ladder, images.IWC0.NormalW1],
            },
            {
                type: "altM1",
                resources: [images.misc.elevator, images.IWC0.altM1],
            },
            {
                type: "altW1",
                resources: [images.misc.elevator, images.IWC0.altW1],
            },
        ],
    },
    IWC1: {
        id: "IWC1",
        build: "ingenieria",
        floor: "1",
        number: "WC-1",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "M1",
                resources: [images.IWC1.M1],
            },
            {
                type: "W1",
                resources: [images.IWC1.W1],
            },
        ],
    },
    IWC2: {
        id: "IWC2",
        build: "ingenieria",
        floor: "2",
        number: "WC-2",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "normalM1",
                resources: [images.misc.ladder, images.IWC2.normalM1],
            },
            {
                type: "normalW1",
                resources: [images.misc.ladder, images.IWC2.normalW1],
            },
            {
                type: "altM1",
                resources: [images.misc.elevator, images.IWC2.altM1],
            },
            {
                type: "altW1",
                resources: [images.misc.elevator, images.IWC2.altW1],
            },
        ],
    }
};
