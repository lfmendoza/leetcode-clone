# 💻 CodeMaster - LeetCode Clone

Una plataforma de práctica de algoritmos y estructuras de datos inspirada en LeetCode, construida con React, Monaco Editor y Tailwind CSS.

## ✨ Características

### 🔢 Funcionalidades Principales

- **Editor de código integrado** con Monaco Editor (VS Code)
- **Múltiples lenguajes** - JavaScript, Python, Java, C++
- **Ejecución de código en tiempo real** con simulador avanzado
- **Sistema de test cases** automatizado
- **Interfaz dividida** - problema a la izquierda, editor a la derecha
- **Resultados detallados** con tiempo de ejecución y uso de memoria

### 🎨 Interfaz y UX

- **Modo oscuro/claro** completo
- **Diseño responsive** para todos los dispositivos
- **Animaciones suaves** con Framer Motion
- **Navegación intuitiva** entre problemas
- **Filtros avanzados** por dificultad, categoría y etiquetas
- **Búsqueda en tiempo real**

### 📊 Gestión de Problemas

- **Base de datos de problemas** con diferentes niveles
- **Categorías organizadas** (Array, String, Tree, etc.)
- **Estadísticas detalladas** de cada problema
- **Sistema de likes/dislikes**
- **Porcentaje de aceptación**

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 16+
- npm o yarn

### Pasos de instalación

1. **Crear el proyecto:**

```bash
npm create vite@latest codemaster-leetcode-clone -- --template react
cd codemaster-leetcode-clone
```

2. **Instalar dependencias:**

```bash
npm install @monaco-editor/react framer-motion react-icons react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Copiar los archivos del proyecto** (reemplazar los archivos generados)

4. **Ejecutar el proyecto:**

```bash
npm run dev
```

5. **Construir para producción:**

```bash
npm run build
```

## 🌐 Despliegue en Vercel

1. **Conectar repositorio:**

   - Sube el código a GitHub
   - Conecta tu repositorio en [vercel.com](https://vercel.com)

2. **Configuración automática:**
   - Vercel detecta automáticamente Vite
   - No se requiere configuración adicional

## 📁 Estructura del Proyecto

```
codemaster-leetcode-clone/
├── src/
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes reutilizables
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   └── Tabs.jsx
│   │   ├── ProblemList.jsx # Lista de problemas
│   │   └── ProblemDetail.jsx # Detalle y editor
│   ├── data/               # Datos de problemas
│   │   └── problems.js
│   ├── utils/              # Utilidades
│   │   └── codeRunner.js   # Simulador de ejecución
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── public/                 # Archivos estáticos
├── package.json            # Dependencias
├── vite.config.js          # Configuración Vite
└── tailwind.config.js      # Configuración Tailwind
```

## 🎯 Uso de la Aplicación

### Lista de Problemas

1. Navega por la lista de problemas disponibles
2. Filtra por dificultad (Fácil, Medio, Difícil)
3. Busca por nombre o etiquetas
4. Ordena por título, dificultad, aceptación o likes

### Resolver Problemas

1. Haz clic en un problema para abrirlo
2. Lee la descripción, ejemplos y restricciones
3. Selecciona tu lenguaje de programación preferido
4. Escribe tu solución en el editor Monaco
5. Ejecuta el código para ver los resultados
6. Ve los test cases y estadísticas de rendimiento

### Editor de Código

- **Sintaxis highlighting** automático
- **Autocompletado** inteligente
- **Formateo automático** del código
- **Números de línea** y resaltado
- **Múltiples temas** (claro/oscuro)

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS
- **Monaco Editor** - Editor de código (VS Code)
- **Framer Motion** - Animaciones
- **React Router** - Navegación
- **Lucide React** - Iconos

## 📈 Problemas Incluidos

| ID  | Título              | Dificultad | Categoría   | Etiquetas                  |
| --- | ------------------- | ---------- | ----------- | -------------------------- |
| 1   | Two Sum             | Fácil      | Array       | Array, Hash Table          |
| 2   | Add Two Numbers     | Medio      | Linked List | Linked List, Math          |
| 3   | Longest Substring   | Medio      | String      | Hash Table, Sliding Window |
| 4   | Valid Parentheses   | Fácil      | Stack       | String, Stack              |
| 5   | Binary Tree Inorder | Fácil      | Tree        | Tree, DFS                  |

## 🎨 Características del Editor

### Monaco Editor Features

- **IntelliSense** - Autocompletado inteligente
- **Syntax Highlighting** - Resaltado de sintaxis
- **Error Detection** - Detección de errores en tiempo real
- **Code Formatting** - Formateo automático
- **Multiple Cursors** - Edición con múltiples cursores
- **Find & Replace** - Búsqueda y reemplazo
- **Minimap** - Mapa de navegación (deshabilitado por defecto)

### Lenguajes Soportados

- **JavaScript** - Configuración completa con ES6+
- **Python** - Sintaxis highlighting y autocompletado
- **Java** - Soporte para sintaxis Java
- **C++** - Highlighting para C++

## 🔧 Simulador de Ejecución

### Características del CodeRunner

- **Ejecución real de JavaScript** - Evalúa código JS real
- **Simulación para otros lenguajes** - Simula ejecución
- **Test cases automatizados** - Ejecuta múltiples casos de prueba
- **Métricas de rendimiento** - Tiempo y memoria simulados
- **Manejo de errores** - Captura y muestra errores

### Resultados Detallados

- ✅ **Estado de cada test case** (Pasó/Falló)
- ⏱️ **Tiempo de ejecución** en milisegundos
- 💾 **Uso de memoria** en MB
- 🐛 **Mensajes de error** detallados
- 📊 **Resumen general** de todos los tests

## 🎯 Funcionalidades Futuras

### En desarrollo:

- [ ] **Sistema de usuarios** y autenticación
- [ ] **Historial de soluciones** personal
- [ ] **Competencias en tiempo real**
- [ ] **Ranking global** de usuarios
- [ ] **Discusiones** y comentarios
- [ ] **Hints y pistas** para problemas
- [ ] **Favoritos** y listas personales
- [ ] **Progreso y estadísticas** detalladas

### Mejoras técnicas:

- [ ] **Web Workers** para ejecución segura
- [ ] **Backend real** con base de datos
- [ ] **API de ejecución** de código remota
- [ ] **Caché** de resultados
- [ ] **Optimización** de rendimiento

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 🌐 Deploy a Vercel

```bash
# Opción 1: Vercel CLI
npm i -g vercel
vercel

