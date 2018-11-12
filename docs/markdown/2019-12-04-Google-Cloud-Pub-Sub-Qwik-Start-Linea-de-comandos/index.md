---
date: '2019-12-04'
title: 'Google Cloud Pub/Sub: Qwik Start - Línea de comandos'
tags: ['Google-Cloud']
author: woostbot
---

Google Cloud Pub/Sub es un servicio de mensajería para intercambiar datos de eventos entre aplicaciones y servicios. Un productor de datos publica un mensaje en un tema de Cloud Pub/Sub. Un consumidor crea una suscripción a ese tema. Los suscriptores pueden extraer mensajes desde una suscripción o se configuran como webhooks para suscripciones push. Cada suscriptor debe confirmar cada mensaje dentro de un período configurable.

### Configuración y requisitos

##### Configuración de Qwiklabs

###### Requisitos

Para completar este lab, necesitará lo siguiente:

- Acceso a un navegador de Internet estándar. Se recomienda el navegador Chrome.

- Tiempo. Tenga en cuenta el tiempo de finalización del lab en Qwiklabs, que es una aproximación del tiempo que podría tardar en completar todos los pasos. Planifique su agenda para que pueda completar el lab. Una vez que inicie el lab, no podrá pausarlo para regresar más tarde (es decir, cada vez que inicie un lab, comenzará desde el primer paso).

- El tiempo de acceso al lab se refiere al tiempo de disponibilidad de sus recursos. Si completa el lab y cuenta con tiempo de acceso disponible, podrá explorar Google Cloud Platform o trabajar en cualquier sección del lab marcada como “si tiene tiempo”. Cuando se agote el tiempo de acceso, su lab finalizará y todos los recursos dejarán de estar disponibles.

- NO necesita una cuenta ni un proyecto de Google Cloud Platform. Se le proporcionarán una cuenta, un proyecto y los recursos asociados que necesitará para este lab.

> **Importante**: ¿Qué está sucediendo en esta etapa? En segundo plano, su lab prepara los recursos de GCP que necesitará, como una cuenta, un proyecto, los recursos del proyecto y los permisos para controlar los recursos necesarios a fin de ejecutar el lab correctamente. Esto permite que, en lugar de perder tiempo configurando manualmente un proyecto y creando recursos desde cero como parte de su lab, pueda comenzar a aprender más rápidamente.

- Cree un tema llamado `myTopic`:

  ```shell
     gcloud beta pubsub topics create myTopic
  ```

- Cree una suscripción llamada `mySubscription` para `myTopic`:

  ```shell
    gcloud beta pubsub subscriptions create --topic myTopic mySubscription
  ```

- Publique el mensaje "hello" en `myTopic`:

  ```shell
     gcloud beta pubsub topics publish myTopic "hello"
  ```

- Use mySubscription para recibir el mensaje:
  ```shell
      gcloud beta pubsub subscriptions pull --auto-ack mySubscription
  ```

Creó un tema de Pub/Sub, publicó en el tema, creó una suscripción y, luego, usó la suscripción para extraer datos del tema.
