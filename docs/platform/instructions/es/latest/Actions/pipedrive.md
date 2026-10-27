---
title: Pipedrive

permalink: platform/instructions/es/latest/Actions/pipedrive

---
<container>

**Descripción general**

Conecte su instancia de Pipedrive con la plataforma Kore.ai XO para automatizar tareas de Pipedrive dentro de su flujo de diálogo. Recupere, busque, cree, actualice y elimine leads. La plataforma Kore.ai XO le permite conectarse con Pipedrive de forma rápida y sencilla utilizando OAuth2.

</container>
<container>

**Autorización**

Para conectarse a una cuenta de Pipedrive, Kore.ai utiliza autenticación OAuth 2.0. El usuario puede utilizar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o su propio perfil de autorización durante el proceso de configuración para permitir que el usuario final autorice durante la conversación.

|Tipo de autorización | OAuth - System | OAuth - Custom |
|----------------------------------------|----------------|----------------|
|Preautorizar la integración | Sí | Sí |
|Permitir a los usuarios autorizar la integración| Sí | Sí |


**Preautorizar la integración**

Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**OAuth - Sistema**

Habilite la integración utilizando la aplicación preconfigurada de Jira de Kore.ai.

1. Seleccione Sistema.

2. Haga clic en Autorizar.

3. Se le redirigirá a la página de inicio de sesión de Pipedrive.

4. Proporcione sus credenciales para conectarse con su cuenta de Pipedrive.
Tenga en cuenta que está permitiendo que la aplicación de Kore.ai obtenga el token de acceso para completar la autorización.

5. Haga clic en Habilitar.


**OAuth - Personalizado**

Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de Jira de Kore.ai para la autorización.

1. Seleccione Personalizado.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

i. Seleccione oAuth v2.

ii. Navegue a (https://developers.pipedrive.com/) e inicie sesión o regístrese en su cuenta sandbox.

iii. Haga clic en su perfil en la esquina superior derecha y navegue a la pestaña Developer Hub.

iv. Cree una aplicación privada, asígnele un nombre y copie la URL de callback de la plataforma Kore.ai, agréguela y péguela en la callback URL de Pipedrive.

v. Navegue a la pestaña "OAuth & access scopes".

vi. Habilite los siguientes alcances de acceso - Leads:Full access, Contacts: Read only, Read users data.

vii. Copie el ClientId de la aplicación y péguelo en el campo ClientId de la plataforma Kore.ai.

viii. Copie el Client secret de la aplicación y péguelo en el campo Client Secret de la plataforma Kore.ai.

ix. Haga clic en guardar en la esquina superior derecha de la pestaña.

x. Copie la Authorization URL (https://oauth.pipedrive.com/oauth/authorize) y péguela en el campo Authorization URL de la plataforma Kore.ai.

xi. Seleccione el botón de radio "Yes, some tasks will have tenancy URLs and the user will need to provide that to successfully authenticate" para Subdomain en la plataforma Kore.ai.

xii. Copie la Base URL (https://{tenant}.pipedrive.com/v1), péguela en el campo Base URL de la plataforma Kore.ai.

xiii. Copie la Token URL (https://oauth.pipedrive.com/oauth/token), péguela en los campos Token Request URL y Refresh Token URL de la plataforma Kore.ai.

xiv. Copie los siguientes alcances (leads:full,organizations:read,persons:read, users:read) en el campo Scope de la plataforma Kore.ai.

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Autorizar.

8. Se le solicitará que ingrese el Tenant. El tenant estará presente en la primera parte de la URL de su aplicación Pipedrive en el formato "/yourName/-sandbox". Pegue el tenant en la plataforma Kore.ai y presione Probar.

9. Se le redirigirá a la página de inicio de sesión de Pipedrive.

10. Proporcione sus credenciales para conectarse con su cuenta de Pipedrive.
Tenga en cuenta que está permitiendo que su aplicación personalizada obtenga el token de acceso para completar la autorización y no está utilizando la aplicación de Pipedrive de Kore.ai para lo mismo.

11. Haga clic en Habilitar.


**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

**OAuth - Sistema**

Este proceso de autorización implica solicitar permiso para que la aplicación de Pipedrive de Kore.ai acceda a un token de acceso en tiempo de ejecución.

1. Seleccione Sistema.

2. Haga clic en Habilitar.

3. Tenga en cuenta que se enviará un enlace al usuario final durante la conversación para otorgar acceso a la aplicación de Kore.ai para obtener el token de acceso.

**OAuth - Personalizado**

Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar la aplicación de Salesforce de Kore.ai para la autorización.

1. Seleccione Personalizado.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

i. Seleccione oAuth v2.

ii. Navegue a (https://developers.pipedrive.com/) e inicie sesión o regístrese en su cuenta sandbox.

iii. Haga clic en su perfil en la esquina superior derecha y navegue a la pestaña Developer Hub.

iv. Cree una aplicación privada, asígnele un nombre y copie la URL de callback de la plataforma Kore.ai, agréguela y péguela en la callback URL de Pipedrive.

v. Navegue a la pestaña "OAuth & access scopes".

vi. Habilite los siguientes alcances de acceso - Leads:Full access, Contacts: Read only, Read users data.

vii. Copie el ClientId de la aplicación y péguelo en el campo ClientId de la plataforma Kore.ai.

viii. Copie el Client secret de la aplicación y péguelo en el campo Client Secret de la plataforma Kore.ai.

ix. Haga clic en guardar en la esquina superior derecha de la pestaña.

x. Copie la Authorization URL (https://oauth.pipedrive.com/oauth/authorize) y péguela en el campo Authorization URL de la plataforma Kore.ai.

xi. Seleccione el botón de radio "Yes, some tasks will have tenancy URLs and the user will need to provide that to successfully authenticate" para Subdomain en la plataforma Kore.ai.

xii. Copie la Base URL (https://{tenant}.pipedrive.com/v1), péguela en el campo Base URL de la plataforma Kore.ai.

xiii. Copie la Token URL (https://oauth.pipedrive.com/oauth/token), péguela en los campos Token Request URL y Refresh Token URL de la plataforma Kore.ai.

xiv. Copie los siguientes alcances (leads:full,organizations:read,persons:read, users:read) en el campo Scope de la plataforma Kore.ai.

5. Guarde el perfil de autorización.

6. Seleccione el perfil de autorización creado para completar la integración.

7. Haga clic en Habilitar.
</container>
<container>

**¿Qué se puede lograr integrando Pipedrive con la plataforma Kore.ai XO?**

La plataforma Kore.ai XO le permite conectarse con Pipedrive de forma rápida y sencilla utilizando OAuth2.

**Plantillas compatibles**
- List, search, create, update, delete and get details of leads.
- List all permitted users of a particular lead.
- Search organizations, persons and find users by name.
</container>
