# 📊 Guía de Despliegue Backend en Google Apps Script (Web App)

Esta guía te permite desplegar en **1 minuto** un backend 100% gratuito utilizando **Google Sheets** y **Google Apps Script** para recibir las inscripciones a la Feria de Proyectos del Día 3 del evento **IINNOA 2026**.

---

## 🛠️ Pasos para la Configuración

1. **Crear la Hoja de Cálculo**:
   - Ingresa a [Google Sheets](https://sheets.google.com) y crea una nueva hoja titulada **"Inscripciones IINNOA 2026"**.

2. **Abrir el Editor de Código**:
   - En el menú superior de Google Sheets, haz clic en **Extensiones** ➔ **Apps Script**.

3. **Pegar el Código**:
   - Borra el contenido por defecto del archivo `Code.gs` y pega todo el código del archivo [`Code.gs`](Code.gs).

4. **Publicar como Web App**:
   - En la esquina superior derecha, haz clic en el botón azul **Desplegar** (Deploy) ➔ **Nuevo despliegue** (New deployment).
   - Haz clic en el ícono de engranaje ⚙️ a la izquierda de "Seleccionar tipo" y elige **Aplicación web** (Web app).
   - Configura los siguientes parámetros:
     - **Descripción**: `Backend Formulario Feria IINNOA 2026`
     - **Ejecutar como**: `Tu cuenta (tu_email@gmail.com)`
     - **Quién tiene acceso**: **`Cualquier persona` (Anyone)** *(¡Muy importante para que la web de Angular pueda enviar datos!)*.

5. **Autorizar Permisos**:
   - Haz clic en **Desplegar**.
   - Google te pedirá autorizar los permisos. Elige tu cuenta ➔ *Avanzado* ➔ *Ir a Proyecto (no seguro)* ➔ *Permitir*.

6. **Copiar la URL Web App**:
   - Copia la **URL de la aplicación web** (tendrá una forma parecida a `https://script.google.com/macros/s/AKfycbx.../exec`).

7. **Vincular en Angular**:
   - Pega esta URL en el archivo de configuración del frontend:
     `innoa-app/src/app/services/google-apps-script.service.ts` (en la variable `webAppUrl`).

¡Y listo! Cada proyecto inscrito desde la web de Angular se guardará automáticamente como una fila en tu planilla de Google Sheets.
