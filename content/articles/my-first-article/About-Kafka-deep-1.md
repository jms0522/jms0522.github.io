---
title: " 🚀 [Kafka] About Kafka Controller "
description: "Kafka 간단한 소개글입니다."
date: "2024-10-21"
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
  - "Controller"
  - "Broker"
---
# 🚀 Apache Kafka Controller

![Kafka](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/kafka/kafka.png)

오늘은 Controller에 대해 알아보겠습니다.

zookeeper로 관리하는 버전이 아닌, KRaft mode로 설명하겠습니다.

KRaft mode에 대해선 다음 포스팅에 작성하겠습니다.

## Controller는 무엇인가?

### 리더 선출, 브로커 장애 감지 및 복구, 파티션 재배치, 메타 데이터 정보 교환

- 클러스터에서 하나의 브로커가 컨트롤러 역할을 수행.

- 컨트롤러는 나머지 브러커(팔로워)의 상태를 주기적으로 체크.

- 죽은 브로커가 발생시, 담당하던 파티션의 새리더를 선출.

- 새롭게 선출된 리더에 정보를 교환.

- 메타데이터 정보 교환 (kraft)


### 파티션 리더 선출?

카프카의 각 파티션에는 리더와 팔로워가 존재합니다.

리더는 클라이언트의 읽기/쓰기 요청을 처리하고, 팔로워는 리더를 복제하여 리더가 중단, 변경 시 새로운 리더를 선출합니다.

### 브로커 추가 및 제거 감지

새로운 브로커가 클러스터에서 제거 및 추가 시, 감지하여 클러스터 상태를 업데이트 합니다 (리밸런싱)

### 클러스터 메터데이터 관리

실제 메시지 로그 아닌 브로커의 모든 상태를 기록하는 로그 데이터 관리를 합니다.

여기서 메타데이터는 무엇일까요?

카프카 클러스터를 운영하는데 있어 중요한 역할을 하는 로그로,

1. 브로커 정보

- 각 브로커의 id,주소,포트 등

2. 파티션 및 토픽 정보

- 각 토픽의 파티션 수, 레클리카 목록, 누가 리더인지.

3. 리더 - 팔로워 정보

- 리더 브로커와 팔로워 브로커에 대한 정보.

4. 레플리카 상태

- 각 파티션 레플리카가 어느 브로커에 있는지 및 레클리카가 최신 상태인지

5. 클러스터 현재 상태 정보

- 컨트롤러 역할을 하고 있는 브로커에 대한 정보









