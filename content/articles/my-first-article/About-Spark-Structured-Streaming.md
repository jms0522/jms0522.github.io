---
title: " 🌟 [Spark] Structured Streaming "
description: "Spark의 구조적 스트리밍에 대해."
date: "2024-08-25"
banner:
  src: "../../images/spark-cover.png"
  alt: "Spark"
  caption: 'Photo by <u><a href="https://spark.apache.org">Spark</a></u>'
categories:
  - "Spark"
  - "ALL"
keywords:
  - "Pipeline"
  - "Structured Streaming"
  - "Blog"
  - "Spark"
---
# 💬 Apache Spark Streaming

<div style="text-align: center;">
    <img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/streaming1.png" alt="Structured Streaming" style="max-width:100%; height:auto;">
</div>

# 🌟 Apache Spark 구조적 스트리밍(Structured Streaming)

구조적 스트리밍(Structured Streaming)은 Apache Spark에서 제공하는 실시간 데이터를 처리할 수 있는 도구입니다.

배치및 스트리밍 처리,두 가지 작업을 모두 처리할 수 있는 기능을 제공합니다.

## ✅ 주요 개념

### 1. **연속 처리**

   구조적 스트리밍은 스트리밍 데이터를 **DataFrame** 또는 **Dataset** API로 처리합니다. 
   
   이를 통해 기존의 정적 데이터를 처리하던 방식과 동일한 코드로 실시간 데이터를 처리할 수 있습니다.
   

### 2. **내결함성(Fault Tolerance)**

   구조적 스트리밍은 Spark의 내장된 내결함성 메커니즘을 사용하여 데이터를 처리합니다. 
   
   체크포인팅(checkpointing) 등의 기능을 통해 장애 발생 시 데이터 손실을 최소화하고 정확한 일관성을 유지할 수 있습니다.

### 3. **확장성(Scalability)**

   구조적 스트리밍은 Spark의 분산 처리 능력을 기반으로 하기 때문에, 매우 큰 규모의 스트리밍 데이터를 처리할 수 있습니다. 
   
   필요에 따라 노드를 추가하거나 등의 방법으로 높은 확장성을 가지고 있습니다.

### 4. **일관된 배치 및 스트리밍 처리**

   구조적 스트리밍은 배치 처리와 스트리밍 처리 간의 API 차이를 최소화하여, 동일한 코드로 두 가지 작업을 모두 처리할 수 있습니다. 

## ⚒️ 구성 요소

### 1. **Input Sources**

    ![Input Sources](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-streaming3.png)

   구조적 스트리밍은 다양한 입력 소스를 지원합니다. Kafka, 파일 시스템(HDFS, S3 등), 소켓 등에서 실시간 데이터를 수집할 수 있습니다.

### 2. **Processing Engine**
   
   스트리밍 데이터를 마치 배치 데이터처럼 다룰 수 있어, SQL 쿼리를 사용하여 데이터를 쉽게 변환하고 분석할 수 있습니다.

### 3. **Output Sinks**

   구조적 스트리밍은 다양한 출력 싱크를 지원합니다. 파일 시스템, Kafka, 콘솔, 메모리 테이블 등으로 결과 데이터를 저장하거나 전달할 수 있습니다.

## 💫 구조적 스트리밍의 작동 방식

구조적 스트리밍은 **마이크로 배치(Micro-Batch)** 방식과 **연속 처리(Continuous Processing)** 방식을 통해 작동.

- **마이크로 배치**: 실시간 데이터를 짧은 간격으로 작은 배치로 묶어 처리합니다. 이는 기존의 배치 처리 방식과 비슷하지만, 매우 짧은 간격으로 실행됩니다.
- **연속 처리**: 연속적으로 데이터를 처리하며, 지연 시간을 줄이고 실시간성을 높여줍니다.

## ⚙️ 구조적 스트리밍의 주요 기능

### 1. **트리거(Trigger)**

   트리거는 데이터 처리의 주기를 정의합니다. 기본값은 `micro-batch`로, 일정한 간격으로 데이터를 처리합니다. 
   
   트리거 설정을 통해 주기를 선택할 수 있습니다.

### 2. **상태 저장 처리(Stateful Processing)**

   구조적 스트리밍은 윈도우 연산, 조인, 집계 등의 상태 저장 연산을 지원합니다. 

### 3. **Watermarking**

   이벤트 타임 기반의 데이터에서 늦게 도착하는 데이터를 처리하기 위해 Watermarking을 사용할 수 있습니다.
   
   구조적 스트리밍은 데이터의 지연 허용 및 처리 가능 시간대를 설정할 수 있습니다.

## 🚀 구조적 스트리밍의 장점

- **사용의 용이성**: 기존의 배치 처리 코드와 동일한 API를 사용하여 스트리밍 데이터를 처리할 수 있어 학습 곡선이 낮습니다.
- **높은 신뢰성**: 내장된 내결함성 메커니즘을 통해 데이터 손실을 최소화할 수 있습니다.
- **확장성**: Spark의 분산 처리 능력을 통해 대규모 데이터 스트림을 효율적으로 처리할 수 있습니다.
- **유연성**: 다양한 입력 소스 및 출력 싱크를 지원하여, 다양한 환경에서 사용할 수 있습니다.

## 🧑🏻‍💻 결론

스트리밍 처리는 데이터의 순서처리 , 중복제거 등 복잡하고 오류가 발생하기 쉬운 작업이 많다고 생각합니다.

spark의 구조적 스트리밍으로 처리하면 마치 배치 처리 코드와 거의 비슷한 방식으로 스트리밍 처리가 가능하기에 어려움이 상당히 해소 될 거라고 생각합니다.

마이크로 배치로 처리를 한다면 스트림을 작은 배치 단위로 넣어서 처리하기에 익숙한 패턴으로 스트림 데이터를 처리 할 수 있을거라 생각합니다.

실시간 데이터 처리에 진입 장벽을 낮추는데 도움이 되는 도구라고 생각합니다.

감사합니다.