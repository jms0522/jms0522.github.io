---
title: " 🚀 [Kafka] About Kafka Parallel Consumer "
description: "Kafka Parallel Consumer 소개글입니다."
date: "2024-11-20"
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
  - "KRaft"
  - "Consumer"
---
# 🚀 Apache Kafka Parallel Consumer

오늘은 **Parallel Consumer** 에 대해서 알아보겠습니다.

카프카에서 처리량을 늘리기 위한 쉬운 방법 중 하나는 파티션을 늘리는 것 입니다.

파티션 수가 늘어나면 그 만큼 컨슈머가 늘어나기 때문입니다.

그에 따른 병렬 처리로 병목 현상도 줄어들고 자원을 더 효율적으로 사용할 수 있습니다.

하지만 처리량을 늘린다고 파티션 수만 증가 시키다 보면 많은 파티션 수에 따른 사이드 이펙트도 존재합니다.

또한 파티션 수는 한 번 늘리면 줄일 수 없기에 신중해야 합니다.

***그럼 어떤 방식으로 처리량을 늘릴 수 있을까요?***

## 무지성 파티션 늘리기

파티션을 늘린다면 처리량은 증가하겠지만 여러 단점이 존재합니다.

카프카는 파티션별로 데이터를 저장하는데 단순 데이터 뿐만 아니라 메타데이터까지 저장하기 때문에 파티션이 늘면

필요한 리소스가 증가한다는 점을 유의해야합니다.

또한 파티션 단위로 설정된 replicas 수 만큼 복제가 되기 때문에 디스크 사용량이나 지연률이 증가합니다.

## Parallel Consumer ?

파티션을 늘리지 않으면서 처리량을 늘리기 위해서 사용하는 게 바로 Parallel Consumer 입니다.

Parallel Consumer는 병렬 처리 단위를 파티션이 아닌 메시지 단위로 설정을 할 수 있습니다.

![Kafka](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/parellel-consumer/kafka-basic.png)

![Parallel Consumer](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/parellel-consumer/kafka-parallel.png)

위의 그림과 같이 하나의 파티션인데 복수의 스레드를 활용하여 3개의 메시지를 동시에 처리하는 것을 볼 수 있습니다.


