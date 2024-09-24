---
title: "⚒️ [ELK-stack] About ELK-Stack "
description: "다양한 상황에서 사용하는 ELK-stack에 대한 설명과 경험"
date: "2024-08-18"
banner:
  src: "../../images/elk-stack.png"
  alt: "ELK"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">ELK</a></u>'
categories:
  - "Pipeline"
  - "ALL"
keywords:
  - "ELK"
  - "Pipeline"
  - "Data"
  - "Blog"
  - "Streaming"
---

# ⚒️ About ELK

!![ELK-stack](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/elk-stack.png)

## 🚀 ELK

ELK Stack은 Elasticsearch, Logstash, 그리고 Kibana의 약자로, 로그 및 이벤트 데이터를 수집, 저장, 검색, 분석, 시각화하는 데 사용되는 오픈 소스 소프트웨어 스택입니다. 
ELK Stack은 DevOps 및 데이터 분석에서 널리 사용되며, 시스템 성능을 모니터링하고, 애플리케이션 로그를 분석하며, 보안 위협을 감지하는 데 매우 유용합니다.


## 💬 들어가며

**Medical-AI 프로젝트에서 처음 실시간 데이터 파이프라인을 구축할 때 알게 되어 사용하게 되었고 다양한 장점이 있어 자주 사용하는 스택 중 하나입니다.**
지금 진행하고 있는 프로젝트에서도 사용하고 있기에, 오늘은 간단한 소개와 함께 공부해보는 시간을 갖기 위해 글을 작성합니다.
제 개인적인 생각도 포함하고 있어 모든 게 정답은 아니니 참고하시는 용도로 봐주시면 감사하겠습니다. 🫡


### Elasticsearch

- **개요**: Elasticsearch는 분산 RESTful 검색 및 분석 엔진으로, 로그 데이터를 빠르게 저장하고 검색하는 데 최적화되어 있습니다. 
  JSON 형식의 문서를 기반으로 데이터를 인덱싱하며, 다양한 유형의 데이터를 처리할 수 있습니다.
	
- **특징**:
  - **분산형**: 데이터가 여러 노드에 걸쳐 분산되어 저장되고 검색됩니다.
  - **스케일링**: 대량의 데이터를 실시간으로 처리하며, 클러스터를 확장하여 성능을 향상시킬 수 있습니다.
  - **고급 검색 기능**: 정규 표현식, 와일드카드, 유사 검색 등 다양한 검색 기능을 지원합니다.

### Logstash

- **개요**: Logstash는 서버 측 데이터 처리 파이프라인으로, 다양한 소스에서 데이터를 수집하고, 필터링 및 변환하여 Elasticsearch로 전송합니다.
	
- **특징**:
  - **다양한 입력 플러그인**: 파일, 데이터베이스, 메시징 시스템 등 다양한 데이터 소스에서 로그 데이터를 수집할 수 있습니다.
  - **필터링**: 데이터 변환, 정규화, 정제 작업을 수행할 수 있는 다양한 필터 플러그인을 제공합니다.
  - **출력**: 데이터를 Elasticsearch 외에도 다양한 출력 대상(파일, 메시지 큐 등)으로 보낼 수 있습니다.

### Kibana

- **개요**: Kibana는 Elasticsearch의 데이터 시각화 도구로, 대시보드와 차트를 사용하여 데이터를 시각적으로 분석할 수 있습니다.
	
- **특징**:
  - **대시보드**: 로그 및 메트릭 데이터를 시각화하여 대시보드에 표시합니다.
  - **검색 및 탐색**: Kibana의 UI를 통해 Elasticsearch에서 데이터를 검색하고 분석할 수 있습니다.
  - **경고 기능**: 특정 조건이 충족되면 경고를 발생시키는 기능을 제공합니다.

### Beats

- **개요**: 경량 데이터 수집 에이전트입니다. 
  Beats는 시스템의 로그, 메트릭스, 네트워크 데이터를 수집하여 Logstash나 Elasticsearch로 전송하는 역할을 합니다.
  Filebeat, Metricbeat 등 다양한 종류가 있습니다.


## ✅ 활용사례

- **로그 관리**: 애플리케이션, 서버, 네트워크 장비의 로그를 수집하고 분석하여 문제를 신속하게 진단할 수 있습니다.
- **보안 모니터링**: 보안 로그를 분석하여 침입 탐지, 비정상적인 활동 감지, 보안 정책 준수를 확인할 수 있습니다.
- **애플리케이션 성능 모니터링(APM)**: 애플리케이션의 성능 데이터를 실시간으로 수집하여 성능 병목 지점을 식별하고 최적화할 수 있습니다.

    💬 저는 프로젝트 시, 로그 관리에 목적으로 많이 사용을 하거나, 수집된 데이터를 시각화하는 대시보드로도 많이 사용하고 있습니다.
    Logstash에서 데이터를 변환, 정체 작업을 수행할 수 있어 간단한 전처리가 가능한 점도 사용하기에 편리하다고 생각합니다.
    다양한 플러그인과 오픈 소스의 풍부한 생태계도 높은 확장성과 유연성을 제공합니다.

## ❗️고려사항

- **복잡성**: 초기 설정 및 구성은 복잡할 수 있으며, 대규모 클러스터를 운영하려면 적절한 모니터링과 유지 관리가 필요합니다.
- **자원 소모**: 특히 Elasticsearch는 데이터 양과 쿼리 복잡도에 따라 높은 자원을 요구할 수 있습니다.


## 🧑🏻‍💻 마치며
오늘은 간단하게 ELK를 소개해봤는데요, 
제 [GitHub](https://github.com/jms0522/Streaming-Data)에서 자세한 코드와 이슈를 확인하실 수 있습니다. 
감사합니다.