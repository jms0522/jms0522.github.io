---
title: " 🌟 [Spark] Structured Streaming -2 "
description: "Spark의 구조적 스트리밍에 대해."
date: "2024-09-05"
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
# 💬 Apache Spark Streaming -2

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/spark-work.png" alt="work" width="600" />

# 🌟 Apache Spark 구조적 스트리밍(Structured Streaming)

오늘은 [Apache Spark docs](https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html)를 읽고 그에 대한 내용을 정리하겠습니다.

지금 Kafka와 Spark를 이용해 실시간 데이터 처리를 하고 있는데 docs를 읽어보면 훨씬 도움이 될 거 같습니다.

## ✅ 핵심 아이디어

구조적 스트리밍에 대한 핵심 아이디어는 **스트림 데이터를 지속적으로 추가되는 테이블로 처리**하는 것입니다.

스트리밍 데이터를 정적 테이블과 같이 표현하고 이를 무제한 입력 테이블에서 **증분 쿼리**로 실행하는 것, 이것이 핵심인 거 같습니다.

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/idea.png" alt="work" width="600" />

밑에 사진을 보시면 **'입력되는 데이터 스트림'**을 **'입력테이블'**로 간주하여 도착하는 모든 데이터는 입력 테이블에 추가되는 Row와 같다는 것!

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/basicidea.png" alt="work" width="600" />

또한 입력에 대한 결과는 **결과 테이블**을 생성하여 입력 테이블에 추가되는 데이터를 결과 테이블에 업데이트 합니다.

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/answertable.png" alt="work" width="600" />

여기서의 Output은 외부 저장소에 쓰여지는 걸 의미합니다.

출력은 3가지 모드로 정의할 수 있고, 상황에 맞춰 사용하면 됩니다. (설명 생략) 🙏🏻

   - 전체 모드
   - 추가 모드
   - 업데이트 모드 (2.11 부터 사용 가능)

이 예시를 보면 정확히 이해할 수 있습니다.

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/ex.png" alt="work" width="600" />

왼쪽에서 오른쪽으로 데이터가 들어오고 wordcount를 query를 통해 결과 테이블로 업데이트된 카운트를 계산하는 **증분** 쿼리를 진행하고 있습니다.

❗️**Structured Streaming**에서 중요한 점은 **전체 테이블을 구체화 하지 않는다**는 점입니다.

여기서 최신 데이터를 읽고 결과를 업데이트한 뒤 **소스 데이터는 버린다**는 점입니다.

## ✅ 결함 허용

내결함성을 1회 보장 (정확한 한 번)

스파크 스트리밍은 진행상황 등을 안정적으로 추적하여 재시작 또는 재처리를 통해 오류상황을 처리하여 내결함성을 1회 보장한다.

## 📊 주요 측면

<img src="https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-practice/4side.png" alt="work" width="600" />

- 오류, 지연 작업 발생 시 신속한 복구가 가능

   - 장애 발생 시 체크포인트를 활용하여 복구

   - 자동으로 작업을 다른 노드로 재비치 가능 (유연한 실패 복구)

- 로드 밸런싱과 리소스 사용률 개선

   - 자동 스케일링 : 처리량 증가시 클러스터 크기 확장 및 축소 가능

   - 동적 리소스 할당 : 동적으로 자원 할당 (CPU, 메모리 등)

- 정적 Dataset와 인터랙티브 쿼리를 사용해 스트리밍 데이터 결합

   - 스트리밍 데이터와 정적 데이터 결합이 가능 -> 복합적인 분석이 가능

   - 실시간 처리 동시에 쿼리를 통해 실시간 분석이 가능 -> 풍부한 인사이트 제공

- 고급 처리 라이브러리(SQL, 머신 러닝, 그래프 처리)와 네이티브 방식으로 통합

   - 머신 러닝, 그래프 관계 분석 등 다양한 라이브러리로 효율적인 분석 기능 사용 가능
