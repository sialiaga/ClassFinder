export const ClassroomTypes = {
    WC: "wc",
    CLASS: "class",
    LAB: "laboratory",
    OTHER: "other",
    CAFE: "cafe",
} as const; // 'as const' asegura que los valores sean literales.

export type ClassroomType = typeof ClassroomTypes[keyof typeof ClassroomTypes];

type ResourceType = {
    type: string;       // Tipo de recurso (normal, alternativa, etc.)
    resources: any[]; // Array de recursos asociados a este tipo
};

export type Classroom = {
    id: string;            // ID de la sala
    build: string;         // Edificio
    floor: string;         // Piso
    number: string;        // Número de la sala
    show: boolean;
    title?: Lenguage;
    resources: ResourceType[]; // Array de tipos de recursos
    type: ClassroomType;
};

export type Lenguage = {
    [key: string]: string; // Permite claves de idioma como 'es', 'en', etc.
};

// Tipo de classrooms que es un objeto donde la clave es el ID de la sala y el valor es un Classroom
export type Classrooms = Record<string, Classroom>;