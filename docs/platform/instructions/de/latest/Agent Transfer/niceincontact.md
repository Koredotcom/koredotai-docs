---
title: Drift

permalink: platform/instructions/es/latest/Agent Transfer/niceincontact

---
Kore.ai XO Platform ahora admite la integración con el sistema de agentes de NICE inContact para transferir las conversaciones sin necesidad de utilizar el BotKit.

<base target="_blank">
<container>

**Paso 1: Obtención de un token de API**

1. Para obtener un token de API, debe registrar su aplicación.

2. Puede hacerlo en el sitio web de NICE inContact Central, en el menú ACD → ACD Configuration → API Applications.

3. Al registrar su aplicación, debe especificar un Vendor Name y un Application Name.

4. Seleccione el Vendor Name 'Kore' y un Application Name relevante como 'Kore.ai XO Integration'.

5. En API scope, seleccione Patron API y haga clic en Create API application para guardar el progreso.

</container>

<container>

**Paso 2: Configurar el chat en NICE inContact**

1. Consulte https://help.nice-incontact.com/content/acd/channels/chat/setupchat.htm para obtener instrucciones detalladas.


</container>

<container>

**Paso 3: Ingresar los detalles en Kore.ai XO**

1. Navegue a Kore.ai XO Platform y vaya a Build → Integrations → Agent Transfer → Nice inContact → Configurations

2. Application Name: Ingrese el nombre de la aplicación registrada en el paso 1.

3. Vendor Name: Ingrese el nombre del proveedor registrado en el paso 1.

4. Application Secret: Ingrese el secreto de la aplicación para su aplicación registrada. Puede encontrarlo haciendo clic en el Application Name en ACD → ACD Configuration → API Applications

5. Point of Contact: Ingrese el punto de contacto agregado en el paso 2.

</container>

