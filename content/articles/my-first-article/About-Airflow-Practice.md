---
title: " 🌟 [Airflow] Airflow Practice "
description: "Airflow 간단한 실습입니다."
date: "2024-08-27"
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


# 🔫 Airflow를 활용한 Faker 데이터 생성 * 활용하기

## 🌟 프로젝트 개요

Airflow를 활용해 다양한 데이터 워크플로우를 구성하고, 데이터를 처리하는 방식을 공부하고 실습합니다.


### 📊 사용된 기술 스택
- **Docker**: 애플리케이션을 컨테이너로 패키징하여 독립적으로 실행
- **Apache Airflow**: 워크플로우 관리 플랫폼
- **Faker**: 다양한 가짜 데이터를 생성하는 라이브러리
- **Kafka**: 분산 스트리밍 플랫폼
- **PostgreSQL**: 관계형 데이터베이스 관리 시스템

## ⚒️ 환경 설정

## 💬 진행 상황

### 1. Faker 라이브러리를 통해 가짜 데이터 생성
    from faker import Faker
    import shortuuid
    from datetime import datetime
    from airflow import DAG
    from airflow.operators.python import PythonOperator

    def create_fake_user() -> dict:
        fake = Faker()
        fake_profile = fake.profile()
        
        key_list = ["name", "job", "residence", "blood_group", "sex", "birthdate"]
        fake_dict = {}

        # 선택된 키의 값을 fake_dict에 추가
        for key in key_list:
            fake_dict[key] = fake_profile[key]
            
        fake_dict["phone_number"] = fake.phone_number()
        fake_dict["email"] = fake.email()
        fake_dict["uuid"] = shortuuid.uuid()
        # YYYYMMDD 변환
        fake_dict['birthdate'] = fake_dict['birthdate'].strftime("%Y%m%d")
        fake_dict['timestamp'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        return fake_dict

    def generate_fake_data(num_records: int):
        fake_users = []
        for _ in range(num_records):
            user = create_fake_user()
            fake_users.append(user)
        return fake_users

    if __name__ == "__main__":
        data = generate_fake_data(30)
        for user in data:
            print(user)

### 2. 모든 airflow 데이터 postgres에 저장.

- Airflow 데이터 목록과 제가 만든 **fake_data** 목록 결과입니다.

![Airflow](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-ing/postgres_data_list.png)

- **fake_data**의 데이터를 확인한 결과입니다.

![Airflow](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/airflow-ing/postgres_data_show.png)


## 3. 데이터 Kafka에 전달

- [x] Postgres에 있는 데이터를 읽어서 Kafka로 보내기.
- [ ] Airflow DAG를 이용해 스케줄러를 통해 관리하기.
    - Kafka에 데이터 전송하는 과정에서 계속 문제가 발생함.

# 📌 진행하고 싶은 작업

- [ ] Airflow를 통해 스트리밍 데이터 배치 처리하기.
- [ ] 데이터 정합성 보장
