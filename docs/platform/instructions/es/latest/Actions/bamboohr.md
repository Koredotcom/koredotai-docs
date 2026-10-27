---
title: BambooHR

permalink: platform/instructions/es/latest/Actions/bamboohr

---

<base target="_blank">
<container>

**Descripción general**

Conecte BambooHR para obtener información de empleados y realizar diversas acciones adicionales.

La plataforma Kore.ai XO le permite integrarse con Bamboo HR, permitiéndole conectar fácilmente su instancia de Bamboo HR Now para obtener información relacionada con los empleados.

</container>

<container>

**Autorización**

Para conectarse a una cuenta de Bamboo HR, Kore.ai utiliza autenticación básica. El usuario puede usar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final se autorice durante la conversación. Más información.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.


 **Basic**

1. Proporcione el subdominio y la API Key para autorizar la integración.

2. Siga los pasos a continuación para obtener los detalles requeridos de su instancia de BambooHR. Para obtener los detalles requeridos, navegue a [https://company.bamboohr.com/](https://company.bamboohr.com/)

    i.   Reemplace **company** en la URL anterior con el dominio de su empresa. Encontrará su dominio en la barra de direcciones de su navegador. El texto justo antes de bamboohr.com es su dominio.

    ii.    Si el dominio que ha ingresado es correcto, será dirigido a una página para proporcionar su correo electrónico y contraseña para iniciar sesión en la cuenta de desarrollador.

    iii.    Después de haber iniciado sesión exitosamente, navegue a la sección de perfil y haga clic en API Keys.

    iv.    Haga clic en Add New Key

    v.    Proporcione un nombre y haga clic en Generate Key

    vi.    Copie la clave generada y péguela en el campo API key de la plataforma Kore.ai XO.

    vii.    Haga clic en Habilitar.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione las credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione Todos los usuarios para **autorizar** la integración.

2. Haga clic en Seleccionar **autorización**.

3. Seleccione **Crear nuevo**.

4. Seleccione el tipo de mecanismo de autorización.

    i. Seleccione Basic Auth

   ii. Proporcione un nombre para el perfil de autorización

5. Guarde el **perfil de autorización**.

6. Seleccione el **perfil de autorización** creado para completar la integración.

7. Haga clic en **Habilitar**.

 </container>

 <container>

**¿Qué se puede lograr integrando Bamboo HR con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en objetos de Bamboo HR con plantillas de diálogo preconstruidas listas para usar. Haga clic en **Explorar plantillas**. Más información.

**Plantillas compatibles**

| Acción           | Descripción            |
|------------------|------------------------|
|Create Employee   |Agregar un nuevo empleado al sistema|
|Get Employee By Id   |Recuperar un empleado por su ID único|
|List All Employees     |Mostrar una lista de todos los empleados en el sistema|
|Update Employee   |Modificar la información de un empleado existente|
|Get Time Off Requests|Recuperar una lista de solicitudes de tiempo libre|
|Get List Who Is Out|Mostrar una lista de empleados que están actualmente fuera de la oficina|
|Update Request Status    |Actualizar el estado de una solicitud de tiempo libre|

</container>
