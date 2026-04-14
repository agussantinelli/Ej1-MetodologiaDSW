<h1 align="center">🧮 Calculadora Interactiva – TypeScript</h1>

<div align="center">

  <a href="https://github.com/agussantinelli/Ej1-MetodologiaDSW" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/💻%20Repo%20Proyecto-TypeScript%20%7C%20Node.js-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="Repo Project"/>
  </a>

  <a href="https://github.com/agussantinelli" target="_blank">
    <img src="https://img.shields.io/badge/👤%20Agustín%20Santinelli-agussantinelli-000000?style=for-the-badge&logo=github&logoColor=white" alt="Agus"/>
  </a>

</div>

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-Lenguaje-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/Vitest-Testing-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest Badge"/>
  <img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Badge"/>
  <img src="https://img.shields.io/badge/npm-Package%20Manager-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm Badge"/>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Copyright-All_Rights_Reserved-red?style=for-the-badge&logo=copyright&logoColor=white" alt="Copyright Badge"/>
</div>
<hr/>

<h2>🎯 Objetivo del proyecto</h2>

<p>
  Este proyecto fue desarrollado como parte de la cátedra de <strong>Metodologías Ágiles</strong>. El objetivo principal es demostrar la implementación de una <strong>librería de lógica matemática</strong> (Service Layer) consumida por una interfaz de consola interactiva, aplicando herramientas modernas de desarrollo y pruebas unitarias automáticas.
</p>

<p>
  La aplicación permite realizar operaciones aritméticas básicas (Suma, Resta, Multiplicación y División) a través de una experiencia de usuario fluida en la terminal, incluyendo validaciones de datos y un sistema de navegación por menú numérico.
</p>

<hr/>

<h2>🧱 Stack tecnológico</h2>

<table>
  <thead>
    <tr>
      <th align="left">Componente</th>
      <th align="left">Tecnología</th>
      <th align="left">Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Lenguaje</strong></td>
      <td>TypeScript</td>
      <td>Tipado estático para garantizar la robustez de las operaciones matemáticas.</td>
    </tr>
    <tr>
      <td><strong>Runtime</strong></td>
      <td>Node.js</td>
      <td>Entorno de ejecución para la aplicación de consola.</td>
    </tr>
    <tr>
      <td><strong>Testing</strong></td>
      <td>Vitest</td>
      <td>Framework de Unit Testing ultrarrápido compatible con TypeScript.</td>
    </tr>
    <tr>
      <td><strong>Dev Tooling</strong></td>
      <td>ts-node-dev</td>
      <td>Servidor de desarrollo con recarga automática para una iteración rápida.</td>
    </tr>
    <tr>
      <td><strong>Interface</strong></td>
      <td>Readline Promises</td>
      <td>Manejo de entrada/salida asíncrona en la terminal.</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>📄 Contenido y funcionalidades</h2>

<h3>🎮 Interfaz de Consola</h3>
<ul>
  <li><strong>Entrada Dinámica:</strong> Lectura de números y operaciones directamente del usuario.</li>
  <li><strong>Menú Numérico:</strong> Selección de operaciones mediante identificadores simplificados (1-4).</li>
  <li><strong>Bucle de Ejecución:</strong> Opción de continuar o finalizar tras cada operación (S/N).</li>
  <li><strong>UX:</strong> Limpieza de pantalla dinámica para una navegación clara.</li>
</ul>

<h3>🧪 Unit Testing (Calidad de Software)</h3>
<ul>
  <li>Pruebas unitarias exhaustivas sobre el <code>CalculatorService</code>.</li>
  <li>Validación de <strong>Suma, Resta, Multiplicación y División</strong>.</li>
  <li>Manejo de <strong>Casos Críticos</strong>: División por cero y operaciones inexistentes.</li>
  <li>Arquitectura testeadora modular en <code>src/tests/</code>.</li>
</ul>

<hr/>

<h2>🧩 Arquitectura del Proyecto</h2>

<ul>
  <li><strong>Service Layer:</strong> Lógica de negocio aislada en <code>src/services/</code>.</li>
  <li><strong>UI Layer (Console):</strong> Manejo de interacciones en <code>src/app.ts</code>.</li>
  <li><strong>Testing Suite:</strong> Pruebas localizadas en <code>src/tests/</code>.</li>
</ul>

<hr/>

<h2>📁 Estructura del Proyecto</h2>

<pre><code>Ej1-MetodologiaDSW/
├── src/
│   ├── services/       # Lógica de cálculo (CalculatorService)
│   ├── tests/          # Pruebas unitarias (Vitest)
│   └── app.ts          # Punto de entrada interactivo
├── .gitignore
├── package.json        # Gestión de scripts y dependencias
├── tsconfig.json       # Configuración avanzada de TypeScript
└── README.md           # Documentación principal
</code></pre>

<hr/>

<h2>🚀 Puesta en marcha</h2>

<pre><code># Instalar dependencias
npm install

# Iniciar modo desarrollo (interactivo)
npm run dev

# Ejecutar tests unitarios
npm test
</code></pre>

<hr />

<h2>📬 Contacto</h2>

<div align="center">
  
  <img src="https://img.shields.io/badge/Autor-Agustín%20Santinelli-2b3137?style=for-the-badge&logo=person&logoColor=white" alt="Autor"/>

  <a href="https://github.com/agussantinelli" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-@agussantinelli-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>

</div>