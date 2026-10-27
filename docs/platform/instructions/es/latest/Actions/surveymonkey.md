---
title: SurveyMonkey

permalink: platform/instructions/es/latest/Actions/surveyMonkey

---

<base target="_blank">
<container>

**Descripción general**

Conecte su cuenta de SurveyMonkey con la plataforma Kore.ai XO para automatizar la distribución de encuestas y la recopilación de respuestas. Utilice OAuth para acceder de forma segura a los datos de encuestas y mejorar la participación de los usuarios a través de interacciones conversacionales.

</container>

<container>

**Autorización**

Para conectarse a SurveyMonkey, Kore.ai utiliza autenticación OAuth. El desarrollador puede usar credenciales preautorizadas durante el proceso de configuración o permitir que el usuario final autorice durante la conversación creando un perfil de autorización. [Más información](https://api.surveymonkey.com/v3/docs?shell#SurveyMonkey-Api)

 |Tipo de autorización                    |  OAuth - System | OAuth - Custom |
 |----------------------------------------|-----------------|----------------|
 |Preautorizar la integración             |      No         |     Sí         |
 |Permitir a los usuarios autorizar la integración|      No         |     Sí         |


**Preautorizar la integración**

 Para facilitar el proceso de integración a los clientes, puede preautorizarla proporcionando las credenciales de autorización necesarias para obtener el token de acceso.

**OAuth - Custom**
 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración.

 1. Seleccione **Custom**.

 2. Haga clic en **Select Authorization**.

 3. Seleccione **Create New**.

 4. Seleccione el tipo de mecanismo de autorización.

    i. Seleccione OAuth v2

    ii. Navegue a **[https://developer.surveymonkey.com](https://developer.surveymonkey.com)** e inicie sesión.

    iii. Cualquier persona con una cuenta de SurveyMonkey puede registrar una aplicación. Antes de que finalice el período de 90 días, debe implementar su aplicación como pública o privada y actualizar su cuenta según sea necesario.
 [consultar](https://api.surveymonkey.com/v3/docs?shell#public-apps).

    iv. Habilite los siguientes alcances. [consultar](https://api.surveymonkey.com/v3/docs?shell#scopes).

        surveys_read collectors_read collectors_write responses_write

    v. Copie el Client ID y el Client Secret a la plataforma Kore.ai desde [aquí](https://developer.surveymonkey.com/apps).

    vi. Copie la Authorization URL:

        https://api.surveymonkey.com/oauth/authorize?response_type=code&state=uniquestring

    vii. Copie la Token URL:

        https://api.surveymonkey.com/oauth/token

    viii. Agregue los siguientes alcances:

        surveys_read collectors_read collectors_write responses_write

    ix. Copie la Refresh Token URL:

        https://api.surveymonkey.com/oauth/token

 6. Guarde el **perfil de autorización**.

 7. Seleccione el perfil de autorización creado para completar la integración.

 8. Haga clic en **Authorize**.

 9. Se le redirigirá a la página de inicio de sesión de SurveyMonkey.

 10. Proporcione sus credenciales para conectarse con su cuenta de SurveyMonkey.

 11. Haga clic en **Enable**.



**Permitir a los usuarios autorizar la integración**

Este método requiere que el usuario final proporcione credenciales durante la conversación para la autorización.

 **OAuth - Custom**

 Puede crear su perfil de autorización para obtener un token de acceso y usarlo para completar la integración.

 1. Seleccione **Custom**.

 2. Haga clic en **Select Authorization**.

 3. Seleccione **Create New**.

 4. Seleccione el tipo de mecanismo de autorización.

    i. Seleccione OAuth v2

    ii. Navegue a **[https://developer.surveymonkey.com](https://developer.surveymonkey.com)** e inicie sesión.

    iii. Cualquier persona con una cuenta de SurveyMonkey puede registrar una aplicación. Antes de que finalice el período de 90 días, debe implementar su aplicación como pública o privada y actualizar su cuenta según sea necesario.
 [consultar](https://api.surveymonkey.com/v3/docs?shell#public-apps).

    iv. Habilite los siguientes alcances. [consultar](https://api.surveymonkey.com/v3/docs?shell#scopes).

        surveys_read collectors_read collectors_write responses_write

    v. Copie el Client ID y el Client Secret a la plataforma Kore.ai desde [aquí](https://developer.surveymonkey.com/apps).

    vi. Copie la Authorization URL:

        https://api.surveymonkey.com/oauth/authorize?response_type=code&state=uniquestring

    vii. Copie la Token URL:

        https://api.surveymonkey.com/oauth/token

    viii. Agregue los siguientes alcances:

        surveys_read collectors_read collectors_write responses_write

    ix. Copie la Refresh Token URL:

        https://api.surveymonkey.com/oauth/token

 6. Guarde el **perfil de autorización**.

 7. Seleccione el perfil de autorización creado para completar la integración.

 8. Haga clic en **Enable**.

</container>
