/**
 * GOOGLE APPS SCRIPT - BACKEND INNOA 2026 (FERIA DE PROYECTOS - DÍA 3)
 * 
 * Instrucciones de configuración:
 * 1. Crea una Hoja de Cálculo en Google Sheets (ej: "Inscripciones IINNOA 2026").
 * 2. Ve a Extensiones -> Apps Script.
 * 3. Reemplaza todo el contenido del archivo Code.gs con este código.
 * 4. Haz clic en "Desplegar" -> "Nuevo despliegue".
 * 5. Selecciona Tipo: "Aplicación web" (Web App).
 * 6. En "Ejecutar como": Tu cuenta.
 * 7. En "Quién tiene acceso": "Cualquier persona" (Anyone).
 * 8. Copia la URL del despliegue (Web App URL) y pégala en Angular service / environment.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName('Inscripciones_Feria');

    // Si la hoja no existe, la creamos y añadimos los encabezados
    if (!sheet) {
      sheet = doc.insertSheet('Inscripciones_Feria');
      sheet.appendRow([
        'Fecha y Hora',
        'Título del Proyecto',
        'Categoría',
        'Integrantes',
        'Email de Contacto',
        'Institución',
        'Carrera',
        'Descripción',
        'Enlace a Google Drive / Documentación'
      ]);
      sheet.getRange(1, 1, 1, 9).setFontWeight('bold').setBackground('#7c3aed').setFontColor('#ffffff');
    }

    var data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }

    var timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.titulo || '',
      data.categoria || '',
      data.integrantes || '',
      data.email || '',
      data.institucion || '',
      data.carrera || '',
      data.descripcion || '',
      data.linkDrive || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      result: 'success',
      message: 'Inscripción a la Feria de Proyectos registrada exitosamente',
      idInscripcion: 'INNOA-' + Math.floor(100000 + Math.random() * 900000)
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      result: 'error',
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'online',
    event: 'IINNOA 2026 - Facultad de Ingeniería UNJu',
    message: 'Servicio Web App activo para recepción de proyectos'
  })).setMimeType(ContentService.MimeType.JSON);
}
