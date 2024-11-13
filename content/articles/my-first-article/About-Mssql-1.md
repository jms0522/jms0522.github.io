---
title: " ⚙️ [SQL] 프로시저 잠금 무시 "
description: "프로시저에 대하여"
date: "2024-11-13"
banner:
  src: "../../images/sql/sql-cover.png"
  alt: "sql"
  caption:
categories:
  - "SQL"
  - "Procedure"
  - "ALL"
keywords:
  - "Procedure"
  - "SQL"
---

# Procedure 잠금 제어에 대하여

오랜만입니다.

그 동안 몸이 좀 안 좋았고 너무 바빠서 작성을 잘 못했습니다.

오늘은 데이터베이스 프로시저를 생성할 때 잠금 동작을 제어하는 옵션 2가지를 살펴 보려고 합니다.

---

## WITH(NOLOCK)

**테이블 혹은 뷰**에 대해 공유 잠금을 걸지 않고 데이터를 읽는 것 입니다.

SELECT 문에서 사용 시, 해당 테이블을 다른 트랜잭션이 업데이트 하더라도 즉시 데이터를 읽을 수 있습니다.

당연하게도 다른 트랜잭션이 커밋하지 않은 데이터도 읽을 수 있어 변경이 될 가능성이 높습니다.


## SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED

트랜잭션의 격리 수준을 **'READ UNCOMMITTED'** 으로 설정합니다.

커밋되지 않은 데이터도 포함하여 읽을 수 있는 설정입니다.

해당 트랜잭션이 실행 되는 모든 SELECT문에서 실행이 됩니다.


## 사용 목적

읽기 작업이 많은 시스템에서 성능을 높이고 싶을 때 사용합니다.

무결성이 중요한 작업에선 사용을 하지 않는 게 좋습니다.


- WITH(NOLOCK):

  특정 쿼리에서만 적용하고 싶을 때 사용



- SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED:

  트랜잭션 범위 내의 모든 읽기 작업에 적용하고 싶을 때 사용.





