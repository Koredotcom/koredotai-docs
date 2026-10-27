---
title: Genesys

permalink: platform/instructions/es/latest/Agent Transfer/genesys

---
Kore.ai XO Platform ahora admite la integración con el sistema de agentes de Genesys para transferir las conversaciones a un agente sin necesidad de utilizar el BotKit.

<base target="_blank">
<container>

**Paso 1: Agregar la URL de inicio de sesión de Genesys Cloud:**

1. Inicie sesión en su cuenta de Genesys Cloud. La URL de inicio de sesión será visible en la barra de direcciones de su navegador (por ejemplo, https://login.mypurecloud.com)

2. Copie y pegue la URL en el campo "Genesys Cloud login URL" en la pestaña de Configuraciones.

3. Alternativamente, también puede obtener la "Genesys Cloud login URL" específica de su región consultando esta [información de URLs regionales de Genesys Cloud](https://help.mypurecloud.com/articles/aws-regions-for-genesys-cloud-deployment/#tab2)

</container>

<container>

**Paso 2: Obtener el ID de la organización**

1. Para obtener el ID de su organización, siga los pasos mencionados en [Encontrar su Organization ID](https://help.mypurecloud.com/faqs/how-do-i-find-my-organization-id/)

2. Copie el ID y péguelo en el campo "Organization ID" en la pestaña de Configuraciones.

</container>

<container>

**Paso 3: Crear una cola**

1. Navegue a Admin → Contact Center → Queues.

2. Haga clic en Create Queue.

3. Ingrese el nombre de la cola y seleccione la división correspondiente.

4. Haga clic en Save y navegue a la pantalla de configuración de la cola.

5. Asigne agentes o grupos como miembros de la cola.

6. Configure los métodos de enrutamiento y otras configuraciones de la cola según sea necesario.

7. Haga clic en Save y copie el nombre de la cola.

8. Pegue el nombre de la cola en el campo Queue Name en su pestaña de Configuraciones.

</container>

<container>

**Paso 4: Crear un flujo de mensajes entrantes**

1. Navegue a Admin → Architect.

2. Pase el cursor sobre el menú Flows y seleccione Inbound Message Flow.

3. Haga clic en Add para crear un nuevo flujo de mensajes entrantes.

4. Ingrese un nombre único y (opcionalmente) una descripción para el flujo.

5. Seleccione la división apropiada para el flujo.

6. Haga clic en Create Flow para abrir la página de configuración del flujo.

7. En el editor de flujos, agregue una acción Transfer to ACD y seleccione la cola de destino para la transferencia al agente.

8. Configure cualquier lógica adicional o manejo de errores según sea necesario.

9. Valide y publique el flujo para que esté disponible para el enrutamiento.

</container>

<container>

**Paso 5: Crear una clave de implementación**

Para WebChat

1. Navegue a Admin > Contact Center > Widgets.

2. Haga clic en Create Widget, seleccione el tipo de widget como Third Party y guárdelo.

3. En la configuración del widget, seleccione Route to Flow.

4. Elija el flujo de mensajes entrantes que creó en Architect para el enrutamiento.

5. Una vez guardado, el sistema mostrará una Deployment Key.

6. Copie esta clave y péguela en el campo Deployment Key en la pestaña de Configuraciones.

Para WebMessaging

1. Navegue a Admin → Message → Messenger Configurations y haga clic en New Configuration.

2. Ingrese un nombre y una descripción, luego en Labels & Languages Support, elija los idiomas admitidos y establezca el idioma predeterminado.

3. En la pestaña Apps, configure Conversation Disconnect como "Display conversation status and disconnect session" y haga clic en Save.

4. Navegue a Admin → Message → Messenger Deployments y haga clic en Create New Deployment.

5. Ingrese un nombre de implementación, seleccione la configuración de Messenger que creó y elija WebMessaging Legacy Default para el perfil de contenido admitido.

6. Establezca las restricciones de dominio según sea necesario.

7. En Select your Architect Flow, elija el flujo de mensajes entrantes que creó.

8. Haga clic en Save para generar la Deployment Key, luego cópiela y péguela en el campo Deployment Key en la pestaña de Configuraciones.

</container>

<container>

**Paso 6: Agregar la URL de WebSocket (esto aplica solo para WebMessaging)**

1. Vaya al siguiente enlace para encontrar la URL de WebSocket de Genesys para su región: [Información regional de WebSocket de Genesys](https://developer.genesys.cloud/commdigital/digital/webmessaging/websocketapi#connecting)

2. Localice la dirección de WebSocket que corresponda a su región de Genesys Cloud.

3. Copie la URL de WebSocket (por ejemplo, wss://streaming.mypurecloud.com/v2/websocket).

4. Pegue la dirección de WebSocket copiada en el campo WebSocket URL en la pestaña de Configuraciones.

</container>

