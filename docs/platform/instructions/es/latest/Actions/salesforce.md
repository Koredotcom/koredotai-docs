---
title: Salesforce

permalink: platform/instructions/es/latest/Actions/salesforce

---

<base target="_blank">
<container>

**Descripción general**

Conecte su Salesforce CRM con la plataforma Kore.ai XO para mejorar sus conversaciones y habilitar la creación de leads, oportunidades y otras funciones.

La plataforma Kore.ai XO le permite integrarse con Salesforce CRM usando OAuth, lo que le permite conectar fácilmente su instancia de Salesforce CRM. Con esta integración, puede crear, actualizar y realizar más acciones en los diversos objetos dentro del CRM.


</container>

<container>

**Autorización**

Para conectarse a la cuenta de Salesforce de un cliente, Kore.ai utiliza autenticación OAuth 2.0. El usuario puede utilizar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final autorice durante la conversación. Más información.

 |Tipo de autorización                    | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Preautorizar la integración             |       Sí       |       Sí       |
 |Permitir a los usuarios autorizar la integración|       Sí       |       Sí       |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**OAuth - Sistema**

 Habilite la integración utilizando la aplicación preconfigurada de Salesforce de Kore.ai.

1. Seleccione Sistema.

2. Haga clic en Autorizar.

3. Se le redirigirá a la página de inicio de sesión de Salesforce login.salesfore.com.

4. Proporcione sus credenciales para conectarse con su cuenta de Salesforce.
   Tenga en cuenta que está permitiendo que la aplicación de Kore.ai obtenga el token de acceso para completar la autorización.

5. Haga clic en Habilitar.

 ![gif](/koredotai-docs/images/Salesforce%20video%20for%20GIF.gif)

**OAuth - Personalizado**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de Salesforce de Kore.ai para la autorización.

1. Seleccione Personalizado.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

    i.  Seleccione oAuth v2.

    ii.  Navegue a login.salesforce.com e inicie sesión.
         Para iniciar sesión, utilice credenciales de una cuenta Developer, Standard o Enterprise. Las cuentas de prueba no podrán acceder a la aplicación y el Asistente Virtual no funcionará como se espera.

    iii. Navegue a Apps → seleccione la aplicación → Haga clic en Auth.

    iv.  Copie el Client Id de Salesforce en el campo Client Id de la plataforma Kore.ai.

     v.  Copie el Client secret de Salesforce en el campo Client Secret de la plataforma Kore.ai.

    vi.  Copie la Authorization URL (https://login.salesforce.com/services/oauth2/authorize).

   vii.  Copie la Token URL (https://login.salesforce.com/services/oauth2/token).

   viii.  Agregue los siguientes alcances

      1. full

      2. refresh_token

      3. offline_access

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Autorizar.

8. Se le redirigirá a la página de inicio de sesión de Salesforce login.salesfore.com.

9. Proporcione sus credenciales para conectarse con su cuenta de Salesforce.
   Tenga en cuenta que está permitiendo que su aplicación personalizada obtenga el token de acceso para completar la autorización y no está utilizando la aplicación de Salesforce de Kore.ai para lo mismo.

10. Haga clic en Habilitar.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**OAuth - Sistema**

 Este proceso de autorización implica solicitar permiso para que la aplicación de Salesforce de Kore.ai acceda a un token de acceso en tiempo de ejecución.

1. Seleccione Sistema.

2. Haga clic en Habilitar.

3. Tenga en cuenta que se enviará un enlace al usuario final durante la conversación para otorgar acceso a la aplicación de Kore.ai para obtener el token de acceso.

 **OAuth - Personalizado**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de Salesforce de Kore.ai para la autorización.

1. Seleccione Personalizado.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

    i.  Seleccione oAuth v2.

    ii.  Navegue a login.salesforce.com e inicie sesión.
         Para iniciar sesión, utilice credenciales de una cuenta Developer, Standard o Enterprise. Las cuentas de prueba no podrán acceder a la aplicación y el Asistente Virtual no funcionará como se espera.

    iii. Navegue a Apps → seleccione la aplicación → Haga clic en Auth.

    iv.  Copie el Client Id de Salesforce en el campo Client Id de la plataforma Kore.ai.

     v.  Copie el Client secret de Salesforce en el campo Client Secret de la plataforma Kore.ai.

    vi.  Copie la Authorization URL (https://login.salesforce.com/services/oauth2/authorize).

   vii.  Copie la Token URL (https://login.salesforce.com/services/oauth2/token).

   viii.  Agregue los siguientes alcances

      1. full

      2. refresh_token

      3. offline_access

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Habilitar.

</container>

<container>

**¿Qué se puede lograr integrando Salesforce CRM con la plataforma Kore.ai XO?**

La plataforma Kore.ai XO admite todas las acciones comunes en objetos de Salesforce con plantillas de diálogo preconstruidas listas para usar.

**Plantillas compatibles**

| Acción           | Descripción            |
|------------------|------------------------|
|Create Lead       |Agregar un nuevo lead al sistema|
|Update Lead       |Modificar un lead existente|
|Get Lead          |Recuperar un lead por su ID único|
|Get All Leads     |Mostrar una lista de todos los leads|
|Delete Lead       |Eliminar un lead del sistema|
|Search Leads      |Encontrar leads usando criterios de búsqueda especificados|
|Create Opportunity|Crear una nueva oportunidad en el sistema|

</container>
