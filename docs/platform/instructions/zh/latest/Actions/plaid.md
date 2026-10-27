---
title: Plaid

permalink: platform/instructions/es/latest/Actions/plaid

---

<base target="_blank">
<container>

**Descripción general**

Conecte su instancia de Plaid con la plataforma Kore.ai XO para automatizar tareas de Plaid dentro de su flujo de diálogo. Automatice la recuperación de acciones financieras dentro de las conversaciones con los usuarios.

La plataforma Kore.ai XO le permite conectarse con Plaid de forma rápida y sencilla utilizando OAuth2 y la aplicación quickstart de Plaid.


</container>

<container>

**Autorización**

Para conectarse a una cuenta de Plaid, Kore.ai utiliza autenticación OAuth 2.0. El usuario puede utilizar credenciales preautorizadas proporcionadas por el desarrollador durante el proceso de configuración o configurar el perfil de autorización para permitir que el usuario final autorice durante la conversación.

 |Tipo de autorización                    | OAuth - System | OAuth - Custom |
 |----------------------------------------|----------------|----------------|
 |Preautorizar la integración             |       No       |       Sí       |
 |Permitir a los usuarios autorizar la integración|       No       |       Sí       |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**OAuth - Personalizado**

Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar Kore.ai para la autorización. Sin embargo, necesita configurar la aplicación Plaid Quickstart en su máquina local y alojarla con una URL de acceso público (puede usar ngrok para pruebas locales). Siga las instrucciones a continuación para más detalles.

1. Seleccione Personalizado.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

i. Seleccione oAuth v2.

ii. Nombre el perfil de autorización bajo la etiqueta "Identity Provider Name" y navegue a https://dashboard.plaid.com/overview e inicie sesión.

iii. En el menú izquierdo, vaya a "developers" y "keys" y copie el ClientId de la página y péguelo en el campo ClientId de la plataforma Kore.ai.

iv. De manera similar, copie el Client secret según el entorno [Sandbox, Development, Production] y péguelo en el campo Client Secret de la plataforma Kore.ai.

v. En el menú izquierdo, navegue a "API" bajo la misma lista de "Developers" y haga clic en "Configure" junto a la etiqueta "Allowed redirect URI's".

vi. Copie la URL de callback del perfil de autorización y haga clic en "add new URI" y péguela en el campo de texto en la plataforma Plaid y guarde los cambios.

vii. Luego navegue a https://plaid.com/docs/quickstart/#introduction. Siga el video detallado de Youtube hasta que tenga la aplicación quickstart ejecutándose [frontend y backend] en su máquina local.

viii. Vaya al repositorio - https://github.com/NikithaPa-Kore/Plaid_Guide_Code y reemplace el archivo '/quickstart/frontend/src/Components/Link/index.tsx' en su aplicación Quickstart con el contenido del archivo index.tsx del repositorio. Además, asegúrese de que la Callback URL en la línea 44 del archivo del repositorio coincida con la callback URL del perfil de autorización en la plataforma Kore en su aplicación Quickstart.

ix. Vaya al repositorio nuevamente y reemplace el contenido del archivo '/quickstart/node/index.js' en su aplicación Quickstart con el del repositorio.

x. Asegúrese de configurar su archivo .env con el clientId, Secret, env, products, country codes y app port apropiados. Asegúrese de verificar que el número de puerto coincida, incluso en los archivos reemplazados.

NOTA: Las siguientes variables deben configurarse en el archivo .env-
| VARIABLE | VALOR |
|----------|-------|
| PLAID_PRODUCTS | auth,transactions,identity,investments,liabilities |
|PLAID_REDIRECT_URI | *La Callback URL del perfil AUTH*    |


5. La Authorization URL en el perfil de autorización debe configurarse con la URL del host frontend de la aplicación quickstart que está alojada públicamente (a través de ngrok [para propósitos de prueba]).

6. Luego, en el campo "Subdomain (aka Tenanancy URL)", seleccione YES e ingrese la URL base como "https://{tenant}.plaid.com".

7. La "Token request URL" y la "Refresh Token URL" deben configurarse con la URL del host backend de la aplicación quickstart con el siguiente endpoint - /api/send_the_access_token_AUTH.

      EJ: https://example.com/api/send_the_access_token_AUTH

8. En la etiqueta "Authorization Field(s)", edite el campo "Authorization" existente haciendo clic en el icono de edición y configure lo siguiente-

| VARIABLE | VALOR |
|------------|----------|
| Field Type | payload |
| Field Key  | access_token |
| Field Value | {{accessToken}} |

NOTA: Field Value = {{accessToken}}

9. Luego proceda a "Add Authorization Fields" y configure los siguientes dos campos.

| VARIABLE | VALOR |
|------------|----------|
| Field Type | header |
| Field Key  | PLAID-CLIENT-ID |
| Field Value | INGRESE_SU_CLIENT_ID_AQUI |

| VARIABLE | VALOR |
|------------|----------|
| Field Type | header |
| Field Key  | PLAID-SECRET |
| Field Value | INGRESE_SU_CLIENT_SECRET_AQUI |

10. Asegúrese de seguir todos los pasos anteriores para autorizar correctamente con Plaid. Luego guarde el perfil de autorización.

11. Seleccione el perfil de autorización creado para completar la integración. Haga clic en Autorizar. Se le redirigirá a la página de inicio de sesión de Plaid Quickstart.

12. Complete el proceso de inicio de sesión otorgando los permisos correspondientes de la aplicación y quedará autorizado exitosamente en Plaid.

-----------------------------------------------------------------------

