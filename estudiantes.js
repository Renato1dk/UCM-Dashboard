// base de datos falsa: ahora cada estudiante tiene su propio arreglo de ramos adentro
// esto es como un arreglo de structs, donde cada struct tiene otro arreglo de structs adentro (notas)
const estudiantes = [
  {
    nombre: "Renato Vergara",
    correo: "renato.vergara.01@alumnos.ucm.cl",
    ramos: [
      {
        nombre: "Cálculo I",
        clases_totales: 48,
        clases_asistidas: 38,
        notas: [
          { evaluacion: "Taller N1",   nota: 2.3, porcentaje_interno: 20, peso_final: 20 },
          { evaluacion: "Certamen N1", nota: 4.5, porcentaje_interno: 80, peso_final: 20 },
          { evaluacion: "Taller N2",   nota: 5.2, porcentaje_interno: 20, peso_final: 20 },
          { evaluacion: "Certamen N2", nota: 4.5, porcentaje_interno: 80, peso_final: 20 },
          { evaluacion: "Taller N3",   nota: 6.0, porcentaje_interno: 20, peso_final: 30 },
          { evaluacion: "Certamen N3", nota: 5.0, porcentaje_interno: 80, peso_final: 30 },
          { evaluacion: "Taller N4",   nota: 4.0, porcentaje_interno: 20, peso_final: 30 },
          { evaluacion: "Certamen N4", nota: 3.8, porcentaje_interno: 80, peso_final: 30 }
        ]
      },
      {
        nombre: "Álgebra",
        clases_totales: 48,
        clases_asistidas: 40,
        notas: [
          { evaluacion: "Taller N1",   nota: 4.8, porcentaje_interno: 30, peso_final: 15 },
          { evaluacion: "Certamen N1", nota: 4.2, porcentaje_interno: 70, peso_final: 15 },
          { evaluacion: "Taller N2",   nota: 5.1, porcentaje_interno: 30, peso_final: 15 },
          { evaluacion: "Certamen N2", nota: 3.7, porcentaje_interno: 70, peso_final: 15 },
          { evaluacion: "Taller N3",   nota: 4.5, porcentaje_interno: 30, peso_final: 20 },
          { evaluacion: "Certamen N3", nota: 4.8, porcentaje_interno: 70, peso_final: 20 },
          { evaluacion: "Taller N4",   nota: 5.0, porcentaje_interno: 30, peso_final: 20 },
          { evaluacion: "Certamen N4", nota: 4.1, porcentaje_interno: 70, peso_final: 20 },
          { evaluacion: "Taller N5",   nota: 4.7, porcentaje_interno: 30, peso_final: 30 },
          { evaluacion: "Certamen N5", nota: 5.2, porcentaje_interno: 70, peso_final: 30 }
        ]
      },
      {
        nombre: "Inglés",
        clases_totales: 32,
        clases_asistidas: 28,
        notas: [
          { evaluacion: "Evaluación 1", nota: 5.5, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 2", nota: 4.8, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 3", nota: 5.2, porcentaje_interno: 100, peso_final: 40 }
        ]
      },
      {
        nombre: "Introducción a la Ingeniería",
        clases_totales: 32,
        clases_asistidas: 30,
        notas: [
          { evaluacion: "Evaluación 1", nota: 5.0, porcentaje_interno: 100, peso_final: 15 },
          { evaluacion: "Evaluación 2", nota: 4.5, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 3", nota: 4.8, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 4", nota: 5.3, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 5", nota: 4.2, porcentaje_interno: 100, peso_final: 15 }
        ]
      },
      {
        nombre: "Introducción a la Computación",
        clases_totales: 32,
        clases_asistidas: 29,
        notas: [
          { evaluacion: "Evaluación 1", nota: 5.8, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 2", nota: 5.2, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 3", nota: 4.9, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 4", nota: 5.5, porcentaje_interno: 100, peso_final: 30 }
        ]
      }
    ]
  },
  {
    nombre: "Benjamin Sanhueza",
    correo: "benjamin.sanhueza@alumnos.ucm.cl",
    ramos: [
      {
        nombre: "Cálculo I",
        clases_totales: 48,
        clases_asistidas: 44,
        notas: [
          { evaluacion: "Taller N1",   nota: 5.0, porcentaje_interno: 20, peso_final: 20 },
          { evaluacion: "Certamen N1", nota: 5.5, porcentaje_interno: 80, peso_final: 20 },
          { evaluacion: "Taller N2",   nota: 4.8, porcentaje_interno: 20, peso_final: 20 },
          { evaluacion: "Certamen N2", nota: 5.0, porcentaje_interno: 80, peso_final: 20 },
          { evaluacion: "Taller N3",   nota: 5.5, porcentaje_interno: 20, peso_final: 30 },
          { evaluacion: "Certamen N3", nota: 6.0, porcentaje_interno: 80, peso_final: 30 },
          { evaluacion: "Taller N4",   nota: 5.2, porcentaje_interno: 20, peso_final: 30 },
          { evaluacion: "Certamen N4", nota: 5.8, porcentaje_interno: 80, peso_final: 30 }
        ]
      },
      {
        nombre: "Álgebra",
        clases_totales: 48,
        clases_asistidas: 46,
        notas: [
          { evaluacion: "Taller N1",   nota: 5.5, porcentaje_interno: 30, peso_final: 15 },
          { evaluacion: "Certamen N1", nota: 5.0, porcentaje_interno: 70, peso_final: 15 },
          { evaluacion: "Taller N2",   nota: 5.8, porcentaje_interno: 30, peso_final: 15 },
          { evaluacion: "Certamen N2", nota: 5.2, porcentaje_interno: 70, peso_final: 15 },
          { evaluacion: "Taller N3",   nota: 5.0, porcentaje_interno: 30, peso_final: 20 },
          { evaluacion: "Certamen N3", nota: 5.5, porcentaje_interno: 70, peso_final: 20 },
          { evaluacion: "Taller N4",   nota: 6.0, porcentaje_interno: 30, peso_final: 20 },
          { evaluacion: "Certamen N4", nota: 5.7, porcentaje_interno: 70, peso_final: 20 },
          { evaluacion: "Taller N5",   nota: 5.9, porcentaje_interno: 30, peso_final: 30 },
          { evaluacion: "Certamen N5", nota: 6.2, porcentaje_interno: 70, peso_final: 30 }
        ]
      },
      {
        nombre: "Inglés",
        clases_totales: 32,
        clases_asistidas: 30,
        notas: [
          { evaluacion: "Evaluación 1", nota: 6.0, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 2", nota: 5.8, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 3", nota: 6.2, porcentaje_interno: 100, peso_final: 40 }
        ]
      },
      {
        nombre: "Introducción a la Ingeniería",
        clases_totales: 32,
        clases_asistidas: 31,
        notas: [
          { evaluacion: "Evaluación 1", nota: 5.5, porcentaje_interno: 100, peso_final: 15 },
          { evaluacion: "Evaluación 2", nota: 6.0, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 3", nota: 5.8, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 4", nota: 6.2, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 5", nota: 5.9, porcentaje_interno: 100, peso_final: 15 }
        ]
      },
      {
        nombre: "Introducción a la Computación",
        clases_totales: 32,
        clases_asistidas: 30,
        notas: [
          { evaluacion: "Evaluación 1", nota: 6.2, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 2", nota: 5.9, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 3", nota: 6.0, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 4", nota: 6.5, porcentaje_interno: 100, peso_final: 30 }
        ]
      }
    ]
  },
  {
    nombre: "Amaro Villalobos",
    correo: "amaro.villalobos@alumnos.ucm.cl",
    ramos: [
      {
        nombre: "Cálculo I",
        clases_totales: 48,
        clases_asistidas: 30,
        notas: [
          { evaluacion: "Taller N1",   nota: 3.0, porcentaje_interno: 20, peso_final: 20 },
          { evaluacion: "Certamen N1", nota: 2.8, porcentaje_interno: 80, peso_final: 20 },
          { evaluacion: "Taller N2",   nota: 3.5, porcentaje_interno: 20, peso_final: 20 },
          { evaluacion: "Certamen N2", nota: 3.2, porcentaje_interno: 80, peso_final: 20 },
          { evaluacion: "Taller N3",   nota: 4.0, porcentaje_interno: 20, peso_final: 30 },
          { evaluacion: "Certamen N3", nota: 3.5, porcentaje_interno: 80, peso_final: 30 },
          { evaluacion: "Taller N4",   nota: 3.8, porcentaje_interno: 20, peso_final: 30 },
          { evaluacion: "Certamen N4", nota: 3.0, porcentaje_interno: 80, peso_final: 30 }
        ]
      },
      {
        nombre: "Álgebra",
        clases_totales: 48,
        clases_asistidas: 32,
        notas: [
          { evaluacion: "Taller N1",   nota: 3.5, porcentaje_interno: 30, peso_final: 15 },
          { evaluacion: "Certamen N1", nota: 3.0, porcentaje_interno: 70, peso_final: 15 },
          { evaluacion: "Taller N2",   nota: 3.8, porcentaje_interno: 30, peso_final: 15 },
          { evaluacion: "Certamen N2", nota: 3.2, porcentaje_interno: 70, peso_final: 15 },
          { evaluacion: "Taller N3",   nota: 4.0, porcentaje_interno: 30, peso_final: 20 },
          { evaluacion: "Certamen N3", nota: 3.5, porcentaje_interno: 70, peso_final: 20 },
          { evaluacion: "Taller N4",   nota: 3.6, porcentaje_interno: 30, peso_final: 20 },
          { evaluacion: "Certamen N4", nota: 3.0, porcentaje_interno: 70, peso_final: 20 },
          { evaluacion: "Taller N5",   nota: 3.9, porcentaje_interno: 30, peso_final: 30 },
          { evaluacion: "Certamen N5", nota: 3.7, porcentaje_interno: 70, peso_final: 30 }
        ]
      },
      {
        nombre: "Inglés",
        clases_totales: 32,
        clases_asistidas: 20,
        notas: [
          { evaluacion: "Evaluación 1", nota: 4.0, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 2", nota: 3.8, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 3", nota: 4.2, porcentaje_interno: 100, peso_final: 40 }
        ]
      },
      {
        nombre: "Introducción a la Ingeniería",
        clases_totales: 32,
        clases_asistidas: 25,
        notas: [
          { evaluacion: "Evaluación 1", nota: 4.0, porcentaje_interno: 100, peso_final: 15 },
          { evaluacion: "Evaluación 2", nota: 3.5, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 3", nota: 3.8, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 4", nota: 4.2, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 5", nota: 3.6, porcentaje_interno: 100, peso_final: 15 }
        ]
      },
      {
        nombre: "Introducción a la Computación",
        clases_totales: 32,
        clases_asistidas: 27,
        notas: [
          { evaluacion: "Evaluación 1", nota: 4.5, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 2", nota: 3.8, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 3", nota: 4.0, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 4", nota: 4.2, porcentaje_interno: 100, peso_final: 30 }
        ]
      }
    ]
  },
  {
    nombre: "Francisco Vasques",
    correo: "francisco.vasques@alumnos.ucm.cl",
    ramos: [
      {
        nombre: "Cálculo I",
        clases_totales: 48,
        clases_asistidas: 42,
        notas: [
          { evaluacion: "Taller N1",   nota: 4.0, porcentaje_interno: 20, peso_final: 20 },
          { evaluacion: "Certamen N1", nota: 4.2, porcentaje_interno: 80, peso_final: 20 },
          { evaluacion: "Taller N2",   nota: 4.5, porcentaje_interno: 20, peso_final: 20 },
          { evaluacion: "Certamen N2", nota: 4.0, porcentaje_interno: 80, peso_final: 20 },
          { evaluacion: "Taller N3",   nota: 4.8, porcentaje_interno: 20, peso_final: 30 },
          { evaluacion: "Certamen N3", nota: 4.5, porcentaje_interno: 80, peso_final: 30 },
          { evaluacion: "Taller N4",   nota: 4.2, porcentaje_interno: 20, peso_final: 30 },
          { evaluacion: "Certamen N4", nota: 4.6, porcentaje_interno: 80, peso_final: 30 }
        ]
      },
      {
        nombre: "Álgebra",
        clases_totales: 48,
        clases_asistidas: 38,
        notas: [
          { evaluacion: "Taller N1",   nota: 4.2, porcentaje_interno: 30, peso_final: 15 },
          { evaluacion: "Certamen N1", nota: 4.0, porcentaje_interno: 70, peso_final: 15 },
          { evaluacion: "Taller N2",   nota: 4.5, porcentaje_interno: 30, peso_final: 15 },
          { evaluacion: "Certamen N2", nota: 3.8, porcentaje_interno: 70, peso_final: 15 },
          { evaluacion: "Taller N3",   nota: 4.0, porcentaje_interno: 30, peso_final: 20 },
          { evaluacion: "Certamen N3", nota: 4.3, porcentaje_interno: 70, peso_final: 20 },
          { evaluacion: "Taller N4",   nota: 4.5, porcentaje_interno: 30, peso_final: 20 },
          { evaluacion: "Certamen N4", nota: 4.0, porcentaje_interno: 70, peso_final: 20 },
          { evaluacion: "Taller N5",   nota: 4.2, porcentaje_interno: 30, peso_final: 30 },
          { evaluacion: "Certamen N5", nota: 4.5, porcentaje_interno: 70, peso_final: 30 }
        ]
      },
      {
        nombre: "Inglés",
        clases_totales: 32,
        clases_asistidas: 26,
        notas: [
          { evaluacion: "Evaluación 1", nota: null, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 2", nota: 1.5, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 3", nota: 5.0, porcentaje_interno: 100, peso_final: 40 }
        ]
      },
      {
        nombre: "Introducción a la Ingeniería",
        clases_totales: 32,
        clases_asistidas: 28,
        notas: [
          { evaluacion: "Evaluación 1", nota: 4.5, porcentaje_interno: 100, peso_final: 15 },
          { evaluacion: "Evaluación 2", nota: 4.2, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 3", nota: 4.6, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 4", nota: 4.8, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 5", nota: 4.3, porcentaje_interno: 100, peso_final: 15 }
        ]
      },
      {
        nombre: "Introducción a la Computación",
        clases_totales: 32,
        clases_asistidas: 27,
        notas: [
          { evaluacion: "Evaluación 1", nota: 4.6, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 2", nota: 4.4, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 3", nota: 4.8, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 4", nota: 5.9, porcentaje_interno: 100, peso_final: 30 }
        ]
      }
    ]
  },
  {
    nombre: "Luis Torrejon",
    correo: "luis.torrejon@alumnos.ucm.cl",
    ramos: [
      {
        nombre: "Cálculo I",
        clases_totales: 48,
        clases_asistidas: 42,
        notas: [
          { evaluacion: "Taller N1",   nota: 2.0, porcentaje_interno: 20, peso_final: 20 },
          { evaluacion: "Certamen N1", nota: 4.2, porcentaje_interno: 80, peso_final: 20 },
          { evaluacion: "Taller N2",   nota: 2.5, porcentaje_interno: 20, peso_final: 20 },
          { evaluacion: "Certamen N2", nota: 1.9, porcentaje_interno: 80, peso_final: 20 },
          { evaluacion: "Taller N3",   nota: 4.8, porcentaje_interno: 20, peso_final: 30 },
          { evaluacion: "Certamen N3", nota: 4.7, porcentaje_interno: 80, peso_final: 30 },
          { evaluacion: "Taller N4",   nota: 4.3, porcentaje_interno: 20, peso_final: 30 },
          { evaluacion: "Certamen N4", nota: 4.5, porcentaje_interno: 80, peso_final: 30 }
        ]
      },
      {
        nombre: "Álgebra",
        clases_totales: 48,
        clases_asistidas: 38,
        notas: [
          { evaluacion: "Taller N1",   nota: 4.2, porcentaje_interno: 30, peso_final: 15 },
          { evaluacion: "Certamen N1", nota: 4.0, porcentaje_interno: 70, peso_final: 15 },
          { evaluacion: "Taller N2",   nota: 4.5, porcentaje_interno: 30, peso_final: 15 },
          { evaluacion: "Certamen N2", nota: 3.8, porcentaje_interno: 70, peso_final: 15 },
          { evaluacion: "Taller N3",   nota: 4.0, porcentaje_interno: 30, peso_final: 20 },
          { evaluacion: "Certamen N3", nota: 4.3, porcentaje_interno: 70, peso_final: 20 },
          { evaluacion: "Taller N4",   nota: 4.5, porcentaje_interno: 30, peso_final: 20 },
          { evaluacion: "Certamen N4", nota: 4.0, porcentaje_interno: 70, peso_final: 20 },
          { evaluacion: "Taller N5",   nota: 4.2, porcentaje_interno: 30, peso_final: 30 },
          { evaluacion: "Certamen N5", nota: 4.5, porcentaje_interno: 70, peso_final: 30 }
        ]
      },
      {
        nombre: "Inglés",
        clases_totales: 32,
        clases_asistidas: 26,
        notas: [
          { evaluacion: "Evaluación 1", nota: 6.8, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 2", nota: 6.5, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 3", nota: 6.6, porcentaje_interno: 100, peso_final: 40 }
        ]
      },
      {
        nombre: "Introducción a la Ingeniería",
        clases_totales: 32,
        clases_asistidas: 28,
        notas: [
          { evaluacion: "Evaluación 1", nota: 4.5, porcentaje_interno: 100, peso_final: 15 },
          { evaluacion: "Evaluación 2", nota: 4.2, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 3", nota: 4.6, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 4", nota: 4.8, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 5", nota: 7.0, porcentaje_interno: 100, peso_final: 15 }
        ]
      },
      {
        nombre: "Introducción a la Computación",
        clases_totales: 32,
        clases_asistidas: 27,
        notas: [
          { evaluacion: "Evaluación 1", nota: 5.8, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 2", nota: 5.5, porcentaje_interno: 100, peso_final: 20 },
          { evaluacion: "Evaluación 3", nota: 2.6, porcentaje_interno: 100, peso_final: 30 },
          { evaluacion: "Evaluación 4", nota: 6.0, porcentaje_interno: 100, peso_final: 30 }
        ]
      }
    ]
  }
];
