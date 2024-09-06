---
title: " 🌟 [Airflow] Airflow Practice-2 "
description: "Airflow 간단한 실습입니다."
date: "2024-09-01"
banner:
  src: "../../images/airflow-profile.png"
  alt: "Airflow"
  caption: 'Photo by <u><a href="https://airflow.apache.org">Airflow</a></u>'
categories:
  - "Airflow"
  - "ALL"
keywords:
  - "Workflow"
  - "Pipeline"
  - "Practice"
  - "Blog"
  - "Airflow"
  - "Monitoring"
---

# 🌬️ Apache Airflow: 공부하기 - 2

![Airflow](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-profile.png)


# 📉 Error를 모니터링 해보자!

## 🌟 프로젝트 개요

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-ing/monitoring.png" alt="monitoring" width="600" />

- 오류를 모니터링하고 알림 이메일을 자동으로 보내는 Airflow 데이터 파이프라인을 구축.

- Kibana나 Grafana등으로 대시 보드 구축은 해봤지만 간단한 Airflow 파이프라인으로 오류를 검출하기 위함. 

# ✅ 진행 과정

## 간단한 실습을 위해 가짜 데이터를 생성

## 데이터를 생성 후 postgres 테이블 생성 

## 테이블이 존재하면 데이터 적재
  
- 생성한 데이터 적재되는 모습

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-slack/data.png" alt="데이터 적재 모습" width="600" />

## 생성된 데이터가 postgres에 적재 완료 시 슬랙 알람 (싪패시 동일하게 알람)

- 간단한 알람
- 원하는 알람에 따라 상세하게 조절이 가능

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-slack/data.png" alt="간단한 알림" width="600" />

## Airflow 자동화 모습

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-slack/finish.png" alt="간단한 dag 완료" width="600" />

- 코드는 [Airflow-basic-send-to-slack](https://github.com/jms0522/Streaming-Data/blob/main/airflow/dags/data_generate_send_postgres_alert_slack.py)에서 확인 가능합니다.

## 📊 사용된 기술 스택
- **Docker**: 애플리케이션을 컨테이너로 패키징하여 독립적으로 실행
- **Apache Airflow**: 워크플로우 관리 플랫폼
- **PostgreSQL**: 관계형 데이터베이스 관리 시스템
- **Postgres Hook**: Airflow Connections
- **Slack Hook**: Airflow Connections

# 🧑🏻‍💻 느낀점

- 사실 간단한 dag라도 만드는데 좀 까다로운 부분이 있었는데요,

- 버전이라던가 의존성 관리하는 부분이 좀 귀찮고 번거로운 느낌이 있었습니다.

- 더 고도화된 Airflow를 위해 실습을 많이 진행해보겠습니다. 😅 


