---
title: " 🔫 AWS Pipeline 구축해보기 - 1 "
description: "AWS 기능들을 활용하여 파이프라인 구축해보기"
date: "2024-09-11"
banner:
  src: "../../images/aws/aws-cover.png"
  alt: "AWS"
  caption: 'Photo by <u><a href="https://docs.aws.amazon.com/">AWS docs</a></u>'
categories:
  - "AWS"
  - "Streaming"
  - "ALL"
keywords:
  - "Pipeline"
  - "AWS"
  - "Cloud"

---
# ☁️ AWS 에서 Pipeline 구축해보자 - 1  


오늘은 AWS의 기능들을 사용하여 파이프라인을 구축해보려고 합니다.

AWS Glue, AWS Step Functions, Amazon ECS / EKS, AWS Lambda 등등

많이 들어봤지만 사용해보지 않았던 기술들을 공부하고 사용험으로

많은것을 배우고 싶습니다.

이 포스트는 단계별로 작성될 예정입니다. 

# 🚙 Socar

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/aws/aws-component.png" alt="Socar" width="600" />

위의 이미지는 Socar에서 FMS(차량관제시스템)을 효율적으로 제작하기 위해 만든 파이프라인의 컴포넌트입니다.

위와 같이 **스트리밍 파이프라인**에서 **IoT core, MSK(Managed Streaming for Kafka Service), Kafka Connect**등을 이용해서 구성하고

실시간 데이터 조회 목적으로 **DynamoDB**, 데이터 레이크 목적으로 **S3**를 사용하고 있습니다.

또한 **Lambda, Redshift,  Airflow, Glue Data Catalog** 등의 기술을 활용하여 배치 파이프라인도 운영중입니다.

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/aws/data-flow.png" alt="flow" width="600" />

결국이 파이프라인의 목적은 데이터를 데이터베이스/스토리지에 저장하는 것인데 데이터의 흐름을 보면 위와 같습니다.

1. 차량에서 다양한 상태의 데이터를 수집합니다.

2. 수집되는 데이터는 발송 주기에 맞춰 IoT Core로 전송합니다.

3. IoT Core 메시지 브로커에 저장된 메시지는 라우팅 규칙에 따라 상위 주제별로 Kafka Topic으로 라우팅 됩니다.

4. Kafka Topic의 각 파티션에 저장된 메시지는 Kafka Connect를 통해 데이터 싱크(DynamoDB, S3)로 적재됩니다. (Redis는 필터링을 하는 Kafka Consumer를 통해 적재됩니다)

5. S3에 적재된 Json 포맷의 객체는 Lambda를 통해 분류/변형 후 S3에 적재됩니다 (Redshift, Athena 쿼리에 적합한 형태로 적재됩니다)

6. Airflow로 스케줄링된 Redshift 쿼리를 통해 데이터를 집계하여 RDS(데이터 마트)에 저장됩니다.

