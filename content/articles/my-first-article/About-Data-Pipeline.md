---
title: " 🌟 [Pipeline] 데이터 파이프라인 제작 "
description: "데이터 파이프라인 제작."
date: "2024-09-14"
banner:
  src: "../../images/pipeline/pipeline-cover.png"
  alt: "Pipeline"
  caption: 'Photo by <u><a href="https://www.ibm.com/kr-ko/topics/data-pipeline">About Pipeline</a></u>'
categories:
  - "Pipeline"
  - "ALL"
keywords:
  - "Pipeline"
  - "Data Warehouse"
  - "Data Lake"
---
# 💬 데이터 파이프라인 'A - Z' 

오늘은 데이터 파이프라인을 제작해보려고 합니다.

여러가지 기술들을 총합하여 데이터 레이크, 마트등을 구성해보고 

데이터 추출, 변환 등으로 데이터 분석을 할 수 있는 대시보드까지 구현해보도록 하겠습니다.

일단 첫 포스팅의 목표는 데이터를 수집해 kafka 전송, spark 데이터 변환까지가 1차 목표입니다.

스트리밍 파이프라인과 배치 파이프라인을 제작하여 관리하고 모니터링까지 진행해보겠습니다 🫡

## 데아터 선택



스트리밍 : 시스템 로그 + ?? 

배치 : API , 크롤링

일단은 UPBIT에서 API를 통해 전체 market 데이터를 얻은 후에 지금까지의 모든 일별 데이터를 DB(postgres)에 저장했습니다.

이후 하루치의 데이터는 배치를 통해 가져오게 했습니다.

또한 로깅을 통해 log 기록을 남겨 저장하고 있습니다.



