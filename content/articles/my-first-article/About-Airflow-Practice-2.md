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


### 📊 사용된 기술 스택
- **Docker**: 애플리케이션을 컨테이너로 패키징하여 독립적으로 실행
- **Apache Airflow**: 워크플로우 관리 플랫폼
- **SFTPoperator** : SFTP 서버와의 파일 전송 등등
- **PostgreSQL**: 관계형 데이터베이스 관리 시스템



