---
title: " ⚙️ [ELK] Elasticsearch "
description: "Elasticsearch 소개하기 "
date: "2024-09-28"
banner:
  src: "../../images/elk/elasticsearch-cover.png"
  alt: "ELK"
  caption: 'Photo by <u><a href="https://www.elastic.co/kr/elasticsearch">Elasticsearch</a></u>'
categories:
  - "ELK"
  - "Elasticsearch"
  - "ALL"
keywords:
  - "Pipeline"
  - "Elasticsearch"

---

# ⚒️ Elasticsearch 란?

Elasticsearch는 실시간 분산 검색 및 분석 엔진으로, 대량의 데이터를 빠르고 효율적으로 검색하고 분석할 수 있게 해줍니다. 

## 📌 주요 특징

- **실시간 검색**: 데이터가 인덱싱되면 거의 즉시 검색이 가능합니다.
- **분산 구조**: 클러스터링을 통해 대규모 데이터를 효율적으로 처리합니다.
- **스케일 아웃**: 필요에 따라 노드를 추가하여 용량과 성능을 손쉽게 확장할 수 있습니다.
- **다양한 데이터 타입 지원**: 텍스트, 숫자, 위치 정보 등 다양한 데이터 타입을 처리할 수 있습니다.
- **RESTful API**: HTTP를 통해 간편하게 접근하고 조작할 수 있습니다.
- **강력한 쿼리 DSL**: 복잡한 검색 및 분석 쿼리를 작성할 수 있는 도메인 특화 언어을 제공합니다.

---

## 🔧 Elasticsearch의 작동 원리

Elasticsearch이 데이터를 저장하고 검색하는 과정입니다.

1. **데이터 인덱싱**: 문서를 인덱스에 추가할 때, 텍스트 데이터를 분석(토큰화, 필터링 등)하여 역인덱스를 생성합니다.
2. **검색 쿼리 처리**: 검색 쿼리를 보내면, 클러스터 내 모든 관련 샤드에서 병렬로 검색을 수행합니다.
3. **결과 집계**: 각 샤드에서 반환된 결과를 집계하여 최종 검색 결과를 제공합니다.

이런 과정을 통해서 빠르고 효율적인 검색을 가능하게 합니다.

---

## 🪓 간단한 사용 방법

- Elasticsearch을 사용하기 위해서 다양한 작업을 알아야 하는데 하나하나 설명하겠습니다.

### 인덱스 생성하기 

        curl -X PUT "localhost:9200/my-index" -H 'Content-Type: application/json' -d'
        {
        "settings": {
            "number_of_shards": 3,
            "number_of_replicas": 2
        },
        "mappings": {
            "properties": {
            "title": { "type": "text" },
            "date": { "type": "date" },
            "views": { "type": "integer" }
            }
        }
        }
        '
### 문서 인덱싱

        curl -X POST "localhost:9200/my-index/_doc/1" -H 'Content-Type: application/json' -d'
        {
        "title": "Elasticsearch 기본 사용법",
        "date": "2024-04-27",
        "views": 100
        }
        '

### 검색 쿼리

        curl -X GET "localhost:9200/my-index/_search" -H 'Content-Type: application/json' -d'
        {
        "query": {
            "match": {
            "title": "Elasticsearch"
            }
        }
        }
        '

이렇게 하면 응답은 문서들의 리스트와 관련 점수를 반환하게 됩니다.

---

## 💎 장점과 단점

    장점

	•	높은 성능: 분산 아키텍처와 역인덱스 구조 덕분에 대량의 데이터도 빠르게 검색할 수 있습니다.
	•	확장성: 클러스터에 노드를 추가함으로써 손쉽게 확장할 수 있습니다.
	•	유연한 데이터 모델링: 다양한 데이터 타입과 복잡한 매핑을 지원하여 유연하게 데이터 구조를 설계할 수 있습니다.
	•	강력한 커뮤니티 및 생태계: Kibana, Logstash 등과의 통합을 통해 풍부한 기능을 활용할 수 있습니다.

    단점

	•	복잡한 설정: 대규모 클러스터를 운영할 때는 설정과 관리가 복잡할 수 있습니다.
	•	자원 소모: 메모리와 CPU 사용량이 높을 수 있어서 하드웨어 자원이 필요합니다.
	•	학습 곡선: Elasticsearch의 다양한 기능과 쿼리 DSL을 익히는 데 시간이 걸립니다.

## 🧑🏻‍💻 결론

Elasticsearch를 파이프라인을 제작하면서 사용해본적이 있지만 제대로 사용한적 없고, 이해도가 떨어진다고 생각해서 공부를 해봤습니다.

좀 더 자세하게 공부해서 더 깊은 이해를 통해 구현해보겠습니다.

감사합니다.