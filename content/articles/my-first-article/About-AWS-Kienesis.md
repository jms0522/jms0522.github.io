---
title: " ⚙️ [AWS] AWS Kienesis "
description: "AWS 기능들을 활용하여 파이프라인 구축해보기"
date: "2024-09-20"
banner:
  src: "../../images/kinesis/kinesis-cover.png"
  alt: "AWS"
  caption: 'Photo by <u><a href="https://aws.amazon.com/ko/pm/kinesis/#Learn_More_About_Amazon_Kinesis">AWS Kinesis</a></u>'
categories:
  - "AWS"
  - "Kinesis"
  - "ALL"
keywords:
  - "Pipeline"
  - "AWS"
  - "Cloud"
  - "Kinesis"

---
# 💫 AWS Kinesis란?

AWS Kinesis는 실시간으로 대규모 데이터를 수집, 처리, 분석할 수 있는 스트리밍 데이터 플랫폼입니다. 

이를 통해 사용자는 로그, 이벤트, IoT 디바이스 데이터 등을 실시간으로 처리하여 비즈니스 인사이트를 얻을 수 있습니다.

---

## 주요 특징

- **확장성**: 필요에 따라 자동으로 확장되어 대규모 데이터 스트림 가능.
- **완전관리형 서비스**: 인프라 관리 없이 손쉽게 스트리밍 데이터를 처리 가능.
- **다양한 통합**: AWS의 다른 서비스와 원활하게 통합되어 데이터 파이프라인을 구축 가능.


---

## AWS Kinesis의 장점

- **실시간 처리**: 데이터를 실시간으로 수집하고 분석하여 빠르게 의사결정을 내릴 수 있습니다.
- **확장성**: 대규모 데이터 스트림을 자동으로 처리할 수 있는 확장성을 제공합니다.
- **비용 효율성**: 사용한 만큼만 비용을 지불하는 구조로, 비용 효율적인 데이터 스트리밍 솔루션을 제공합니다.
- **통합성**: AWS의 다른 서비스와 원활하게 통합되어 데이터 파이프라인을 쉽게 구축할 수 있습니다.

---

### 실시간 데이터 처리

금융 서비스, 게임, 소셜 미디어 등 실시간 데이터 처리가 중요한 분야에서 Kinesis를 활용할 수 있습니다. 실시간으로 데이터를 분석하여 사용자 경험을 향상시키거나, 실시간 추천 시스템을 구축할 수 있습니다.

### 로그 및 이벤트 수집

애플리케이션 로그, 시스템 이벤트 등을 실시간으로 수집하고 분석하여 문제를 빠르게 감지하고 대응할 수 있습니다. 이를 통해 시스템의 안정성을 높이고, 운영 효율성을 개선할 수 있습니다.

### 스트리밍 데이터 분석

IoT 디바이스에서 생성되는 대규모 데이터를 실시간으로 분석하여 인사이트를 도출할 수 있습니다. 예를 들어, 제조업에서는 센서 데이터를 실시간으로 모니터링하여 생산 공정을 최적화할 수 있습니다.

## AWS Kinesis와 다른 스트리밍 서비스 비교

| 특징             | AWS Kinesis                           | Apache Kafka                        | Google Pub/Sub                       |
|------------------|---------------------------------------|-------------------------------------|--------------------------------------|
| **확장성**       | 자동 확장 지원                        | 수동 확장 필요                      | 자동 확장 지원                       |
| **관리형 서비스**| 완전관리형                            | 자체 관리 필요                       | 완전관리형                           |
| **통합성**       | AWS 생태계와 뛰어난 통합               | 다양한 오픈 소스 도구와 통합 가능    | Google Cloud와 뛰어난 통합            |
| **비용**         | 사용량 기반 과금                       | 자체 호스팅 시 인프라 비용 발생      | 사용량 기반 과금                      |
| **실시간 처리**  | 뛰어난 실시간 처리 기능               | 높은 실시간 처리 가능               | 뛰어난 실시간 처리 기능              |
