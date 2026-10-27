---
title: Salesforce

permalink: platform/instructions/es/latest/Agent Transfer/salesforce

---
La plataforma Kore.ai XO ahora admite la integración con el sistema de agentes Salesforce para transferir las conversaciones sin necesidad de utilizar el BotKit.

<base target="_blank">
<container>

**Paso 1: Configurar Live Agent**

1. Inicie sesión en su cuenta de Salesforce.

2. Desde el menú principal en la parte superior, navegue a Setup > Customize > Live Agent > Settings.

   Asegúrese de cambiar a la vista Classic, la configuración de Live Agent no aparece en la vista Lightning Experience. Haga clic (https://help.salesforce.com/s/articleView?language=en_US&id=live_agent_intro.htm) para obtener instrucciones detalladas sobre la configuración de Live Agent.

3. Encuentre la sección de Live Agent en 'Build > Customize > Chat > Chat Agent Configurations'.

4. Para agregar una nueva configuración de Live Agent, haga clic en el botón "New".

5. En el formulario "New Live Agent Configuration", puede ingresar los detalles de la nueva configuración, como el nombre y la descripción.

6. Una vez que haya ingresado los detalles requeridos, haga clic en el botón "Save" para guardar la nueva configuración de Live Agent.

</container>

<container>

**Paso 2: Obtener la URL/Endpoint de API de Live Agent**

1. Inicie sesión en su cuenta de Salesforce.

2. Desde el menú principal en la parte superior, navegue a Setup > Customize > Live Agent > Deployments.

3. En la página de Implementaciones de Live Agent, verá una lista de todas las implementaciones de Live Agent que se han configurado.

4. Para obtener la URL/endpoint de API de Live Agent, haga clic en el nombre de la implementación de Live Agent que desea utilizar.

5. En el formulario de Implementación de Live Agent, encontrará la URL/endpoint de API de Live Agent en el campo "Live Agent URL".

</container>

<container>

**Paso 3: Obtener el ID de la Organización**

1. Inicie sesión en su cuenta de Salesforce.

2. Desde el menú principal en la parte superior, navegue a Setup > Company Settings > Company Information.

3. En la página de Información de la Empresa, verá una lista de detalles sobre su organización.

4. Para obtener el ID de la Organización, busque el campo "Organization ID". El ID de la Organización es un identificador único para su organización de Salesforce.

</container>

<container>

**Paso 4: Obtener el ID de Implementación**

1. Inicie sesión en su cuenta de Salesforce.

2. Desde el menú principal en la parte superior, navegue a Setup > Customize > Live Agent > Deployments.

3. En la página de Implementaciones de Live Agent, verá una lista de todas las implementaciones de Live Agent que se han configurado.

4. Para obtener el ID de Implementación, haga clic en el nombre de la implementación de Live Agent que desea utilizar.

5. En el formulario de Implementación de Live Agent, encontrará el ID de Implementación en el campo "Deployment ID".


</container>

<container>

**Paso 5: Obtener el ID del Botón**

1. Vaya a la página 'Live Agent > Chat Buttons & Invitations', haga clic en el botón que desea utilizar para esta integración. El ID del Botón es la cadena de     caracteres después del último / en la URL.
 Por ejemplo: https://meya-dev-ed.my.salesforce.com/5731I000000PL9G

2. Habilite Salesforce haciendo clic en el botón 'Save' en la plataforma Kore.ai XO.

</container>