# Opción 2: Conectar repositorio en vercel.com
# Solo sube tu código a GitHub y conecta en vercel.com
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

Creado con ❤️ para la comunidad de desarrolladores

## 🙏 Agradecimientos

- Inspirado en [LeetCode](https://leetcode.com/)
- Editor powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- Iconos por [Lucide](https://lucide.dev/)
- Animaciones con [Framer Motion](https://www.framer.com/motion/)
- Diseño con [Tailwind CSS](https://tailwindcss.com/)

## 🔧 Solución de Problemas

### Problemas comunes:

1. **Error con Monaco Editor:**

   ```bash
   npm install @monaco-editor/react --save
   # Verificar que esté en vite.config.js en optimizeDeps
   ```

2. **Error de dependencias:**

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Problemas con Tailwind:**

   ```bash
   npx tailwindcss init -p --force
   ```

4. **Build fails:**
   ```bash
   npm run build -- --verbose
   ```

### Configuración de desarrollo:

```javascript
// vite.config.js - Configuración recomendada
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@monaco-editor/react"],
  },
});
```

## 📞 Soporte

Si encuentras algún problema o tienes preguntas:

- Crea un issue en GitHub
- Revisa la documentación de Monaco Editor
- Verifica las versiones de las dependencias

## 🎉 Demo en Vivo

🚀 **[Ver Demo](https://tu-demo-url.vercel.app)**

### Screenshots:

**Página Principal:**

- Hero section con call-to-action
- Características principales
- Diseño responsive

**Lista de Problemas:**

- Filtros avanzados
- Búsqueda en tiempo real
- Estadísticas de cada problema

**Editor de Código:**

- Interface dividida
- Monaco Editor integrado
- Resultados de test cases en tiempo real

---

**¡Disfruta programando y mejorando tus habilidades! 🎉**
