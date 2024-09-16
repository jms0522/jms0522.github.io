---
title: " ⚙️ [AWS] AWS Glue "
description: "AWS 기능들을 활용하여 파이프라인 구축해보기"
date: "2024-09-18"
banner:
  src: "../../images/aws-glue/glue.png"
  alt: "AWS"
  caption: 'Photo by <u><a href="https://aws.amazon.com/ko/glue/">AWS Glue</a></u>'
categories:
  - "AWS"
  - "Glue"
  - "ALL"
keywords:
  - "Pipeline"
  - "AWS"
  - "Cloud"
  - "Glue"

---
# ⚒️ AWS Glue

[AWS Glue 배너](https://d1.awsstatic.com/product-marketing/Glue/aws-glue-hero.ea78a6686b1af9f04c99a9d6d32f0c6c1b5c5a9c.png)

**AWS Glue**는 Amazon Web Services(AWS)에서 제공하는 완전관리형 ETL(Extract, Transform, Load) 서비스입니다.

 서버리스 환경에서 데이터를 준비하고 변환하여 분석을 위한 준비 과정을 간소화합니다.

---

## 목차

1. [AWS Glue란?](#aws-glue란)
2. [주요 특징](#주요-특징)
3. [AWS Glue의 구성 요소](#aws-glues-구성-요소)
    - [Glue Data Catalog](#glue-data-catalog)
    - [Glue ETL 엔진](#glue-etl-엔진)
    - [Glue Crawlers](#glue-crawlers)
    - [Glue Jobs](#glue-jobs)
    - [Glue Development Endpoints](#glue-development-endpoints)
4. [사용 사례](#사용-사례)
    - [데이터 통합](#데이터-통합)
    - [데이터 준비](#데이터-준비)
    - [데이터 카탈로그링](#데이터-카탈로그링)
    - [머신러닝](#머신러닝)
5. [AWS Glue의 장점](#aws-glues-장점)
    - [서버리스 아키텍처](#서버리스-아키텍처)
    - [확장성](#확장성)
    - [비용 효율성](#비용-효율성)
    - [AWS 생태계와의 원활한 통합](#aws-생태계와의-원활한-통합)
6. [가격 개요](#가격-개요)
7. [AWS Glue 시작하기](#aws-glue-시작하기)
    - [AWS Glue 설정](#aws-glue-설정)
    - [Glue Crawler 생성](#glue-crawler-생성)
    - [ETL Job 생성](#etl-job-생성)
    - [Job 모니터링 및 관리](#job-모니터링-및-관리)
8. [다른 ETL 도구와의 비교](#다른-etl-도구와의-비교)
    - [AWS Glue vs. Apache Spark](#aws-glue-vs-apache-spark)
    - [AWS Glue vs. AWS Data Pipeline](#aws-glue-vs-aws-data-pipeline)
    - [AWS Glue vs. 기타 클라우드 ETL 서비스](#aws-glue-vs-기타-클라우드-etl-서비스)
9. [모범 사례](#모범-사례)
10. [참고 자료 및 추가 학습](#참고-자료-및-추가-학습)

---

## AWS Glue란?

**AWS Glue**는 데이터 준비, 변환 및 로딩을 간소화하는 완전관리형 서버리스 ETL 서비스입니다. AWS Glue는 데이터를 카탈로그링하고, 변환하며, 다양한 데이터 소스 간에 데이터를 통합하는 작업을 자동화하여 데이터 분석 및 머신러닝을 위한 준비 과정을 효율적으로 수행할 수 있도록 도와줍니다.

---

## 주요 특징

- **서버리스:** 인프라를 관리할 필요 없이 AWS Glue가 자동으로 리소스를 프로비저닝, 구성 및 확장합니다.
- **Glue Data Catalog:** 중앙 메타데이터 저장소로, 다양한 데이터 소스의 메타데이터를 관리합니다.
- **ETL 엔진:** Apache Spark를 기반으로 하여 강력하고 확장 가능한 데이터 변환 기능을 제공합니다.
- **Crawlers:** 데이터 소스를 자동으로 스캔하여 스키마를 추론하고 Data Catalog를 업데이트합니다.
- **Job 스케줄링:** ETL 작업을 특정 시간에 실행하거나 이벤트에 따라 트리거할 수 있습니다.
- **AWS 서비스와의 통합:** Amazon S3, Redshift, RDS 등 다양한 AWS 서비스와 원활하게 통합됩니다.

---

## AWS Glue의 구성 요소

### Glue Data Catalog

**Glue Data Catalog**는 AWS Glue의 핵심 메타데이터 저장소로, 데이터 소스에 대한 메타데이터를 중앙에서 관리합니다. 이를 통해 데이터의 검색, 이해 및 관리를 용이하게 합니다.

- **데이터베이스 및 테이블:** 메타데이터를 데이터베이스와 테이블로 조직합니다.
- **파티션:** 테이블을 파티션으로 분할하여 쿼리 성능을 최적화합니다.
- **버전 관리:** 데이터 스키마의 버전을 관리하여 변경 사항을 추적합니다.

### Glue ETL 엔진

AWS Glue의 **ETL 엔진**은 Apache Spark를 기반으로 하며, 대규모 데이터 처리와 변환 작업을 효율적으로 수행합니다.

- **동적 프레임:** Spark의 데이터 프레임을 확장한 데이터 구조로, 복잡한 변환 작업을 단순화합니다.
- **확장성:** 데이터의 양과 처리 요구에 따라 자동으로 확장됩니다.
- **코드 생성:** AWS Glue는 Python 또는 Scala로 ETL 코드를 자동으로 생성하여 사용자 편의를 제공합니다.

### Glue Crawlers

**Glue Crawlers**는 데이터 소스를 자동으로 스캔하여 스키마를 추론하고 Data Catalog를 업데이트하는 도구입니다.

- **자동화된 스키마 추론:** 데이터 소스의 구조를 자동으로 감지합니다.
- **정기적 스캔:** 정기적으로 데이터 소스를 스캔하여 최신 메타데이터를 유지합니다.
- **다양한 데이터 소스 지원:** Amazon S3, JDBC 호환 데이터베이스 등 다양한 소스를 지원합니다.

### Glue Jobs

**Glue Jobs**는 실제 ETL 작업을 실행하는 작업 단위입니다. 사용자는 시각적 인터페이스 또는 코드를 통해 작업을 정의할 수 있습니다.

- **코드 편집기:** AWS Glue Studio를 사용하여 시각적으로 ETL 작업을 설계할 수 있습니다.
- **스크립트 관리:** Python 또는 Scala로 작성된 ETL 스크립트를 관리할 수 있습니다.
- **재사용 가능성:** 동일한 작업을 여러 데이터 소스에 반복적으로 적용할 수 있습니다.

### Glue Development Endpoints

**Glue Development Endpoints**는 사용자 정의 ETL 스크립트를 개발하고 테스트할 수 있는 환경을 제공합니다.

- **인터랙티브 개발:** Jupyter 노트북을 통해 인터랙티브하게 코드를 개발하고 테스트할 수 있습니다.
- **커스터마이징:** 고급 사용자는 자신의 ETL 로직을 자유롭게 작성할 수 있습니다.
- **디버깅:** 개발 중 발생하는 오류를 쉽게 디버깅할 수 있는 기능을 제공합니다.

---

## 사용 사례

### 데이터 통합

AWS Glue는 다양한 데이터 소스 간의 데이터를 통합하여 일관된 데이터 웨어하우스를 구축하는 데 이상적입니다. 이를 통해 기업은 여러 시스템에서 생성된 데이터를 하나의 중앙 집중식 저장소로 통합하여 보다 효과적인 분석과 의사 결정을 내릴 수 있습니다.

### 데이터 준비

데이터 분석을 위해 원시 데이터를 정제, 변환 및 가공하는 과정에서 AWS Glue는 강력한 ETL 기능을 제공합니다. 중복 제거, 데이터 필터링, 형식 변환 등 다양한 데이터 준비 작업을 자동화하여 데이터 과학자와 분석가의 생산성을 높입니다.

### 데이터 카탈로그링

AWS Glue Data Catalog는 다양한 데이터 소스의 메타데이터를 중앙에서 관리하여 데이터 검색과 이해를 용이하게 합니다. 이를 통해 데이터 자산을 체계적으로 관리하고, 데이터 거버넌스를 강화할 수 있습니다.

### 머신러닝

AWS Glue는 머신러닝 모델 학습을 위한 데이터를 준비하는 데 유용합니다. 대규모 데이터셋을 효율적으로 처리하고, 필요한 특징을 추출하여 머신러닝 파이프라인에 통합할 수 있습니다.

---

## AWS Glue의 장점

### 서버리스 아키텍처

AWS Glue는 서버리스로 동작하므로, 사용자는 인프라를 관리할 필요 없이 데이터 통합 작업에 집중할 수 있습니다. 자동으로 리소스를 프로비저닝하고 확장하여 사용자의 요구에 맞게 대응합니다.

### 확장성

AWS Glue는 대규모 데이터 처리 작업을 자동으로 확장할 수 있습니다. 데이터의 양과 처리 요구에 따라 리소스를 유연하게 조절하여 높은 성능을 유지합니다.

### 비용 효율성

사용한 만큼만 비용을 지불하는 모델로, 초기 투자 비용 없이 필요한 시점에만 리소스를 사용할 수 있습니다. 이를 통해 비용을 최적화하고 예산을 효율적으로 관리할 수 있습니다.

### AWS 생태계와의 원활한 통합

AWS Glue는 Amazon S3, Redshift, RDS, Athena 등 다양한 AWS 서비스와 원활하게 통합됩니다. 이를 통해 데이터 이동과 관리가 간편해지고, 전체 데이터 파이프라인을 효율적으로 구축할 수 있습니다.

---

## 가격 개요

AWS Glue의 가격은 사용한 리소스와 작업 유형에 따라 다릅니다. 주요 가격 요소는 다음과 같습니다:

- **데이터 카탈로그:** 저장된 데이터 카탈로그 항목과 메타데이터 조회 요청에 따라 비용이 청구됩니다.
- **ETL 작업:** 실행된 ETL 작업의 DPU(Data Processing Unit) 시간에 따라 비용이 청구됩니다.
- **Crawlers:** 실행된 크롤러의 DPU 시간에 따라 비용이 청구됩니다.
- **개발 엔드포인트:** 개발 엔드포인트의 사용 시간과 리소스에 따라 비용이 청구됩니다.

자세한 가격 정보는 [AWS Glue 가격 페이지](https://aws.amazon.com/glue/pricing/)를 참조하세요.

---

## AWS Glue 시작하기

### AWS Glue 설정

1. **AWS 콘솔 로그인:** AWS 계정으로 로그인하고 AWS 관리 콘솔로 이동합니다.
2. **AWS Glue 서비스 선택:** 서비스 목록에서 AWS Glue를 선택합니다.
3. **필수 IAM 권한 설정:** AWS Glue를 사용하기 위해 필요한 IAM 역할과 권한을 설정합니다.

### Glue Crawler 생성

1. **Crawler 생성:** AWS Glue 콘솔에서 "Crawlers" 메뉴로 이동하여 새 크롤러를 생성합니다.
2. **데이터 소스 지정:** 크롤러가 스캔할 데이터 소스를 지정합니다. 예를 들어, Amazon S3 버킷을 선택할 수 있습니다.
3. **대상 데이터 카탈로그 선택:** 크롤러가 메타데이터를 저장할 데이터 카탈로그 데이터베이스를 선택합니다.
4. **스케줄 설정:** 크롤러가 주기적으로 실행될 스케줄을 설정합니다.
5. **Crawler 실행:** 크롤러를 실행하여 데이터 소스의 메타데이터를 Data Catalog에 등록합니다.

### ETL Job 생성

1. **Job 생성:** AWS Glue 콘솔에서 "Jobs" 메뉴로 이동하여 새 ETL Job을 생성합니다.
2. **Job 이름 및 IAM 역할 설정:** Job의 이름과 실행할 IAM 역할을 지정합니다.
3. **데이터 소스 및 타겟 설정:** 데이터 소스와 변환 후 데이터를 저장할 타겟을 설정합니다.
4. **스크립트 편집:** AWS Glue Studio를 사용하여 시각적으로 ETL 작업을 설계하거나, 직접 Python/Scala 코드를 작성합니다.
5. **Job 실행:** ETL Job을 실행하여 데이터를 변환하고 타겟에 저장합니다.

### Job 모니터링 및 관리

1. **Job 모니터링:** AWS Glue 콘솔에서 실행 중인 Job의 상태를 모니터링하고 로그를 확인할 수 있습니다.
2. **에러 관리:** 실패한 Job의 에러 로그를 분석하여 문제를 해결합니다.
3. **Job 최적화:** Job의 성능을 최적화하기 위해 리소스 할당과 변환 로직을 조정합니다.

---

## 다른 ETL 도구와의 비교

### AWS Glue vs. Apache Spark

- **AWS Glue:** 완전관리형 서비스로, 서버 관리 없이 ETL 작업을 수행할 수 있습니다. Spark 기반의 강력한 변환 기능을 제공하며, AWS 생태계와의 통합이 뛰어납니다.
- **Apache Spark:** 오픈 소스 클러스터 컴퓨팅 프레임워크로, 유연성과 확장성이 뛰어나지만, 인프라 관리가 필요합니다. 사용자 정의가 용이하지만, AWS Glue에 비해 설정과 관리가 복잡할 수 있습니다.

### AWS Glue vs. AWS Data Pipeline

- **AWS Glue:** 서버리스 ETL 서비스로, 데이터 카탈로그링과 자동 스키마 추론 기능을 제공합니다. Spark 기반의 강력한 변환 기능을 지원합니다.
- **AWS Data Pipeline:** 데이터 이동 및 변환을 위한 워크플로우 서비스로, 복잡한 데이터 파이프라인을 시각적으로 설계할 수 있습니다. AWS Glue보다 유연한 작업 스케줄링과 다양한 작업 타입을 지원하지만, 서버 관리를 필요로 할 수 있습니다.

### AWS Glue vs. 기타 클라우드 ETL 서비스

- **Google Cloud Dataflow:** 완전관리형 스트리밍 및 배치 데이터 처리 서비스로, Apache Beam을 기반으로 합니다. 실시간 데이터 처리가 강점입니다.
- **Azure Data Factory:** 완전관리형 데이터 통합 서비스로, 다양한 데이터 소스 간의 데이터 이동과 변환을 지원합니다. Microsoft 생태계와의 통합이 뛰어납니다.
- **AWS Glue의 강점:** AWS 생태계와의 깊은 통합, 서버리스 아키텍처, 자동화된 데이터 카탈로그링 기능 등이 주요 강점입니다.

---

## 모범 사례

1. **Data Catalog 활용:** Data Catalog를 적극 활용하여 데이터 메타데이터를 체계적으로 관리하고, 데이터 검색을 용이하게 합니다.
2. **크롤러 스케줄링 최적화:** 데이터 소스의 변경 빈도에 따라 크롤러 실행 스케줄을 최적화하여 최신 메타데이터를 유지합니다.
3. **ETL Job 최적화:** Job의 성능을 최적화하기 위해 필요한 리소스를 적절히 할당하고, 불필요한 변환 작업을 최소화합니다.
4. **로그 및 모니터링 설정:** AWS Glue의 로그와 모니터링 기능을 활용하여 ETL 작업의 상태를 지속적으로 모니터링하고, 오류를 신속하게 대응합니다.
5. **보안 및 권한 관리:** IAM 역할과 정책을 통해 AWS Glue 리소스에 대한 접근 권한을 철저히 관리하여 데이터 보안을 강화합니다.

---
## 참고 자료 및 추가 학습

- [AWS Glue 공식 문서](https://docs.aws.amazon.com/glue/index.html)
- [AWS Glue 시작하기 가이드](https://docs.aws.amazon.com/glue/latest/dg/start.html)
- [AWS Glue Data Catalog 소개](https://docs.aws.amazon.com/glue/latest/dg/components-overview.html#components-data-catalog)
- [AWS Glue Pricing](https://aws.amazon.com/glue/pricing/)
- [AWS Glue vs Apache Spark](https://aws.amazon.com/glue/features/)
- [AWS Glue 튜토리얼](https://aws.amazon.com/glue/getting-started/)
