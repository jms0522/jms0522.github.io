---
title: " 🌟 [Spark] Spark Practice-1 "
description: "간단한 spark 실습 1 "
date: "2024-09-03"
banner:
  src: "../../images/spark-cover.png"
  style: "width: 100%; height: auto;"
  alt: "Spark"
  caption: 'Photo by <u><a href="https://spark.apache.org">Spark</a></u>'
categories:
  - "Spark"
  - "ALL"
keywords:
  - "Pipeline"
  - "Blog"
  - "Spark"
---
# 🚀 Apache Spark 

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/spark-hadoop.png" alt="Hadoop-Spark" width="600" />

# 🌟 Hadoop과 Spark의 간단한 실습을 진행해보자!

docker를 통해 EC2에서 Hadoop 클러스터를 생성하고, yarn cluster 모드를 이용한 spark의 간단한 실습입니다.

오늘은 간단한 실습만 진행하고 다음엔 좀 더 복잡한 내용과 스트리밍 처리까지 진행하겠습니다. 🫡

## 💬 기본 구성

[hadoop 및 spark 설정파일](https://github.com/jms0522/hadoop_system)

## 💫 진행 순서

- 테스트를 진행할 데이터셋 준비 

![New York Cars ~ Big Data (2023)](https://www.kaggle.com/datasets/ahmettalhabektas/new-york-cars-big-data-2023)

- 로컬에 다운받은 dataset을 hdfs에 전송

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/hdfs.png" alt="hdfs" width="600" />

- Spark 시작 - hadoop 연결 확인

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/spark-connection.png" alt="connection" width="600" />

- Jupyter notebook에서 spark로 간단한 분석

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/spark-notebook.png" alt="jupyter" width="600" />