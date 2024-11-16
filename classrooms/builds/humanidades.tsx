import { Classrooms, ClassroomTypes } from "../typesClassrooms";

const images = {
    H101: {
        normal1: require('../../assets/images/humanidades/H101/normal1.gif')
    },
    H103: {
        normal1: require('../../assets/images/humanidades/H103/normal1.gif')
    },
    H104: {
        normal1: require('../../assets/images/humanidades/H104/normal1.gif')
    },
    H105: {
        normal1: require('../../assets/images/humanidades/H105/normal1.gif')
    },
    H107: {
        normal1: require('../../assets/images/humanidades/H107/normal1.gif')
    },
    H108: {
        normal1: require('../../assets/images/humanidades/H108/normal1.gif')
    },
    H109: {
        normal1: require('../../assets/images/humanidades/H109/normal1.gif')
    },
    H116: {
        normal1: require('../../assets/images/humanidades/H116/normal1.gif')
    },
    HCAFE: {
        normal1: require('../../assets/images/humanidades/HCAFE/normal1.gif')
    },
    HWC1: {
        M1: require('../../assets/images/humanidades/HWC1/M1.gif'),
        M2: require('../../assets/images/humanidades/HWC1/M2.gif'),
        W1: require('../../assets/images/humanidades/HWC1/W1.gif'),
        W2: require('../../assets/images/humanidades/HWC1/W2.gif'),
    }
}

export const humanidades: Classrooms = {
    H101: {
        id: "H101",
        build: "humanidades",
        floor: "1",
        number: "01",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [
                    images.H101.normal1
                ]
            }
        ]
    },
    H103: {
        id: "H103",
        build: "humanidades",
        floor: "1",
        number: "03",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [
                    images.H103.normal1
                ]
            }
        ]
    },
    H104: {
        id: "H104",
        build: "humanidades",
        floor: "1",
        number: "04",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [
                    images.H104.normal1
                ]
            }
        ]
    },
    H105: {
        id: "H105",
        build: "humanidades",
        floor: "1",
        number: "05",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [
                    images.H105.normal1
                ]
            }
        ]
    },
    H107: {
        id: "H107",
        build: "humanidades",
        floor: "1",
        number: "07",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [
                    images.H107.normal1
                ]
            }
        ]
    },
    H108: {
        id: "H108",
        build: "humanidades",
        floor: "1",
        number: "08",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [
                    images.H108.normal1
                ]
            }
        ]
    },
    H109: {
        id: "H109",
        build: "humanidades",
        floor: "1",
        number: "09",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [
                    images.H109.normal1
                ]
            }
        ]
    },
    H116: {
        id: "H116",
        build: "humanidades",
        floor: "1",
        number: "16",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [
                    images.H116.normal1
                ]
            }
        ]
    },
    HCAFE: {
        id: "HCAFE",
        build: "humanidades",
        floor: "1",
        number: "CAFE",
        show: true,
        type: ClassroomTypes.CAFE,
        resources: [
            {
                type: "Normal",
                resources: [
                    images.HCAFE.normal1
                ]
            }
        ]
    },
    HWC1: {
        id: "HWC1",
        build: "humanidades",
        floor: "1",
        number: "WC-1",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "M1",
                resources: [
                    images.HWC1.M1
                ]
            },
            {
                type: "M2",
                resources: [
                    images.HWC1.M2
                ]
            },
            {
                type: "W1",
                resources: [
                    images.HWC1.W1
                ]
            },
            {
                type: "W2",
                resources: [
                    images.HWC1.W2
                ]
            },
        ]
    },
}
