<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener NEST CLI instalado
```
npm i -g @nestjs/cli
```
4. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

5. Llenar las variables de entorno definidas en el __.env__

6. Ejecutar la aplicación en dev:
```
npm run start:dev
```

7. Ejecutar la semilla para construir los planetas, será importante para crear personas
```
http://localhost:3000/api/seed
```

> [!IMPORTANT]
> La semilla cargará 10 planetas cuyo código empieza en 1 y termina en 10, lo cuál nos servirá para la inserción de personas

# Ejecutar en producción