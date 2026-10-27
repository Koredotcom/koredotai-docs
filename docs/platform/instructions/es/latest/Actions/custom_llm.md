---
title: Custom LLM

permalink: platform/instructions/es/latest/Actions/custom_llm

---

<base target="_blank">
<container>

**Descripción general**

La funcionalidad Custom LLM de la plataforma XO le permite integrarse con modelos de lenguaje grande de su elección. Puede conectarse con los modelos alojados por proveedores externos o con los que usted haya alojado de forma privada.

Con la funcionalidad Custom LLM, obtiene control total sobre el enfoque de integración y el diseño de prompts. También puede elegir las funcionalidades que desea usar con los Custom LLMs. Esto le permite establecer conexiones y optimizar sus interacciones con modelos de lenguaje grande, evitando así las integraciones estandarizadas de la plataforma XO mientras mantiene la capacidad de alternar entre un inicio rápido y una personalización más profunda según sus requisitos en evolución.

</container>

<container>

**Configuración**

Para conectarse a las integraciones incorporadas bajo Custom LLM, Kore.ai utiliza diferentes métodos de autenticación. Se espera que los usuarios proporcionen la siguiente información requerida para usar los modelos personalizados.

**Integration Name**: Proporcione un nombre para identificar al proveedor o grupo de modelos de lenguaje grande con los que desea integrarse. Este es un campo **obligatorio**. <br>
**Model Name**: Proporcione un nombre para el modelo de lenguaje grande conectado mediante la integración mencionada anteriormente. Puede agregar más de un modelo con el mismo endpoint. Este es un campo **obligatorio**. <br>
**Endpoint**: Proporcione la URL que se conecta a la interfaz para interactuar con las capacidades del LLM a través de solicitudes de API. Este es un campo **obligatorio**.<br>
**Auth**: Seleccione o cree un perfil de autorización para el uso del Custom LLM. Puede crear un nuevo tipo de autenticación a partir de las opciones disponibles y proporcionar la información requerida, o puede agregar tokens directamente al encabezado/cuerpo JSON. <br>
**Headers**: Proporcione información adicional que se enviará con la solicitud a la URL del Endpoint para conectarse al LLM. Contiene metadatos que proporcionan contexto útil sobre la solicitud en sí. <br>

Después de proporcionar toda la información requerida mencionada anteriormente, haga clic en el botón **Test** para iniciar el proceso de prueba. Durante esta fase, se le pedirá que defina la solicitud JSON completa para establecer una conexión con el modelo de lenguaje. Una vez que la solicitud JSON haya sido validada exitosamente, haga clic en **Save** para almacenar su integración de Custom LLM para referencia y uso futuro.

</container>
