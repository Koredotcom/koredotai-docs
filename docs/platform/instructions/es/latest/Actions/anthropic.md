---
title: Anthropic

permalink: platform/instructions/es/latest/Actions/anthropic

---

<base target="_blank">
<container>

**Descripción general**

Anthropic desarrolla Claude, una familia de LLMs avanzados para la comprensión y generación de lenguaje natural. La plataforma Kore.ai XO se integra con los modelos de Claude para potenciar las funcionalidades de IA Generativa dentro de la plataforma.

**Modelos compatibles**

- Claude Opus 4.6
- Claude Sonnet 4.6 / 4.5
- Claude Haiku 4.5

</container>

<container>

**Autorización**

Para conectarse a Anthropic, Kore.ai utiliza autenticación mediante API key. Las solicitudes a la API requieren los encabezados que se indican a continuación. El acceso a las API keys de Anthropic está limitado a miembros de una organización que se haya registrado y haya sido aprobada para el acceso a la API.

**Requisitos previos**

- Acceso a Anthropic Console
- Organización aprobada para el acceso a la API de Anthropic
- Permiso para generar API keys

**Tipo de autenticación: API Key**
**Encabezados requeridos**

- `x-api-key: <YOUR_API_KEY>`
- `anthropic-version: 2023-06-01`
- `Content-Type: application/json`

**Comportamiento de la autorización (importante)**

- Las API keys **no se almacenan en las configuraciones del backend**
- Las claves deben proporcionarse **en tiempo de ejecución o mediante mecanismos externos seguros**
- El almacenamiento persistente o preautorizado **no es compatible**

**Implicaciones**

- Los usuarios pueden necesitar **volver a ingresar las API keys cuando sea necesario**
- Esto reduce el riesgo de **almacenamiento de credenciales a largo plazo**


**Configuración de la API key**

1. Inicie sesión en Anthropic Console
2. Vaya a **API Keys → Create Key**
3. Copie y use la clave en la configuración de la integración

**Referencia: [Guía de inicio de la API de Anthropic](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)**



</container>
