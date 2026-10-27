---
title: Freshservice

permalink: platform/instructions/es/latest/Actions/freshservice

---

<base target="_blank">
<container>

**Descripción general**

Conecte su instancia de Freshservice con la plataforma Kore.ai XO para potenciar sus conversaciones y crear tickets, actualizar tickets y realizar otras acciones.

La plataforma Kore.ai XO le permite integrarse con Freshservice utilizando Basic Auth, lo que le permite conectar su instancia de Freshservice fácilmente. Con esta integración, puede crear, actualizar y realizar más acciones dentro de Freshservice.

</container>

<container>

**Autorización**

Para conectarse a una cuenta de Freshservice, Kore.ai utiliza Basic Auth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final se autorice durante la conversación creando un perfil de autorización. Más información.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarlo proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Proporcione el dominio y la API Key para autorizar la integración.
2. Siga los pasos a continuación para obtener las credenciales requeridas de su instancia de Freshdesk.

   a. Dominio - Encontrará su dominio de Freshdesk en la barra de direcciones de su navegador. Ejemplo: https://{{your-domain}}.freshdesk.com. Copie la URL desde aquí al campo Dominio de usuario en la plataforma Kore.ai XO.

   b.  API Key

       i.  Inicie sesión en la instancia de Freshservice.

       ii.  Haga clic en la foto de perfil y navegue a Configuración del perfil.

       iii.  Haga clic en Ver API Key.

       iv.  Complete el proceso de verificación.

        v.  Copie la API Key en el campo API Key de la plataforma Kore.ai XO.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione Todos los usuarios para autorizar la integración.
2. Haga clic en Seleccionar autorización.
3. Seleccione Crear nuevo.
4. Seleccione el tipo de mecanismo de autorización.

   i. Seleccione Basic Auth

   ii. Proporcione un nombre para el perfil de autorización

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Habilitar.


</container>

<container>

**¿Qué se puede lograr integrando Freshservice con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en objetos de Freshservice con plantillas de diálogo preconstruidas listas para usar.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Create Ticket     |Crea un nuevo ticket ingresando el título, la descripción y la prioridad de su ticket.|
|Update Ticket     |Actualiza el estado, la prioridad, la descripción y el título de su ticket de Zendesk.|
|Get Ticket by ID |Visualiza uno o varios tickets ingresando el/los ID(s) del ticket.|
|List All Tickets  |Muestra todos sus tickets.|
|Search Ticket     |Busca todos los tickets que coincidan con su palabra clave.|
|Delete Ticket     |Le permite eliminar un ticket.|

</container>
