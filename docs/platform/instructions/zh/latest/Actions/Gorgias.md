---
title: Gorgias

permalink: platform/instructions/es/latest/Actions/gorgias

---

<base target="_blank">
<container>

**Descripción general**

Conecte su instancia de Gorgias con la plataforma Kore.ai XO para potenciar sus conversaciones y crear tickets/clientes, actualizar tickets/clientes y realizar otras acciones.

La plataforma Kore.ai XO le permite integrarse con Gorgias utilizando Basic Auth, lo que le permite conectar su instancia de Gorgias fácilmente. Con esta integración, puede crear, actualizar y realizar más acciones dentro de Gorgias.

</container>

<container>

**Autorización**

Para conectarse a la cuenta de Gorgias de un cliente, Kore.ai utiliza Basic Auth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final se autorice durante la conversación creando un perfil de autorización. Más información.


 |Tipo de autorización                    | Basic |
 |----------------------------------------|-------|
 |Preautorizar la integración             |  Sí   |
 |Permitir a los usuarios autorizar la integración|  Sí   |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarlo proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**Basic**

1. Proporcione el dominio de la empresa, el nombre de usuario y la contraseña (API Key) para autorizar la integración.
2. Siga los pasos a continuación para obtener las credenciales requeridas de su instancia de Gorgias.

   a. Encontrará el dominio de su empresa en la barra de direcciones de su navegador.

        i. Ejemplo: https://<company-domain>.gorgias.com

       ii. Copie la URL desde aquí al campo Dominio de usuario en la plataforma Kore.ai XO.

   b. Correo electrónico del usuario

        i. Utilice el correo electrónico con el que inicia sesión en la instancia de Gorgias.
                             (o)
          Encontrará el correo electrónico en su cuenta de Gorgias en la pestaña de perfil en Su perfil -> REST API -> Username (su dirección de correo electrónico)

   c. API Token

        i. Copie la contraseña (API Key) disponible en la página de la cuenta de Gorgias en Su perfil -> REST API -> Password (API Key).


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**Basic**

1. Seleccione Todos los usuarios para autorizar la integración.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

   i.  Seleccione Basic Auth.

   ii.  Proporcione un nombre para el perfil de autorización.

   iii. Seleccione el valor de Subdominio como Sí, luego proporcione la URL base que está disponible en la página de la cuenta de Gorgias en Su perfil -> REST API -> Base API URL.

   iv. Proporcione la URL de verificación de autenticación.

        Ejemplo:`https://<company-domain>.gorgias.com/api/account`

   v. Finalmente seleccione el método GET.

6. Guarde el perfil de autorización.
7. Seleccione el perfil de autorización creado para completar la integración.
8. Haga clic en Habilitar.

</container>

<container>

**¿Qué se puede lograr integrando Gorgias con la plataforma Kore.ai XO?**

 La plataforma Kore.ai XO admite todas las acciones comunes en objetos de Gorgias con plantillas de diálogo preconstruidas listas para usar. Haga clic en Explorar plantillas. Más información.

**Plantillas admitidas**

| Acción           | Descripción            |
|------------------|------------------------|
|Create a customer     | Automatiza la creación de un prospecto o contacto.|
|List customers     | Obtiene una lista de todos los prospectos, contactos o clientes.|
|Update a customer | Actualiza los detalles de la información de un prospecto, contacto o cliente en particular.|
|Retrieve a customer  | Obtiene los detalles de un prospecto o contacto en particular.|
|Delete a customer     |Elimina un prospecto, contacto o cliente.|
|Create a ticket    | Automatiza la creación de un ticket o incidente, ya sea por su cliente o un agente.|
|List tickets | Lista todos los tickets o incidentes.|
|Retrieve a ticket | Encuentra un ticket o incidente en particular.|
|Update a ticket | Actualiza los detalles de un ticket o incidente.|
|Delete a ticket | Automatiza la eliminación de un ticket o incidente, ya sea por un usuario final o un agente.|

</container>
