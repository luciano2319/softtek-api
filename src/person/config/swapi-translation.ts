const personTranslation = {
    id: "codigo",
    name: "nombre",
    height: "altura",
    mass: "masa",
    hair_color: "color_pelo",
    skin_color: "color_piel",
    eye_color: "color_ojos",
    birth_year: "año_nacimiento",
    gender: "genero",
    createdAt: "creado",
    updatedAt: "actualizado",
}

const planetTranslation = {
    name: "nombre",
    rotation_period: "periodo_rotacion",
    orbital_period: "periodo_orbital",
    diameter: "diametro",
    climate: "clima",
    gravity: "gravedad",
    terrain: "terreno",
    surface_water: "superficie_agua",
    population: "poblacion",
  };

export const translatePerson = (person) => {
    let translatedPerson = {};
    for (const key in person) {
        const translatedKey = personTranslation[key];
        if (translatedKey) {
            translatedPerson[translatedKey] = person[key];
        }
    }

    if (person.Planet) {
        Object.assign(translatedPerson, { Planeta: {} });
        for (const planetKey in person.Planet) {
          const translatedPlanetKey = planetTranslation[planetKey];
          if (translatedPlanetKey) {
            translatedPerson['Planeta'][translatedPlanetKey] = person.Planet[planetKey];
          }
        }
      }

    return translatedPerson;
}