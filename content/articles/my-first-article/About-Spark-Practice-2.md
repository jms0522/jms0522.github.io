---
title: " 🌟 [Spark] Spark Practice -2 (Streaming) "
description: "Spark의 Streaming 실습."
date: "2024-09-07"
banner:
  src: "../../images/spark-practice/spark-st-cover.png"
  alt: "Spark"
  caption: 'Photo by <u><a href="https://spark.apache.org/streaming/">Spark Streaming</a></u>'
categories:
  - "Spark"
  - "Streaming"
  - "ALL"
keywords:
  - "Pipeline"
  - "Streaming"
  - "Blog"
  - "Spark"
---
# 💬 Apache Spark Streaming Practice

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/elk-kafka-spark.png" alt="Total" width="600" />

오늘은 **Spark Streaming**을 중점적으로 활용한 실시간 처리 파이프라인을 구성하는 실습을 진행보겠습니다.

아직 진행중이라 구성은 조금씩 바뀔 수 있습니다.

Filebeat로 적재를 할지 그냥 Logstash를 쓸지 아님 다른 stack 을 쓸 수 있어요.

근데 지금은 일단 Logstash로 진행중입니다.

**전체적인 구성**은 위에 이미지와 동일합니다.

**Logstash**는 실시간으로 발생하는 데이터를 수집해서 **Kafka**로 보내고 

**Kafka**에서 메시지를 받고, **Spark Streaming**을 활요해서 

**Jupyter**나 **Zeplin**에서 분석도 진행해볼 예정입니다.

**HDFS**에 데이터 저장까지 완료입니다.

## 🧹 Logstash

Logstash는 실시간 데이터를 수집하여 Kafka에 적재하는 역할입니다.

현재 일단 Elk stack으로 사용하는게 아니라 따로 Logstash 컨테이너를 만들어 수집하도록 하고 있습니다.

[logstash.conf](https://github.com/jms0522/hadoop_system/tree/main/hadoop/logstash)에서 코드는 보실 수 있습니다.

Logstash에서 conf에서 filter를 통해 데이터를 변환해서 kafka에 적잽합니다.

## 🔧 Kafka

카프카는 메시징 큐의 역할로 스트리밍의 비동기 처리를 가능하게 하고, 처리 속도 차이를 흡수 할 수 있습니다.

또한 스트리밍 데이터의 데이터 유실을 방지할 수 있어 브로커로 두고 여기서 Spark를 통해 분석을 할 수 있습니다.

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/kafka_logs.png" alt="logs" width="600" />

위의 이미지처럼 카프카에 실시간으로 로그 데이터가 들어오는 걸 확인할 수 있다.

## 📊 Spark Streaming 

카프카 Streaming을 통해 데이터를 분석

분석된 데이터는 s3, hdfs등을 통해 저장.

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/kafka-hdfs.png" alt="hdfs" width="600" />

-- 진행중....


