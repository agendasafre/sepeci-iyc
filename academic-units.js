(function exposeAcademicUnits(globalScope) {
  const academicUnits = [
    { id: "facultad-ingenieria", name: "Facultad de Ingeniería" },
    {
      id: "facultad-ciencias-exactas",
      name: "Facultad de Ciencias Exactas, Físicas y Naturales",
    },
    {
      id: "facultad-filosofia",
      name: "Facultad de Filosofía, Humanidades y Artes",
    },
    { id: "facultad-ciencias-sociales", name: "Facultad de Ciencias Sociales" },
    {
      id: "facultad-arquitectura",
      name: "Facultad de Arquitectura, Urbanismo y Diseño",
    },
    {
      id: "escuela-salud",
      name: "Escuela Universitaria de Ciencias de la Salud",
    },
    {
      id: "ipu-comercio",
      name: 'IPU - Escuela de Comercio "Libertador Gral. San Martín"',
    },
    {
      id: "ipu-industrial",
      name: 'IPU - Escuela Industrial "Domingo F. Sarmiento"',
    },
    {
      id: "ipu-central",
      name: 'IPU - Colegio Central Universitario "Mariano Moreno"',
    },
    { id: "otra-unidad-academica", name: "Otra unidad académica" },
  ];

  if (globalScope) {
    globalScope.ACADEMIC_UNITS = academicUnits;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { ACADEMIC_UNITS: academicUnits };
  }
})(typeof window !== "undefined" ? window : globalThis);
