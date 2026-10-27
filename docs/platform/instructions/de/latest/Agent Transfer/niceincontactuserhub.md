---
title: Nice In Contact (UserHub)

permalink: platform/instructions/es/latest/Agent Transfer/niceincontactuserhub

---
La plataforma Kore.ai XO proporciona integración incorporada con el sistema de agentes NICE inContact (UserHub) para transferir sin problemas las conversaciones de un asistente virtual a agentes en vivo.

<base target="_blank">
<container>

**Paso 1: Obtener los detalles de NiceInContact (UserHub)**

1. Genere AccessKeyId y AccessKeySecret desde el Perfil de Usuario, para realizar una solicitud de token (generados en la interfaz de CXone en la página de Empleados para Userhub y en la página de Usuarios para Central).
   Consulte [aquí](https://help.nice-incontact.com/content/admin/security/manageaccesskeys.htm?tocpath=Admin%7CAdmin%7CRoles%20and%20Security%7C_____3)

2. Registre su aplicación.

   a. Vaya a la página de Registro de Aplicaciones en el portal de desarrolladores para obtener instrucciones detalladas
      [aquí](https://developer.niceincontact.com/Documentation/ApplicationRegistration?Length=13). La mayoría de los términos en el formulario de registro son autoexplicativos. Sin embargo, proporcione la siguiente información específica:

      i.   Tenencia de la aplicación: (Single Tenant)

      ii.  Método de autenticación: (client_secret_basic)

      iii. Alcances de API de CXone ACD requeridos: (PatronApi)

      iv.  Tipo de aplicación que se registra: (Back-end)

   b.  Cuando registre su aplicación, recibirá un client_id y un client_secret.


3. Cree un Punto de contacto, usando [aquí](https://help.nice-incontact.com/content/acd/channels/chat/setupchat.htm)

</container>

<container>

**Paso 2: Ingresar los detalles en Kore.ai XO**

1. Navegue a la plataforma Kore.ai XO y vaya a Build → Integrations → Agent Transfer → Nice inContact (UserHub) → Configurations
2. Access Key Id: desde el Perfil de Usuario (Ref. en el paso 1).
3. Access Key Secret: desde el Perfil de Usuario (Ref. en el paso 1).
4. Client Id: desde la Aplicación (Ref. en el paso 2).
5. Client Secret: desde la Aplicación (Ref. en el paso 2).
6. Point of Contact: Ingrese el Punto de Contacto agregado en el Paso 3.

</container>
