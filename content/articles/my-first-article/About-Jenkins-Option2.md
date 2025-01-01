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

## **Build 후 조치 (Post-build Actions)에서 자주 사용하는 옵션들**

| **옵션 이름** | **설명** | **사용 사례** |
| ----- | --- | ----- |
| **Archive the artifacts** | 빌드 아티팩트(결과 파일) 저장 | 빌드 결과물(.jar, .war, 로그 파일) 저장 |
| **Publish JUnit test result report** | JUnit 테스트 결과 보고서 생성 | 테스트 결과 리포트 생성 및 시각화 |
| **Publish MSTest test result report** | MSTest 테스트 결과 보고서 생성 | Windows 환경의 MSTest 결과 보고서 생성 |
| **Email Notification** | 빌드 결과를 이메일로 전송 | 빌드 성공/실패 상태를 이메일로 알림 |
| **Editable Email Notification** | 사용자 정의 이메일 알림 | 빌드 결과에 따라 맞춤 이메일 전송 |
| **Send build artifacts over SSH** | 빌드 아티팩트를 원격 서버로 전송 | 배포 서버에 빌드 결과 전송 (SSH) |
| **FTP Upload** | 빌드 결과를 FTP 서버에 업로드 | FTP 서버로 빌드 파일 전송 |
| **Slack Notifications** | 빌드 상태를 Slack에 알림 | 빌드 성공/실패 메시지를 Slack에 전송 |
| **Deploy WAR/EAR to a container** | 빌드 후 WAR/EAR 파일을 컨테이너에 배포 | 빌드 후 Tomcat 등 컨테이너에 배포 |
| **Record fingerprints of files to track usage** | 파일의 해시(지문) 기록 | 파일 해시를 기록하여 추적 및 검증 |
| **Build other projects** | 다른 프로젝트 빌드 트리거 | 특정 프로젝트 빌드를 트리거함 |
| **Trigger parameterized build on other projects** | 매개변수를 사용하여 다른 프로젝트 빌드 | 특정 매개변수와 함께 빌드 트리거 |
| **Aggregate downstream test results** | 하위 프로젝트의 테스트 결과 집계 | 하위 빌드의 테스트 결과 집계 및 보고 |
| **Set build status on GitHub commit** | GitHub 커밋에 빌드 상태 표시 | 커밋 상태(GitHub)에 빌드 결과 표시 |
| **Post to Bitbucket** | 빌드 결과를 Bitbucket에 게시 | Bitbucket Pull Request에 상태 전송 |
| **Clean up workspace** | 작업공간 정리 | 빌드 완료 후 워크스페이스 정리 |
| **Delete workspace when build is done** | 빌드 완료 후 작업공간 삭제 | 빌드 후 파일 정리 및 디스크 공간 확보 |
| **Fail the build** | 특정 조건에서 빌드 실패 처리 | 특정 조건에 따라 빌드 실패로 표시 |
| **Mark build as stable** | 빌드를 안정(stable) 상태로 표시 | 빌드 상태를 안정 상태로 설정 |
| **Mark build as failed** | 빌드를 실패로 표시 | 특정 조건에 따라 빌드를 실패로 표시 |
| **Publish Cobertura Coverage Report** | 코드 커버리지 리포트 생성 (Cobertura) | 코드 커버리지 리포트를 Jenkins에 추가 |
| **Publish HTML reports** | HTML 리포트 게시 | HTML 리포트를 Jenkins에 추가 및 보기 |
| **Publish xUnit test result report** | xUnit 테스트 결과 보고서 생성 | xUnit 테스트 결과 리포트 생성 및 시각화 |
| **Send Email Notification** | 이메일 알림 | 빌드 성공/실패 결과 이메일 전송 |
| **Send build artifacts to Amazon S3** | 빌드 아티팩트를 AWS S3에 업로드 | 빌드 후 AWS S3에 빌드 파일 업로드 |
| **Send build result to Jira** | 빌드 결과를 Jira에 게시 | 빌드 결과를 Jira 작업에 연결 |
| **Set GitHub commit status** | GitHub 커밋 상태 설정 | 빌드 상태를 GitHub Pull Request에 표시 |
| **Deploy to Kubernetes** | 빌드 후 쿠버네티스 클러스터에 배포 | 쿠버네티스 클러스터에 배포 및 업데이트 |
| **Notify Stash Instance** | Atlassian Stash에 빌드 상태 전송 | Stash에 빌드 성공/실패 메시지 전송 |
| **Run only if build succeeds** | 빌드 성공 시에만 후속 작업 실행 | 빌드 성공 시 후속 작업 실행 (배포 등) |
| **Run only if build fails** | 빌드 실패 시에만 후속 작업 실행 | 빌드 실패 시 후속 작업 실행 (알림 등) |
| **Run Groovy script** | Groovy 스크립트 실행 | 빌드 후 Groovy 스크립트 실행 |
