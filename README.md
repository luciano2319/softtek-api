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

6. Actualizar los modelos de prisma
```
npx prisma migrate dev --name initial
```

7. Actualizar prisma cli
```
npx prisma generate
```

8. Ejecutar la aplicación en dev:
```
npm run start:dev
```

9. Ejecutar la semilla para construir los planetas, será importante para crear personas
```
http://localhost:3000/api/seed
```

10. Ejecutar las pruebas unitarias con el comando:
```
npm run test:watch
```

> [!IMPORTANT]
> La semilla eliminará todos los registros de personajes y cargará 10 planetas cuyo códigos empiezan en 1 y termina en 10, lo cuál nos servirá para la inserción de personas

# Ejecutar en producción
1. Instalar dependencias, ejecutar la migración y generació del cliente de *Prisma* y levantar el proyecto.
2. Tener instalado y configurado __aws cli__
3. Tener instalado y configurado el cliente de __serverless__
4. Ejecutar el build de producción
```
npm run build
```
5. Probar localmente ejecutando el comando
```
serverless offline
```
5.1. Comentar la configuración de la VPC en el archivo __serverles.yml__, en la sección de *provider* y *functions*
6. Realizar el despliegue en AWS con el comando
```
serverless deploy
```