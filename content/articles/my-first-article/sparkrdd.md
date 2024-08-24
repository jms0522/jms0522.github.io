---
title: " 🌟 [Spark] About Spark "
description: "Spark RDD"
date: "2024-08-23"
banner:
  src: "../../images/spark-cover.png"
  alt: "Spark"
  caption: 'Photo by <u><a href="https://spark.apache.org">Spark</a></u>'
categories:
  - "Spark"
  - "ALL"
keywords:
  - "Pipeline"
  - "RDD"
  - "Blog"
  - "Spark"
---
# 💬 Apache Spark 

![Spark](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/spark-cover.png)

## 💫 RDD란 무엇인가?

[RDD](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/rdd-2.png)


**RDD**(Resilient Distributed Dataset)는 Apache Spark의 핵심 데이터 구조로, 

읽기 전용 권한이 있는 분산 메모리 컬렉션 이며, 가장 중요한 것은 내결함성이 있습니다.

RDD는 대규모 데이터를 다루는 데 있어 강력한 성능과 내결함성(Fault-Tolerance)을 제공하며, 여러 클러스터 노드에 걸쳐 데이터를 분산 처리할 수 있게 해줍니다.


[RDD](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/rdd-1.png)


### ✓ RDD의 주요 특징

- **불변성(Immutability)**: RDD는 한 번 생성되면 변경할 수 없습니다. 모든 변환(Transformation)은 기존 RDD를 바탕으로 새로운 RDD를 생성합니다.
- **내결함성(Fault-Tolerance)**: RDD는 데이터를 복구할 수 있는 lineage 정보를 저장하여, 작업 도중 일부 데이터가 손실되더라도 복구할 수 있습니다.
- **병렬 처리(Parallel Processing)**: RDD는 클러스터의 여러 노드에서 데이터를 병렬로 처리하여 대규모 데이터를 효율적으로 처리할 수 있습니다.
- **Lazy Evaluation**: RDD의 변환은 즉시 실행되지 않으며, 액션(Action)이 호출될 때까지 지연되어 실행 계획을 최적화합니다.

## 🚀 RDD의 작동 방식

### RDD의 변환(Transformations)

변환은 RDD를 입력으로 받아서 새로운 RDD를 생성하는 함수입니다. 변환은 Lazy Evaluation으로 실행되며, 그 결과는 액션이 호출될 때 계산됩니다.

- **map(func)**: 각 요소에 대해 함수 `func`를 적용하여 새로운 RDD를 생성합니다.
- **filter(func)**: 조건에 맞는 요소들만을 포함하는 새로운 RDD를 생성합니다.
- **flatMap(func)**: 각 요소를 여러 개의 요소로 매핑하여 펼쳐진(flattened) RDD를 생성합니다.

### ✓ RDD의 액션(Actions)

액션은 RDD에서 결과를 추출하거나 외부 저장소에 저장하는 연산입니다. 액션을 호출하면 변환된 RDD가 실제로 평가됩니다.

- **collect()**: 모든 요소를 드라이버 프로그램으로 반환합니다.
- **count()**: RDD의 요소 수를 셉니다.
- **saveAsTextFile(path)**: RDD를 텍스트 파일로 저장합니다.

## ⚒️ RDD와 다른 데이터 구조 비교

### ✓ RDD vs DataFrame

**DataFrame**은 구조화된 데이터의 분산 컬렉션으로, 스키마를 가지며 SQL 쿼리와 같은 방식으로 데이터를 다룰 수 있습니다. DataFrame은 RDD의 상위 추상화로 볼 수 있습니다.

- **API**: DataFrame은 SQL 쿼리와 유사한 고수준의 API를 제공하여, 데이터를 더 쉽게 조작할 수 있습니다. 반면 RDD는 저수준 API로, 더 세밀한 제어가 가능합니다.
- **성능**: DataFrame은 Catalyst 옵티마이저를 사용하여 쿼리 최적화가 가능하므로, RDD보다 일반적으로 더 높은 성능을 제공합니다.
- **타입 안정성**: RDD는 타입 안정성을 제공하지만, DataFrame은 런타임에 스키마가 적용되므로 컴파일 시 타입 검사가 불가능할 수 있습니다.

### ✓ RDD vs Dataset

**Dataset**은 DataFrame과 유사하지만, 타입 안정성과 객체 지향 프로그래밍을 지원합니다. Dataset은 RDD와 DataFrame의 장점을 결합한 데이터 구조입니다.

- **타입 안정성**: Dataset은 강력한 타입 안정성을 제공하여, 컴파일 타임에 데이터 타입을 검증할 수 있습니다.
- **성능**: Dataset은 DataFrame처럼 Catalyst 옵티마이저를 사용하여 높은 성능을 제공하지만, RDD보다 성능 면에서 더 유리할 수 있습니다.
- **유연성**: Dataset은 RDD처럼 복잡한 로직을 쉽게 구현할 수 있으며, 동시에 DataFrame처럼 고수준 API를 사용할 수 있습니다.

## 🌟 RDD의 장단점

### ✓ 장점

- **유연성**: 다양한 데이터를 처리할 수 있는 유연한 API를 제공합니다.
- **내결함성**: 데이터 손실이 발생해도 lineage를 통해 복구가 가능합니다.
- **병렬 처리**: 대규모 데이터를 분산 처리하여 성능을 극대화할 수 있습니다.

### ✓ 단점

- **성능**: DataFrame이나 Dataset에 비해 성능이 낮을 수 있습니다. (복잡한 쿼리일수록 더욱 성능 낮아짐)
- **복잡성**: 저수준 API를 사용해야 하므로, 복잡한 작업을 구현할 때 더 많은 코드가 필요할 수 있습니다.

## 🧑🏻‍💻 결론

Apache Spark의 RDD는 빅데이터 처리에 있어 강력하고 꼭 필요한 도구라고 생각됩니다.

MapReduce와 비교했을 때, 인메모리 데이터 공유는 RDD를 네트워크 및 디스크 공유보다 10~100배 더 빠르다는 말을 들어본 적 있다.

하지만 이것은 **절대적인 기준이 아니라 상대적인 성능 차이**라는 걸 생각해야한다.

**메모리 내 연산**을 하기에 반복적인 작업(머신러닝) 을 더욱 우수한 성능으로 진행할 수 있고

**dag의 최적화, Lazy Evaluation**(작업을 지연하여 실제로 액션이 호출될 때 까지 실행을 하지 않는다 -> 전체 작업 계획 최적화)

또, 우수한 커뮤니티 생태계 등의 이유로 말하는 것이라고 생각한다.

충분한 메모리 자원이 없을 땐 오히려 디스크 I/O를 사용하는 Map Reduce가 우수할 수 있기 때문이다.

상황과 환경에 맞게 데이터 처리에 적합한 도구를 선택해야 하고

그러기 위해 어떤 환경에서 어떤 도구가 효율적이고 우수한 지 공부할 필요가 확실하게 있다.

[참고로 본 사이트](https://edureka.co/blog/rdd-using-spark/#pokemon-use-case)에서 포켓몬 사용 사례를 한 번 보고 해보는 것도 이해하는데 도움이 될 거 같다.