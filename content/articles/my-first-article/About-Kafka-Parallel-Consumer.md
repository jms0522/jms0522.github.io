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

## Parallel Consumer



