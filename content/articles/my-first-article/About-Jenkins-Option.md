---
title: " 💬 [Jenkins] About Jenkins - Build Trigger"
description: "Jenkins 간단한 소개글입니다."
date: "2024-12-25"
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

# Jenkins Option
 

옵션은 기본적으로 SVN 사용 시 입니다.
이번엔 파이프라인에서 설정할 수 있는 여러 옵션들을 정리해보겠습니다.

## Build Trigger

###  빌드 원격으로 실행(스크립트, curl)

- 외부 스크립트 혹은 HTTP 요청으로 원격으로 빌드 시작
- URL에 인증 토큰을 추가하여 외부에서 트리거 가능.

###  Build after other projects are built (다른 프로젝트 빌드 후 빌드)

* Jenkins 작업의 빌드가 완료된 후에 다른 작업의 빌드를 자동으로 시작
* 종속 빌드 또는 후속 작업을 실행 시 사용
* 연속 작업을 자동화


###  Build periodically (주기적으로)

* 지정된 일정에 따라 정기적으로 빌드를 실행
* cron 표현식으로 실행될 시간을 정해두면 됨.
* 예약 작업에 적합


###  Poll SCM (SCM 변경 감지 후 빌드)

* SCM(소스 코드 관리) 시스템을 주기적으로 확인하여, 변경 사항이 감지되면 빌드를 실행
* 빌드 시간 지연 있음
* 주기적으로 관찰
* 리소스 낭비가 있음

###  SVN Hook 사용 (후크 스크립트 작성하기)

* SVN에 커밋이 발생하면, post-commit 후크 스크립트가 실행
* 후크 스크립트는 \*\*Jenkins 빌드를 트리거하는 HTTP 요청(curl 명령어)\*\*을 실행
* hooks 디렉터리-> post-commit 파일 생성

```
#!/bin/bash

# Jenkins 빌드 URL
JENKINS_URL="http://jenkins.example.com/job/MyJob/build?token=mybuildtoken123"

# curl 명령으로 Jenkins 빌드 트리거
curl -X POST $JENKINS_URL
```

<br>
```
chmod +x post-commit
```


