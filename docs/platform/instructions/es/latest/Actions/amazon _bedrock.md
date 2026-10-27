---
title: Amazon Bedrock
permalink: platform/instructions/es/latest/Actions/amazon_bedrock
---

<base target="_blank">
<container>

**Descripción general**

Amazon Bedrock proporciona acceso a una amplia gama de modelos de lenguaje avanzados. Los usuarios pueden evaluar los modelos y elegir el modelo adecuado para sus casos de uso. Esta integración permite a los usuarios utilizar cualquiera de los modelos en Bedrock para las funcionalidades de Co-pilot y Conversaciones Dinámicas de la plataforma XO.

**Comprensión de la invocación de modelos en Amazon Bedrock**

Amazon Bedrock admite dos formas distintas de invocar modelos, dependiendo de cuándo se incorporó el modelo. Elegir el **Model ID** correcto (y por lo tanto el **Endpoint**) es necesario para que la integración funcione.

| Tipo | Descripción | Cuándo usar |
|------|-------------|-------------|
| **Direct on-demand** | Modelos más antiguos con capacidad dedicada en una sola región. Se invocan usando únicamente el ID base del modelo. | Úselo para modelos que no requieren un perfil de inferencia (consulte la documentación de AWS). |
| **Cross-region inference profile** | Modelos más nuevos que solo están disponibles a través de perfiles de inferencia de AWS. Debe usar un ID de modelo con prefijo para que Bedrock enrute la solicitud entre regiones. | Úselo para modelos más nuevos (por ejemplo, Claude Sonnet 4.5, Claude Opus 4.x) donde el ID base del modelo devuelve un ValidationException. |

**Por qué importa el prefijo**

- **Direct on-demand:** Sin prefijo. Ejemplo de Model ID: `anthropic.claude-3-5-sonnet-20241022-v2:0`
- **Inference profile:** Use un **prefijo regional** en el Model ID. Prefijos admitidos: **`us.`** (grupo de regiones de EE.UU., por ejemplo us-east-1, us-west-2), **`eu.`** (Europa), **`apac.`** (Asia Pacífico), **`global.`** (todas las regiones comerciales).

Si usa el ID base del modelo para un modelo que solo admite perfiles de inferencia, Bedrock devuelve un **ValidationException** indicando que el rendimiento bajo demanda no es compatible y que se debe usar un perfil de inferencia. Actualizar el Model ID a la forma con prefijo (por ejemplo, `us.anthropic.claude-sonnet-4-5-20250929-v1:0`) es la corrección correcta y recomendada por AWS.

**Ejemplos por tipo de modelo**

**Ejemplo 1 — Cross-region inference profile (por ejemplo, Claude Sonnet 4.5)**
Use un Model ID con prefijo y el endpoint regional de tiempo de ejecución correspondiente.

| Campo | Valor |
|-------|--------|
| **Model ID** | `us.anthropic.claude-sonnet-4-5-20250929-v1:0` |
| **Endpoint** | `https://bedrock-runtime.us-east-1.amazonaws.com/model/us.anthropic.claude-sonnet-4-5-20250929-v1:0/invoke` |
| **Cuerpo de solicitud de ejemplo** | `{"modelId":"us.anthropic.claude-sonnet-4-5-20250929-v1:0","contentType":"application/json","accept":"application/json","body":"{\"anthropic_version\": \"bedrock-2023-05-31\", \"max_tokens\": 1000, \"messages\": [{\"role\": \"user\",\"content\": [{\"type\": \"text\",\"text\": \" what is the capital of Australia? \"}]}]}"}` |

**Ejemplo 2 — Direct on-demand (por ejemplo, Claude 3 Haiku)**
Use el ID base del modelo sin prefijo.

| Campo | Valor |
|-------|--------|
| **Model ID** | `anthropic.claude-3-haiku-20240307-v1:0` |
| **Endpoint** | `https://bedrock-runtime.us-east-1.amazonaws.com/model/anthropic.claude-3-haiku-20240307-v1:0/invoke` |
| **Cuerpo de solicitud de ejemplo** | `{"modelId":"anthropic.claude-3-haiku-20240307-v1:0","contentType":"application/json","accept":"application/json","body":"{\"anthropic_version\": \"bedrock-2023-05-31\", \"max_tokens\": 1000, \"messages\": [{\"role\": \"user\",\"content\": [{\"type\": \"text\",\"text\": \" what is the capital of Australia? \"}]}]}"}` |

Al configurar un nuevo modelo, consulte la [documentación de perfiles de inferencia de AWS](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-profiles-support.html) para verificar si ese modelo usa un ID de modelo directo o un ID de perfil de inferencia (con `us.`, `eu.`, `apac.` o `global.`).

