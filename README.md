# TS-Things

TypeScript Things

# Instrucciones:

- inicial:
  - en la carpeta: $ tsc
  - para cada archivo a probar: node "./dist/archivo.js"
- webpack:
  - en la carpeta: $ npm run build (solo si se quiere generar los archivos)
  - en la carpeta: $ npm run dev (para levantar un server en localhost:9000 con el build incluido)
  - abrir en el navegador

## Typescript

- Lenguaje de Programación Tipado
- Lenguaje de Alto Nivel
- Genera como resultado código Javascript

### ¿Por qué usar TS?

- POO
- Potencia tu código JS
- Mayor Productividad
- Poderoso sistema de tipos
- Compila a ES5, ES6, y más
- Proyecto muy activo
- Open Source
- Actualizaciones periódicas
- Comunidad creciente
- Para Backend/Frontend

## Instalación

#### N

Se puede instalar el paquete 'n' para administrar diferentes versiones de NodeJS
https://www.npmjs.com/package/n

#### NVM

Para administrar las versiones de npm se puede usar NVM

```
nvm list
nvm use v10.16.3
```

#### TSC:

Instalación del compilador de TypeScript

```
npm install -g typescript
tsc -v
```

#### Solución al problema del EACCES

- [Cambiar directorio por default](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally#manually-change-npms-default-directory)
- [Usar NPX para paquete globales](https://www.npmjs.com/package/npx)

#### Usar TS-Node

TS-Node puede ejecutar código de TS en Node sin pre-compilar

```
npm install -g ts-node
ts-node example.ts

# con npx
npx ts-node example.ts
```

## Uso del TSC

```
# Para transformar un archivo
tsc example.ts

# Para hacerle seguimiento al archivo
tsc --watch example.ts

# Para crear el archivo de configuración de TS
tsc --init
```

## Configuración

- (opciones)[https://www.typescriptlang.org/tsconfig]
- Se puede especificar el uso del archivo

```
# busca la configuración más cercana
tsc
# agregar un archivo de configuración
tsc -init

# Especifica un directorio que contiene la configuración
tsc --project carpeta01

# Saltear configuración y compilar un archivo
tsc archivo.ts

# Watch: se queda atento a los cambios
tsc archivo.ts --watch

```

### opciones del compilador

```
--noImplicitAny: no deja pasar los tipo any
--target: versión de salida
```

[Más opciones](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

## Tipado

- Explicito: definirlo en la sintaxis

```
nombreVariable : TipoDato
```

- Inferido: dejar que TS deduzca el tipo

```
nombreVariable = valor
```

## Tipos

Todos los tipos en TS son subtipos de "any":

- Tipos primitivos: boolean, number, string, enum, void (ausencia de valor de retorno)
- Tipos de objetos: class, interface, array, literals(todo lo que no sea primitivo)
- Tipos de parametros
- null/undefined

### Any y unknown

Any es un tipo que puede ser usado expresamente para

- Una propiedad que no existe un tipo
- usarlo para una función
- un método que solo devuelve un tipo string
- Recordar que con 'any' se pierde la seguridad del tipo

Unknown es el tipo desconocido para propiedades que no puedes acceder o formas en las cuales no puedes llamarlas o construirlas.

Any y unknown son bastantes parecidos, solo que unknown genera un error de compilación y any recién evalúa en tiempo de ejecución

## Principio de responsabilidad única

Un archivo debería tener un propósito o responsabilidad única:

- definir una clase
- definir una interfaz
- definir un enumerado
- etc.
  Esto mejora la legibilidad del código, facilita su lectura, testing y mantenimiento.

## Estrategia de resolución de Módulos

Se puede configurar en el archivo de tsconfig.json

```
"module": "commonjs",
```

hay dos tipos de maneras de llamar a un módulo

```
import {Picture} from './picture' // Import relativo
import {Picture} from 'picture' // Import no-relativo
```

Hay dos estrategias:

- classic: Módulos (AMD, System, ES2015), Poco configurable:
  Para relativo:
  - busca un archivo con ese nombre con extensión (ts, .d.ts).
    Para no relativo:
  - busca un archivo con ese nombre con extensión (ts, .d.ts).
  - Sino lo encuentra sube un directorio y así sucesivamente
- node: Módulos (CommonJS, UMD), Más configurable
  Para relativo:
  - busca un archivo con extensión (ts, tsx, .d.ts)
  - busca a los typings en package.json
  - busca en un archivo index(.ts, .tsx, .d.ts)
    Para no relativo:
  - busca en node_modules un archivo con (ts, tsx, .d.ts)
  - busca en node_modules un archivo package.json
  - busca en node_modules un archivo index(.ts, .tsx, .d.ts)
  - sube un directorio
