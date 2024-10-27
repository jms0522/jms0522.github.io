---
title: " 🚀 [Kafka] About Kafka Topic & Partition"
description: "Kafka KRaft 소개글입니다."
date: "2024-10-26"
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
---
# 🚀 Apache Kafka Topic & Partition

## 🔎 Overview

카프카의 데이터를 구분하기 위한 단위 Topic과 Partition에 대해여.

## 토픽이란 ?

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kafka/topic-partition.png" alt="topic" width="600" />

**Topic**은 카프카에서 데이터를 구분하기 위한 단위입니다.

토픽은 한 개 이상의 파티션을 소유하고 있습니다.

파티션에는 프로듀서가 보낸 데이터들이 저장됩니다.

이 데이터를 **레코드 (Record)** 라고 부릅니다.

파티션은 Queue와 비슷한 구조라고 생각을 하면 이해하기 편합니다.

FIFO 구조로 먼저 들어간 레코드는 컨슈머가 먼저 가져가게 됩니다.

하지만 Queue는 데이터를 pop() 하며 삭제를 하지만 **카프카는 삭제 하지 않습니다**.

파티션의 레코드는 컨슈머가 데이터를 가져가는 것과 별개로 관리되어, 여러 컨슈머 그룹이 **토픽의 데이터를 여러 번 가져갈 수 있습니다**.

---
## 토픽 생성 규칙

이름의 생성 규칙이 있는데요

모호하게 작성을 하지 않는 게 중요합니다.

토픽의 이름의 변경이 불가능 하기에 미리 규칙에 따라 생성하는 것을 추천합니다.

<환경><팀-명><어플리케이션 이름><메시지-타입>

<프로젝트명><서비스명><환경><이벤트명>

<카프카-클러스터명><환경><서비스명><메시지-타입>

ex) dev/marketing1-team.website-platform.json

이런식으로 작성하면 더 편리하게 관리 할 수 있습니다.



## 리더와 팔로우 파티션?

## 특정 브로커에 파티션 쏠림 현상

특정 브로커에 리더 파티션 쏠림 현상이 생길 수 있습니다. (클러스터 운영에서 중요한 부분)

이럴 때 kafka-reassign-partition.sh 명령으로 파티션 재분배가 가능합니다.

## 파티션은 컨슈머와 1:1 관계

컨슈머와 파티션은 1:1 관계이기에 파티션 늘리면 컨슈머도 비례 해서 늘어나야 합니다.

물론 장애 발생 시 컨슈머가 1,2번 파티션을 담당할 수 있습니다.

컨슈머 + 파티션 늘리면 처리량이 늘어납니다.

## 파티션 개수를 줄이는 건 지원하지 않는다.

한 번 늘리면 줄이는 것은 불가합니다.

데이터의 순서와 무결성을 보장하기 힘들어지기 때문입니다.

토픽을 삭제하고 재성성하는 방법 밖에 없습니다. (마이그레이션 방법도 있긴 합니다.)

파티션 개수를 늘릴 땐 신중하게 고민하고 실행합시다.



