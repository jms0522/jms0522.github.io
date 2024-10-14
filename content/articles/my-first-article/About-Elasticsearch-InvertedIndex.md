---
title: " ⚙️ [ELK] Inverted Index ? "
description: "역색인에 대하여"
date: "2024-10-14"
banner:
  src: "../../images/database/inverted-cover.png"
  alt: "Inverted Index"
  caption: 'Photo by <u><a href="https://esbook.kimjmin.net/06-text-analysis/6.1-indexing-data">Inverted Index Guide</a></u>'
categories:
  - "ELK"
  - "Elasticsearch"
  - "ALL"
keywords:
  - "Pipeline"
  - "Elasticsearch"
  - "Inverted Index"
  - "역색인"
---


안녕하세요! 오늘은 역색인 (Inverted Index)에 대해서 알아보겠습니다.

Elasticsearch 는 역색인 구조로 알려져 있는데요, 어떤 장점이 있는걸까요?

이제부터 한 번 알아보겠습니다.


# 역색인 (Inverted Index) 이란?

문서 집합 내의 단어와 그 단어가 포함된 문서들의 목록을 맵핑 하는 방식입니다.

이런식으로 말을 하니까 뭔가 어렵게 느껴지는데 [ElasticGuide](https://esbook.kimjmin.net/06-text-analysis/6.1-indexing-data)에 나온 설명을 한번 봅시다.

일반 RDBMS에서는 

| **ID**  | **Text**                                            |
|---------|-----------------------------------------------------|
| doc1    | The quick brown fox                                 |
| doc2    | The quick brown fox jumps over the lazy dog          |
| doc3    | The quick brown fox jumps over the quick dog         |
| doc4    | Brown fox brown dog                                 |
| doc5    | Lazy jumping dog                                    |

이런 테이블에 Text에 'fox'를 찾는다고 가정하면 Text 열을 한 줄씩 내려가면서 데이터 값을 가져올텐데요.

| **ID**  | **Text**                                            | **결과**               |
|---------|-----------------------------------------------------|------------------------|
| doc1    | The quick brown **fox**                             | fox (O) → 선택         |
| doc2    | The quick brown **fox** jumps over the lazy dog     | fox (O) → 선택         |
| doc3    | The quick brown **fox** jumps over the quick dog    | fox (O) → 선택         |
| doc4    | Brown **fox** brown dog                             | fox (O) → 선택         |
| doc5    | Lazy jumping dog                                    | fox (X) → 제외         |

row 안에 데이터를 모두 읽어야 하고 'like'연산을 수행하기에 시간이 오래걸리고, 속도도 느립니다.

그렇다면 역색인 구조는 어떨까요?

| **텀(Term)** | **ID**                    | **텀(Term)** | **ID**                    |
|--------------|----------------------------|--------------|----------------------------|
| The          | doc1, doc2, doc3            | quick        | doc1, doc2, doc3            |
| brown        | doc1, doc2, doc3, doc4      | fox          | doc1, doc2, doc3, doc4      |
| jumps        | doc2, doc3                  | over         | doc2, doc3                  |
| the          | doc2, doc3                  | lazy         | doc2                        |
| dog          | doc2, doc3, doc4, doc5      | Brown        | doc4                        |
| Lazy         | doc5                        | jumping      | doc5                        |

이렇게 저장한 게 역색인 구조인데요.

역인덱스는 보통 **찾아보기 페이지**에 많이 비유를 하는 거 같습니다.

위에 표에 보이는바와 같이 추출된 키워드 (토큰화와 정규화를 거칩니다.) 를 **텀(Term)** 이라고 하고,

이를 이용해서 특정 키워드를 포함하고 있는 doc Id를 바로 얻을 수 있습니다.

또한 역색인은 Id 값을 리스트 (역색인 리스트) 형태로 저장하기에 큰 속도의 저하 없이 빠르게 검색이 가능합니다.

Term, 즉 단어가 Key가 되고 문서의 식별자 doc Id가 Value가 되는 것 입니다.

## 장점과 단점

### 장점

- 빠른 검색 속도

- 효율적인 공간의 사용으로 대규모 문서 집합에서도 효율적입니다.

- 문서가 추가 혹은 삭제 할 때 역색인 리스트를 업데이트 하기 용이합니다.

### 단점

- 초기 색인 생성 비용

- 실시간 업데이트가 힘듬

- 색인관리의 복잡함

---

## 느낀점

오늘은 Elasticsearch에 역색인에 대해 알아보았는데, Elasticsearch에 대해서 잘 몰랐던 거 같습니다.

역색인 구조라는 걸 알면서 역색인에 대해 깊이 모르고 있었네요..

열심히 공부하겠습니다.
