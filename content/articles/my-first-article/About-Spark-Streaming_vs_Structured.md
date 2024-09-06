---
title: " 🌟 [Spark] Streaming VS Structured "
description: "Streaming , Structured의 차이 "
date: "2024-08-25"
banner:
  src: "../../images/spark-cover.png"
  style: "background-size: contain; background-position: center;"
  alt: "Spark"
  caption: 'Photo by <u><a href="https://spark.apache.org">Spark</a></u>'
categories:
  - "Spark"
  - "ALL"
keywords:
  - "Pipeline"
  - "Big-Data"
  - "Blog"
  - "Spark"
---
# 🚀 Apache Spark 

![Spark](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-cover.png)

# 🌟 Spark Streaming vs Structured Streaming: 둘의 차이점은?

 실시간 스트리밍 데이터 처리를 위해 두 가지 API를 제공합니다: 
 
 **Spark Streaming**과 **Structured Streaming**. 

 둘은 비슷해 보이지만 차이점이 존재하여 블로그를 작성합니다.

## 💬 기본 개념

### Spark Streaming
- **개념:** Spark Streaming은 **마이크로 배치 (Micro-batching)** 개념에 기반하여 실시간 데이터를 처리합니다. 스트리밍 데이터를 작은 배치로 나누어 정기적으로 처리합니다.
- **처리 방식:** 일정 간격으로 데이터를 수집한 후, 이를 RDD 형태로 변환하여 처리합니다.
- **출시:** Spark Streaming은 Apache Spark의 초기 버전에서 도입된 스트리밍 API입니다.

### Structured Streaming
- **개념:** Structured Streaming은 **엔드-투-엔드 (End-to-End)** 스트리밍 프레임워크로, 데이터 처리를 "Continuous"하게 수행합니다. DataFrame과 Dataset API를 기반으로 하며, 처리 논리가 더 명확하고 쉽게 작성될 수 있습니다.
- **처리 방식:** 실시간 데이터를 DataFrame 또는 Dataset 형태로 처리하며, 배치와 스트리밍 작업을 동일한 방식으로 실행할 수 있습니다.
- **출시:** Structured Streaming은 Spark 2.0에서 도입.

## ❗️ 주요 차이점

| **특징**                         | **Spark Streaming**                | **Structured Streaming**            |
|----------------------------------|-----------------------------------|-------------------------------------|
| **처리 모델**                    | 마이크로 배칭                      | Continuous 처리                     |
| **API**                          | RDD 기반                           | DataFrame/Dataset 기반              |
| **고장 복구**                    | 체크포인트 기반                   | 체크포인트 및 트랜잭션 로그 기반   |
| **성능**                         | 지연 시간이 상대적으로 길다        | 낮은 지연 시간 및 고성능            |
| **내부 엔진**                    | DStream 엔진                       | Catalyst 옵티마이저 사용            |
| **정확한 처리 (Exactly-Once)**   | 상태 저장 스트리밍에서만 지원      | 기본적으로 Exactly-Once 보장        |
| **윈도우 지원**                  | 지원                               | 기본 제공                           |
| **통합성**                       | 배치와 스트리밍 코드가 다름        | 배치와 스트리밍 코드 통합           |

## 📚 코드 예시 비교

### Spark Streaming 코드 예시

    from pyspark import SparkConf
    from pyspark.streaming import StreamingContext

    # SparkConf 설정
    conf = SparkConf().setAppName("Spark Streaming Example")

    # StreamingContext 생성
    ssc = StreamingContext(conf, 1)

    # 소켓에서 스트리밍 데이터 수신
    lines = ssc.socketTextStream("localhost", 9999)

    # 단어 분리
    words = lines.flatMap(lambda line: line.split(" "))

    # 단어 빈도 계산
    wordCounts = words.map(lambda word: (word, 1)).reduceByKey(lambda a, b: a + b)

    # 콘솔에 출력
    wordCounts.pprint()

    # 스트리밍 시작
    ssc.start()
    ssc.awaitTermination()