**Configuración**

Siga estas instrucciones paso a paso para integrar los modelos de lenguaje de Amazon Bedrock con la plataforma XO:

**Paso 1: Recopilar la información requerida**

Antes de comenzar a configurar la integración, asegúrese de tener la siguiente información:

1. **Nombre del proveedor**: Elija un nombre para identificar el grupo de modelos de lenguaje que desea conectar (obligatorio).
   Ejemplo: Si se conecta a Anthropic Claude-3 a través de Bedrock, puede nombrarlo Bedrock Anthropic.

2. **Nombre del modelo**: Asigne un nombre único al modelo de lenguaje que está conectando (obligatorio).
   Ejemplo: Si se conecta a Haiku, el nombre del modelo puede ser Haiku.
   Referencia: [InvokeModel API](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModel.html)

3. **IAM Role ARN**: El IAM Role ARN permite a la plataforma acceder de forma segura a los recursos en nombre de los usuarios sin necesidad de claves de acceso a largo plazo, admitiendo el acceso entre cuentas, los principios de privilegio mínimo y capacidades de auditoría mejoradas.
   **Amazon STS API:**
   a. Para asumir un rol de IAM y obtener credenciales de seguridad temporales, proporcione el endpoint de la API de AWS STS (Security Token Service), específicamente la acción `AssumeRole`. La API de STS es esencial para generar la clave de acceso temporal, la clave secreta y el token de sesión necesarios para acceder de forma segura a los recursos de AWS según los permisos asociados con el rol de IAM.
   b. Asegúrese de tener la URL de endpoint correcta para la acción `AssumeRole` en la región de AWS donde se encuentra su rol de IAM.

4. **Amazon Bedrock ARN**: El Amazon Resource Name (ARN) que otorga a su rol de IAM acceso al modelo de lenguaje específico en Amazon Bedrock. El ARN identifica de forma única el recurso del modelo de lenguaje dentro del servicio Amazon Bedrock.

5. **Endpoint**: Proporcione la URL para interactuar con la API del modelo de lenguaje (obligatorio). Use el **Model ID correcto** en la URL: para modelos más nuevos use el ID del perfil de inferencia (por ejemplo, `us.anthropic.claude-sonnet-4-5-20250929-v1:0`); para modelos más antiguos use el ID base del modelo. Consulte los **Ejemplos por tipo de modelo** anteriores y la [página de perfiles de inferencia de AWS](https://docs.aws.amazon.com/bedrock/latest/userguide/inference-profiles-support.html).

6. **Headers**: Incluya cualquier encabezado adicional con metadatos específicos de su integración de modelo de lenguaje si es necesario. Los encabezados pueden transmitir información adicional u opciones de configuración a la API del modelo de lenguaje.

**Paso 2: Ingresar los detalles de la integración y probar las credenciales**

1. Ingrese los detalles recopilados del paso anterior en los campos proporcionados.
2. Haga clic en el botón "Test" para validar las credenciales proporcionadas. Este paso implica definir una solicitud JSON completa, un formato estructurado para enviar datos a la API del modelo de lenguaje, para establecer una conexión con el modelo de lenguaje.

**Paso 3: Guardar la integración y llamar a Amazon Bedrock**

1. Después de validar exitosamente la solicitud JSON, haga clic en "Save" para almacenar su integración del modelo de lenguaje de Amazon Bedrock.
2. La plataforma XO utiliza el IAM Role ARN recopilado para llamar a la API de Amazon STS mencionada. Esto genera las credenciales temporales que ayudan a Kore a asumir el rol requerido.
3. La plataforma utiliza el Bedrock ARN para llamar a la API del modelo de lenguaje grande (LLM).
4. Esta API garantiza el acceso seguro a los modelos de lenguaje y establece la conexión con el LLM de Bedrock.

**Paso 4: Comenzar a usar los modelos configurados**

Una vez completada la integración, puede usar los modelos de lenguaje configurados en diversas funcionalidades de la plataforma XO creando prompts para los modelos configurados mediante la biblioteca de Prompts y Solicitudes.

**Nota:** Antes de iniciar el proceso de integración, asegúrese de tener los permisos necesarios y el acceso al rol de IAM y los recursos de Amazon Bedrock en su cuenta de AWS. Para más detalles, consulte las [políticas de acceso de IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html).

Con estos pasos, podrá aprovechar el poder de los modelos de lenguaje de Amazon Bedrock directamente dentro de la plataforma XO, permitiéndole crear experiencias innovadoras e interactivas impulsadas por IA para sus usuarios.

</container>
