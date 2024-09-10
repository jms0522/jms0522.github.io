---
title: " 🌟 [Airflow] Airflow Practice-3 "
description: "Airflow 간단한 실습입니다."
date: "2024-09-10"
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
  - "Crawling"
---

# 🌬️ Apache Airflow: 공부하기 - 3

![Airflow](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-profile.png)

# 📉 데이터베이스 저장 및 테이블 생성

## 🌟 프로젝트 개요

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-ing/monitoring.png" alt="monitoring" width="600" />

간단한 Airflow를 실습합니다.

- [Upbit-API](https://docs.upbit.com/docs/upbit-quotation-restful-api)에서 서로 다른 데이터를 받아 합치는 걸 실습.

- 전체 마켓 데이터 (market) , 그 마켓에 대한 가격 정보 (Price)를 가져와서 둘이 합치는 것.

- market에 대한 이름을 추출해서 Price를 구하는 코드의 파라미터로 전달하여 데이터 수신.

# ✅ 진행 과정

## UPBIT에서 API를 전송 받음.

## market과 price를 각각의 테이블에 저장한 뒤 join.

## 완료 시 슬랙으로 알림.
  
### 📌 Market Data Preview

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-3/market-upbit.png" alt="market" width="600" />

- market 데이터를 받아서 테이블 생성한 뒤 저장.

### 📌 Prices Data Preview

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-3/price-upbit.png" alt="price" width="600" />

- prices 데이터 저장

### 📌 Combined Data Preview

- 합친 새로운 데이터 생성

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-3/combined-upbit.png" alt="combined" width="600" />

- 코드는 [Upbit Pipeline](https://github.com/jms0522/Streaming-Data/blob/main/airflow/dags/upbit_data_pipeline.py)에서 확인 가능합니다.

### 📌 Airflow Preview

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-3/success.png" alt="dags" width="600" />


<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-3/dag-workflow.png" alt="workflow" width="600" />


## 📊 사용된 기술 스택
- **Docker**: 애플리케이션을 컨테이너로 패키징하여 독립적으로 실행
- **Apache Airflow**: 워크플로우 관리 플랫폼
- **PostgreSQL**: 관계형 데이터베이스 관리 시스템
- **Postgres Hook**: Airflow Connections
- **Slack Hook**: Airflow Connections
- **UPbit API** : API

# 🧑🏻‍💻 느낀점

- 간단한 실습을 진행해봤는데요, 좀 더 효율적인 파이프라인을 고민해봐야겠습니다.😅