[Socar-Tech-Blog](https://tech.socarcorp.kr/data/2023/01/17/build-fms-data-pipeline-1.html)

# ⚙️ 기능 소개 (모든 기능 아님)

1. AWS CodePipeline

	•	설명: AWS CodePipeline은 CI/CD 파이프라인 자동화를 위한 서비스입니다. 애플리케이션 코드 변경 사항을 자동으로 빌드, 테스트, 배포하는 파이프라인을 구성할 수 있습니다.
	•	사용처: DevOps, 애플리케이션 배포 자동화.

2. AWS CodeBuild

	•	설명: AWS CodeBuild는 소스 코드 빌드를 자동화하는 서비스로, 테스트와 빌드를 수행하여 패키지를 생성할 수 있습니다.
	•	사용처: 빌드 자동화, 테스트, 애플리케이션 패키징.

3. AWS CodeDeploy

	•	설명: AWS CodeDeploy는 애플리케이션 배포를 자동화하는 서비스로, EC2, Lambda, 또는 온프레미스 서버에 배포할 수 있습니다.
	•	사용처: 다양한 환경에서의 애플리케이션 배포 자동화.

4. AWS CodeCommit

	•	설명: AWS CodeCommit은 Git 기반의 소스 코드 저장소 서비스입니다. 코드 버전 관리를 지원하며, 파이프라인의 소스 스테이지로 사용할 수 있습니다.
	•	사용처: 소스 코드 저장소 및 버전 관리.

5. AWS Lambda

	•	설명: 서버리스 컴퓨팅을 위한 서비스로, 이벤트 기반으로 코드를 실행할 수 있습니다. CI/CD 파이프라인에서 특정 작업을 처리할 때 활용될 수 있습니다.
	•	사용처: 서버리스 애플리케이션, 이벤트 기반 트리거 처리.

6. Amazon S3

	•	설명: AWS의 오브젝트 스토리지 서비스로, 빌드된 아티팩트, 로그, 데이터 파일 등을 저장하는 데 사용할 수 있습니다.
	•	사용처: 빌드 결과 저장, 정적 웹 호스팅, 데이터 백업.

7. Amazon EC2

	•	설명: AWS의 가상 서버 서비스로, 애플리케이션 실행 환경을 제공하며 파이프라인의 배포 대상 서버로 사용할 수 있습니다.
	•	사용처: 애플리케이션 실행, 테스트 환경 구축.

8. Amazon ECS / EKS

	•	설명: ECS는 AWS의 컨테이너 오케스트레이션 서비스로, Docker 컨테이너를 관리하고 배포할 수 있습니다. EKS는 Kubernetes 기반의 오케스트레이션을 제공합니다.
	•	사용처: 컨테이너화된 애플리케이션 배포 및 관리.

9. Amazon RDS

	•	설명: AWS의 관리형 데이터베이스 서비스로, MySQL, PostgreSQL, Oracle, SQL Server 등 다양한 데이터베이스를 운영할 수 있습니다. 데이터 파이프라인에서 중요한 데이터 저장소로 활용됩니다.
	•	사용처: 데이터베이스 배포 및 관리.

10. AWS CloudFormation

	•	설명: AWS 리소스의 프로비저닝을 코드로 정의하여 인프라를 자동으로 배포하고 관리할 수 있는 서비스입니다.
	•	사용처: 인프라 프로비저닝 자동화, IaC(Infrastructure as Code).

11. AWS Step Functions

	•	설명: 서버리스 상태 머신을 이용해 복잡한 워크플로우를 관리할 수 있는 서비스입니다. 여러 AWS 서비스 간의 조정 및 작업 흐름 관리를 자동화할 수 있습니다.
	•	사용처: 복잡한 워크플로우 및 데이터 파이프라인 관리.

12. Amazon CloudWatch

	•	설명: AWS 리소스 및 애플리케이션을 모니터링하고 로그를 분석하는 데 사용하는 서비스입니다. 파이프라인에서 발생하는 이벤트나 오류를 모니터링하고 대응할 수 있습니다.
	•	사용처: 리소스 모니터링, 로그 분석, 이벤트 알림.

13. Amazon SNS (Simple Notification Service)

	•	설명: 알림 및 메시징 서비스로, 파이프라인 내의 상태 변화, 오류 알림 등을 발송하는 데 사용됩니다.
	•	사용처: 알림, 메시징, 이벤트 트리거.

14. Amazon SQS (Simple Queue Service)

	•	설명: 메시지 큐 서비스로, 비동기적으로 작업을 처리하거나 서비스 간 메시지를 전달할 수 있습니다.
	•	사용처: 비동기 작업 처리, 대기열을 통한 작업 분배.

15. AWS Glue

	•	설명: 데이터 통합 및 ETL(Extract, Transform, Load) 작업을 자동화할 수 있는 서비스입니다. 데이터 파이프라인에서 복잡한 데이터 변환 작업에 사용됩니다.
	•	사용처: ETL 작업, 데이터 파이프라인.

16. Amazon Kinesis

	•	설명: 실시간 스트리밍 데이터를 처리하고 분석할 수 있는 서비스입니다. 실시간 로그, 메트릭, 데이터 스트림을 처리하는 데 활용됩니다.
	•	사용처: 실시간 데이터 스트리밍, 로그 및 메트릭 처리.

17. AWS Fargate

	•	설명: 서버리스 방식으로 컨테이너를 실행하는 서비스로, ECS 및 EKS에서 사용됩니다. 서버 관리를 신경 쓰지 않고 컨테이너를 실행할 수 있습니다.
	•	사용처: 서버리스 컨테이너 실행, 애플리케이션 배포.

18. AWS SAM (Serverless Application Model)

	•	설명: 서버리스 애플리케이션을 정의하고 배포하는 데 사용되는 서비스로, Lambda, API Gateway 등을 포함한 인프라를 코드로 관리할 수 있습니다.
	•	사용처: 서버리스 애플리케이션 개발 및 배포.

19. AWS App Runner

	•	설명: 컨테이너화된 웹 애플리케이션을 간단하게 빌드하고 배포할 수 있는 서비스입니다.
	•	사용처: 컨테이너 기반 웹 애플리케이션 배포.


# 🧑🏻‍💻 시작하며..

이렇게 다양한 기업들에서 Cloud 환경을 사용하고 저도 AWS를 자주 사용하는 입장으로 

AWS의 기능들을 활용해서 요구사항에 맞는 파이프라인을 제작해보겠습니다.