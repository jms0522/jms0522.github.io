---
title: " 💬 [Jenkins] About Jenkins - Build Action"
description: "Jenkins 간단한 소개글입니다."
date: "2025-01-01"
banner:
  src: "../../images/jenkins/jenkins-cover.png"
  alt: "Jenkins"
  caption: 
categories:
  - "Jenkins"
  - "ALL"
keywords:
  - "Jenkins"
  - "Pipeline"
  - "CI/CD"
---

# Jenkins Cron 표현식

*Jenkins* 크론 표현식이 크론 문법과 일부 차이가 있음

```
분(MINUTE) 시간(HOUR) 일(DOM) 월(MONTH) 요일(DOW)
```

MINUTE (분): 시간 내 분(0–59)
HOUR (시간): 하루 중 시간(0–23)
DOM (일): 월 중 일(1–31)
MONTH (월): 연 중 월(1–12)
DOW (요일): 주 중 요일(0–7, 0과 7은 일요일)

***

* '\*' : 유효한 모든 값을 지정
    * 예: \* \* \* \* \* → 매 분마다 실행
* M-N : 범위 지정
    * 예: 0-5 \* \* \* \* → 매 시간 0분부터 5분까지 실행
* M-N/X 또는 \*/X: 특정 간격으로 실행
    * 예: \*/15 \* \* \* \* → 매 15분마다 실행
* A,B,...,Z: 여러 값 나열
    * 예: 0,15,30,45 \* \* \* \* → 매 시간 0분, 15분, 30분, 45분에 실행

***

H는 해시 기반 분산 스케줄링을 의미한다.

H 기호를 사용하면 작업이 시스템 리소스를 균등하게 사용하도록 배치

***

### 별칭으로 예약이 가능하다

<br>
| **별칭** | **표현식** | **설명** |
| --- | --- | --- |
| `@yearly` | `H H 1 1 *` | 매년 1월 1일 한 번 실행 |
| `@annually` | `H H 1 1 *` | `@yearly`와 동일 |
| `@monthly` | `H H 1 * *` | 매월 1일 한 번 실행 |
| `@weekly` | `H H * * 0` | 매주 일요일 한 번 실행 |
| `@daily` | `H H * * *` | 매일 한 번 실행 |
| `@midnight` | `H H(0-2) * * *` | 매일 자정에서 2:59 사이에 한 번 실행 |
| `@hourly` | `H * * * *` | 매 시간 한 번 실행 |

<br>
<br>
Jenkins는 기본적으로 **Jenkins Master JVM**의 시간대(기본: UTC)에서 작업을 실행
이를 변경하려면 첫 줄에 `TZ=`를 사용해 시간대를 지정

* 한국 시간 설정 : TZ=Asia/Seoul