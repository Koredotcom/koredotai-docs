---
title: Asana

permalink: platform/instructions/es/latest/Actions/asana

---

<base target="_blank">
<container>

**Descripción general**

La plataforma Kore.ai XO le permite conectar fácilmente su instancia de Asana para encontrar respuestas a sus consultas generales.

</container>

<container>

**Autorización**

Para conectarse a Asana, Kore.ai utiliza autenticación básica. El usuario final puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final se autorice durante la conversación.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias.

**Basic**

1. Navegue a https://app.asana.com/0/my-apps

2. Haga clic en crear nuevo token

    i. Ingrese el nombre del token

    ii. Haga clic en el botón "Create Token"

3. Copie el token generado y péguelo en el campo API key de la plataforma Kore.ai XO y haga clic en Habilitar


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione las credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione Todos los usuarios para autorizar la integración.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.  Seleccione API Key

   ii.  Proporcione un nombre para el perfil de autorización.

   iii.  Guarde el perfil de autorización.

 5.  Haga clic en Habilitar.

 </container>

 <container>

**¿Qué se puede lograr integrando Asana con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en Asana con plantillas de diálogo preconstruidas listas para usar.

**Plantillas compatibles**

| Acción           | Descripción            |
|------------------|------------------------|
|Get Projects     |Obtiene todos los proyectos|
|Get Users     |Obtiene la información de todos los usuarios|
|Get Tasks Assigned to a user    |Obtiene las tareas asignadas al usuario|
|Get Task Details     |Obtiene todos los detalles de una tarea determinada|
|Get tasks created by a user     |Obtiene las tareas creadas por un usuario|

</container>