**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización. Tenga en cuenta que se enviará un enlace al usuario final durante la conversación para otorgar acceso a la aplicación de Kore.ai para obtener el token de acceso.

 **OAuth - Personalizado**

Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración sin utilizar Kore.ai para la autorización. Sin embargo, necesita configurar la aplicación Plaid Quickstart en su máquina local y alojarla con una URL de acceso público (puede usar ngrok para pruebas locales). Siga las instrucciones a continuación para más detalles.

1. Seleccione Personalizado.

2. Haga clic en Seleccionar autorización.

3. Seleccione Crear nuevo.

4. Seleccione el tipo de mecanismo de autorización.

i. Seleccione oAuth v2.

ii. Nombre el perfil de autorización bajo la etiqueta "Identity Provider Name" y navegue a https://dashboard.plaid.com/overview e inicie sesión.

iii. En el menú izquierdo, vaya a "developers" y "keys" y copie el ClientId de la página y péguelo en el campo ClientId de la plataforma Kore.ai.

iv. De manera similar, copie el Client secret según el entorno [Sandbox, Development, Production] y péguelo en el campo Client Secret de la plataforma Kore.ai.

v. En el menú izquierdo, navegue a "API" bajo la misma lista de "Developers" y haga clic en "Configure" junto a la etiqueta "Allowed redirect URI's".

vi. Copie la URL de callback del perfil de autorización y haga clic en "add new URI" y péguela en el campo de texto en la plataforma Plaid y guarde los cambios.

vii. Luego navegue a https://plaid.com/docs/quickstart/#introduction. Siga el video detallado de Youtube hasta que tenga la aplicación quickstart ejecutándose [frontend y backend] en su máquina local.

viii. Vaya al repositorio - https://github.com/NikithaPa-Kore/Plaid_Guide_Code y reemplace el archivo '/quickstart/frontend/src/Components/Link/index.tsx' en su aplicación Quickstart con el contenido del archivo index.tsx del repositorio. Además, asegúrese de que la Callback URL en la línea 44 del archivo del repositorio coincida con la callback URL del perfil de autorización en la plataforma Kore en su aplicación Quickstart.

ix. Vaya al repositorio nuevamente y reemplace el contenido del archivo '/quickstart/node/index.js' en su aplicación Quickstart con el del repositorio.

x. Asegúrese de configurar su archivo .env con el clientId, Secret, env, products, country codes y app port apropiados. Asegúrese de verificar que el número de puerto coincida, incluso en los archivos reemplazados.

NOTA: Las siguientes variables deben configurarse en el archivo .env-
| VARIABLE | VALOR |
|----------|-------|
| PLAID_PRODUCTS | auth,transactions,identity,investments,liabilities |
|PLAID_REDIRECT_URI | *La Callback URL del perfil AUTH*    |


5. La Authorization URL en el perfil de autorización debe configurarse con la URL del host frontend de la aplicación quickstart que está alojada públicamente (a través de ngrok [para propósitos de prueba]).

6. Luego, en el campo "Subdomain (aka Tenanancy URL)", seleccione YES e ingrese la URL base como "https://{tenant}.plaid.com".

7. La "Token request URL" y la "Refresh Token URL" deben configurarse con la URL del host backend de la aplicación quickstart con el siguiente endpoint - /api/send_the_access_token_AUTH.

      EJ: https://example.com/api/send_the_access_token_AUTH

8. En la etiqueta "Authorization Field(s)", edite el campo "Authorization" existente haciendo clic en el icono de edición y configure lo siguiente-

| VARIABLE | VALOR |
|------------|----------|
| Field Type | payload |
| Field Key  | access_token |
| Field Value | {{accessToken}} |

NOTA: Field Value = {{accessToken}}

9. Luego proceda a "Add Authorization Fields" y configure los siguientes dos campos.

| VARIABLE | VALOR |
|------------|----------|
| Field Type | header |
| Field Key  | PLAID-CLIENT-ID |
| Field Value | INGRESE_SU_CLIENT_ID_AQUI |

| VARIABLE | VALOR |
|------------|----------|
| Field Type | header |
| Field Key  | PLAID-SECRET |
| Field Value | INGRESE_SU_CLIENT_SECRET_AQUI |

10. Asegúrese de seguir todos los pasos anteriores para autorizar correctamente con Plaid. Luego guarde el perfil de autorización.

11. Seleccione el perfil de autorización creado para completar la integración. Haga clic en Autorizar. Se le redirigirá a la página de inicio de sesión de Plaid Quickstart.

12. Complete el proceso de inicio de sesión otorgando los permisos correspondientes de la aplicación y quedará autorizado exitosamente en Plaid.

-----------------------------------------------------------------------

</container>

<container>

**¿Qué se puede lograr integrando Plaid con la plataforma Kore.ai XO?**

La plataforma Kore.ai XO admite acciones comunes en objetos de Plaid con acciones de diálogo preconstruidas listas para usar.

**Acciones compatibles**

| Acción           | Descripción            | Estado |
|------------------|------------------------|--------|
|Recuperar datos de saldo en tiempo real   |Automatiza la recuperación de los saldos de las cuentas.| Activo |
|Obtener posiciones de inversión  |Obtiene las posiciones de inversión de las cuentas.| Activo |
|Obtener transacciones de inversión  |Obtiene las transacciones de inversión de las cuentas.| Activo |
|Obtener pasivos |Automatiza la recuperación de los pasivos de las cuentas.| Activo |
|Crear un informe de activos |Automatiza la creación de un informe de activos.| Inactivo |
|Obtener un informe de activos |Automatiza la recuperación de un informe de activos.| Inactivo |

</container>
