---
title: " 🌟 [Airflow] Airflow Tip "
description: "Airflow 간단한 소개글입니다. - 기초 내용"
date: "2024-08-21"
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
  - "Data"
  - "Blog"
  - "Airflow"
  - "Scheduler"
---

# 🌬️ Apache Airflow: 공부하기

![Airflow](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-profile.png)


## ✅ DAG 파일 배치

airflow의 dags 폴더에 배치하면 자동으로 인식됩니다.

## ✅ 의존성 설정

    start 태스크가 end 태스크 전에 실행되도록 설정하는 방법입니다.

    start >> end

## ✅  효율적인 DAG 관리 팁


**DAG의 동적 생성 피하기**

	동적 DAG 생성 자제: 동적으로 DAG를 생성하는 것은 코드 복잡성을 높이고, 성능 문제를 일으킬 수 있습니다. 
    
    대신, 파라미터화된 태스크를 사용하여 유사한 작업을 수행하는 여러 태스크를 생성하는 것이 좋습니다.

**에러 핸들링**
    
    테스크 실패 시 알람 : 이메일 혹은 슬랙 알람을 설정해서 확인이 가능합니다. 저는 개인적으로 슬랙을 선호합니다. 간단하게 확인하기 좋아요.

**성능 최적화**

    병렬 실행 활용 : 병렬로 실행되도록 실행하여 전체 실행 시간을 단축할 수 있습니다.

**리소스 제한**

    resource 파라미터 조정으로 CPU나 메모리 사용량을 조절하여 특정 테스크가 너무 많은 리소스를 사용하지 않도록 방지할 수 있습니다.

**DAG 실행 모니터링**
    
    내장 로그 외에도 Prometheus, Granfana등 외부 모니터링 도구를 사용하여 메트릭 수집 후 시각화가 가능합니다.
    
    grafana, prometheus는 경험이 있어 이것도 진행할 생각입니다.

**에러 처리 및 예외 처리**
    
    발생할 수 있는 예외를 처리하여 중단되지 않도록 할 수 있습니다.

## 💬 느끼는 점

지금까지 airflow를 집중적으로 다뤄본 적 없어서 생각보다 여러가지로 복잡하다.
하지만 데이터 엔지니어에게 필수적이라고 할 만큼 중요한 기술 스택이기에, 집중해서 공부하고
다양한 프로젝트에서 사용하여 숙련도를 확실하게 높여야겠다.
