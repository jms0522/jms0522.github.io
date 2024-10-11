---
title: " 📚 [Data structure] Stack and Queue"
description: "stack과 queue에 대한 것"
date: "2024-10-11"
banner:
  src: "../../images/data-structure/structure-korean.png"
  alt: "Data structure"
  caption: 'Photo by <u><a href="https://geundung.dev/111">Image 출처</a></u>'
categories:
  - "Data structure"
  - "ALL"
keywords:
  - "Data structure"
  - "Stack"
  - "Queue"
---
# Stack 과 Quere에 대하여

## Stack

### 정의 및 특성

스택은 후입선출(LIFO, Last-In-First-Out) 방식으로 동작하는 선형 자료구조입니다. 

이는 마지막에 삽입된 데이터가 가장 먼저 제거된다는 의미입니다. 

쉽게 생각해서 책을 쌓는 방식과 유사합니다. 새로운 책을 쌓을 때는 가장 위에 올리고, 책을 꺼낼 때도 가장 위에 있는 책부터 꺼냅니다.

## 주요 연산

![Stack](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/data-structure/stack.png)

Push : 스택의 최상단에 요소 추가

Pop  : 스택의 최상단에서 요소 제거

Peak : 스택의 최상단 요소 반환 (제거 하지 않음)

IsEmpty : 스택이 비어있는지 확인

---

## Queue

### 정의 및 특성

큐는 선입선출(FIFO, First-In-First-Out) 방식으로 동작하는 선형 자료구조입니다.

 이는 먼저 삽입된 데이터가 먼저 제거된다는 의미입니다. 
 
쉽게 생각해서 줄을 서는 방식과 유사하다고 생각하면 됩니다.

 먼저 줄을 선 사람이 먼저 서비스를 받습니다.

## 주요 연산

![Queue](https://raw.githubusercontent.com/jms0522/jms0522.github.io/main/content/images/data-structure/queue.png)

Enqueue : 큐의 끝에 요소 추가

Dequeue : 큐의 앞에서 요소 제거

Front : 큐의 앞 요소 반환

Rear : 큐의 뒤 요소 반환

IsEmpty : 큐가 비어있는지 확인

## 변형 및 응용

- 우선순위 큐(Priority Queue): 각 요소에 우선순위를 부여하여 높은 우선순위를 가진 요소가 먼저 제거되는 큐.

- 덱(Deque: Double-Ended Queue): 양쪽 끝에서 요소를 추가하거나 제거할 수 있는 큐.

- 원형 큐(Circular Queue): 배열을 사용한 큐에서 공간을 효율적으로 활용하기 위해 원형으로 연결된 큐.

---

## 알고리즘에서의 사용

	•	스택

        •	깊이 우선 탐색(DFS, Depth-First Search): 그래프나 트리의 탐색에서 경로를 추적하는 데 사용.

        •	재귀 알고리즘의 구현: 함수 호출을 추적하고 관리.

        •	백트래킹 알고리즘: 가능한 모든 해를 탐색하는 알고리즘에서 상태를 추적.

	•   큐

        •	너비 우선 탐색(BFS, Breadth-First Search): 그래프나 트리의 탐색에서 레벨별로 탐색.

        •	다익스트라 알고리즘(Dijkstra’s Algorithm): 최단 경로를 찾는 알고리즘에서 우선순위 큐 사용.

        •	위상 정렬(Topological Sorting): 방향성 비순환 그래프에서의 노드 정렬.

---

오늘은 자료구조에서 기본이라고 할 수 있는 두 구조를 공부해보았습니다.

자료구조와 알고리즘도 확실히 공부해서 더 좋은 코드를 짤 수 있는 그 날까지 열심히 하겠습니다.😀