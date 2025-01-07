---
title: " 💬 [Jenkins] About Jenkins - 빌드 환경 설정"
description: "Jenkins 간단한 소개글입니다."
date: "2024-01-05"
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

## Delete workspace before build starts

* 빌드 되기전 워크스페이스(<span style="">*Jenkins가 소스를 다운로드하고 빌드를 실행하는 임시 디렉터리*</span>) 의 모든 파일을 삭제한다.
* 깨끗한 빌드 환경을 보장한다.
* 이전 빌드의 임시 파일, 캐시 ,로그 파일 제거
* 파일 충돌 문제가 자주 발생하거나, 깨끗한 환경에 필요할 경우 사용하자

워크스페이스의 파일/	✅ 삭제/	Jenkins 작업 디렉터리의 모든 파일 삭제
빌드의 임시 파일	/✅ 삭제/	이전 빌드에서 생성된 캐시 파일, 로그 파일 삭제
로그 파일(임시 파일)	/✅ 삭제/	이전 빌드에서 남은 빌드 로그 파일 삭제

### Patterns for files to be deleted

* 삭제할 거 패턴 잡아서 그것들만 삭제하는 것도 가능하다.

<br>
## Use secret text(s) or file(s)

* 빌드 중에 사용하는 민감한 정보를 숨길 수 있다.
* Jenkins의 Credentials (자격 증명) 시스템과 연동하여 스크립트에 노출시키지 않고 사용 가능.
* Jenkins 자격 증명 관리(Manage Credentials)에서 보안 텍스트, 키, 파일을 추가
* 빌드 환경에서 secret text/file을 사용하도록 설정
* 외부 서비스에 접속할 때 사용하자 (예: AWS, Docker Hub, GitHub, GCP, Azure)
<br>

## Add timestamps to the Console Output

* Jenkins 빌드 로그에 타임스탬프(시간 정보)를 추가
* 빌드 속도, 성능 최적화를 위해 각 단계의 소요 시간을 확인하고 싶을 때 사용하자

<br>
## Scan build log for published build scans

* Gradle 빌드에 성능 분석 도구를 추가하고 싶을 때만 사용
* Gradle을 사용하는 경우에만 유용
* 무시해도 됨

<br>
## Terminate a build if it’s stuck

* 빌드가 일정 시간 동안 응답이 없을 때 빌드를 종료
* 빌드가 무한 루프에 빠지거나 정지된 경우 자동으로 중단

## With Ant

* Apache Ant 빌드 도구