---
title: "🚀 [Kafka-ELK] Topic Visualization"
description: "Api로 받은 데이터를 Kafka - Kibana 시각화"
date: "2024-08-19"
banner:
  src: "../../images/newkafka.png"
  alt: "ELK"
  caption: 'Photo by <u><a href="https://kafka.apache.org/documentation">kafka-docs</a></u>'
categories:
  - "Kafka"
  - "ALL"
keywords:
  - "API"
  - "Pipeline"
  - "Data"
  - "Blog"
  - "Kafka"
  - "Visualization"
---

# 📊 Topic Visualization

![Visualization](/Users/jangminsoo/Desktop/github-blog/portfolio-minimal/content/images/newkafka.png)

최근에 재미로 진행한 프로젝트에서 **Instagram Scraper API (Rapid API)**를 사용해 Instagram 데이터를 수집한 후, Kafka를 통해 전달하고, Logstash를 통해 Elasticsearch로 데이터를 전송했습니다.

이 과정에서 인덱스를 instagram-profiles로 생성한 후 Kibana에서 시각화를 시도했는데, 예상치 못한 문제들이 발생했습니다.

이번 포스트에서는 이 문제를 해결하기 위해 고민한 내용을 공유하고자 합니다. 😀

## 🌟 프로젝트 개요

이 프로젝트의 목표는 Instagram Scraper API를 통해 수집한 데이터를 실시간으로 처리하고, Elasticsearch에 저장하여 Kibana에서 시각화하는 것이었습니다. 

전체적인 데이터 흐름은 다음과 같습니다:

	1.	Instagram Scraper API: 데이터를 수집하고, 이를 JSON 형식으로 Kafka로 전송.
	2.	Kafka: 데이터를 중간에서 처리하여 Logstash로 전달.
	3.	Logstash: Kafka에서 받은 데이터를 Elasticsearch로 전달하며, 이 과정에서 데이터 변환을 수행.
	4.	Elasticsearch: 데이터를 저장하고 인덱싱하며, Kibana에서 검색 및 시각화에 사용할 수 있도록 준비.
	5.	Kibana: Elasticsearch에서 데이터를 가져와 시각화.

## ❗️ 문제 발생

데이터 파이프라인을 설정하고, Kibana에서 데이터를 시각화하려는 과정에서 문제가 발생했습니다. 

데이터는 instagram-profiles 인덱스로 정상적으로 전달된 것처럼 보였지만, Kibana에서 시각화하는 데 어려움이 있었습니다. 

구체적으로, 여러 필드가 empty fields로 나타나거나, 데이터가 제대로 변환되지 않은 상태로 저장되고 있었습니다.

## ❓ 문제 원인 추정

1. **인덱스 매핑**: Elasticsearch에서 `instagram-profiles` 인덱스의 매핑이 문제일 수 있습니다. 필드 타입이 적절하게 설정되지 않아, 데이터가 올바르게 저장되지 않고 빈 값으로 처리되고 있을 가능성이 있습니다.
   - 예를 들어, `id` 필드는 `keyword`로 매핑되어야 하는데, 문자열로 매핑되어 데이터 검색에 문제가 발생할 수 있습니다.
   
2. **Logstash의 데이터 변환**: Logstash 설정에서 JSON 데이터를 제대로 파싱하지 못하거나, 각 필드를 적절한 데이터 타입으로 변환하지 못하는 문제가 있을 수 있습니다. 특히, Logstash가 데이터를 파싱할 때 필드 이름이나 데이터 타입이 잘못 지정되면 Elasticsearch로 전달된 데이터가 예상한 대로 저장되지 않을 수 있습니다.
   - JSON 파싱 후 필드가 올바르게 변환되지 않아, Kibana에서 시각화가 제대로 이루어지지 않을 수 있습니다.

## 📚 해결을 위한 시도

1. 인덱스 매핑 확인 및 수정

- Elasticsearch에서 인덱스 매핑을 다시 한 번 확인하고, 각 필드가 적절한 데이터 타입으로 설정되어 있는지 검토했습니다.

2. Logstash 필터 설정 검토

- Logstash의 필터 설정을 다시 검토하여, JSON 파싱과 필드 변환이 올바르게 이루어지고 있는지 확인했습니다. 
- 특히, mutate 필터를 사용해 각 필드를 적절한 데이터 타입으로 변환하고, 필요 없는 필드를 제거하는 작업을 강화했습니다.

3. Kibana 인덱스 패턴 재색인

- 위의 변경 사항을 적용한 후, Kibana에서 인덱스 패턴을 다시 색인하여 새로운 필드 설정이 반영되었는지 확인했습니다.


## ✅ 결론

이 프로젝트에서 직면한 문제는 주로 인덱스 매핑과 Logstash의 데이터 변환 설정에서 비롯된 것으로 보입니다. 

Elasticsearch와 Kibana에서 데이터를 올바르게 시각화하려면, 각 구성 요소가 데이터를 정확히 처리하고 전달하는 것이 중요합니다. 

앞으로도 이러한 문제를 해결하기 위해 지속적으로 모니터링하고, 필요한 경우 설정을 수정해 나갈 계획입니다.

이와 같은 과정을 통해 문제를 해결하는 경험은 실무에서 매우 중요하다는 것을 깨닫게 되었습니다. 

여러분도 비슷한 상황을 겪고 있다면, 인덱스 매핑과 데이터 파이프라인의 각 단계를 꼼꼼히 점검해 보시길 권장합니다.

자세한 내용은 깃허브에서 확인하실 수 있습니다. [GitHub Issue #7](https://github.com/jms0522/Streaming-Data/issues/7)

감사합니다 🙌🏻


