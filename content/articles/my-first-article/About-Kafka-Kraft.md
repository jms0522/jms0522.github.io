---
title: " 🚀 [Kafka] About Kafka Kraft "
description: "Kafka 간단한 소개글입니다."
date: "2024-10-23"
banner:
  src: "../../images/kafka/kafka.png"
  alt: "Kafka"
  caption:
categories:
  - "Kafka"
  - "ALL"
keywords:
  - "Pipeline"
  - "Kafka"
  - "Kraft"
---
# 🚀 Apache Kafka Kraft

![Kafka](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kafka/kafka.png)

오늘은 Kafka의 Kraft 모드에 대해서 공부했습니다.

Kraft 모드와 장단점을 알아봅시다!

## Zookeeper With Kafka

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kafka/zookeeper.png" alt="Total" width="600" />

Kafka는 Zookeeper라는 관리 도구를 사용합니다.

Zookeeper는 Kafka의 메타데이터, 브로커 상태, 토픽, 컨트롤러 등을 관리합니다.

어떤 브로커가 특정 파티션의 리더인지 결졍 및 수행을 하고,

토픽 및 권한에 대한 구성을 저장합니다.

다양한 변동 사항이 있을 시, 이를 카프카에게 보고합니다.

하지만 결국 Kafka 자체가 아닌 외부에서 메타데이터를 관리하여 확장성에 제한이 있고

데이터 중복, 브로커의 메타데이터와 Zookeeper의 메타데이터의 불일치로 인한 데이터 정합성에 문제가 생기고 

서버/시스템의 추가 및 복잡성이 증가하는 한계점이 있습니다.

또한 관리적인 부분에서도 둘은 서로 다른 어플리케이션이므로, 서로 다른 환경, 파일 등을 가지고 있어 동시에 운영을 해야합니다.

이 한계점을 보완하는게 Kraft 모드입니다.

## Kraft : Without Zookeeper

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kafka/kraft.png" alt="Total" width="600" />

Kraft 모드는 즉 Zookeeper가 관리를 하는 게 아닌 Kafka 자체가 관리를 할 수 있게 해줍니다.

즉 Zookeeper의 의존성을 제거합니다.

단순화가 되어 확장성, 안정성, 일관성에도 도움이 됩니다.

이는 운영을 좀 더 쉽게 만들어 줄 수 있습니다.

Zookeeper가 관리하던 메타데이터를 카스카 클러스터 내의 브로커 중 컨트롤러를 선출한 뒤 별도의 토픽으로 메타데이터를 관리하게 됩니다.

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kafka/kraft-detail.png" alt="Total" width="600" />

컨트롤러가 늘어나고 이들 중 리더 컨트롤러가 액티브 컨트롤러이면서 리더 역할을 담당합니다.

리더 역할을 하는 컨트롤러는 write 역할도 맡아 수행합니다.

이 처럼 자체에서 관리를 함으로 간편한 운영과 확장성이 있습니다.

Kraft 모드에서 주요한 성능 개선 중 하는 바로 파티션의 리더 선출 최적화입니다.

컨트롤러의 주요 역할이 파티션의 리더를 선출하는 것인데 대량의 파티션에 대한 작업 시간은 다소 소요되게 됩니다.

이는 데이터 파이프라인에 좋지 않은 요소로 작용할 수 있습니다.

Zookeeper에서는 이 때문에 클러스터의 전체 파티션 수를 200,000 정도로 제한 했으나

Kraft에서는 더 많은 파티션을 만들 수 있습니다.

또 다른 장점은 복구에 필요한 시간입니다.

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kafka/recovery.png" alt="Total" width="600" />







