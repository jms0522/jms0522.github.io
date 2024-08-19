---
title: "🚀 [Streaming data] ELK-Stack-V1"
description: "Streaming-data Project version.1"
date: "2024-08-19"
banner:
  src: "../../images/ELK-Stack-architecture.png"
  alt: "ELK"
  caption: 'Photo by <u><a href="https://sematext.com/guides/elk-stack/">ELK-stack-guide</a></u>'
categories:
  - "Project"
  - "Pipeline"
  - "ALL"
keywords:
  - "ELK"
  - "Pipeline"
  - "Data"
  - "Blog"
  - "Streaming"
  - "V1"
---

# 🚀 ELK V1

![ELK V1](/Users/jangminsoo/Desktop/github-blog/portfolio-minimal/content/images/multipipeline.png)


**ELK Stack**은 Elasticsearch, Logstash, 그리고 Kibana의 약자로, 로그 및 이벤트 데이터를 수집, 저장, 검색, 분석, 시각화하는 데 사용되는 오픈 소스 소프트웨어 스택입니다. ELK Stack은 DevOps 및 데이터 분석에서 널리 사용되며, 시스템 성능을 모니터링하고, 애플리케이션 로그를 분석하며, 보안 위협을 감지하는 데 매우 유용합니다.

## 💬 포스트 개요

- **제목**: Kafka와 ELK Stack을 이용한 실시간 로그 처리 및 시각화
- **소개**: 이번 포스트에서는 Kafka와 ELK Stack(Filebeat, Logstash, Elasticsearch, Kibana)을 활용해 실시간 로그 데이터를 수집, 처리, 그리고 시각화하는 방법을 다룹니다. 이 과정을 통해 실시간 데이터 파이프라인의 구성과 각 구성 요소의 역할을 이해할 수 있습니다.

## 🌟 프로젝트 배경

서비스 운영 중 발생하는 로그 데이터를 실시간으로 수집하고, 이를 통해 빠른 문제 해결과 데이터 기반 의사 결정을 지원하기 위해 이 프로젝트를 시작했습니다.

## ⚙️ 아키텍처 설명

이 프로젝트의 아키텍처는 **Filebeat, Kafka, Logstash, Elasticsearch, Kibana**로 구성됩니다. Filebeat는 로그 데이터를 수집하고, Kafka는 이를 중개하며, Logstash는 데이터를 처리하여 Elasticsearch에 저장하고, Kibana는 시각화를 담당합니다.

## ❗️ 개선 사항

향후에는 Logstash에서 더 복잡한 필터링 작업을 추가하고, Kafka 클러스터를 확장하여 가용성을 높이는 것을 고려하고 있습니다.

## 🧑🏻‍💻 마치며

Kafka와 ELK Stack을 사용하여 로그 데이터를 실시간으로 수집하고 시각화하는 환경을 구축할 수 있었습니다. 익숙한 작업이라 구성하는 자체는 어렵지 않았습니다. 처음 V1을 구성하였고, 더 디테일한 작업들과 hadoop-spark 파이프라인을 구성하여 비교해 볼 예정입니다. 모든 이슈와 코드 사항은 [Github](https://github.com/jms0522/Streaming-Data)에서 확인 가능합니다.