# Login Regression Automation

Proyecto de automatización de pruebas de regresión del módulo **Login** desarrollado sobre el portal de pruebas:

https://www.automationexercise.com/

Este proyecto fue implementado utilizando **Cypress** como framework de automatización, aplicando **BDD** con **Cucumber**, el patrón de diseño **Page Object Model (POM)** y buenas prácticas de organización del código para facilitar su mantenimiento y escalabilidad.

---

# Tecnologías utilizadas

- Cypress
- JavaScript
- Node.js
- Cucumber
- Gherkin
- Page Object Model (POM)

---

# Arquitectura del proyecto

El proyecto implementa el patrón **Page Object Model (POM)** con el objetivo de separar la lógica de interacción con la interfaz de usuario de los escenarios definidos en Gherkin.

Esta arquitectura permite:

- Reutilización del código.
- Fácil mantenimiento.
- Separación de responsabilidades.
- Mayor legibilidad de los escenarios.
- Escalabilidad para agregar nuevos casos de prueba.

---

# Estructura del proyecto

```text
login-regression
│
├── cypress
│   │
│   ├── e2e
│   │   ├── features
│   │   │   └── login
│   │   │       └── login.feature
│   │   │
│   │   └── step_definitions
│   │       └── loginSteps.js
│   │
│   ├── fixtures
│   │   └── users.json
│   │
│   ├── pages
│   │   ├── InitialPage.js
│   │   ├── LoginPage.js
│   │   └── HomePage.js
│   │
│   └── support
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

# Descripción de carpetas

## features

Contiene los escenarios escritos en lenguaje Gherkin siguiendo la metodología BDD.

## step_definitions

Implementación de cada uno de los pasos definidos en los archivos `.feature`.

## pages

Implementación del patrón **Page Object Model**, donde se encapsulan los elementos de la interfaz y las acciones sobre cada página.

## fixtures

Contiene la información utilizada durante la ejecución de las pruebas, como usuarios válidos e inválidos.

## support

Carpeta destinada a configuraciones globales de Cypress.

---

# Casos de prueba automatizados

Se automatizaron los siguientes escenarios para el módulo Login:

| Caso de prueba                                    | Estado |
|---------------------------------------------------|--------|
| Login exitoso                                     | ✅ |
| Login con credenciales incorrectas     | ✅ |
| Login con correo vacío                            | ✅ |
| Login con contraseña vacía                        | ✅ |
| Login con formato de correo incorrecto | ✅ |

Todos los escenarios incluyen las respectivas aserciones para validar el comportamiento esperado del sistema.

---

# Buenas prácticas implementadas

- Arquitectura Page Object Model (POM)
- Separación de responsabilidades
- Uso de Fixtures
- Reutilización de Step Definitions
- Escenarios escritos en Gherkin
- Integración con Cucumber
- Uso de aserciones para validar resultados
- Organización modular del proyecto

---

# Pre Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js (versión 18 o superior recomendada)
- npm (incluido con Node.js)
- Git
- Google Chrome (recomendado) o Firefox

Verificar las instalaciones:

```bash
node -v
npm -v
git --version
```
---

# Instalación

Clonar el repositorio

```bash
git clone https://github.com/stark15n/login-regression
```

Ingresar al proyecto

```bash
cd login-regression
```

Instalar dependencias

```bash
npm install
```

---

# Ejecución

## Modo interactivo

```bash
npm run cy:open
```

## Modo Headless

```bash
npm run cy:run
```

o

```bash
npm test
```

---

# Datos de prueba

Los usuarios utilizados durante la automatización se encuentran en:

```text
cypress/fixtures/users.json
```

El proyecto utiliza usuarios válidos e inválidos para ejecutar los diferentes escenarios de Login.

---

# Consideraciones

- Se utilizó Cypress junto con Cucumber para implementar pruebas basadas en comportamiento (BDD).
- Las validaciones correspondientes a mensajes nativos del navegador (HTML5 Validation) no fueron automatizadas, debido a que son controladas por el navegador y no por la aplicación.
- Para estos casos se validó que el usuario permanezca en la página de Login y que el formulario continúe disponible.

---

# Posibles mejoras

Como evolución del proyecto podrían implementarse las siguientes mejoras:

- Parametrización de escenarios mediante **Scenario Outline**.
- Generación de reportes HTML (Mochawesome o Allure).
- Integración con Jenkins o Azure DevOps.
- Ejecución mediante Pipeline CI/CD.
- Uso de variables de entorno para diferentes ambientes.
- Ejecución en múltiples navegadores.

---

# Autor

**Kristofers Coaquira**

QA Automation Engineer