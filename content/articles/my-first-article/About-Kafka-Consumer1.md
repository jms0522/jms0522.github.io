---
title: " 🚀 [Kafka] About Kafka Consumer "
description: "Kafka Consumer 소개글입니다."
date: "2024-12-1"
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
# 🚀 Apache Kafka Consumer 

오늘은 Consumer 에 대해 기본적인 설정을 다시 복기해보는 시간을 갖겠습니다.

***Consumer는 메시지를 가져와서 소비한다***

이렇게 단순하게만 동작 하는 게 아니기 때문에 좀 더 깊게 알아봅시다.

## Rebalance

***파티션 리밸런스***

컨슈머가 증가되면, 파티션을 분배해서 가지게 됩니다.

또 컨슈머가 제거가 되면 마찬가지로 파티션을 분배해서 가지게 됩니다.

이렇게 분배해서 가지는 작업을 **리밸런스** 라고 합니다.

리밸런스에는 두가지 방법이 있습니다.

**조급한 리밸런스 (eager rebalance)**

실행되는 와중에 컨슈머의 수의 변화가 생기면, 모든 작업을 멈추고 기존의 소유권을 포기하고 난 뒤 새로운 파티션을 할당하는 방식입니다.

**협력적 리밸런스 (cooperative rebalance)**

중지되지 않고 기존의 파티션을 새로운 컨슈머에게 양도하는 방식입니다.

**Properties**





![Kafka](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/parellel-consumer/kafka-basic.png)

![Parallel Consumer](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/parellel-consumer/kafka-parallel.png)




