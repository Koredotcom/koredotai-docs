---
title: ServiceNow

permalink: platform/instructions/es/latest/Agent Transfer/servicenow

---
La plataforma Kore.ai XO ahora admite la integración con el sistema de agentes ServiceNow para transferir las conversaciones a agentes en vivo sin necesidad de utilizar el BotKit. La plataforma es compatible con las versiones Tokyo, Utah y Vancouver de ServiceNow. Para habilitar esta integración, el desarrollador del bot debe iniciar sesión en la cuenta de desarrollador de ServiceNow.

Las siguientes instrucciones son relevantes para las instancias Utah y Vancouver de ServiceNow. Para acceder a las instrucciones específicas de la instancia Tokyo, [siga este enlace](https://developer.kore.ai/integrations/configuring-the-servicenow-agent/)


<base target="_blank">
<container>

**Paso 1. Obtener la URL de la Instancia**

1. Una vez que inicie sesión en su instancia, observe la URL para encontrar su ID de Instancia (por ejemplo, https://InstanceURL.service-now.com).

2. Copie la InstanceURL de la URL y péguela en la pestaña Configurations de esta página.

</container>

<container>

**Paso 2. Capturar los valores de campo requeridos según el tipo de autorización elegido**

1.  Cuando se selecciona la opción de autorización "Basic Auth" en la pestaña Configurations

      a. Proporcione el nombre de usuario de su cuenta de ServiceNow en el campo User Name en la pestaña Configurations de esta página.

      b. Proporcione la contraseña de su cuenta de ServiceNow en el campo Password en la pestaña Configurations de esta página.

2. Cuando se selecciona la opción de autorización "OAuth with Refresh Token" en la pestaña Configurations

   a. Desde la pantalla principal de la instancia de ServiceNow, seleccione "All" y navegue a System OAuth → Application Registry.

   b. Haga clic en el botón New y navegue a la pantalla "What kind of OAuth Application".

   c. Seleccione la opción "Create an OAuth API endpoint for external clients" y navegue a la pantalla de detalles de la aplicación.

   d. Proporcione el nombre de la aplicación y envíelo, la aplicación OAuth se creará y el analista será dirigido a la pantalla de Todas las Aplicaciones.

   e. Haga clic en la aplicación OAuth creada y navegue a la pantalla de detalles.

   f. Copie el Client ID y péguelo en la pestaña Configurations de esta página.

   g. Desenmascara el Client Secret, cópielo y péguelo en la pestaña Configurations de esta página.

   h. Genere el refresh token y proporciónelo en la pestaña Configurations de esta página. Para generar el refresh token, [consulte este enlace](https://docs.servicenow.com/bundle/tokyo-platform-security/page/administer/security/reference/r_OAuthAPIRequestParameters.html)

   i. Haga clic en el botón Authorize presente en la pestaña Configurations de esta página para autorizar la integración.

</container>

<container>

**Paso 3. Instalar los plugins requeridos**

1. Desde la pantalla principal de la instancia de ServiceNow, seleccione "All" y navegue a System Definition → Plugins.

2. Copie la InstanceURL de la URL y péguela en la pestaña Configurations de esta página.

3. Busque el plugin "Advanced Work Assignment" e instálelo.

4. Busque el plugin "Customer Service Management" e instálelo.

5. Busque el plugin "Glide Virtual Agent" e instálelo.

6. Busque el plugin "Virtual Agent API" e instálelo.


</container>

<container>

**Paso 4: Asignar roles de agente al grupo de Servicio al Consumidor**

1. Desde la pantalla principal de la instancia de ServiceNow, seleccione "All" y navegue a Advanced Work Assignment → Management → Groups.

2. Seleccione el grupo "Consumer Service Support" y navegue a la pantalla de detalles del grupo.

3. Seleccione la pestaña Roles y haga clic en el botón Edit para navegar a la pantalla de roles.

4. En la colección de Roles, busque los roles "awa_agent" y "agent_workspace_user", asígnelos al grupo Consumer Service Support y guárdelos.

5. Regrese a la pantalla de detalles del grupo, seleccione la pestaña "Group Members", haga clic en el botón Edit y navegue a la pantalla "Edit Members".

6. En la colección de Usuarios, busque el usuario requerido (por ejemplo: Abel Tuter), asígnelo al grupo Consumer Service Support y guárdelo.

7. Regrese a la pantalla de detalles del grupo y haga clic en el botón Update.


</container>

<container>

**Paso 5. Actualizar el Endpoint del Webhook y habilitar la integración**

1. Desde la pantalla principal de la instancia de ServiceNow, seleccione "All" y navegue a System Webservices → Outbound → REST messages.

2. Seleccione "VABot to Bot" de la lista y navegue a la pantalla de detalles de "VABot to Bot".

3. Edite los detalles, copie la URL del Webhook de la pestaña de configuración de esta página y péguela en el campo EndPoint en la pantalla de edición de detalles de "VABot to Bot".

4. En la misma pantalla, en los métodos HTTP, actualice la misma URL del Webhook para "postMessage" y haga clic en Update.

5. Habilite la integración del agente ServiceNow haciendo clic en el botón "Save" en la pestaña Configurations de esta página.


</container>

<container>

**Paso 6. Suplantar al Usuario y Establecer el Estado del Agente**

1. Desde la pantalla principal de la instancia de ServiceNow, haga clic en el ícono de Perfil y seleccione "Impersonate User".

2. En la pantalla de Suplantar Usuario, seleccione el usuario que ha sido asignado al grupo de Servicio al Consumidor.

3. Desde la pantalla principal de la instancia de ServiceNow, seleccione "All" y navegue a Workspace Experience → Workspaces → Agent Workspace Home.

4. Desde la pantalla de Agent Workspace, seleccione "Inbox" y establezca el Estado en "Available".


</container>

<container>

**Paso 7. Mostrar el nombre del agente en la conversación [Este paso es opcional]**

1. Desde la pantalla principal de la instancia de ServiceNow, seleccione "All" y navegue a "Conversational Interfaces" → "Home".

2. Seleccione "Settings" y navegue a la pantalla de "General Settings".

3. Seleccione "Agent Chat" desde el menú de navegación izquierdo y navegue a la pantalla de "Agent Chat".

4. En "User Experience" → "Chat settings", active la opción "Agent names and avatars" y guarde.


</container>
